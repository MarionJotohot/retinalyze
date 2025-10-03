import { useAuthStore } from "../../stores/authStore";
import InputField from "../../components/commons/InputField";
import Modal from "../../components/commons/Modal";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { loginInputs } from "../../lib/data";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (modalData.isOpen) {
      modalRef.current?.showModal();
    }
  }, [modalData.isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formData;
    try {
      await login(email, password);
      setModalData({
        isOpen: true,
        type: "success",
        message: "Login Successfully!",
      });
    } catch (error) {
      setModalData({
        isOpen: true,
        type: "error",
        message: error.message || "Login failed.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Welcome Back</h2>
        <p className="text-gray-600">Sign in your personal account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {loginInputs.map((field) => (
          <InputField
            key={field.id}
            {...field}
            type={
              field.id === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : field.type
            }
            value={formData[field.id]}
            onChange={handleChange}
          />
        ))}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="showPassword"
            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label htmlFor="showPassword" className="text-sm">
            Show password
          </label>
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-400 text-white border-none rounded-md w-full"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="mt-5 flex justify-center text-sm">
        <Link
          to="/auth/forgot-password"
          className="text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
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
