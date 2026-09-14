import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Juan Ignacio Bellavitis — Senior Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #312e81 100%)",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.25)",
          }}
        />

        <p
          style={{
            fontSize: 22,
            color: "#818cf8",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          juanbellavitis-portfolio.vercel.app
        </p>

        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Juan Ignacio Bellavitis
        </h1>

        <p
          style={{
            fontSize: 30,
            color: "#94a3b8",
            fontWeight: 400,
          }}
        >
          Senior Full Stack Software Engineer
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 36,
          }}
        >
          {["React", "NestJS", "Java", "AWS"].map((tag) => (
            <span
              key={tag}
              style={{
                background: "rgba(99,102,241,0.2)",
                border: "1px solid rgba(99,102,241,0.4)",
                borderRadius: 9999,
                padding: "8px 20px",
                fontSize: 18,
                color: "#a5b4fc",
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
