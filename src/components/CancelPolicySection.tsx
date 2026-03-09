export default function CancelPolicySection() {
    return (
        <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">キャンセルポリシー</h2>
                <div className="bg-white rounded-xl shadow p-6 md:p-8">
                    <ul className="space-y-3 text-gray-700 mb-6">
                        <li>・前日の朝10時までに入金が確認できない場合は、キャンセルとなります。</li>
                        <li>・当日の連絡がなく、受取時間を10分以上過ぎた場合は、キャンセルとなります（キャンセル料は100%）。</li>
                    </ul>
                    <h3 className="font-bold text-gray-900 mb-3">キャンセル料</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-200 px-4 py-2 text-left">申告タイミング</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left">キャンセル料</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border border-gray-200 px-4 py-2">30日前まで</td><td className="border border-gray-200 px-4 py-2">0%</td></tr>
                                <tr><td className="border border-gray-200 px-4 py-2">20日前まで</td><td className="border border-gray-200 px-4 py-2">50%</td></tr>
                                <tr><td className="border border-gray-200 px-4 py-2">前日まで</td><td className="border border-gray-200 px-4 py-2">90%</td></tr>
                                <tr><td className="border border-gray-200 px-4 py-2">当日</td><td className="border border-gray-200 px-4 py-2 font-bold text-red-600">100%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
