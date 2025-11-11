import ArticleTemplate from "@/components/ArticleTemplate";
import beautyTrendsImg from "@/assets/articles/beauty-trends.jpg";

const BeautyTrends2025 = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        The beauty and wellness industry is constantly evolving. At Nura23, we embrace 2025 trends combining science, technology, and holistic care for innovative treatments and personalized rejuvenation.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">1. Personalized Skincare</h2>
      <p>Customized facials and treatments based on skin type, age, lifestyle, and environmental factors. PRP therapy, microneedling, and chemical peels ensure optimal results.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">2. Non-Invasive Anti-Aging</h2>
      <p>RF skin tightening, laser therapies, and collagen-boosting treatments that reduce fine lines, improve elasticity, and restore youthful contours without downtime.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">3. Holistic Wellness Integration</h2>
      <p>Beauty linked to overall wellness through nutrition guidance, detox programs, stress relief, and lifestyle consultations for sustainable radiance.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">4. Advanced Hair & Scalp Treatments</h2>
      <p>Laser hair regrowth, PRP and GFC therapy, scalp rejuvenation reducing hair fall, strengthening roots, and stimulating new growth.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">5. Sustainable & Ethical Beauty</h2>
      <p>Eco-conscious practices with cruelty-free products, safe treatments, and environmentally responsible methods.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">6. Spa as Self-Care</h2>
      <p>Aromatherapy, reflexology, holistic massages for stress reduction, improved circulation, and mental clarity.</p>

      <h2 className="text-2xl font-bold text-foreground mt-8">7. Science-Backed Results</h2>
      <p>Cutting-edge technology combined with expert knowledge for effective, measurable outcomes in all treatments.</p>
    </div>
  );

  return (
    <ArticleTemplate
      title="2025 Beauty Trends You'll See at Nura23 Skin & Wellness"
      date="2025-02-10"
      category="Beauty Trends"
      image={beautyTrendsImg}
      content={content}
    />
  );
};

export default BeautyTrends2025;
