
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  profession: z.string().min(2, {
    message: "Please specify your profession.",
  }),
  message: z.string().optional(),
});

const CaregiverForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      profession: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/info@connectu.health', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          _subject: `ConnectU Interest: ${values.name} (${values.profession})`,
        })
      });
      
      if (response.ok) {
        console.log('Form submitted successfully');
        toast({
          title: "Form submitted!",
          description: "Thank you for your interest. We'll be in touch soon.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-connectu-purple/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-connectu-purple/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-4 text-connectu-purple">Join Our Community</h3>
        <p className="mb-6 text-gray-600">Fill in your details to learn more about how ConnectU can enhance your practice:</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} className="border-connectu-purple/30 focus-visible:ring-connectu-purple" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} className="border-connectu-purple/30 focus-visible:ring-connectu-purple" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Profession/Specialty</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Nutritionist, Fitness Trainer, Therapist" {...field} className="border-connectu-purple/30 focus-visible:ring-connectu-purple" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share details about your practice and how you plan to utilize ConnectU"
                      className="resize-none border-connectu-purple/30 focus-visible:ring-connectu-purple"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-connectu-purple hover:bg-connectu-lightpurple text-white font-medium shadow-md"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CaregiverForm;
