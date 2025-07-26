import { useState, useRef } from "react";
import InputField from "../../components/InputField";
import { MdOutlineAlternateEmail, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";

const Login = () => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "sample@gmail.com",
      icon: MdOutlineAlternateEmail,
    },
    {
      label: "Password",
      id: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Enter your password",
      icon: showPassword ? IoEyeOffOutline : MdOutlineRemoveRedEye,
      onIconClick: () => setShowPassword(!showPassword),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // test logic
    if (email === "test@example.com" && password === "password123") {
      setModalData({
        isOpen: true,
        type: "success",
        message: "Login Successfully!",
      });
      setTimeout(() => {
        modalRef.current?.showModal();
      }, 0);
    } else {
      setModalData({
        isOpen: true,
        type: "error",
        message: "Invalid email or password.",
      });
      setTimeout(() => {
        modalRef.current?.showModal();
      }, 0);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-2"
      style={{
        backgroundImage: "url(background-image.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-blue-500 text-white">
            <img
              className="w-48 h-48 rounded-full flex items-center justify-center mb-6"
              src="https://placehold.co/400"
              alt=""
            />
            <h1 className="text-3xl font-bold mb-2">Retinalyze.ai</h1>
            <p className="text-center">
              Advanced Retinal Analysis for Stroke Risk Detection
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>AI-powered retinal analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Stroke risk assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Patient management system</span>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-12 flex flex-col justify-center">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-gray-600">Sign in your personal account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {inputs.map((field) => (
                <InputField
                  key={field.id}
                  {...field}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              ))}

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-blue-500 hover:bg-blue-400 text-white border-none rounded-md w-full"
              >
                Sign in
              </button>
            </form>
            <div className="mt-4 flex items-center justify-between text-sm">
              <Link to="/register" className="text-blue-600 hover:underline">
                Create an account
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>

      {modalData.isOpen && (
        <Modal
          ref={modalRef}
          title={modalData.type === "success" ? "Success" : "Error"}
          message={modalData.message}
          confirmLabel="OK"
          color={
            modalData.type === "success"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }
          onConfirm={() => {
            setModalData({ ...modalData, isOpen: false });
            if (modalData.type === "success") {
              navigate("/dashboard");
            }
          }}
        />
      )}
    </div>
  );
};

export default Login;
