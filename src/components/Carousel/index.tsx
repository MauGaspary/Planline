import Task from './Task';
import { Task as TaskDto, TaskVotes } from '../../services/firebaseSessions';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface TaskProps {
	finalVotes: { [key: string]: TaskVotes };
	taskList: { [key: string]: TaskDto };
	currentTaskId: string | null;
	voteLater: (taskId: string) => void;
}

function Carousel({ taskList, currentTaskId, voteLater, finalVotes }: TaskProps) {
	const tasks = Object.entries(taskList);

	return (
		<div className="flex-row h-fit space-x-7 w-2/3 mx-auto ">
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				modules={[Navigation]}
				navigation={true}
				centeredSlides={true}
				className="mySwiper"
			>
				{tasks.map(([task_id, task]) => (
					<SwiperSlide className="bg-transparent" key={task_id}>
						<Task
							taskId={task_id}
							title={task.description}
							voted={(finalVotes[task_id]?.final_vote ?? 0) > 0}
							next={currentTaskId !== task_id}
							finalVote={finalVotes[task_id]?.final_vote ?? 0}
							voteLater={voteLater}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Carousel;
