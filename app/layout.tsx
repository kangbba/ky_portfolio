import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "규연 실장 | 애브뉴준오 청담 메이크업 아티스트",
  description: "청담 애브뉴준오 규연 실장의 웨딩 메이크업 전문 포트폴리오. 자연스럽고 품격있는 메이크업으로 당신의 가장 아름다운 순간을 완성합니다.",
  keywords: ["청담 메이크업", "웨딩 메이크업", "애브뉴준오", "규연 실장", "본식 메이크업", "스드메"],
  authors: [{ name: "규연" }],
  openGraph: {
    title: "규연 실장 | 애브뉴준오 청담 메이크업 아티스트",
    description: "청담 애브뉴준오 규연 실장의 웨딩 메이크업 전문 포트폴리오",
    type: "website",
    locale: "ko_KR",
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
