import Sidebar from "../../components/navigations/Sidebar";
import { useAuthStore } from "../../stores/authStore";
import DashCard from "../dashboard/doctor/DashCard";
import PatientActivity from "../dashboard/doctor/PatientActivity";
import AllPatients from "./admin/AllPatients";
import DashboardHeader from "./DashboardHeaders";

const Dashboard = () => {
  const { profile, userRole, isLoading } = useAuthStore(); // Access from auth store

  if (isLoading) return <p>Loading dashboard...</p>;
  if (!userRole) return <div>No role found</div>;
  console.log("Dashboard role:", userRole);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-3 pt-20 lg:p-6 lg:pt-6 lg:ml-64">
          <DashboardHeader name={profile?.full_name} role={userRole} />
          {/* Conditional rendering based on user role */}
          {userRole === "super_admin" && <AllPatients />}
          {userRole === "doctor" && (
            <>
              <DashCard />
              <PatientActivity />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
