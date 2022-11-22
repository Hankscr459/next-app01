import { forwardRef } from 'react';
// third-party
import { motion, useCycle } from 'framer-motion';

// ==============================|| ANIMATION BUTTON ||============================== //

// eslint-disable-next-line react/display-name
const animateButton = forwardRef(({ children, type, direction, offset, scale }, ref) => {
		const motionDiv = motion.div;
    let offset1;
    let offset2;
    switch (direction) {
        case 'up':
        case 'left':
            offset1 = offset;
            offset2 = 0;
            break;
        case 'right':
        case 'down':
        default:
            offset1 = 0;
            offset2 = offset;
            break;
    }

    const [x, cycleX] = useCycle(offset1, offset2);
    const [y, cycleY] = useCycle(offset1, offset2);

    switch (type) {
        case 'rotate':
            return pug`
							motionDiv(
								ref=${ref}
								animate=${{ rotate: 360 }},
								transition=${{
									repeat: Infinity,
									repeatType: 'loop',
									duration: 2,
									repeatDelay: 0,
								}},
							)
								${children}
						`;
        case 'slide':
            if (direction === 'up' || direction === 'down') {
                return pug`
									motionDiv(
										ref=${ref},
										animate=${{ y: y !== undefined ? y : '' }},
										onHoverEnd=${() => cycleY()},
										onHoverStart=${() => cycleY()},
									)
										${children}
								`;
            }
            return pug`
							motionDiv(ref={ref} animate={{ x: x !== undefined ? x : '' }} onHoverEnd={() => cycleX()} onHoverStart={() => cycleX()})
								${children}
						`;

        case 'scale':
        default:
            if (typeof scale === 'number') {
							scale = {
								hover: scale,
								tap: scale,
							};
            }
            return pug`
							motionDiv(ref=${ref}, whileHover=${{ scale: scale?.hover }}, whileTap=${{ scale: scale?.tap }})
								${children}
						`;
    }
});


animateButton.defaultProps = {
	type: 'scale',
	offset: 10,
	direction: 'right',
	scale: {
		hover: 1,
		tap: 0.9,
	},
};

export default animateButton;