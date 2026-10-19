// Build-log / blog entries — SUAS rules require "historical records of build
// progress." Add a new entry at the top of this array as the team hits
// milestones, tests, or wants to share progress. `media: []` can later hold
// { type: 'image' | 'video', src, caption } objects.

export const updates = [
	{
		date: '2026-10-16',
		title: 'System Requirements Review',
		tag: 'Milestone',
		summary:
			'Walked through team overview, system architecture, and the full requirements tree (competition → system → subsystem) for the SUAS 2027 vehicle. Identified mass, mission time, autonomy, and wind as the top design drivers.',
		media: []
	},
	{
		date: '2026-09-25',
		title: 'Requirements Baseline Set (SRR)',
		tag: 'Milestone',
		summary:
			'Established the mission needs and feasibility baseline ahead of Preliminary Design Review. This freezes the starting point for subsystem scoping.',
		media: []
	},
	{
		date: '2026-09-15',
		title: 'Mass Meeting — Kickoff for SUAS 2027',
		tag: 'Team',
		summary:
			'Introduced the leadership team, the SUAS competition, and the hardware and software project objectives for the year to new and returning members.',
		media: []
	}
];

// Upcoming design review gates — kept in sync with requirements.js `milestones`.
export const upcoming = [
	{ date: '2026-11-06', title: 'Preliminary Design Review (PDR)' },
	{ date: '2027-02-19', title: 'Critical Design Review (CDR)' },
	{ date: '2027-03-26', title: 'Flight Readiness Review (FRR)' }
];
