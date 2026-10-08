export function focusElement(elementId: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(elementId);
  if (el) {
    el.focus();
    if (el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

export function trapFocus(container: HTMLElement, event: KeyboardEvent) {
  if (event.key !== "Tab") return;

  const focusables = container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusables[0];
  const lastFocusable = focusables[focusables.length - 1];

  if (event.shiftKey) {
    if (document.activeElement === firstFocusable) {
      lastFocusable?.focus();
      event.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      firstFocusable?.focus();
      event.preventDefault();
    }
  }
}
