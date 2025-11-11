import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AppointmentDialog from "@/components/AppointmentDialog";
import logo from "@/assets/logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Articles",
      path: "/articles",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    {
      label: "Product",
      path: "/product",
    },
    {
      label: "Academy",
      path: "/academy",
    },
  ];
  
  const serviceItems = [
    { label: "Skin Care", path: "/services/skin-care" },
    { label: "Aesthetics", path: "/services/aesthetics" },
    { label: "Hair Treatment", path: "/services/hair-treatment" },
    { label: "Wellness", path: "/services/wellness" },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith("/services");
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06462a] border-b border-[#06462a]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Nura Clinic" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-white ${isActive(item.path) ? "text-white font-semibold" : "text-white/80"}`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-2">
              <Link
                to="/services"
                className={`text-sm font-medium transition-colors hover:text-white ${isServicesActive() ? "text-white font-semibold" : "text-white/80"}`}
              >
                Services
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center text-sm font-medium transition-colors hover:text-white focus:outline-none ${isServicesActive() ? "text-white font-semibold" : "text-white/80"}`}>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50 shadow-lg">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link to={service.path} className="cursor-pointer">
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {navItems.slice(2).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-white ${isActive(item.path) ? "text-white font-semibold" : "text-white/80"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+917550044699"
              className="flex items-center space-x-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 7550044699</span>
            </a>
            <Button 
              variant="appointment"
              onClick={() => setAppointmentOpen(true)}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-white ${isActive(item.path) ? "text-white font-semibold" : "text-white/80"}`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-2">
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white hover:text-white transition-colors"
                >
                  Services
                </Link>
                {serviceItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors pl-4"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-white ${isActive(item.path) ? "text-white font-semibold" : "text-white/80"}`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+917550044699"
                className="flex items-center space-x-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 7550044699</span>
              </a>
              <Button 
                variant="appointment" 
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  setAppointmentOpen(true);
                }}
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <AppointmentDialog 
        open={appointmentOpen} 
        onOpenChange={setAppointmentOpen} 
      />
    </nav>
  );
};
export default Navigation;
