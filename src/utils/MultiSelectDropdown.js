import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function MultiSelectDropdown() {

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            navigate("/error");
            // An error happened.
        });
    };

    return (
        <label className="relative">
            <input type="checkbox" className="hidden peer" />

            <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform">
                {""}
            </div>

            <div className=" w-32 cursor-pointer absolute bg-white border p-2 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto"
                onClick={handleSignOut}
            >
                <ul>
                    <li>
                        <img
                            className='w-8 h-8'
                            alt="user1"
                            src="'https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e'"
                        />
                    </li>
                    <li>{"Sign out of Netflix"}</li>
                </ul>

            </div>
        </label>
    );
}