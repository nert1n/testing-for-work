import { lazy } from "react";

export const TransactionsPage = lazy(() =>
	import("./ui/transactions.tsx").then(module => ({
		default: module.Transactions,
	}))
);
