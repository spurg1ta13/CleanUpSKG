import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-sm py-2">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
      <div className="flex items-center gap-6">
        <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Phone className="h-3.5 w-3.5" />
          <span>+1 (234) 567-890</span>
        </a>
        <a href="mailto:info@cleanpro.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail className="h-3.5 w-3.5" />
          <span>info@cleanpro.com</span>
        </a>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
      </div>
    </div>
  </div>
);

export default TopBar;
