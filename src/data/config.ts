import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const siteConfig = {
  name: "SmileCare Dental Clinic",
  shortName: "SmileCare",
  description: "Friendly and experienced dental specialist focused on patient comfort.",
  contact: {
    phone: "+911234567890", // Replace with actual number
    whatsapp: "911234567890", // Replace with actual WhatsApp number (no +)
    address: "1st Floor, Pitrukrupa Complex, Teen Hanuman Mandir, 42, Deesa, Gujarat 385535",
    email: "hello@smilecare.com", // Replace with actual email
    googleMapsUrl: "https://www.google.com/maps?q=Smile+Care+Dental+Clinic+%26+Implant+Center(Dr.+Miral+K+Patel),+Deesa&output=embed",
  },
  doctor: {
    name: "Dr. [Your Name]",
    experience: "5+ years",
    description: "Friendly and experienced dental specialist focused on patient comfort. We utilize the latest technology to ensure painless and effective treatments.",
    qualifications: "BDS, MDS (Prosthodontics)", // Example
    image: "/images/doctor.jpg", // Create this placeholder later or use a stock image link
  },
  hours: [
    { day: "Monday - Saturday", time: "09:00 AM - 08:00 PM" },
    { day: "Sunday", time: "Closed (Emergencies Only)" },
  ],
  services: [
    {
      id: "teeth-cleaning",
      title: "Teeth Cleaning",
      description: "Professional plaque and tartar removal for healthy gums and teeth.",
      icon: "Stethoscope", // Generic icon placeholder string to be mapped in component
    },
    {
      id: "root-canal",
      title: "Root Canal",
      description: "Painless root canal treatments to save severely decayed teeth.",
      icon: "ShieldAlert",
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      description: "Permanent replacements for missing teeth that look and feel natural.",
      icon: "Syringe",
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      description: "Advanced whitening treatments for a brighter, more confident smile.",
      icon: "Sparkles",
    },
    {
      id: "braces-treatment",
      title: "Braces Treatment",
      description: "Orthodontic treatments to correct misaligned teeth and jaws.",
      icon: "Activity",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Rahul P.",
      review: "Very clean clinic and Dr. is very polite. My root canal was completely painless.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sneha G.",
      review: "Best dental clinic in Deesa. Highly recommend for teeth whitening and cleaning.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      review: "Got braces for my daughter here. The staff is very friendly and professional.",
      rating: 5,
    },
  ],
  gallery: [
    { id: 1, url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600", title: "Modern Reception area" },
    { id: 2, url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=600", title: "Advanced Treatment Room" },
    { id: 3, url: "https://images.unsplash.com/photo-1598256989800-fea5a037bce4?auto=format&fit=crop&q=80&w=800&h=600", title: "Happy Patient Smile" },
    { id: 4, url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800&h=600", title: "State of the art Equipment" },
    { id: 5, url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600", title: "Expert Consultations" },
    { id: 6, url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=600", title: "Clean & Safe Environment" },
  ]
};
