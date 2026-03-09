const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const vehicles = [
    {
        name: "25～29人乗りマイクロバス",
        price: "30,000",
        image: `${basePath}/images/microbus.png`,
        description: "沖縄での団体旅行や送迎、イベント利用に多く使われているマイクロバスレンタカーです。",
        badge: "県民割引あり",
    },
    {
        name: "10人乗りハイエース",
        price: "15,000",
        image: `${basePath}/images/hiace.png`,
        description: "ビジネス利用や大人数の移動に適したハイエースです。",
    },
    {
        name: "1BOX車",
        price: "8,000",
        image: `${basePath}/images/onebox.png`,
        description: "ファミリーやグループ旅行に最適な1BOX車です。",
    },
    {
        name: "普通車",
        price: "6,000",
        image: `${basePath}/images/compact.png`,
        description: "沖縄観光やビジネスに便利な普通車です。",
    },
    {
        name: "軽自動車",
        price: "5,000",
        image: `${basePath}/images/kei.png`,
        description: "沖縄滞在や日常利用に最適な軽自動車です。",
    },
];

export default function PriceSection() {
    return (
        <section id="price" className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                    沖縄マイクロバスレンタカーの料金表
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vehicles.map((v) => (
                        <div key={v.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                            <div className="relative">
                                <img src={v.image} alt={v.name} className="w-full h-48 object-cover" />
                                {v.badge && (
                                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {v.badge}
                                    </span>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{v.name}</h3>
                                <p className="text-sm text-gray-600 mb-3">{v.description}</p>
                                <p className="text-3xl font-bold text-primary-dark">
                                    ¥{v.price}<span className="text-sm text-gray-500 font-normal"> /日（税抜）</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 注意事項 */}
                <div className="mt-10 bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">注意事項</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>・ペット・喫煙禁止 ※違反した場合、清掃料として損害賠償（15万円）を返却時に請求いたします。</li>
                        <li>・満タン返し ※給油は返却地点から3km付近をご利用ください。時間厳守でお願いいたします。</li>
                        <li>・チャイルドシート ＋1,100円/台</li>
                        <li>・返却延滞 20時まで ＋1,100円/時</li>
                        <li>・20時以降は翌日分レンタル料が発生 ※営業時間は20:00までです。</li>
                        <li>・シーズンにより料金変動あり</li>
                        <li>・<strong>レンタル料金は日付単位で計算されます。</strong>時間貸し・24時間制ではありません。</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
