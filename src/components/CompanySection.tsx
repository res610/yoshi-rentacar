import { STORE_NAME, STORE_TEL, STORE_ADDRESS, STORE_ZIPCODE, STORE_HOURS, STORE_LATITUDE, STORE_LONGITUDE, MAP_ZOOM_LEVEL } from '@/constants';

export default function CompanySection() {
    const mapSrc = `https://maps.google.com/maps?q=${STORE_LATITUDE},${STORE_LONGITUDE}&z=${MAP_ZOOM_LEVEL}&output=embed`;

    return (
        <section id="company" className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">会社情報</h2>
                <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                    <table className="w-full text-sm">
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <th className="py-3 pr-4 text-left text-gray-500 font-medium w-28">屋号</th>
                                <td className="py-3 text-gray-900 font-medium">{STORE_NAME}</td>
                            </tr>
                            <tr>
                                <th className="py-3 pr-4 text-left text-gray-500 font-medium">所在地</th>
                                <td className="py-3 text-gray-900">{STORE_ZIPCODE} {STORE_ADDRESS}</td>
                            </tr>
                            <tr>
                                <th className="py-3 pr-4 text-left text-gray-500 font-medium">電話番号</th>
                                <td className="py-3">
                                    <a href={`tel:${STORE_TEL}`} className="text-primary-dark font-bold hover:underline">{STORE_TEL}</a>
                                </td>
                            </tr>
                            <tr>
                                <th className="py-3 pr-4 text-left text-gray-500 font-medium">営業時間</th>
                                <td className="py-3 text-gray-900">{STORE_HOURS}</td>
                            </tr>
                            <tr>
                                <th className="py-3 pr-4 text-left text-gray-500 font-medium">お問い合わせ</th>
                                <td className="py-3 text-gray-900">LINE・電話にて受付</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Google Map */}
                <div className="mt-8 rounded-xl overflow-hidden shadow">
                    <iframe
                        src={mapSrc}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${STORE_NAME}の所在地`}
                    />
                </div>
            </div>
        </section>
    );
}
