export default function MemberCard({ avatar, name, id }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-3">
            {/* Avatar */}
            <img
                src={avatar}
                alt={name}
                className="w-32 h-32 rounded-full object-cover border-4 border-orange-200 shadow"
            />

            {/* Info */}
            <div>
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500">MSSV: {id}</p>
                {/* <p className="text-sm text-gray-500">{email}</p> */}
            </div>

            {/* Social links */}
            {/* <div className="flex gap-4 mt-2">
                <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                >
                    Facebook
                </a>
            </div> */}
        </div>
    );
}