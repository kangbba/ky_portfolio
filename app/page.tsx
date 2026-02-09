"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

function AutoSizeText({
  children,
  maxFontSize = 20,
  minFontSize = 8,
  className = ""
}: {
  children: React.ReactNode;
  maxFontSize?: number;
  minFontSize?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const resizeText = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      timeoutRef.current = setTimeout(() => {
        const parent = element.parentElement;
        if (!parent) return;

        let currentSize = maxFontSize;
        element.style.fontSize = `${currentSize}px`;

        while (element.scrollWidth > parent.clientWidth && currentSize > minFontSize) {
          currentSize -= 1;
          element.style.fontSize = `${currentSize}px`;
        }
      }, 50);
    };

    // Initial resize
    requestAnimationFrame(resizeText);

    const observer = new ResizeObserver(resizeText);
    if (element.parentElement) {
      observer.observe(element.parentElement);
    }

    window.addEventListener('resize', resizeText);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', resizeText);
      observer.disconnect();
    };
  }, [children, maxFontSize, minFontSize]);

  return (
    <span ref={ref} className={`whitespace-nowrap ${className}`}>
      {children}
    </span>
  );
}

export default function Home() {
  // Fixed color values
  const color1 = "#f7f2d4";
  const color2 = "#ffe9d6";
  const color3 = "#ffd5c7";
  const textColor = "#5c4033";
  const pos1 = 34;
  const pos2 = 78;
  const pos3 = 100;

  useEffect(() => {
    document.documentElement.style.setProperty('--signature', color1);
    document.documentElement.style.setProperty('--lovely-peach', color2);
    document.documentElement.style.setProperty('--lovely-pink', color3);
    document.documentElement.style.setProperty('--text-dark', textColor);

    document.body.style.background = `linear-gradient(135deg, ${color1} ${pos1}%, ${color2} ${pos2}%, ${color3} ${pos3}%)`;
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden max-w-full">
      {/* Color Picker Panel - Hidden */}
      {/* Hero Section - Clean & Bright */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Image - Clean Circle with Flip Effect */}
            <motion.div
              initial={{ scale: 0.8, rotateY: 180, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              style={{ perspective: 1000 }}
              className="mb-12 flex justify-center"
            >
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-strong border-8 border-white">
                <Image
                  src="/profile_img.png"
                  alt="규연 실장"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 px-4"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-4">
                규연 실장
              </h1>
              <div className="flex items-center justify-center text-gray-700 font-medium">
                <AutoSizeText maxFontSize={28} minFontSize={14}>청담 애브뉴준오 · 메이크업 아티스트</AutoSizeText>
              </div>
              <div className="max-w-3xl mx-auto leading-relaxed mt-8 text-gray-600">
                <AutoSizeText maxFontSize={24} minFontSize={14}>당신의 가장 아름다운 순간을 함께 만들어갑니다 💖</AutoSizeText>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 px-4"
            >
              <a
                href="#services"
                className="px-8 sm:px-12 py-4 sm:py-6 bg-white text-gray-800 font-bold shadow-strong hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <AutoSizeText maxFontSize={20} minFontSize={14}>💄 서비스 안내</AutoSizeText>
              </a>
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-12 py-4 sm:py-6 bg-gray-800 text-white font-bold shadow-strong hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <AutoSizeText maxFontSize={20} minFontSize={14}>💬 상담하기</AutoSizeText>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 80
            }}
            style={{ perspective: 2000 }}
            className="card-glass p-6 md:p-16 rounded-3xl shadow-strong"
          >
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              {/* Image - Smaller */}
              <div className="md:col-span-2">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft border-4 border-white">
                  <Image
                    src="/profile_img.png"
                    alt="규연 실장"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content - Larger */}
              <div className="md:col-span-3 space-y-4 md:space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">소개</h2>

                <div className="space-y-3 md:space-y-5 text-gray-700 leading-relaxed">
                  <p className="flex items-start gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl flex-shrink-0">✨</span>
                    <AutoSizeText maxFontSize={20} minFontSize={10}>가장 빛나는 순간을 연출합니다</AutoSizeText>
                  </p>
                  <p className="flex items-start gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl flex-shrink-0">🫧</span>
                    <AutoSizeText maxFontSize={20} minFontSize={8}>취향과 분위기를 디테일하게 읽어내는 1:1 상담</AutoSizeText>
                  </p>
                  <p className="flex items-start gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl flex-shrink-0">🌿</span>
                    <AutoSizeText maxFontSize={20} minFontSize={8}>가장 잘 어울리는 방향으로 완성하는 맞춤 메이크업</AutoSizeText>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-6 pt-6">
                  {[
                    { num: "1500+", label: "고객님" },
                    { num: "9년+", label: "경력" },
                    { num: "100%", label: "만족도" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-soft overflow-hidden">
                      <div className="font-extrabold text-gray-800">
                        <AutoSizeText maxFontSize={36} minFontSize={14}>{stat.num}</AutoSizeText>
                      </div>
                      <div className="text-gray-600 mt-1 md:mt-2">
                        <AutoSizeText maxFontSize={14} minFontSize={8}>{stat.label}</AutoSizeText>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              서비스 안내
            </h2>
            <div className="text-gray-700">
              <AutoSizeText maxFontSize={24} minFontSize={14}>다양한 메이크업 서비스를 제공합니다</AutoSizeText>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[
              { title: "웨딩 메이크업", emoji: "💍" },
              { title: "혼주 메이크업", emoji: "🌸" },
              { title: "하객 메이크업", emoji: "👗" },
              { title: "데일리 메이크업", emoji: "🎀" },
              { title: "프로필 촬영 메이크업", emoji: "🎬" },
              { title: "돌잔치 메이크업", emoji: "🎂" },
              { title: "면접 메이크업", emoji: "💼" },
              { title: "승무원 메이크업", emoji: "✈️" },
              { title: "메이크업 레슨", emoji: "📚" },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.3,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="card-glass p-4 md:p-8 rounded-xl md:rounded-2xl shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all cursor-pointer will-change-transform"
              >
                <div className="text-4xl md:text-6xl mb-2 md:mb-4">{service.emoji}</div>
                <h3 className="font-bold text-gray-800 leading-tight">
                  <AutoSizeText maxFontSize={20} minFontSize={8}>{service.title}</AutoSizeText>
                </h3>
              </motion.div>
            ))}

            {/* Special Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-3 card-glass p-6 md:p-12 rounded-xl md:rounded-2xl shadow-strong text-center"
            >
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">💌</div>
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4">
                <AutoSizeText maxFontSize={30} minFontSize={16}>기타 문의</AutoSizeText>
              </h3>
              <div className="text-gray-700 mb-6 md:mb-8">
                <AutoSizeText maxFontSize={20} minFontSize={12}>원하시는 메이크업이 있으신가요? 편하게 상담해드립니다!</AutoSizeText>
              </div>
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 md:px-10 py-4 md:py-5 bg-gray-800 text-white font-bold shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all"
              >
                <AutoSizeText maxFontSize={18} minFontSize={12}>💬 문의하기</AutoSizeText>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card-glass p-6 md:p-12 rounded-3xl shadow-strong"
          >
            <div className="text-center mb-12 pt-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">연락처</h2>
              <div className="text-gray-700">
                <AutoSizeText maxFontSize={20} minFontSize={10}>궁금하신 점은 오픈카카오톡으로 편하게 문의주세요 🫶🏻</AutoSizeText>
              </div>
            </div>

            {/* Kakao Button - Prominent */}
            <div className="flex justify-center mb-12 md:mb-16 px-4">
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 hover:-translate-y-1 transition-all max-w-full"
              >
                <Image
                  src="/logos/kakao_logo.png"
                  alt="카카오톡으로 시작하기"
                  width={366}
                  height={90}
                  className="w-auto h-auto max-w-full"
                />
              </a>
            </div>

            {/* Company Info Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-soft mb-8">
              <div className="flex flex-col items-center gap-3 md:gap-6">
                <div className="font-bold text-gray-800 text-center">
                  <AutoSizeText maxFontSize={30} minFontSize={16}>애브뉴준오 · 규연 실장</AutoSizeText>
                </div>

                <div className="w-full space-y-3 md:space-y-4 text-center">
                  <div className="flex flex-row items-center justify-center gap-2 text-gray-700">
                    <span className="text-base flex-shrink-0">📍</span>
                    <AutoSizeText maxFontSize={16} minFontSize={10}>서울 강남구 삼성로 728 준오헤어 청담동 사옥</AutoSizeText>
                  </div>

                  <a
                    href="tel:02-2138-0605"
                    className="flex items-center justify-center gap-2 font-bold text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    <span className="text-xl md:text-2xl flex-shrink-0">📞</span>
                    <AutoSizeText maxFontSize={28} minFontSize={16}>02-2138-0605</AutoSizeText>
                  </a>

                  <div className="pt-2 md:pt-4 space-y-2 text-gray-600">
                    <div><AutoSizeText maxFontSize={16} minFontSize={10}>(전화 예약 시 &ldquo;규연 실장&rdquo; 이름으로 예약 가능)</AutoSizeText></div>
                    <div><AutoSizeText maxFontSize={16} minFontSize={10}>영업시간: 10:00 ~ 18:00</AutoSizeText></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="text-center pt-6">
              <a
                href="https://www.instagram.com/hyxxzz.ky/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-gray-800 hover:text-gray-600 font-bold transition-all group"
              >
                <Image
                  src="/logos/instagram_logo.png"
                  alt="Instagram"
                  width={44}
                  height={44}
                  className="w-8 h-8 sm:w-11 sm:h-11 group-hover:scale-110 transition-transform flex-shrink-0"
                />
                <AutoSizeText maxFontSize={24} minFontSize={14}>@hyxxzz.ky</AutoSizeText>
              </a>
            </div>

            {/* Footer */}
            <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t-2 border-gray-200 text-center text-gray-500">
              <AutoSizeText maxFontSize={14} minFontSize={10}>© 2026 Kyu Yeon. All rights reserved.</AutoSizeText>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
