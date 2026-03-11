const faqs = [
    {
        question: "マイクロバスの運転に必要な免許は何ですか？",
        answer: "25〜29人乗りマイクロバスの運転には中型免許（8t限定なし）または大型免許が必要です。8t限定中型免許では運転できませんのでご注意ください。",
    },
    {
        question: "配車・受け渡しはどこまで対応していますか？",
        answer: "沖縄本島全域で配車・受け渡しに対応しています。那覇空港や各ホテルへの配車も可能です。詳細はLINEまたはお電話でご相談ください。",
    },
    {
        question: "24時間たっていないのに2日分になるのはなぜですか？",
        answer: "当社ではレンタカー料金を「日付単位」で計算しております。レンタル開始日と返却日が異なる場合は、利用時間に関わらず2日分の料金が発生します。\n\n【例】1月9日 11:00 にレンタル → 1月10日 9:00 に返却 → 2日分の料金",
    },
    {
        question: "キャンセル料はかかりますか？",
        answer: "ご予約のキャンセルはお早めにご連絡ください。30日前まで無料、20日前まで50%、前日まで90%、当日は100%のキャンセル料が発生します。",
    },
    {
        question: "沖縄で格安のマイクロバスレンタカーはありますか？",
        answer: "ヨシレンタカーでは25〜29人乗りマイクロバスを1日30,000円（税抜）〜でご提供しています。沖縄県民割引もございます。観光旅行・社員旅行・団体旅行・空港送迎にご利用ください。",
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
