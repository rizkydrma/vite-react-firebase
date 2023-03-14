import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Sidebar />
      <div className="mx-auto lg:ml-80">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
