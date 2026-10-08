import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS(options: AOS.AosOptions = {}) {
  if (typeof window === "undefined") return;

  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
    delay: 50,
    ...options,
  });
}

export function refreshAOS() {
  if (typeof window === "undefined") return;
  AOS.refresh();
}
