import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex">
      <div className="h-screen w-64 bg-gray-100 p-4 shadow-md ">
        <ul className="space-y-4">
          <li className="text-md font-medium text-gray-600">Dashboard</li>
          <li className="text-md font-medium text-gray-600">List</li>
          <li className="text-md font-medium text-gray-600">Cat</li>
        </ul>
      </div>
      <div className="pl-10 pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
