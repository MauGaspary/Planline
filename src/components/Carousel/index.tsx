import NukaCarousel from 'nuka-carousel';
import Task from './Task';
import leftArrow from '../../assets/images/ArrowLeft.png';
import rightArrow from '../../assets/images/ArrowRight.png';
import { Task as TaskDto } from '../../services/firebaseSessions';

interface TaskProps {
	taskList: { [key: string]: TaskDto };
	currentTaskId: string | null;
	voteLater: (taskId: string) => void;
}

function Carousel({ taskList, currentTaskId, voteLater }: TaskProps) {
	const tasks = Object.entries(taskList);

	const params = {
		slidesToShow: 3,
	};

	return (
		<div className="flex-row h-fit space-x-7 w-2/3 mx-auto ">
			<NukaCarousel
				{...params}
				cellAlign="center"
				wrapAround
				renderBottomCenterControls={null}
				renderCenterLeftControls={({ previousSlide }) => (
					<button onClick={previousSlide}>
						<img src={leftArrow} />
					</button>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<button onClick={nextSlide}>
						<img src={rightArrow} />
					</button>
				)}
			>
				{tasks.map(([task_id, task]) => (
					<Task
						taskId={task_id}
						title={task.description}
						voted={task.final_vote > 0}
						next={currentTaskId !== task_id}
						finalVote={task.final_vote}
						key={task_id}
						voteLater={voteLater}
					/>
				))}
			</NukaCarousel>
		</div>
	);
}

export default Carousel;
