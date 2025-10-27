import { useAuthStore } from "../../stores/authStore";
import { useDoctorStore } from "../../stores/useDoctorStore";
import { useEffect } from "react";

// Profile Details Form Component
const ProfileDetailsForm = () => {
  const { profile, user } = useAuthStore(); // Access the store authStore
  const { doctor, fetchDoctor } = useDoctorStore(); // Access the store doctorStore

  // Fetch doctors data on component mount
  useEffect(() => {
    fetchDoctor();
  }, [fetchDoctor]);

  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <p className="text-sm text-gray-600">
            Update your personal details and contact information
          </p>
        </div>

        {/* Personal Information Form */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Juan Dela Cruz"
              value={profile?.full_name || "No name"}
              className="w-full border rounded-md p-2"
              disabled
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="juandelacruz@hospital.com"
              value={user?.email || "No Email"}
              className="w-full border rounded-md p-2"
              disabled
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                placeholder="(123) 456-7890"
                value={profile?.phone_number || "No number"}
                className="w-full border rounded-md p-2"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="title">
                Professional Title
              </label>
              <input
                id="title"
                placeholder="Ophthalmologist, PhD"
                value={doctor?.professional_title || "No title"}
                className="w-full border rounded-md p-2"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information Form */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Professional Information</h3>
          <p className="text-sm text-gray-600">
            Your medical credentials and specializations
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="license">
                Medical License Number
              </label>
              <input
                id="license"
                placeholder="MD-12345-PH"
                value={doctor?.license_number || "No license number"}
                className="w-full border rounded-md p-2"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="hospital">
                Hospital/Clinic Name
              </label>
              <input
                id="hospital"
                placeholder="Manila General Hospital"
                value={doctor?.clinic_name || "No hospital name"}
                className="w-full border rounded-md p-2"
                disabled
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="specialization">
              Specialization
            </label>
            <input
              id="specialization"
              placeholder="Retinal Diseases, Diabetic Retinopathy"
              value={doctor?.specialization || "No specialization"}
              className="w-full border rounded-md p-2"
              disabled
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="experience">
              Years of Experience
            </label>
            <input
              id="experience"
              placeholder="15 years"
              value={doctor?.years_experience || "No experience data"}
              className="w-full border rounded-md p-2"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetailsForm;
