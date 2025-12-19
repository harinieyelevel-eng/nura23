import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Target, Clock, Lightbulb, Droplets } from "lucide-react";
import skincareLuxury from "@/assets/skincare-facial-1.png";
import facialSignature from "@/assets/signature-facial-new.png";
import acneTreatment from "@/assets/skincare-laser.png";
import antiAging from "@/assets/skincare-facial-3.png";
import brightening from "@/assets/skincare-brightening-new.png";
import hydrafacial from "@/assets/hydrafacial-new.png";
import treatmentHero from "@/assets/skincare-treatment-hero.png";
import SEO from "@/components/SEO";

const SkinCare = () => {
  return <div className="min-h-screen pt-16">
    <SEO
      title="Acne, Pigmentation & Skin Lightening Treatment in Chennai, Foot Reflexology | NURA23"
      description="NURA23 offers advanced acne and skin treatment in Chennai, including scar reduction, pigmentation correction, laser skin treatment and skin lightening procedures customized to brighten, clear and rejuvenate your skin safely."
    />
    {/* Header */}
    <section className="py-20 bg-gradient-to-b from-secondary/10 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Skin Care Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your skin deserves more than a routine — it deserves a ritual. Our signature treatments are crafted to deliver
            deep hydration, cell renewal, and an instant radiant glow.
          </p>
        </div>
      </div>
    </section>

    {/* Feature Image */}
    <section className="py-0 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <img src={treatmentHero} alt="Professional skin care treatment session" className="w-full h-[500px] object-cover rounded-lg shadow-xl" />
        </div>
      </div>
    </section>

    {/* Signature Facials */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Signature Facials</h2>
              </div>
              <p className="text-xl text-primary font-semibold">Hydration, Glow & Rejuvenation</p>
              <p className="text-muted-foreground leading-relaxed">
                Your skin deserves more than a routine — it deserves a ritual. Our Signature Facials are crafted to deliver deep hydration, cell renewal, and an instant radiant glow. Each facial is customized after a detailed skin analysis by our experts.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">What makes our facials special?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Personalized skin mapping and analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Botanical extracts, vitamin serums, and antioxidant-rich formulas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Techniques that enhance microcirculation and lymphatic drainage</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Aromatherapy-infused experience for relaxation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Types of NURA23 Signature Facials:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>HydraGlow Facial:</strong> Infuses moisture deep into the skin for a dewy finish</li>
                  <li><strong>Detox Radiance Facial:</strong> Purifies pores and balances oil production</li>
                  <li><strong>Gold Rejuvenation Facial:</strong> Restores glow and tightens skin naturally</li>
                  <li><strong>Collagen Renewal Facial:</strong> Firms and revitalizes dull, tired skin</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Results You'll Love:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Smooth, supple, and plump skin</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Instant glow that lasts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Reduced dullness and dryness</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic">"Your skin, your story — perfectly refreshed at Nura23."</p>
              </div>
            </div>
            <div>
              <img src={facialSignature} alt="Signature Facial Treatment" className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Acne & Scar Treatments */}
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={acneTreatment} alt="Acne and Scar Treatment" className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Acne & Scar Treatments</h2>
              </div>
              <p className="text-xl text-primary font-semibold">Clear, Heal & Renew</p>
              <p className="text-muted-foreground leading-relaxed">
                Blemishes and scars can affect more than your skin — they can affect confidence. At Nura23, we use a combination of medical-grade technology and targeted aesthetic care to treat acne from the root cause and fade stubborn scars safely.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Our Approach:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Expert consultation to identify skin type & acne grade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Deep cleansing, exfoliation, and extraction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">LED therapy, chemical peels, and antibacterial serums</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Healing masks and post-care routine guidance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Treatments Include:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Acne Control Peel:</strong> Gently clears breakouts and reduces inflammation</li>
                  <li><strong>Laser Scar Reduction:</strong> Targets pigmentation and smooths uneven texture</li>
                  <li><strong>Microneedling with PRP:</strong> Stimulates collagen and reduces post-acne marks</li>
                  <li><strong>Sebum Balance Therapy:</strong> Regulates oil glands for long-term control</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">🌿</span>
                    <span className="text-muted-foreground">Clearer, calmer skin</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">🌿</span>
                    <span className="text-muted-foreground">Reduced redness, bumps, and dark spots</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">🌿</span>
                    <span className="text-muted-foreground">Restored confidence with smoother texture</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic">"Flawless skin is not a dream — it's a science at Nura23."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Anti-Aging Therapy */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Anti-Aging Therapy</h2>
              </div>
              <p className="text-xl text-primary font-semibold">Lift, Firm & Renew Youth</p>
              <p className="text-muted-foreground leading-relaxed">
                Aging is beautiful — but graceful aging is an art. Our Anti-Aging Therapies are designed to restore skin firmness, elasticity, and youthful vitality through non-invasive, clinically proven techniques.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Key Treatments at NURA23:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>HIFU:</strong> Tightens and lifts facial contours</li>
                  <li><strong>RF Skin Tightening:</strong> Boosts collagen for smoother, firmer skin</li>
                  <li><strong>Vitamin Infusion Facial:</strong> Deeply nourishes and revitalizes mature skin</li>
                  <li><strong>PRP Rejuvenation:</strong> Uses your body's natural growth factors for renewal</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Reduces fine lines, wrinkles, and sagging</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Improves skin density and luminosity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Non-surgical and safe for all skin types</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Our Anti-Aging Philosophy:</h3>
                <p className="text-muted-foreground">
                  At Nura23, we don't just chase youth — we celebrate timeless beauty. Our experts customize every therapy to enhance your natural expressions while keeping your skin firm, lifted, and radiant.
                </p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic">"Feel young. Look confident. Stay naturally beautiful."</p>
              </div>
            </div>
            <div>
              <img src={antiAging} alt="Anti-Aging Treatment" className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skin Brightening */}
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src={brightening} alt="Skin Brightening Treatment" className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Skin Brightening & Pigmentation</h2>
              </div>
              <p className="text-xl text-primary font-semibold">Reveal the Radiance</p>
              <p className="text-muted-foreground leading-relaxed">
                Uneven tone, sun damage, and pigmentation can make your skin look dull. Our Brightening & Pigmentation Correction therapies even out discoloration, enhance luminosity, and bring back your natural glow.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Techniques & Treatments:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Laser Pigment Correction:</strong> Targets dark spots, freckles, and melasma</li>
                  <li><strong>Brightening Peels:</strong> Gently exfoliates and renews the skin surface</li>
                  <li><strong>Glutathione IV Therapy:</strong> Boosts inner radiance and overall brightness</li>
                  <li><strong>Vitamin C & Niacinamide:</strong> Repairs damage and improves clarity</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Why Choose NURA23?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Advanced medical-grade devices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Safe formulations for Indian skin</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Gradual, natural-looking results</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Results:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✨</span>
                    <span className="text-muted-foreground">Brighter, more radiant complexion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✨</span>
                    <span className="text-muted-foreground">Even skin tone</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✨</span>
                    <span className="text-muted-foreground">Refreshed, glowing confidence</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic">"Illuminate your true self with the brilliance of healthy, even-toned skin."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Hydrafacial */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Hydrafacial / Oxygen Facial</h2>
              </div>
              <p className="text-xl text-primary font-semibold">Deep Cleansing, Nourishing & Instant Radiance</p>
              <p className="text-muted-foreground leading-relaxed">
                When your skin needs an instant boost, Hydrafacial and Oxygen Therapy are the ultimate refreshers. Hydrafacial uses unique vortex technology to cleanse, exfoliate, extract impurities, and infuse potent serums — all in one session.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Oxygen Facial delivers oxygen molecules and nutrients deep into the skin, energizing cells and restoring natural vitality.
              </p>
              <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Key Steps in NURA23 Hydrafacial:</h3>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Deep cleansing & gentle exfoliation</li>
                  <li>Painless extraction of impurities</li>
                  <li>Infusion of antioxidant & peptide-rich serums</li>
                  <li>LED light therapy for radiance</li>
                  <li>Customized mask and hydration boost</li>
                </ol>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Why Our Clients Love It:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Instant glow after one session</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Suitable for all skin types</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">No downtime — perfect for pre-event glow</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Benefits:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">💧</span>
                    <span className="text-muted-foreground">Hydrated, smooth, baby-soft skin</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">💧</span>
                    <span className="text-muted-foreground">Refined pores and clear complexion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">💧</span>
                    <span className="text-muted-foreground">Lasting radiance and brightness</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic">"One facial. One hour. Infinite glow."</p>
              </div>
            </div>
            <div>
              <img src={hydrafacial} alt="Hydrafacial Treatment" className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Why Choose NURA23 for Skin Care?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Expert Team</h3>
              <p className="text-muted-foreground">Certified dermatologists and aestheticians with years of experience</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Advanced Technology</h3>
              <p className="text-muted-foreground">State-of-the-art equipment for safe and effective treatments</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Personalized Care</h3>
              <p className="text-muted-foreground">Customized treatment plans based on your unique skin needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Ready for Radiant Skin?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book your consultation today and let our experts create a personalized skin care plan for you.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Book Appointment Now</Link>
        </Button>
      </div>
    </section>
  </div>;
};
export default SkinCare;