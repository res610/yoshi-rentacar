/** @type {import('next').NextConfig} */
const fs = require('fs');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

// ─── ドメイン移行時はここだけ変更 ───
// 独自ドメイン移行後:
//   const SITE_DOMAIN = 'yoshi-rentacar.jp';
//   const SITE_BASE_PATH = '';
// GitHub Pages:
const SITE_DOMAIN = 'res610.github.io';
const SITE_BASE_PATH = '/yoshi-rentacar';
// ────────────────────────────────────

const basePath = isDev ? '' : SITE_BASE_PATH;
const siteUrl = isDev
    ? 'http://localhost:3000'
    : `https://${SITE_DOMAIN}${SITE_BASE_PATH}`;

// ビルド時に sitemap.xml を自動生成
const today = new Date().toISOString().split('T')[0];
const sitemapPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages.map(p => `    <url>
        <loc>${siteUrl}${p.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
    </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);

const nextConfig = {
    output: 'export',
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
        NEXT_PUBLIC_SITE_URL: siteUrl,
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
