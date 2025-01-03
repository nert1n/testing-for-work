import React, { createContext, useContext, useMemo, useState } from "react";

import { IProviders } from "@app/providers/providers.interface.ts";
import {
	mockDataTransactions,
	Operation,
} from "@shared/mock/mock-transactions.ts";

interface OperationContextType {
	rows: Operation[];
	newOperation: Operation;
	isFormVisible: boolean;
	handleAddOperation: () => void;
	handleChange: (field: keyof Operation, value: string | number) => void;
	setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OperationContext = createContext<OperationContextType | undefined>(
	undefined
);

export const OperationProvider = ({ children }: IProviders) => {
	const [rows, setRows] = useState<Operation[]>(mockDataTransactions);
	const [newOperation, setNewOperation] = useState<Operation>({
		operation: "Покупка",
		currency1: "",
		amount1: 0,
		currency2: "",
		amount2: 0,
		rate: 0,
		time: "",
		clientId: 0,
	});
	const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

	const handleAddOperation = () => {
		if (
			newOperation.operation &&
			newOperation.currency1 &&
			newOperation.amount1
		) {
			setRows([...rows, { ...newOperation }]);
			setNewOperation({
				operation: "Покупка",
				currency1: "",
				amount1: 0,
				currency2: "",
				amount2: 0,
				rate: 0,
				time: "",
				clientId: 0,
			});
			setIsFormVisible(false);
		}
	};

	const handleChange = (field: keyof Operation, value: string | number) => {
		setNewOperation({ ...newOperation, [field]: value });
	};

	const value = useMemo(
		() => ({
			rows,
			newOperation,
			isFormVisible,
			handleAddOperation,
			handleChange,
			setIsFormVisible,
		}),
		[rows, newOperation, isFormVisible]
	);

	return (
		<OperationContext.Provider value={value}>
			{children}
		</OperationContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOperationContext = () => {
	const context = useContext(OperationContext);
	if (!context) {
		throw new Error(
			"useOperationContext must be used within an OperationProvider"
		);
	}
	return context;
};
