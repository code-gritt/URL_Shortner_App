import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div>
        <main className="min-h-screen container">
          <Outlet />
        </main>
      </div>
      <div className="p-5 text-center bg-gray-900 mt-10">
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
