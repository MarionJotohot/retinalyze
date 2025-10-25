import { useState } from "react";
import Sidebar from "../../components/navigations/Sidebar";
import { createDoctorAccount } from "../../services/createDoctor";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    address: "",
    phone_number: "",
    specialization: "",
    license_number: "",
    clinic_name: "",
    professional_title: "",
    years_experience: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const { email, password, ...doctorData } = formData;
      await createDoctorAccount(email, password, doctorData);
      setMessage("Doctor account successfully created!");
      setFormData({
        email: "",
        password: "",
        full_name: "",
        address: "",
        phone_number: "",
        specialization: "",
        license_number: "",
        clinic_name: "",
        professional_title: "",
        years_experience: "",
      });
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to create doctor account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-6">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Add Doctor Account
              </h1>
              <p className="text-gray-600 mt-1">
                Create a new doctor account and assign details
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Info Panel */}
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-lg font-semibold mb-3">Doctor Overview</h2>
              <p className="text-sm text-gray-600 mb-4">
                Fill out the required information on the right to create a new
                doctor account. You can update details later as needed.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Email and password create the login credentials.</li>
                <li>• Profile details are saved in the database.</li>
                <li>• The doctor's specialization links to their profile.</li>
              </ul>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-2 bg-white rounded-md shadow-md p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email & Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input w-full rounded-md border-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input w-full rounded-md border-none"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    className="input w-full rounded-md border-none"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    className="input w-full rounded-md border-none"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>

                {/* Address */}
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input w-full rounded-md border-none"
                  value={formData.address}
                  onChange={handleChange}
                />

                {/* Specialization & License */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    className="input w-full rounded-md border-none"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="license_number"
                    placeholder="License Number"
                    className="input w-full rounded-md border-none"
                    value={formData.license_number}
                    onChange={handleChange}
                  />
                </div>

                {/* Clinic & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="clinic_name"
                    placeholder="Clinic Name"
                    className="input w-full rounded-md border-none"
                    value={formData.clinic_name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="professional_title"
                    placeholder="Professional Title (e.g. MD, DO)"
                    className="input w-full rounded-md border-none"
                    value={formData.professional_title}
                    onChange={handleChange}
                  />
                </div>

                {/* Experience */}
                <input
                  type="number"
                  name="years_experience"
                  placeholder="Years of Experience"
                  className="input w-full rounded-md border-none"
                  value={formData.years_experience}
                  onChange={handleChange}
                />

                {/* Message */}
                {message && (
                  <p
                    className={`mt-2 text-sm ${
                      message.includes("successfully")
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {message}
                  </p>
                )}

                {/* Submit */}
                <div className="mt-3 flex justify-center">
                  <button
                    type="submit"
                    className="btn rounded-md border-none btn-neutral"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddDoctor;
