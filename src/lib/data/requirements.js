// Mission & vehicle requirements summarized from the MAST System Requirements
// Review (SRR, 10/16/2026) and the official SUAS rules (requirements.txt).
// Keep this file updated as requirements firm up across PDR / CDR / FRR.

export const missionFacts = [
	{ label: 'Competition', value: 'SUAS 2027 — Tulsa, OK' },
	{ label: 'Mission type', value: 'Disaster response, search-and-deploy' },
	{ label: 'Design philosophy', value: 'Open-ended, autonomous-first' },
	{ label: 'Operators', value: 'Exactly 2 (Safety Pilot + GCS Operator)' }
];

export const vehicleSnapshot = [
	{ label: 'Target all-up weight', value: '≤ 15 lb (max 35 lb)' },
	{ label: 'Stowed envelope', value: '≤ 22 x 14 x 9 in (carry-on)' },
	{ label: 'Assembly time', value: '≤ 180 s, no tools, ≤ 2 people' },
	{ label: 'Configuration', value: 'VTOL tailsitter, collapsible frame' },
	{ label: 'Cruise airspeed', value: '≥ 25 m/s at 110°F' },
	{ label: 'Operating altitude', value: '150–400 ft AGL' },
	{ label: 'Climb / descent angle', value: '≥ 20°' },
	{ label: 'Wind tolerance', value: '14 mph sustained, gusts to 22 mph' },
	{ label: 'Payloads', value: 'Strobe beacon → tent, water bottle → mannequin' },
	{ label: 'Delivery accuracy', value: '≤ 50 ft (15.2 m) from target' },
	{ label: 'Nav. accuracy', value: '≤ 5 m horizontal error' },
	{ label: 'Link reliability', value: 'No outage > 5 s anywhere in flight boundary' }
];

export const conceptOfOps = [
	{ phase: 'Setup + Climb', window: '0–5 min' },
	{ phase: '10 Waypoint Laps', window: '5–20 min' },
	{ phase: 'Risk Mapping', window: '20–30 min' },
	{ phase: 'Search, Detect, Deploy', window: '30–35 min' },
	{ phase: 'Return + Land', window: '35–40 min' },
	{ phase: 'Data Transfer', window: '40–45 min' }
];

export const scoring = [
	{ task: 'Flight Endurance', points: 250 },
	{ task: 'Efficient Operators', points: 200 },
	{ task: 'Design for Rapid Response', points: 200 },
	{ task: 'Search, Detect, and Deploy', points: 200 },
	{ task: 'Risk Mapping', points: 150 },
	{ task: 'Mission total', points: 1000 },
	{ task: 'Technical Design Report + website', points: 250 }
];

export const keyFindings = [
	'Mass is a major design constraint across every subsystem.',
	'Mission time limits the vehicle more than battery capacity does.',
	'Full autonomy is required, with only 2 operators and minimal intervention.',
	'Wind cannot be assumed to be a negligible force in flight or delivery.'
];

export const hardwareSubsystems = [
	'Airframe (collapsible, VTOL tailsitter)',
	'Propulsion',
	'Onboard compute',
	'Imaging',
	'Communications (air + ground)',
	'Battery / power',
	'Payload delivery mechanism'
];

export const softwareStack = [
	{
		name: 'PX4 Autopilot',
		layer: 'Flight Control',
		summary:
			'Runs on the flight controller. Executes low-level stabilization, the VTOL hover-to-cruise transition, and waypoint navigation from commands handed down over MAVLink.',
		url: 'https://px4.io/'
	},
	{
		name: 'ROS 2',
		layer: 'Middleware',
		summary:
			"The companion computer's nervous system: connects perception, mission logic, and payload-control nodes over pub/sub topics so subsystems can be developed and tested independently.",
		url: 'https://docs.ros.org/'
	},
	{
		name: 'MAVROS / MAVLink',
		layer: 'Middleware',
		summary:
			'Bridges ROS 2 and PX4, translating mission commands, parameters, and telemetry between the companion computer and the flight controller.',
		url: 'https://mavlink.io/'
	},
	{
		name: 'OpenHD',
		layer: 'Comms',
		summary:
			'Long-range digital link carrying live video and telemetry down to the ground station, and command uplink back to the aircraft.',
		url: 'https://www.openhd.fpv/'
	},
	{
		name: 'Gazebo',
		layer: 'Simulation',
		summary:
			'Software-in-the-loop sim that feeds synthetic sensor data into the same ROS 2 / PX4 stack used in flight, so autonomy and control logic are validated before every real flight test.',
		url: 'https://gazebosim.org/'
	},
	{
		name: 'QGroundControl + custom dashboard',
		layer: 'Ground Control',
		summary:
			'Operator-facing mission planning, live telemetry, and video display, plus manual override. This is what the two operators actually watch and fly from.',
		url: 'https://qgroundcontrol.com/'
	}
];

