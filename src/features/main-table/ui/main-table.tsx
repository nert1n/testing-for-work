import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { useOperationContext } from "@app/providers/operationProvider";
import { OperationForm } from "@features/operation-form/ui/operation-form.tsx";

import styles from "./main-table.module.scss";

export const MainTable: React.FC = () => {
	const {
		handleAddOperation,
		handleChange,
		isFormVisible,
		newOperation,
		rows,
		setIsFormVisible,
	} = useOperationContext();

	return (
		<div className={styles.container}>
			{!isFormVisible && (
				<div className={styles.buttons}>
					<div>
						<Button color="primary" variant="contained">
							Поиск
						</Button>{" "}
						<Button color="primary" variant="contained">
							Кнопка
						</Button>
					</div>
					<Button
						color="primary"
						variant="contained"
						onClick={() => setIsFormVisible(true)}>
						Добавить операцию
					</Button>
				</div>
			)}

			{isFormVisible ? (
				<OperationForm
					handleAddOperation={handleAddOperation}
					handleChange={handleChange}
					newOperation={newOperation}
				/>
			) : (
				<TableContainer component={Paper}>
					<Table aria-label="currency table" sx={{ minWidth: 650 }}>
						<TableHead>
							<TableRow>
								<TableCell>Операция</TableCell>
								<TableCell>Валюта 1</TableCell>
								<TableCell>Сумма 1</TableCell>
								<TableCell>Валюта 2</TableCell>
								<TableCell>Сумма 2</TableCell>
								<TableCell>Курс</TableCell>
								<TableCell>Время</TableCell>
								<TableCell>Клиент (ID)</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow
									key={Number(row.time) || index}
									sx={{
										backgroundColor:
											row.operation === "Покупка" ? "lightgreen" : "lightcoral",
									}}>
									<TableCell>{row.operation}</TableCell>
									<TableCell>{row.currency1}</TableCell>
									<TableCell>{row.amount1}</TableCell>
									<TableCell>{row.currency2}</TableCell>
									<TableCell>{row.amount2}</TableCell>
									<TableCell>{row.rate}</TableCell>
									<TableCell>{row.time}</TableCell>
									<TableCell>{row.clientId}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</div>
	);
};
