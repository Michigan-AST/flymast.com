<script>
	import { softwareFlowNodes, softwareFlowEdges } from '$lib/data/requirements.js';

	// Fixed layout for the known node set — small, hand-tuned diagram rather
	// than a general graph-layout algorithm. Gazebo sits directly under the
	// autopilot so its connector is a straight vertical line that clears the
	// link/GCS column entirely.
	const pos = {
		sensors: { x: 20, y: 30, w: 160, h: 64 },
		compute: { x: 270, y: 30, w: 200, h: 64 },
		autopilot: { x: 560, y: 30, w: 170, h: 64 },
		link: { x: 270, y: 190, w: 200, h: 64 },
		gcs: { x: 270, y: 350, w: 200, h: 64 },
		sim: { x: 560, y: 350, w: 170, h: 64 }
	};

	const label = (from, to) =>
		softwareFlowEdges.find((e) => e.from === from && e.to === to)?.label ?? '';

	const cx = (id) => pos[id].x + pos[id].w / 2;
	const cy = (id) => pos[id].y + pos[id].h / 2;
	const right = (id) => pos[id].x + pos[id].w;
	const bottom = (id) => pos[id].y + pos[id].h;
</script>

<figure class="diagram">
	<svg viewBox="0 0 760 440" role="img" aria-labelledby="sw-flow-title sw-flow-desc">
		<title id="sw-flow-title">Software data-flow diagram</title>
		<desc id="sw-flow-desc">
			Sensors feed the companion computer, which exchanges mission commands and telemetry with the
			PX4 autopilot over MAVLink. The companion computer sends video and telemetry down the OpenHD
			link to the ground control station, which sends operator commands back up. Gazebo feeds
			synthetic sensors and physics into the autopilot before real flight tests.
		</desc>

		<defs>
			<marker
				id="arrow"
				viewBox="0 0 10 10"
				refX="9"
				refY="5"
				markerWidth="7"
				markerHeight="7"
				orient="auto-start-reverse"
			>
				<path d="M0 0L10 5L0 10Z" fill="var(--blue-mid)" />
			</marker>
			<marker
				id="arrow-dash"
				viewBox="0 0 10 10"
				refX="9"
				refY="5"
				markerWidth="7"
				markerHeight="7"
				orient="auto-start-reverse"
			>
				<path d="M0 0L10 5L0 10Z" fill="var(--maize-dark)" />
			</marker>
		</defs>

		<!-- sensors -> compute -->
		<line
			x1={right('sensors')}
			y1={cy('sensors')}
			x2={pos.compute.x}
			y2={cy('compute')}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<text x={(right('sensors') + pos.compute.x) / 2} y={cy('sensors') - 10} class="edge-label">
			{label('sensors', 'compute')}
		</text>

		<!-- compute <-> autopilot (two offset lines) -->
		<line
			x1={right('compute')}
			y1={cy('compute') - 9}
			x2={pos.autopilot.x}
			y2={cy('autopilot') - 9}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<line
			x1={pos.autopilot.x}
			y1={cy('autopilot') + 9}
			x2={right('compute')}
			y2={cy('compute') + 9}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<text x={(right('compute') + pos.autopilot.x) / 2} y={cy('compute') - 17} class="edge-label">
			{label('compute', 'autopilot')}
		</text>
		<text x={(right('compute') + pos.autopilot.x) / 2} y={cy('compute') + 28} class="edge-label">
			{label('autopilot', 'compute')}
		</text>

		<!-- compute <-> link (vertical, offset) -->
		<line
			x1={cx('compute') - 14}
			y1={bottom('compute')}
			x2={cx('link') - 14}
			y2={pos.link.y}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<line
			x1={cx('link') + 14}
			y1={pos.link.y}
			x2={cx('compute') + 14}
			y2={bottom('compute')}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<text x={cx('compute') - 24} y={(bottom('compute') + pos.link.y) / 2} class="edge-label right-align">
			{label('compute', 'link')}
		</text>
		<text x={cx('compute') + 24} y={(bottom('compute') + pos.link.y) / 2} class="edge-label left-align">
			{label('link', 'compute')}
		</text>

		<!-- link <-> gcs (vertical, offset) -->
		<line
			x1={cx('link') - 14}
			y1={bottom('link')}
			x2={cx('gcs') - 14}
			y2={pos.gcs.y}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<line
			x1={cx('gcs') + 14}
			y1={pos.gcs.y}
			x2={cx('link') + 14}
			y2={bottom('link')}
			class="edge"
			marker-end="url(#arrow)"
		/>
		<text x={cx('link') - 24} y={(bottom('link') + pos.gcs.y) / 2} class="edge-label right-align">
			{label('link', 'gcs')}
		</text>
		<text x={cx('link') + 24} y={(bottom('link') + pos.gcs.y) / 2} class="edge-label left-align">
			{label('gcs', 'link')}
		</text>

		<!-- sim -> autopilot (dashed, straight — sim sits directly below autopilot) -->
		<line
			x1={cx('sim')}
			y1={pos.sim.y}
			x2={cx('autopilot')}
			y2={bottom('autopilot')}
			class="edge dashed"
			marker-end="url(#arrow-dash)"
		/>
		<text x={cx('sim') + 16} y={(pos.sim.y + bottom('autopilot')) / 2} class="edge-label dashed-label left-align">
			<tspan x={cx('sim') + 16} dy="0">SITL: synthetic sensors</tspan>
			<tspan x={cx('sim') + 16} dy="14">&amp; physics, pre-flight only</tspan>
		</text>

		{#each softwareFlowNodes as n (n.id)}
			<g>
				<rect
					x={pos[n.id].x}
					y={pos[n.id].y}
					width={pos[n.id].w}
					height={pos[n.id].h}
					rx="10"
					class="box"
					class:box-sim={n.id === 'sim'}
				/>
				<text x={cx(n.id)} y={cy(n.id) - 5} class="box-label">{n.label}</text>
				<text x={cx(n.id)} y={cy(n.id) + 15} class="box-sublabel">{n.sublabel}</text>
			</g>
		{/each}
	</svg>
	<figcaption>
		Data flow through the autonomy stack. Solid lines are the live flight path, and the dashed line
		is the pre-flight simulation loop.
	</figcaption>
</figure>

<style>
	.diagram {
		margin: 1.5rem 0 0;
		background: var(--white);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.5rem 1.5rem 0.5rem;
	}

	svg {
		width: 100%;
		height: auto;
		display: block;
	}

	.box {
		fill: var(--cream);
		stroke: var(--blue);
		stroke-width: 1.5;
	}

	.box-sim {
		fill: #fff8e1;
		stroke: var(--maize-dark);
		stroke-dasharray: 4 3;
	}

	.box-label {
		font-size: 13px;
		font-weight: 800;
		fill: var(--blue);
		text-anchor: middle;
	}

	.box-sublabel {
		font-size: 10.5px;
		fill: var(--ink-soft);
		text-anchor: middle;
	}

	.edge {
		stroke: var(--blue-mid);
		stroke-width: 1.5;
		fill: none;
	}

	.edge.dashed {
		stroke: var(--maize-dark);
		stroke-dasharray: 5 4;
	}

	.edge-label {
		font-size: 10px;
		fill: var(--ink-soft);
		text-anchor: middle;
		dominant-baseline: middle;
	}

	.edge-label.right-align {
		text-anchor: end;
	}

	.edge-label.left-align {
		text-anchor: start;
	}

	.dashed-label {
		fill: var(--maize-dark);
		font-weight: 600;
	}

	figcaption {
		font-size: 0.85rem;
		color: var(--ink-soft);
		padding: 0.75rem 0.25rem 1rem;
	}
</style>
