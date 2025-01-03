import { lazy } from "react";

export const CurrencyPage = lazy(() =>
	import("./ui/currency.tsx").then(module => ({ default: module.Currency }))
);
