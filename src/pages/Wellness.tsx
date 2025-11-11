import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footprints, Sparkles, HandMetal, TrendingDown, Heart, Flower2, Apple, CheckCircle2 } from "lucide-react";
import wellnessLuxury from "@/assets/wellness-luxury.jpg";
import wellnessService from "@/assets/wellness-service.jpg";
import footReflexology1 from "@/assets/foot-reflexology-alt-1.jpg";
import footReflexology2 from "@/assets/foot-reflexology-2.jpg";
import wellnessDetox from "@/assets/wellness-detox.jpg";
import wellnessPedicure from "@/assets/wellness-pedicure.jpg";
import wellnessSlimming from "@/assets/wellness-slimming.jpg";
import wellnessStressRelief from "@/assets/wellness-stress-relief.jpg";
import wellnessMassage from "@/assets/wellness-massage-new.jpg";
import wellnessNutrition from "@/assets/wellness-nutrition.jpg";

const Wellness = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">WELLNESS</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              True wellness encompasses body, mind, and spirit. Our holistic programs combine traditional healing practices 
              with modern therapies to restore balance, vitality, and inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src={wellnessLuxury} 
              alt="Luxury Wellness Spa at NURA23" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 1. Foot Reflexology */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Footprints className="h-8 w-8 text-primary" />
              </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Foot Reflexology – Rejuvenate Your Body and Mind at Nura23</h2>
              <p className="text-lg text-muted-foreground">Heal, Relax, and Restore Balance with Foot Reflexology</p>
            </div>
            </div>

            {/* Foot Reflexology Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={footReflexology2} 
                alt="Relaxing foot reflexology treatment with essential oils" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23 Skin, Hair & Wellness, we believe wellness begins from the ground up. Foot Reflexology is a holistic therapy that targets specific pressure points in the feet to stimulate healing, improve circulation, and restore balance to the entire body. This ancient therapy is designed to reduce stress, relieve tension, and promote overall wellness, making it an essential part of modern self-care.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Foot Reflexology?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Foot Reflexology is based on the principle that each area of the foot corresponds to different organs, glands, and systems in the body. By applying targeted pressure and massage techniques, reflexologists can:
                </p>
                <div className="space-y-2">
                  {[
                    "Enhance circulation and oxygen flow",
                    "Stimulate natural healing processes",
                    "Reduce muscle tension and fatigue",
                    "Improve nerve function and energy flow"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Regular sessions promote not just physical well-being, but also emotional and mental relaxation, helping you feel rejuvenated from the inside out.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Foot Reflexology</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Stress Reduction & Relaxation</h5>
                    <p className="text-sm text-muted-foreground">Foot reflexology activates the body's parasympathetic nervous system, reducing stress hormones and promoting deep relaxation. It helps relieve anxiety, tension, and mental fatigue.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Improved Circulation & Detoxification</h5>
                    <p className="text-sm text-muted-foreground">Stimulating pressure points enhances blood and lymphatic flow, supporting detoxification and nutrient delivery to vital organs.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Pain Relief & Muscle Relaxation</h5>
                    <p className="text-sm text-muted-foreground">Targeted foot massage helps alleviate pain in the feet, ankles, legs, and lower back. It is particularly effective for individuals with plantar fasciitis, arthritis, or postural strain.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Enhanced Organ Function</h5>
                    <p className="text-sm text-muted-foreground">By activating reflex points, reflexology supports the optimal function of organs such as the liver, kidneys, lungs, and digestive system.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Boosts Energy & Immunity</h5>
                    <p className="text-sm text-muted-foreground">Reflexology stimulates energy pathways and enhances immune response, helping the body resist illness and recover faster.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How a Reflexology Session Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Consultation & Assessment", desc: "Every session begins with a personalized consultation to understand your health, lifestyle, and specific concerns. This allows the therapist to target areas that require special attention." },
                    { step: "Step 2: Foot Preparation", desc: "Your feet are cleansed and soaked in warm water infused with essential oils or herbal extracts to relax muscles and open reflex points." },
                    { step: "Step 3: Targeted Pressure Therapy", desc: "Using precise thumb, finger, and hand techniques, the therapist applies gentle pressure on specific reflex points on the feet. Each point corresponds to different organs and body systems, stimulating natural healing." },
                    { step: "Step 4: Massage & Relaxation", desc: "The session includes soothing strokes and acupressure movements to release tension, improve circulation, and promote a sense of calm and balance." },
                    { step: "Step 5: Post-Treatment Care", desc: "After the session, light stretching or hydration may be recommended to enhance the therapy's benefits and maintain wellness." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Foot Reflexology?</h4>
                <p className="text-muted-foreground mb-3">Foot reflexology is safe and effective for most individuals, including:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "People with stress, anxiety, or fatigue",
                    "Individuals with chronic pain or discomfort in feet, legs, or back",
                    "Those seeking improved circulation and detoxification",
                    "Individuals with sleep disorders or low energy",
                    "Anyone looking for a natural, non-invasive wellness therapy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Reflexology complements conventional medical treatments and can be part of a holistic wellness routine.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">The Nura23 Reflexology Experience</h4>
                <p className="text-muted-foreground mb-3">At Nura23, we provide a luxurious and serene environment for every reflexology session. Our certified therapists:</p>
                <div className="space-y-2">
                  {[
                    "Use expert techniques and precise pressure points",
                    "Employ natural oils and herbal treatments for added nourishment",
                    "Customize sessions based on your health and wellness goals",
                    "Combine traditional wisdom with modern comfort for maximum relaxation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  This combination ensures not only physical relief but also emotional rejuvenation and mental clarity.
                </p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-foreground">Treatment Duration & Frequency</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground"><strong>Session Duration:</strong> 45–60 minutes</p>
                  <p className="text-muted-foreground"><strong>Recommended Frequency:</strong> Weekly or bi-weekly for wellness, monthly for maintenance</p>
                  <p className="text-muted-foreground"><strong>Results:</strong> Improved circulation, reduced tension, and enhanced energy after the first session, with cumulative benefits over time</p>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Foot Reflexology?</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Certified Reflexologists: Experienced and trained in therapeutic techniques",
                    "Holistic Approach: Focus on physical, emotional, and mental wellness",
                    "Luxury Environment: Relaxing and hygienic spa setting",
                    "Personalized Sessions: Customized to individual health needs",
                    "Visible Benefits: Reduced stress, improved circulation, and enhanced vitality"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detox & Rejuvenation Programs */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">2. Detox & Rejuvenation Programs</h2>
                <p className="text-lg text-muted-foreground">Rebalance, Renew, and Restore</p>
              </div>
            </div>

            {/* Detox Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={wellnessDetox} 
                alt="Detox and rejuvenation program with herbal treatments at Nura23" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-background p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  In today's fast-paced world, stress, pollution, and unhealthy lifestyle habits can take a toll on your body, leaving you fatigued, sluggish, or low on energy. At Nura23 Skin, Hair & Wellness, our Detox & Rejuvenation Programs are designed to purify your body, boost vitality, and restore overall wellness.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These programs combine modern wellness therapies with traditional holistic approaches to help you eliminate toxins, improve metabolism, and rejuvenate from within.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Are Detox & Rejuvenation Programs?</h4>
                <p className="text-muted-foreground mb-4">Our programs are comprehensive, customized plans that target physical, mental, and emotional well-being. They focus on:</p>
                <div className="space-y-2">
                  {[
                    "Detoxifying the body: Removing toxins from the liver, kidneys, skin, and digestive system",
                    "Rejuvenating the skin and hair: Restoring natural glow, hydration, and vitality",
                    "Boosting energy and immunity: Supporting overall health and resilience",
                    "Reducing stress and promoting relaxation: Enhancing mental clarity and calm"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4">Detox & Rejuvenation Programs often include:</p>
                <div className="space-y-2 mt-2">
                  {[
                    "Personalized diet plans rich in nutrients, antioxidants, and detoxifying foods",
                    "Wellness therapies such as lymphatic drainage, foot reflexology, and hydrotherapy",
                    "Skin and hair rejuvenation treatments like facials, PRP therapy, and hair spa sessions",
                    "Relaxation and stress management techniques including yoga, meditation, and breathing exercises"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Detox & Rejuvenation Programs</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Eliminate Toxins and Impurities</h5>
                    <p className="text-sm text-muted-foreground">Helps remove harmful substances that accumulate due to diet, pollution, or stress, improving overall health.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Boost Energy and Vitality</h5>
                    <p className="text-sm text-muted-foreground">Supports metabolism, improves nutrient absorption, and increases stamina for daily activities.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Enhance Skin & Hair Health</h5>
                    <p className="text-sm text-muted-foreground">Nourishes skin and hair from within, resulting in glowing skin, stronger hair, and reduced hair fall.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Support Weight Management</h5>
                    <p className="text-sm text-muted-foreground">Detoxification helps regulate digestion, metabolism, and fat elimination.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Reduce Stress & Promote Relaxation</h5>
                    <p className="text-sm text-muted-foreground">Combines therapies like reflexology, massage, and meditation to calm the mind and body.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">6. Strengthen Immunity</h5>
                    <p className="text-sm text-muted-foreground">Improved circulation, nutrient absorption, and detoxification support natural immune defenses.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What to Expect During the Program</h4>
                <div className="space-y-3">
                  {[
                    { step: "1. Consultation & Health Assessment", desc: "Our experts assess your lifestyle, diet, stress levels, and wellness goals to design a personalized program." },
                    { step: "2. Customized Detox Plan", desc: "Includes dietary guidance, herbal supplements, and hydration strategies tailored to your needs." },
                    { step: "3. Wellness Therapies", desc: "Depending on your goals, therapies may include: Lymphatic drainage massage, Foot reflexology, Aromatherapy and stress relief sessions, Skin and hair rejuvenation treatments" },
                    { step: "4. Monitoring & Follow-Up", desc: "Progress is monitored regularly, and the program is adjusted to ensure maximum benefits and lasting results." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Detox & Rejuvenation Programs?</h4>
                <p className="text-muted-foreground mb-3">These programs are ideal for individuals who:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Feel fatigued, stressed, or mentally drained",
                    "Have dull skin or hair issues",
                    "Want to improve metabolism and immunity",
                    "Seek natural weight management support",
                    "Desire overall wellness and vitality"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Detox & Rejuvenation Programs are safe for most adults and can be tailored to suit your specific health needs.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Detox & Rejuvenation?</h4>
                <div className="space-y-2">
                  {[
                    { title: "Expert Wellness Team", desc: "Certified therapists and nutritionists guide your program" },
                    { title: "Personalized Approach", desc: "Tailored plans for your unique needs and goals" },
                    { title: "Holistic Wellness", desc: "Combines modern science with traditional therapies" },
                    { title: "Luxury and Comfort", desc: "Serene environment for relaxation and healing" },
                    { title: "Visible Results", desc: "Increased energy, glowing skin, reduced stress, and overall vitality" }
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
                  Nura23 Detox & Rejuvenation Programs help you feel lighter, refreshed, and rejuvenated inside and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pedicure & Manicure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <HandMetal className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">3. Pedicure & Manicure</h2>
                <p className="text-lg text-muted-foreground">Pamper Your Hands and Feet</p>
              </div>
            </div>

            {/* Pedicure & Manicure Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={wellnessPedicure} 
                alt="Luxury pedicure and manicure spa treatment at Nura23" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Beautiful hands and feet are a reflection of self-care and confidence. At Nura23 Skin, Hair & Wellness, our Pedicure & Manicure services are designed to nourish, protect, and enhance the natural beauty of your nails and skin.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our luxury treatments combine hygienic care, therapeutic massage, and high-quality products to give your hands and feet a healthy, radiant, and polished finish. Whether it’s for maintenance, relaxation, or a special occasion, we ensure every detail is perfected with precision and care.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is a Pedicure & Manicure?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A manicure focuses on the care, treatment, and beautification of the hands and nails, while a pedicure does the same for the feet. These treatments go beyond aesthetics: they promote healthy nails, smooth skin, and improve circulation.
                </p>
                <div className="space-y-2">
                  {[
                    "Nail shaping and trimming",
                    "Cuticle care and removal of dead skin",
                    "Exfoliation to smooth rough skin",
                    "Hydrating massage for hands and feet",
                    "Application of polish, gel, or natural finishes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  At Nura23, we customize each session based on your nail health, skin condition, and personal preferences.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Pedicure & Manicure</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Healthy Nails & Cuticles</h5>
                    <p className="text-sm text-muted-foreground">Regular treatments prevent nail damage, fungal infections, and ingrown nails while keeping cuticles smooth and soft.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Exfoliated and Soft Skin</h5>
                    <p className="text-sm text-muted-foreground">Dead skin cells are gently removed, leaving hands and feet smooth, hydrated, and rejuvenated.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Improved Circulation</h5>
                    <p className="text-sm text-muted-foreground">Massage during the session stimulates blood flow, reducing stiffness and fatigue in hands and feet.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Stress Relief & Relaxation</h5>
                    <p className="text-sm text-muted-foreground">Therapeutic hand and foot massages promote relaxation, reduce tension, and improve overall well-being.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Enhanced Appearance</h5>
                    <p className="text-sm text-muted-foreground">Polished nails and healthy skin add elegance, confidence, and a refined look to your hands and feet.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">The Nura23 Pedicure & Manicure Experience</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Consultation & Nail Assessment", desc: "We begin with a detailed assessment of nail and skin health, identifying concerns such as brittle nails, dryness, or calluses." },
                    { step: "Step 2: Cleansing & Soaking", desc: "Hands and feet are soaked in aromatic water infused with essential oils to soften the skin and nails, preparing them for gentle treatment." },
                    { step: "Step 3: Nail & Cuticle Care", desc: "Nails are trimmed, shaped, and buffed, and cuticles are carefully treated to promote healthy growth." },
                    { step: "Step 4: Exfoliation & Massage", desc: "A mild exfoliant removes dead skin, followed by a hydrating massage to nourish skin, relax muscles, and stimulate circulation." },
                    { step: "Step 5: Polishing & Finishing", desc: "Finally, nails are polished, buffed, or treated with gel finishes as per your preference. We offer long-lasting, chip-resistant nail options for a perfect look." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Pedicure & Manicure?</h4>
                <p className="text-muted-foreground mb-3">Pedicure and manicure services are suitable for:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Individuals seeking healthy and polished nails",
                    "People with dry, rough, or cracked skin on hands and feet",
                    "Those looking to relieve stress and improve circulation",
                    "Anyone preparing for special occasions or professional appearances",
                    "Clients who want a luxury, hygienic, and rejuvenating experience"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Pedicure & Manicure?</h4>
                <div className="space-y-2">
                  {[
                    "Certified Nail Therapists: Skilled professionals ensuring precision and safety",
                    "Hygienic & Luxurious Environment: Relaxing spa experience with sanitized tools",
                    "Premium Products: High-quality creams, scrubs, and nail polishes",
                    "Personalized Treatments: Customized sessions to address your unique needs",
                    "Visible Results: Smooth skin, healthy nails, and a polished, elegant finish"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Slimming & Weight Management Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingDown className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">4. Slimming & Weight Management</h2>
                <p className="text-lg text-muted-foreground">Achieve Your Ideal Body Naturally</p>
              </div>
            </div>

            {/* Slimming & Weight Management Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={wellnessSlimming} 
                alt="Slimming and weight management program at Nura23" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Maintaining a healthy weight is not just about appearance — it’s about wellness, energy, and long-term health. At Nura23 Skin, Hair & Wellness, our Slimming & Weight Management programs are designed to help you lose excess fat, tone your body, and achieve sustainable results.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our approach combines advanced technologies, personalized nutrition plans, and holistic wellness therapies to ensure that weight management is safe, effective, and tailored to your lifestyle.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Slimming & Weight Management Therapy?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our programs are comprehensive, goal-oriented plans that focus on:
                </p>
                <div className="space-y-2">
                  {[
                    "Fat reduction and body contouring: Target stubborn areas for a toned silhouette",
                    "Boosting metabolism and energy levels: Improve fat burning and stamina",
                    "Promoting healthy eating habits: Sustainable lifestyle changes for long-term results",
                    "Supporting overall wellness: Reduce stress, improve digestion, and enhance vitality"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The therapies often combine:
                </p>
                <div className="space-y-2 mt-2">
                  {[
                    "Non-invasive body contouring treatments like RF (Radio Frequency) slimming, ultrasonic cavitation, or laser fat reduction",
                    "Personalized nutrition and diet plans designed by certified nutritionists",
                    "Detox therapies to enhance metabolism and remove toxins",
                    "Fitness guidance and low-impact exercise routines",
                    "Stress management techniques including yoga, meditation, and relaxation therapy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Slimming & Weight Management Programs</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Safe & Effective Fat Reduction</h5>
                    <p className="text-sm text-muted-foreground">Target stubborn fat in the abdomen, thighs, arms, and hips without surgery.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Enhanced Metabolism & Energy</h5>
                    <p className="text-sm text-muted-foreground">Supports natural fat burning and boosts overall energy levels.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Body Contouring & Toning</h5>
                    <p className="text-sm text-muted-foreground">Non-invasive treatments help sculpt a toned, balanced body.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Improved Health & Wellness</h5>
                    <p className="text-sm text-muted-foreground">Reduces risk of lifestyle diseases like obesity, diabetes, and hypertension.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Sustainable Results</h5>
                    <p className="text-sm text-muted-foreground">Combines therapy, nutrition, and fitness for long-term weight management.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">6. Stress Reduction & Mental Wellness</h5>
                    <p className="text-sm text-muted-foreground">Holistic programs also focus on mental well-being, promoting relaxation and confidence.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Program Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Consultation & Assessment", desc: "A thorough evaluation of body composition, lifestyle, and health goals helps our experts design a personalized slimming plan." },
                    { step: "Step 2: Non-Invasive Body Contouring", desc: "Technologies like RF slimming, ultrasound cavitation, and laser therapy target fat deposits, improve skin elasticity, and contour the body." },
                    { step: "Step 3: Personalized Nutrition & Diet Plan", desc: "Certified nutritionists provide balanced diet recommendations tailored to your metabolic needs, preferences, and goals." },
                    { step: "Step 4: Fitness & Lifestyle Guidance", desc: "Low-impact exercises, stretching routines, and activity guidance support calorie burning, strength building, and posture improvement." },
                    { step: "Step 5: Monitoring & Follow-Up", desc: "Regular progress tracking ensures optimal results and adjustments to the plan as needed." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Slimming Programs?</h4>
                <p className="text-muted-foreground mb-3">These programs are ideal for:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Individuals seeking safe, non-surgical fat reduction",
                    "Those struggling with stubborn body fat or uneven contours",
                    "People looking for holistic weight management and wellness",
                    "Clients aiming for long-term health improvement and lifestyle changes",
                    "Anyone seeking confidence, energy, and body positivity"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Programs are tailored to each individual, ensuring safe and sustainable outcomes.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Slimming & Weight Management?</h4>
                <div className="space-y-2">
                  {[
                    "Expert Team: Certified wellness professionals and nutritionists",
                    "Advanced Technology: Safe and effective non-invasive body contouring devices",
                    "Personalized Programs: Tailored to your health, goals, and lifestyle",
                    "Holistic Approach: Combines nutrition, therapy, fitness, and stress management",
                    "Visible Results: Fat reduction, toned body, improved confidence, and wellness"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stress Relief & Relaxation Therapy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">5. Stress Relief & Relaxation Therapy</h2>
                <p className="text-lg text-muted-foreground">Restore Calm and Balance</p>
              </div>
            </div>

            {/* Stress Relief & Relaxation Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={wellnessStressRelief} 
                alt="Stress relief and relaxation therapy at Nura23" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  In today’s fast-paced world, stress is an inevitable part of life. Chronic stress not only affects your mental well-being, but also your physical health, sleep, and energy levels. At Nura23 Skin, Hair & Wellness, our Stress Relief & Relaxation Therapy is designed to help you release tension, restore balance, and promote overall wellness.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Through a combination of therapeutic massage, soothing techniques, and holistic wellness therapies, we ensure that every session leaves you feeling calm, refreshed, and revitalized.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Stress Relief & Relaxation Therapy?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Stress Relief & Relaxation Therapy focuses on reducing mental and physical tension through a variety of techniques, including:
                </p>
                <div className="space-y-2">
                  {[
                    "Therapeutic massages to relax muscles and improve blood flow",
                    "Aromatherapy using essential oils for calming effects",
                    "Foot reflexology to restore energy balance",
                    "Mindfulness and breathing exercises to soothe the nervous system"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This holistic approach addresses both the physical symptoms of stress, such as tight muscles and headaches, and emotional or mental tension, promoting deep relaxation and inner calm.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Stress Relief & Relaxation Therapy</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Reduces Physical Tension</h5>
                    <p className="text-sm text-muted-foreground">Massages and targeted therapies relieve muscle stiffness, neck and shoulder tension, and body fatigue.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Enhances Mental Well-Being</h5>
                    <p className="text-sm text-muted-foreground">Promotes relaxation, reduces anxiety, and improves mood and emotional resilience.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Improves Sleep Quality</h5>
                    <p className="text-sm text-muted-foreground">Deep relaxation helps regulate sleep cycles, allowing for restful and rejuvenating sleep.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Boosts Circulation and Detoxification</h5>
                    <p className="text-sm text-muted-foreground">Techniques like massage and lymphatic stimulation improve blood flow, oxygenation, and toxin removal.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Strengthens Immunity</h5>
                    <p className="text-sm text-muted-foreground">Reduces stress hormones, helping the body’s immune system function optimally.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">6. Promotes Overall Wellness</h5>
                    <p className="text-sm text-muted-foreground">Enhances focus, energy, and mental clarity while fostering a sense of inner peace.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Therapy Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Consultation & Assessment", desc: "We begin with a personal consultation to understand your stress levels, lifestyle habits, and physical concerns. This helps us customize the therapy to your unique needs." },
                    { step: "Step 2: Personalized Therapy Plan", desc: "Depending on your goals, we design a combination of: Aromatherapy massage, Reflexology or acupressure, Body massage using soothing techniques, Guided relaxation and breathing exercises." },
                    { step: "Step 3: Therapy Session", desc: "Therapists use expert techniques to apply gentle pressure, kneading, and stretching to relax muscles, release tension, and improve circulation." },
                    { step: "Step 4: Post-Therapy Care", desc: "After the session, light hydration, stretching, or mindfulness exercises may be recommended to maximize the benefits and prolong relaxation." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Stress Relief Therapy?</h4>
                <p className="text-muted-foreground mb-3">This therapy is ideal for:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Individuals experiencing high stress or anxiety",
                    "Professionals with tension from long working hours",
                    "Those with muscle stiffness, headaches, or fatigue",
                    "People seeking better sleep, energy, and focus",
                    "Anyone wanting a natural, non-invasive approach to wellness"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Regular sessions help maintain mental clarity, physical relaxation, and emotional balance.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Stress Relief & Relaxation Therapy?</h4>
                <div className="space-y-2">
                  {[
                    "Certified Therapists: Skilled professionals in massage, reflexology, and wellness techniques",
                    "Holistic Approach: Combines physical, emotional, and mental relaxation",
                    "Luxury Environment: Serene and hygienic spa setting for maximum comfort",
                    "Customized Programs: Tailored to your individual stress levels and wellness goals",
                    "Visible Results: Reduced tension, improved mood, better sleep, and enhanced vitality"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Holistic Massage & Aromatherapy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Flower2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">6. Holistic Massage & Aromatherapy</h2>
                <p className="text-lg text-muted-foreground">Relax, Heal, and Rejuvenate</p>
              </div>
            </div>

            {/* Holistic Massage & Aromatherapy Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={wellnessMassage} 
                alt="Holistic massage and aromatherapy session at Nura23" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23, we believe true wellness comes from balancing the body, mind, and spirit. Our Holistic Massage & Aromatherapy therapies combine ancient healing traditions and modern techniques to reduce stress, relieve pain, and promote overall well-being.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Through the synergy of touch and essential oils, these therapies offer a deep sense of relaxation, improved circulation, and emotional balance, making it ideal for anyone seeking natural, therapeutic, and rejuvenating care.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Holistic Massage & Aromatherapy?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Holistic Massage focuses on treating the entire body rather than just symptoms, addressing physical tension, emotional stress, and energetic imbalances. Aromatherapy enhances the experience using essential oils extracted from plants, which have therapeutic benefits for the mind and body.
                </p>
                <div className="space-y-2">
                  {[
                    "Relieve muscle tension and stiffness",
                    "Improve blood and lymph circulation",
                    "Reduce stress, anxiety, and fatigue",
                    "Promote mental clarity and emotional well-being",
                    "Support detoxification and rejuvenation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Holistic Massage & Aromatherapy</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Stress Reduction & Relaxation</h5>
                    <p className="text-sm text-muted-foreground">Calms the nervous system, lowers stress hormones, and promotes a sense of peace and balance.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Pain Relief & Muscle Healing</h5>
                    <p className="text-sm text-muted-foreground">Targets areas of stiffness, soreness, and chronic pain, improving mobility and reducing discomfort.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Improved Circulation & Detoxification</h5>
                    <p className="text-sm text-muted-foreground">Massage stimulates blood and lymph flow, helping the body remove toxins and improve nutrient delivery.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Enhanced Mental Clarity & Mood</h5>
                    <p className="text-sm text-muted-foreground">Aromatherapy works on emotional well-being, reducing anxiety and uplifting mood naturally.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Skin Nourishment & Hydration</h5>
                    <p className="text-sm text-muted-foreground">Oils used in therapy nourish and moisturize the skin, leaving it soft, glowing, and rejuvenated.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">6. Holistic Wellness & Energy Balance</h5>
                    <p className="text-sm text-muted-foreground">Supports overall harmony of body, mind, and spirit, improving vitality and inner calm.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Therapy Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Personalized Consultation", desc: "We start with a comprehensive assessment of your physical and emotional needs to customize your session." },
                    { step: "Step 2: Selection of Essential Oils", desc: "Based on your goals — relaxation, detoxification, or energy boost — therapists select essential oils such as lavender, eucalyptus, rosemary, or peppermint." },
                    { step: "Step 3: Holistic Massage", desc: "Using expert techniques, therapists apply gentle to firm pressure on muscles, joints, and acupressure points. The massage: Relieves tension and stiffness, Stimulates circulation and lymphatic flow, Balances energy pathways for overall wellness." },
                    { step: "Step 4: Aromatherapy Integration", desc: "The chosen essential oils are massaged into the skin or diffused into the room, allowing the body and mind to absorb the therapeutic benefits." },
                    { step: "Step 5: Post-Therapy Relaxation", desc: "After the session, light hydration or guided breathing exercises may be recommended to extend the relaxation and rejuvenation effects." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Holistic Massage & Aromatherapy?</h4>
                <p className="text-muted-foreground mb-3">Individuals experiencing chronic stress or anxiety, those with muscle tension, fatigue, or stiffness, people seeking improved circulation and detoxification, anyone wanting mental clarity, relaxation, and emotional balance, clients looking for natural, non-invasive wellness therapy.</p>
                <p className="text-muted-foreground mb-3">Regular sessions help maintain physical vitality, emotional stability, and mental focus.</p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Holistic Massage & Aromatherapy?</h4>
                <div className="space-y-2">
                  {[
                    "Certified Therapists: Skilled in both massage techniques and aromatherapy",
                    "Luxury Spa Environment: Relaxing and hygienic setting for a premium experience",
                    "Personalized Sessions: Tailored to your unique physical and emotional needs",
                    "High-Quality Oils & Products: Safe, natural, and nourishing",
                    "Visible Results: Reduced tension, improved mood, enhanced skin glow, and overall wellness"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Nutrition & Lifestyle Consultation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Apple className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">7. Nutrition & Lifestyle Consultation</h2>
                <p className="text-lg text-muted-foreground">Achieve Optimal Health</p>
              </div>
            </div>

            {/* Nutrition & Lifestyle Consultation Image */}
            <div className="rounded-lg overflow-hidden shadow-lg my-8">
              <img 
                src={wellnessNutrition} 
                alt="Nutrition and lifestyle consultation at Nura23" 
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Good health begins with balanced nutrition and mindful lifestyle choices. At Nura23 Skin, Hair & Wellness, our Nutrition & Lifestyle Consultation is designed to help you adopt sustainable habits, improve wellness, and achieve your health goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Through personalized plans, expert advice, and holistic guidance, we empower you to enhance your energy, maintain healthy weight, improve skin and hair health, and prevent lifestyle-related illnesses.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What to Expect from Nutrition & Lifestyle Consultation?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nutrition & Lifestyle Consultation is a comprehensive approach that combines:
                </p>
                <div className="space-y-2">
                  {[
                    "Personalized diet planning to meet your body’s unique needs",
                    "Lifestyle assessment and guidance for exercise, sleep, and stress management",
                    "Health goal setting for weight management, energy boost, or disease prevention",
                    "Holistic wellness strategies to support skin, hair, and overall vitality"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our consultations are designed for individuals seeking a practical, science-based, and sustainable approach to health and wellness.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Nutrition & Lifestyle Consultation</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">1. Customized Diet Plans</h5>
                    <p className="text-sm text-muted-foreground">Tailored meal plans based on your age, health condition, activity level, and goals to ensure optimal nutrition and energy.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">2. Weight Management & Fat Reduction</h5>
                    <p className="text-sm text-muted-foreground">Supports healthy weight loss or gain through proper nutrition, portion control, and lifestyle guidance.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">3. Improved Skin & Hair Health</h5>
                    <p className="text-sm text-muted-foreground">Nutrition-focused strategies enhance skin glow, reduce hair fall, and promote overall appearance.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">4. Enhanced Energy & Vitality</h5>
                    <p className="text-sm text-muted-foreground">Balanced meals, hydration guidance, and lifestyle recommendations improve focus, stamina, and productivity.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">5. Stress & Lifestyle Management</h5>
                    <p className="text-sm text-muted-foreground">Guidance on sleep, mindfulness, and physical activity reduces stress and improves mental and emotional well-being.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">6. Long-Term Health Benefits</h5>
                    <p className="text-sm text-muted-foreground">Prevents lifestyle-related diseases such as obesity, diabetes, high blood pressure, and cardiovascular issues.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How the Consultation Works</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Health & Lifestyle Assessment", desc: "We start with a detailed evaluation of your diet, lifestyle habits, medical history, and wellness goals. This helps identify areas for improvement and create a personalized roadmap." },
                    { step: "Step 2: Personalized Nutrition Plan", desc: "Certified nutritionists design balanced, easy-to-follow meal plans, including: Macronutrient and micronutrient balance, Dietary suggestions for hair, skin, and energy enhancement, Foods to boost immunity and detoxification." },
                    { step: "Step 3: Lifestyle Guidance", desc: "Our experts provide guidance on: Sleep and stress management, Physical activity and exercise routines, Mindful practices like meditation and breathing exercises." },
                    { step: "Step 4: Monitoring & Support", desc: "Regular follow-ups ensure progress tracking, motivation, and plan adjustments for maximum results and sustainable lifestyle changes." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Who Can Benefit from Nutrition & Lifestyle Consultation?</h4>
                <p className="text-muted-foreground mb-3">Individuals seeking weight management or fat reduction, people with skin, hair, or energy-related concerns, those with lifestyle-related health risks like high blood pressure or blood sugar issues, anyone wanting to adopt a balanced, sustainable, and health-focused lifestyle, clients aiming for long-term wellness, immunity boost, and overall vitality.</p>
                <p className="text-muted-foreground mb-3">Personalized consultations help create healthy habits that last a lifetime, improving both physical and mental well-being.</p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Nutrition & Lifestyle Consultation?</h4>
                <div className="space-y-2">
                  {[
                    "Certified Nutritionists & Wellness Experts: Skilled in modern and holistic approaches",
                    "Personalized Plans: Tailored to individual needs, goals, and preferences",
                    "Holistic Approach: Integrates nutrition, exercise, and stress management",
                    "Ongoing Support & Motivation: Regular follow-ups to ensure success",
                    "Visible Results: Improved energy, skin and hair health, weight management, and overall wellness"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Begin Your Wellness Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the transformative power of holistic wellness. Let us guide you towards balance, vitality, and inner peace.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Book Wellness Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Wellness;
