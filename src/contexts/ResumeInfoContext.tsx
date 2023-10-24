import React, { createContext, useState } from 'react';
import { UsInfo } from '../types/UsInfo';

interface ResumeContextType {
	fileContext: UsInfo[] | null;
	setFileContext: React.Dispatch<React.SetStateAction<UsInfo[] | null>>;
	organization: string | null;
	organization_id: string | null;
	sprint: string | null;
	sprint_id: string | null;
	project: string | null;
	project_id: string | null;
	squad: string | null;
	squad_id: string | null;
	setSprintContext: React.Dispatch<React.SetStateAction<string | null>>;
	setOrganizationContext: React.Dispatch<React.SetStateAction<string | null>>;
	setProjectContext: React.Dispatch<React.SetStateAction<string | null>>;
	setSquadContext: React.Dispatch<React.SetStateAction<string | null>>;
	setSprintIdContext: React.Dispatch<React.SetStateAction<string | null>>;
	setProjectIdContext: React.Dispatch<React.SetStateAction<string | null>>;
	setSquadIdContext: React.Dispatch<React.SetStateAction<string | null>>;
	setOrganizationIdContext: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ResumeProviderProps {
	children: React.ReactNode;
}

export const ResumeContext = createContext<ResumeContextType>({
	fileContext: null,
	setFileContext: () => { },
	organization: null,
	organization_id: null,
	sprint: null,
	project: null,
	squad: null,
	sprint_id: null,
	project_id: null,
	squad_id: null,
	setOrganizationContext: () => { },
	setProjectContext: () => { },
	setSquadContext: () => { },
	setSprintContext: () => { },
	setSprintIdContext: () => { },
	setProjectIdContext: () => { },
	setSquadIdContext: () => { },
	setOrganizationIdContext: () => { },
});

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
	const [fileContext, setFileContext] = useState<UsInfo[] | null>(null);
	const [organization, setOrganizationContext] = useState<string | null>(null);
	const [sprint, setSprintContext] = useState<string | null>(null);
	const [project, setProjectContext] = useState<string | null>(null);
	const [squad, setSquadContext] = useState<string | null>(null);
	const [sprint_id, setSprintIdContext] = useState<string | null>(null);
	const [project_id, setProjectIdContext] = useState<string | null>(null);
	const [squad_id, setSquadIdContext] = useState<string | null>(null);
	const [organization_id, setOrganizationIdContext] = useState<string | null>(null);

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
				sprint_id,
				project_id,
				squad_id,
				organization_id,
				setSprintIdContext,
				setProjectIdContext,
				setSquadIdContext,
				setOrganizationIdContext,
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
};
