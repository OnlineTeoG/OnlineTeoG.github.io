/* =========================================================
   projects-data.js
   Single source of truth for every project on the site.
   Add a new project = add one object to PROJECTS. No new
   HTML file needed — project.html renders any slug on demand.
   ========================================================= */

const CATEGORIES = [
  { id: "aeronautics", label: "Aeronautics & Aerospace" },
  { id: "design-cad", label: "Design & CAD" },
  { id: "fabrication", label: "Fabrication & Manufacturing" },
  { id: "competition", label: "Competition Teams" },
  { id: "research", label: "Coursework & Research" },
  { id: "lego", label: "LEGO Creations" },
  { id: "personal", label: "Personal Projects" },
];

const PROJECTS = [
  {
    slug: "technic-experimental-floatplane",
    title: "Experimental Floatplane — LEGO Technic",
    category: "lego",
    date: "2026",
    summary:
      "A scratch-built LEGO Technic bush plane in the spirit of a Piper Cub — currently on floats, with working ailerons, flaps, and elevator.",
    description: [
      "A scratch-built LEGO Technic floatplane. It isn't a replica of any one airplane — it's an experimental design of my own, laid out in the spirit of a Piper Cub and the Cub-style bush planes that came after it: a high strut-braced wing, a squared-off fuselage, and a big slow-turning prop up front. Right now it's rigged as a floatplane, sitting on a pair of floats instead of tires.",
      "The goal was working controls, not just the right silhouette. The ailerons, flaps, and elevator all actually move. That drove the whole internal layout — the wing had to be a frame with room to run linkages out to the hinge lines rather than a solid panel, and the elevator run had to travel the length of the fuselage to the tail without fouling anything. Flaps and ailerons share the same trailing edge, so the span is split and each surface is hinged independently, with enough clearance that neither binds against the other at full deflection.",
      "The interesting problems were all about load paths and slack. Struts make the high wing easy — that's why the real Cub uses them — but floats put the airplane's whole weight into two narrow mounts hanging well below the fuselage, and the model is top-heavy on them, so the float pylons carry more bracing than they look like they need. The controls were harder. Technic geometry has almost no slack in it: a linkage that swings freely at neutral will bind at full travel if a hinge sits a stud off. Most of the iteration in the build went into hinge placement, getting each surface to reach full deflection without jamming.",
    ],
    tools: ["LEGO Technic", "Mechanical Linkages", "Scale Modeling", "General Aviation"],
    images: ["assets/images/technic-aircraft/lego-technic-aircraft-1.jpg"],
    links: {},
    featured: true,
  },
  {
    slug: "lego-mini-builds",
    title: "LEGO Mini-Builds",
    category: "lego",
    date: "2026",
    summary:
      "A run of micro-scale builds — a Shuttle Carrier 747, an oared galley, a formula car, an ocean liner — each made from as few bricks as the shape will tolerate.",
    description: [
      "I keep coming back to mini-builds because of the constraint. A big set hands you the exact part for every curve; a mini-build gives you a handful of ordinary bricks and asks you to suggest the whole thing anyway. Working out which few details actually carry the identity of an object — and which ones you can throw away without anyone noticing — is the part that excites me. It's the most purely creative building I do, and the small ones take the most thinking per brick.",
      "At this scale you can't reproduce a shape, only imply it, so the job becomes choosing what to keep. An ocean liner lives in the spacing and rake of its funnels; a formula car lives in the wings overhanging front and rear and the wheels standing outside the bodywork; a galley lives in the oars and the ram. Get those handful of cues right and the eye supplies everything else on its own.",
      "The Shuttle Carrier is the one I'm happiest with, and it's photographed twice for a reason: once with the orbiter mated on the 747's spine the way NASA ferried the shuttles cross-country, and once with the two pulled apart so each airframe reads on its own. They're a single build in two pieces. The problem to solve was the mount — it had to hold the shuttle firmly enough to pick the whole stack up by the 747, and still let the orbiter lift off cleanly without taking a row of the carrier's fuselage with it.",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Parts Efficiency"],
    images: [
      "assets/images/mini-builds/shuttle-carrier-mated.jpg",
      "assets/images/mini-builds/shuttle-carrier-separated.jpg",
      "assets/images/mini-builds/ocean-liner.jpg",
      "assets/images/mini-builds/galley.jpg",
      "assets/images/mini-builds/formula-car.jpg",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "wind-turbine-competition",
    title: "Competition Wind Turbine",
    category: "competition",
    date: "2026 — In Progress",
    summary:
      "Designing and manufacturing a functioning wind turbine for competition at Northeastern, with a focus on blade shape, pitch control, and an emergency brake.",
    description: [
      "Ongoing project with Renewable Energy Northeastern University: designing and building a functioning wind turbine for competition.",
      "Working in Onshape to design the blade shape, a pitch-control mechanism for the blades, and an emergency brake system — covering aerodynamic, mechanical, and safety-critical design in one build.",
    ],
    tools: ["Onshape", "CAD", "Mechanical Design"],
    images: [],
    links: {},
    featured: true,
    needsDetail: true,
  },
  {
    slug: "frc-robot-design",
    title: "FIRST Robotics Competition — Robot Subsystems",
    category: "competition",
    date: "2022 — 2025",
    summary:
      "Four seasons modeling and designing subsystems for a partially autonomous competition robot in Onshape.",
    description: [
      "Four years on a FIRST Robotics Competition (FRC) team, modeling robot parts and subsystems in Onshape and designing solutions to the season's game challenges on a partially autonomous robot.",
      "Add specifics here — which subsystems you owned (drivetrain, intake, climber, etc.), the team number, competition results, and a photo or CAD render if you have one.",
    ],
    tools: ["Onshape", "CAD", "Robotics"],
    images: [],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "gesture-recognition-active-suspension",
    title: "Gesture Recognition for Active Suspension",
    category: "research",
    date: "Apr — May 2025",
    summary:
      "Trained a machine-learning model to recognize hand, face, and body gestures, then used it to drive a car's active suspension in response — a patented result from a Clearmotion internship.",
    description: [
      "During an internship at Clearmotion, trained and coordinated a machine-learning model to recognize various hand, face, and body gestures from hundreds of collected data samples.",
      "The resulting model was patented and functional: it could program a car to respond to gestures in real time — for example, waving at the car would make it wave back, using Clearmotion's active suspension technology.",
    ],
    tools: ["Machine Learning", "Python", "Active Suspension Systems"],
    images: [],
    links: {},
    featured: true,
    needsDetail: false,
  },
];
