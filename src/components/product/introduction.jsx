export default function Introduction() {
    return (
        <section
            className="product-intro max-w-4xl mx-auto bg-orange-50 p-6 rounded-xl"
            style={{
                backgroundImage: "url('./bg-sandwich.jpg')",
                backgroundPosition: "center -100px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="relative w-4/5 max-w-4xl mx-auto bg-yellow-100 bg-opacity-70 rounded-2xl shadow-lg p-6 flex gap-6">

                <div className="flex flex-col gap-4 w-1/3">
                    <img
                        src="./cuden.jpg"
                        alt="Củ dền"
                        className="rounded-xl shadow-md"
                    />
                    <img
                        src="./sandwich.jpg"
                        alt="Sandwich củ dền"
                        className="rounded-xl shadow-md"
                    />
                </div>

                <div className="w-2/3">
                    <h2 className="text-2xl font-bold mb-2">Sandwich củ dền</h2>
                    <p className="text-gray-800 leading-relaxed">
                        <strong>Sandwich</strong> là một món ăn phổ biến, tiện lợi và giàu dinh dưỡng, phù hợp với lối sống hiện đại. Việc kết hợp củ dền – một loại nguyên liệu giàu vitamin, và chất chống oxy hóa vào sandwich không chỉ tăng giá trị dinh dưỡng mà còn tạo ra sự mới mẻ, hấp dẫn. Củ dền là nguyên liệu giàu betaine, folate, kali, và chất chống oxy hóa. Việc tích hợp vào sandwich đáp ứng nhu cầu tiêu dùng thực phẩm lành mạnh đang tăng cao tại Việt Nam.
                    </p>
                </div>
            </div>
        </section>
    );
}