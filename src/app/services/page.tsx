import Services from "@/components/Services";
import { siteConfig } from "@/data/config";

export const metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: "Explore our comprehensive range of gastroenterology services including endoscopy, colonoscopy, and specialized liver care.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Expert Gastroenterology Services
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Providing advanced diagnostic and treatment procedures for your digestive and liver health.
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
