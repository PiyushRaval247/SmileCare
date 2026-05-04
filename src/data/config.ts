import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const siteConfig = {
  name: "Dr Avinash Kumar (Gastro and Liver Clinic)",
  shortName: "Gastro & Liver Clinic",
  description: "Expert care for digestive and liver disorders with advanced diagnostic and treatment facilities.",
  contact: {
    phone: "+91 74638 78842",
    whatsapp: "917463878842",
    address: "Kankarbagh, Bankman Colony, Patna, Bihar 800020",
    email: "contact@dravinashkumar.com",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed587d6e6c466b%3A0xc3f8e6c466b!2sDr%20Avinash%20Kumar%20(Gastro%20and%20Liver%20Clinic)!5e0!3m2!1sen!2sin!4v1714810000000!5m2!1sen!2sin",
    calComUrl: "piyush-raval-018-uucdx2", // Updated with user's link
  },
  doctor: {
    name: "Dr. Avinash Kumar",
    experience: "10+ years",
    description: "Highly skilled Gastroenterologist and Liver Specialist dedicated to providing comprehensive care for all digestive health issues.",
    qualifications: "MBBS, MD, DM (Gastroenterology)",
    image: "/images/doctor.jpg",
  },
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM - 07:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  services: [
    {
      id: "endoscopy",
      title: "Endoscopy & Gastroscopy",
      description: "Advanced endoscopic procedures for accurate diagnosis of upper GI issues.",
      icon: "Stethoscope",
    },
    {
      id: "colonoscopy",
      title: "Colonoscopy",
      description: "Detailed screening and diagnostic colonoscopy for lower GI health.",
      icon: "ShieldAlert",
    },
    {
      id: "liver-care",
      title: "Liver Disease Treatment",
      description: "Specialized care for Fatty Liver, Cirrhosis, and other liver conditions.",
      icon: "Activity",
    },
    {
      id: "hepatitis-treatment",
      title: "Hepatitis & Jaundice",
      description: "Comprehensive management and treatment for all types of Hepatitis.",
      icon: "Sparkles",
    },
    {
      id: "digestive-disorders",
      title: "Acidity & Gas Treatment",
      description: "Effective solutions for chronic acidity, gas, and GERD symptoms.",
      icon: "Zap",
    },
    {
      id: "abdominal-pain",
      title: "Abdominal Pain Management",
      description: "Expert diagnosis and treatment for persistent or acute stomach pain.",
      icon: "Heart",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      review: "Dr. Avinash is very knowledgeable. My long-term stomach issues were resolved within weeks.",
      rating: 5,
    },
    {
      id: 2,
      name: "Suman Singh",
      review: "Best gastroenterologist in Patna. The endoscopy was done very professionally and comfortably.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      review: "Highly recommend for liver-related issues. The doctor explains everything very clearly.",
      rating: 5,
    },
  ],
  gallery: [
    { id: 1, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600", title: "Modern Clinic Entrance" },
    { id: 2, url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800&h=600", title: "Diagnostic Center" },
    { id: 3, url: "https://images.unsplash.com/photo-1581594658210-c5c85d9f68b1?auto=format&fit=crop&q=80&w=800&h=600", title: "Comfortable Patient Waiting" },
    { id: 4, url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80&w=800&h=600", title: "State of the art Equipment" },
    { id: 5, url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600", title: "Expert Consultations" },
    { id: 6, url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=600", title: "Clean & Safe Environment" },
  ]
};
