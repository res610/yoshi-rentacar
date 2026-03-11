import { STORE_TEL, LINE_URL } from '@/constants';

const bookingSteps = [
    { step: "1", title: "お問い合わせ", description: "LINEや電話で「ヨシレンタカー」に連絡。お名前・電話番号・希望日数・希望車種・配車希望場所をお伝えください。" },
    { step: "2", title: "お支払い", description: "事前に利用予定額を決済します。（当日現金もOK）" },
    { step: "3", title: "車を受け取る", description: "予約当日、指定の場所で車を受け取ります。" },
    { step: "4", title: "ご返却", description: "利用後、車を返却します。満タン返しでお願いします。" },
];

export default function BookingSection() {
    return (
        <section id="booking" className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">予約の流れ</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bookingSteps.map((s) => (
                        <div key={s.step} className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-8 bg-[#ffd700] text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                    {s.step}
                                </span>
                                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 pl-11">{s.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={LINE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#06C755] text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-[#05b04c] transition shadow-md"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        LINEで予約する
                    </a>
                    <a
                        href={`tel:${STORE_TEL}`}
                        className="inline-block text-gray-600 hover:text-gray-900 transition text-sm"
                    >
                        電話でのお問い合わせ: {STORE_TEL}
                    </a>
                </div>
            </div>
        </section>
    );
}
