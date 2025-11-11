import ArticleTemplate from "@/components/ArticleTemplate";
import agelessBeautyImg from "@/assets/articles/ageless-beauty.jpg";

const AgelessBeauty = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        Everyone dreams of youthful, radiant skin, but aging, environmental factors, and lifestyle habits can impact your natural glow over time. At Nura23 Skin & Wellness, we combine advanced aesthetic treatments, personalized care, and holistic wellness to help you achieve ageless beauty.
      </p>
      <p className="text-xl leading-relaxed">
        Our science-backed therapies restore skin health, enhance features, and slow down the visible signs of aging — naturally and effectively.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Understanding Ageless Beauty</h2>
      <p>
        Ageless beauty is more than just looking younger; it's about maintaining healthy, radiant skin, firm contours, and natural balance. At Nura23, we focus on:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Collagen stimulation and skin rejuvenation</li>
        <li>Hydration, glow, and even skin tone</li>
        <li>Reducing fine lines, wrinkles, and pigmentation</li>
        <li>Enhancing facial features naturally</li>
      </ul>
      <p>
        By combining modern technology with expert aesthetics, we ensure that each client's treatment is personalized, safe, and results-driven.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Nura23's Advanced Aesthetic Treatments</h2>
      
      <h3 className="text-xl font-semibold text-foreground mt-6">1. Signature Facials & Skin Rejuvenation</h3>
      <p>
        Customized facials target hydration, dullness, and early signs of aging, leaving skin glowing, nourished, and refreshed.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">2. Anti-Aging Therapies</h3>
      <p>
        From collagen-boosting treatments to radio frequency (RF) skin tightening, we focus on reducing wrinkles and firming skin naturally.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">3. PRP, Microneedling & Chemical Peels</h3>
      <p>
        Stimulate skin regeneration and cellular repair, improving texture, tone, and elasticity. These treatments also help with scars, pigmentation, and fine lines.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">4. Botox & Fillers</h3>
      <p>
        Enhance natural facial features with precision, reduce dynamic wrinkles, and restore volume, maintaining a youthful yet natural appearance.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6">5. Laser Treatments</h3>
      <p>
        Advanced laser therapies target pigmentation, sun damage, and unwanted hair, providing smooth, radiant, and even-toned skin.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">The Holistic Approach to Ageless Beauty</h2>
      <p>
        At Nura23, we believe that beauty is holistic. Aesthetic treatments are most effective when combined with:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Nutrition & Lifestyle Consultation:</strong> Balanced diet and wellness routines support skin health</li>
        <li><strong>Detox & Rejuvenation Programs:</strong> Remove toxins and restore vitality</li>
        <li><strong>Stress Relief & Relaxation Therapy:</strong> Reduces stress-induced skin aging</li>
        <li><strong>Consistent Skincare Regimen:</strong> Maintains results from clinical treatments at home</li>
      </ul>
      <p>
        This 360-degree approach ensures that your skin is healthy, youthful, and naturally radiant, beyond just the surface.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Benefits of Nura23's Aesthetic Treatments</h2>
      <ol className="list-decimal pl-6 space-y-3">
        <li><strong>Youthful Skin:</strong> Reduced wrinkles, fine lines, and sagging</li>
        <li><strong>Natural Enhancement:</strong> Subtle and precise facial feature improvement</li>
        <li><strong>Improved Skin Health:</strong> Hydration, elasticity, and even tone</li>
        <li><strong>Boosted Confidence:</strong> Look your best at every age</li>
        <li><strong>Safe & Effective:</strong> Non-invasive, minimally invasive, and customized treatments</li>
      </ol>
      <p>
        At Nura23, our goal is to help you embrace aging gracefully while maintaining radiance, confidence, and natural beauty.
      </p>
    </div>
  );

  return (
    <ArticleTemplate
      title="How to Achieve Ageless Beauty with Nura23's Aesthetic Treatments"
      date="2025-01-25"
      category="Aesthetics"
      image={agelessBeautyImg}
      content={content}
    />
  );
};

export default AgelessBeauty;
