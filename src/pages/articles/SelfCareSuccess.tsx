import ArticleTemplate from "@/components/ArticleTemplate";
import selfCareSuccessImg from "@/assets/articles/self-care-success.jpg";

const SelfCareSuccess = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        In today's fast-paced world, success isn't just measured by achievements or milestones — it's also reflected in how well you care for yourself. At Nura23 Skin & Wellness, we believe that self-care is the ultimate form of success, because true wellness affects your mind, body, and overall quality of life.
      </p>
      <p className="text-xl leading-relaxed">
        Our philosophy emphasizes integrating beauty, wellness, and lifestyle practices to create a balanced, confident, and radiant version of yourself. Here's why adopting the Nura23 wellness lifestyle can transform not just your appearance, but your life.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Self-Care Enhances Physical Health</h2>
      <p>
        Taking care of your body is the foundation of success. Regular skincare, hair care, and body wellness routines help prevent long-term damage, maintain vitality, and boost confidence.
      </p>
      <p>At Nura23, our treatments support physical health by:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Revitalizing the skin:</strong> Signature facials, anti-aging therapies, and PRP treatments for youthful radiance</li>
        <li><strong>Strengthening hair and scalp health:</strong> PRP therapy, GFC, and laser hair regrowth for strong, vibrant hair</li>
        <li><strong>Body contouring & detox:</strong> RF-based fat reduction and detox programs for improved energy and metabolism</li>
      </ul>
      <p>Physical wellness improves appearance, energy, and productivity, creating a foundation for personal and professional success.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Mental Wellness is Key to Success</h2>
      <p>
        Stress, fatigue, and anxiety can take a toll on your mental and emotional well-being, affecting both work and personal life. Nura23 integrates stress relief and relaxation therapies to help clients regain mental clarity and calmness:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Holistic massages & aromatherapy reduce tension and improve circulation</li>
        <li>Reflexology & relaxation therapies balance mind and body</li>
        <li>Mindful wellness programs encourage emotional balance and focus</li>
      </ul>
      <p>Mental wellness supports decision-making, creativity, and resilience, making it a crucial pillar of modern success.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Beauty and Confidence Go Hand-in-Hand</h2>
      <p>
        Confidence is a natural byproduct of self-care and wellness. By taking time to care for your skin, hair, and body, you feel empowered to present yourself confidently in every aspect of life.
      </p>
      <p>
        Nura23's aesthetic treatments — including anti-aging facials, PRP, microneedling, chemical peels, and non-invasive body sculpting — are designed to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Enhance natural beauty without overdoing it</li>
        <li>Address age-specific concerns</li>
        <li>Provide visible, lasting results</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8">Holistic Approach for Sustainable Success</h2>
      <p>At Nura23, self-care isn't limited to treatments. It's a lifestyle that combines nutrition, wellness guidance, and stress management:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Nutrition & Lifestyle Consultation:</strong> Tailored advice for glowing skin, strong hair, and overall vitality</li>
        <li><strong>Detox & Rejuvenation Programs:</strong> Remove toxins and restore energy</li>
        <li><strong>Wellness Routines:</strong> Encourage daily practices that sustain long-term health</li>
      </ul>
      <p>A holistic approach ensures success isn't temporary, but a lifestyle supported by physical health, mental wellness, and self-confidence.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Why Nura23 is Your Partner in Wellness Success</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Expert Team:</strong> Dermatologists, aestheticians, nutritionists, and wellness professionals</li>
        <li><strong>Advanced Technology:</strong> Safe, effective, and results-driven aesthetic and wellness treatments</li>
        <li><strong>Personalized Programs:</strong> Tailored to your skin, hair, body, and lifestyle goals</li>
        <li><strong>Luxury & Comfort:</strong> Serene, hygienic, and relaxing environment for maximum benefit</li>
      </ul>
    </div>
  );

  return (
    <ArticleTemplate
      title="Why Self-Care is the New Success: The Nura23 Wellness Lifestyle"
      date="2025-02-26"
      category="Wellness Lifestyle"
      image={selfCareSuccessImg}
      content={content}
    />
  );
};

export default SelfCareSuccess;
