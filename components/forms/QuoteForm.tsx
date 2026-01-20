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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const quoteFormSchema = z.object({
  // Personal Information
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),

  // Move Details
  movingFrom: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  movingTo: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  movingDate: z.date({
    message: "Please select a moving date.",
  }),

  // Property Information
  propertyType: z.enum(["apartment", "house", "office", "storage"], {
    message: "Please select a property type.",
  }),
  bedrooms: z.string({
    message: "Please select number of bedrooms.",
  }),

  // Additional Services
  additionalServices: z.array(z.string()),

  // Special Requirements
  specialRequirements: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const additionalServicesOptions = [
  {
    id: "packing",
    label: "Packing Services",
    description: "Professional packing of your belongings",
  },
  {
    id: "unpacking",
    label: "Unpacking Services",
    description: "Unpacking and organizing at destination",
  },
  {
    id: "storage",
    label: "Storage Solutions",
    description: "Short or long-term storage options",
  },
  {
    id: "assembly",
    label: "Furniture Assembly/Disassembly",
    description: "Assembly and disassembly of furniture",
  },
  {
    id: "cleaning",
    label: "Post-Move Cleaning",
    description: "Cleaning services after moving",
  },
];

interface QuoteFormProps {
  className?: string;
}

export function QuoteForm({ className }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      movingFrom: "",
      movingTo: "",
      additionalServices: [],
      specialRequirements: "",
    },
  });

  async function onSubmit(data: QuoteFormValues) {
    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission
      // For now, simulate API call
      console.log("Quote form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Quote request submitted!", {
        description:
          "We'll review your request and get back to you within minutes.",
      });

      form.reset();
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

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      <Input type="tel" placeholder="+64 21 234 5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Move Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Move Details</h3>

            <FormField
              control={form.control}
              name="movingFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Moving From</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Current address (e.g., 123 Main St, Auckland)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="movingTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Moving To</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Destination address (e.g., 456 Queen St, Auckland)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="movingDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preferred Moving Date</FormLabel>
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
                    <PopoverContent className="w-auto p-0" align="start">
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

          {/* Property Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Property Information</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="storage">Storage Unit</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Bedrooms</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4 Bedrooms</SelectItem>
                        <SelectItem value="5+">5+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Additional Services</h3>
            <FormField
              control={form.control}
              name="additionalServices"
              render={() => (
                <FormItem>
                  <div className="space-y-4">
                    {additionalServicesOptions.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="additionalServices"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-lg border p-4"
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
                              <div className="space-y-1 leading-none">
                                <FormLabel className="font-medium">
                                  {service.label}
                                </FormLabel>
                                <FormDescription>
                                  {service.description}
                                </FormDescription>
                              </div>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Special Requirements Section */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Let us know if you have any special items (piano, antiques, fragile items) or specific requirements..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Include any details about large or fragile items, access
                    restrictions, parking information, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Free Quote"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
