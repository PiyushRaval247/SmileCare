import Services from "@/components/Services";
import { siteConfig } from "@/data/config";

export const metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: "Explore our comprehensive range of dental services including teeth cleaning, root canals, implants, and more.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Comprehensive Dental Services
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            From routine cleanings to advanced procedures, we provide top-quality care for your smile.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="-mt-8 relative z-10 w-full bg-white rounded-t-3xl pt-8">
        <Services />
      </div>
    </div>
  );
}
