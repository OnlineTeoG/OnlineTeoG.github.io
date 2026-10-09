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

/* Tags are cross-cutting labels. A project can carry several, so a build
   can be both "Star Wars" and "Mini-Build". The Projects page turns every
   tag in use into a clickable filter. Order here = display order. */
const TAGS = [
  { id: "lego", label: "LEGO" },
  { id: "technic", label: "Technic" },
  { id: "star-wars", label: "Star Wars" },
  { id: "spacecraft", label: "Spacecraft" },
  { id: "aircraft", label: "Aircraft" },
  { id: "aviation", label: "Aviation" },
  { id: "warship", label: "Ships" },
  { id: "vehicle", label: "Vehicles" },
  { id: "mini-build", label: "Mini-Build" },
  { id: "diorama", label: "Diorama" },
  { id: "moc", label: "Original Design" },
  { id: "cad", label: "CAD" },
  { id: "robotics", label: "Robotics" },
  { id: "research", label: "Research" },
  { id: "fabrication", label: "Fabrication" },
  { id: "woodworking", label: "Woodworking" },
];

const PROJECTS = [
  {
    slug: "venator-star-destroyer",
    title: "Venator-Class Star Destroyer",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "moc"],
    date: "2026",
    summary:
      "A large scratch-built Venator-class Star Destroyer — the Republic attack cruiser from the Clone Wars — in light grey with red command stripes.",
    description: [
      "A scratch-built LEGO model of the Venator-class Star Destroyer, the Republic's main capital ship through the Clone Wars. It's an original build rather than a set: the wedge hull, the twin dorsal command towers, and the long red spine stripes are all worked out in brick from reference images.",
      "Add your own notes here — rough length in studs, how you handled the pointed bow and the dorsal hangar spine, part count, and how long it took. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Scale Modeling", "MOC Design"],
    images: [
      { src: "assets/images/venator-star-destroyer/venator-1.jpg", caption: "Full side profile" },
      { src: "assets/images/venator-star-destroyer/venator-2.jpg", caption: "Bow, three-quarter view" },
      { src: "assets/images/venator-star-destroyer/venator-3.jpg", caption: "Dorsal spine and command towers" },
      { src: "assets/images/venator-star-destroyer/venator-4.jpg", caption: "On its display stand" },
    ],
    references: [
      {
        src: "assets/images/venator-star-destroyer/reference-venator.jpg",
        caption: "Reference — Venator-class Star Destroyer",
      },
    ],
    links: {},
    featured: true,
    needsDetail: true,
  },
  {
    slug: "technic-experimental-floatplane",
    title: "Experimental Floatplane — LEGO Technic",
    category: "lego",
    tags: ["lego", "technic", "aircraft", "aviation", "moc"],
    date: "2026",
    summary:
      "A scratch-built LEGO Technic bush plane in the spirit of a Piper Cub — currently on floats, with working ailerons, flaps, and elevator.",
    description: [
      "A scratch-built LEGO Technic floatplane. It isn't a replica of any one airplane — it's an experimental design of my own, laid out in the spirit of a Piper Cub and the Cub-style bush planes that came after it: a high strut-braced wing, a squared-off fuselage, and a big slow-turning prop up front. Right now it's rigged as a floatplane, sitting on a pair of floats instead of tires.",
      "The goal was working controls, not just the right silhouette. The ailerons, flaps, and elevator all actually move. That drove the whole internal layout — the wing had to be a frame with room to run linkages out to the hinge lines rather than a solid panel, and the elevator run had to travel the length of the fuselage to the tail without fouling anything. Flaps and ailerons share the same trailing edge, so the span is split and each surface is hinged independently, with enough clearance that neither binds against the other at full deflection.",
      "The interesting problems were all about load paths and slack. Struts make the high wing easy — that's why the real Cub uses them — but floats put the airplane's whole weight into two narrow mounts hanging well below the fuselage, and the model is top-heavy on them, so the float pylons carry more bracing than they look like they need. The controls were harder. Technic geometry has almost no slack in it: a linkage that swings freely at neutral will bind at full travel if a hinge sits a stud off. Most of the iteration in the build went into hinge placement, getting each surface to reach full deflection without jamming.",
    ],
    tools: ["LEGO Technic", "Mechanical Linkages", "Scale Modeling", "General Aviation"],
    images: [
      { src: "assets/images/technic-aircraft/floatplane-2.jpg", caption: "On floats, three-quarter view" },
      { src: "assets/images/technic-aircraft/floatplane-3.jpg", caption: "Head-on, showing the float pylons" },
      { src: "assets/images/technic-aircraft/floatplane-4.jpg", caption: "Rear three-quarter view" },
      { src: "assets/images/technic-aircraft/floatplane-5.jpg", caption: "Head-on with wheeled gear" },
      { src: "assets/images/technic-aircraft/floatplane-6.jpg", caption: "Side view with wheeled gear" },
      { src: "assets/images/technic-aircraft/floatplane-7.jpg", caption: "Three-quarter view with wheeled gear" },
    ],
    videos: [
      { src: "assets/images/technic-aircraft/floatplane-video.mp4", poster: "assets/images/technic-aircraft/floatplane-video-poster.jpg", caption: "Working the control surfaces" },
    ],
    links: {},
    featured: true,
  },
  {
    slug: "at-at-hoth-assault",
    title: "AT-AT Hoth Assault Diorama",
    category: "lego",
    tags: ["lego", "star-wars", "diorama", "technic", "moc"],
    summary:
      "A Battle of Hoth diorama built around an AT-AT walker, with a hand-cranked Technic mechanism housed in the backdrop.",
    description: [
      "A diorama of the AT-AT assault on Echo Base from The Empire Strikes Back. A grey AT-AT walker stands on a white snow base framed by a tall backdrop, with snowspeeders and trench details in the foreground.",
      "The back of the backdrop hides a Technic gear train, and the video shows it being cranked by hand. Add your notes here: what the mechanism moves, the gearing, and what was hardest to get working. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "LEGO Technic", "Gear Trains", "Diorama Design"],
    images: [
      { src: "assets/images/at-at-hoth-assault/at-at-hoth-assault-1.jpg", caption: "AT-AT advancing across the snow base" },
      { src: "assets/images/at-at-hoth-assault/at-at-hoth-assault-2.jpg", caption: "Front view with the backdrop" },
      { src: "assets/images/at-at-hoth-assault/at-at-hoth-assault-3.jpg", caption: "Side view of the walker and trench" },
      { src: "assets/images/at-at-hoth-assault/at-at-hoth-assault-4.jpg", caption: "Rear view showing the gear mechanism" },
    ],
    references: [
      { src: "assets/images/at-at-hoth-assault/reference.jpg", caption: "Reference: AT-AT assault on Hoth" },
    ],
    videos: [
      { src: "assets/images/at-at-hoth-assault/video.mp4", poster: "assets/images/at-at-hoth-assault/video-poster.jpg", caption: "The mechanism in action" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "lambda-shuttle-landing",
    title: "Lambda Shuttle Landing Diorama",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "diorama", "technic", "moc"],
    summary:
      "An Imperial Lambda-class shuttle touching down on a jungle landing pad, with wings that fold as it lands.",
    description: [
      "A diorama of an Imperial Lambda-class shuttle landing in a jungle clearing, with palm trees, foliage and water around a raised landing pad. The shuttle rides on a black Technic frame, and the video shows the landing and wing-fold motion being operated by hand.",
      "Add your notes here: how the landing and wing-fold mechanism works, and how the base is built. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "LEGO Technic", "Mechanisms", "Diorama Design"],
    images: [
      { src: "assets/images/lambda-shuttle-landing/lambda-shuttle-landing-1.jpg", caption: "Shuttle on the landing pad" },
      { src: "assets/images/lambda-shuttle-landing/lambda-shuttle-landing-2.jpg", caption: "Wings raised, three-quarter view" },
      { src: "assets/images/lambda-shuttle-landing/lambda-shuttle-landing-3.jpg", caption: "Jungle setting and water" },
      { src: "assets/images/lambda-shuttle-landing/lambda-shuttle-landing-4.jpg", caption: "Close-up of the support frame" },
    ],
    references: [
      { src: "assets/images/lambda-shuttle-landing/reference.jpg", caption: "Reference: Lambda-class shuttle" },
    ],
    videos: [
      { src: "assets/images/lambda-shuttle-landing/video.mp4", poster: "assets/images/lambda-shuttle-landing/video-poster.jpg", caption: "Landing sequence" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "at-at-walker",
    title: "AT-AT Walker",
    category: "lego",
    tags: ["lego", "star-wars", "vehicle", "moc"],
    summary:
      "A free-standing AT-AT walker with an opening troop bay, built to stand on four slender legs.",
    description: [
      "A LEGO AT-AT walker from The Empire Strikes Back. The body sits high on four jointed legs, and the roof panels lift off to show the troop compartment inside.",
      "Add your notes here: how you kept the legs stiff enough to carry the body, the scale, and part count. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Scale Modeling", "MOC Design"],
    images: [
      { src: "assets/images/at-at-walker/at-at-walker-1.jpg", caption: "Side profile" },
      { src: "assets/images/at-at-walker/at-at-walker-2.jpg", caption: "Three-quarter view" },
      { src: "assets/images/at-at-walker/at-at-walker-3.jpg", caption: "Roof panel opened" },
      { src: "assets/images/at-at-walker/at-at-walker-4.jpg", caption: "Troop bay interior" },
      { src: "assets/images/at-at-walker/at-at-walker-5.jpg", caption: "Side view with the bay open" },
    ],
    references: [
      { src: "assets/images/at-at-walker/reference.jpg", caption: "Reference: AT-AT walker" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "imperial-star-destroyer",
    title: "Imperial Star Destroyer",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "moc"],
    summary:
      "An Imperial-class Star Destroyer on an angled display stand.",
    description: [
      "A LEGO Imperial-class Star Destroyer mounted on an angled display stand, with the wedge hull, the command tower and the blue engine glow at the stern.",
      "Add your notes here: how you built the angled hull plates, how the stand attaches, and the size. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Scale Modeling", "MOC Design"],
    images: [
      { src: "assets/images/imperial-star-destroyer/imperial-star-destroyer-1.jpg", caption: "On its display stand" },
      { src: "assets/images/imperial-star-destroyer/imperial-star-destroyer-2.jpg", caption: "Side view" },
      { src: "assets/images/imperial-star-destroyer/imperial-star-destroyer-3.jpg", caption: "Three-quarter view from above" },
      { src: "assets/images/imperial-star-destroyer/imperial-star-destroyer-4.jpg", caption: "Stern and engines" },
    ],
    references: [
      { src: "assets/images/imperial-star-destroyer/reference.jpg", caption: "Reference: Imperial-class Star Destroyer" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "six-legged-technic-walker",
    title: "Six-Legged Technic Walker",
    category: "lego",
    tags: ["lego", "technic", "star-wars", "moc"],
    summary:
      "A hand-cranked Technic walker that steps on six legs, possibly the walking base for an AT-TE.",
    description: [
      "A LEGO Technic walking mechanism with six legs driven from a single crank. The video shows it being cranked so the legs step in sequence, then turned over to show the gearing underneath.",
      "Add your notes here: what this is meant to become (the folder had an AT-TE reference), how the leg linkage works, and how the legs are phased. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO Technic", "Walking Linkages", "Gear Trains"],
    images: [
      { src: "assets/images/six-legged-technic-walker/six-legged-technic-walker-1.jpg", caption: "Standing on its six legs" },
      { src: "assets/images/six-legged-technic-walker/six-legged-technic-walker-2.jpg", caption: "Underside, showing the gear train" },
    ],
    references: [
      { src: "assets/images/six-legged-technic-walker/reference.jpg", caption: "Reference: AT-TE walker" },
    ],
    videos: [
      { src: "assets/images/six-legged-technic-walker/video.mp4", poster: "assets/images/six-legged-technic-walker/video-poster.jpg", caption: "Walking under hand-crank power" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "x-wing",
    title: "X-Wing Starfighter",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A small X-Wing with open S-foils, posed in flight on a display stand.",
    description: [
      "A small-scale LEGO X-Wing with its S-foils locked in attack position, mounted on a flight stand.",
      "Add your notes here: the scale, how the wings are angled, and whether they open and close. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "MOC Design"],
    images: [
      { src: "assets/images/x-wing/x-wing-1.jpg", caption: "On a flight stand" },
      { src: "assets/images/x-wing/x-wing-2.jpg", caption: "Front view" },
    ],
    references: [
      { src: "assets/images/x-wing/reference-1.jpg", caption: "Reference: X-Wing" },
      { src: "assets/images/x-wing/reference-2.jpg", caption: "Reference: X-Wing in a hangar" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "micro-x-wing",
    title: "Micro X-Wing",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "An X-Wing reduced to a handful of bricks, with a yellow astromech behind the cockpit.",
    description: [
      "A micro-scale LEGO X-Wing with the four wings and a yellow astromech droid behind the cockpit.",
      "Add your notes here: the part count and what details you chose to keep at this size. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/micro-x-wing/micro-x-wing-1.jpg", caption: "Micro X-Wing" },
    ],
    references: [
      { src: "assets/images/micro-x-wing/reference.jpg", caption: "Reference: X-Wing" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "y-wing",
    title: "Y-Wing Starfighter",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A blue-and-white Y-Wing on a flight stand, with its twin engine nacelles.",
    description: [
      "A small-scale LEGO Y-Wing in blue and white, with the long twin engine nacelles and the cockpit up front, mounted on a flight stand.",
      "Add your notes here: the scale and how you built the nacelles. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "MOC Design"],
    images: [
      { src: "assets/images/y-wing/y-wing-1.jpg", caption: "On a flight stand" },
      { src: "assets/images/y-wing/y-wing-2.jpg", caption: "Rear view" },
      { src: "assets/images/y-wing/y-wing-3.jpg", caption: "Top view" },
    ],
    references: [
      { src: "assets/images/y-wing/reference.jpg", caption: "Reference: Y-Wing" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "u-wing",
    title: "U-Wing Gunship",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A U-Wing from Rogue One on a flight stand, with its swept wings.",
    description: [
      "A small-scale LEGO U-Wing in white and blue, with the forward-swept wings and the long troop bay, mounted on a flight stand.",
      "Add your notes here: the scale and whether the wings sweep. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "MOC Design"],
    images: [
      { src: "assets/images/u-wing/u-wing-1.jpg", caption: "On a flight stand" },
      { src: "assets/images/u-wing/u-wing-2.jpg", caption: "Wings swept" },
      { src: "assets/images/u-wing/u-wing-3.jpg", caption: "Side view" },
    ],
    references: [
      { src: "assets/images/u-wing/reference.jpg", caption: "Reference: U-Wing" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "a-wing",
    title: "A-Wing Starfighter",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A small red-and-white A-Wing with the wedge-shaped hull.",
    description: [
      "A small LEGO A-Wing in red and white, capturing the flat wedge hull and the twin engines.",
      "Add your notes here: the scale and how you got the wedge shape. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/a-wing/a-wing-1.jpg", caption: "A-Wing" },
    ],
    references: [
      { src: "assets/images/a-wing/reference.jpg", caption: "Reference: A-Wing" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "tie-fighter",
    title: "TIE Fighter",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A TIE Fighter with its hexagonal wing panels and ball cockpit.",
    description: [
      "A small LEGO TIE Fighter, with the dark hexagonal solar panels on either side of the round cockpit.",
      "Add your notes here: the scale and how the wings attach. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/tie-fighter/tie-fighter-1.jpg", caption: "Front view" },
      { src: "assets/images/tie-fighter/tie-fighter-2.jpg", caption: "Side view" },
    ],
    references: [
      { src: "assets/images/tie-fighter/reference.jpg", caption: "Reference: TIE Fighter" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "micro-tie-fighter",
    title: "Micro TIE Fighter",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A TIE Fighter in just a few bricks.",
    description: [
      "A micro-scale LEGO TIE Fighter.",
      "Add your notes here: the part count. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/micro-tie-fighter/micro-tie-fighter-1.jpg", caption: "Micro TIE Fighter" },
    ],
    references: [
      { src: "assets/images/micro-tie-fighter/reference.jpg", caption: "Reference: TIE Fighter" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "lambda-shuttle",
    title: "Lambda-Class Shuttle",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "A small Imperial Lambda-class shuttle with the tall dorsal fin, shown in flight and with wings folded.",
    description: [
      "A small LEGO Lambda-class shuttle, shown on a stand with its wings down for flight, and with its wings folded up for landing.",
      "Add your notes here: the scale and whether the wings fold. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/lambda-shuttle/lambda-shuttle-1.jpg", caption: "In flight configuration" },
      { src: "assets/images/lambda-shuttle/lambda-shuttle-2.jpg", caption: "Wings folded" },
    ],
    references: [
      { src: "assets/images/lambda-shuttle/reference.jpg", caption: "Reference: Lambda-class shuttle" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "at-st",
    title: "AT-ST Walker",
    category: "lego",
    tags: ["lego", "star-wars", "vehicle", "mini-build", "moc"],
    summary:
      "A small AT-ST scout walker on its two legs.",
    description: [
      "A small LEGO AT-ST scout walker, with the boxy head on two jointed legs.",
      "Add your notes here: the scale and how it stays balanced. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/at-st/at-st-1.jpg", caption: "AT-ST" },
    ],
    references: [
      { src: "assets/images/at-st/reference.jpg", caption: "Reference: AT-ST" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "micro-at-st",
    title: "Micro AT-ST",
    category: "lego",
    tags: ["lego", "star-wars", "vehicle", "mini-build", "moc"],
    summary:
      "An AT-ST in just a few bricks.",
    description: [
      "A micro-scale LEGO AT-ST.",
      "Add your notes here: the part count. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/micro-at-st/micro-at-st-1.jpg", caption: "Micro AT-ST" },
    ],
    references: [
      { src: "assets/images/micro-at-st/reference.jpg", caption: "Reference: AT-ST" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "micro-star-destroyer",
    title: "Micro Star Destroyer",
    category: "lego",
    tags: ["lego", "star-wars", "spacecraft", "mini-build", "moc"],
    summary:
      "An Imperial Star Destroyer reduced to a palm-sized wedge.",
    description: [
      "A micro-scale LEGO Imperial Star Destroyer.",
      "Add your notes here: the part count. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/micro-star-destroyer/micro-star-destroyer-1.jpg", caption: "Micro Star Destroyer" },
    ],
    references: [
      { src: "assets/images/micro-star-destroyer/reference.jpg", caption: "Reference: Imperial-class Star Destroyer" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "project-hail-mary",
    title: "Project Hail Mary Spacecraft",
    category: "lego",
    tags: ["lego", "spacecraft", "moc"],
    summary:
      "The Hail Mary from Andy Weir's novel, with its long spin tether and engine cluster, built on a display stand.",
    description: [
      "A LEGO model of the Hail Mary, the interstellar ship from Andy Weir's novel Project Hail Mary. The build has the cluster of white engine pods, the long tether boom and the solar panel arrays, mounted on a stand.",
      "Add your notes here: how you interpreted the ship from the book and film, how the tether is supported, and the size. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Scale Modeling", "MOC Design"],
    images: [
      { src: "assets/images/project-hail-mary/project-hail-mary-1.jpg", caption: "On its stand, full length with tether" },
      { src: "assets/images/project-hail-mary/project-hail-mary-2.jpg", caption: "Top view with solar arrays" },
      { src: "assets/images/project-hail-mary/project-hail-mary-3.jpg", caption: "Engine cluster" },
      { src: "assets/images/project-hail-mary/project-hail-mary-4.jpg", caption: "Three-quarter view" },
    ],
    references: [
      { src: "assets/images/project-hail-mary/reference.jpg", caption: "Reference: the Hail Mary" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "jurassic-park-jeep",
    title: "Jurassic Park Jeep",
    category: "lego",
    tags: ["lego", "vehicle", "moc"],
    summary:
      "The red-and-white Jurassic Park tour Jeep Wrangler, with an open roll cage and oversized off-road tires.",
    description: [
      "A LEGO version of the Jurassic Park tour Jeep Wrangler in its red-and-white park livery, with an open roll cage, a spare tire and chunky off-road wheels.",
      "Add your notes here: scale, whether the steering or suspension works, and how you got the livery. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Scale Modeling", "MOC Design"],
    images: [
      { src: "assets/images/jurassic-park-jeep/jurassic-park-jeep-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/jurassic-park-jeep/jurassic-park-jeep-2.jpg", caption: "Front view" },
      { src: "assets/images/jurassic-park-jeep/jurassic-park-jeep-3.jpg", caption: "Rear view" },
    ],
    references: [
      { src: "assets/images/jurassic-park-jeep/reference.jpg", caption: "Reference: Jurassic Park Jeep Wrangler" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "rocket-league-cars",
    title: "Rocket League Octane and Fennec",
    category: "lego",
    tags: ["lego", "vehicle", "mini-build", "moc"],
    summary:
      "Two of the best-known cars from Rocket League, the Octane and the Fennec, built as a matched pair.",
    description: [
      "LEGO versions of the Octane and the Fennec, two of the most popular cars in the game Rocket League, built at the same scale so they can sit side by side.",
      "Add your notes here: how you captured each car's shape at this size and any features like the boost nozzle. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "MOC Design"],
    images: [
      { src: "assets/images/rocket-league-cars/rocket-league-cars-1.jpg", caption: "Octane and Fennec, three-quarter view" },
      { src: "assets/images/rocket-league-cars/rocket-league-cars-2.jpg", caption: "Side by side" },
      { src: "assets/images/rocket-league-cars/rocket-league-cars-3.jpg", caption: "Rear view" },
      { src: "assets/images/rocket-league-cars/rocket-league-cars-4.jpg", caption: "Top view" },
    ],
    references: [
      { src: "assets/images/rocket-league-cars/reference.jpg", caption: "Reference: Octane and Fennec" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "technic-mechanism",
    title: "LEGO Technic Motorized Mechanism",
    category: "lego",
    tags: ["lego", "technic", "moc"],
    summary:
      "A large motorized Technic build with a dense internal frame and gearing.",
    description: [
      "A large LEGO Technic build with a motor, a beam frame and gearing packed inside a red, white and black shell. The video shows it being handled and worked through its motion.",
      "Add your notes here: what this machine does, how it is powered and driven, and what you learned building it. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO Technic", "Gear Trains", "Motorization"],
    images: [
      { src: "assets/images/technic-mechanism/technic-mechanism-1.jpg", caption: "Front view with motor" },
      { src: "assets/images/technic-mechanism/technic-mechanism-2.jpg", caption: "Side view of the frame" },
    ],
    videos: [
      { src: "assets/images/technic-mechanism/video.mp4", poster: "assets/images/technic-mechanism/video-poster.jpg", caption: "The mechanism in motion" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "technic-chassis",
    title: "LEGO Technic Car Chassis",
    category: "lego",
    tags: ["lego", "technic", "vehicle", "moc"],
    summary:
      "A bare Technic car chassis with suspension and steering, built without bodywork so the mechanics stay visible.",
    description: [
      "A LEGO Technic rolling chassis with no bodywork, so the suspension, steering and drivetrain are all visible. The video shows the steering and suspension being worked by hand.",
      "Add your notes here: which systems work (steering, suspension, differential), and what you were testing with this build. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO Technic", "Suspension Design", "Drivetrain"],
    images: [
      { src: "assets/images/technic-chassis/technic-chassis-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/technic-chassis/technic-chassis-2.jpg", caption: "Front suspension and steering" },
    ],
    videos: [
      { src: "assets/images/technic-chassis/video.mp4", poster: "assets/images/technic-chassis/video-poster.jpg", caption: "Steering and suspension demo" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "black-technic-build",
    title: "Black Technic Build",
    category: "lego",
    tags: ["lego", "technic", "moc"],
    summary:
      "A black Technic build with a gear-driven mechanism on its back.",
    description: [
      "A LEGO Technic build in black with white details at the front and a gear on its back. The video shows the gear being turned by hand to drive the mechanism.",
      "Add your notes here: what this build is, and what the gear drives. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO Technic", "Gear Trains"],
    images: [
      { src: "assets/images/black-technic-build/black-technic-build-1.jpg", caption: "Front view" },
    ],
    videos: [
      { src: "assets/images/black-technic-build/video.mp4", poster: "assets/images/black-technic-build/video-poster.jpg", caption: "Mechanism demo" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "shuttle-carrier",
    title: "Shuttle Carrier 747",
    category: "lego",
    tags: ["lego", "aircraft", "aviation", "spacecraft", "mini-build", "moc"],
    summary:
      "A micro-scale Shuttle Carrier Aircraft: a 747 with the Space Shuttle orbiter mounted on its back, posed in flight.",
    description: [
      "I keep coming back to mini-builds because of the constraint. A big set hands you the exact part for every curve; a mini-build gives you a handful of ordinary bricks and asks you to suggest the whole thing anyway. Working out which few details actually carry the identity of an object — and which ones you can throw away without anyone noticing — is the part that excites me. It's the most purely creative building I do, and the small ones take the most thinking per brick.",
      "The Shuttle Carrier is the one I'm happiest with. It's a single build in two pieces: the orbiter rides on the 747's spine the way NASA ferried the shuttles cross-country, and lifts off so each airframe reads on its own. The problem to solve was the mount — it had to hold the shuttle firmly enough to pick the whole stack up by the 747, and still let the orbiter lift off cleanly without taking a row of the carrier's fuselage with it.",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Parts Efficiency"],
    images: [
      { src: "assets/images/shuttle-carrier/shuttle-carrier-1.jpg", caption: "Mated stack in flight on its stand" },
      { src: "assets/images/shuttle-carrier/shuttle-carrier-2.jpg", caption: "Three-quarter view" },
    ],
    references: [
      { src: "assets/images/shuttle-carrier/reference.jpg", caption: "Reference: Shuttle Carrier Aircraft" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "dauntless",
    title: "Dauntless Dive Bomber",
    category: "lego",
    tags: ["lego", "aircraft", "aviation", "mini-build", "moc"],
    summary:
      "A small dark-grey WWII carrier aircraft with a big three-blade propeller.",
    description: [
      "A small LEGO WWII-era carrier aircraft in dark grey, with a three-blade propeller and folded-down wings.",
      "Add your notes here: which aircraft this is (the folder's reference was labeled Dauntless) and how you built it. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Aviation"],
    images: [
      { src: "assets/images/dauntless/dauntless-1.jpg", caption: "Three-quarter view" },
    ],
    references: [
      { src: "assets/images/dauntless/reference.jpg", caption: "Reference: Dauntless" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "f4u-corsair",
    title: "F4U Corsair",
    category: "lego",
    tags: ["lego", "aircraft", "aviation", "mini-build", "moc"],
    summary:
      "A small grey WWII fighter modeled on the F4U Corsair.",
    description: [
      "A small LEGO WWII fighter in grey, using the F4U Corsair as its reference.",
      "Add your notes here: how you handled the Corsair's gull wing at this scale. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Aviation"],
    images: [
      { src: "assets/images/f4u-corsair/f4u-corsair-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/f4u-corsair/f4u-corsair-2.jpg", caption: "Top view" },
    ],
    references: [
      { src: "assets/images/f4u-corsair/reference.jpg", caption: "Reference: F4U Corsair" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "red-propeller-plane",
    title: "Red Propeller Plane",
    category: "lego",
    tags: ["lego", "aircraft", "aviation", "mini-build", "moc"],
    summary:
      "A small red-and-white propeller plane posed in flight on a display stand.",
    description: [
      "A small LEGO propeller plane in red and white, mounted in flight on a stand.",
      "Add your notes here: which aircraft it's based on. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Aviation"],
    images: [
      { src: "assets/images/red-propeller-plane/red-propeller-plane-1.jpg", caption: "On its display stand" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "mini-airliner",
    title: "Mini Airliner",
    category: "lego",
    tags: ["lego", "aircraft", "aviation", "mini-build", "moc"],
    summary:
      "A small white airliner with underwing engines and landing gear.",
    description: [
      "A small LEGO airliner in white and grey, with underwing engines and landing gear.",
      "Add your notes here: which airliner it's based on. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Aviation"],
    images: [
      { src: "assets/images/mini-airliner/mini-airliner-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/mini-airliner/mini-airliner-2.jpg", caption: "Front view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "grey-jet",
    title: "Grey Jet",
    category: "lego",
    tags: ["lego", "aircraft", "aviation", "mini-build", "moc"],
    summary:
      "A small grey jet built from Technic beams and plates.",
    description: [
      "A small grey jet aircraft built mostly from Technic beams.",
      "Add your notes here: which aircraft it's based on. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Aviation"],
    images: [
      { src: "assets/images/grey-jet/grey-jet-1.jpg", caption: "Three-quarter view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "formula-race-car",
    title: "Formula Race Car",
    category: "lego",
    tags: ["lego", "vehicle", "mini-build", "moc"],
    summary:
      "A micro-scale formula car in red and grey, with wings overhanging front and rear.",
    description: [
      "At this scale you can't reproduce a shape, only imply it, so the job becomes choosing what to keep. A formula car lives in the wings overhanging front and rear and the wheels standing outside the bodywork.",
      "Add your notes here: the part count and which car inspired it. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Parts Efficiency"],
    images: [
      { src: "assets/images/formula-race-car/formula-race-car-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/formula-race-car/formula-race-car-2.jpg", caption: "Top view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "red-yellow-race-car",
    title: "Red and Yellow Race Car",
    category: "lego",
    tags: ["lego", "vehicle", "mini-build", "moc"],
    summary:
      "A small open-wheel race car in red and yellow with a raised rear wing.",
    description: [
      "A small LEGO open-wheel race car in red and yellow, with a wide front wing and a raised rear wing.",
      "Add your notes here: which car inspired it. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/red-yellow-race-car/red-yellow-race-car-1.jpg", caption: "Three-quarter view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "semi-truck",
    title: "Semi Truck and Trailer",
    category: "lego",
    tags: ["lego", "vehicle", "mini-build", "moc"],
    summary:
      "A small yellow semi truck pulling a grey box trailer.",
    description: [
      "A small LEGO semi truck with a yellow cab and a grey box trailer.",
      "Add your notes here: the scale and whether the trailer detaches. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/semi-truck/semi-truck-1.jpg", caption: "Truck and trailer" },
      { src: "assets/images/semi-truck/semi-truck-2.jpg", caption: "Front view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "off-road-rover",
    title: "Off-Road Rover",
    category: "lego",
    tags: ["lego", "vehicle", "mini-build", "moc"],
    summary:
      "A small white-and-red off-road vehicle with a roof light bar.",
    description: [
      "A small LEGO off-road vehicle in white and red, with a light bar on the roof and a spare wheel on the back.",
      "Add your notes here: what vehicle it's based on. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/off-road-rover/off-road-rover-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/off-road-rover/off-road-rover-2.jpg", caption: "Rear view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "ocean-liner",
    title: "Ocean Liner",
    category: "lego",
    tags: ["lego", "warship", "mini-build", "moc"],
    summary:
      "A micro-scale ocean liner in black, white and red, with three raked funnels.",
    description: [
      "At this scale you can't reproduce a shape, only imply it, so the job becomes choosing what to keep. An ocean liner lives in the spacing and rake of its funnels.",
      "Add your notes here: which liner inspired it and the part count. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Parts Efficiency"],
    images: [
      { src: "assets/images/ocean-liner/ocean-liner-1.jpg", caption: "Three-quarter view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "oared-galley",
    title: "Oared Galley",
    category: "lego",
    tags: ["lego", "warship", "mini-build", "moc"],
    summary:
      "A micro-scale galley with a square sail, a bank of oars and a ram at the bow.",
    description: [
      "At this scale you can't reproduce a shape, only imply it, so the job becomes choosing what to keep. A galley lives in the oars and the ram.",
      "Add your notes here: the part count and what era of galley it represents. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design", "Parts Efficiency"],
    images: [
      { src: "assets/images/oared-galley/oared-galley-1.jpg", caption: "Three-quarter view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "galleon",
    title: "Galleon",
    category: "lego",
    tags: ["lego", "warship", "mini-build", "moc"],
    summary:
      "A small two-masted sailing ship in brown and tan with red pennants.",
    description: [
      "A small LEGO sailing ship in brown and tan, with two masts, square sails and red pennants.",
      "Add your notes here: what ship or era it represents. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/galleon/galleon-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/galleon/galleon-2.jpg", caption: "Stern view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "sailing-warship",
    title: "Sailing Warship",
    category: "lego",
    tags: ["lego", "warship", "mini-build", "moc"],
    summary:
      "A larger brown-hulled sailing ship with a high stern and a row of guns.",
    description: [
      "A LEGO sailing warship with a tall brown hull, a high stern, tan sails and a row of guns along the side.",
      "Add your notes here: what ship it represents. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/sailing-warship/sailing-warship-1.jpg", caption: "Three-quarter view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "soccer-stadium",
    title: "Soccer Stadium",
    category: "lego",
    tags: ["lego", "mini-build", "moc"],
    summary:
      "A micro-scale soccer stadium in red and blue, with stands wrapped around a green pitch.",
    description: [
      "A small LEGO soccer stadium with red and blue stands around a green pitch.",
      "Add your notes here: which stadium it is. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/soccer-stadium/soccer-stadium-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/soccer-stadium/soccer-stadium-2.jpg", caption: "View into the pitch" },
      { src: "assets/images/soccer-stadium/soccer-stadium-3.jpg", caption: "From above" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "walled-courtyard",
    title: "Walled Courtyard",
    category: "lego",
    tags: ["lego", "mini-build", "moc"],
    summary:
      "A small walled courtyard with white spires at the corners.",
    description: [
      "A small LEGO walled courtyard with white spires at the corners, a railing along one side and a red-and-black floor.",
      "Add your notes here: what this courtyard represents. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/walled-courtyard/walled-courtyard-1.jpg", caption: "Three-quarter view" },
      { src: "assets/images/walled-courtyard/walled-courtyard-2.jpg", caption: "Side view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "chess-set",
    title: "Brick-Built Chess Set",
    category: "lego",
    tags: ["lego", "mini-build", "moc"],
    summary:
      "A full chess set built from bricks, with board and pieces.",
    description: [
      "A LEGO chess set with a black-and-white board and a full set of brick-built pieces.",
      "Add your notes here: whether it's playable and how you told the pieces apart. (This description is a placeholder for you to edit.)",
    ],
    tools: ["LEGO", "Micro-Scale Design"],
    images: [
      { src: "assets/images/chess-set/chess-set-1.jpg", caption: "Starting position" },
      { src: "assets/images/chess-set/chess-set-2.jpg", caption: "Three-quarter view" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "wind-turbine-competition",
    title: "Competition Wind Turbine",
    category: "competition",
    tags: ["cad", "fabrication", "moc"],
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
    tags: ["cad", "robotics"],
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
    tags: ["research", "cad"],
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
  {
    slug: "lufthansa-747",
    title: "Lufthansa 747 Wall Lamp",
    category: "personal",
    tags: ["aircraft", "aviation", "fabrication"],
    summary:
      "A Lufthansa Boeing 747 model that mounts on the wall and lights up as a room lamp.",
    description: [
      "A white Boeing 747 model in Lufthansa livery that hangs on the wall and glows as a lamp, with the power cable running down from the tail.",
      "Add your notes here: how it was made (printed, kit, or modified), how the lighting is wired, and the size. (This description is a placeholder for you to edit.)",
    ],
    tools: ["Fabrication", "Lighting", "Aviation"],
    images: [
      { src: "assets/images/lufthansa-747/lufthansa-747-1.jpg", caption: "Lufthansa 747, side view" },
      { src: "assets/images/lufthansa-747/lufthansa-747-2.jpg", caption: "Front view" },
      { src: "assets/images/lufthansa-747/lufthansa-747-3.jpg", caption: "Top view" },
      { src: "assets/images/lufthansa-747/lufthansa-747-4.jpg", caption: "Mounted on the wall" },
      { src: "assets/images/lufthansa-747/lufthansa-747-5.jpg", caption: "Lit up as a lamp" },
      { src: "assets/images/lufthansa-747/lufthansa-747-6.jpg", caption: "In the room" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
  {
    slug: "poker-chip-case",
    title: "Laser-Cut Poker Chip Case",
    category: "fabrication",
    tags: ["fabrication", "woodworking", "moc"],
    summary:
      "A laser-cut plywood case with finger joints and a hinged lid, holding a set of engraved wooden poker chips and a deck of cards.",
    description: [
      "A plywood box cut on a laser cutter, assembled with finger joints and a hinged lid. Inside are rows of wooden poker chips, each engraved with a different pattern, and a slot for a deck of cards.",
      "Add your notes here: what software you designed it in, the material thickness, how you sized the chip rows, and how many chips it holds. (This description is a placeholder for you to edit.)",
    ],
    tools: ["Laser Cutting", "CAD", "Woodworking"],
    images: [
      { src: "assets/images/poker-chip-case/poker-chip-case-1.jpg", caption: "Open, with sample chips in front" },
      { src: "assets/images/poker-chip-case/poker-chip-case-2.jpg", caption: "Chip rows and card slot" },
      { src: "assets/images/poker-chip-case/poker-chip-case-3.jpg", caption: "Closed case" },
    ],
    links: {},
    featured: false,
    needsDetail: true,
  },
];
