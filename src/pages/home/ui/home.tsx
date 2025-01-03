import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import styles from "./home.module.scss";

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.home}>
			<Button
				className={styles.home__button}
				variant="contained"
				onClick={() => navigate("/transactions")}>
				Кассир
			</Button>
			<Button
				className={styles.home__button}
				variant="contained"
				onClick={() => navigate("/transactions")}>
				Админ
			</Button>
		</div>
	);
};
