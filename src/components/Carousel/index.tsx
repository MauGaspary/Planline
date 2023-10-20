import NukaCarousel from 'nuka-carousel';
import Task from './Task';
import { Task as TaskDto } from '../../services/firebase/firebaseSessions';

interface TaskProps {
	listaTasks: { [key: string]: TaskDto };
	currentTaskId: string | null;
}

function Carousel({ listaTasks, currentTaskId }: TaskProps) {
	const tasks = Object.entries(listaTasks);

	const params = {
		slidesToShow: 3,
	};

	return (
		<div className="flex-row h-fit space-x-7 w-2/3 mx-auto ">
			<NukaCarousel {...params} cellAlign="center" wrapAround withoutControls>
				{tasks.map(([task_id, task]) => (
					<Task
						title={task.name}
						voted={task.final_vote > 0}
						next={currentTaskId !== task_id}
						finalVote={task.final_vote}
						key={task_id}
					/>
				))}
			</NukaCarousel>
		</div>
	);
}

export default Carousel;
