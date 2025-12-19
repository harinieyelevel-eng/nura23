import { Target, Eye, Award, Heart, Lightbulb, HandHeart, Sparkles } from "lucide-react";
import aboutVision from "@/assets/about-vision.png";
import aboutPhilosophy from "@/assets/about-philosophy.png";
import nuraLogoNew from "@/assets/nura-logo-new.png";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="About NURA23 | Advanced Skin, Hair & Foot Reflexology Clinic in Kodambakkam, Chennai"
        description="Discover NURA23, a state-of-the-art skin, hair and wellness clinic in Kodambakkam, Chennai, led by qualified experts providing customized dermatology, aesthetic and holistic treatments in a safe, technology-driven environment."
      />
      {/* Our Story */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nura23 was founded with a simple vision — to redefine beauty through personalized skin care,
                advanced aesthetics, and wellness from within.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Nura23 Skin & Wellness, we believe that true beauty and wellness come from harmony between
                the body, mind, and spirit. Established with a vision to empower individuals to look confident,
                feel radiant, and live healthier, Nura23 has become a trusted destination for advanced skincare,
                hair treatments, body wellness, and holistic therapies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clinic is designed to combine modern science with traditional healing practices, offering
                personalized solutions that cater to each individual's unique needs. From rejuvenating facials
                and anti-aging therapies to advanced hair treatments, body contouring, stress relief, and nutrition
                guidance, we provide comprehensive wellness solutions under one roof.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={nuraLogoNew}
                alt="NURA23 Aesthetic & Wellness Centre"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to redefine wellness and beauty experiences by blending cutting-edge science
                  with holistic care, ensuring every client leaves feeling rejuvenated, confident, and empowered.
                  At Nura23, we see wellness as a journey, not a destination, and we are committed to guiding
                  you every step of the way.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Our Philosophy</h2>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Personalized skin care plans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Non-invasive and advanced aesthetic solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Holistic wellness for mind, body & soul</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Safe, professional, and result-oriented care</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={aboutVision}
                alt="Professional Skincare Treatment"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src={aboutPhilosophy}
                alt="Wellness Consultation"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 w-full md:w-80">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground">Excellence</h3>
              <p className="text-center text-muted-foreground">
                We provide world-class treatments and services tailored to individual needs.
              </p>
            </div>
            <div className="space-y-4 w-full md:w-80">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground">Integrity</h3>
              <p className="text-center text-muted-foreground">
                We maintain the highest ethical standards in all our consultations and therapies.
              </p>
            </div>
            <div className="space-y-4 w-full md:w-80">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground">Innovation</h3>
              <p className="text-center text-muted-foreground">
                We continuously adopt the latest technologies and wellness techniques for better results.
              </p>
            </div>
            <div className="space-y-4 w-full md:w-80">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground">Holistic Care</h3>
              <p className="text-center text-muted-foreground">
                We treat the whole person, not just symptoms, focusing on long-term health and well-being.
              </p>
            </div>
            <div className="space-y-4 w-full md:w-80">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground">Client-Centric</h3>
              <p className="text-center text-muted-foreground">
                Your comfort, safety, and satisfaction are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
