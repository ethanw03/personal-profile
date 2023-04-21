import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import './Down.sass';
import { animated, useSpring } from 'react-spring';

const Down = () => {
	const { y } = useSpring({
		from: { y: 0 },
		to: async (next) => {
			while (true) {
				await next({ y: 50 });
				await next({ y: 0 });
				await next({ y: -50 });
				await next({ y: 0 });
			}
		},
		config: { duration: 2000 },
	});

	return (
		<animated.div
			style={{
				transform: y.interpolate((y) => `translateY(${y}px)`),
			}}>
			<FaAngleDoubleDown />
		</animated.div>
	);
};

export default Down;
