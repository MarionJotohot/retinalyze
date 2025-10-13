import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import ResultModal from "../../../components/commons/ResultModal";
import { useState, useRef } from "react";
import { riskLevelStyles } from "../../../utils/riskLevelStyles";
import { patients } from "../../../lib/data";

const AllPatients = () => {
  const modalRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [riskFilter, setRiskFilter] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patients.filter((p) => {
    const search = searchTerm.toLowerCase();
    const matchesNameOrAge =
      p.patient.toLowerCase().includes(search) ||
      p.age.toString().includes(search);
    const matchesRisk = riskFilter === "" || p.riskLevel === riskFilter;
    return matchesNameOrAge && matchesRisk;
  });

  return (
    <>
      <div className="overflow-x-auto p-6 bg-white mt-6 rounded-md shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <select
            className="select border-none rounded-md w-full sm:w-1/3"
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
          >
            <option value="">All Risk Levels</option>
            <option value="High">High Risk</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low Risk</option>
          </select>

          <label className="flex input items-center gap-2 border rounded-md border-none px-3 py-2 w-full sm:w-1/2">
            <CiSearch className="opacity-50 text-lg" />
            <input
              type="search"
              className="w-full outline-none"
              placeholder="Search name or age"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        <table className="table table-sm">
          <thead>
            <tr className="text-xs sm:text-sm">
              <th>Patient Name</th>
              <th>Age</th>
              <th>Risk Level</th>
              <th>Last Checkup</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="rounded-full h-8 w-8 sm:h-10 sm:w-10">
                        <img src={patient.image} alt="Avatar" />
                      </div>
                    </div>
                    <div className="text-sm sm:text-base">
                      {patient.patient}
                    </div>
                  </div>
                </td>
                <td className="text-sm">{patient.age}</td>
                <td>
                  <span
                    className={`btn border-none cursor-auto ${
                      riskLevelStyles[patient.riskLevel]
                    } btn-xs`}
                  >
                    {patient.riskLevel}
                  </span>
                </td>
                <td className="text-sm">{patient.lastCheckup}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <button
                      className="btn btn-ghost hover:bg-white border-none shadow-none btn-xs"
                      onClick={() => {
                        setSelectedPatient(patient);
                        modalRef.current?.open();
                      }}
                    >
                      <IoEyeOutline size={18} />
                    </button>
                    <button className="btn btn-ghost hover:bg-white border-none shadow-none btn-xs">
                      <FaRegEdit size={16} />
                    </button>
                    <button className="btn btn-ghost text-red-500 hover:bg-white border-none shadow-none btn-xs">
                      <FaRegTrashCan size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-xs text-gray-500 mt-2 sm:hidden">
          Scroll horizontally to view full table →
        </div>
      </div>
      <ResultModal
        ref={modalRef}
        patient={selectedPatient}
        onClose={() => {}}
      />
    </>
  );
};

export default AllPatients;
