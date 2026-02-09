"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, var(--gold-light) 0%, transparent 50%)`,
        }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Profile Image Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/profile_img.png"
            alt="Background"
            fill
            className="object-cover blur-3xl"
            priority
          />
        </motion.div>

        <motion.div style={{ opacity, scale }} className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center px-4"
          >
            {/* Profile Image Circle */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex justify-center"
            >
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 gradient-gold rounded-full p-[3px]"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative w-full h-full bg-white dark:bg-black rounded-full overflow-hidden">
                    <Image
                      src="/profile_img.png"
                      alt="규연 실장"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Small Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-400">
                Cheongdam Makeup Artist
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
            >
              <span className="block text-gradient-gold">GYUYEON</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-3"
            >
              규연 실장
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            >
              애브뉴준오 · 당신의 가장 아름다운 순간을 완성합니다
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black overflow-hidden"
              >
                <span className="relative z-10 tracking-wider">서비스 보기</span>
                <motion.div
                  className="absolute inset-0 gradient-gold"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 tracking-wider group-hover:text-white">
                  서비스 보기
                </span>
              </motion.a>

              <motion.a
                href="https://open.kakao.com/o/sY6ppoqe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors tracking-wider"
              >
                💬 상담 문의하기
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-1 h-32 gradient-gold opacity-30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-1 h-32 gradient-gold opacity-30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container with Modern Frame */}
            <div className="relative aspect-square overflow-hidden">
              {/* Gradient Border Effect */}
              <motion.div
                className="absolute inset-0 gradient-gold p-[3px] rounded-lg"
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-full bg-white dark:bg-black rounded-lg overflow-hidden">
                  <Image
                    src="/profile_img.png"
                    alt="규연 실장 프로필"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

              {/* Animated Light Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: "200%", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-40 h-40 gradient-gold opacity-20 rounded-lg blur-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 border-2 border-black dark:border-white rounded-lg -z-10"
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 0.3, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              About
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              규연 실장
            </h2>
            <div className="w-16 h-1 gradient-gold mb-8" />
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                청담 애브뉴준오에서 신부님들의 가장 아름다운 순간을 함께합니다.
              </p>
              <p>
                웨딩 메이크업 전문으로 각 신부님의 개성과 아름다움을
                최대한 살리는 메이크업을 추구합니다.
              </p>
              <p>
                자연스러우면서도 품격있는 메이크업으로
                특별한 날을 더욱 완벽하게 만들어드립니다.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-3xl font-bold text-gradient-gold mb-1">500+</div>
                <div className="text-sm text-gray-500">신부님</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-gold mb-1">7+</div>
                <div className="text-sm text-gray-500">경력</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-gold mb-1">100%</div>
                <div className="text-sm text-gray-500">만족도</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Services
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">서비스 안내</h2>
            <div className="w-16 h-1 gradient-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "본식 메이크업",
                description: "자연스럽고 품격있는 본식 메이크업",
              },
              {
                title: "스드메 패키지",
                description: "스튜디오 촬영 전문 메이크업",
              },
              {
                title: "리허설 메이크업",
                description: "본식 전 리허설 메이크업",
              },
              {
                title: "하객 메이크업",
                description: "결혼식 하객을 위한 메이크업",
              },
              {
                title: "데일리 메이크업",
                description: "일상을 빛내는 자연스러운 메이크업",
              },
              {
                title: "승무원 메이크업",
                description: "승무원 면접 전문 메이크업",
              },
              {
                title: "면접 메이크업",
                description: "첫인상을 완성하는 면접 메이크업",
              },
              {
                title: "돌잔치 메이크업",
                description: "특별한 날을 위한 돌잔치 메이크업",
              },
              {
                title: "메이크업 레슨",
                description: "1:1 맞춤 메이크업 교육",
              },
              {
                title: "기타 문의",
                description: "원하시는 메이크업 상담해드립니다",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 gradient-gold"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: index * 0.08 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-gold transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            당신의 특별한 날을
            <br />
            함께하고 싶습니다
          </h2>
          <div className="w-16 h-1 gradient-gold mx-auto mb-12" />

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            아래 정리된 부분 외에 궁금한 점은
            <br />
            오픈카카오톡으로 편하게 문의주세요🫶🏻
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://open.kakao.com/o/sY6ppoqe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 gradient-gold text-white text-lg font-semibold tracking-wider relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                whileHover={{ opacity: 0.2 }}
              />
              <span className="relative z-10">💬 카카오톡 상담하기</span>
            </motion.a>

            <motion.a
              href="tel:02-2138-0605"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 border-2 border-white text-white text-lg font-semibold tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              📞 전화 예약하기
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="text-gray-400 space-y-3 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              <span className="text-gradient-gold font-semibold">애브뉴준오</span> · 규연 실장
            </p>
            <p className="text-base">📍 서울 강남구 청담동 63-14</p>
            <p className="text-base">📞 02-2138-0605</p>
            <p className="text-sm text-gray-500">(전화 예약 시 "규연 실장" 이름으로 예약 가능)</p>
            <p className="text-sm text-gray-500">영업시간: 오전 10:00 ~ 오후 7:00</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.instagram.com/hyxxzz.ky/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-white text-xl hover:shadow-lg transition-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <span className="text-gray-500">@hyxxzz.ky</span>
          </motion.div>

          <motion.div
            className="mt-16 pt-12 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600">
              © 2024 GYUYEON. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
