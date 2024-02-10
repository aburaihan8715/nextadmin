import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import styles from "./dashboardLayout.module.css";
import Footer from "@/components/dashboard/footer/footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
