import NukaCarousel from 'nuka-carousel';
import Task from './Task';

function Carousel() {
	const listaTasks = [
		{ title: 'task 1 daopfkdsioghb', voted: true, next: false },
		{ title: 'task 2 acxgvvvvvvvvvvvv', voted: false, next: false },
		{ title: 'task 3 !!!!!!!!!', voted: false, next: true },
		{ title: 'task dhgdhfgkmjgh', voted: true, next: false },
		{ title: 'task 2 acxgvvvvvvvvvvvv', voted: false, next: false },
		{ title: 'task 3 !!!!!!!!!', voted: false, next: true },
	];

	const params = {
		slidesToShow: 3,
	};

	return (
		<div className="flex-row h-fit space-x-7 w-3/5">
			<NukaCarousel {...params} cellAlign="center" wrapAround withoutControls>
				{listaTasks.map((task, key) => (
					<Task title={task.title} voted={task.voted} next={task.next} key={key} />
				))}
			</NukaCarousel>
		</div>
	);
}

export default Carousel;
