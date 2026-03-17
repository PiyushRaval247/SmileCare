"use client";

import Image from 'next/image';
import { siteConfig } from '@/data/config';
import { CheckCircle2 } from 'lucide-react';

export default function AboutDoctor() {
  const { doctor } = siteConfig;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-96 md:w-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Replace with actual image when available, using a solid background as placeholder */}
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-2xl">
                Doctor Photo
              </div>
              <Image 
                src="/doctor-placeholder.jpg" 
                alt={doctor.name} 
                fill 
                className="object-cover" 
                sizes="(max-w-768px) 100vw, 50vw"
                onError={(e) => {
                  // Fallback for missing image
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white text-center">
                <p className="font-bold text-xl">{doctor.name}</p>
                <p className="text-sm font-medium text-blue-200">{doctor.qualifications}</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Meet Your Specialist
                <br />
                <span className="text-blue-600">Committed to Your Smile</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                {doctor.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-slate-700">{doctor.experience} Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-slate-700">Modern Equipment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-slate-700">Painless Procedures</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <span className="font-medium text-slate-700">Friendly Environment</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
