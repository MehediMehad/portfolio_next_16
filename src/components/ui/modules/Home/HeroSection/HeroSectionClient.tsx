"use client";

import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";

export default function HeroSectionClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return <HeroSection isLoaded={isLoaded} />;
}
