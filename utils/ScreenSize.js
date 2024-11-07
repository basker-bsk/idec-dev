"use client";
import { useEffect, useState } from "react";
export default function Screensize() {
  const [isBigScreen, setIsBigScreen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsBigScreen(true);
      } else {
        setIsBigScreen(false);
      }
    }
  }, []);
  if (typeof window !== "undefined") {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      if (e.matches) {
        return setIsBigScreen(true);
      } else {
        return setIsBigScreen(false);
      }
    });
  }
  return isBigScreen;
}
