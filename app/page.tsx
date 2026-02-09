"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-full" suppressHydrationWarning>
      {/* Color Picker Panel - Hidden */}
      {/* Hero Section - Clean & Bright */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-4 py-12">
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
              className="space-y-6 px-8 md:px-4"
            >
              <h1 className="text-5xl md:text-8xl font-extrabold text-gray-800 mb-4">
                규연 실장
              </h1>
              <div className="flex items-center justify-center text-gray-700 font-medium text-xs md:text-lg">
                청담 애브뉴준오 · 메이크업 아티스트
              </div>
              <div className="max-w-3xl mx-auto leading-relaxed mt-8 text-gray-600 text-xs md:text-base">
                당신의 가장 아름다운 순간을 함께 만들어갑니다 💖
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12 px-8 md:px-4"
            >
              <a
                href="#services"
                className="px-6 sm:px-12 py-3 sm:py-6 bg-white text-gray-800 font-bold shadow-strong hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-lg"
              >
                💄 서비스 안내
              </a>
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-12 py-3 sm:py-6 bg-gray-800 text-white font-bold shadow-strong hover:shadow-xl hover:-translate-y-1 transition-all text-sm md:text-lg"
              >
                💬 상담하기
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 md:px-4">
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
              <div className="md:col-span-2 flex justify-center">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft border-4 border-white w-48 md:w-full max-w-sm">
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
                  <p className="flex items-center gap-2 md:gap-3">
                    <span className="text-xl md:text-3xl flex-shrink-0">✨</span>
                    <span className="text-xs md:text-lg">가장 빛나는 순간을 연출합니다</span>
                  </p>
                  <p className="flex items-center gap-2 md:gap-3">
                    <span className="text-xl md:text-3xl flex-shrink-0">🫧</span>
                    <span className="text-xs md:text-lg">취향과 분위기를 디테일하게 읽어내는 1:1 상담</span>
                  </p>
                  <p className="flex items-center gap-2 md:gap-3">
                    <span className="text-xl md:text-3xl flex-shrink-0">🌿</span>
                    <span className="text-xs md:text-lg">가장 잘 어울리는 방향으로 완성하는 맞춤 메이크업</span>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-6 pt-6">
                  {[
                    { num: "1500+", label: "고객님" },
                    { num: "9년+", label: "경력" },
                    { num: "100%", label: "만족도" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-white p-2 md:p-6 rounded-xl md:rounded-2xl shadow-soft overflow-hidden">
                      <div className="font-extrabold text-gray-800 text-sm md:text-2xl">
                        {stat.num}
                      </div>
                      <div className="text-gray-600 mt-1 md:mt-2 text-xs md:text-base">
                        {stat.label}
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
      <section id="services" className="py-24 px-8 md:px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-bold text-gray-800 mb-3 text-3xl md:text-5xl">
              서비스 안내
            </h2>
            <div className="text-gray-700 text-sm md:text-lg px-8 md:px-4">
              다양한 메이크업 서비스를 제공합니다
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {/*
              모바일 성능 이슈로 인해 서비스 카드 애니메이션 제거됨
              Desktop animations removed for mobile performance - service cards now render without motion effects
            */}
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
            ].map((service) => (
              <div
                key={service.title}
                className="card-glass p-4 md:p-8 rounded-xl md:rounded-2xl shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="text-3xl md:text-5xl mb-2 md:mb-3">{service.emoji}</div>
                <h3 className="font-bold text-gray-800 leading-tight text-xs md:text-lg">
                  {service.title}
                </h3>
              </div>
            ))}

            {/* Special Card - 애니메이션 제거 (모바일 성능) */}
            <div
              className="col-span-2 md:col-span-3 card-glass p-6 md:p-12 rounded-xl md:rounded-2xl shadow-strong text-center"
            >
              <div className="text-3xl md:text-5xl mb-3 md:mb-4">💌</div>
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-lg md:text-2xl px-8 md:px-4">
                기타 문의
              </h3>
              <div className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base px-8 md:px-4">
                원하시는 메이크업이 있으신가요? 편하게 상담해드립니다!
              </div>
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 md:px-10 py-3 md:py-5 bg-gray-800 text-white text-sm md:text-base font-bold shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all"
              >
                💬 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 md:px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="card-glass p-6 md:p-12 rounded-3xl shadow-strong"
          >
            <div className="text-center mb-12 pt-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">연락처</h2>
              <div className="text-gray-700 text-sm md:text-base">
                궁금하신 점은 오픈카카오톡으로<br className="md:hidden" /> 편하게 문의주세요 🫶🏻
              </div>
            </div>

            {/* Kakao Button - Prominent */}
            <div className="flex justify-center mb-12 md:mb-16 px-8 md:px-4">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-soft mb-8">
              {/* Title */}
              <div className="text-center mb-6 md:mb-8 pb-4 md:pb-6 border-b-2 border-gray-200">
                <h3 className="font-bold text-gray-800 text-xl md:text-2xl">
                  애브뉴준오 · 규연 실장
                </h3>
              </div>

              {/* Contact Info */}
              <div className="space-y-5 md:space-y-6 mb-6 md:mb-8">
                {/* Address */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="text-2xl md:text-3xl">📍</span>
                  <div className="text-gray-700 text-sm md:text-base">
                    서울 강남구 삼성로 728<br />준오헤어 청담동 사옥
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl md:text-3xl">📞</span>
                  <a
                    href="tel:02-2138-0605"
                    className="font-bold text-gray-800 hover:text-gray-600 transition-colors text-xl md:text-2xl"
                  >
                    02-2138-0605
                  </a>
                </div>
              </div>

              {/* Notes */}
              <div className="pt-5 md:pt-6 border-t border-gray-200 space-y-2 text-center">
                <div className="text-gray-600 text-xs md:text-sm">
                  (전화 예약 시 &ldquo;규연 실장&rdquo; 이름으로 예약 가능)
                </div>
                <div className="text-gray-600 text-xs md:text-sm font-medium">
                  영업시간: 10:00 ~ 18:00
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
                <span className="text-base md:text-xl">@hyxxzz.ky</span>
              </a>
            </div>

            {/* Footer */}
            <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t-2 border-gray-200 text-center text-gray-500">
              <p className="text-sm md:text-base">© 2026 Kyu Yeon. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
