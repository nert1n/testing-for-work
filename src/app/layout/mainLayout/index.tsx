import { Outlet } from "react-router-dom";

import { Navbar } from "@widgets/navbar/ui/navbar.tsx";

import styles from "./main-layout.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main}>
			<Outlet />
			<Navbar />
		</div>
	);
};

export default MainLayout;
