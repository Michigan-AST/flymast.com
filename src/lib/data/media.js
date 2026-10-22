export const mediaItems = [
	{
		desc: 'First concept render of the left wing as the vehicle architecture comes together.',
		src: '/media/LeftWingConcept.png',
		alt: "CAD concept render of the aircraft's left wing",
		caption: 'Left wing, concept render',
		date: 'October 21, 2026'
	},
	{
		desc: 'Getting the software-in-the-loop tech stack running',
		src: '/media/px4-sitl-docker-build.png',
		alt: 'Terminal output of the PX4 SITL simulation Docker build',
		caption: 'PX4 SITL simulation, Docker build',
		klass: 'feature-photo-minor',
		date: 'October 21, 2026'
	},
	{
		src: '/media/wind-tunnel-2025.png',
		alt: "Last season's vehicle mounted in a wind tunnel test section",
		caption: '2025 vehicle, wind tunnel test',
		date: 'February 2, 2026'
	}
];

export const sortByDateDesc = (items) => [...items].sort((a, b) => new Date(b.date) - new Date(a.date));

export const mostRecentMedia = sortByDateDesc(mediaItems)[0];
