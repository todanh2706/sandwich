export default function Ingredients() {
    return (
        // <section className="bg-orange-100 p-6 rounded-xl">
        //     <div className="relative max-w-5xl mx-auto bg-[#fff3e0] rounded-2xl shadow-lg p-6 flex gap-6">
        //         <p className=""></p>
        //     </div>
        // </section >
        <section className="bg-orange-100 p-5 rounded-xl">
            <div className="bg-yellow-100 rounded-xl p-6 max-w-3xl mx-auto">
                {/* Tiêu đề */}
                <div className="flex items-center mb-4">
                    <div className="w-3 h-8 bg-yellow-400 mr-2 relative">
                        {/* tam giác nhỏ */}
                        <div className="absolute top-8 left-0 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-yellow-400"></div>
                    </div>
                    <h2 className="text-xl font-bold">Thành phần nguyên liệu:</h2>
                </div>

                {/* Nội dung 2 cột */}
                <div className="grid grid-cols-2 gap-6">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Bột mì số 13 (250g)</li>
                        <li>Trứng (35g)</li>
                        <li>Đường cát (40g)</li>
                        <li>Nước (45g)</li>
                        <li>Sữa (25g)</li>
                    </ul>

                    <ul className="list-disc list-inside space-y-1 border-l-2 border-yellow-600 pl-6">
                        <li>Men nở (4g)</li>
                        <li>Bơ nhạt (25g)</li>
                        <li>Muối (3g)</li>
                        <li>Nước ép củ dền (45g)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}