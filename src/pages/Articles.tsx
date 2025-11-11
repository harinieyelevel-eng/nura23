import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import futureSkincareImg from "@/assets/articles/future-skincare.jpg";
import traditionalSpaImg from "@/assets/articles/traditional-spa.jpg";
import agelessBeautyImg from "@/assets/articles/ageless-beauty.jpg";
import holisticGlowImg from "@/assets/articles/holistic-glow.jpg";
import spaDayImg from "@/assets/articles/spa-day.jpg";
import beautyTrendsImg from "@/assets/articles/beauty-trends.jpg";
import bridalGlowImg from "@/assets/articles/bridal-glow.jpg";
import transformationImg from "@/assets/articles/transformation.jpg";
import skinEveryAgeImg from "@/assets/articles/skin-every-age.jpg";
import selfCareSuccessImg from "@/assets/articles/self-care-success.jpg";

const Articles = () => {
  const articles = [
    { title: "The Future of Skin Care in 2025", excerpt: "Science-backed personalized solutions for radiant, healthy skin.", date: "2025-01-15", category: "Skin Care", image: futureSkincareImg, link: "/articles/future-skincare-2025" },
    { title: "Ancient Healing Meets Modern Beauty", excerpt: "Traditional body spa combining Ayurveda with modern techniques.", date: "2025-01-20", category: "Wellness", image: traditionalSpaImg, link: "/articles/traditional-body-spa" },
    { title: "Achieve Ageless Beauty", excerpt: "Advanced aesthetic treatments for natural, youthful radiance.", date: "2025-01-25", category: "Aesthetics", image: agelessBeautyImg, link: "/articles/ageless-beauty" },
    { title: "Glow from Within", excerpt: "Holistic approach to skin and wellness for lasting beauty.", date: "2025-02-01", category: "Wellness", image: holisticGlowImg, link: "/articles/holistic-glow" },
    { title: "Top 10 Reasons for a Spa Day", excerpt: "Why booking a spa day is an investment in your wellness.", date: "2025-02-05", category: "Spa", image: spaDayImg, link: "/articles/spa-day-2025" },
    { title: "2025 Beauty Trends", excerpt: "Innovative treatments combining science and holistic care.", date: "2025-02-10", category: "Trends", image: beautyTrendsImg, link: "/articles/beauty-trends-2025" },
    { title: "Bridal Glow Secrets", excerpt: "Pre-wedding skin and spa packages for radiant brides.", date: "2025-02-14", category: "Bridal", image: bridalGlowImg, link: "/articles/bridal-glow" },
    { title: "Aesthetics with Wellness", excerpt: "Total transformation through combined approach.", date: "2025-02-18", category: "Wellness", image: transformationImg, link: "/articles/aesthetics-wellness" },
    { title: "Skin Treatments for Every Age", excerpt: "Age-specific solutions for youthful skin at every stage.", date: "2025-02-22", category: "Skin Care", image: skinEveryAgeImg, link: "/articles/skin-every-age" },
    { title: "Self-Care is the New Success", excerpt: "The Nura23 wellness lifestyle for total well-being.", date: "2025-02-26", category: "Lifestyle", image: selfCareSuccessImg, link: "/articles/self-care-success" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Articles Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Link key={index} to={article.link}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 duration-300 h-full">
                  <CardContent className="p-0">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6 space-y-4">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {article.category}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                      <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic">
                  "The team at NURA23 is amazing! My skin has never looked better. The personalized care 
                  and attention to detail are exceptional."
                </p>
                <div className="font-semibold text-foreground">- Priya R.</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic">
                  "I've tried many clinics, but NURA23 stands out. The RF skin tightening treatment 
                  gave me visible results without any downtime."
                </p>
                <div className="font-semibold text-foreground">- Rahul M.</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground italic">
                  "Professional, caring, and results-driven. The scalp detox therapy helped with my 
                  hair fall issues significantly. Highly recommend!"
                </p>
                <div className="font-semibold text-foreground">- Ananya S.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Video Testimonials</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Video testimonials coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
