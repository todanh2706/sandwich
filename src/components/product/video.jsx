export default function Video() {
    return (
        <section
            className="product-intro bg-orange-100 p-6 rounded-xl"
        >
            <div className="bg-yellow-100 rounded-xl p-6 max-w-3xl mx-auto">
                {/* Video */}
                <div className="flex-1">
                    <iframe
                        className="w-full h-64 md:h-full"
                        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        src="https://www.youtube.com/embed/95tANHqwzAc"
                        title="How Radwich is Made"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Text + Button */}
                <div className="flex flex-col justify-center items-center flex-1 p-6 bg-yellow-100">
                    <h2 className="text-xl font-semibold mb-4">How Radwich is Made</h2>
                    <a
                        href="https://www.youtube.com/watch?v=95tANHqwzAc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-orange-300 text-gray-800 font-semibold hover:bg-orange-400 transition-colors duration-200"
                    >
                        Watch Full Video
                    </a>

                </div>
            </div>
        </section>
    );
}