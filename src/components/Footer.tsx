import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 justify-center flex flex-col w-full text-slate-300">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Clinic Info */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'About Doctor', href: '/about' },
                { name: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-tight">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-blue-400 transition-colors pointer-events-auto">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Working Hours</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.hours.map((hour, idx) => (
                <li key={idx} className="flex flex-col gap-1">
                  <span className="font-medium text-slate-200">{hour.day}</span>
                  <span className="text-slate-400">{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 hover:text-slate-400 transition-colors">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>
            Designed with <span className="text-blue-500">♥</span> for your smile.
          </p>
        </div>
      </div>
    </footer>
  );
}
