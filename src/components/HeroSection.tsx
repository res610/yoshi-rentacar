const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
    return (
        <section className="relative">
            <h1 className="sr-only">ヨシレンタカー｜沖縄マイクロバス・ハイエースレンタカー専門【格安】</h1>
            <picture>
                <source media="(max-width: 768px)" srcSet={`${basePath}/images/hero-sp.webp`} />
                <img
                    src={`${basePath}/images/hero-pc.webp`}
                    alt="沖縄旅行ならヨシレンタカー"
                    className="w-full h-auto"
                />
            </picture>
        </section>
    );
}
