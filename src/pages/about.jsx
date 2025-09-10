import Header from "../components/header";
import MemberCard from "../components/member";
import { motion as Motion } from "framer-motion";


export default function About() {
    const members = [
        {
            name: "Phạm Hoàng Bảo Thái",
            id: "23116103",
            avatar: "./23116103.jpg"
        },
        {
            name: "Lê Minh Thư",
            id: "23116107",
            avatar: "./23116107.jpg"
        },
        {
            name: "Trần Văn Thanh Tú",
            id: "23116114",
            avatar: "./23116114.jpg"
        },
        {
            name: "Bùi Phạm Hoàng Vũ",
            id: "23116117",
            avatar: "./23116117.jpg"
        },
        {
            name: "Phạm Nguyễn Khánh Vy",
            id: "23116120",
            avatar: "./23116120.jpg",
        },
    ];

    return (
        <>
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
                <section className="max-w-5xl mx-auto py-10 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
                        <span className="text-orange-600">Thành viên nhóm</span>
                    </h1>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((m, idx) => (
                            <MemberCard key={idx} {...m} />
                        ))}
                    </div>
                </section>
            </Motion.div>
            <Motion.div
                key="header"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
            >
                <footer className="text-center text-gray-500 text-sm py-6">
                    © 2025 Radwich Sandwich. All rights reserved.
                </footer>
            </Motion.div>
        </>
    );
}