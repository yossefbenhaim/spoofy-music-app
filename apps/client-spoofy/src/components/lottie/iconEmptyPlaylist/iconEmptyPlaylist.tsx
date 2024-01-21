import React, { useRef, useEffect } from 'react';
import Lottie, { AnimationItem } from 'lottie-web';

import useStyles from './iconEmptyPlaylistStyles';

const IconEmptyPlaylist: React.FC = () => {
	const { classes } = useStyles();

	const animationRef = useRef<AnimationItem | undefined>();
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		animationRef.current = Lottie.loadAnimation({
			container: container.current!,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			path: '/src/lottieFile/emptyPlaylist.json',
		});
		return () =>
			animationRef.current && animationRef.current.destroy();
	}, []);

	return (
		<div className={classes.logo} ref={container} />
	);
};

export default IconEmptyPlaylist;
