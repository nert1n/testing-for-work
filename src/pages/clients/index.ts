import { lazy } from "react";

export const ClientsPage = lazy(() =>
	import("./ui/clients.tsx").then(module => ({ default: module.Clients }))
);
