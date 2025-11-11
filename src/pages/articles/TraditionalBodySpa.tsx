import ArticleTemplate from "@/components/ArticleTemplate";
import traditionalSpaImg from "@/assets/articles/traditional-spa.jpg";

const TraditionalBodySpa = () => {
  const content = (
    <div className="space-y-6 text-muted-foreground">
      <p className="text-xl leading-relaxed">
        In the quest for beauty and wellness, modern technology often takes center stage. Yet, the timeless wisdom of traditional healing practices continues to hold unparalleled value. At Nura23 Skin & Wellness, we blend ancient therapies with modern techniques to provide a holistic spa experience that rejuvenates the body, mind, and spirit.
      </p>
      <p className="text-xl leading-relaxed">
        Our Traditional Body Spa treatments are designed to restore balance, improve vitality, and promote natural beauty — combining centuries-old healing knowledge with state-of-the-art wellness technology.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">The Essence of Traditional Body Spa</h2>
      <p>
        Traditional body spa therapies are rooted in Ayurveda, natural healing, and therapeutic touch, focusing on restoring harmony within the body. These therapies use:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Herbal oils and extracts known for their therapeutic and rejuvenating properties</li>
        <li>Massage techniques that improve circulation, release tension, and stimulate energy points</li>
        <li>Detoxification rituals that eliminate toxins and revitalize skin and muscles</li>
      </ul>
      <p>
        At Nura23, we harness this ancient wisdom to deliver treatments that are not only relaxing but also deeply restorative, leaving clients feeling rejuvenated from the inside out.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Benefits of Traditional Body Spa Therapy</h2>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <strong>Relaxation and Stress Relief</strong><br/>
          Targeted massage techniques relieve muscle tension, anxiety, and mental fatigue, promoting a deep sense of calm and relaxation.
        </li>
        <li>
          <strong>Detoxification and Purification</strong><br/>
          Herbal oils and scrubs help eliminate toxins, stimulate lymphatic flow, and improve overall circulation.
        </li>
        <li>
          <strong>Skin Rejuvenation</strong><br/>
          Treatments enhance hydration, softness, and radiance, helping the skin look naturally glowing and youthful.
        </li>
        <li>
          <strong>Pain Relief and Muscle Healing</strong><br/>
          Specialized massages help reduce stiffness, soreness, and joint discomfort, improving mobility and flexibility.
        </li>
        <li>
          <strong>Holistic Wellness</strong><br/>
          By balancing the body, mind, and energy, traditional therapies boost vitality, immunity, and overall well-being.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-foreground mt-8">Nura23's Unique Approach: Modern Beauty Meets Ancient Wisdom</h2>
      <p>At Nura23, we integrate traditional therapies with modern spa technology to maximize results:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Customized Herbal Treatments:</strong> Tailored to individual skin type, body constitution, and wellness goals</li>
        <li><strong>Modern Equipment Support:</strong> Combining heat therapy, pressure point techniques, and RF technology to enhance traditional massage outcomes</li>
        <li><strong>Luxury & Hygiene:</strong> A serene and sanitized spa environment to ensure a safe, comfortable, and indulgent experience</li>
      </ul>
      <p>
        This approach ensures that clients receive the best of both worlds — the time-tested healing benefits of traditional therapies and the efficiency and precision of modern technology.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Who Can Benefit from Traditional Body Spa at Nura23?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Individuals experiencing stress, fatigue, or mental exhaustion</li>
        <li>Those with muscle stiffness, joint pain, or circulation issues</li>
        <li>People seeking natural skin rejuvenation and detoxification</li>
        <li>Anyone wanting a holistic approach to wellness and beauty</li>
      </ul>
      <p>
        Regular traditional spa treatments help maintain physical vitality, mental clarity, and radiant skin, while promoting overall harmony and wellness.
      </p>

      <h2 className="text-2xl font-bold text-foreground mt-8">Experience the Nura23 Difference</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Expert Therapists:</strong> Trained in both ancient techniques and modern spa practices</li>
        <li><strong>Customized Treatments:</strong> Tailored to your specific wellness and beauty goals</li>
        <li><strong>Holistic Approach:</strong> Addresses physical, mental, and spiritual well-being</li>
        <li><strong>Luxurious Environment:</strong> Relaxing, hygienic, and tranquil setting for a premium spa experience</li>
      </ul>
    </div>
  );

  return (
    <ArticleTemplate
      title="Ancient Healing Meets Modern Beauty: The Power of Traditional Body Spa"
      date="2025-01-20"
      category="Wellness"
      image={traditionalSpaImg}
      content={content}
    />
  );
};

export default TraditionalBodySpa;
