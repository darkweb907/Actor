import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MessageSquare,
} from "lucide-react";

const Footer = () => {
  const items = [
    "News",
    "Finally Enough Love",
    "Music",
    "Community",
    "Ray of Light",
    "Raising Malawi",
    "Store US",
    "Store UK",
  ];

  const secondary = [
    "Help",
    "Newsletter",
    "Terms and Conditions",
    "Privacy Policy",
    "Concert Tickets",
    "Do Not Sell or Share My Personal Information",
  ];

  return (
    <footer className="bg-black text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center space-y-10">

        {/* Brand */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] font-serif logo">
          Jide PENIEL
        </h1>

        {/* Main Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-xs sm:text-sm uppercase tracking-widest">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Secondary Links */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-3 text-[10px] sm:text-xs uppercase tracking-widest text-red-600">
          {secondary.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-red-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 sm:gap-6 pt-4">
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-400 transition" />
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-400 transition" />
          <Youtube className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-400 transition" />
          <Twitter className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-400 transition" />
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-400 transition" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-[10px] sm:text-xs text-gray-400 leading-relaxed">
        © 2026, Boy Toy Powered by Live Nation Entertainment. · Privacy policy ·
        Contact information · Refund policy · Terms of service · Shipping policy
      </div>

    </footer>
  );
};

export default Footer;
