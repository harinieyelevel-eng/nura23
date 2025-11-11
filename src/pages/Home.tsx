import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Leaf, ShieldCheck } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import AppointmentDialog from "@/components/AppointmentDialog";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroClinicInterior from "@/assets/hero-clinic-interior.jpg";
import heroTreatmentSession from "@/assets/hero-treatment-session.jpg";
import heroConsultation from "@/assets/hero-consultation.jpg";
import heroSpaRoom from "@/assets/hero-spa-room.jpg";
import heroClinicLobby from "@/assets/hero-clinic-lobby.jpg";
import heroPharmacy from "@/assets/hero-pharmacy.jpg";
import skinImage from "@/assets/service-aesthetics-1.png";
import hairImage from "@/assets/service-hair.png";
import aestheticsImage from "@/assets/service-aesthetics-2.png";
import wellnessImage from "@/assets/service-wellness.png";

const Home = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const heroSlides = [
    {
      image: heroClinicInterior,
      title: "Welcome to NURA23",
      subtitle: "Your Beauty Wellness, Our Passion"
    },
    {
      image: heroTreatmentSession,
      title: "Expert Care & Treatments",
      subtitle: "Personalized skincare solutions for radiant, healthy skin"
    },
    {
      image: heroConsultation,
      title: "Professional Consultation",
      subtitle: "Certified dermatologists and wellness professionals"
    },
    {
      image: heroSpaRoom,
      title: "Luxury Wellness Experience",
      subtitle: "State-of-the-art facilities for your comfort"
    },
    {
      image: heroClinicLobby,
      title: "Modern Clinic Environment",
      subtitle: "Welcoming spaces designed for your comfort"
    },
    {
      image: heroPharmacy,
      title: "Premium Beauty Products",
      subtitle: "Curated selection of wellness and skincare essentials"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen">
        <Carousel
          className="w-full h-full"
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
                    }}
                  />
                  <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <Button size="lg" asChild className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm">
                        <Link to="/services">Explore Services</Link>
                      </Button>
                      <Button 
                        size="lg" 
                        onClick={() => setAppointmentOpen(true)}
                        className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-secondary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              NURA23 Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nura23, we are passionate about guiding our clients toward healthier skin and balanced living. 
              Our mission is to provide safe, customized, and effective skincare and body therapies that enhance 
              beauty, promote healing, and inspire confidence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your journey to glowing skin, timeless beauty, and inner wellness begins here. At Nura23 Skin Care, 
              Aesthetics & Wellness, we combine advanced aesthetic technology, holistic wellness principles, and 
              personalized care to help you look and feel your absolute best.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Nura23?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Expert Team</h3>
              <p className="text-muted-foreground">
                Certified dermatologists, aestheticians, nutritionists, and wellness professionals
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Advanced Technology</h3>
              <p className="text-muted-foreground">
                State-of-the-art equipment for safe, effective, and non-invasive treatments
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Personalized Care</h3>
              <p className="text-muted-foreground">
                Customized plans based on your skin type, hair condition, and wellness goals
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Holistic Approach</h3>
              <p className="text-muted-foreground">
                Combining aesthetics, health, and well-being for visible and lasting results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From rejuvenating facials and skin tightening to body contouring and wellness therapies, 
              we create tailored experiences that enhance your natural beauty.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon={Sparkles}
              title="Skin Care"
              description="Customized facials, acne treatments, anti-aging therapies, and skin brightening solutions for radiant, healthy skin."
              link="/services/skin-care"
              image={skinImage}
            />
            <ServiceCard
              icon={Heart}
              title="Aesthetics"
              description="Laser hair reduction, RF skin tightening, body contouring, and advanced aesthetic treatments."
              link="/services/aesthetics"
              image={aestheticsImage}
            />
            <ServiceCard
              icon={Sparkles}
              title="Hair Treatment"
              description="Scalp detox, hair rejuvenation therapy, and advanced treatments for healthy, strong hair."
              link="/services/hair-treatment"
              image={hairImage}
            />
            <ServiceCard
              icon={Leaf}
              title="Wellness"
              description="Holistic wellness therapies, stress management, body detox, and nutritional counseling for complete well-being."
              link="/services/wellness"
              image={wellnessImage}
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your consultation today and discover personalized care that brings out your natural beauty.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setAppointmentOpen(true)}
          >
            Book Appointment Now
          </Button>
        </div>
      </section>

      <AppointmentDialog 
        open={appointmentOpen} 
        onOpenChange={setAppointmentOpen} 
      />
    </div>
  );
};

export default Home;
