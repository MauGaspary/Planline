import React, { createContext, useState } from 'react';
import { usInfo } from '../types/usInfo';

interface ResumeContextType {
	fileContext: usInfo[] | null;
	setFileContext: React.Dispatch<React.SetStateAction<usInfo[] | null>>;
	organization: string | null;
	project: string | null;
	squad: string | null;
	setOrganizationContext: React.Dispatch<React.SetStateAction<string | null>>;
	setProjectContext: React.Dispatch<React.SetStateAction<string | null>>;
	setSquadContext: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ResumeProviderProps {
	children: React.ReactNode;
}

export const ResumeContext = createContext<ResumeContextType>({
	fileContext: null,
	setFileContext: () => {},
	organization: null,
	project: null,
	squad: null,
	setOrganizationContext: () => {},
	setProjectContext: () => {},
	setSquadContext: () => {},
});

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
	const [fileContext, setFileContext] = useState<usInfo[] | null>(null);
	const [organization, setOrganizationContext] = useState<string | null>(null);
	const [project, setProjectContext] = useState<string | null>(null);
	const [squad, setSquadContext] = useState<string | null>(null);

	return (
		<ResumeContext.Provider
			value={{
				fileContext,
				setFileContext,
				organization,
				project,
				squad,
				setOrganizationContext,
				setProjectContext,
				setSquadContext,
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
};
