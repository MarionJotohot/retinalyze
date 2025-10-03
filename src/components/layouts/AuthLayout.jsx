import bgImage from "../../assets/images/background-image.jpg";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-2"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-blue-500 text-white">
            <img
              className="w-48 h-48 rounded-full flex items-center justify-center mb-6"
              src="https://placehold.co/400"
              alt="logo"
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

          {/* (auth form goes here) */}
          <div className="p-6 lg:p-12 flex flex-col justify-center">
            <Outlet /> {/* Login / Forgot / Reset renders here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
