import type { Metadata } from "next";
import "./globals.css";
import { STORE_LATITUDE, STORE_LONGITUDE, LINE_URL } from "@/constants";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "ヨシレンタカー｜沖縄マイクロバス・ハイエースレンタカー専門【格安】",
    description:
        "沖縄でマイクロバスレンタカー・ハイエースレンタカーをお探しなら、沖縄本島南部のヨシレンタカーへ。25〜29人乗りマイクロバス30,000円〜。観光旅行・社員旅行・団体旅行・空港送迎に。年中無休、LINE予約OK。",
    keywords: [
        "沖縄 マイクロバス レンタカー",
        "沖縄 ハイエース レンタカー",
        "沖縄 マイクロバス レンタル",
        "南部 マイクロバス レンタカー",
        "沖縄 団体 レンタカー",
        "沖縄 格安 レンタカー",
        "ヨシレンタカー",
    ],
    authors: [{ name: "ヨシレンタカー" }],
    creator: "ヨシレンタカー",
    publisher: "ヨシレンタカー",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "ヨシレンタカー｜沖縄マイクロバス・ハイエースレンタカー専門【格安】",
        description:
            "沖縄でマイクロバスレンタカー・ハイエースレンタカーをお探しなら、ヨシレンタカーへ。格安で安心のレンタルサービス。観光旅行・社員旅行・団体旅行・空港送迎に。",
        url: siteUrl,
        siteName: "ヨシレンタカー",
        locale: "ja_JP",
        type: "website",
        images: [
            {
                url: `${siteUrl}/images/hero-pc.webp`,
                width: 1200,
                height: 630,
                alt: "沖縄旅行ならヨシレンタカー",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ヨシレンタカー｜沖縄マイクロバス・ハイエースレンタカー専門",
        description:
            "沖縄でマイクロバスレンタカー・ハイエースレンタカーをお探しなら、ヨシレンタカーへ。格安で安心のレンタルサービス。",
        images: [`${siteUrl}/images/hero-pc.webp`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: `${basePath}/favicon.ico`, sizes: "48x48" },
            { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
            { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
        ],
        apple: [
            { url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: `${basePath}/site.webmanifest`,
    verification: {
        // Google Search Console verification (add your verification code here)
        // google: "your-verification-code",
    },
};

// JSON-LD 構造化データ
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ヨシレンタカー",
    description:
        "沖縄マイクロバスレンタカーを専門に提供。25〜29人乗りマイクロバス、ハイエース、1BOX車、普通車、軽自動車を格安で提供。観光旅行・社員旅行・団体旅行・空港送迎に対応。",
    url: siteUrl,
    telephone: "098-987-4747",
    image: `${siteUrl}/images/hero-pc.webp`,
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "reservations",
        url: LINE_URL,
        availableLanguage: "Japanese",
    },
    address: {
        "@type": "PostalAddress",
        streetAddress: "東風平923-6",
        addressLocality: "八重瀬町",
        addressRegion: "沖縄県",
        postalCode: "901-0401",
        addressCountry: "JP",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: STORE_LATITUDE,
        longitude: STORE_LONGITUDE,
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
    },
    priceRange: "¥5,000〜¥30,000",
    areaServed: [
        { "@type": "State", name: "沖縄県" },
    ],
    sameAs: [
        LINE_URL,
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "レンタカーサービス",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "マイクロバスレンタル（25〜29人乗り）", description: "沖縄での団体旅行や送迎、イベント利用に最適なマイクロバスレンタル" },
                price: "30000", priceCurrency: "JPY",
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "ハイエースレンタル（10人乗り）", description: "ビジネス利用や大人数の移動に適したハイエースレンタル" },
                price: "15000", priceCurrency: "JPY",
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "1BOX車レンタル", description: "ファミリーやグループ旅行に最適な1BOX車レンタル" },
                price: "8000", priceCurrency: "JPY",
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "普通車レンタル", description: "沖縄観光やビジネスに便利な普通車レンタル" },
                price: "6000", priceCurrency: "JPY",
            },
            {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "軽自動車レンタル", description: "沖縄滞在や日常利用に最適な軽自動車レンタル" },
                price: "5000", priceCurrency: "JPY",
            },
        ],
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "24時間たっていないのに2日分になるのはなぜですか？",
            acceptedAnswer: {
                "@type": "Answer",
                text: "当社ではレンタカー料金を「日付単位」で計算しております。レンタル開始日と返却日が異なる場合は、利用時間に関わらず2日分の料金が発生します。例：1月9日 11:00にレンタル → 1月10日 9:00に返却 → 2日分の料金となります。",
            },
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://maps.google.com" />
                <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
