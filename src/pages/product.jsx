import Diagram from "../components/diagram";
import Header from "../components/header";
import Ingredients from "../components/product/ingredients";
import Introduction from "../components/product/introduction";
import Video from "../components/product/video";
import { motion as Motion } from "framer-motion";

export default function Product() {
    return (
        <div className="space-y-8">
            <Motion.div
                key="header"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
            >
                <Header />
            </Motion.div>

            <Motion.div
                key="content"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <header>
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                        <span className="text-orange-600">Radwich - Beetroot Sandwich</span>
                    </h1>
                </header>
                <Introduction />
                <hr className="border-t-2 border-dashed border-gray-400 mx-auto w-4/5" />
                <Ingredients />
                <hr className="border-t-2 border-dashed border-gray-400 mx-auto w-4/5" />
                <Diagram />
                <hr className="border-t-2 border-dashed border-gray-400 mx-auto w-4/5" />
                <Video />
            </Motion.div>
            <Motion.div
                key="header"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
            >
                <footer className="text-center text-gray-500 text-sm py-6">
                    © 2025 Radwich - Beetroot sandwich. All rights reserved.
                </footer>
            </Motion.div>
        </div>
    );
}
