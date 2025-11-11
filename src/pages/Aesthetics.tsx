import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Target, Droplets, RefreshCw, Syringe, CheckCircle2, Users, Award, Shield } from "lucide-react";
import aestheticsLuxury from "@/assets/aesthetics-luxury.jpg";
import aestheticsEquipment from "@/assets/aesthetics-equipment.jpg";
import laserHairReduction from "@/assets/laser-hair-reduction-new.png";
import serviceAesthetics2 from "@/assets/service-aesthetics-2.png";
import laserTreatmentSession from "@/assets/laser-hair-reduction-session.png";
import skinTighteningRF from "@/assets/skin-tightening-rf.png";
import bodyContouringRF from "@/assets/body-contouring-rf-new.png";
import prpMicroneedling from "@/assets/prp-microneedling.png";
import botoxFillers from "@/assets/botox-fillers.png";

const Aesthetics = () => {

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">AESTHETICS</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advanced non-invasive aesthetic solutions for body contouring, skin rejuvenation, and facial enhancement. 
              Science-backed treatments that deliver natural, beautiful results.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img 
              src={aestheticsLuxury} 
              alt="Advanced Aesthetic Treatment Room at NURA23" 
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 1. Laser Hair Reduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">1. Laser Hair Reduction</h2>
                <p className="text-lg text-muted-foreground">Smooth, hair-free skin with painless laser technology</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={laserTreatmentSession} 
                alt="Laser Hair Reduction Treatment Session at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Smooth. Silky. Confident. Forever.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23 Skin, Aesthetics & Wellness, we believe that confidence begins with comfort in your own skin. Our Laser Hair Reduction treatments are designed to give you long-lasting smoothness, freedom from frequent waxing or shaving, and the confidence of silky, flawless skin every day.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Combining advanced laser technology with the expertise of certified professionals, Nura23 offers a safe, effective, and comfortable solution for both men and women — suitable for all skin types.
                </p>
                <p className="text-lg font-semibold text-primary mt-4 italic">
                  Because smooth skin is always in style.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is Laser Hair Reduction?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Laser Hair Reduction (LHR) is a non-invasive cosmetic procedure that uses concentrated light energy to target and disable unwanted hair follicles. The laser emits a gentle beam of light absorbed by the pigment (melanin) in the hair shaft, damaging the follicle and preventing future growth — without harming the surrounding skin.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Unlike traditional methods such as waxing, shaving, or threading, LHR offers long-term results, precision, and comfort, making it one of the most popular aesthetic treatments worldwide.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How It Works – The Science of Smoothness</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Nura23, we use FDA-approved laser systems with dual wavelengths that cater to Indian skin tones, ensuring both safety and efficiency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Consultation & Skin Analysis:</span>
                      <span className="text-muted-foreground"> Our expert aestheticians evaluate your hair type, skin tone, and growth pattern to customize a treatment plan.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Pre-Treatment Preparation:</span>
                      <span className="text-muted-foreground"> The targeted area is cleansed, shaved, and prepared to ensure laser energy directly reaches the follicles.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Laser Application:</span>
                      <span className="text-muted-foreground"> The laser device emits controlled light pulses that travel through the skin to the hair root, selectively destroying active hair follicles.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Cooling & Comfort:</span>
                      <span className="text-muted-foreground"> A built-in cooling system soothes the skin, minimizing discomfort or redness during the procedure.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Post-Care:</span>
                      <span className="text-muted-foreground"> Calming gels and sunscreens are applied, and our specialists provide aftercare guidance for the best results.</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Each session targets hair in its active growth phase (Anagen phase). Since not all hairs are active at once, multiple sessions (usually 6–8) are recommended for optimal, long-term reduction.
                </p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg border border-border">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Laser Hair Reduction?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Certified & Experienced Professionals</span>
                      <span className="text-sm text-muted-foreground">Your skin is treated by trained laser aestheticians under dermatological supervision.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Advanced Laser Technology</span>
                      <span className="text-sm text-muted-foreground">We use Diode laser systems, ideal for Indian and sensitive skin types.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Painless & Safe</span>
                      <span className="text-sm text-muted-foreground">Cooling tips, precision control, and calibrated energy ensure a comfortable experience.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Quick & Convenient</span>
                      <span className="text-sm text-muted-foreground">Sessions are short — perfect for busy lifestyles. Most clients resume daily activities immediately.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground block">Customized Treatment Plans</span>
                      <span className="text-sm text-muted-foreground">We personalize energy levels, pulse durations, and cooling settings to your unique skin and hair.</span>
                    </div>
                  </div>
                </div>
                <p className="text-primary italic mt-4 text-center">
                  "Nura23 combines precision science with gentle care — because your comfort matters."
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Areas We Treat</h4>
                <p className="text-muted-foreground mb-4">Laser Hair Reduction can be performed on virtually any area of the body where unwanted hair appears.</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-secondary/10 p-4 rounded-lg border border-border">
                    <h5 className="font-semibold text-foreground mb-3">For Women:</h5>
                    <ul className="space-y-2">
                      {["Face (Upper lip, Chin, Sideburns)", "Underarms", "Arms & Forearms", "Legs & Thighs", "Bikini / Brazilian area", "Back & Abdomen", "Neck & Chest"].map((area, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg border border-border">
                    <h5 className="font-semibold text-foreground mb-3">For Men:</h5>
                    <ul className="space-y-2">
                      {["Beard Shaping", "Neck & Cheeks", "Chest & Back", "Arms & Shoulders", "Legs"].map((area, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-center">
                  You can choose a full-body package or target specific areas based on your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skin Tightening & Lifting (RF) */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">2. Skin Tightening & Lifting (RF)</h2>
                <p className="text-lg text-muted-foreground">Non-Surgical Facelift for Firm, Youthful, and Radiant Skin</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={skinTighteningRF} 
                alt="Skin Tightening & Lifting RF Treatment at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Rediscover Firmness. Redefine Confidence.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At Nura23 Skin, Aesthetics & Wellness, we believe that ageless beauty doesn't come from surgery — it comes from science, care, and precision.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Our RF Skin Tightening & Lifting treatment uses advanced Radio Frequency (RF) technology to tighten loose skin, sculpt facial contours, and stimulate natural collagen production — giving you a visibly firmer, lifted, and rejuvenated appearance without needles or downtime.
                  </p>
                  <p className="text-lg font-semibold text-primary mt-4 italic">
                    Because real beauty radiates from confidence, not correction.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">What Is RF Skin Tightening & Lifting?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Radio Frequency (RF) Skin Tightening is a non-invasive aesthetic procedure that delivers controlled heat energy deep into the skin layers. This heat stimulates collagen and elastin regeneration — the key structural proteins responsible for firmness, elasticity, and youthful skin texture.
                  </p>
                  <div className="mt-4 space-y-2">
                    {[
                      "Reduced wrinkles and fine lines",
                      "Tighter, smoother skin",
                      "Improved facial contours",
                      "A naturally lifted look"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Unlike surgical facelifts, RF treatments require no anesthesia, no incisions, and no recovery time — making it the preferred modern solution for skin rejuvenation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    At Nura23, we use FDA-approved RF technology with customizable intensity levels, ensuring safe, comfortable, and effective sessions for every skin type.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">How RF Technology Works – The Science Behind the Lift</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The RF energy penetrates the deeper dermal layers (without damaging the surface) and heats the tissues to approximately 40–45°C. This controlled thermal stimulation triggers:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">1. Immediate Collagen Contraction</h5>
                      <p className="text-sm text-muted-foreground">Existing collagen fibers tighten, giving an instant firming effect.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">2. New Collagen Formation</h5>
                      <p className="text-sm text-muted-foreground">Over the next few weeks, the skin naturally produces fresh collagen and elastin.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">3. Enhanced Blood Circulation</h5>
                      <p className="text-sm text-muted-foreground">Improved oxygen and nutrient flow revitalizes dull, tired skin.</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-2">4. Long-Term Rejuvenation</h5>
                      <p className="text-sm text-muted-foreground">Skin texture continues to improve for months after treatment.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-bold mb-4 text-foreground">Key Benefits of RF Skin Tightening & Lifting</h4>
                  <div className="space-y-3">
                    {[
                      { title: "Non-Surgical Facelift", desc: "Achieve youthful definition and lifted contours without going under the knife" },
                      { title: "Stimulates Natural Collagen", desc: "Encourages your body to produce new collagen for lasting firmness" },
                      { title: "Improves Elasticity", desc: "Restores bounce and resilience to sagging skin" },
                      { title: "Smooths Fine Lines & Wrinkles", desc: "Softens crow's feet, smile lines, and forehead creases" },
                      { title: "Contours Face & Jawline", desc: "Defines facial shape and reduces jowls for a sculpted profile" },
                      { title: "Safe for All Skin Types", desc: "RF energy is color-blind — perfect for Indian and sensitive skin tones" },
                      { title: "Minimal Downtime", desc: "No redness, no peeling, no needles — just glow and go!" }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-foreground block">{benefit.title}</span>
                          <span className="text-sm text-muted-foreground">{benefit.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-primary italic mt-6 text-center text-lg">
                    "Feel the lift. See the glow. Love the reflection."
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">Areas That Can Be Treated</h4>
                  <p className="text-muted-foreground mb-4">RF Skin Tightening & Lifting is versatile and effective for multiple body and facial areas, including:</p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-secondary/10 p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-3">Face:</h5>
                      <ul className="space-y-2">
                        {["Forehead & Brow", "Cheeks & Jawline", "Nasolabial Folds (Smile Lines)", "Chin & Neck", "Under-eye area"].map((area, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-muted-foreground">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/10 p-4 rounded-lg border border-border">
                      <h5 className="font-semibold text-foreground mb-3">Body:</h5>
                      <ul className="space-y-2">
                        {["Upper Arms (Bat Wings)", "Abdomen", "Thighs & Buttocks", "Knees", "Décolletage (Chest Area)"].map((area, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-muted-foreground">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-center">
                    Whether you want to refine facial contours or firm up post-weight-loss skin, Nura23's RF treatments deliver visible tightening with every session.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for RF Skin Tightening?</h4>
                  <p className="text-muted-foreground mb-4">At Nura23, we redefine non-surgical aesthetics with precision technology, medical expertise, and personalized care.</p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">Certified Aesthetic Experts</span>
                        <span className="text-sm text-muted-foreground">All procedures are performed by trained skincare professionals under dermatologist supervision.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">Advanced RF Devices</span>
                        <span className="text-sm text-muted-foreground">We use next-generation bipolar and multipolar RF systems that provide uniform heating and deeper collagen stimulation.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">Custom Treatment Plans</span>
                        <span className="text-sm text-muted-foreground">Every skin type and concern is unique — so we tailor intensity, duration, and frequency accordingly.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">Safe, Painless, and Relaxing</span>
                        <span className="text-sm text-muted-foreground">Clients describe the sensation as a gentle warmth or massage — not pain.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <span className="font-bold text-primary">5</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">Instant & Progressive Results</span>
                        <span className="text-sm text-muted-foreground">Experience a visible lift immediately, with continued improvement over 8–12 weeks.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <span className="font-bold text-primary">6</span>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground block">Holistic Wellness Integration</span>
                        <span className="text-sm text-muted-foreground">Pair your RF sessions with Nura23's nutritional guidance, hydration facials, and LED therapy for total skin rejuvenation.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg border border-border">
                  <h4 className="text-xl font-bold mb-4 text-foreground">Ideal Candidates for RF Skin Tightening</h4>
                  <p className="text-muted-foreground mb-4">RF Skin Lifting is suitable for both men and women who want to reverse early signs of aging or improve skin firmness without surgery.</p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">You're an ideal candidate if you:</h5>
                      <div className="space-y-2">
                        {[
                          "Have mild to moderate sagging skin",
                          "Notice loss of facial definition or firmness",
                          "Prefer a non-surgical alternative to facelift",
                          "Want to delay or avoid invasive cosmetic procedures",
                          "Have post-pregnancy or post-weight-loss skin laxity"
                        ].map((point, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Avoid treatment if you:</h5>
                      <div className="space-y-2">
                        {[
                          "Are pregnant or breastfeeding",
                          "Have active skin infections or open wounds",
                          "Have metal implants or pacemakers in the treatment area"
                        ].map((point, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-destructive">✗</span>
                            <span className="text-sm text-muted-foreground">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Our team conducts a detailed skin analysis before every treatment to ensure it's safe and suitable for your skin condition.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="text-xl font-bold mb-3 text-foreground">Expected Results</h4>
                  <p className="text-muted-foreground mb-4">
                    You'll notice instant skin tightening after the first session as collagen fibers contract. Over the next few weeks, your skin continues to firm, smooth, and glow as new collagen forms.
                  </p>
                  <div className="space-y-2 mb-4">
                    <h5 className="font-semibold text-foreground">Visible Improvements:</h5>
                    {["Lifted jawline & cheeks", "Reduced wrinkles & fine lines", "Smoother texture", "Youthful glow"].map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For best results, we recommend a course of 6–8 sessions, spaced 2–3 weeks apart.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* 3. Body Contouring & Fat Reduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">3. Body Contouring & Fat Reduction (RF)</h2>
                <p className="text-lg text-muted-foreground">Sculpt your silhouette safely, naturally, and effectively</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={bodyContouringRF} 
                alt="Body Contouring & Fat Reduction RF Treatment at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Confidence Begins with Contour</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23 Skin, Aesthetics & Wellness, we understand that beauty is not about perfection — it's about proportion, confidence, and self-love. Our RF Body Contouring & Fat Reduction treatment combines cutting-edge radiofrequency (RF) technology with expert aesthetic care to help you sculpt, tone, and tighten your body — all without surgery, needles, or downtime.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Whether it's stubborn belly fat, love handles, sagging arms, or loose post-pregnancy skin, our treatment helps you achieve a firm, contoured, and beautifully defined body — safely and naturally.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">What Is RF Body Contouring & Fat Reduction?</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Radio Frequency (RF) Body Contouring is a non-invasive cosmetic treatment that uses controlled heat energy to:
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "Break down stubborn fat cells",
                    "Stimulate collagen and elastin production",
                    "Tighten and smooth the overlying skin"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The RF device emits radio waves that penetrate deep into the skin layers, heating adipose tissue (fat cells) and fibrous connective tissue. This heat:
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    "Disrupts fat cell membranes, allowing the body to naturally eliminate them through metabolic processes",
                    "Contracts collagen fibers for immediate firming",
                    "Triggers new collagen synthesis for long-term tightening and improved elasticity"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23, we use FDA-approved multipolar RF systems that ensure precision, comfort, and safety — perfect for all skin types and body areas.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">How RF Body Contouring Works – The Science of Sculpting</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  RF energy safely heats the skin's deeper layers (dermis and subcutaneous fat) to 40–45°C while keeping the surface cool and protected. This process triggers three core responses:
                </p>
                <div className="space-y-3">
                  <div className="bg-background p-4 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-foreground mb-2">1. Fat Cell Breakdown (Lipolysis)</h5>
                    <p className="text-sm text-muted-foreground">The heat damages the fat cell walls, causing the cells to release stored triglycerides. The body then naturally metabolizes and flushes these out through the lymphatic system.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-foreground mb-2">2. Collagen Remodeling</h5>
                    <p className="text-sm text-muted-foreground">The thermal stimulation tightens existing collagen fibers and activates fibroblasts to produce new collagen and elastin — the key proteins that maintain firmness and elasticity.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border-l-4 border-primary">
                    <h5 className="font-semibold text-foreground mb-2">3. Improved Blood & Lymph Circulation</h5>
                    <p className="text-sm text-muted-foreground">RF enhances circulation and drainage, reducing fluid retention and improving skin tone and texture.</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  The result? Slimmer contours, smoother skin, and a visibly toned body — with results that improve over time.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Key Benefits of RF Body Contouring & Fat Reduction</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Non-Surgical & Safe", desc: "No incisions, no anesthesia, no scars. 100% non-invasive, FDA-approved, and clinically proven" },
                    { title: "Reduces Stubborn Fat", desc: "Targets localized fat that resists diet and exercise — like the abdomen, thighs, flanks, or arms" },
                    { title: "Tightens Loose Skin", desc: "Improves elasticity and firms sagging or post-pregnancy skin" },
                    { title: "Enhances Body Shape", desc: "Sculpts and defines your natural curves without changing your body's natural proportion" },
                    { title: "Boosts Collagen Production", desc: "Improves skin texture, smoothness, and youthful tone" },
                    { title: "No Downtime or Recovery", desc: "Walk in and walk out glowing — return to your routine immediately" },
                    { title: "Visible, Long-Lasting Results", desc: "Results appear gradually, improving with each session and lasting for months with proper lifestyle maintenance" }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground block">{benefit.title}</span>
                        <span className="text-sm text-muted-foreground">{benefit.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-primary italic mt-6 text-center text-lg">
                  "Reshape your body — not your lifestyle."
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Body Contouring?</h4>
                <p className="text-muted-foreground mb-4">At Nura23 Skin, Aesthetics & Wellness, we go beyond beauty — we focus on balance, proportion, and overall well-being.</p>
                <p className="text-muted-foreground mb-4 font-semibold">Here's what makes us a trusted name in aesthetic care:</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Advanced RF Technology</span>
                      <span className="text-sm text-muted-foreground">We use multipolar and bipolar RF systems with integrated cooling, ensuring even heat distribution and patient comfort.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Certified Aesthetic Professionals</span>
                      <span className="text-sm text-muted-foreground">Your treatment is performed by trained specialists under dermatologist supervision for maximum safety.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Customized Contour Plans</span>
                      <span className="text-sm text-muted-foreground">Every body is unique — so is every plan. We tailor treatment sessions, intensity, and duration to your individual goals.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Quick Sessions</span>
                      <span className="text-sm text-muted-foreground">Each session takes 30–60 minutes, making it perfect for busy schedules.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="font-bold text-primary">5</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Holistic Support</span>
                      <span className="text-sm text-muted-foreground">Combine with diet guidance, hydration therapy, or lymphatic massage at Nura23 for enhanced, long-lasting results.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <span className="font-bold text-primary">6</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground block">Visible Results, Naturally</span>
                      <span className="text-sm text-muted-foreground">We believe in enhancing your natural shape — not changing it. You'll look toned, balanced, and beautifully confident.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Who Is the Ideal Candidate for RF Body Contouring?</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">You're an ideal candidate if:</h5>
                    <div className="space-y-2">
                      {[
                        "You have localized fat pockets that resist diet/exercise",
                        "You have mild to moderate skin laxity",
                        "You want to improve body shape without surgery",
                        "You're close to your ideal weight but want refinement"
                      ].map((point, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Not suitable for:</h5>
                    <div className="space-y-2">
                      {[
                        "Pregnant or breastfeeding women",
                        "People with pacemakers, metal implants, or active skin infections",
                        "Severely obese individuals (BMI above 30 may require combined programs)"
                      ].map((point, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-destructive">✗</span>
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  A consultation at Nura23 includes body composition analysis, so we can personalize the perfect contouring plan for you.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h4 className="text-xl font-bold mb-4 text-foreground">Your Treatment Experience</h4>
                <div className="space-y-4">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Step 1: Consultation & Mapping</h5>
                    <p className="text-sm text-muted-foreground">Our expert evaluates your skin type, fat distribution, and goals to plan a precise contouring map.</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Step 2: Pre-Treatment Preparation</h5>
                    <p className="text-sm text-muted-foreground">The treatment area is cleansed and prepped. No anesthesia is required.</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Step 3: RF Application</h5>
                    <p className="text-sm text-muted-foreground">The RF handpiece glides over the targeted zone, emitting gentle heat. You'll feel a warm, comfortable sensation — like a soothing massage.</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Step 4: Post-Treatment Care</h5>
                    <p className="text-sm text-muted-foreground">Cooling gel or hydrating lotion is applied to soothe the skin. You can resume normal activities right away.</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-1">Session Duration:</p>
                  <p className="text-sm text-muted-foreground">30–90 minutes per session depending on area size.</p>
                  <p className="text-sm text-muted-foreground">Recommended sessions: 6–8 for optimal results.</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Areas We Treat</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3">For Women:</h5>
                    <ul className="space-y-2">
                      {["Abdomen & Waist", "Hips & Love Handles", "Thighs & Buttocks", "Arms & Underarms", "Back & Bra Line", "Post-pregnancy belly tightening"].map((area, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3">For Men:</h5>
                    <ul className="space-y-2">
                      {["Abdomen & Flanks", "Chest (for fat reduction and tightening)", "Arms", "Neck & Double Chin"].map((area, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-muted-foreground">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-3 text-foreground">Results You Can Expect</h4>
                <p className="text-muted-foreground mb-4">Most clients experience:</p>
                <div className="space-y-2 mb-4">
                  {[
                    "Tighter skin and improved texture after the first session",
                    "Visible inch loss and contouring after 3–4 sessions",
                    "Smoother, firmer silhouette within 8–10 weeks"
                  ].map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  With a balanced diet and regular hydration, results last up to 12–18 months.
                </p>
                <div className="bg-background p-4 rounded">
                  <h5 className="font-semibold text-foreground mb-2">Average inch loss:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Abdomen: 2–4 cm</li>
                    <li>• Thighs: 2–3 cm</li>
                    <li>• Arms: 1–2 cm</li>
                  </ul>
                </div>
                <p className="text-primary italic mt-4 text-center text-lg">
                  "Your dream shape — sculpted by science, perfected by care."
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Aftercare & Maintenance Tips</h4>
                <p className="text-muted-foreground mb-3">To enhance and maintain your RF body contouring results:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Drink 2–3 liters of water daily",
                    "Avoid alcohol or caffeine for 24–48 hours post-session",
                    "Maintain a balanced diet rich in proteins and antioxidants",
                    "Light exercise or walking aids natural fat elimination",
                    "Apply moisturizer to keep the skin supple",
                    "Schedule maintenance sessions every 6–8 months"
                  ].map((tip, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRP / Microneedling / Chemical Peels */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">4. PRP / Microneedling / Chemical Peels</h2>
                <p className="text-lg text-muted-foreground">Stimulate new skin growth and glow</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={prpMicroneedling} 
                alt="PRP Microneedling Treatment at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-background p-8 rounded-lg border border-border space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Reclaim Your Natural Radiance with Advanced Skin Rejuvenation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23 Skin, Hair & Wellness, we believe that glowing skin is not just a sign of beauty — it reflects inner wellness and confidence. Over time, stress, sun exposure, pollution, and aging can leave your skin looking dull, uneven, or tired. That's where our advanced PRP Therapy, Microneedling, and Chemical Peels come in — powerful, science-backed aesthetic treatments that stimulate your skin's natural healing and unveil a smoother, fresher, and more radiant complexion.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-foreground">What Are PRP, Microneedling & Chemical Peels?</h4>
                
                <div className="space-y-6">
                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h5 className="text-lg font-bold mb-3 text-foreground">1. PRP (Platelet-Rich Plasma) Therapy – Natural Skin Regeneration</h5>
                    <p className="text-muted-foreground mb-3">
                      Known as the "Vampire Facial," PRP uses your body's own platelets to heal and renew your skin naturally. A small amount of your blood is drawn, processed in a centrifuge, and the platelet-rich plasma is extracted — rich in growth factors that stimulate cell regeneration and collagen production.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      When injected or infused into your skin, PRP accelerates tissue repair, improves texture, reduces fine lines, and restores natural glow.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Benefits of PRP Therapy:</p>
                      {[
                        "Natural collagen stimulation",
                        "Reduces wrinkles and fine lines",
                        "Diminishes acne scars and pigmentation",
                        "Restores youthful texture and elasticity",
                        "Safe and biocompatible (no synthetic substances)"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h5 className="text-lg font-bold mb-3 text-foreground">2. Microneedling – Collagen Induction Therapy</h5>
                    <p className="text-muted-foreground mb-3">
                      Microneedling is a cutting-edge, minimally invasive treatment that stimulates the skin's healing process by creating controlled micro-injuries using fine needles. This triggers your skin to produce new collagen and elastin — the essential proteins responsible for firmness and smoothness.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      At Nura23, we use advanced microneedling devices with medical-grade precision to ensure maximum results and minimal downtime.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Benefits of Microneedling:</p>
                      {[
                        "Reduces acne scars and open pores",
                        "Improves skin texture and tone",
                        "Reduces wrinkles and stretch marks",
                        "Enhances absorption of serums and nutrients",
                        "Promotes collagen and elastin regeneration"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      When combined with PRP therapy, microneedling allows deeper penetration of growth factors, amplifying the skin's natural glow and tightening effect.
                    </p>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h5 className="text-lg font-bold mb-3 text-foreground">3. Chemical Peels – Reveal a Fresh, Radiant Layer</h5>
                    <p className="text-muted-foreground mb-3">
                      Chemical Peels use safe, dermatologist-grade solutions (like glycolic acid, lactic acid, or salicylic acid) to gently exfoliate the uppermost layer of dead skin cells. This controlled peeling process reveals a newer, smoother, and brighter layer beneath, while promoting faster cell renewal.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      At Nura23, we offer customized peels — from mild Glow Peels to deeper Pigmentation Correction Peels — tailored to your skin type and concern.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Benefits of Chemical Peels:</p>
                      {[
                        "Improves dull, uneven skin tone",
                        "Reduces pigmentation, melasma, and sun damage",
                        "Clears acne and controls oil production",
                        "Refines fine lines and rough texture",
                        "Enhances skin's natural brightness"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">The Nura23 Rejuvenation Experience</h4>
                <p className="text-muted-foreground mb-4">At Nura23, every treatment is custom-designed after a detailed skin analysis by our expert aesthetician or dermatologist.</p>
                <div className="space-y-3">
                  {[
                    { step: "1. Consultation & Skin Assessment", desc: "We analyze your skin's condition, texture, and sensitivity using advanced diagnostic tools." },
                    { step: "2. Customized Plan", desc: "Based on your goals — glow, anti-aging, acne reduction, or scar healing — our expert suggests the most suitable combination." },
                    { step: "3. Preparation & Cleansing", desc: "The skin is deeply cleansed and prepped with a soothing serum to ensure comfort and effectiveness." },
                    { step: "4. Treatment Application", desc: "PRP: Platelets are injected or infused using microneedling. Microneedling: A fine device stimulates collagen while infusing nutrient serums. Chemical Peel: A mild chemical solution is applied for a few minutes, then neutralized and followed by cooling therapy." },
                    { step: "5. Post-Treatment Care", desc: "A calming mask and sun protection are applied to ensure healing and glow enhancement." },
                    { step: "6. Follow-Up", desc: "We provide detailed aftercare instructions and a personalized skincare regimen to maintain long-term results." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-secondary/10 p-4 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground block">{item.step}</span>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-3 text-foreground">✨ Visible Results You'll Love</h4>
                <p className="text-muted-foreground mb-4">
                  Most clients notice a visible improvement in skin texture, brightness, and firmness within days of the first session. With consistent treatments, your skin will continue to improve in elasticity, tone, and youthfulness over time.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Results You Can Expect:</p>
                  {[
                    "Radiant, youthful complexion",
                    "Reduced pigmentation and acne scars",
                    "Firmer, smoother, and hydrated skin",
                    "Long-lasting glow without surgery"
                  ].map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-bold mb-3 text-foreground">Combination Treatments – The Power of Synergy</h4>
                <p className="text-muted-foreground mb-4">At Nura23, we often combine PRP, Microneedling, and Peels for maximum rejuvenation.</p>
                <div className="space-y-3">
                  {[
                    { name: "Glow Rebirth Facial", combo: "Microneedling + PRP + Vitamin Serum" },
                    { name: "Scar & Texture Renewal", combo: "PRP + Microneedling (Deep)" },
                    { name: "Pigment Correction Peel", combo: "Chemical Peel + PRP" },
                    { name: "Anti-Aging Rejuvenator", combo: "Microneedling + PRP + RF tightening" }
                  ].map((treatment, idx) => (
                    <div key={idx} className="bg-secondary/10 p-3 rounded">
                      <span className="font-semibold text-foreground">{treatment.name}:</span>
                      <span className="text-sm text-muted-foreground"> {treatment.combo}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Safety, Comfort & Expertise</h4>
                <p className="text-muted-foreground mb-3">
                  Our treatments are performed by trained aesthetic doctors and certified therapists under strict hygiene and safety standards. We use FDA-approved equipment, medical-grade serums, and sterile techniques to ensure your comfort and safety.
                </p>
                <p className="text-sm text-muted-foreground">
                  Mild redness or tingling may occur temporarily — a natural part of your skin's healing journey — but it usually subsides within hours.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-foreground">Why Choose Nura23 for Skin Rejuvenation?</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Experienced aesthetic & dermatology team",
                    "Personalized treatment plans",
                    "Advanced, non-surgical procedures",
                    "Holistic skincare approach combining science + wellness",
                    "Proven track record of visible results",
                    "Luxurious, serene clinical environment"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4 text-center italic">
                  At Nura23, our philosophy blends modern dermatological science with the art of holistic wellness — ensuring every treatment not only beautifies your skin but uplifts your confidence and well-being.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Pre & Post-Treatment Care Tips</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3">Before Treatment:</h5>
                    <ul className="space-y-2">
                      {[
                        "Avoid sun exposure and tanning for a week",
                        "Discontinue retinol or harsh exfoliants 5 days before",
                        "Stay hydrated and follow the skincare prep plan"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3">After Treatment:</h5>
                    <ul className="space-y-2">
                      {[
                        "Use a gentle cleanser and moisturizer",
                        "Avoid direct sun exposure for 48 hours",
                        "Apply SPF 50+ sunscreen daily",
                        "Avoid makeup for 24 hours after the session",
                        "Follow your Nura23 aftercare plan for best results"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border-l-4 border-primary text-center">
                <h4 className="text-xl font-bold mb-3 text-foreground">Experience the Nura23 Glow</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Let your skin breathe, renew, and shine again with the power of PRP, Microneedling, and Chemical Peels — safe, effective, and naturally regenerative solutions trusted by clients worldwide.
                </p>
                <p className="text-primary font-semibold mt-3 italic">
                  At Nura23 Skin, Hair & Wellness, we don't just treat skin — we revive your natural glow from within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Botox & Fillers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Syringe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">5. Botox & Fillers</h2>
                <p className="text-lg text-muted-foreground">Enhance your natural features with precision and care</p>
              </div>
            </div>

            {/* Image below heading */}
            <div className="mb-8">
              <img 
                src={botoxFillers} 
                alt="Botox & Fillers Treatment at NURA23" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Rediscover Youth, Confidence & Balance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aging is a beautiful journey — but sometimes, fine lines, wrinkles, and volume loss can make your outer appearance feel older than how you truly feel inside. At Nura23 Skin, Hair & Wellness, we help you age gracefully and confidently through the art and science of Botox and Dermal Fillers.
                </p>
                <p className="text-lg font-semibold text-primary mt-4">
                  Our philosophy is simple — enhance, not alter.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We believe that aesthetic enhancement should look natural, soft, and perfectly suited to your unique facial harmony. Our expert aesthetic specialists ensure precision, safety, and beautiful balance with every treatment.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Understanding Botox and Fillers</h4>
                <p className="text-muted-foreground mb-4">Though often mentioned together, Botox and Fillers work differently — and when used strategically, they complement each other beautifully for facial rejuvenation.</p>
                
                <div className="space-y-6">
                  <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                    <h5 className="text-lg font-bold mb-3 text-foreground">1. Botox (Botulinum Toxin Type A)</h5>
                    <p className="text-muted-foreground mb-3">
                      Botox is a purified protein that relaxes overactive muscles responsible for wrinkles and fine lines. It temporarily blocks nerve signals to these muscles, softening expression lines and preventing deeper creases from forming.
                    </p>
                    <div className="mb-3">
                      <p className="font-semibold text-foreground mb-2">Common Treatment Areas:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Forehead lines", "Frown lines (between brows)", "Crow's feet (around the eyes)", "Bunny lines (on the nose)", "Neck bands and jawline slimming"].map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Results:</p>
                      <div className="space-y-1">
                        {["Smoother, more relaxed facial expressions", "Youthful, refreshed appearance", "Natural look without stiffness"].map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                    <h5 className="text-lg font-bold mb-3 text-foreground">2. Dermal Fillers (Hyaluronic Acid & Collagen Boosters)</h5>
                    <p className="text-muted-foreground mb-3">
                      Dermal Fillers are gel-like substances injected beneath the skin to restore lost volume, contour the face, and smooth deeper folds. They replenish hyaluronic acid — a naturally occurring molecule responsible for hydration and elasticity.
                    </p>
                    <div className="mb-3">
                      <p className="font-semibold text-foreground mb-2">Common Treatment Areas:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Cheeks & mid-face lift", "Lips (lip enhancement or definition)", "Nasolabial folds (smile lines)", "Marionette lines (corner of mouth)", "Chin & jawline contouring", "Under-eye hollows (tear troughs)"].map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Results:</p>
                      <div className="space-y-1">
                        {["Restored facial fullness", "Defined, youthful facial contours", "Hydrated, plump, and refreshed look"].map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <span className="text-primary">✓</span>
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-bold mb-3 text-foreground">The Art of Natural Enhancement at Nura23</h4>
                <p className="text-muted-foreground leading-relaxed">
                  At Nura23, our aesthetic approach is personalized — your face, your beauty, your balance. Our specialists combine medical precision with artistic understanding of facial anatomy, symmetry, and proportion.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We use premium, FDA-approved products to ensure safety and natural, long-lasting outcomes. Whether you seek subtle rejuvenation or refined enhancement, we tailor your treatment to create harmony and elegance — never an artificial look.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">The Nura23 Botox & Filler Experience</h4>
                <div className="space-y-3">
                  {[
                    { step: "Step 1: Personalized Consultation", desc: "Your journey begins with an in-depth consultation. Our expert evaluates your skin condition, facial structure, muscle activity, and goals." },
                    { step: "Step 2: Preparation", desc: "The treatment area is gently cleansed, and a topical numbing cream is applied for comfort. Our procedure is minimally invasive, quick, and virtually painless." },
                    { step: "Step 3: Precision Application", desc: "Using fine micro-needles, our specialist injects precise amounts of Botox or Filler in target areas. The process takes 15–30 minutes." },
                    { step: "Step 4: Post-Treatment Care", desc: "There is no downtime — you can return to normal activities immediately. Mild redness or swelling may occur but subsides quickly." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-background p-4 rounded-lg">
                      <span className="font-semibold text-foreground block mb-1">{item.step}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Results & Longevity</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Botox Results:</h5>
                    <p className="text-sm text-muted-foreground">
                      Visible smoothing of lines starts within 3–5 days, with full results in 10–14 days. Effects last 3–4 months, after which maintenance sessions can be scheduled.
                    </p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-2">Filler Results:</h5>
                    <p className="text-sm text-muted-foreground">
                      Fillers provide instant volume and lift with continued improvement as the hyaluronic acid integrates with your skin. Results last 9–18 months depending on the product and area.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3">Regular maintenance ensures consistently youthful and radiant results.</p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-foreground">Benefits of Botox & Fillers at Nura23</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Non-surgical, quick, and safe procedure",
                    "Restores facial balance and volume",
                    "Softens fine lines and wrinkles",
                    "Defines features (lips, cheeks, chin, jawline)",
                    "Improves skin hydration and elasticity",
                    "Minimal downtime and instant confidence boost"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Advanced Techniques We Offer</h4>
                <p className="text-muted-foreground mb-4">At Nura23, we go beyond traditional injections. Our experts use advanced, globally recognized techniques such as:</p>
                <div className="space-y-3">
                  {[
                    { name: "Micro-Botox", desc: "Ultra-fine doses for natural movement and texture improvement" },
                    { name: "Liquid Facelift", desc: "Combination of Botox + Fillers for a full-face rejuvenation" },
                    { name: "Lip Harmony Technique", desc: "Subtle lip enhancement preserving natural shape" },
                    { name: "Tear Trough Rejuvenation", desc: "Filler to correct under-eye hollowness" },
                    { name: "Jawline Contouring", desc: "Non-surgical sculpting for a defined, youthful jawline" }
                  ].map((technique, idx) => (
                    <div key={idx} className="bg-secondary/10 p-4 rounded-lg">
                      <span className="font-semibold text-foreground">{technique.name}:</span>
                      <span className="text-sm text-muted-foreground"> {technique.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h4 className="text-xl font-bold mb-4 text-foreground">Safety First – Your Skin, Our Priority</h4>
                <p className="text-muted-foreground mb-3">
                  Your safety and comfort are at the heart of every treatment at Nura23. All procedures are performed by certified aesthetic physicians in a sterile, medically supervised environment.
                </p>
                <p className="text-muted-foreground">
                  We use authentic, high-quality injectables sourced from trusted brands like Juvederm®, Restylane®, and Botox®. Every step follows international safety standards to ensure you receive safe, predictable, and flawless results.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-foreground">Pre & Post-Treatment Care</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3">Before Treatment:</h5>
                    <ul className="space-y-2">
                      {[
                        "Avoid alcohol, aspirin, or blood thinners 24 hours before",
                        "Stay hydrated and avoid excessive sun exposure"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3">After Treatment:</h5>
                    <ul className="space-y-2">
                      {[
                        "Avoid rubbing or massaging the treated area for 24 hours",
                        "Refrain from heavy exercise or saunas for a day",
                        "Apply a gentle cold compress if mild swelling occurs",
                        "Use sunscreen daily to protect your skin"
                      ].map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                <h4 className="text-xl font-bold mb-3 text-foreground">Why Choose Nura23 for Botox & Fillers?</h4>
                <div className="grid md:grid-cols-2 gap-3 text-left mb-4">
                  {[
                    "Expert aesthetic doctors with years of experience",
                    "Tailored treatments to preserve natural beauty",
                    "Luxurious, relaxing, and confidential environment",
                    "Cutting-edge techniques with minimal discomfort",
                    "Emphasis on harmony, not exaggeration",
                    "100% genuine products and transparent pricing"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  At Nura23, your face is treated as a work of art — where science meets subtlety. We help you look refreshed, youthful, and authentically you.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border-l-4 border-primary text-center">
                <h4 className="text-xl font-bold mb-3 text-foreground">Enhance Your Natural Features — Gracefully</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you wish to smooth a few lines, add definition, or rejuvenate your overall appearance, Botox and Fillers offer a safe, effective, and instantly gratifying solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Why Choose NURA23 for Aesthetics?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">FDA-Approved Technology</h3>
                <p className="text-muted-foreground">Latest equipment ensuring safe, effective, and comfortable treatments</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Certified Specialists</h3>
                <p className="text-muted-foreground">Experienced aesthetic doctors and trained therapists</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Natural Results</h3>
                <p className="text-muted-foreground">Enhance your beauty without artificial or exaggerated changes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Transform Your Appearance Naturally</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our aesthetic experts and discover the perfect treatment plan for you.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Book Consultation Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Aesthetics;
