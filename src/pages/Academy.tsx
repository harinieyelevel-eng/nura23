import { GraduationCap, Users, Award, BookOpen, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AppointmentDialog from "@/components/AppointmentDialog";
import academyTraining from "@/assets/academy-training.jpg";
import academyPmu from "@/assets/academy-pmu.png";
import academyClassroom from "@/assets/academy-classroom.png";
import reflexologySession from "@/assets/reflexology-session-user.png";
import reflexologyPoints from "@/assets/reflexology-points-final.jpg";
import reflexologyTherapy from "@/assets/reflexology-therapy-bright.jpg";
import SEO from "@/components/SEO";

const Academy = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Aesthetics & Foot Reflexology Training Academy in Chennai | NURA23"
        description="NURA23 Academy in Chennai offers practical training in non-surgical aesthetic treatments, skin care, spa and wellness therapies, and reflexology techniques for professionals seeking to build a career in aesthetics and holistic wellness."
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-16 w-16 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    NURA23 ACADEMY
                  </h1>
                </div>
                <p className="text-2xl text-primary font-semibold">
                  Where Skill Meets Art in Aesthetics & PMU
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Welcome to Nura23 Academy, India's trusted destination for professional training in Aesthetics and Permanent Makeup (PMU). Here, beauty meets precision, and passion transforms into profession.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you dream of mastering clinical skincare, refining your artistry in PMU, or launching your own beauty practice, Nura23 Academy provides the perfect foundation.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={academyClassroom} alt="Professional beauty academy training" className="w-full h-[400px] object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              OUR PHILOSOPHY: SCIENCE. SKILL. SUCCESS.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Nura23 Academy, we believe beauty education should go beyond textbooks. Our courses are designed to blend scientific understanding, practical skill-building, and creative artistry. Every module is carefully structured to help you not only learn the "how" but truly understand the "why" behind every aesthetic and PMU technique. Our mission is simple — to create the next generation of aesthetic professionals who combine empathy, expertise, and ethics in their work.
            </p>
          </div>
        </div>
      </section>

      {/* Aesthetic Training Programs */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                AESTHETIC TRAINING PROGRAMS
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The Nura23 Aesthetic Division focuses on professional skincare, facial therapy, and non-invasive aesthetic treatments. These programs are ideal for dermatology assistants, beauty professionals, nurses, and entrepreneurs seeking to upskill in advanced skin and wellness treatments.
              </p>
            </div>

            <div className="space-y-8">
              {/* Advanced Aesthetic Techniques */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">1. Advanced Aesthetic Techniques</h3>
                </div>
                <p className="text-muted-foreground">
                  A comprehensive course covering modern skincare procedures, product knowledge, and treatment protocols.
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Skin anatomy & physiology</li>
                  <li>Facial analysis & consultation</li>
                  <li>Deep cleansing & extraction methods</li>
                  <li>Professional exfoliation & peels</li>
                  <li>LED therapy, microdermabrasion & ultrasonic facials</li>
                  <li>Post-treatment care & safety standards</li>
                </ul>
              </div>

              {/* Skin Rejuvenation & Anti-Aging */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">2. Skin Rejuvenation & Anti-Aging Therapies</h3>
                </div>
                <p className="text-muted-foreground">
                  This advanced-level course focuses on non-invasive skin rejuvenation techniques that restore youth and glow.
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Introduction to collagen-boosting procedures</li>
                  <li>Understanding pigmentation, dehydration & skin damage</li>
                  <li>Product layering for maximum results</li>
                  <li>Holistic anti-aging protocols using non-medical tools</li>
                </ul>
              </div>

              {/* Clinical Hygiene & Safety */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">3. Clinical Hygiene & Safety in Aesthetics</h3>
                </div>
                <p className="text-muted-foreground">
                  An essential foundation for all aesthetic professionals.
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Sterilization & hygiene best practices</li>
                  <li>Equipment handling & storage</li>
                  <li>Client preparation, patch testing, and record keeping</li>
                  <li>Emergency protocols and skin reaction management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PMU Courses */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  PERMANENT MAKEUP (PMU) COURSES
                </h2>
                <p className="text-xl text-primary font-semibold">
                  The Art of Enhancement
                </p>
                <p className="text-lg text-muted-foreground">
                  PMU is more than beauty — it's artistry with purpose. At Nura23 Academy, we train you in advanced, natural-looking PMU techniques that enhance facial harmony while preserving individual expression.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={academyPmu} alt="Professional PMU application" className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="space-y-8">
              {/* PMU Foundation Course */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">1. PMU Foundation Course – Beginner to Artist</h3>
                <p className="text-muted-foreground">Ideal for newcomers entering the permanent makeup field.</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Introduction to skin layers & color theory</li>
                  <li>Understanding pigments and undertones</li>
                  <li>Brow mapping and symmetry techniques</li>
                  <li>Machine setup and needle theory</li>
                  <li>Practice on synthetic skin and live models</li>
                </ul>
              </div>

              {/* Microblading & Ombre Brows */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">2. Microblading & Ombre Brows Masterclass</h3>
                <p className="text-muted-foreground">Learn the most in-demand brow enhancement techniques in the beauty industry.</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Hand-tool vs machine techniques</li>
                  <li>Microblading strokes for realistic hair simulation</li>
                  <li>Ombre and powder brow shading</li>
                  <li>Brow design for different face shapes</li>
                  <li>Aftercare and healing process management</li>
                </ul>
              </div>

              {/* Lip Blush & Eyeliner */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">3. Lip Blush & Eyeliner Enhancement Program</h3>
                <p className="text-muted-foreground">A specialized course for intermediate or advanced PMU artists.</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Lip mapping, contour correction, and colour blending</li>
                  <li>Techniques for defining natural lash lines</li>
                  <li>Use of nano-needles for precise pigment delivery</li>
                  <li>Comfort management and hygiene protocol</li>
                </ul>
              </div>

              {/* Colour Theory & Pigment Science */}
              <div className="bg-secondary/10 p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">4. Colour Theory & Pigment Science Workshop</h3>
                <p className="text-muted-foreground">A scientific approach to understanding how pigments behave on different skin tones.</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Undertones and Fitzpatrick scale</li>
                  <li>Colour correction and neutralization</li>
                  <li>Long-term pigment behaviour & fading patterns</li>
                  <li>Safe pigment selection for lasting results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foot Reflexology Academy */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                NURA23 FOOT REFLEXOLOGY ACADEMY
              </h2>
              <p className="text-xl text-primary font-semibold">
                Healing Through The Power of Touch
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At NURA23 Foot Reflexology Academy, we believe wellness begins from the ground up. Your feet carry the weight of your entire being — and within them lies the key to restoring balance, energy, and harmony throughout the body.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={reflexologySession} alt="Professional foot reflexology session" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={reflexologyPoints} alt="Foot reflexology pressure points" className="w-full h-64 object-cover scale-110" />
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border space-y-6">
              <h3 className="text-2xl font-bold text-foreground">THE SCIENCE AND ART OF REFLEXOLOGY</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reflexology is a natural therapy that works on the principle that specific reflex points on the feet correspond to different organs and systems within the body. By applying gentle pressure to these points, energy pathways are stimulated, improving circulation, reducing stress, and promoting overall wellbeing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At NURA23, we teach reflexology as both a science and an art — the science of anatomy and physiology blended with the art of intuition, empathy, and touch. Our unique training methodology ensures that every student learns not only where to press, but also how to connect — physically, energetically, and emotionally — with their clients.
              </p>
            </div>

            <div className="space-y-8">
              {/* Certificate Course */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Certificate Course in Basic Foot Reflexology</h3>
                <p className="text-muted-foreground">
                  This foundation program introduces students to the core concepts, techniques, and benefits of reflexology.
                </p>
                <p className="font-semibold text-foreground">Course Highlights:</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Introduction to the history and philosophy of reflexology</li>
                  <li>Understanding reflex zones and meridian points</li>
                  <li>Anatomy of the feet and nervous system connections</li>
                  <li>Pressure application techniques using thumb and finger movements</li>
                  <li>Relaxation methods before and after therapy</li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  <strong>Outcome:</strong> Students learn to perform a full basic reflexology session with proper rhythm, flow, and accuracy — ideal for personal or professional wellness practice.
                </p>
              </div>

              {/* Advanced Therapeutic */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Advanced Therapeutic Reflexology Program</h3>
                <p className="text-muted-foreground">
                  An intensive, in-depth program for those who wish to practice professionally or integrate reflexology into spa, clinic, or wellness settings.
                </p>
                <p className="font-semibold text-foreground">Course Highlights:</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Advanced zone therapy mapping</li>
                  <li>Reflex points for stress relief, hormonal balance, digestion, and immunity</li>
                  <li>Techniques for chronic pain and postural tension</li>
                  <li>Reflexology for special populations (elderly, athletes, women's health)</li>
                  <li>Integrating essential oils and natural balms for enhanced healing</li>
                  <li>Client consultation and customized session design</li>
                </ul>
              </div>

              {/* Reflexology for Wellness & Spa */}
              <div className="bg-background p-8 rounded-lg border border-border space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Reflexology for Wellness & Spa Professionals</h3>
                <p className="text-muted-foreground">
                  A short-term certification for beauty and spa therapists who want to add reflexology to their service menu.
                </p>
                <p className="font-semibold text-foreground">Curriculum Includes:</p>
                <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                  <li>Wellness consultation techniques</li>
                  <li>Express reflexology protocols for spas and salons</li>
                  <li>Hygiene, ambiance, and setup standards</li>
                  <li>Professional ethics and client comfort skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nura23 Academy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={academyClassroom} alt="Modern academy classroom" className="w-full h-auto object-cover" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  WHY CHOOSE NURA23 ACADEMY?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Experience world-class training with certified curriculum, expert faculty, and hands-on practice in a state-of-the-art facility.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Certified Curriculum</h3>
                <p className="text-muted-foreground">Aligned with global aesthetic and PMU standards.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Expert Faculty</h3>
                <p className="text-muted-foreground">Learn directly from dermatologists, certified PMU masters, and industry mentors.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Hands-On Practice</h3>
                <p className="text-muted-foreground">Real model sessions under professional supervision.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                <Sparkles className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Modern Infrastructure</h3>
                <p className="text-muted-foreground">Fully equipped classrooms, sterilized tools, and digital learning aids.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Career Guidance</h3>
                <p className="text-muted-foreground">Business setup support, branding advice, and client management tips.</p>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg space-y-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Certification</h3>
                <p className="text-muted-foreground">Earn a recognized Nura23 Certificate upon completion — a mark of trust and credibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              CAREER PATHWAYS AFTER NURA23 ACADEMY
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Graduates from Nura23 Academy unlock opportunities across the beauty and wellness industry:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">✓ Aesthetic practitioner in skin clinics and salons</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">✓ Certified PMU artist specializing in brows, lips, and eyes</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">✓ Spa and wellness consultant</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">✓ Brand educator or trainer</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border md:col-span-2">
                <p className="text-muted-foreground text-center">✓ Independent entrepreneur with your own studio</p>
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
              JOIN THE FUTURE OF BEAUTY WITH NURA23
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In an era where wellness and aesthetics define modern self-care, Nura23 Academy stands as a beacon of innovation and integrity. We don't just teach treatments — we shape professionals who bring confidence, safety, and artistry to every client they touch.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you're ready to start your career in Aesthetics or Permanent Makeup, there's no better time than now — and no better place than Nura23 Academy.
            </p>
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => setAppointmentOpen(true)}
            >
              Enroll Now
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

export default Academy;
