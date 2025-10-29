import Sidebar from "../../components/navigations/Sidebar";
import { FaEdit } from "react-icons/fa";
import ProfileSidebarCard from "./ProfileSidebarCard";
import ProfileDetailsForm from "./ProfileDetailsForm";
import { useEditDoctorQuery } from "../../hooks/useEditDoctorQuery";
import { useFetchDoctor } from "../../hooks/useFetchDoctorQuery";
import { useAuthStore } from "../../stores/authStore";
import { useState, useEffect } from "react";

// Profile Settings Page
const Profile = () => {
  // Get current user ID from auth store
  const user = useAuthStore((state) => state.user);
  const userId = user?.id;
  const editDoctorMutation = useEditDoctorQuery(userId);

  // Initialize the mutation hooks
  const profile = useAuthStore((state) => state.profile);
  const doctorQuery = useFetchDoctor(userId);

  // Local state for form values
  const [formValues, setFormValues] = useState({
    full_name: "",
    phone_number: "",
    professional_title: "",
    license_number: "",
    clinic_name: "",
    specialization: "",
    years_experience: "",
  });

  // Store original values to compare changes
  const [originalValues, setOriginalValues] = useState({
    full_name: "",
    phone_number: "",
    professional_title: "",
    license_number: "",
    clinic_name: "",
    specialization: "",
    years_experience: "",
  });

  // Prepare fields for mutation
  useEffect(() => {
    // run whenever profile OR doctorQuery.data changes
    if (!profile && !doctorQuery.data) return;
    // merge profile and doctor data
    const prof = profile ?? {};
    const doc = doctorQuery.data ?? {};
    // set form values
    const data = {
      full_name: prof.full_name || "",
      phone_number: prof.phone_number || "",
      professional_title: doc.professional_title || "",
      license_number: doc.license_number || "",
      clinic_name: doc.clinic_name || "",
      specialization: doc.specialization || "",
      years_experience: doc.years_experience || "",
    };
    // set form values
    setFormValues(data);
    // keep original snapshot
    setOriginalValues(data);
  }, [doctorQuery.data, profile]);

  const handleSubmitFields = () => {
    const profileFields = {
      full_name: formValues.full_name,
      phone_number: formValues.phone_number,
    };
    const doctorFields = {
      professional_title: formValues.professional_title,
      license_number: formValues.license_number,
      clinic_name: formValues.clinic_name,
      specialization: formValues.specialization,
      years_experience: formValues.years_experience,
    };
    editDoctorMutation.mutate({ profileFields, doctorFields }, {
      onSuccess: ({ profData, docData }) => {
        setFormValues({
          full_name: profData.full_name || "",
          phone_number: profData.phone_number || "",
          professional_title: docData?.professional_title || "",
          license_number: docData?.license_number || "",
          clinic_name: docData?.clinic_name || "",
          specialization: docData?.specialization || "",
          years_experience: docData?.years_experience || "",
        });
        setOriginalValues({
          full_name: profData.full_name || "",
          phone_number: profData.phone_number || "",
          professional_title: docData?.professional_title || "",
          license_number: docData?.license_number || "",
          clinic_name: docData?.clinic_name || "",
          specialization: docData?.specialization || "",
          years_experience: docData?.years_experience || "",
        });
      }
    });
  }

  const hasChanges = () => {
    return Object.keys(formValues).some(
      key => formValues[key] !== originalValues[key]
    );
  };

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
              <button className="btn-neutral cursor-pointer btn rounded-lg disabled:bg-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed"  
                onClick={handleSubmitFields}
                disabled={!hasChanges()}
              >
                <FaEdit className="h-4 w-4 mr-2" />
                Save Profile
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProfileSidebarCard /> 
              <ProfileDetailsForm formValues={formValues} setFormValues={setFormValues} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Profile;
