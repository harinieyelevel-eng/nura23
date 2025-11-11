import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, Sparkles, Zap, Heart, CheckCircle2 } from "lucide-react";
import hairLuxury from "@/assets/hair-luxury.jpg";
import hairTreatment from "@/assets/hair-treatment.jpg";
import scalpDetoxTherapy from "@/assets/scalp-detox-therapy.png";
import hairTreatmentHero from "@/assets/hair-treatment-hero.png";
import prpGfcTherapy from "@/assets/prp-gfc-therapy.png";
import laserHairRegrowth from "@/assets/laser-hair-regrowth.png";
import holisticHairWellness from "@/assets/holistic-hair-wellness.png";

const HairTreatment = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">HAIR</h1>
            <h2 className="text-2xl font-semibold text-foreground">Our Signature Hair Treatments</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Healthy, beautiful hair begins with a balanced scalp and nourished follicles. Our advanced hair treatments 
              combat thinning, stimulate growth, and restore natural density.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src={hairTreatmentHero} 
              alt="Professional Hair Treatment at NURA23" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 1. Scalp Detox & Rejuvenation Therapy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">1. Scalp Detox & Rejuvenation Therapy</h2>
                <p className="text-lg text-muted-foreground">Revitalize Your Hair from the Roots</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={scalpDetoxTherapy} 
                alt="Scalp Detox & Rejuvenation Therapy at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Healthy Scalp, Radiant Hair</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A healthy scalp is the foundation of healthy hair. Our deep scalp cleansing therapy removes excess oil, dandruff, and buildup, while stimulating circulation and improving hair root strength.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  At Nura23 Skin, Hair & Wellness, we understand that healthy, beautiful hair starts with a balanced scalp. Environmental stress, pollution, excess oil, product buildup, and hormonal changes can leave your scalp congested, itchy, or dry — impacting hair growth, volume, and shine.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our Scalp Detox & Rejuvenation Therapy is a holistic, professional treatment designed to cleanse, nourish, and revitalize your scalp. Using advanced techniques and high-quality botanical serums, we target impurities, stimulate circulation, and create an optimal environment for strong, healthy, and radiant hair.
                </p>
                <p className="text-lg font-semibold text-primary mt-4 italic">
                  Because hair health isn't just skin-deep — it starts at the scalp.
                </p>
                <p className="text-muted-foreground mt-3">
                  <strong>Ideal for:</strong> Oily scalp, dandruff, weak hair roots, or product buildup.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Scalp Detox & Rejuvenation Therapy?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This specialized therapy combines deep cleansing, exfoliation, hydration, and nourishment to remove buildup and restore scalp vitality. The treatment is ideal for:
                </p>
                <div className="space-y-2">
                  {[
                    "Excess oil and dandruff",
                    "Hair thinning or slow growth",
                    "Dry, flaky, or irritated scalp",
                    "Tension and stress-related scalp tightness",
                    "Product residue from styling or chemical treatments"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The process revitalizes hair follicles, improves blood circulation, and strengthens the roots, promoting natural hair growth and shine.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Therapy Works</h4>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">1. Scalp Analysis & Consultation</h5>
                    <p className="text-sm text-muted-foreground">Our experts examine your scalp to identify specific concerns, such as oiliness, dryness, dandruff, or sensitivity. This allows us to customize the treatment to your needs.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">2. Deep Cleansing & Exfoliation</h5>
                    <p className="text-sm text-muted-foreground">A gentle scalp scrub or enzyme-based exfoliant removes dead skin cells, excess sebum, and product buildup, unclogging hair follicles.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">3. Nourishing Serum Infusion</h5>
                    <p className="text-sm text-muted-foreground">High-quality serums enriched with vitamins, minerals, and antioxidants are applied to strengthen hair roots, reduce inflammation, and improve scalp elasticity.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">4. Massage & Stimulation</h5>
                    <p className="text-sm text-muted-foreground">A relaxing scalp massage improves blood circulation, stimulates hair follicles, and relieves tension — encouraging hair growth and thickness.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">5. Hydration & Soothing Treatment</h5>
                    <p className="text-sm text-muted-foreground">Finally, a hydrating mask or oil treatment soothes the scalp, locks in nutrients, and creates a healthy environment for hair vitality.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Scalp Detox & Rejuvenation Therapy</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Removes Toxins & Buildup: Clears excess sebum, dirt, and product residues",
                    "Promotes Hair Growth: Stimulates dormant follicles for thicker, stronger hair",
                    "Balances Oil & Hydration: Helps manage oily or dry scalps effectively",
                    "Reduces Hair Fall: Strengthens roots and minimizes breakage",
                    "Soothes & Relaxes: Reduces scalp irritation, itchiness, and tension",
                    "Enhances Shine & Volume: Improves overall hair texture and natural gloss"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Ideal Candidates for Scalp Rejuvenation</h4>
                <p className="text-muted-foreground mb-3">Scalp Detox & Rejuvenation Therapy is suitable for both men and women experiencing:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {["Dull, lifeless hair", "Excessive oil or dandruff", "Hair thinning or shedding", "Sensitivity or itchiness", "Stress-related scalp tension"].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  It's a preventive and restorative therapy for anyone seeking healthy, resilient, and vibrant hair.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">The Nura23 Experience</h4>
                <p className="text-muted-foreground mb-3">At Nura23, we combine advanced scalp care with luxury wellness experience:</p>
                <div className="space-y-2">
                  {[
                    { title: "Expert Assessment", desc: "Every scalp is unique; we create customized therapy plans" },
                    { title: "Professional Techniques", desc: "Gentle exfoliation, deep cleansing, and precision serum application" },
                    { title: "High-Quality Products", desc: "Botanical and clinically proven formulations for nourishment and scalp health" },
                    { title: "Relaxing Ambiance", desc: "A serene spa environment for ultimate relaxation during your treatment" },
                    { title: "Holistic Approach", desc: "We address stress, diet, and lifestyle factors affecting scalp and hair health" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">{item.title}:</span>
                        <span className="text-sm text-muted-foreground"> {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Advanced Hair Fall Control (PRP / GFC Therapy) */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">2. Advanced Hair Fall Control (PRP / GFC Therapy)</h2>
                <p className="text-lg text-muted-foreground">Stop Hair Fall, Stimulate Growth, and Restore Confidence</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={prpGfcTherapy} 
                alt="Advanced Hair Fall Control PRP/GFC Therapy at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-background p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  We use Platelet-Rich Plasma (PRP) or Growth Factor Concentrate (GFC) to activate dormant hair follicles, reduce hair fall, and stimulate regrowth naturally. These treatments are minimally invasive and clinically proven to improve hair density.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Hair is a reflection of health, vitality, and confidence. At Nura23 Skin, Hair & Wellness, we understand the emotional impact of hair thinning, receding hairlines, or excessive hair fall. Our Advanced Hair Fall Control Therapy combines PRP and GFC — cutting-edge regenerative treatments that rejuvenate hair follicles, stimulate growth, and strengthen existing hair.
                </p>
                <p className="text-lg font-semibold text-primary mt-4 italic">
                  Because healthy hair is the foundation of confidence and beauty.
                </p>
                <p className="text-muted-foreground mt-3">
                  <strong>Ideal for:</strong> Thinning hair, post-pregnancy hair loss, male/female pattern baldness.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Understanding PRP and GFC Therapy</h4>
                <p className="text-muted-foreground mb-4">Both PRP and GFC are autologous therapies, meaning they use your body's own growth factors and platelets to heal and rejuvenate hair follicles.</p>
                
                <div className="space-y-6">
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h5 className="text-lg font-bold mb-3 text-foreground">1. PRP (Platelet-Rich Plasma) Therapy</h5>
                    <p className="text-muted-foreground mb-3">
                      PRP is derived from your blood. After drawing a small amount, it is processed in a centrifuge to separate platelet-rich plasma, which is rich in growth factors. These growth factors:
                    </p>
                    <div className="space-y-2 mb-4">
                      {["Stimulate dormant hair follicles", "Increase blood supply to the scalp", "Promote collagen and keratin production", "Strengthen weak hair strands"].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Benefits of PRP Therapy:</p>
                      <div className="space-y-1">
                        {["Reduces hair fall", "Improves hair density and thickness", "Enhances scalp health", "Safe and biocompatible"].map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h5 className="text-lg font-bold mb-3 text-foreground">2. GFC (Growth Factor Concentrate) Therapy</h5>
                    <p className="text-muted-foreground mb-3">
                      GFC therapy is a more advanced version of PRP. It not only contains platelets but also higher concentrations of growth factors and stem cell signaling molecules, which provide a powerful regenerative effect on hair follicles.
                    </p>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Benefits of GFC Therapy:</p>
                      <div className="space-y-1">
                        {["Stimulates new hair growth in thinning areas", "Improves scalp microcirculation", "Strengthens hair roots", "Enhances hair thickness and shine"].map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Therapy Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "1. Consultation & Scalp Analysis", desc: "We assess your scalp, hair density, hair fall pattern, and overall health. This helps us design a personalized treatment plan." },
                    { step: "2. Blood Draw & Processing", desc: "A small amount of blood is drawn and processed to separate PRP or GFC concentrate, rich in growth factors." },
                    { step: "3. Scalp Preparation", desc: "The scalp is cleansed, and a topical numbing agent is applied for comfort." },
                    { step: "4. Injection or Micro-Needling Application", desc: "The PRP or GFC concentrate is carefully injected into the scalp at targeted areas or applied with microneedling to enhance absorption and stimulate follicles." },
                    { step: "5. Post-Treatment Care", desc: "The procedure is minimally invasive, with no downtime. Mild redness or swelling may occur temporarily." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of PRP & GFC Hair Therapy</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Reduces Hair Fall: Strengthens weak and thinning strands",
                    "Stimulates Hair Growth: Activates dormant follicles to produce new hair",
                    "Improves Hair Density: Adds volume and thickness to thinning areas",
                    "Enhances Scalp Health: Improves blood circulation and nutrient supply",
                    "Safe and Natural: Uses your own body's growth factors, minimizing risk",
                    "Non-Surgical & Minimal Downtime: Quick procedure suitable for busy schedules"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Ideal Candidates for PRP & GFC Therapy</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Suitable for:</h5>
                    <div className="space-y-2">
                      {[
                        "Early to moderate hair thinning",
                        "Pattern baldness (male or female)",
                        "Hair fall due to stress, hormonal imbalance, or postpartum",
                        "Weak, brittle, or damaged hair",
                        "Individuals looking for non-surgical hair restoration"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Not suitable for:</h5>
                    <div className="space-y-2">
                      {[
                        "Active scalp infections",
                        "Blood disorders",
                        "Severe alopecia or total hair loss"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-destructive">✗</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  A consultation at Nura23 ensures you receive the most effective and safe therapy plan for your hair type and condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Laser Hair Regrowth Therapy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">3. Laser Hair Regrowth Therapy</h2>
                <p className="text-lg text-muted-foreground">Restore Thick, Healthy Hair</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={laserHairRegrowth} 
                alt="Laser Hair Regrowth Therapy at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Using low-level laser energy, this non-invasive procedure stimulates follicles to increase hair growth and thickness. Safe, painless, and highly effective when combined with our wellness care.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Healthy hair begins with a well-nourished scalp and stimulated hair follicles. At Nura23 Skin, Hair & Wellness, our Laser Hair Regrowth Therapy is a non-invasive, pain-free solution designed to combat hair thinning, stimulate growth, and restore natural density.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Using advanced low-level laser technology, this therapy energizes dormant follicles, improves scalp circulation, and strengthens hair from the root — resulting in thicker, healthier, and more resilient hair.
                </p>
                <p className="text-muted-foreground mt-3">
                  <strong>Ideal for:</strong> Early-stage hair loss or thinning.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Laser Hair Regrowth Therapy?</h4>
                <p className="text-muted-foreground mb-3">
                  Laser Hair Regrowth Therapy, also known as Low-Level Laser Therapy (LLLT), uses safe, focused light energy to penetrate the scalp and stimulate hair follicles.
                </p>
                <p className="text-muted-foreground mb-3">The treatment works by:</p>
                <div className="space-y-2 mb-4">
                  {[
                    "Increasing blood flow to hair roots, delivering essential nutrients",
                    "Stimulating follicular activity, reactivating dormant follicles",
                    "Strengthening existing hair shafts to reduce breakage",
                    "Promoting natural hair growth for visible density and volume"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlike chemical treatments or invasive procedures, LLLT is gentle, non-surgical, and suitable for all hair types.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Treatment Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "1. Scalp Assessment & Consultation", desc: "Our experts evaluate hair thinning, scalp condition, and growth patterns to create a personalized treatment plan." },
                    { step: "2. Laser Application", desc: "Using a specialized laser device, light energy is applied to the scalp in targeted areas. The therapy is painless and relaxing, similar to a gentle warming sensation on the scalp." },
                    { step: "3. Treatment Duration", desc: "Sessions typically last 20–30 minutes, with multiple sessions recommended for optimal results." },
                    { step: "4. Post-Treatment Care", desc: "There is no downtime, and you can resume daily activities immediately. Mild scalp warmth or tingling may occur temporarily." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Laser Hair Regrowth Therapy</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Stimulates Dormant Follicles: Encourages new hair growth naturally",
                    "Strengthens Hair Roots: Reduces hair fall and breakage",
                    "Improves Hair Density: Adds volume and thickness over time",
                    "Safe & Non-Invasive: No injections, chemicals, or surgery required",
                    "Pain-Free Sessions: Comfortable and relaxing experience",
                    "Suitable for Men & Women: Effective for early to moderate hair thinning"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Laser therapy works best in combination with nutritional guidance, scalp care, and complementary treatments like PRP or GFC Therapy for accelerated results.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Ideal Candidates for Laser Hair Therapy</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Laser Hair Regrowth is ideal for:</h5>
                    <div className="space-y-2">
                      {[
                        "Early-stage hair thinning or mild pattern baldness",
                        "Hair fall due to stress, hormonal imbalance, or post-pregnancy changes",
                        "Weak or brittle hair requiring root strengthening",
                        "Individuals seeking non-surgical, safe hair regrowth solutions"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Not suitable for:</h5>
                    <div className="space-y-2">
                      {[
                        "Severe baldness or total hair loss",
                        "Active scalp infections"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-destructive">✗</span>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Hair Regrowth?</h4>
                <div className="space-y-2">
                  {[
                    { title: "Certified Experts", desc: "Skilled professionals with experience in hair restoration" },
                    { title: "Advanced Laser Technology", desc: "Safe, FDA-approved devices for effective results" },
                    { title: "Customized Treatment Plans", desc: "Personalized sessions based on scalp and hair type" },
                    { title: "Holistic Hair Wellness", desc: "Combines laser therapy with nutrition, PRP, or GFC if needed" },
                    { title: "Visible, Natural Results", desc: "Stronger, thicker, and healthier hair without surgery" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground">{item.title}:</span>
                        <span className="text-sm text-muted-foreground"> {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-primary italic mt-4 text-center">
                  Nura23 helps you regain confidence through hair that looks and feels naturally beautiful.
                </p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-foreground">Treatment Frequency & Maintenance</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground"><strong>Sessions:</strong> 2–3 times per week initially</p>
                  <p className="text-muted-foreground"><strong>Duration:</strong> 20–30 minutes per session</p>
                  <p className="text-muted-foreground"><strong>Maintenance:</strong> Monthly sessions to sustain growth</p>
                  <p className="text-muted-foreground"><strong>Results:</strong> Noticeable hair thickening within 8–12 weeks, with ongoing improvement</p>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                <h4 className="text-2xl font-bold mb-4 text-foreground">Book Your Laser Hair Regrowth Therapy Today</h4>
                <p className="text-lg text-muted-foreground">
                  Restore your hair, regain confidence, and enjoy strong, healthy, natural hair with Nura23 Skin, Hair & Wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Holistic Hair Wellness */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">4. Holistic Hair Wellness</h2>
                <p className="text-lg text-muted-foreground">Complete wellness for sustainable hair health</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={holisticHairWellness} 
                alt="Holistic Hair Wellness at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-background p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23, we go beyond topical solutions. Our experts analyze your lifestyle, nutrition, stress, and hormonal balance to create a complete wellness plan for sustainable results.
                </p>
                <p className="text-lg font-semibold text-primary mt-4 italic">
                  We believe hair wellness starts from within — nourished body, calm mind, and balanced hormones lead to naturally beautiful hair.
                </p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Complementary Therapies</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Nutritional & Lifestyle Counselling</h5>
                      <p className="text-sm text-muted-foreground">Personalized dietary plans and lifestyle modifications to support hair growth from within.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Ayurvedic Scalp Massage & Oil Therapy</h5>
                      <p className="text-sm text-muted-foreground">Traditional healing techniques using herbal oils to nourish the scalp and promote hair strength.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Stress Relief & Detox Program</h5>
                      <p className="text-sm text-muted-foreground">Holistic approaches to reduce stress and eliminate toxins that impact hair health.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                <p className="text-lg text-muted-foreground italic">
                  Experience comprehensive hair care that addresses the root cause, not just the symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready for Thicker, Healthier Hair?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our hair care experts evaluate your needs and recommend the best treatment for you.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Book Hair Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HairTreatment;
