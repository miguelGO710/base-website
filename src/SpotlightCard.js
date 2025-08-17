import { useRef, useEffect } from "react";
import "./SpotlightCard.css";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(139, 92, 246, 0.15)" }) => {
  const divRef = useRef(null);

  // Initialize CSS custom properties on mount
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty("--mouse-x", "50%");
      divRef.current.style.setProperty("--mouse-y", "50%");
      divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    }
  }, [spotlightColor]);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Force browser to recognize the custom properties
    requestAnimationFrame(() => {
      if (divRef.current) {
        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
      }
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
