import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/data/config";

export const metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} to schedule an appointment or ask any questions.`,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to schedule your visit today.
          </p>
        </div>
      </div>

      <div className="-mt-8 relative z-10 w-full bg-slate-50 rounded-t-3xl pt-8">
        <ContactSection />
      </div>
    </div>
  );
}
