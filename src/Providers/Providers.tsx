/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { ReactNode, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props {
	children: ReactNode;
}

const Providers = ({ children }: Props) => {
	const [queryClient] = useState(() => new QueryClient());

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
