import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import "./ScrollToTopButton.css";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="scroll-to-top-btn"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}
