import React, { createContext, useState } from 'react';
import { usInfo } from '../types/usInfo';

interface ResumeContextType {
	fileContext: usInfo[] | null;
	setFileContext: React.Dispatch<React.SetStateAction<usInfo[] | null>>;
}

interface ResumeProviderProps {
	children: React.ReactNode;
}

export const ResumeContext = createContext<ResumeContextType>({
	fileContext: null,
	setFileContext: () => {},
});

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
	const [fileContext, setFileContext] = useState<usInfo[] | null>(null);

	return (
		<ResumeContext.Provider value={{ fileContext, setFileContext }}>
			{children}
		</ResumeContext.Provider>
	);
};
