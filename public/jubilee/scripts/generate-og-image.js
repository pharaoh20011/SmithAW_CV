const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'img');
const logoPath = path.join(imgDir, 'jubilee_logo_924x919.png');
const outputPath = path.join(imgDir, 'og-image.jpg');

// OG image: 1200x630 px
const WIDTH = 1200;
const HEIGHT = 630;

async function generateOGImage() {
  try {
    // SVG background with gradient
    const svgBackground = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#283041;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#439AA0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#485362;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" rx="0" ry="0"/>
        <circle cx="1050" cy="100" r="250" fill="rgba(255,255,255,0.04)"/>
        <circle cx="150" cy="500" r="200" fill="rgba(255,255,255,0.03)"/>
        <circle cx="600" cy="315" r="300" fill="rgba(255,255,255,0.02)"/>
      </svg>`;

    // Get logo dimensions first
    const logoMeta = await sharp(logoPath).metadata();

    // Calculate logo size (max 200px height while maintaining aspect ratio)
    const logoHeight = 200;
    const logoWidth = Math.round((logoMeta.width / logoMeta.height) * logoHeight);

    // Text overlay SVG - no XML entities to avoid parsing errors
    const svgText = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <style>
          .title { fill: #ffffff; font-family: 'Georgia', serif; font-size: 56px; font-weight: bold; }
          .title-sm { fill: #ffffff; font-family: 'Georgia', serif; font-size: 38px; font-weight: bold; }
          .subtitle { fill: #E6DFD4; font-family: 'Arial', sans-serif; font-size: 22px; }
          .url { fill: rgba(255,255,255,0.6); font-family: 'Arial', sans-serif; font-size: 14px; }
        </style>
        <line x1="80" y1="200" x2="80" y2="430" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        <text x="100" y="240" class="title">Jubilee Junction</text>
        <text x="100" y="290" class="title-sm">Christian Fellowship</text>
        <text x="100" y="340" class="subtitle">Seek | Save | Shelter | Serve</text>
        <text x="100" y="380" class="url">Join us Sundays at 9:00am and 11:00am</text>
        <text x="100" y="410" class="url">6305 Allentown Rd, Camp Springs, MD</text>
      </svg>`;

    // Composite: background -> logo (bottom right) -> text overlay
    const image = await sharp(Buffer.from(svgBackground))
      .resize(WIDTH, HEIGHT)
      .composite([
        {
          input: await sharp(logoPath)
            .resize(logoWidth, logoHeight)
            .png()
            .toBuffer(),
          top: HEIGHT - logoHeight - 40,
          left: WIDTH - logoWidth - 40,
        },
        {
          input: Buffer.from(svgText),
          top: 0,
          left: 0,
        },
      ])
      .jpeg({ quality: 95 })
      .toBuffer();

    await sharp(image).toFile(outputPath);
    console.log('OG image generated: ' + outputPath + ' (' + WIDTH + 'x' + HEIGHT + ')');
  } catch (err) {
    console.error('Error generating OG image:', err);
  }
}

generateOGImage();