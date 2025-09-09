export default function Diagram() {
    return (
        <section className="bg-orange-100 p-5 rounded-xl">
            <div className="bg-yellow-100 rounded-xl p-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">
                    Quy trình làm Sandwich
                </h2>
                <ol className="relative border-l border-orange-400">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Đảo trộn</h3>
                        <p className="text-gray-600">Bột mì sô 13, đường, muối.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Phối trộn 15 phút</h3>
                        <p className="text-gray-600">Thêm các nguyên liệu khác trừ bơ rồi phối trộn tiếp với men nở, trứng, sữa, nước, nước ép củ dền.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Phối trộn lần 2</h3>
                        <p className="text-gray-600">Thêm bơ rồi tiếp tục phối trộn.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Ủ bột lần 1</h3>
                        <p className="text-gray-600">26-30&deg;C trong 60 phút.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Cắt chia bột</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Ủ bột lần 2</h3>
                        <p className="text-gray-600">26-32&deg;C trong 15 phút.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Cán dẹt</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Cuộn khoanh</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Cho vào khuôn</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Ủ bột lần 3</h3>
                        <p className="text-gray-600">26-30&deg;C trong 60 phút.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Nướng</h3>
                        <p className="text-gray-600">180&deg;C trong 40 phút.</p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Để nguội</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Đóng gói</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-orange-800 rounded-full -left-1.5"></div>
                        <h3 className="text-lg font-extrabold text-red-800">Thành phẩm bánh mì sandwich</h3>
                        {/* <p className="text-gray-600"></p> */}
                    </li>
                </ol>
            </div>
        </section>
    );
}
