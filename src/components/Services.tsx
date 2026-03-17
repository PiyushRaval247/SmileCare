import { siteConfig } from '@/data/config';
import { Activity, ShieldAlert, Sparkles, Stethoscope, Syringe } from 'lucide-react';
import React from 'react';

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  ShieldAlert: <ShieldAlert className="w-8 h-8" />,
  Syringe: <Syringe className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />
};

export default function Services({ limit }: { limit?: number }) {
  const displayServices = limit ? siteConfig.services.slice(0, limit) : siteConfig.services;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive dental care tailored to your specific needs, using the latest equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon] || <Stethoscope className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
