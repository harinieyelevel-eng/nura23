import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import Link from "react-router-dom"; // Assuming Link is used or needed, if not just remove or keep existing imports
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://automate.eyelevelstudio.in/webhook/nura23-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Network error");
      toast({
        title: "Appointment Request Received!",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Please try again.", variant: "destructive" });
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Contact NURA23 | Best Skin & Hair Clinic in Kodambakkam, Chennai"
        description="Book an appointment at NURA23 in Kodambakkam, Chennai for expert skin, hair and wellness treatments. Call us at +91 75500 44699 for consultations and inquiries."
      />
      {/* Contact Information & Form */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to answer your questions and help you begin your wellness journey.
                  Reach out to us through any of the following methods.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
                      <a
                        href="tel:+917550044699"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 7550044699
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                      <a
                        href="mailto:info@nura23.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@nura23.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Location</h3>
                      <p className="text-muted-foreground">
                        Chennai, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Working Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Book an Appointment</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="skincare">Skin Care</option>
                        <option value="aesthetics">Aesthetics</option>
                        <option value="hair">Hair Treatment</option>
                        <option value="wellness">Wellness</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your concerns or questions..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Location */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Find Us</h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.96585643148245!2d80.22688830479595!3d13.048932698435499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670079ef7369%3A0x1b28a49fa131e127!2sJockey%20Exclusive%20Store!5e0!3m2!1sen!2sin!4v1765006482814!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NURA23 Clinic Location"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://maps.app.goo.gl/dUVy4ena4evaXViy8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:underline"
              >
                <MapPin className="h-5 w-5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
