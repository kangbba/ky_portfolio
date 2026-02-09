import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "규연 실장 애브뉴준오 청담 메이크업 아티스트",
  description: "당신의 가장 아름다운 순간을 함께 만들어갑니다 💖",
  keywords: ["청담 메이크업", "웨딩 메이크업", "애브뉴준오", "규연 실장", "본식 메이크업", "스드메", "혼주 메이크업", "프로필 촬영"],
  authors: [{ name: "규연" }],
  openGraph: {
    title: "규연 실장 애브뉴준오 청담 메이크업 아티스트",
    description: "당신의 가장 아름다운 순간을 함께 만들어갑니다 💖",
    type: "website",
    locale: "ko_KR",
    siteName: "규연 실장",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
