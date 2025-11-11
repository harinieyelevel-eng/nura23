import ArticleTemplate from "@/components/ArticleTemplate";
import holisticGlowImg from "@/assets/articles/holistic-glow.jpg";

const HolisticGlow = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        True beauty is more than just surface-level radiance — it begins from within. At Nura23 Skin & Wellness, we believe that healthy skin and overall wellness are interconnected, and our holistic approach ensures you not only look your best but feel your best too.
      </p>
      <p className="text-xl leading-relaxed">
        By integrating advanced skincare, hair treatments, body wellness, nutrition, and stress management, Nura23 helps clients achieve a natural glow that comes from total well-being, rather than just quick fixes.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">The Philosophy Behind Nura23's Holistic Approach</h2>
      <p>
        Modern lifestyles, pollution, stress, and poor nutrition can negatively affect skin health, hair vitality, and overall wellness. At Nura23, we combine science-backed aesthetic treatments with ancient holistic practices to address both the visible signs and underlying causes of skin and body concerns.
      </p>
      <p>Our philosophy revolves around:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Treating the whole person, not just symptoms</li>
        <li>Integrating nutrition, lifestyle, and wellness into beauty routines</li>
        <li>Using safe, personalized, and effective therapies</li>
      </ul>
      <p>
        This ensures that your skin, hair, and body receive nourishment, rejuvenation, and protection, leading to long-lasting, radiant results.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Nura23's Holistic Services</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">1. Advanced Skincare & Aesthetic Treatments</h3>
      <p>
        From signature facials and anti-aging therapies to PRP, microneedling, chemical peels, and laser treatments, our services are personalized for your skin type and concerns. These treatments stimulate collagen, repair damage, and enhance natural radiance.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">2. Hair & Scalp Wellness</h3>
      <p>
        Our holistic approach extends to hair health. Treatments like PRP therapy, GFC therapy, laser hair regrowth, and scalp rejuvenation promote strong roots, shine, and healthy hair growth, addressing both cosmetic and underlying issues.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">3. Body Wellness & Detoxification</h3>
      <p>
        Through body contouring, slimming programs, and detox therapies, we help clients achieve toned, revitalized bodies while supporting metabolism and internal health.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">4. Stress Relief & Relaxation</h3>
      <p>
        Mind and body balance is essential for radiant skin and wellness. Our holistic massages, aromatherapy, reflexology, and relaxation therapies reduce stress, improve circulation, and rejuvenate the mind.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">5. Nutrition & Lifestyle Guidance</h3>
      <p>
        A personalized nutrition and lifestyle consultation completes the holistic approach. Proper diet, hydration, sleep, and mindful practices support cellular repair, immunity, and overall vitality, enhancing the results of all treatments.
      </p>
    </div>
  );

  return (
    <ArticleTemplate
      title="Glow from Within: Nura23's Holistic Approach to Skin & Wellness"
      date="2025-02-01"
      category="Wellness"
      image={holisticGlowImg}
      content={content}
    />
  );
};

export default HolisticGlow;
