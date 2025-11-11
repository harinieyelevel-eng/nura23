import ArticleTemplate from "@/components/ArticleTemplate";
import bridalGlowImg from "@/assets/articles/bridal-glow.jpg";

const BridalGlow = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        Every bride dreams of radiant, flawless skin and a stress-free glow on her wedding day. At Nura23 Skin & Wellness, we specialize in pre-wedding skin and spa packages designed to ensure that brides look stunning, feel confident, and experience complete relaxation before the big day.
      </p>
      <p className="text-xl leading-relaxed">
        Our comprehensive bridal programs combine advanced skin treatments, hair and body care, holistic wellness therapies, and stress relief rituals — ensuring a complete transformation from head to toe.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Why Pre-Wedding Skin Care is Essential</h2>
      <p>
        Wedding preparations can be stressful and exhausting, taking a toll on your skin and overall wellness. Common bridal skin concerns include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Dull or uneven skin tone</li>
        <li>Breakouts and acne scars</li>
        <li>Fine lines and early signs of aging</li>
        <li>Dry or dehydrated skin</li>
        <li>Hair fall and scalp fatigue due to stress</li>
      </ul>
      <p>
        At Nura23, our tailored bridal programs address these concerns holistically, combining scientific skincare, spa therapies, and wellness guidance to create a glowing, radiant bride.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Nura23's Pre-Wedding Skin & Spa Packages</h2>

      <h3 className="text-xl font-semibold text-foreground mt-6">1. Signature Facials & Anti-Aging Treatments</h3>
      <p>Our customized facials, chemical peels, and PRP or microneedling treatments help:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Even out skin tone and texture</li>
        <li>Boost hydration and radiance</li>
        <li>Reduce fine lines, pigmentation, and scars</li>
      </ul>
      <p>These treatments prepare your skin for flawless makeup application, ensuring a perfect bridal glow.</p>

      <h3 className="text-xl font-semibold text-foreground mt-6">2. Hair & Scalp Care</h3>
      <p>Strong, shiny hair is a bridal essential. Our packages include:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Scalp detox and rejuvenation</li>
        <li>PRP or GFC therapy for hair strength and growth</li>
        <li>Nourishing hair spa treatments</li>
      </ul>
      <p>These therapies help your hair look healthy, vibrant, and voluminous for your wedding day.</p>

      <h3 className="text-xl font-semibold text-foreground mt-6">3. Body Contouring & Slimming Treatments</h3>
      <p>Our body contouring and fat reduction therapies using RF technology help brides:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sculpt their silhouette</li>
        <li>Tone the body</li>
        <li>Boost confidence in bridal attire</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">4. Stress Relief & Relaxation</h3>
      <p>Wedding preparations can be mentally exhausting. Nura23's aromatherapy, reflexology, and holistic massage therapies:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Reduce stress and fatigue</li>
        <li>Improve circulation and relaxation</li>
        <li>Promote mental clarity and calmness</li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6">5. Nutrition & Lifestyle Guidance</h3>
      <p>A personalized nutrition plan complements all treatments, supporting:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Healthy, glowing skin</li>
        <li>Strong hair and nails</li>
        <li>Enhanced energy levels</li>
      </ul>

      <h2 className="text-2xl font-bold text-foreground mt-8">Benefits of Choosing Nura23 Bridal Packages</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong>Flawless Skin:</strong> Radiant, hydrated, and makeup-ready</li>
        <li><strong>Strong Hair:</strong> Voluminous, healthy, and smooth</li>
        <li><strong>Toned Body:</strong> Contoured silhouette and rejuvenated body</li>
        <li><strong>Stress-Free Mind:</strong> Relaxed, calm, and confident</li>
        <li><strong>Holistic Wellness:</strong> Nutrition and lifestyle support for inner glow</li>
        <li><strong>Personalized Care:</strong> Tailored treatments for individual bridal needs</li>
      </ol>

      <h2 className="text-2xl font-bold text-foreground mt-8">Why Nura23 for Your Bridal Journey?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Expert Team:</strong> Certified dermatologists, aestheticians, hair specialists, and wellness professionals</li>
        <li><strong>Advanced Technology:</strong> Safe, non-invasive treatments for optimal results</li>
        <li><strong>Personalized Packages:</strong> Tailored to your skin, hair, and body goals</li>
        <li><strong>Luxury & Comfort:</strong> Serene, hygienic, and relaxing environment for a premium bridal experience</li>
        <li><strong>Visible Results:</strong> Lasting glow, radiant skin, and confident poise</li>
      </ul>
    </div>
  );

  return (
    <ArticleTemplate
      title="Bridal Glow Secrets: Pre-Wedding Skin & Spa Packages by Nura23"
      date="2025-02-14"
      category="Bridal Care"
      image={bridalGlowImg}
      content={content}
    />
  );
};

export default BridalGlow;
