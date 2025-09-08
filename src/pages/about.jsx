import Header from "../components/header";
import MemberCard from "../components/member";


export default function About() {
    const members = [
        {
            name: "Phạm Nguyễn Khánh Vy",
            id: "12345678",
            email: "a@example.com",
            facebook: "https://www.facebook.com/khanh.vy.517211",
            avatar: "/12345678.jpg",
        },

    ];

    return (
        <>
            <Header />
            <section className="max-w-5xl mx-auto py-10 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Thành viên nhóm</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((m, idx) => (
                        <MemberCard key={idx} {...m} />
                    ))}
                </div>
            </section>
        </>
    );
}