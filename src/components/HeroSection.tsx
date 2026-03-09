const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
    return (
        <section className="relative">
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
