import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";

import { Operation } from "@shared/mock/mock-transactions.ts";

import styles from "./operation-form.module.scss";

interface OperationFormProps {
	newOperation: Operation;
	handleChange: (field: keyof Operation, value: string | number) => void;
	handleAddOperation: () => void;
}

export const OperationForm: React.FC<OperationFormProps> = ({
	handleAddOperation,
	handleChange,
	newOperation,
}) => {
	const handleSaveOperation = () => {
		const currentDate = new Date().toLocaleDateString("ru-RU");
		handleChange("time", currentDate);
	};

	useEffect(() => {
		if (newOperation.time) {
			handleAddOperation();
		}
	}, [newOperation.time, handleAddOperation]);

	return (
		<div className={styles.form__container}>
			<div className={styles.form__values}>
				<div className={styles.form__value_another}>
					<span className={styles.form__label_value}>Валюта 1</span>
					<FormControl className={styles.select__field}>
						<InputLabel>Валюта 1</InputLabel>
						<Select
							label="Валюта 1"
							value={newOperation.currency1}
							onChange={e => handleChange("currency1", e.target.value)}>
							<MenuItem value="USD">USD</MenuItem>
							<MenuItem value="EUR">EUR</MenuItem>
							<MenuItem value="UAH">UAH</MenuItem>
						</Select>
					</FormControl>
					<TextField
						className={styles.text__field}
						label="Сумма 1"
						type="number"
						value={newOperation.amount1}
						onChange={e => handleChange("amount1", +e.target.value)}
					/>
				</div>
				<div className={styles.form__value_another}>
					<span className={styles.form__label_value}>Валюта 2</span>
					<FormControl className={styles.select__field}>
						<InputLabel>Валюта 2</InputLabel>
						<Select
							label="Валюта 2"
							value={newOperation.currency2}
							onChange={e => handleChange("currency2", e.target.value)}>
							<MenuItem value="USD">USD</MenuItem>
							<MenuItem value="EUR">EUR</MenuItem>
							<MenuItem value="UAH">UAH</MenuItem>
						</Select>
					</FormControl>
					<TextField
						className={styles.text__field}
						label="Сумма 2"
						type="number"
						value={newOperation.amount2}
						onChange={e => handleChange("amount2", +e.target.value)}
					/>
				</div>
			</div>
			<div className={styles.form__value}>
				<span className={styles.form__label}>Операция</span>
				<FormControl className={styles.select__field}>
					<Select
						value={newOperation.operation}
						onChange={e =>
							handleChange("operation", e.target.value as "Покупка" | "Продажа")
						}>
						<MenuItem value="Покупка">Покупка</MenuItem>
						<MenuItem value="Продажа">Продажа</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className={styles.form__value}>
				<span className={styles.form__label}>Курс</span>
				<TextField
					className={styles.text__field}
					type="number"
					value={newOperation.rate}
					onChange={e => handleChange("rate", +e.target.value)}
				/>
			</div>

			<div className={styles.form__value}>
				<span className={styles.form__label}>Сумма от клиента</span>
				<TextField
					className={styles.text__field}
					type="number"
					value={newOperation.amount2}
					onChange={e => handleChange("amount2", +e.target.value)}
				/>
			</div>

			<div className={styles.form__value}>
				<span className={styles.form__label}>Клиент (ID)</span>
				<TextField
					className={styles.text__field}
					type="number"
					value={newOperation.clientId}
					onChange={e => handleChange("clientId", e.target.value)}
				/>
			</div>

			<div className={styles.form__value_comment}>
				<span className={styles.form__label}>Комментарий</span>
				<TextField
					className={styles.text__field}
					value={newOperation.time}
					onChange={e => handleChange("time", e.target.value)}
				/>
			</div>

			<div className={styles.result__container}>
				<div className={styles.result__item}>
					<span className={styles.result__label}>Сумма к оплате:</span>
					<span className={styles.result__value}>
						{newOperation.amount2 * newOperation.rate}
					</span>
				</div>
				<div className={styles.result__item}>
					<span className={styles.result__label}>Сдача:</span>
					<span className={styles.result__value}>
						{newOperation.amount2 * newOperation.rate - newOperation.amount1}
					</span>
				</div>
			</div>

			<Button
				className={styles.add__button}
				variant="contained"
				onClick={handleSaveOperation}>
				Сохранить
			</Button>
		</div>
	);
};
