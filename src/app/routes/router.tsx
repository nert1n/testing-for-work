import Layout from "@app/layout";
import MainLayout from "@app/layout/mainLayout";
import { CashRegisterPage } from "@pages/cash-register";
import { ClientsPage } from "@pages/clients";
import { CurrencyPage } from "@pages/currency";
import { ErrorPage } from "@pages/error";
import { HomePage } from "@pages/home";
import { NotFoundPage } from "@pages/not-found";
import { TransactionsPage } from "@pages/transactions";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage errorText={"Error with router!"} />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				element: <MainLayout />,
				children: [
					{
						path: "transactions",
						element: <TransactionsPage />,
					},
					{
						path: "currency",
						element: <CurrencyPage />,
					},
					{
						path: "cash-register",
						element: <CashRegisterPage />,
					},
					{
						path: "clients",
						element: <ClientsPage />,
					},
				],
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
];
