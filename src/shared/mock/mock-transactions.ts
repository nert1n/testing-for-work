export interface Operation {
	operation: "Покупка" | "Продажа";
	currency1: string;
	amount1: number;
	currency2: string;
	amount2: number;
	rate: number;
	time: string;
	clientId: number;
}

export const mockDataTransactions: Operation[] = [
	{
		operation: "Покупка",
		currency1: "USD",
		amount1: 100,
		currency2: "UAH",
		amount2: 2700,
		rate: 27,
		time: "12.08.2024",
		clientId: 12345,
	},
	{
		operation: "Продажа",
		currency1: "EUR",
		amount1: 200,
		currency2: "UAH",
		amount2: 6000,
		rate: 30,
		time: "13.08.2024",
		clientId: 67890,
	},
];
