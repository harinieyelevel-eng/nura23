import ArticleTemplate from "@/components/ArticleTemplate";
import spaDayImg from "@/assets/articles/spa-day.jpg";

const SpaDay2025 = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        In today's fast-paced world, taking time for self-care and relaxation is essential. A spa day isn't just a luxury; it's a holistic investment in your health, wellness, and beauty.
      </p>
      <p className="text-xl leading-relaxed">
        At Nura23 Skin & Wellness, we combine advanced aesthetic treatments, traditional healing therapies, and holistic wellness programs to deliver an unmatched spa experience. Here are the top 10 reasons to book your spa day at Nura23 in 2025.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">1. Comprehensive Holistic Wellness</h2>
      <p>
        At Nura23, our spa day experience goes beyond relaxation. It addresses body, mind, and skin health simultaneously, integrating massage therapies, aromatherapy, detox programs, and wellness guidance for total rejuvenation.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">2. Advanced Skincare Treatments</h2>
      <p>
        From signature facials and anti-aging therapies to PRP, microneedling, chemical peels, and laser treatments, your skin receives personalized, science-backed care to achieve radiance, hydration, and youthful glow.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">3. Hair & Scalp Rejuvenation</h2>
      <p>
        Nura23 offers scalp detox, PRP therapy, GFC treatments, and laser hair regrowth, ensuring your hair looks healthy, strong, and vibrant, complementing the overall wellness experience.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">4. Stress Relief & Mental Relaxation</h2>
      <p>
        Our holistic massages, aromatherapy, and reflexology sessions help reduce stress, alleviate tension, and promote mental clarity and relaxation — essential for modern lifestyles.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">5. Body Contouring & Fat Reduction</h2>
      <p>
        Enjoy non-surgical body contouring and slimming treatments using RF technology and holistic wellness programs. Sculpt your body, improve circulation, and feel rejuvenated.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">6. Detox & Rejuvenation Programs</h2>
      <p>
        Our detox therapies help remove toxins, improve metabolism, and boost overall vitality. These programs enhance skin clarity, energy levels, and internal wellness.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">7. Personalized Nutrition & Lifestyle Consultation</h2>
      <p>
        Nura23 provides customized wellness guidance, including nutrition planning, lifestyle tips, and health coaching, ensuring that your spa day results extend beyond the clinic.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">8. Ethical & Safe Treatments</h2>
      <p>
        We prioritize safety, hygiene, and ethical practices. All treatments are non-invasive or minimally invasive, using cruelty-free, high-quality products, making your spa experience safe and effective.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">9. Luxury & Comfort</h2>
      <p>
        Our spa offers a serene, hygienic, and luxurious environment, designed to maximize relaxation. Every detail, from ambiance to service, is curated for a premium spa experience.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">10. Visible, Long-Lasting Results</h2>
      <p>
        Whether it's glowing skin, stronger hair, a toned body, or stress relief, treatments at Nura23 are designed for lasting results, making your spa day a worthwhile investment in beauty and wellness.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Experience the Nura23 Spa Difference in 2025</h2>
      <p>
        Booking a spa day at Nura23 is more than pampering — it's a holistic investment in your health, beauty, and well-being. With personalized treatments, advanced technology, traditional healing therapies, and holistic guidance, every client leaves rejuvenated, relaxed, and radiant.
      </p>
    </div>
  );

  return (
    <ArticleTemplate
      title="Top 10 Reasons to Book a Spa Day at Nura23 in 2025"
      date="2025-02-05"
      category="Spa & Wellness"
      image={spaDayImg}
      content={content}
    />
  );
};

export default SpaDay2025;
