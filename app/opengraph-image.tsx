import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '애브뉴준오 메이크업 규연 실장';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Fetch the profile image
  const imageUrl = new URL('/profile_img.png',
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  );

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
            width: 240,
            height: 240,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '10px solid white',
            boxShadow: '0 15px 50px rgba(0,0,0,0.2)',
            marginBottom: 50,
            display: 'flex',
          }}
        >
          <img
            src={imageUrl.toString()}
            alt="규연 실장"
            width={240}
            height={240}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: '#1f2937',
            display: 'flex',
          }}
        >
          규연 실장
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
