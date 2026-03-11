import { STORE_NAME, STORE_TEL, STORE_ADDRESS, STORE_ZIPCODE, STORE_HOURS, LINE_URL } from '@/constants';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={`${basePath}/images/logo.webp`}
                                alt={STORE_NAME}
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            <h3 className="text-xl font-bold">{STORE_NAME}</h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                            沖縄マイクロバスレンタカー専門
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">所在地</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {STORE_ZIPCODE}<br />
                            {STORE_ADDRESS}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">営業時間</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {STORE_HOURS}
                        </p>
                        <p className="text-gray-400 text-sm mt-4">
                            TEL: <a href={`tel:${STORE_TEL}`} className="hover:text-white transition-colors">{STORE_TEL}</a>
                        </p>
                        <a
                            href={LINE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            LINEで予約・お問い合わせ
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {STORE_NAME}</p>
                </div>
            </div>

            {/* 固定LINEボタン */}
            <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 bg-[#06C755] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#05b04c] transition-colors"
                aria-label="LINEでお問い合わせ"
            >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
            </a>
        </footer>
    );
}
