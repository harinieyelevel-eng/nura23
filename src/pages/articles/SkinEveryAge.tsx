import ArticleTemplate from "@/components/ArticleTemplate";
import skinEveryAgeImg from "@/assets/articles/skin-every-age.jpg";

const SkinEveryAge = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        Healthy, radiant skin is a lifelong goal, but skin concerns evolve with age. At Nura23 Skin & Wellness, we understand that your skin's needs change in every stage of life, and our personalized, science-backed treatments help you maintain youthful, glowing skin at every age.
      </p>
      <p className="text-xl leading-relaxed">
        Whether you're in your 20s, 30s, 40s, or beyond, Nura23 offers targeted solutions to address your skin challenges while enhancing natural beauty and confidence.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Skin Care in Your 20s: Prevention & Glow</h2>
      <p>
        The focus in your 20s is on prevention, hydration, and maintaining a healthy glow. Common concerns include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Early acne and blemishes</li>
        <li>Uneven skin tone and dullness</li>
        <li>Sun damage</li>
      </ul>
      <p><strong>Recommended Treatments at Nura23:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Customized Facials:</strong> Hydration, glow, and purification</li>
        <li><strong>Acne & Scar Treatments:</strong> PRP, chemical peels, and mild microneedling</li>
        <li><strong>Sun Protection & Brightening Programs</strong></li>
      </ul>
      <p>Investing in proper care in your 20s helps prevent future skin damage and ensures long-term health and radiance.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Skin Care in Your 30s: Anti-Aging & Repair</h2>
      <p>
        In your 30s, skin may begin to show early signs of aging such as fine lines, pigmentation, and reduced elasticity. At this stage, the focus is on repairing damage and boosting collagen production.
      </p>
      <p><strong>Recommended Treatments at Nura23:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Anti-Aging Therapy:</strong> Collagen-boosting RF treatments and facials</li>
        <li><strong>Microneedling & PRP:</strong> Stimulates skin regeneration and reduces pigmentation</li>
        <li><strong>Hydrafacial / Oxygen Facial:</strong> Deep cleansing and hydration for radiant skin</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8">Skin Care in Your 40s: Lifting & Firming</h2>
      <p>
        During your 40s, loss of elasticity, sagging skin, and deeper wrinkles become more noticeable. Treatments focus on lifting, tightening, and restoring youthful contours.
      </p>
      <p><strong>Recommended Treatments at Nura23:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>RF Skin Tightening & Lifting:</strong> Non-surgical facelift for firm skin</li>
        <li><strong>Laser Treatments:</strong> Reduces pigmentation and evens skin tone</li>
        <li><strong>Botox & Fillers:</strong> Smoothens wrinkles and enhances facial features naturally</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8">Skin Care Beyond 50: Nourishment & Radiance</h2>
      <p>
        After 50, skin becomes thinner, drier, and more prone to fine lines and pigmentation. Treatments aim to nourish, restore moisture, and maintain a healthy glow.
      </p>
      <p><strong>Recommended Treatments at Nura23:</strong></p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Deep Hydration Facials & Rejuvenation Therapy</li>
        <li><strong>PRP & Microneedling:</strong> Stimulates cellular repair and glow</li>
        <li><strong>Holistic Wellness Programs:</strong> Nutrition, detox, and stress relief to support skin health from within</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8">Why Choose Nura23 for Every Age?</h2>
      <p>At Nura23, our approach is personalized, science-backed, and holistic:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Expert Dermatologists & Aestheticians:</strong> Skilled in age-specific treatments</li>
        <li><strong>Advanced Technology:</strong> Non-invasive and results-driven therapies</li>
        <li><strong>Holistic Wellness:</strong> Integrating nutrition, detox, and stress management</li>
        <li><strong>Customized Programs:</strong> Tailored to your skin type, age, and concerns</li>
        <li><strong>Visible, Long-Lasting Results:</strong> Healthy, youthful skin at every stage of life</li>
      </ul>
    </div>
  );

  return (
    <ArticleTemplate
      title="Best Skin Treatments for Every Age: Nura23's Guide to Youthful Skin"
      date="2025-02-22"
      category="Skin Care"
      image={skinEveryAgeImg}
      content={content}
    />
  );
};

export default SkinEveryAge;
