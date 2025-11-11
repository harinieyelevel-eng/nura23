import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link, image }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <CardContent className="p-0">
          {image && (
            <div className="h-48 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          )}
          <div className="p-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
