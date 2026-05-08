import React from "react";

const TransformationSection = () => {
  const accent = "#C5A100";
  const accentLight = "#FFE085";
  const white = "#ffffff";
  const lightText = "#bdbdbd";
  const border = "rgba(255,255,255,0.18)";
  const cardBg = "#0b0b0b";

  const transformations = [
    {
      id: 1,
      before:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
      after:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80",
      beforeLabel: "WEEK 1",
      afterLabel: "WEEK 16",
    },
    {
      id: 2,
      before:
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=700&q=80",
      after:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=700&q=80",
      beforeLabel: "WEEK 1",
      afterLabel: "WEEK 13",
    },
    {
      id: 3,
      before:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
      after:
        "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=700&q=80",
      beforeLabel: "WEEK 1",
      afterLabel: "WEEK 16",
    },
    {
      id: 4,
      before:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=700&q=80",
      after:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80",
      beforeLabel: "WEEK 1",
      afterLabel: "WEEK 14",
    },
  ];

  const sliderItems = [...transformations, ...transformations];

  return (
    <section
      style={{
backgroundColor: "#000",
        padding: "90px 20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: accent,
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            fontWeight: 800,
            marginBottom: "18px",
            lineHeight: 1.1,
            fontFamily: "Montserrat, Arial, sans-serif",
            textShadow: "0 0 18px rgba(197,161,0,0.18)",
          }}
        >
          Real People. Real Results.
        </h2>

        <p
          style={{
            color: lightText,
            fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
            marginBottom: "50px",
            lineHeight: 1.6,
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          Over{" "}
          <span style={{ color: accent, fontWeight: 800 }}>6,800+</span>{" "}
          working professionals have completed{" "}
          <span style={{ color: white, fontWeight: 700 }}>CoreX</span>{" "}
          across India.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        

        <div
          className="transformation-slider"
          style={{
            display: "flex",
            gap: "28px",
            width: "max-content",
            alignItems: "stretch",
            animation: "slideLeft 38s linear infinite",
          }}
        >
          {sliderItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                minWidth: "320px",
                width: "320px",
                background: cardBg,
                borderRadius: "26px",
                border: `1px solid ${border}`,
                overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                transform: "rotate(0deg)",
              }}
              onMouseEnter={(e) => {
  e.currentTarget.style.transform = "rotate(0deg)";
              }}
             onMouseLeave={(e) => {
  e.currentTarget.style.transform = "rotate(0deg)";
  e.currentTarget.style.boxShadow =
    "0 12px 30px rgba(0,0,0,0.35)";
}}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  minHeight: "390px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={item.before}
                    alt={item.beforeLabel}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(0,0,0,0.72)",
                      color: accentLight,
                      fontWeight: 900,
                      fontSize: "1rem",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      letterSpacing: "0.03em",
                      fontFamily: "Montserrat, Arial, sans-serif",
                    }}
                  >
                    {item.beforeLabel}
                  </span>
                </div>

                <div style={{ position: "relative" }}>
                  <img
                    src={item.after}
                    alt={item.afterLabel}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "rgba(0,0,0,0.72)",
                      color: accentLight,
                      fontWeight: 900,
                      fontSize: "1rem",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      letterSpacing: "0.03em",
                      fontFamily: "Montserrat, Arial, sans-serif",
                    }}
                  >
                    {item.afterLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .transformation-slider:hover {
            animation-play-state: paused;
          }

          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .transformation-slider > div {
              min-width: 280px !important;
              width: 280px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .transformation-slider {
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default TransformationSection;