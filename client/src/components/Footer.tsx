import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import footerBgImage from '../assets/footer bg.png';

export default function Footer() {
  return (
    <footer
      className="relative text-white py-16 bg-black"
      style={{
        backgroundImage: `url(${footerBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/Tabdeel_Logo-normal.png"
                alt="Tabdeel Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover how Tabdeel enhances efficiency, reduces operational costs and drives business growth through seamless IT and security solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="link-footer-solution"
                >
                  Solution
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="link-footer-projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="tel:8008485" className="hover:text-primary transition-colors">
                  800 8485
                </a>
              </li>
              <li>
                <a href="tel:+97142501665" className="hover:text-primary transition-colors">
                  +971 4 250 1665
                </a>
              </li>
              <li>
                <a href="mailto:info@tabdeel.io" className="hover:text-primary transition-colors">
                  info@tabdeel.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Tabdeel © 2025 All rights reserved | Privacy Policy | Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
