import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { STORE_TEL, LINE_URL } from '@/constants';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
    title: "沖縄マイクロバスレンタカー｜25〜29人乗り格安レンタル",
    description:
        "沖縄でマイクロバスレンタカーをお探しなら、ヨシレンタカーへ。25〜29人乗りマイクロバスを1日30,000円（税抜）〜で格安レンタル。団体旅行・社員旅行・空港送迎・結婚式の送迎に。沖縄本島全域で配車対応、年中無休。",
    alternates: {
        canonical: "/microbus/",
    },
    openGraph: {
        title: "沖縄マイクロバスレンタカー｜25〜29人乗り格安レンタル｜ヨシレンタカー",
        description:
            "沖縄でマイクロバスレンタカーをお探しなら、ヨシレンタカーへ。25〜29人乗りマイクロバスを1日30,000円〜で格安レンタル。",
        url: `${siteUrl}/microbus/`,
        images: [
            {
                url: `${siteUrl}/images/og-image.png`,
                width: 1200,
                height: 630,
                alt: "沖縄マイクロバスレンタカー ヨシレンタカー",
            },
        ],
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "沖縄マイクロバスレンタカー", item: `${siteUrl}/microbus/` },
    ],
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "沖縄マイクロバスレンタカー",
    description: "沖縄で25〜29人乗りマイクロバスを格安でレンタル。団体旅行・社員旅行・空港送迎・結婚式の送迎に対応。沖縄本島全域で配車可能。",
    provider: {
        "@type": "LocalBusiness",
        name: "ヨシレンタカー",
        url: siteUrl,
    },
    areaServed: {
        "@type": "State",
        name: "沖縄県",
    },
    offers: {
        "@type": "Offer",
        price: "30000",
        priceCurrency: "JPY",
        priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "30000",
            priceCurrency: "JPY",
            unitText: "日",
        },
    },
};

export default function MicrobusPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />

            {/* Hero */}
            <section className="relative">
                <h1 className="sr-only">沖縄マイクロバスレンタカー｜25〜29人乗り格安レンタル</h1>
                <div className="bg-[#ffd700] py-10 md:py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-lg md:text-xl font-bold text-gray-800 mb-2">沖縄本島南部のレンタカー専門店</p>
                        <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            マイクロバスレンタカー
                        </p>
                        <p className="text-lg text-gray-800">
                            25〜29人乗り｜1日 <span className="text-3xl font-bold text-red-600">¥30,000</span><span className="text-sm">（税抜）〜</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* パンくずリスト */}
            <nav className="max-w-4xl mx-auto px-4 py-3 text-sm text-gray-500">
                <a href={`${basePath}/`} className="hover:text-gray-900">ホーム</a>
                <span className="mx-2">/</span>
                <span className="text-gray-900">沖縄マイクロバスレンタカー</span>
            </nav>

            {/* マイクロバスの特徴 */}
            <section className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                        沖縄でマイクロバスをレンタルするメリット
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <img
                                src={`${basePath}/images/microbus.webp`}
                                alt="沖縄マイクロバスレンタカー 25〜29人乗り"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">25〜29人乗りの大型車両</h3>
                            <p className="text-gray-600">
                                団体での沖縄旅行や社員旅行に最適。大人数でも1台で移動できるため、バスをチャーターするより格安です。
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 mb-1">格安料金</h3>
                                <p className="text-sm text-gray-600">1日30,000円（税抜）〜。沖縄県民割引もあります。貸切バスより大幅にお得です。</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 mb-1">沖縄本島全域で配車対応</h3>
                                <p className="text-sm text-gray-600">那覇空港やホテルなど、ご指定の場所へ配車可能。2日以上のレンタルで配車無料。</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 mb-1">年中無休・LINE予約OK</h3>
                                <p className="text-sm text-gray-600">8:00〜20:00営業、年中無休。LINEで空き状況の確認や予約ができます。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* こんな用途に */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                        沖縄マイクロバスレンタカーの利用シーン
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { title: "団体旅行・観光", desc: "沖縄観光を大人数で楽しむなら、マイクロバスが最適。美ら海水族館や首里城など人気スポットへ。" },
                            { title: "社員旅行・研修", desc: "社員旅行や企業研修での移動に。まとまって移動できるので効率的です。" },
                            { title: "空港送迎", desc: "那覇空港からホテルや観光地への大人数の送迎に対応します。" },
                            { title: "結婚式・イベント", desc: "結婚式のゲスト送迎やイベント参加者の移動手段として。" },
                            { title: "部活動・スポーツ遠征", desc: "学校の部活動やスポーツチームの沖縄遠征に。" },
                            { title: "親族の集まり", desc: "法事やお墓参り、親族旅行など大人数の家族行事に。" },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 必要な免許 */}
            <section className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                        マイクロバスの運転に必要な免許
                    </h2>
                    <div className="bg-yellow-50 border-l-4 border-[#ffd700] rounded-xl p-6 md:p-8">
                        <p className="text-gray-800 mb-4">
                            25〜29人乗りマイクロバスの運転には以下のいずれかの免許が必要です。
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold mt-0.5">○</span>
                                <span><strong>大型免許</strong> — 運転可能</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold mt-0.5">○</span>
                                <span><strong>中型免許（8t限定なし）</strong> — 運転可能</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">×</span>
                                <span><strong>中型免許（8t限定）</strong> — 運転不可</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">×</span>
                                <span><strong>普通免許</strong> — 運転不可</span>
                            </li>
                        </ul>
                        <p className="text-sm text-gray-500 mt-4">
                            ※ ご不明な場合は、運転免許証をご確認の上、お気軽にお問い合わせください。
                        </p>
                    </div>
                </div>
            </section>

            {/* 料金 */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                        沖縄マイクロバスレンタカーの料金
                    </h2>
                    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-lg mx-auto text-center">
                        <p className="text-gray-600 mb-2">25〜29人乗りマイクロバス</p>
                        <p className="text-5xl font-bold text-gray-900 mb-2">
                            ¥30,000<span className="text-base font-normal text-gray-500"> /日（税抜）</span>
                        </p>
                        <span className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                            沖縄県民割引あり
                        </span>
                        <ul className="text-left text-sm text-gray-600 space-y-2 mt-4">
                            <li>・料金は日付単位で計算されます（時間貸し・24時間制ではありません）</li>
                            <li>・シーズンにより料金変動あり</li>
                            <li>・満タン返し</li>
                            <li>・ペット・喫煙禁止</li>
                        </ul>
                    </div>
                    <p className="text-center mt-6">
                        <a href={`${basePath}/#price`} className="text-blue-600 hover:underline text-sm">
                            他の車種の料金を見る →
                        </a>
                    </p>
                </div>
            </section>

            {/* 予約の流れ（簡略版） */}
            <section className="py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                        マイクロバスレンタカーご予約の流れ
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { step: "1", title: "お問い合わせ", desc: "LINEまたはお電話でご連絡ください。" },
                            { step: "2", title: "お支払い", desc: "事前に利用予定額を決済します。" },
                            { step: "3", title: "車を受け取る", desc: "指定の場所で車を受け取ります。" },
                            { step: "4", title: "ご返却", desc: "満タン返しでお願いします。" },
                        ].map((s) => (
                            <div key={s.step} className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 bg-[#ffd700] text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                        {s.step}
                                    </span>
                                    <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600 pl-11">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
            <Footer />
        </div>
    );
}
