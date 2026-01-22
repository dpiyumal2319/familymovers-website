"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  Loader2,
  CalendarIcon,
  ArrowLeft,
  ArrowRight,
  Home,
  Building2,
  Warehouse,
  ShoppingCart,
  Package,
  Truck,
  Piano,
  Bike,
  Trash2,
  Armchair,
  Info,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  FormStepIndicator,
  ServiceTypeCard,
  HelpOptionCard,
  FloorLevelSelector,
  DateFlexibilitySelector,
} from "./quote-form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Service types from WordPress
const serviceTypes = [
  {
    id: "home-move",
    title: "Home Move",
    description: "Residential moving services",
    icon: Home,
  },
  {
    id: "office-move",
    title: "Office Move",
    description: "Commercial relocations",
    icon: Building2,
  },
  {
    id: "storage-move",
    title: "Storage Move",
    description: "To or from storage",
    icon: Warehouse,
  },
  {
    id: "trademe-pickup",
    title: "Trademe Pickup",
    description: "We collect your purchases",
    icon: ShoppingCart,
  },
  {
    id: "single-items",
    title: "Single Items",
    description: "Few items delivery",
    icon: Package,
  },
  {
    id: "piano-move",
    title: "Piano Move",
    description: "Specialized piano transport",
    icon: Piano,
  },
  {
    id: "motorcycle-farm",
    title: "Vehicle Transport",
    description: "Motorcycles & equipment",
    icon: Bike,
  },
  {
    id: "rubbish-removal",
    title: "Rubbish Removal",
    description: "Junk clearance services",
    icon: Trash2,
  },
  {
    id: "furniture-removal",
    title: "Furniture Only",
    description: "Furniture removals",
    icon: Armchair,
  },
  {
    id: "truck-rental",
    title: "Truck Rental",
    description: "Rent our vehicles",
    icon: Truck,
  },
];

// Help options
const helpOptions = [
  {
    id: "no-help",
    title: "No Help Needed",
    description: "Driver will drive only, not load or unload items",
    driverHelps: false,
    helperCount: 0,
    truckOnly: false,
  },
  {
    id: "driver-only",
    title: "Driver Helping",
    description: "Driver will load and unload your items",
    driverHelps: true,
    helperCount: 0,
    truckOnly: false,
  },
  {
    id: "driver-plus-1",
    title: "Driver + 1 Helper",
    description: "Driver with one helper will load/unload",
    driverHelps: true,
    helperCount: 1,
    truckOnly: false,
  },
  {
    id: "driver-plus-2",
    title: "Driver + 2 Helpers",
    description: "Driver with two helpers will load/unload",
    driverHelps: true,
    helperCount: 2,
    truckOnly: false,
  },
  {
    id: "truck-only",
    title: "Just the Truck",
    description: "No driver or helpers required",
    driverHelps: false,
    helperCount: 0,
    truckOnly: true,
  },
];

// Additional services
const additionalServicesOptions = [
  { id: "packing-service", label: "Packing Service" },
  { id: "packing-materials", label: "Packing Materials" },
  { id: "storage-facility", label: "Storage Facility" },
  { id: "furniture-assembly", label: "Furniture Assembly/Disassembly" },
  { id: "junk-removal", label: "Junk Removal" },
  { id: "house-cleaning", label: "House & Carpet Cleaning" },
  { id: "garden-cleaning", label: "Garden Cleaning & Green Waste" },
  { id: "lawn-mowing", label: "Lawn Mowing" },
];

