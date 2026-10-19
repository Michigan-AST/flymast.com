// Team roster. Add a `photo` path (e.g. "/team/gavin.jpg" placed in /static/team/)
// to swap a placeholder initial-badge for a real headshot.

export const advisor = {
	name: 'Prof. Tzoumas',
	role: 'Faculty Advisor',
	photo: '/team/tzoumas.png'
};

export const leads = [
	{
		name: 'Gavin B.',
		role: 'Chief Engineer',
		team: 'Leadership',
		hometown: 'Garden City, MI',
		year: 'Sophomore, Honors Computer Science (Engineering)',
		focus: 'Project management & timekeeping, administrative operations',
		photo: '/team/gavin.png'
	},
	{
		name: 'Calvin vanHartesvelt',
		role: 'Hardware Lead',
		team: 'Hardware',
		hometown: 'Lansing, MI',
		year: 'Junior, Aerospace Engineering, EE minor',
		focus: 'Hardware integration, component modeling',
		photo: '/team/calvin.png'
	},
	{
		name: 'Ryan P.',
		role: 'Software Lead',
		team: 'Software',
		hometown: 'Holland, MI',
		year: 'Sophomore, Computer Engineering & Physics',
		focus: 'Sensor integration, flight pathing & control loops, drone OS management',
		photo: '/team/ryan.png'
	},
	{
		name: 'Lucas B.',
		role: 'Business & Operations Lead',
		team: 'Business',
		hometown: 'Minot, ND',
		year: 'Junior, Aerospace Engineering',
		focus: 'Project funding, business relations, hardware team member',
		photo: '/team/lucas.png'
	}
];

// General members: add entries here as the roster grows.
// { name, team: 'Hardware' | 'Software' | 'Business', year, major, photo }
export const members = [
	{ name: 'Gavin B.', team: 'Software', photo: '/team/gavin.png' },
	{ name: 'Maran Boudagh', team: 'Hardware' },
	{ name: 'Mario Suarez', team: 'Hardware' },
	{ name: 'Natan Fredericks', team: 'Hardware' },
	{ name: 'Daeyon Yang', team: 'Software' },
	{ name: 'Woojin Im', team: 'Software' },
];

export const subteams = ['Hardware', 'Software', 'Business'];
