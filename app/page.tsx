"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm10-15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Hero Section - Butter Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-butter via-background to-butter-warm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Profile Image - Simple & Clean */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/profile_img.png"
                  alt="규연 실장"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                안녕하세요 👋
              </h1>
              <p className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
                규연 실장입니다
              </p>
              <p className="text-xl md:text-2xl text-white/90 mt-6 leading-relaxed drop-shadow-sm">
                청담 <span className="font-bold text-white">애브뉴준오</span>에서<br />
                당신의 아름다운 순간을 함께합니다 ✨
              </p>
            </motion.div>

            {/* CTA Buttons - Friendly & Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-butter-deep text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                💄 서비스 보기
              </motion.a>

              <motion.a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-butter-deep border-3 border-white text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-soft-brown transition-all"
              >
                💬 상담하기
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Card Style */}
      <section id="about" className="relative py-20 px-4 bg-gradient-to-b from-butter-warm to-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-butter-warm">
                  <Image
                    src="/profile_img.png"
                    alt="규연 실장 프로필"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  소개
                </h2>
                <div className="space-y-4 text-lg text-text-soft leading-relaxed">
                  <p>
                    🌟 청담 애브뉴준오에서 신부님들의 가장 아름다운 순간을 함께합니다.
                  </p>
                  <p>
                    💕 웨딩 메이크업 전문으로 각 신부님의 개성과 아름다움을 최대한 살리는 메이크업을 추구합니다.
                  </p>
                  <p>
                    ✨ 자연스러우면서도 품격있는 메이크업으로 특별한 날을 더욱 완벽하게 만들어드립니다.
                  </p>
                </div>

                {/* Stats - Friendly Style */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {[
                    { num: "500+", label: "신부님" },
                    { num: "7년+", label: "경력" },
                    { num: "100%", label: "만족도" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-white rounded-2xl shadow-md"
                    >
                      <div className="text-3xl font-bold text-gradient-butter">{stat.num}</div>
                      <div className="text-sm text-text-soft mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Grid Cards */}
      <section id="services" className="relative py-20 px-4 bg-gradient-to-b from-cream to-butter">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              서비스 안내 💄
            </h2>
            <p className="text-xl text-text-soft">
              다양한 메이크업 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "본식 메이크업", emoji: "💒", desc: "자연스럽고 품격있는 본식 메이크업" },
              { title: "스드메 패키지", emoji: "📸", desc: "스튜디오 촬영 전문 메이크업" },
              { title: "리허설 메이크업", emoji: "✨", desc: "본식 전 리허설 메이크업" },
              { title: "하객 메이크업", emoji: "👗", desc: "결혼식 하객을 위한 메이크업" },
              { title: "데일리 메이크업", emoji: "☀️", desc: "일상을 빛내는 자연스러운 메이크업" },
              { title: "승무원 메이크업", emoji: "✈️", desc: "승무원 면접 전문 메이크업" },
              { title: "면접 메이크업", emoji: "💼", desc: "첫인상을 완성하는 면접 메이크업" },
              { title: "돌잔치 메이크업", emoji: "🎂", desc: "특별한 날을 위한 돌잔치 메이크업" },
              { title: "메이크업 레슨", emoji: "📚", desc: "1:1 맞춤 메이크업 교육" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-white hover:border-butter-deep"
              >
                <div className="text-5xl mb-4">{service.emoji}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-text-soft leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Extra Service Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-xl text-center border-2 border-butter-deep"
          >
            <div className="text-5xl mb-4">💌</div>
            <h3 className="text-3xl font-bold text-foreground mb-4">기타 문의</h3>
            <p className="text-xl text-text-soft mb-6">
              원하시는 메이크업이 있으신가요?<br />
              편하게 상담해드립니다!
            </p>
            <a
              href="https://open.kakao.com/o/sY6ppoqe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-butter-deep text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              💬 문의하기
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Warm & Inviting */}
      <section id="contact" className="relative py-20 px-4 bg-gradient-to-br from-butter via-butter-warm to-butter-deep">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
            연락처 📞
          </h2>
          <p className="text-xl text-white/90 drop-shadow-md mb-12">
            궁금한 점은 오픈카카오톡으로 편하게 문의주세요 🫶🏻
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.a
              href="https://open.kakao.com/o/sY6ppoqe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-butter-deep text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              💬 카카오톡 상담하기
            </motion.a>

            <motion.a
              href="tel:02-2138-0605"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-butter-deep border-3 border-white text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              📞 전화 예약하기
            </motion.a>
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-xl space-y-4 text-lg"
          >
            <p className="text-2xl font-bold text-gradient-butter">
              애브뉴준오 · 규연 실장
            </p>
            <p className="text-text-soft">📍 서울 강남구 청담동 63-14</p>
            <p className="text-text-soft">📞 02-2138-0605</p>
            <p className="text-sm text-soft-brown">
              (전화 예약 시 "규연 실장" 이름으로 예약 가능)
            </p>
            <p className="text-sm text-soft-brown">
              영업시간: 오전 10:00 ~ 오후 7:00
            </p>

            {/* Instagram */}
            <div className="pt-6 border-t-2 border-butter-light">
              <a
                href="https://www.instagram.com/hyxxzz.ky/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-accent hover:text-butter-deep transition-colors"
              >
                <span className="text-3xl">📷</span>
                <span className="text-xl font-semibold">@hyxxzz.ky</span>
              </a>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t-2 border-white/30 text-sm text-white/80 drop-shadow-sm">
            <p>© 2024 GYUYEON. All rights reserved.</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
