"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

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
    <main className="min-h-screen">
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
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-4">
                규연 실장
              </h1>
              <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl text-gray-700 font-medium">
                <span>청담 애브뉴준오 · 메이크업 아티스트</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
                당신의 가장 아름다운 순간을<br className="sm:hidden" /> 함께 만들어갑니다 💖
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            >
              <a
                href="#services"
                className="px-12 py-6 bg-white text-gray-800 text-xl font-bold shadow-strong hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                💄 서비스 안내
              </a>
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 bg-gray-800 text-white text-xl font-bold shadow-strong hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                💬 상담하기
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
            className="card-glass p-12 md:p-16 rounded-3xl shadow-strong"
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
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
              <div className="md:col-span-3 space-y-8">
                <h2 className="text-5xl font-bold text-gray-800">소개</h2>

                <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <span>가장 빛나는 순간을 연출합니다</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🫧</span>
                    <span>취향과 분위기를 디테일하게 읽어내는 1:1 상담</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-2xl">🌿</span>
                    <span>가장 잘 어울리는 방향으로 완성하는 맞춤 메이크업</span>
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  {[
                    { num: "1500+", label: "고객님" },
                    { num: "9년+", label: "경력" },
                    { num: "100%", label: "만족도" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center bg-white p-6 rounded-2xl shadow-soft">
                      <div className="text-4xl font-extrabold text-gray-800">{stat.num}</div>
                      <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              서비스 안내
            </h2>
            <p className="text-2xl text-gray-700">다양한 메이크업 서비스를 제공합니다</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="card-glass p-8 rounded-2xl shadow-soft hover:shadow-strong hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="text-6xl mb-4">{service.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              </motion.div>
            ))}

            {/* Special Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3 card-glass p-12 rounded-2xl shadow-strong text-center"
            >
              <div className="text-6xl mb-4">💌</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">기타 문의</h3>
              <p className="text-xl text-gray-700 mb-8">
                원하시는 메이크업이 있으신가요? 편하게 상담해드립니다!
              </p>
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-gray-800 text-white text-lg font-bold shadow-soft hover:shadow-strong hover:-translate-y-1 transition-all"
              >
                💬 문의하기
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
            className="card-glass p-12 md:p-16 rounded-3xl shadow-strong"
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">연락처</h2>
              <p className="text-xl text-gray-700">
                궁금하신 점은 오픈카카오톡으로 편하게 문의주세요 🫶🏻
              </p>
            </div>

            {/* Kakao Button - Prominent */}
            <div className="flex justify-center mb-16">
              <a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 hover:-translate-y-1 transition-all"
              >
                <Image
                  src="/logos/kakao_logo.png"
                  alt="카카오톡으로 시작하기"
                  width={366}
                  height={90}
                  className="w-auto h-auto"
                />
              </a>
            </div>

            {/* Company Info Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-soft mb-8">
              <div className="flex flex-col items-center gap-6">
                <div className="text-3xl font-bold text-gray-800">
                  <span>애브뉴준오 · 규연 실장</span>
                </div>

                <div className="w-full max-w-md space-y-4 text-center">
                  <div className="flex items-center justify-center gap-3 text-xl text-gray-700">
                    <span>📍</span>
                    <span>서울 강남구 삼성로 728 준오헤어 청담동 사옥</span>
                  </div>

                  <a
                    href="tel:02-2138-0605"
                    className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    <span>📞</span>
                    <span>02-2138-0605</span>
                  </a>

                  <div className="pt-4 space-y-2 text-base text-gray-600">
                    <p>(전화 예약 시 &ldquo;규연 실장&rdquo; 이름으로 예약 가능)</p>
                    <p>영업시간: 10:00 ~ 18:00</p>
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
                className="inline-flex items-center gap-4 text-gray-800 hover:text-gray-600 text-2xl font-bold transition-all group"
              >
                <Image
                  src="/logos/instagram_logo.png"
                  alt="Instagram"
                  width={44}
                  height={44}
                  className="w-11 h-11 group-hover:scale-110 transition-transform"
                />
                <span>@hyxxzz.ky</span>
              </a>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t-2 border-gray-200 text-center text-sm text-gray-500">
              <p>© 2026 Kyu Yeon. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
