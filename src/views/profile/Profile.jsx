import Sidebar from "../../components/navigations/Sidebar";
import { FaEdit } from "react-icons/fa";
import ProfileSidebarCard from "./ProfileSidebarCard";
import ProfileDetailsForm from "./ProfileDetailsForm";

const Profile = () => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Profile Settings
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage your account information and preferences
                </p>
              </div>
              <button className="btn-neutral btn rounded-lg">
                <FaEdit className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProfileSidebarCard /> {/* left */}
              <ProfileDetailsForm /> {/* right */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
