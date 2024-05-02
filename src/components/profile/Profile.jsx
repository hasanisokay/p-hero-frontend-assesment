'use client'
import useAuthStore from "@/store/authStore";

const Profile = () => {
    const currentUser = useAuthStore((state) => state.currentUser);
    return (
        <div>
            <p className="font-semibold text-2xl text-center">Welcome to your profile, {currentUser?.name}</p>
        </div>
    );

};

export default Profile;