import { Sparkles, Heart, Leaf, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AppointmentDialog from "@/components/AppointmentDialog";
import productHero from "@/assets/product-hero.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productMask from "@/assets/product-mask.jpg";
import SEO from "@/components/SEO";

const Product = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Premium Skincare Products | Anti-Aging & Acne Solutions | NURA23"
        description="Shop NURA23's exclusive range of premium skincare products. From anti-aging serums and acne treatments to daily essentials, find expert-recommended solutions for glowing, healthy skin."
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Nura23 Skin & Aesthetics Clinic
                </h1>
                <p className="text-xl text-muted-foreground">
                  Where Everyday Care Becomes a Ritual of Beauty
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Nura23 Skin & Aesthetics Clinic, we believe that glowing skin and balanced wellness aren't achieved through quick fixes — they're nurtured through mindful, consistent care. Our exclusive product collections are designed to transform your daily routine into a moment of self-love.
                </p>
              </div>
              <div className="overflow-hidden shadow-xl">
                <img src={productHero} alt="Luxury skincare products" className="w-full h-[500px] object-cover" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Each formula is inspired by nature, refined by science, and crafted with the purest ingredients to nourish your skin, body, and soul. Nura23's product philosophy is simple: clean formulations, visible results, and holistic beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Aesthetic Care Range */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                AESTHETIC CARE RANGE
              </h2>
              <p className="text-xl text-primary font-semibold">
                Radiance Meets Restoration
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The Nura23 Aesthetic Care Range is designed to enhance your natural beauty through non-invasive, topical care. These products are crafted to replenish, protect, and refine — giving you that post-treatment glow without medical intervention.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Radiance Boost Serum */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={productSerum} alt="Radiance Boost Serum" className="w-full h-56 object-cover object-center" />
                </div>
                <Sparkles className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Radiance Boost Serum</h3>
                <p className="text-muted-foreground">
                  A lightweight, fast-absorbing elixir that brightens dull, tired skin.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Benefits:</p>
                  <p className="text-sm text-muted-foreground">Restores luminosity, evens tone, and improves texture.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Hero Ingredients:</p>
                  <p className="text-sm text-muted-foreground">Vitamin C, botanical antioxidants, and hyaluronic acid.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Experience:</p>
                  <p className="text-sm text-muted-foreground">Fresh, silky finish that instantly uplifts the skin.</p>
                </div>
              </div>

              {/* Skin Revive Cream */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={productCream} alt="Skin Revive Cream" className="w-full h-56 object-cover object-center" />
                </div>
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Skin Revive Cream</h3>
                <p className="text-muted-foreground">
                  A deeply nourishing moisturizer that helps strengthen the skin barrier and reduce early signs of aging.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Texture:</p>
                  <p className="text-sm text-muted-foreground">Soft, non-greasy cream suitable for daily use.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Highlights:</p>
                  <p className="text-sm text-muted-foreground">Infused with peptides, shea butter, and natural oils.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Result:</p>
                  <p className="text-sm text-muted-foreground">Firm, supple skin that feels rejuvenated from within.</p>
                </div>
              </div>

              {/* Glow Recovery Mask */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={productMask} alt="Glow Recovery Mask" className="w-full h-56 object-cover object-center" />
                </div>
                <Leaf className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Glow Recovery Mask</h3>
                <p className="text-muted-foreground">
                  A weekly self-care essential for intense hydration and glow.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Formula:</p>
                  <p className="text-sm text-muted-foreground">Rich in aloe vera, cucumber, and licorice extract.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Effect:</p>
                  <p className="text-sm text-muted-foreground">Refreshes, soothes, and renews tired skin after a long week.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body & Wellness Collection */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                BODY & WELLNESS COLLECTION
              </h2>
              <p className="text-xl text-primary font-semibold">
                Beauty Beyond The Skin
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                True beauty starts from how you feel within. Nura23's Body & Wellness range is a celebration of balance — blending botanical actives, aromatic oils, and natural minerals to help you relax, recharge, and glow from head to toe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sculpt & Smooth Body Cream */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">Sculpt & Smooth Body Cream</h3>
                <p className="text-muted-foreground">
                  A lightweight firming cream that tones, hydrates, and enhances the skin's texture.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Made With:</strong> Seaweed extract, caffeine, and vitamin E.</li>
                  <li><strong>Benefits:</strong> Boosts circulation, minimizes unevenness, and leaves a smooth satin finish.</li>
                </ul>
              </div>

              {/* Restore Body Scrub */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">Restore Body Scrub</h3>
                <p className="text-muted-foreground">
                  An indulgent exfoliating polish that removes dull surface cells to reveal soft, radiant skin.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Key Actives:</strong> Himalayan salt, coconut oil, and citrus peel.</li>
                  <li><strong>Result:</strong> Instant smoothness and natural glow after every shower.</li>
                </ul>
              </div>

              {/* Calm Essence Body Oil */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">Calm Essence Body Oil</h3>
                <p className="text-muted-foreground">
                  A relaxing blend of lavender, jasmine, and sweet almond oil designed to calm the mind and nourish the skin.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Use:</strong> After bath or before bedtime for a soothing self-massage.</li>
                  <li><strong>Effect:</strong> Deep relaxation, hydrated skin, and improved sleep quality.</li>
                </ul>
              </div>

              {/* Revive Bath Soak */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-xl font-bold text-foreground">Revive Bath Soak</h3>
                <p className="text-muted-foreground">
                  A mineral-rich blend of Epsom salt and botanicals for detox and muscle relief.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Perfect For:</strong> Tired muscles, long days, and self-care evenings.</li>
                  <li><strong>Ritual:</strong> Add a handful to warm water and soak for 15–20 minutes of pure tranquility.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Skincare Routine */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                DAILY SKINCARE ROUTINE LINE
              </h2>
              <p className="text-xl text-primary font-semibold">
                Your Glow, Every Day
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nura23's Skincare Routine Line is your trusted partner for clean, consistent, and radiant skin. Each product is thoughtfully formulated to protect, repair, and rejuvenate — making professional results simple and achievable at home.
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1: Cleanse */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Step 1: Cleanse – Gentle Foam Cleanser</h3>
                <p className="text-muted-foreground mb-4">
                  A mild, sulfate-free cleanser that lifts away dirt, makeup, and excess oil without over-drying.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Infused With:</strong> Aloe vera, green tea, and cucumber extract.</li>
                  <li><strong>Outcome:</strong> Fresh, calm, and hydrated skin — ready for the next step.</li>
                </ul>
              </div>

              {/* Step 2: Tone */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Step 2: Tone – Botanical Balancing Mist</h3>
                <p className="text-muted-foreground mb-4">
                  A refreshing toner enriched with rose water and witch hazel.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Function:</strong> Minimizes pores, restores pH balance, and preps skin for treatment.</li>
                  <li><strong>Bonus:</strong> Use as a mid-day spritz for instant hydration.</li>
                </ul>
              </div>

              {/* Step 3: Treat */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Step 3: Treat – Bright Essence Serum</h3>
                <p className="text-muted-foreground mb-4">
                  A vitamin-rich concentrate that targets uneven skin tone and early pigmentation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Actives:</strong> Vitamin C, licorice root, and niacinamide.</li>
                  <li><strong>Visible Effect:</strong> More luminous, even-toned skin with daily use.</li>
                </ul>
              </div>

              {/* Step 4: Moisturize */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Step 4: Moisturize – Hydra Balance Cream</h3>
                <p className="text-muted-foreground mb-4">
                  An ultra-light moisturizer that hydrates deeply and seals in softness.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Blend Of:</strong> Ceramides, squalane, and plant oils.</li>
                  <li><strong>Feel:</strong> Dewy, plump skin that stays nourished all day.</li>
                </ul>
              </div>

              {/* Step 5: Protect */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Step 5: Protect – Daily Defense SPF 50</h3>
                <p className="text-muted-foreground mb-4">
                  A broad-spectrum sunscreen that defends against UV rays and pollution.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Texture:</strong> Non-greasy, matte finish ideal under makeup.</li>
                  <li><strong>Result:</strong> Protected, radiant skin throughout your day.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Nura23 Promise */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              THE NURA23 PROMISE
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              At Nura23, we believe true transformation begins with trust. That's why every product we create follows our "3C" philosophy:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Clean Formulations</h3>
                <p className="text-muted-foreground">Free from parabens, sulfates, and harsh chemicals.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Conscious Beauty</h3>
                <p className="text-muted-foreground">Cruelty-free, sustainable, and planet-friendly packaging.</p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Clinical Efficacy</h3>
                <p className="text-muted-foreground">Backed by expert research and dermatological validation.</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground text-center">
              Our mission is to bring the serenity of a spa and the confidence of a clinic into every home. From our bottles to our beliefs, every detail is designed with care, love, and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Why Clients Love Nura23 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              WHY CLIENTS LOVE NURA23
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">Luxurious textures, natural scents, and visible results.</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">Designed for Indian skin and climate.</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">Backed by experts in dermatology and wellness.</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground">A brand that celebrates confidence, care, and individuality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              DISCOVER YOUR GLOW WITH NURA23
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every drop of Nura23 carries a promise — to nurture your skin, uplift your senses, and restore your inner calm. Whether it's the gentle freshness of your daily cleanser, the comforting richness of your body oil, or the luxurious touch of your night cream, every product turns self-care into self-love.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the art of transformation. Visit Nura23 Skin & Aesthetics Clinic or explore our exclusive product line to begin your personalized wellness and skincare journey today.
            </p>
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => setAppointmentOpen(true)}
            >
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
      />
    </div>
  );
};

export default Product;
