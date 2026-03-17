import AboutDoctor from "@/components/AboutDoctor";
import { siteConfig } from "@/data/config";

export const metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.doctor.name} and the team at ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Our Practice
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Dedicated to providing exceptional dental care in a comfortable and friendly environment.
          </p>
        </div>
      </div>

      <div className="-mt-8 relative z-10 w-full bg-white rounded-t-3xl pt-8">
        <AboutDoctor />
      </div>
    </div>
  );
}
