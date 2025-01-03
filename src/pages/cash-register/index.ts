import { lazy } from "react";

export const CashRegisterPage = lazy(() =>
	import("./ui/cash-register.tsx").then(module => ({
		default: module.CashRegister,
	}))
);
