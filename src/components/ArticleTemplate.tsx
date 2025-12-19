import { Link, useLocation } from "react-router-dom";
import { Calendar, ArrowLeft, Share2, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ArticleTemplateProps {
  title: string;
  date: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

const ArticleTemplate = ({ title, date, category, image, content }: ArticleTemplateProps) => {
  const location = useLocation();
  const domain = "https://nura23.com";
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${domain}${location.pathname}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    x: `https://x.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}`
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <section className="py-4 bg-background border-b">
        <div className="container mx-auto px-4">
          <Link to="/articles">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-8 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                {category}
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg">
            {content}
          </article>

          {/* Share Buttons */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share this article
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a href={shareLinks.x} target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={handleCopyLink}
                >
                  <Share2 className="h-4 w-4" />
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Experience NURA23?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your consultation today and start your journey to radiant skin and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleTemplate;
