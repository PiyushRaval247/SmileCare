"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function CalComButton({ className }: { className?: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { 
        theme: "light", 
        styles: { branding: { brandColor: "#2563eb" } }, 
        hideEventTypeDetails: false, 
        layout: "month_view" 
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={siteConfig.contact.calComUrl}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      <CalendarDays className="w-5 h-5" />
      <span>Book Online</span>
    </button>
  );
}
