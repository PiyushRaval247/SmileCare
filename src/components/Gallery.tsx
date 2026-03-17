"use client";

import { siteConfig } from '@/data/config';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
};

export default function Gallery() {
  const { gallery } = siteConfig;

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Clinic Gallery
          </h2>
          <p className="text-lg text-slate-600">
            Take a tour of our modern facilities designed with your comfort in mind.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gallery.map((image) => (
            <motion.div 
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md group cursor-pointer border-2 border-transparent hover:border-blue-400 transition-colors"
            >
              {/* Fallback solid background until real image maps block errors */}
              <div className="absolute inset-0 bg-blue-100 flex items-center justify-center text-blue-400 font-bold z-0">
                {image.title}
              </div>
              <Image 
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 z-10"
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 33vw"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'; // Fallback to blue background if missing
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                <span className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
