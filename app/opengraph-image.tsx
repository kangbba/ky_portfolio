import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '규연 실장 애브뉴준오 청담 메이크업 아티스트';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f7f2d4 34%, #ffe9d6 78%, #ffd5c7 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Profile Image Circle */}
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '8px solid white',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            marginBottom: 40,
            display: 'flex',
          }}
        >
          {/* Profile image will be added after deployment */}
          <div
            style={{
              width: 200,
              height: 200,
              background: 'linear-gradient(135deg, #ffd5c7, #ffe9d6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 80,
            }}
          >
            💄
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: '#1f2937',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          규연 실장
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: '#374151',
            marginBottom: 30,
            display: 'flex',
          }}
        >
          애브뉴준오 · 청담 메이크업 아티스트
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 28,
            color: '#4b5563',
            display: 'flex',
            textAlign: 'center',
          }}
        >
          당신의 가장 아름다운 순간을 함께 만들어갑니다 💖
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
