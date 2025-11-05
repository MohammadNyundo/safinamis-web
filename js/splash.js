// js/splash.js
// Controls the one-loop splash highlight sequence then fades into homepage.
// Expected IDs already present in your index.html SVG:
// node-guest, node-website, node-system, node-staff
// flow1, flow2, flow3, flow4
// splash (container), main-content (the rest of site)

// Config: durations (ms)
const NODE_VISIBLE_MS = 1000; // 1s per node (your choice)
const INITIAL_DELAY_MS = 1000; // show full cycle for 1s before starting sequence
const FADE_OUT_MS = 1000; // matches CSS transition for fading container

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const main = document.getElementById('main-content');

  if (!splash || !main) {
    // nothing to do if missing elements
    return;
  }

  // nodes & arrows in order (guest -> website -> system -> staff)
  const nodeIds = ['node-guest', 'node-website', 'node-system', 'node-staff'];
  const arrowIds = ['flow1', 'flow2', 'flow3', 'flow4'];

  const svg = document.getElementById('splash-svg');

  // Add arrowhead marker into the SVG if not already present
  (function addArrowMarker() {
    if (!svg) return;
    // if marker already exists, skip
    if (svg.querySelector('#splash-arrowhead')) return;
    const svgns = 'http://www.w3.org/2000/svg';
    const defs = document.createElementNS(svgns, 'defs');
    const marker = document.createElementNS(svgns, 'marker');
    marker.setAttribute('id', 'splash-arrowhead');
    marker.setAttribute('markerWidth', '8');
    marker.setAttribute('markerHeight', '8');
    marker.setAttribute('refX', '6');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');
    const polygon = document.createElementNS(svgns, 'polygon');
    polygon.setAttribute('points', '0 0, 8 3.5, 0 7');
    polygon.setAttribute('fill', 'rgba(255,255,255,0.5)');
    marker.appendChild(polygon);
    defs.appendChild(marker);
    svg.insertBefore(defs, svg.firstChild);

    // attach marker-end to each flow line
    arrowIds.forEach(id => {
      const el = svg.querySelector('#' + id);
      if (el) el.setAttribute('marker-end', 'url(#splash-arrowhead)');
    });
  })();

  // helper to clear highlights
  function clearHighlights() {
    nodeIds.forEach(nid => {
      const g = document.getElementById(nid);
      if (g) g.classList.remove('splash-highlight-node');
    });
    arrowIds.forEach(aid => {
      const l = document.getElementById(aid);
      if (l) l.classList.remove('splash-highlight-arrow');
    });
    // remove dimming
    splash.classList.remove('splash-dim');
  }

  // highlight single step: nodeIndex in [0..3]
  function highlightStep(index) {
    clearHighlights();
    // dim background nodes/arrows
    splash.classList.add('splash-dim');

    const nodeId = nodeIds[index];
    const arrowId = arrowIds[index];

    const node = document.getElementById(nodeId);
    const arrow = document.getElementById(arrowId);

    if (node) node.classList.add('splash-highlight-node');
    if (arrow) arrow.classList.add('splash-highlight-arrow');

    // undim the current node and arrow
    // remove dim only from the active elements by temporarily toggling opacity
    if (node) node.style.opacity = 1;
    if (arrow) arrow.style.opacity = 1;
  }

  // start sequence after initial delay
  setTimeout(() => {
    let step = 0;
    // first highlight step immediately
    highlightStep(step);

    const interval = setInterval(() => {
      step++;
      if (step < nodeIds.length) {
        highlightStep(step);
      } else {
        // finished all nodes -> clear highlights then fade splash out
        clearInterval(interval);
        // small final bloom on logo
        const center = splash.querySelector('.splash-center');
        if (center) center.classList.add('bloom');

        // wait a short moment then fade the whole splash out
        setTimeout(() => {
          splash.classList.add('splash-hidden');
          // reveal main content after fade
          setTimeout(() => {
            // ensure main is visible
            main.style.display = 'block';
            setTimeout(() => {
              main.style.opacity = '1';
            }, 40);
          }, FADE_OUT_MS);
        }, 420); // small gap so bloom is visible
      }
    }, NODE_VISIBLE_MS);
  }, INITIAL_DELAY_MS);
});
