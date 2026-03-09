const faqs = [
    {
        question: "24時間たっていないのに2日分になるのはなぜですか？",
        answer: "当社ではレンタカー料金を「日付単位」で計算しております。レンタル開始日と返却日が異なる場合は、利用時間に関わらず2日分の料金が発生します。\n\n【例】1月9日 11:00 にレンタル → 1月10日 9:00 に返却 → 2日分の料金",
    },
];

export default function FaqSection() {
    return (
        <section id="faq" className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">よくあるご質問</h2>
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 mb-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Q. {faq.question}</h3>
                        <p className="text-gray-700 whitespace-pre-line">A. {faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
