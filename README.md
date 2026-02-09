# Portfolio Website

Next.js + Tailwind CSS + Framer Motion으로 만든 포트폴리오 사이트

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 배포

Vercel에 배포하려면:

1. GitHub에 푸시
2. Vercel에서 import
3. 자동 배포 완료

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 메인 페이지
│   └── globals.css   # 전역 스타일
├── components/       # 재사용 가능한 컴포넌트
├── public/          # 정적 파일
└── tailwind.config.ts
```

## 기능

- ✨ Framer Motion을 활용한 부드러운 애니메이션
- 📱 모바일 반응형 디자인
- 🌙 다크모드 지원
- ⚡ Next.js 15 Turbopack으로 빠른 개발
- 🎨 Tailwind CSS로 커스터마이징
