import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#06462a] border-t border-[#06462a]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">NURA23</h3>
            <p className="text-sm text-white/80">
              Your beauty wellness, our passion. Advanced skincare, aesthetics, and wellness solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nura23_reflex.skin/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/1ACEdQNn5D/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.threads.com/@nura23_reflex.skin" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 3.003a8.716 8.716 0 0 0-6.597 3.028 1 1 0 1 0 1.51 1.317 6.716 6.716 0 0 1 10.597 5.368c.003.042.003.085.003.128v1.181a2.49 2.49 0 0 1-4.979 0v-1.181a4.503 4.503 0 1 0-1.502 3.365v.687a4.49 4.49 0 0 0 8.481 0v-1.87c0-.048 0-.095-.003-.142A8.716 8.716 0 0 0 12.186 3.003Zm0 8.5a2.503 2.503 0 1 1 0 5.005 2.503 2.503 0 0 1 0-5.005Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-white/80 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-white/80 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/80">Skin Care</li>
              <li className="text-sm text-white/80">Aesthetics</li>
              <li className="text-sm text-white/80">Hair Treatment</li>
              <li className="text-sm text-white/80">Wellness</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <a href="tel:+917550044699" className="text-sm text-white/80 hover:text-white transition-colors">
                  +91 7550044699
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <a href="mailto:info@nura23.com" className="text-sm text-white/80 hover:text-white transition-colors">
                  info@nura23.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Chennai, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center space-y-2">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} NURA23 Skin Care, Aesthetics & Wellness. All rights reserved.
          </p>
          <p className="text-sm text-white/80">
            Designed by{" "}
            <a 
              href="https://www.eyelevelstudio.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Eyelevel Growth Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
