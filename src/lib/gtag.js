export const reportConversion = (url) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  const callback = () => {
    if (url) {
      window.location.href = url;
    }
  };

  window.gtag("event", "conversion", {
    send_to: "AW-16529813358/iNf6CM-P39sbEO7eg8o9",
    event_callback: callback,
  });
};
