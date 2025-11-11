import ArticleTemplate from "@/components/ArticleTemplate";
import transformationImg from "@/assets/articles/transformation.jpg";

const AestheticsWellness = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        At Nura23 Skin & Wellness, we believe that true transformation goes beyond just appearances. Aesthetics alone cannot achieve long-lasting beauty unless paired with wellness, nutrition, and holistic care.
      </p>
      <p className="text-xl leading-relaxed">
        Our philosophy is simple: enhance your natural beauty while nurturing your overall health, ensuring that every client experiences a total transformation — inside and out.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">The Philosophy Behind Total Transformation</h2>
      <p>
        Modern lifestyles, pollution, stress, and unhealthy habits affect not only the skin, hair, and body but also overall vitality. At Nura23, we understand that:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Aesthetic treatments restore and enhance appearance</li>
        <li>Wellness practices nourish the body and mind</li>
        <li>A combined approach ensures sustainable, long-term results</li>
      </ul>
      <p>
        By integrating science-backed aesthetics with holistic wellness, Nura23 ensures that clients don't just look good — they feel confident, healthy, and radiant from within.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Aesthetic Treatments at Nura23</h2>
      <p>Our advanced aesthetic treatments form the foundation of your physical transformation:</p>

      <h3 className="text-xl font-semibold text-foreground mt-6">1. Skin & Facial Treatments</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Signature facials, chemical peels, PRP, and microneedling</li>
        <li>Hydrafacial and anti-aging therapies</li>
        <li>Brightening, pigmentation correction, and acne solutions</li>
      </ul>
      <p>These treatments enhance skin texture, tone, and radiance, preparing the canvas for overall wellness.</p>

      <h3 className="text-xl font-semibold text-foreground mt-6">2. Hair & Scalp Rejuvenation</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>PRP therapy, GFC therapy, laser hair regrowth</li>
        <li>Scalp detox and hair spa treatments</li>
      </ul>
      <p>Healthy, strong hair complements your radiant appearance, contributing to a complete transformation.</p>

      <h3 className="text-xl font-semibold text-foreground mt-6">3. Body Contouring & Fat Reduction</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>RF-based non-surgical contouring</li>
        <li>Slimming and toning programs</li>
      </ul>
      <p>These services sculpt and rejuvenate the body, aligning your external appearance with your wellness goals.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Wellness Integration for Holistic Results</h2>
      <p>At Nura23, aesthetics are enhanced by holistic wellness programs, addressing the root causes of skin, hair, and body concerns:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Stress Relief & Relaxation:</strong> Aromatherapy, reflexology, and holistic massages reduce mental fatigue and tension</li>
        <li><strong>Nutrition & Lifestyle Consultation:</strong> Personalized plans for skin, hair, and body health</li>
        <li><strong>Detox & Rejuvenation Programs:</strong> Eliminate toxins, improve metabolism, and restore vitality</li>
      </ul>
      <p>This approach ensures that your transformation is sustainable, supporting internal balance and outward radiance simultaneously.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Benefits of Combining Aesthetics with Wellness</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Enhanced Skin & Hair Health:</strong> Visible improvements supported by internal wellness</li>
        <li><strong>Youthful, Radiant Appearance:</strong> Natural, long-lasting beauty</li>
        <li><strong>Physical Vitality:</strong> Toned, revitalized body and improved energy</li>
        <li><strong>Mental Well-being:</strong> Reduced stress and improved emotional balance</li>
        <li><strong>Sustainable Results:</strong> Treatments complemented by lifestyle and wellness guidance</li>
      </ol>

      <h2 className="text-2xl font-bold text-foreground mt-8">Why Choose Nura23 for Your Total Transformation?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Expert Team:</strong> Dermatologists, aestheticians, nutritionists, and wellness professionals</li>
        <li><strong>Cutting-Edge Technology:</strong> Safe, effective, and results-driven treatments</li>
        <li><strong>Personalized Programs:</strong> Tailored aesthetic and wellness plans</li>
        <li><strong>Holistic Philosophy:</strong> Integrating mind, body, and beauty</li>
        <li><strong>Luxurious Experience:</strong> Serene, hygienic, and comfortable spa environment</li>
      </ul>
    </div>
  );

  return (
    <ArticleTemplate
      title="How Nura23 Combines Aesthetics with Wellness for Total Transformation"
      date="2025-02-18"
      category="Wellness"
      image={transformationImg}
      content={content}
    />
  );
};

export default AestheticsWellness;
