const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const vehicles = [
    {
        name: "25～29人乗りマイクロバス",
        price: "30,000",
        image: `${basePath}/images/microbus.webp`,
        description: "沖縄での団体旅行や送迎、イベント利用に多く使われているマイクロバスレンタカーです。",
        badge: "県民割引あり",
    },
    {
        name: "10人乗りハイエース",
        price: "15,000",
        image: `${basePath}/images/hiace.webp`,
        description: "ビジネス利用や大人数の移動に適したハイエースです。",
    },
    {
        name: "1BOX車",
        price: "8,000",
        image: `${basePath}/images/onebox.webp`,
        description: "ファミリーやグループ旅行に最適な1BOX車です。",
    },
    {
        name: "普通車",
        price: "6,000",
        image: `${basePath}/images/compact.webp`,
        description: "沖縄観光やビジネスに便利な普通車です。",
    },
    {
        name: "軽自動車",
        price: "5,000",
        image: `${basePath}/images/kei.webp`,
        description: "沖縄滞在や日常利用に最適な軽自動車です。",
    },
];

export default function PriceSection() {
    return (
        <section id="price" className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                    料金表
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

                {/* 重要：料金計算方法 */}
                <div className="mt-10 bg-red-50 border-2 border-red-400 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-600 mb-3 flex items-center gap-2">
                        <span className="text-xl">⚠</span>
                        重要｜レンタル料金の計算方法について
                    </h3>
                    <p className="text-red-700 font-bold mb-2">
                        当社のレンタカー料金における「1日」は、24時間制ではありません。
                    </p>
                    <p className="text-red-700 font-bold mb-3">
                        レンタル開始日と返却日が異なる場合は、利用時間に関わらず「2日分」の料金が発生します。
                    </p>
                    <div className="bg-white rounded-lg p-4 text-sm text-gray-700">
                        <p className="font-bold mb-1">【例】</p>
                        <p>1月9日 11:00 にレンタル → 1月10日 9:00 に返却</p>
                        <p className="font-bold text-red-600 mt-1">→ 2日分の料金となります</p>
                    </div>
                </div>

                {/* 注意事項 */}
                <div className="mt-6 bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">注意事項</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                        <li className="flex gap-2">
                            <span className="text-red-500 font-bold shrink-0">●</span>
                            <span>
                                <strong>ペット・喫煙禁止</strong><br />
                                違反した場合、清掃料として損害賠償（15万円）を返却時に請求いたします。
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-red-500 font-bold shrink-0">●</span>
                            <span>
                                <strong>満タン返し</strong><br />
                                給油は返却地点から3km付近をご利用ください。時間厳守でお願いいたします。
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-400 font-bold shrink-0">●</span>
                            <span>チャイルドシート ＋1,100円/台</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-400 font-bold shrink-0">●</span>
                            <span>
                                <strong>返却延滞</strong><br />
                                20時まで ＋1,100円/時<br />
                                20時以降は翌日分のレンタル料が発生 ※営業時間は20:00までです。
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-400 font-bold shrink-0">●</span>
                            <span>シーズンにより料金変動あり</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
