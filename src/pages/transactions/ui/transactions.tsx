import { MainTable } from "@features/main-table/ui/main-table.tsx";

import styles from "./transactions.module.scss";

export const Transactions = () => {
	return (
		<div className={styles.transactions}>
			<MainTable />
		</div>
	);
};
