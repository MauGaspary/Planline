import NukaCarousel from 'nuka-carousel';
import Task from './Task';
import { UsInfo } from '../../types/UsInfo';

interface TaskProps {
	listaTasks: UsInfo[];
}

function Carousel({ listaTasks }: TaskProps) {
	// const listaTasks = [
	// 	{ title: 'task 1 daopfkdsioghb', voted: true, next: false },
	// 	{ title: 'task 2 acxgvvvvvvvvvvvv', voted: false, next: false },
	// 	{ title: 'task 3 !!!!!!!!!', voted: false, next: true },
	// 	{ title: 'task dhgdhfgkmjgh', voted: true, next: false },
	// 	{ title: 'task 2 acxgvvvvvvvvvvvv', voted: false, next: false },
	// 	{ title: 'task 3 !!!!!!!!!', voted: false, next: true },
	// ];

	const params = {
		slidesToShow: 3,
	};

	return (
		<div className="flex-row h-fit space-x-7 w-2/3 mx-auto ">
			<NukaCarousel {...params} cellAlign="center" wrapAround withoutControls>
				{listaTasks[7].tasks.map((task, key) => (
					<Task title={task} voted={Math.random() * 2 > 1 ? true : false} next={false} key={key} />
				))}
			</NukaCarousel>
		</div>
	);
}

export default Carousel;
