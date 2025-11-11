import ServiceCard from "@/components/ServiceCard";
import { Sparkles, Zap, Scissors, Heart } from "lucide-react";
import skinImage from "@/assets/service-aesthetics-1.png";
import hairImage from "@/assets/service-hair.png";
import aestheticsImage from "@/assets/service-aesthetics-2.png";
import wellnessImage from "@/assets/service-wellness.png";

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Services Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              icon={Sparkles}
              title="Skin Care"
              description="Signature facials, acne & scar treatments, anti-aging therapy, skin brightening, Hydrafacial, and oxygen facial treatments for radiant, healthy skin."
              link="/services/skin-care"
              image={skinImage}
            />
            <ServiceCard
              icon={Zap}
              title="Aesthetics"
              description="Laser hair reduction, RF skin tightening & lifting, body contouring, PRP therapy, microneedling, chemical peels, and Botox & fillers."
              link="/services/aesthetics"
              image={aestheticsImage}
            />
            <ServiceCard
              icon={Scissors}
              title="Hair Treatment"
              description="Scalp detox & rejuvenation therapy, hair growth treatments, and advanced solutions for healthy, strong, and beautiful hair."
              link="/services/hair-treatment"
              image={hairImage}
            />
            <ServiceCard
              icon={Heart}
              title="Wellness"
              description="Holistic massages, aromatherapy, reflexology, detox programs, nutrition guidance, and stress relief therapies for complete well-being."
              link="/services/wellness"
              image={wellnessImage}
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Skin Care */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Skin Care Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Signature Facials</h3>
                  <p className="text-muted-foreground">
                    Customized facials for hydration, glow, and rejuvenation. Including HydraGlow, 
                    Detox Radiance, Gold Rejuvenation, and Collagen Renewal facials.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Acne & Scar Treatments</h3>
                  <p className="text-muted-foreground">
                    Targeted solutions to clear, heal, and renew. Including acne control peels, 
                    laser scar reduction, and microneedling with PRP.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Anti-Aging Therapy</h3>
                  <p className="text-muted-foreground">
                    Collagen-boosting and wrinkle-reducing treatments including HIFU, RF skin tightening, 
                    and vitamin infusion facials for youthful skin.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Skin Brightening</h3>
                  <p className="text-muted-foreground">
                    Even tone and radiant glow with laser pigment correction, brightening peels, 
                    and glutathione IV therapy.
                  </p>
                </div>
              </div>
            </div>

            {/* Aesthetics */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Aesthetic Treatments</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Laser Hair Reduction</h3>
                  <p className="text-muted-foreground">
                    Smooth, hair-free skin with painless laser technology. Safe and effective 
                    for all skin types with FDA-approved systems.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">RF Skin Tightening</h3>
                  <p className="text-muted-foreground">
                    Non-surgical facelift for firmer, youthful skin. Stimulates collagen and 
                    improves elasticity without downtime.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Body Contouring</h3>
                  <p className="text-muted-foreground">
                    Sculpt your silhouette safely with RF technology. Reduces stubborn fat and 
                    tightens loose skin naturally.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Botox & Fillers</h3>
                  <p className="text-muted-foreground">
                    Enhance your natural features with precision. Restores volume, smooths wrinkles, 
                    and defines facial contours beautifully.
                  </p>
                </div>
              </div>
            </div>

            {/* Hair */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Scissors className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Hair Treatment Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Scalp Detox & Rejuvenation</h3>
                  <p className="text-muted-foreground">
                    Revitalize your hair from the roots. Deep cleansing therapy that removes buildup, 
                    stimulates circulation, and strengthens hair roots.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Hair Growth Therapy</h3>
                  <p className="text-muted-foreground">
                    Advanced treatments to promote natural hair growth, reduce hair fall, and 
                    improve hair density and thickness.
                  </p>
                </div>
              </div>
            </div>

            {/* Wellness */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Wellness Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Holistic Spa Therapy</h3>
                  <p className="text-muted-foreground">
                    Traditional massages, aromatherapy, and reflexology sessions that promote relaxation, 
                    stress relief, and improved circulation for total well-being.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Detox & Rejuvenation</h3>
                  <p className="text-muted-foreground">
                    Body detox programs designed to remove toxins, boost metabolism, and enhance 
                    overall vitality for a healthier you.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Nutrition & Lifestyle Consultation</h3>
                  <p className="text-muted-foreground">
                    Personalized guidance on nutrition, diet, and lifestyle changes that support 
                    skin health, wellness, and sustainable beauty from within.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Stress Relief Programs</h3>
                  <p className="text-muted-foreground">
                    Tailored therapy sessions combining meditation, breathing techniques, and holistic 
                    treatments to reduce stress and improve mental clarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Experience Professional Care?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your consultation today and let our experts create a personalized treatment plan for you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Book Appointment Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
