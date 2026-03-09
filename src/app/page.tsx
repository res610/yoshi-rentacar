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
                        ヨシレンタカーは、沖縄マイクロバスレンタカーを専門に提供しているレンタカー会社です。
                        沖縄でマイクロバスレンタカー・ハイエースレンタカーをお探しの方に、格安で安心のレンタルサービスを提供しています。
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        観光旅行・社員旅行・団体旅行・空港送迎など、沖縄でのマイクロバスレンタカー利用ならヨシレンタカーにお任せください。
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        車種、利用日数に合わせた料金プランがあります。観光、沖縄滞在、車購入までの期間、どんな用途でもご利用可能です。
                    </p>
                </div>
            </section>

            {/* LP Banner */}
            <section className="py-8 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <a href={LP_URL} target="_blank" rel="noopener noreferrer" className="block">
                        <img
                            src={`${basePath}/images/lp-banner.png`}
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