// Form schema
const quoteFormSchema = z.object({
  // Step 1: Service Selection
  serviceTypes: z.array(z.string()).min(1, {
    message: "Please select at least one service type.",
  }),

  // Step 2: Location Details
  movingFrom: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  movingTo: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  floorLevelFrom: z.string().min(1, {
    message: "Please select floor level.",
  }),
  floorLevelTo: z.string().min(1, {
    message: "Please select floor level.",
  }),

  // Step 3: Schedule & Help
  dateFlexibility: z.string().min(1, {
    message: "Please select your date preference.",
  }),
  specificDate: z.date().optional(),
  dateRangeFrom: z.date().optional(),
  dateRangeTo: z.date().optional(),
  preferredTime: z.string().optional(),
  helpRequired: z.string().min(1, {
    message: "Please select help option.",
  }),
  additionalServices: z.array(z.string()),
  moreDetails: z.string().optional(),

  // Step 4: Contact Information
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  className?: string;
}

export function QuoteForm({ className }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceTypes: [],
      movingFrom: "",
      movingTo: "",
      floorLevelFrom: "ground",
      floorLevelTo: "ground",
      dateFlexibility: "flexible",
      helpRequired: "driver-only",
      additionalServices: [],
      moreDetails: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      termsAccepted: false,
    },
    mode: "onChange",
  });

  const totalSteps = 4;

  // Validate current step fields
  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof QuoteFormValues)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["serviceTypes"];
        break;
      case 2:
        fieldsToValidate = [
          "movingFrom",
          "movingTo",
          "floorLevelFrom",
          "floorLevelTo",
        ];
        break;
      case 3:
        fieldsToValidate = ["dateFlexibility", "helpRequired"];
        break;
      case 4:
        fieldsToValidate = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "termsAccepted",
        ];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  async function onSubmit(data: QuoteFormValues) {
    setIsSubmitting(true);

    try {
      console.log("Quote form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Quote request submitted!", {
        description:
          "We'll review your request and get back to you within minutes.",
      });

      form.reset();
      setCurrentStep(1);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit quote request", {
        description:
          "Please try again or contact us directly via phone or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Toggle service type selection
  const toggleServiceType = (serviceId: string) => {
    const current = form.getValues("serviceTypes");
    if (current.includes(serviceId)) {
      form.setValue(
        "serviceTypes",
        current.filter((id) => id !== serviceId),
        { shouldValidate: true }
      );
    } else {
      form.setValue("serviceTypes", [...current, serviceId], {
        shouldValidate: true,
      });
    }
  };

  const dateFlexibility = form.watch("dateFlexibility");
  const selectedServices = form.watch("serviceTypes");

  return (
    <TooltipProvider>
      <div className={className}>
        <FormStepIndicator currentStep={currentStep} />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    What do you need help with?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select all services that apply to your move
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="serviceTypes"
                  render={() => (
                    <FormItem>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {serviceTypes.map((service) => (
                          <ServiceTypeCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            selected={selectedServices.includes(service.id)}
                            onSelect={toggleServiceType}
                          />
                        ))}
                      </div>
                      <FormMessage className="mt-4" />
                    </FormItem>
                  )}
                />

                {/* Trademe Tooltip */}
                {selectedServices.includes("trademe-pickup") && (
                  <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-primary">
                        Trademe Pickup Service
                      </p>
                      <p className="text-muted-foreground">
                        We&apos;ll pick up your Trademe purchases and deliver
                        them directly to you. Just provide the seller&apos;s
                        address in the next step.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Location Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Where are we moving from and to?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Provide the pickup and delivery locations
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="movingFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 123 Queen Street, Auckland CBD"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="floorLevelFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FloorLevelSelector
                        label="Pickup Floor Level"
                        value={field.value}
                        onChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="movingTo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., 456 Victoria Street, Hamilton"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="floorLevelTo"
                  render={({ field }) => (
                    <FormItem>
                      <FloorLevelSelector
                        label="Delivery Floor Level"
                        value={field.value}
                        onChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 3: Schedule & Help */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Schedule & Assistance
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose your preferred timing and level of help
                  </p>
                </div>

                {/* Date Flexibility */}
                <FormField
                  control={form.control}
                  name="dateFlexibility"
                  render={({ field }) => (
                    <FormItem>
                      <DateFlexibilitySelector
                        value={field.value}
                        onChange={field.onChange}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Specific Date */}
                {dateFlexibility === "specific" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="specificDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Select Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <FormControl>
                            <Input
                              type="time"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Date Range */}
                {dateFlexibility === "range" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dateRangeFrom"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>From Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>From</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateRangeTo"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>To Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>To</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Help Required */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FormLabel>Help Required</FormLabel>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          <strong>Driver:</strong> Operates the truck.
                        </p>
                        <p>
                          <strong>Helpers:</strong> Assist with
                          loading/unloading.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <FormField
                    control={form.control}
                    name="helpRequired"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {helpOptions.map((option) => (
                            <HelpOptionCard
                              key={option.id}
                              id={option.id}
                              title={option.title}
                              description={option.description}
                              driverHelps={option.driverHelps}
                              helperCount={option.helperCount}
                              truckOnly={option.truckOnly}
                              selected={field.value === option.id}
                              onSelect={field.onChange}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Services */}
                <FormField
                  control={form.control}
                  name="additionalServices"
                  render={() => (
                    <FormItem>
                      <FormLabel>Additional Services (Optional)</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {additionalServicesOptions.map((service) => (
                          <FormField
                            key={service.id}
                            control={form.control}
                            name="additionalServices"
                            render={({ field }) => (
                              <FormItem
                                key={service.id}
                                className="flex flex-row items-center space-x-2 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            service.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== service.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal cursor-pointer">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* More Details */}
                <FormField
                  control={form.control}
                  name="moreDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special items (piano, antiques), access restrictions, parking info, or other details..."
                          className="min-h-25 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Your Contact Details
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    How can we reach you with your quote?
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+64 21 234 5678"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms and Conditions */}
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I agree to the{" "}
                          <a
                            href="/terms-conditions"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </FormLabel>
                        <FormDescription>
                          By submitting this form, you consent to us contacting
                          you regarding your quote.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormMessage>
                  {form.formState.errors.termsAccepted?.message}
                </FormMessage>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={cn(currentStep === 1 && "invisible")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {currentStep < totalSteps ? (
                <Button type="button" onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Free Quote"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </TooltipProvider>
  );
}
