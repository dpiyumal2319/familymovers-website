"use server";

import { z } from "zod";

const quoteSubmissionSchema = z.object({
  serviceTypes: z.array(z.string()).min(1),
  movingFrom: z.string().min(5),
  movingTo: z.string().min(5),
  floorLevelFrom: z.string().min(1),
  floorLevelTo: z.string().min(1),
  dateFlexibility: z.string().min(1),
  specificDate: z.string().nullable().optional(),
  dateRangeFrom: z.string().nullable().optional(),
  dateRangeTo: z.string().nullable().optional(),
  preferredTime: z.string().nullable().optional(),
  helpRequired: z.string().min(1),
  additionalServices: z.array(z.string()),
  moreDetails: z.string().nullable().optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  termsAccepted: z.literal(true),
});

export type QuoteSubmissionPayload = z.infer<typeof quoteSubmissionSchema>;

export interface QuoteSubmissionResult {
  success: boolean;
  message: string;
}

const serviceTypeLabels: Record<string, string> = {
  "home-move": "Home Move",
  "office-move": "Office Move",
  "storage-move": "Storage Move",
  "trademe-pickup": "Trademe Pickup",
  "single-items": "Single Items",
  "piano-move": "Piano Move",
  "motorcycle-farm": "Vehicle Transport",
  "rubbish-removal": "Rubbish Removal",
  "furniture-removal": "Furniture Only",
  "truck-rental": "Truck Rental",
};

const helpOptionLabels: Record<string, string> = {
  "no-help": "No Help Needed",
  "driver-only": "Driver Helping",
  "driver-plus-1": "Driver + 1 Helper",
  "driver-plus-2": "Driver + 2 Helpers",
  "truck-only": "Just the Truck",
};

const additionalServiceLabels: Record<string, string> = {
  "packing-service": "Packing Service",
  "packing-materials": "Packing Materials",
  "storage-facility": "Storage Facility",
  "furniture-assembly": "Furniture Assembly/Disassembly",
  "junk-removal": "Junk Removal",
  "house-cleaning": "House & Carpet Cleaning",
  "garden-cleaning": "Garden Cleaning & Green Waste",
  "lawn-mowing": "Lawn Mowing",
};

const formatDate = (value?: string | null) => {
  if (!value) {
    return "Not specified";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-NZ", {
    dateStyle: "long",
  }).format(date);
};

const toLabel = (value: string, map: Record<string, string>) => map[value] ?? value;

const joinOrFallback = (items: string[], map: Record<string, string>, fallback: string) => {
  if (items.length === 0) {
    return fallback;
  }

  return items.map((item) => toLabel(item, map)).join(", ");
};

const buildTextBody = (payload: QuoteSubmissionPayload) => {
  const scheduleLine =
    payload.dateFlexibility === "specific"
      ? `Specific date: ${formatDate(payload.specificDate)}${payload.preferredTime ? ` at ${payload.preferredTime}` : ""}`
      : payload.dateFlexibility === "range"
        ? `Date range: ${formatDate(payload.dateRangeFrom)} to ${formatDate(payload.dateRangeTo)}`
        : payload.dateFlexibility === "asap"
          ? "Date preference: ASAP (as soon as possible)"
          : "Date preference: Flexible";

  return [
    "New quote request received",
    "",
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "",
    `Services: ${joinOrFallback(payload.serviceTypes, serviceTypeLabels, "Not provided")}`,
    `Move from: ${payload.movingFrom} (${payload.floorLevelFrom})`,
    `Move to: ${payload.movingTo} (${payload.floorLevelTo})`,
    scheduleLine,
    `Help required: ${toLabel(payload.helpRequired, helpOptionLabels)}`,
    `Additional services: ${joinOrFallback(payload.additionalServices, additionalServiceLabels, "None")}`,
    "",
    `More details: ${payload.moreDetails?.trim() ? payload.moreDetails : "None"}`,
  ].join("\n");
};

const buildHtmlBody = (payload: QuoteSubmissionPayload) => {
  const scheduleLine =
    payload.dateFlexibility === "specific"
      ? `Specific date: ${formatDate(payload.specificDate)}${payload.preferredTime ? ` at ${payload.preferredTime}` : ""}`
      : payload.dateFlexibility === "range"
        ? `Date range: ${formatDate(payload.dateRangeFrom)} to ${formatDate(payload.dateRangeTo)}`
        : payload.dateFlexibility === "asap"
          ? "Date preference: ASAP (as soon as possible)"
          : "Date preference: Flexible";

  return `
    <h2>New quote request received</h2>
    <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <hr />
    <p><strong>Services:</strong> ${joinOrFallback(payload.serviceTypes, serviceTypeLabels, "Not provided")}</p>
    <p><strong>Move from:</strong> ${payload.movingFrom} (${payload.floorLevelFrom})</p>
    <p><strong>Move to:</strong> ${payload.movingTo} (${payload.floorLevelTo})</p>
    <p><strong>${scheduleLine}</strong></p>
    <p><strong>Help required:</strong> ${toLabel(payload.helpRequired, helpOptionLabels)}</p>
    <p><strong>Additional services:</strong> ${joinOrFallback(payload.additionalServices, additionalServiceLabels, "None")}</p>
    <hr />
    <p><strong>More details:</strong><br />${payload.moreDetails?.trim() ? payload.moreDetails : "None"}</p>
  `;
};

const buildSubject = (payload: QuoteSubmissionPayload) => {
  const name = `${payload.firstName} ${payload.lastName}`;

  if (payload.dateFlexibility === "asap") {
    return `URGENT ASAP Quote Request - ${name}`;
  }

  return `New Quote Request - ${name}`;
};

export async function submitQuoteRequestAction(
  input: QuoteSubmissionPayload
): Promise<QuoteSubmissionResult> {
  const parsed = quoteSubmissionSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid quote form data. Please review the form and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FORM_FROM_EMAIL;
  const toEmail = process.env.QUOTE_FORM_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Missing required email environment variables for quote form submission.");
    return {
      success: false,
      message: "Quote service is temporarily unavailable. Please call us directly.",
    };
  }

  const payload = parsed.data;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        cc: process.env.QUOTE_FORM_CC_EMAIL
          ? [process.env.QUOTE_FORM_CC_EMAIL]
          : undefined,
        reply_to: payload.email,
        subject: buildSubject(payload),
        text: buildTextBody(payload),
        html: buildHtmlBody(payload),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Failed to send quote email:", response.status, errorBody);
      return {
        success: false,
        message: "Failed to send your request. Please try again shortly.",
      };
    }

    return {
      success: true,
      message: "Quote request submitted. We will contact you shortly.",
    };
  } catch (error) {
    console.error("Unexpected quote submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again shortly.",
    };
  }
}
