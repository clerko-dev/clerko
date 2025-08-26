"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import clsx from "clsx";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdza, czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "false");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={clsx(
      "fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] p-6 rounded-2xl glass shadow-2xl transition-all duration-300",
      "w-[90%] md:w-auto max-w-2xl",
      "animate-fadeIn"
    )}>
      <p className="text-sm md:text-base text-foreground/80 mb-4">
        Ta strona używa ciasteczek, aby świadczyć usługi na najwyższym poziomie.
        <br className="hidden sm:inline" /> Kontynuując, zgadzasz się na ich użycie.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={handleAccept} className="w-full sm:w-auto">
          Akceptuję
        </Button>
        <Button onClick={handleDecline} variant="secondary" className="w-full sm:w-auto">
          Odrzucam
        </Button>
      </div>
    </div>
  );
}