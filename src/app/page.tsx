import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PriceSection from '@/components/PriceSection';
import BookingSection from '@/components/BookingSection';
import DeliverySection from '@/components/DeliverySection';
import FaqSection from '@/components/FaqSection';
import CancelPolicySection from '@/components/CancelPolicySection';
import CompanySection from '@/components/CompanySection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { LP_URL } from '@/constants';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection />

            {/* Introduction */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        沖縄本島南部にある格安レンタカー
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        ヨシレンタカーは、沖縄本島南部（八重瀬町）にあるレンタカー会社です。
                        マイクロバス・ハイエース・1BOX車・普通車・軽自動車まで、用途に合わせた車種を格安で提供しています。
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        観光旅行・社員旅行・団体旅行・空港送迎から、沖縄滞在中の日常利用まで、どんな用途にもご対応いたします。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        年中無休・LINE予約OK。車種や利用日数に合わせた料金プランがあります。
                    </p>
                </div>
            </section>

            {/* マイクロバス専用ページ導線 */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <a href={`${basePath}/microbus/`} className="block bg-[#ffd700] rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                            <img
                                src={`${basePath}/images/microbus.webp`}
                                alt="沖縄マイクロバスレンタカー"
                                className="w-full md:w-48 h-32 object-cover rounded-lg"
                            />
                            <div className="text-center md:text-left">
                                <p className="text-sm font-bold text-gray-700 mb-1">人気No.1</p>
                                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                    沖縄マイクロバスレンタカー専門ページ
                                </p>
                                <p className="text-gray-800 text-sm">
                                    25〜29人乗り ¥30,000/日〜｜団体旅行・空港送迎に → 詳しく見る
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            {/* LP Banner */}
            <section className="py-4 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <a href={LP_URL} target="_blank" rel="noopener noreferrer" className="block">
                        <img
                            src={`${basePath}/images/lp-banner.webp`}
                            alt="沖縄旅行ならヨシレンタカー - 詳細はこちら"
                            className="w-full rounded-lg shadow-md hover:shadow-lg transition"
                        />
                    </a>
                </div>
            </section>

            <PriceSection />
            <BookingSection />
            <DeliverySection />
            <FaqSection />
            <CancelPolicySection />
            <CompanySection />
            <CtaSection />
            <Footer />
        </div>
    );
}
