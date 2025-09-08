import Header from "../components/header";
import Ingredients from "../components/product/ingredients";
import Introduction from "../components/product/introduction";
import Video from "../components/product/video";

export default function Product() {
    return (
        <div className="space-y-8">
            <Header />
            <header>
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
                    <span className="text-orange-600">Radwich - Beetroot Sandwich</span>
                </h1>
            </header>
            <Introduction />
            <hr className="border-t-2 border-dashed border-gray-400 mx-auto w-4/5" />
            <Ingredients />
            <hr className="border-t-2 border-dashed border-gray-400 mx-auto w-4/5" />
            <Video />
        </div>
    );
}