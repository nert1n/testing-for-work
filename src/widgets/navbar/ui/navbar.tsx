import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./navbar.module.scss";

export const Navbar = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	const handleNavigation = (newValue: number) => {
		setValue(newValue);
		switch (newValue) {
			case 0:
				navigate("/transactions");
				break;
			case 1:
				navigate("/currency");
				break;
			case 2:
				navigate("/cash-register");
				break;
			case 3:
				navigate("/clients");
				break;
			default:
				break;
		}
	};

	return (
		<BottomNavigation
			showLabels
			className={styles.navbar}
			value={value}
			onChange={(_, newValue) => handleNavigation(newValue)}>
			<BottomNavigationAction label="Транзакции" />
			<BottomNavigationAction label="Валюта" />
			<BottomNavigationAction label="Касса" />
			<BottomNavigationAction label="Клиенты" />
		</BottomNavigation>
	);
};
