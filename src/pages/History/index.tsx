import { useContext, useState } from 'react';
import Identify from '../../components/Breadcrumb/Identify';
import Container from '../../components/Container';
import { ResumeContext } from '../../contexts/ResumeInfoContext';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function History() {
	const router = useNavigate();
	const [changeHistoryPage, setChangeHistoryPage] = useState(false);
	const { squad_id } = useContext(ResumeContext);
	console.log(squad_id);

	return (
		<>
			{changeHistoryPage ? (
				<Container title="Histórico">
					{true && (
						<div className="flex-col gap-6 w-full flex items-center justify-center h-60">
							<h1 className="text-2xl font-medium text-triider-grayscale-gray1 relative">
								Não há sprints para exportar!
							</h1>
							<Button size="large" variant="primary" onClickAction={() => router('/')}>
								Vote agora
							</Button>
						</div>
					)}
				</Container>
			) : (
				<Identify historyPage changeHistoryPage={() => setChangeHistoryPage(!changeHistoryPage)} />
			)}
		</>
	);
}

export default History;