// Edges for the software data-flow diagram: { from, to, label }. Node ids must
// match an entry in softwareFlowNodes below.
export const softwareFlowNodes = [
	{ id: 'sensors', label: 'Sensors', sublabel: 'camera, GPS, IMU' },
	{ id: 'compute', label: 'Companion Computer', sublabel: 'ROS 2 nodes' },
	{ id: 'autopilot', label: 'PX4 Autopilot', sublabel: 'flight controller' },
	{ id: 'link', label: 'OpenHD Link', sublabel: 'air ↔ ground radio' },
	{ id: 'gcs', label: 'Ground Control Station', sublabel: 'QGC + dashboard' },
	{ id: 'sim', label: 'Gazebo', sublabel: 'SITL, pre-flight' }
];

export const softwareFlowEdges = [
	{ from: 'sensors', to: 'compute', label: 'raw sensor data' },
	{ from: 'compute', to: 'autopilot', label: 'mission commands (MAVLink)' },
	{ from: 'autopilot', to: 'compute', label: 'state & telemetry' },
	{ from: 'compute', to: 'link', label: 'video + telemetry' },
	{ from: 'link', to: 'gcs', label: 'downlink' },
	{ from: 'gcs', to: 'link', label: 'operator commands' },
	{ from: 'link', to: 'compute', label: 'uplink' },
	{ from: 'sim', to: 'autopilot', label: 'SITL: synthetic sensors & physics, pre-flight only' }
];

// Mission autonomy pipeline — from the team's whiteboard planning session.
// `open` flags items the team hasn't pinned down yet; kept honest rather than
// guessing at a resolution.
export const autonomyPhases = [
	{
		phase: 'Phase I',
		title: 'Laps',
		summary: 'Fly the required waypoint laps to open the mission.',
		inputs: ['Waypoint array: latitude, longitude, MSL', 'Live GPS position: latitude, longitude, MSL'],
		steps: [
			'Set the next waypoint in the array as the active goal.',
			'Yield (ROS job) until the goal is reached.',
			'Loop through the waypoint array for the required number of laps.'
		]
	},
	{
		phase: 'Phase II',
		title: 'Risk Mapping',
		summary: 'Cover the mapping bounds with a snake search to build the risk map.',
		inputs: [
			'Mapping bounds: bottom-left & top-right coordinates',
			'Coverage area per imaging pass'
		],
		steps: [
			'Fly along +x̂ until out of bounds.',
			'Step +1 in y.',
			'Fly along −x̂ until out of bounds.',
			'Step +1 in y again, and repeat until the bounds are fully covered.'
		]
	},
	{
		phase: 'Phase III',
		title: 'Search, Detect & Deploy',
		summary: 'Find the tent and the mannequin, then deliver the matched payload to each.',
		inputs: [
			'GPS position, wind speed, drone speed, altitude',
			'Payload mass & aerodynamics'
		],
		steps: [
			'Run detection on the mapped imagery to locate the tent and the person (ML-based).',
			'Convert detected pixel coordinates to GPS coordinates and send the target to PX4.',
			'Calculate the entry point and drop point from GPS, wind, speed, altitude, and payload data.',
			'Fly to the entry point, then the drop point (ROS job for each).',
			'Release the payload.'
		],
		open: ['Exact release trigger (which completion event fires the drop) is still being pinned down.']
	},
	{
		phase: 'Phase IV',
		title: 'Landing',
		summary: 'Return and land using a pattern authored ahead of time.',
		inputs: [],
		steps: ['Upload a landing pattern built in QGroundControl.', 'Command PX4 to land.']
	}
];

export const devEnvironment =
	'PX4, ROS 2, and Gazebo all run containerized in Docker, so the simulation and flight-control stack is reproducible across every team laptop.';

export const milestones = [
	{ gate: 'SRR', date: 'September 25, 2026', focus: 'Mission needs, feasibility, requirements baseline' },
	{ gate: 'PDR', date: 'November 6, 2026', focus: 'Architecture review, subsystem concept validation' },
	{ gate: 'CDR', date: 'February 19, 2027', focus: 'Design maturity, pre-integration readiness' },
	{ gate: 'FRR', date: 'March 26, 2027', focus: 'Flight readiness, HITL sign-off, go/no-go' }
];
