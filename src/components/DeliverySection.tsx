export default function DeliverySection() {
    return (
        <section id="delivery" className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">配車・受け渡し</h2>
                <div className="bg-white rounded-xl shadow p-6 md:p-8 space-y-4 text-gray-700">
                    <p>予約時に弊社担当者に<strong>【受け渡し場所】</strong>をお伝えください。</p>
                    <p>予約日の混雑状況によっては配車・受け渡しをお断りさせていただく可能性がございます。</p>
                    <p><strong>短期間のレンタルについては、配車・受け渡しはご利用いただけません。</strong>2日以上レンタルされる方のみ対応とさせていただきます。</p>
                    <p>上記の理由により配車・受け渡しのご提供ができない場合は、弊社店舗での受け渡しとなっております。</p>
                </div>
            </div>
        </section>
    );
}
