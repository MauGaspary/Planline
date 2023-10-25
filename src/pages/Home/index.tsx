import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { Select } from '../../components/Select';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import { ResumeContext } from '../../contexts/ResumeInfoContext';
import Loader from '../../components/Loader';
import Breadcrumb from '../../components/Breadcrumb';
import Resume from '../Resume';
import { UsInfo } from '../../types/UsInfo';
import Upload from '../../components/Upload';

function Home() {
	const [breadcrumbDisplay, setBreadcrumbDisplay] = useState<string>('home');
	const [org, setOrg] = useState<InfoBody>({ name: 'Organização', id: '' });
	const [project, setProject] = useState<InfoBody>({ name: 'Projeto', id: '' });
	const [squad, setSquad] = useState<InfoBody>({ name: 'Squad', id: '' });
	const {
		setProjectContext,
		setSquadContext,
		setOrganizationContext,
		setSprintIdContext,
		setProjectIdContext,
		setOrganizationIdContext,
	} = useContext(ResumeContext);

	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const {
		data: organizations,
		isLoading: isLoadingOrganizations,
		request: getOrganizations,
	} = useGet<InfoBody[]>();

	const { data: projects, request: getProjects } = useGet<InfoBody[]>();
	const { data: squads, request: getSquads } = useGet<InfoBody[]>();

	const [upload, setUpload] = useState<boolean | null>(false);
	const [file, setFile] = useState<UsInfo[] | null>(null);
	const { setFileContext } = useContext(ResumeContext);
	const [fileName, setFileName] = useState<string>('');

	function importFile(file: UsInfo[], fileName: string) {
		setFile(file);
		setFileContext(file);
		setUpload(true);
		setFileName(fileName);
	}

	useEffect(() => {
		getOrganizations('/organization/info');
	}, []);

	const handleSelect = (placeholder: string, option: InfoBody) => {
		if (placeholder === org.name) {
			setProject({ name: 'Projeto', id: '' });
			setProjectContext('');
			setSquadContext('');
			setSprintIdContext('');
			setProjectIdContext('');
			setOrganizationContext(option.name);
			setOrganizationIdContext(option.id);
			setSquad({ name: 'Squad', id: '' });
			setOrg(option);
			if (option.id.length > 0) {
				getProjects(`/project/info/${option.id}`);
			}
		}
		if (placeholder === project.name) {
			setSquad({ name: 'Squad', id: '' });
			setSquadContext('');
			setProjectContext(option.name);
			setProjectIdContext(option.id);
			setProject(option);
			getSquads(`/squad/info/${option.id}`);
		}
		if (placeholder === squad.name) {
			setSquadContext(option.name);
			setSprintIdContext(option.id);
			setSquad(option);
		}
		setOpenSelect(null);
	};

	const items = [
		{ label: 'Identificação', display: '/' },
		{ label: 'Importação', display: '/import' },
		{ label: 'Resumo', display: '/resume' },
	];

	if (isLoadingOrganizations) {
		return <Loader />;
	}

	if (breadcrumbDisplay === 'home') {
		return (
			<Container title="Identifique-se para visualizar mais informações" small>
				<nav className="absolute top-0 left-0 -translate-y-10 flex justify-start">
					<ol className="breadcrumb flex justify-start gap-3">
						{items.map((item, index) => (
							<li key={index} className="w-44 flex border-b-[6px] border-b-orange-500">
								{item.label}
							</li>
						))}
					</ol>
				</nav>
				{/* <Breadcrumb display={breadcrumbDisplay} /> */}
				<div className="flex flex-col px-20 gap-5 self-center">
					<Select
						placeholder={org.name}
						options={organizations || []}
						handleSelect={handleSelect}
						isOpen={openSelect === 'org'}
						onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
					/>
					<Select
						placeholder={project.name}
						options={projects || []}
						handleSelect={handleSelect}
						disabled={org.id === ''}
						isOpen={openSelect === 'project'}
						onToggle={() => setOpenSelect(openSelect === 'project' ? null : 'project')}
					/>
					<Select
						placeholder={squad.name}
						options={squads || []}
						handleSelect={handleSelect}
						disabled={project.id === ''}
						isOpen={openSelect === 'squad'}
						onToggle={() => setOpenSelect(openSelect === 'squad' ? null : 'squad')}
					/>

					<Link to={squad.name === 'Squad' ? '#' : '/import'}>
						<Button size="large" variant={squad.name === 'Squad' ? 'disabled' : 'primary'}>
							Confirmar
						</Button>
					</Link>
				</div>
			</Container>
		);
	}

	if (breadcrumbDisplay === 'import') {
		return <Upload importer={importFile} />;
	}

	if (breadcrumbDisplay === 'resume') {
		return <Resume />;
	}
}
export default Home;
