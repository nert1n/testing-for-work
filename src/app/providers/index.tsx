import { OperationProvider } from "@app/providers/operationProvider";

import { IProviders } from "./providers.interface.ts";

const Providers = ({ children }: IProviders) => {
	return <OperationProvider>{children}</OperationProvider>;
};

export default Providers;
