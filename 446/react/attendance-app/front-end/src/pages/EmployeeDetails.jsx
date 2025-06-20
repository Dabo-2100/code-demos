import { useNavigate, useParams } from "react-router-dom";
import { systemEmployes } from "../store";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function EmployeeDetails() {
  // I Send The Employee ID to Backend (This Employee Details)
  // State
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({});
  const { list, removeUser } = systemEmployes();
  const parmas = useParams();

  const getEmployeeDetails = (id) => {
    let employee = list.find((el) => el.id == id);
    if (!employee) navigate("/404.page");
    return employee; // undefined
  };

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning", 
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeUser(parmas.employeeId);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    setEmployeeData(getEmployeeDetails(parmas.employeeId));
  }, []);

  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="container">
        <div className="bg-gray-900  rounded-2xl shadow w-full">
          <h1 className="bg-gray-600 text-white p-3">Employee Basic Info</h1>
          <div className="grid grid-cols-2 p-3">
            <h1>
              Employee Name :{" "}
              <span className="font-bold">{employeeData.name}</span>
            </h1>
            <h1>
              Employee Email :{" "}
              <span className="font-bold">{employeeData.email}</span>
            </h1>
            <h1>
              Employee Brith :{" "}
              <span className="font-bold">{employeeData.birthDate}</span>
            </h1>
            <h1>
              Employee Salary :{" "}
              <span className="font-bold">{employeeData.salary} EGP</span>
            </h1>

            <h1>
              Job Title :{" "}
              <span className="font-bold">{employeeData.title}</span>
            </h1>
          </div>

          <div className="flex justify-end p-3">
            <button className="btn btn-soft btn-error" onClick={handleRemove}>
              Remove This Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Show Data , Edit Data , Remove User
