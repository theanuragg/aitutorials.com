import { ImageResponse } from "next/og";

// Image metadata
export const alt = "AI Tutorials";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Use a monospace font for the text
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#3b82f6", // Tailwind blue-500
          fontFamily: "monospace", // Using monospace font
        }}
      >
        AITutorials.com
      </div>
    ),
    {
      ...size,
    }
  );
}
