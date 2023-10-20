import React, { createContext, useState } from 'react';
import { UsInfo } from '../types/UsInfo';

interface ResumeContextType {
	fileContext: UsInfo[] | null;
	setFileContext: React.Dispatch<React.SetStateAction<UsInfo[] | null>>;
	organization: string | null;
	sprint: string | null;
	project: string | null;
	squad: string | null;
	setSprintContext: React.Dispatch<React.SetStateAction<string | null>>;
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
	sprint: null,
	project: null,
	squad: null,
	setOrganizationContext: () => {},
	setProjectContext: () => {},
	setSquadContext: () => {},
	setSprintContext: () => {},
});

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
	const [fileContext, setFileContext] = useState<UsInfo[] | null>(null);
	const [organization, setOrganizationContext] = useState<string | null>(null);
	const [sprint, setSprintContext] = useState<string | null>(null);
	const [project, setProjectContext] = useState<string | null>(null);
	const [squad, setSquadContext] = useState<string | null>(null);

	return (
		<ResumeContext.Provider
			value={{
				fileContext,
				setFileContext,
				organization,
				sprint,
				project,
				squad,
				setOrganizationContext,
				setProjectContext,
				setSquadContext,
				setSprintContext,
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
};
