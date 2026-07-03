import { Chapter } from "../types";
import { sample } from "./curves";

const id = "ch17";

export const ch17: Chapter = {
  id,
  number: 17,
  title: "Electromagnetic Forces",
  syllabus: "H2 Physics 9478",
  icon: "magnet",
  color: 5,
  description:
    "Magnetic fields of currents, forces on conductors and moving charges, Fleming's left-hand rule, circular motion and velocity selectors.",
  sections: [
    "Concept of a Magnetic Field",
    "Magnetic Fields Due to Currents",
    "Force on a Current-Carrying Conductor",
    "Forces Between Current-Carrying Conductors",
    "Force on a Moving Charge",
    "Motion of a Charged Particle in a Magnetic Field",
  ],
  learningOutcomes: [
    "Understand a magnetic field as a field of force produced by current-carrying conductors or permanent magnets.",
    "Sketch field lines due to a long straight wire, a flat circular coil and a long solenoid.",
    "Use B = μ₀I/2πd, B = μ₀NI/2r and B = μ₀nI for the three standard geometries.",
    "Understand the effect of a ferrous core on a solenoid's field.",
    "Understand that a current-carrying conductor in a magnetic field may experience a force.",
    "Use F = BIL sinθ with Fleming's left-hand rule.",
    "Define magnetic flux density via the force per unit current per unit length on a perpendicular conductor.",
    "Understand current-balance measurement of flux density.",
    "Explain and predict forces between current-carrying conductors.",
    "Use F = BQv sinθ for moving charges and predict directions.",
    "Analyse deflections of charged particles in electric and magnetic fields.",
    "Explain velocity selection using crossed electric and magnetic fields.",
  ],
  quickReview: [
    "Magnetic fields come from moving charges (currents) and permanent magnets; field lines run N→S outside a magnet.",
    "Straight wire: B = μ₀I/2πd, circular loops around the wire (right-hand grip). Flat coil: B = μ₀NI/2r at centre. Solenoid: B = μ₀nI inside (n = turns per metre).",
    "Force on a conductor: F = BIL sinθ, direction by Fleming's left-hand rule (F-B-I = thumb-First finger-seCond finger).",
    "Flux density B: force per unit current per unit length on a wire perpendicular to the field. Unit: tesla.",
    "Parallel currents attract, antiparallel repel: F/L = μ₀I₁I₂/2πd.",
    "Moving charge: F = BQv sinθ, always perpendicular to v ⇒ no work done ⇒ speed constant, path circular: r = mv/BQ.",
    "Velocity selector: crossed E and B fields; undeflected when qE = Bqv ⇒ v = E/B.",
  ],
  examReview: [
    {
      heading: "Fields due to currents",
      points: [
        "Right-hand grip rule: thumb along current, fingers curl along B (straight wire); for coils/solenoids, fingers follow current, thumb gives B inside.",
        "B = μ₀I/2πd (long straight wire), B = μ₀NI/2r (centre of flat coil of N turns), B = μ₀nI (long solenoid, n = N/L).",
        "A ferrous (e.g. soft iron) core in a solenoid greatly increases B — the core is magnetised and its field adds to the solenoid's.",
        "The solenoid's internal field is uniform away from the ends; ends behave like the poles of a bar magnet.",
      ],
    },
    {
      heading: "Force on conductors",
      points: [
        "F = BIL sinθ where θ is the angle between the wire and B; maximum when perpendicular, zero when parallel.",
        "Fleming's left-hand rule: First finger Field, seCond finger Current, thuMb Motion (force).",
        "Definition of B: the force acting per unit current per unit length on a conductor placed perpendicular to the field. 1 T = 1 N A⁻¹ m⁻¹.",
        "Current balance: weigh the magnetic force on a known length to measure B.",
        "Parallel wires: each sits in the other's field. Like (parallel) currents attract; opposite currents repel; F/L = μ₀I₁I₂/2πd.",
      ],
    },
    {
      heading: "Force on moving charges",
      points: [
        "F = BQv sinθ; direction from Fleming's LHR using CONVENTIONAL current (flip for negative charges).",
        "F ⊥ v always ⇒ zero work done ⇒ kinetic energy and speed unchanged; only direction changes.",
        "Perpendicular entry ⇒ uniform circular motion: BQv = mv²/r ⇒ r = mv/BQ.",
        "Period T = 2πm/BQ is independent of speed — the cyclotron principle.",
        "Compare deflections: E-field bends a parabola (does work); B-field bends a circle (does none).",
      ],
    },
    {
      heading: "Velocity selector",
      points: [
        "Crossed fields: E gives force qE one way; B gives Bqv the other way (for the chosen geometry).",
        "Undeflected ⇒ qE = Bqv ⇒ v = E/B independent of charge and mass.",
        "Faster particles: magnetic force wins (∝ v) — deflected one way; slower: electric force wins — deflected the other.",
        "Used in mass spectrometers to feed a single speed into the deflection chamber.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "What a magnetic field is",
      body: "A magnetic field is a region where a moving charge or a current-carrying conductor experiences a force. Its sources are themselves moving charges: currents in wires, electron motion within permanent magnets. Field lines close on themselves (no magnetic monopoles) — outside a magnet they run N to S, inside S to N. Flux density B measures the field's strength through the force it exerts: defined as the force per unit current per unit length on a perpendicular conductor, giving the tesla, 1 N A⁻¹ m⁻¹.",
    },
    {
      heading: "The three standard field formulas",
      body: "A long straight wire wraps circular field lines around itself with B = μ₀I/2πd falling off as 1/d. Bending the wire into a flat coil of N turns concentrates the field at the centre: B = μ₀NI/2r. Stretching many turns into a long solenoid produces a uniform interior field B = μ₀nI that is independent of the solenoid's radius and, remarkably, of position (away from the ends). Insert a soft-iron core and the core's own alignment magnifies B enormously — the principle of the electromagnet. Keep the geometry symbols straight: d is distance from a wire, r is coil radius, n is turns PER METRE.",
    },
    {
      heading: "Why F = BIL sinθ and the current balance",
      body: "A current is a stream of drifting charges; each feels the magnetic force, and summing over all carriers in length L gives F = BIL sinθ. Only the component of B perpendicular to the wire contributes — hence sinθ. The current balance turns this into a measurement: a rigid wire frame sits on a balance in a known field; switching on current I over length L changes the balance reading by the magnetic force, so B = F/IL follows directly from the definition of flux density.",
    },
    {
      heading: "Circular motion: the magnetic force does no work",
      body: "The magnetic force on a moving charge is always perpendicular to its velocity. Perpendicular forces change direction, never speed — so a magnetic field can never do work on a charge, and kinetic energy is constant. With v ⊥ B, the constant-magnitude, always-perpendicular force is exactly the recipe for uniform circular motion: BQv = mv²/r gives r = mv/BQ. Notice the period T = 2πr/v = 2πm/BQ has no v in it: fast particles run bigger circles in the same time. Contrast the electric field, which does work and produces parabolic paths — a favourite compare-and-contrast exam question.",
    },
    {
      heading: "The velocity selector",
      body: "Cross an electric field E (say, downward force qE on a positive charge) with a magnetic field B arranged so the magnetic force Bqv points upward. The two balance only at one speed: qE = Bqv ⇒ v = E/B. Since both forces scale with q, the selected velocity is independent of charge AND mass — any particle at v = E/B sails straight through. Faster ones bend towards the magnetic force's side (Bqv grows), slower ones towards the electric side. This feeds a clean, single-speed beam into mass spectrometers, where r = mv/BQ then separates by mass-to-charge ratio.",
    },
  ],
  keyIdeas: [
    "Moving charge is the source of magnetism; field lines always close on themselves.",
    "Three geometries, three formulas: wire (1/d), coil centre, solenoid (uniform).",
    "Fleming's LHR gives every force direction; use conventional current.",
    "Magnetic forces do no work: speed constant, circular paths, r = mv/BQ.",
    "Crossed fields select speed v = E/B independent of mass and charge.",
  ],
  definitions: [
    {
      term: "Magnetic field",
      definition:
        "A region of space in which a moving charge or a current-carrying conductor experiences a force.",
    },
    {
      term: "Magnetic flux density (B)",
      definition:
        "The force acting per unit current per unit length on a conductor placed perpendicular to the magnetic field. Unit: tesla (T).",
    },
    {
      term: "The tesla",
      definition:
        "One tesla is the flux density producing a force of 1 N on each metre of a conductor carrying 1 A perpendicular to the field: 1 T = 1 N A⁻¹ m⁻¹.",
    },
    {
      term: "Fleming's left-hand rule",
      definition:
        "With thumb, first and second fingers mutually perpendicular: First finger = Field, seCond finger = conventional Current, thuMb = Motion (force).",
    },
    {
      term: "Solenoid",
      definition:
        "A long coil of wire whose interior field B = μ₀nI is uniform and parallel to the axis, where n is the number of turns per unit length.",
    },
    {
      term: "Velocity selector",
      definition:
        "A region of crossed (perpendicular) electric and magnetic fields in which only particles with speed v = E/B pass undeflected.",
    },
  ],
  misconceptions: [
    {
      myth: "The magnetic force accelerates charges to higher speeds.",
      reality:
        "The magnetic force is always perpendicular to velocity, so it does NO work: it changes direction only, never speed or kinetic energy.",
    },
    {
      myth: "A stationary charge in a magnetic field feels a force.",
      reality:
        "F = BQv sinθ = 0 when v = 0. Magnetic forces act only on MOVING charges (or currents).",
    },
    {
      myth: "Fleming's left-hand rule uses the electron's direction of motion.",
      reality:
        "The second finger points along CONVENTIONAL current — opposite to electron flow. For a moving negative charge, find the force for the equivalent conventional current and it comes out opposite to v's rule-direction.",
    },
    {
      myth: "A charged particle moving parallel to B follows a circle.",
      reality:
        "Parallel motion gives θ = 0 ⇒ F = 0: the particle travels in a straight line. Circles require a perpendicular velocity component.",
    },
    {
      myth: "Doubling a solenoid's radius changes its interior field.",
      reality:
        "B = μ₀nI has no radius dependence — only turns per metre and current matter (for an ideal long solenoid).",
    },
    {
      myth: "The velocity selector selects by charge or mass.",
      reality:
        "Both balancing forces scale with q, so v = E/B is independent of charge and mass — it selects speed alone.",
    },
    {
      myth: "Parallel currents repel like like-charges do.",
      reality:
        "Parallel (same-direction) currents ATTRACT; antiparallel currents repel — verify with the grip rule plus Fleming's LHR.",
    },
  ],
  examTips: [
    "State Fleming's LHR assignments explicitly when explaining directions — 'by Fleming's left-hand rule with B into the page and I to the right, the force is upward'.",
    "For 'define the tesla / flux density' questions, include per unit current AND per unit length AND perpendicular — all three qualifiers carry marks.",
    "In r = mv/BQ problems, check whether the question gives kinetic energy (convert via v = √(2E_k/m)) or an accelerating p.d. (qV = ½mv²).",
    "Always state that the magnetic force does no work when explaining why speed is constant.",
    "For parallel-wire questions, the field at wire 2 is due to wire 1 — never use a wire's own field on itself.",
    "Direction answers must reference the sign of the charge: electrons deflect opposite to the conventional-current prediction.",
  ],
  formulas: [
    {
      id: "f17-wire",
      chapterId: id,
      name: "Field of a long straight wire",
      expression: "B = μ₀I / 2πd",
      meaning: "Flux density at perpendicular distance d from a long straight wire.",
      variables: [
        { symbol: "B", name: "magnetic flux density", unit: "T" },
        { symbol: "μ₀", name: "permeability of free space (4π × 10⁻⁷)", unit: "H m⁻¹" },
        { symbol: "I", name: "current", unit: "A" },
        { symbol: "d", name: "perpendicular distance from wire", unit: "m" },
      ],
      conditions: "Long straight wire; field lines are concentric circles (grip rule).",
      applications: [
        "Force between parallel wires",
        "Resultant field of two wires (vector addition)",
      ],
      commonMistakes: [
        "Using r for coil radius interchangeably with d",
        "Forgetting B ∝ 1/d (not 1/d²)",
      ],
    },
    {
      id: "f17-coil",
      chapterId: id,
      name: "Field at centre of a flat coil",
      expression: "B = μ₀NI / 2r",
      meaning: "Flux density at the centre of a flat circular coil of N turns and radius r.",
      variables: [
        { symbol: "N", name: "number of turns", unit: "—" },
        { symbol: "r", name: "radius of coil", unit: "m" },
      ],
      conditions: "Flat (short) coil; value at the centre only.",
      applications: ["Helmholtz-style field calculations", "Compass-deflection experiments"],
      commonMistakes: [
        "Using diameter instead of radius",
        "Confusing with the solenoid formula",
      ],
    },
    {
      id: "f17-solenoid",
      chapterId: id,
      name: "Field inside a long solenoid",
      expression: "B = μ₀nI",
      meaning:
        "Uniform flux density inside a long solenoid with n turns per unit length.",
      variables: [
        { symbol: "n", name: "turns per unit length (N/L)", unit: "m⁻¹" },
        { symbol: "I", name: "current", unit: "A" },
      ],
      conditions:
        "Long solenoid, interior points away from the ends; independent of radius. A ferrous core multiplies B greatly.",
      applications: ["Electromagnets", "Uniform-field regions for experiments"],
      commonMistakes: [
        "Using total turns N instead of n = N/L",
        "Applying it at the ends (B halves there)",
      ],
    },
    {
      id: "f17-bil",
      chapterId: id,
      name: "Force on a current-carrying conductor",
      expression: "F = BIL sinθ",
      meaning:
        "Force on a straight conductor of length L carrying current I at angle θ to field B.",
      variables: [
        { symbol: "F", name: "force", unit: "N" },
        { symbol: "L", name: "length in the field", unit: "m" },
        { symbol: "θ", name: "angle between wire and B", unit: "°" },
      ],
      conditions:
        "Uniform B over the length; direction by Fleming's left-hand rule.",
      applications: ["Motors, current balances", "Rail/‘jumping wire' demos"],
      commonMistakes: [
        "Using the angle to the normal instead of to the field",
        "Forgetting F = 0 for a wire parallel to B",
      ],
    },
    {
      id: "f17-parallel",
      chapterId: id,
      name: "Force between parallel wires",
      expression: "F/L = μ₀I₁I₂ / 2πd",
      meaning: "Force per unit length between long parallel wires distance d apart.",
      variables: [
        { symbol: "I₁, I₂", name: "the two currents", unit: "A" },
        { symbol: "d", name: "separation", unit: "m" },
      ],
      conditions:
        "Long straight parallel wires. Same-direction currents attract; opposite repel.",
      applications: ["(Historical) definition of the ampere", "Cable-bundle forces"],
      commonMistakes: [
        "Predicting repulsion for parallel currents",
        "Using a wire's own field on itself",
      ],
    },
    {
      id: "f17-bqv",
      chapterId: id,
      name: "Force on a moving charge",
      expression: "F = BQv sinθ",
      meaning: "Force on charge Q moving at speed v at angle θ to field B.",
      variables: [
        { symbol: "Q", name: "charge", unit: "C" },
        { symbol: "v", name: "speed", unit: "m s⁻¹" },
        { symbol: "θ", name: "angle between v and B", unit: "°" },
      ],
      conditions:
        "F ⊥ both v and B; use conventional-current direction in Fleming's LHR (reverse for negative charges).",
      applications: ["Circular motion of particles", "Aurora, mass spectrometry"],
      commonMistakes: [
        "Applying force along v",
        "Ignoring the charge's sign for direction",
      ],
    },
    {
      id: "f17-radius",
      chapterId: id,
      name: "Radius of circular motion",
      expression: "r = mv / BQ",
      meaning:
        "Radius of the circle traced by a charge moving perpendicular to a uniform field.",
      variables: [
        { symbol: "m", name: "mass", unit: "kg" },
        { symbol: "v", name: "speed", unit: "m s⁻¹" },
        { symbol: "B", name: "flux density", unit: "T" },
        { symbol: "Q", name: "charge magnitude", unit: "C" },
      ],
      conditions:
        "v ⊥ B; from BQv = mv²/r. Period T = 2πm/BQ is speed-independent.",
      applications: [
        "Mass spectrometer separation",
        "Cyclotron frequency",
      ],
      commonMistakes: [
        "Inverting the ratio (r ∝ v, not 1/v)",
        "Forgetting KE stays constant",
      ],
    },
    {
      id: "f17-selector",
      chapterId: id,
      name: "Velocity selector condition",
      expression: "qE = BQv  ⇒  v = E/B",
      meaning:
        "In crossed E and B fields, only particles at speed E/B are undeflected.",
      variables: [
        { symbol: "E", name: "electric field strength", unit: "V m⁻¹" },
        { symbol: "B", name: "magnetic flux density", unit: "T" },
        { symbol: "v", name: "selected speed", unit: "m s⁻¹" },
      ],
      conditions:
        "E ⊥ B ⊥ v with electric and magnetic forces opposing.",
      applications: ["Mass spectrometer entry stage", "Speed filtering of ion beams"],
      commonMistakes: [
        "Thinking selection depends on charge or mass (both cancel)",
        "Wrong deflection side for faster/slower particles",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc17-1",
      chapterId: id,
      tag: "Definition",
      front: "Define magnetic flux density and the tesla.",
      back: "B is the force acting per unit current per unit length on a conductor placed perpendicular to the field. 1 T = 1 N A⁻¹ m⁻¹.",
    },
    {
      id: "fc17-2",
      chapterId: id,
      tag: "Fields",
      front: "State the field formulas for a straight wire, flat coil and solenoid.",
      back: "Wire: B = μ₀I/2πd. Flat coil centre: B = μ₀NI/2r. Long solenoid: B = μ₀nI with n = turns per metre (uniform inside, radius-independent).",
    },
    {
      id: "fc17-3",
      chapterId: id,
      tag: "Rules",
      front: "State Fleming's left-hand rule and when it applies.",
      back: "Thumb = Motion/force, First finger = Field, seCond finger = conventional Current. It gives the force direction on currents and moving positive charges; reverse the result for negative charges.",
    },
    {
      id: "fc17-4",
      chapterId: id,
      tag: "Concept",
      front: "Why can a magnetic field never change a particle's speed?",
      back: "The force F = BQv sinθ is always perpendicular to v, so it does no work; kinetic energy and speed are constant — only the direction changes.",
    },
    {
      id: "fc17-5",
      chapterId: id,
      tag: "Circular motion",
      front: "Derive r for a charge moving perpendicular to B, and state the period.",
      back: "BQv = mv²/r ⇒ r = mv/BQ. Period T = 2πr/v = 2πm/BQ — independent of speed (cyclotron principle).",
    },
    {
      id: "fc17-6",
      chapterId: id,
      tag: "Parallel wires",
      front: "Two parallel wires carry currents in the same direction. Attract or repel? Give the force per unit length.",
      back: "They ATTRACT. F/L = μ₀I₁I₂/2πd. (Each wire sits in the other's circular field; apply LHR.)",
    },
    {
      id: "fc17-7",
      chapterId: id,
      tag: "Velocity selector",
      front: "How do crossed E and B fields select a velocity, and what passes through?",
      back: "Electric force qE balances magnetic force Bqv at one speed: v = E/B. Selection is independent of both charge and mass; faster particles deflect towards the magnetic force's side.",
    },
    {
      id: "fc17-8",
      chapterId: id,
      tag: "Comparison",
      front: "Contrast the paths of a charge in uniform E and uniform B fields (perpendicular entry).",
      back: "E field: constant force ∥ field, does work ⇒ parabola, speed changes. B field: force ⊥ v, no work ⇒ circle, speed constant.",
    },
    {
      id: "fc17-9",
      chapterId: id,
      tag: "Solenoid",
      front: "What does a soft-iron core do to a solenoid's field and why?",
      back: "Greatly increases B: the core is magnetised (domains align with the solenoid's field) and its magnetisation adds to the applied field — the electromagnet principle.",
    },
    {
      id: "fc17-10",
      chapterId: id,
      tag: "Definition",
      front: "Define a magnetic field.",
      back: "A region of space in which a moving charge or a current-carrying conductor experiences a force.",
    },
    {
      id: "fc17-11",
      chapterId: id,
      tag: "Current balance",
      front: "How does a current balance measure B?",
      back: "A horizontal wire of known length L carrying known current I sits on a balance in the field. The change in balance reading gives the magnetic force F, and B = F/IL from the definition of flux density.",
    },
    {
      id: "fc17-12",
      chapterId: id,
      tag: "Numbers",
      front: "An electron moves East in a field pointing vertically down. Which way is it pushed?",
      back: "Conventional current is West. LHR (B down, I West) gives force North for positive — the ELECTRON is pushed South... wait, reverse: electron feels the opposite of the positive-charge result, so South→North flips to North→South. Answer: the force is horizontal, perpendicular to motion — South.",
    },
  ],
  quiz: [
    {
      id: "q17-1",
      chapterId: id,
      type: "mcq",
      concept: "Solenoid field",
      difficulty: "standard",
      prompt:
        "A solenoid of 500 turns over 0.25 m carries 2.0 A. The flux density inside is",
      options: ["5.0 × 10⁻³ T", "2.5 × 10⁻³ T", "1.3 × 10⁻³ T", "8.0 × 10⁻⁴ T"],
      answerIndex: 0,
      explanation:
        "n = 500/0.25 = 2000 m⁻¹; B = μ₀nI = 4π × 10⁻⁷ × 2000 × 2.0 ≈ 5.0 × 10⁻³ T.",
    },
    {
      id: "q17-2",
      chapterId: id,
      type: "mcq",
      concept: "BIL force",
      difficulty: "foundation",
      prompt:
        "A wire of length 0.10 m carries 3.0 A at 30° to a field of 0.20 T. The force on it is",
      options: ["0.060 N", "0.030 N", "0.052 N", "0.60 N"],
      answerIndex: 1,
      explanation: "F = BIL sinθ = 0.20 × 3.0 × 0.10 × sin30° = 0.030 N.",
    },
    {
      id: "q17-3",
      chapterId: id,
      type: "mcq",
      concept: "Work by magnetic force",
      difficulty: "standard",
      prompt:
        "An electron moves in a circle in a uniform magnetic field. Which quantity is constant?",
      options: [
        "Velocity",
        "Momentum",
        "Kinetic energy",
        "Force direction",
      ],
      answerIndex: 2,
      explanation:
        "The magnetic force does no work, so speed and KE are constant. Velocity, momentum and force all change DIRECTION continuously.",
    },
    {
      id: "q17-4",
      chapterId: id,
      type: "mcq",
      concept: "r = mv/BQ",
      difficulty: "standard",
      prompt:
        "A proton and an alpha particle (q = 2e, m ≈ 4mₚ) enter the same field with the same SPEED. The ratio r_alpha : r_proton is",
      options: ["1 : 1", "2 : 1", "4 : 1", "1 : 2"],
      answerIndex: 1,
      explanation:
        "r = mv/BQ ∝ m/Q. Alpha: 4m/2e = 2m/e; proton: m/e. Ratio 2 : 1.",
    },
    {
      id: "q17-5",
      chapterId: id,
      type: "mcq",
      concept: "Parallel wires",
      difficulty: "standard",
      prompt: "Two long parallel wires carry currents in opposite directions. They",
      options: [
        "attract with F ∝ 1/d²",
        "repel with F ∝ 1/d²",
        "attract with F ∝ 1/d",
        "repel with F ∝ 1/d",
      ],
      answerIndex: 3,
      explanation:
        "Antiparallel currents repel; F/L = μ₀I₁I₂/2πd falls as 1/d (field of a wire ∝ 1/d).",
    },
    {
      id: "q17-6",
      chapterId: id,
      type: "mcq",
      concept: "Velocity selector",
      difficulty: "challenging",
      prompt:
        "In a velocity selector with E = 3.0 × 10⁴ V m⁻¹ and B = 0.15 T, particles pass undeflected at",
      options: [
        "2.0 × 10⁵ m s⁻¹, but only if positively charged",
        "2.0 × 10⁵ m s⁻¹, regardless of charge and mass",
        "4.5 × 10³ m s⁻¹, regardless of charge",
        "2.0 × 10⁵ m s⁻¹, but only for electrons",
      ],
      answerIndex: 1,
      explanation:
        "v = E/B = 3.0 × 10⁴/0.15 = 2.0 × 10⁵ m s⁻¹; q cancels so any charge/mass at this speed passes.",
    },
    {
      id: "q17-7",
      chapterId: id,
      type: "mcq",
      concept: "Field directions",
      difficulty: "foundation",
      prompt:
        "The field lines around a long straight current-carrying wire are",
      options: [
        "radial, pointing away from the wire",
        "parallel to the wire",
        "concentric circles around the wire",
        "helical",
      ],
      answerIndex: 2,
      explanation:
        "Right-hand grip rule: thumb along current, fingers curl in circles around the wire.",
    },
    {
      id: "q17-8",
      chapterId: id,
      type: "mcq",
      concept: "Period independence",
      difficulty: "challenging",
      prompt:
        "In a uniform field, a charged particle's circular period T = 2πm/BQ. If its speed doubles, the period",
      options: ["doubles", "halves", "is unchanged", "quadruples"],
      answerIndex: 2,
      explanation:
        "r doubles too, so the circumference doubles at double speed — T unchanged. This underpins the cyclotron.",
    },
    {
      id: "q17-9",
      chapterId: id,
      type: "blank",
      concept: "Definition",
      difficulty: "foundation",
      prompt:
        "Magnetic flux density is the force per unit ______ per unit length on a conductor perpendicular to the field.",
      answers: ["current"],
      explanation: "B = F/IL — per unit current, per unit length, perpendicular.",
    },
    {
      id: "q17-10",
      chapterId: id,
      type: "blank",
      concept: "Rules",
      difficulty: "foundation",
      prompt:
        "In Fleming's left-hand rule the second finger represents conventional ______.",
      answers: ["current"],
      explanation: "First finger Field, seCond Current, thuMb Motion.",
    },
    {
      id: "q17-11",
      chapterId: id,
      type: "mcq",
      concept: "Charge sign",
      difficulty: "standard",
      prompt:
        "An electron moving right passes through a field pointing into the page. The initial force on it is",
      options: ["upwards", "downwards", "into the page", "zero"],
      answerIndex: 1,
      explanation:
        "For a POSITIVE charge moving right with B into the page, LHR gives an upward force. The electron is negative ⇒ force is downwards.",
    },
  ],
  workedExamples: [
    {
      id: "we17-1",
      chapterId: id,
      title: "Radius and period of a proton in a magnetic field",
      topic: "Electromagnetic Forces",
      subtopic: "Circular motion of charges",
      difficulty: "standard",
      conceptsTested: ["F = BQv", "Circular motion", "Period independence"],
      requiredFormulas: ["r = mv/BQ", "T = 2πm/BQ"],
      question:
        "A proton (m = 1.67 × 10⁻²⁷ kg, q = 1.60 × 10⁻¹⁹ C) moves at 3.0 × 10⁶ m s⁻¹ perpendicular to a uniform field of 0.50 T. Find (a) the magnetic force on it, (b) the radius of its path, and (c) the period of revolution.",
      thinking:
        "Perpendicular entry into a uniform B ⇒ uniform circular motion. The magnetic force IS the centripetal force. Everything follows from BQv = mv²/r.",
      roadmap:
        "F = BQv → set equal to mv²/r for r → T = 2πr/v (or directly 2πm/BQ).",
      givens: [
        "v = 3.0 × 10⁶ m s⁻¹ (⊥ B)",
        "B = 0.50 T",
        "m = 1.67 × 10⁻²⁷ kg, q = 1.60 × 10⁻¹⁹ C",
      ],
      unknowns: ["Force F", "Radius r", "Period T"],
      steps: [
        {
          title: "Magnetic force",
          content:
            "F = BQv = 0.50 × 1.60 × 10⁻¹⁹ × 3.0 × 10⁶ = 2.4 × 10⁻¹³ N, perpendicular to v (θ = 90° so sinθ = 1).",
          why: "This constant-magnitude, always-perpendicular force is what maintains circular motion.",
        },
        {
          title: "Radius from the circular-motion condition",
          content:
            "BQv = mv²/r ⇒ r = mv/BQ = (1.67 × 10⁻²⁷ × 3.0 × 10⁶)/(0.50 × 1.60 × 10⁻¹⁹) = 6.3 × 10⁻² m ≈ 6.3 cm.",
          why: "The magnetic force provides exactly the centripetal force — equate them.",
          checkpoint: {
            question: "Which equation correctly links the force to the circular path?",
            options: ["BQv = mv²/r", "BQv = mg", "BQv = mvr"],
            answerIndex: 0,
            feedback:
              "Magnetic force = centripetal force: BQv = mv²/r, giving r = mv/BQ.",
          },
        },
        {
          title: "Period",
          content:
            "T = 2πr/v = 2π(6.3 × 10⁻²)/(3.0 × 10⁶) = 1.3 × 10⁻⁷ s. Equivalently T = 2πm/BQ — the speed cancels.",
          why: "The v-independence of T is the key insight: faster protons trace proportionally larger circles in the same time.",
        },
      ],
      finalAnswer:
        "(a) 2.4 × 10⁻¹³ N (b) r ≈ 6.3 cm (c) T ≈ 1.3 × 10⁻⁷ s (independent of speed).",
      hints: [
        "The magnetic force acts as the centripetal force.",
        "Equate BQv to mv²/r.",
        "For the period, T = 2πr/v — watch what cancels.",
      ],
      markScheme: [
        { point: "F = BQv evaluated correctly", mark: "A1" },
        { point: "BQv = mv²/r equated (centripetal recognition)", mark: "M1" },
        { point: "r ≈ 6.3 cm", mark: "A1" },
        { point: "T ≈ 1.3 × 10⁻⁷ s with note that it is speed-independent", mark: "A1" },
      ],
      variants: [
        {
          question:
            "An electron (m = 9.11 × 10⁻³¹ kg) enters the same field at the same speed. Compare its radius and sense of rotation with the proton's.",
          answer:
            "r ∝ m: the electron's radius is smaller by mₑ/mₚ ≈ 1/1836 (r ≈ 34 μm), and it circles in the OPPOSITE sense (negative charge).",
          hint: "Same speed, same B, same |q| — only mass and sign differ.",
        },
        {
          question:
            "The proton is accelerated through 2.0 kV before entering the field. Find its speed and hence the new radius.",
          answer:
            "qV = ½mv² ⇒ v = √(2 × 1.6 × 10⁻¹⁹ × 2000/1.67 × 10⁻²⁷) = 6.2 × 10⁵ m s⁻¹; r = mv/BQ ≈ 1.3 cm.",
          hint: "Energy first (Chapter 14 link), then the radius formula.",
        },
      ],
    },
    {
      id: "we17-2",
      chapterId: id,
      title: "Velocity selector then mass separation",
      topic: "Electromagnetic Forces",
      subtopic: "Crossed fields / mass spectrometry",
      difficulty: "challenging",
      conceptsTested: [
        "Velocity selection v = E/B",
        "Circular motion r = mv/BQ",
        "Isotope separation",
      ],
      requiredFormulas: ["v = E/B", "r = mv/BQ"],
      question:
        "Singly-charged neon ions (masses 20u and 22u, u = 1.66 × 10⁻²⁷ kg) enter a velocity selector with E = 4.0 × 10⁴ V m⁻¹ and B = 0.20 T. Ions passing straight through then enter a separate uniform field of 0.30 T perpendicular to their motion. Find (a) the selected speed, (b) the radii of the two isotopes' paths, and (c) the separation of the isotopes after a half-circle.",
      thinking:
        "Two-stage device. Stage 1 selects speed independent of mass. Stage 2 bends each isotope into a circle whose radius is proportional to mass — the diameters differ, separating the isotopes at the detector.",
      roadmap:
        "v = E/B → r = mv/BQ for each mass → after a half-circle the ions land 2r apart, so separation = 2(r₂₂ − r₂₀).",
      givens: [
        "E = 4.0 × 10⁴ V m⁻¹, B_selector = 0.20 T",
        "B_chamber = 0.30 T",
        "q = +e; m₁ = 20u, m₂ = 22u",
      ],
      unknowns: ["Selected v", "r for each isotope", "Landing separation"],
      steps: [
        {
          title: "Selected speed",
          content: "v = E/B = 4.0 × 10⁴ / 0.20 = 2.0 × 10⁵ m s⁻¹ for BOTH isotopes.",
          why: "qE = Bqv balances forces; q and m cancel — the selector passes one speed only.",
          checkpoint: {
            question: "Does the heavier isotope leave the selector slower?",
            options: [
              "Yes — heavier means slower",
              "No — the selector passes one speed regardless of mass",
            ],
            answerIndex: 1,
            feedback:
              "Both forces scale with q and neither depends on m; v = E/B is mass-independent.",
          },
        },
        {
          title: "Radii in the deflection chamber",
          content:
            "r = mv/BQ. For 20u: r₂₀ = (20 × 1.66 × 10⁻²⁷ × 2.0 × 10⁵)/(0.30 × 1.60 × 10⁻¹⁹) = 0.138 m. For 22u: r₂₂ = (22/20) × r₂₀ = 0.152 m.",
          why: "Same v, B, Q ⇒ r ∝ m. The 10% mass difference becomes a 10% radius difference.",
        },
        {
          title: "Separation after a half-circle",
          content:
            "Each ion lands a diameter 2r from the entry slit, along the same line. Separation = 2r₂₂ − 2r₂₀ = 2(0.152 − 0.138) = 0.028 m ≈ 2.8 cm.",
          why: "Half-circle geometry maps radius differences into measurable detector distances — the design principle of the mass spectrometer.",
        },
      ],
      finalAnswer:
        "(a) 2.0 × 10⁵ m s⁻¹ (b) r₂₀ ≈ 13.8 cm, r₂₂ ≈ 15.2 cm (c) ≈ 2.8 cm apart.",
      hints: [
        "Selector: balance qE against Bqv.",
        "In the chamber, r = mv/BQ with the SAME v for both isotopes.",
        "After half a revolution an ion is 2r from where it entered.",
      ],
      markScheme: [
        { point: "v = E/B = 2.0 × 10⁵ m s⁻¹", mark: "A1" },
        { point: "r ∝ m recognised; both radii computed", mark: "M1 A1" },
        { point: "Separation 2Δr ≈ 2.8 cm", mark: "A1" },
      ],
      variants: [
        {
          question:
            "Doubly-charged ²⁰Ne²⁺ ions also pass the selector. Where do they land relative to ²⁰Ne⁺?",
          answer:
            "Same v (selector is charge-independent) but r ∝ 1/Q halves: they land at half the diameter, 13.8 cm from the slit instead of 27.6 cm.",
          hint: "Only Q changes in r = mv/BQ.",
        },
        {
          question:
            "If E is doubled with B unchanged, what happens to the selected speed and the radii?",
          answer:
            "v doubles to 4.0 × 10⁵ m s⁻¹; radii double too (r ∝ v): r₂₀ ≈ 27.6 cm, r₂₂ ≈ 30.4 cm; separation doubles to ≈5.5 cm.",
          hint: "Trace v = E/B through r = mv/BQ.",
        },
      ],
    },
    {
      id: "we17-3",
      chapterId: id,
      title: "Force between parallel conductors",
      topic: "Electromagnetic Forces",
      subtopic: "Parallel currents",
      difficulty: "standard",
      conceptsTested: ["Field of a wire", "F = BIL", "Direction reasoning"],
      requiredFormulas: ["B = μ₀I/2πd", "F = BIL"],
      question:
        "Two long parallel wires 5.0 cm apart carry currents of 3.0 A and 4.0 A in the same direction. Calculate the force per metre on each wire and state whether they attract or repel. Explain the direction using field and force rules.",
      thinking:
        "Each wire sits in the circular field of the other. Compute B from wire 1 at wire 2's position, then F = BIL on wire 2. Direction: grip rule for the field, LHR for the force.",
      roadmap:
        "B₁ at d → F/L = B₁I₂ → symmetry (Newton's third law) → direction argument.",
      givens: ["I₁ = 3.0 A, I₂ = 4.0 A (same direction)", "d = 5.0 cm"],
      unknowns: ["F per metre", "Attract or repel + explanation"],
      steps: [
        {
          title: "Field of wire 1 at wire 2",
          content:
            "B₁ = μ₀I₁/2πd = (4π × 10⁻⁷ × 3.0)/(2π × 0.050) = 1.2 × 10⁻⁵ T, directed by the grip rule (circles around wire 1).",
          why: "A wire feels only the field of OTHER sources — never its own.",
        },
        {
          title: "Force on wire 2",
          content:
            "F/L = B₁I₂ = 1.2 × 10⁻⁵ × 4.0 = 4.8 × 10⁻⁵ N m⁻¹. By Newton's third law, wire 1 feels the same magnitude towards wire 2.",
          why: "The wire is perpendicular to the circular field at its location, so sinθ = 1.",
          checkpoint: {
            question: "Why is the force on wire 1 equal in magnitude?",
            options: [
              "Because both currents are equal",
              "Newton's third law — the wires form an action–reaction pair",
              "It isn't — the 4 A wire feels more force",
            ],
            answerIndex: 1,
            feedback:
              "The forces are an action–reaction pair: equal magnitude, opposite direction, regardless of the different currents.",
          },
        },
        {
          title: "Direction",
          content:
            "At wire 2, the field of wire 1 points (say) into the page if wire 2 is to its right with currents upward. LHR on wire 2 (current up, B into page) gives a force towards wire 1. Same-direction currents ATTRACT.",
          why: "Direction answers must chain grip rule (field) → LHR (force) explicitly for the marks.",
        },
      ],
      finalAnswer:
        "F/L = 4.8 × 10⁻⁵ N m⁻¹ on each wire, attracting each other (parallel currents attract).",
      hints: [
        "Find the field of one wire at the other's position first.",
        "Then F = BIL on the second wire, with sinθ = 1.",
        "Grip rule for B direction, Fleming's LHR for F direction.",
      ],
      markScheme: [
        { point: "B₁ = 1.2 × 10⁻⁵ T at the second wire", mark: "M1" },
        { point: "F/L = 4.8 × 10⁻⁵ N m⁻¹", mark: "A1" },
        { point: "Attraction with correct rule-based reasoning", mark: "B1" },
      ],
      variants: [
        {
          question: "The 4.0 A current is reversed. What changes?",
          answer:
            "Magnitude is unchanged (4.8 × 10⁻⁵ N m⁻¹) but the wires now REPEL — antiparallel currents repel.",
          hint: "Reversing I flips the LHR force direction.",
        },
        {
          question:
            "At what point between the wires is the resultant field zero (currents both 3.0 A and 4.0 A, same direction)?",
          answer:
            "Between them where μ₀(3)/2πx = μ₀(4)/2π(0.05 − x) ⇒ 3(0.05 − x) = 4x ⇒ x = 2.1 cm from the 3 A wire.",
          hint: "Fields point opposite ways between same-direction currents.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d17-1",
      chapterId: id,
      title: "Radius of circular motion in a magnetic field",
      goal: "Derive r = mv/BQ and T = 2πm/BQ for a charge moving perpendicular to a uniform field.",
      steps: [
        {
          text: "A charge Q moving at speed v perpendicular to B experiences the magnetic force",
          expression: "F = BQv",
          explanation:
            "sinθ = 1 for perpendicular motion; the force direction is always perpendicular to v (Fleming's LHR).",
        },
        {
          text: "A constant-magnitude force always perpendicular to velocity produces uniform circular motion, so it plays the role of the centripetal force:",
          expression: "BQv = mv²/r",
          explanation:
            "Circular motion requires a centre-seeking force mv²/r; the magnetic force supplies exactly this.",
        },
        {
          text: "Solve for the radius:",
          expression: "r = mv/BQ",
          explanation:
            "Faster or heavier particles need bigger circles; stronger fields or charges bend tighter.",
        },
        {
          text: "The period follows from circumference over speed:",
          expression: "T = 2πr/v = 2πm/BQ",
          explanation:
            "v cancels — the period is independent of speed, the operating principle of the cyclotron.",
        },
      ],
    },
    {
      id: "d17-2",
      chapterId: id,
      title: "Force per unit length between parallel wires",
      goal: "Derive F/L = μ₀I₁I₂/2πd and the attraction rule for parallel currents.",
      steps: [
        {
          text: "Wire 1 creates a field at the position of wire 2 (distance d away):",
          expression: "B₁ = μ₀I₁/2πd",
          explanation:
            "The long-straight-wire formula; the field circles wire 1 by the grip rule.",
        },
        {
          text: "Wire 2, carrying I₂ perpendicular to this field, feels a force on each length L:",
          expression: "F = B₁I₂L = μ₀I₁I₂L/2πd",
          explanation:
            "F = BIL with sinθ = 1, since the circular field of wire 1 is perpendicular to wire 2.",
        },
        {
          text: "Divide by L for the force per unit length:",
          expression: "F/L = μ₀I₁I₂/2πd",
          explanation:
            "Symmetric in I₁ and I₂ — Newton's third law pair with the force on wire 1.",
        },
        {
          text: "Direction: applying the grip rule then Fleming's LHR shows",
          expression: "parallel currents attract; antiparallel repel",
          explanation:
            "With both currents up and wire 2 to the right, B₁ is into the page at wire 2, and LHR pushes wire 2 left — towards wire 1.",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n17-field",
      label: "Magnetic field B",
      tier: "core",
      x: 0.5,
      y: 0.08,
      explanation:
        "Region where moving charges/currents feel forces. B defined as force per unit current per unit length (perpendicular).",
      example: "Earth's field ≈ 5 × 10⁻⁵ T; MRI magnets ≈ 1.5–3 T.",
      application: "Foundation of every EM-forces calculation.",
      related: ["n17-sources", "n17-bil", "n17-bqv"],
    },
    {
      id: "n17-sources",
      label: "Fields from currents",
      tier: "major",
      x: 0.18,
      y: 0.28,
      explanation:
        "Wire: μ₀I/2πd circles. Coil centre: μ₀NI/2r. Solenoid: μ₀nI uniform; iron core amplifies.",
      example: "2000-turns-per-metre solenoid at 2 A: B = 5 mT.",
      application: "Electromagnets; field superposition problems.",
      related: ["n17-field", "n17-parallel"],
    },
    {
      id: "n17-bil",
      label: "F = BIL sinθ",
      tier: "core",
      x: 0.5,
      y: 0.34,
      explanation:
        "Force on a conductor; direction by Fleming's LHR; basis of the current balance and motors.",
      example: "0.1 m wire, 3 A, 0.2 T ⊥: F = 0.06 N.",
      application: "Motor torque, current balance measurement of B.",
      related: ["n17-field", "n17-parallel", "n17-bqv"],
    },
    {
      id: "n17-parallel",
      label: "Parallel wires",
      tier: "detail",
      x: 0.2,
      y: 0.6,
      explanation:
        "Each wire sits in the other's field: F/L = μ₀I₁I₂/2πd. Parallel attract, antiparallel repel.",
      example: "Bundled cables in high-current installations feel measurable forces.",
      application: "Direction-reasoning practice; historical ampere definition.",
      related: ["n17-sources", "n17-bil"],
    },
    {
      id: "n17-bqv",
      label: "F = BQv sinθ",
      tier: "core",
      x: 0.75,
      y: 0.34,
      explanation:
        "Force on a moving charge, perpendicular to v — does no work, changes direction only.",
      example: "Aurora: solar-wind particles spiralling along Earth's field lines.",
      application: "All charged-particle motion in B fields.",
      related: ["n17-field", "n17-circle", "n17-selector"],
    },
    {
      id: "n17-circle",
      label: "Circular motion r = mv/BQ",
      tier: "major",
      x: 0.62,
      y: 0.62,
      explanation:
        "Magnetic force = centripetal force. T = 2πm/BQ independent of speed.",
      example: "Proton at 3 × 10⁶ m s⁻¹ in 0.5 T: r ≈ 6 cm.",
      application: "Mass spectrometry, cyclotrons, bubble-chamber tracks.",
      related: ["n17-bqv", "n17-selector"],
    },
    {
      id: "n17-selector",
      label: "Velocity selector",
      tier: "major",
      x: 0.86,
      y: 0.62,
      explanation:
        "Crossed E and B: undeflected at v = E/B, independent of q and m.",
      example: "E = 4 × 10⁴ V m⁻¹, B = 0.2 T selects 2 × 10⁵ m s⁻¹.",
      application: "Mass spectrometer entry stage.",
      related: ["n17-bqv", "n17-circle"],
    },
    {
      id: "n17-compare",
      label: "E vs B deflection",
      tier: "detail",
      x: 0.42,
      y: 0.85,
      explanation:
        "E field: parabola, does work, speed changes. B field: circle, no work, speed constant.",
      example: "CRO uses E plates; mass spectrometer uses B chamber.",
      application: "Compare-and-contrast exam questions.",
      related: ["n17-circle", "n17-bqv"],
    },
  ],
  conceptEdges: [
    { from: "n17-field", to: "n17-sources", label: "created by currents" },
    { from: "n17-field", to: "n17-bil", label: "acts on currents" },
    { from: "n17-field", to: "n17-bqv", label: "acts on charges" },
    { from: "n17-sources", to: "n17-parallel", label: "wire in wire's field" },
    { from: "n17-bil", to: "n17-parallel", label: "F = B₁I₂L" },
    { from: "n17-bqv", to: "n17-circle", label: "⊥ entry" },
    { from: "n17-bqv", to: "n17-selector", label: "balanced by qE" },
    { from: "n17-circle", to: "n17-selector", label: "mass spectrometer" },
    { from: "n17-circle", to: "n17-compare", label: "vs parabola" },
  ],
  graphs: [
    {
      id: "g17-bwire",
      title: "Field strength near a long straight wire",
      caption:
        "B = μ₀I/2πd falls off as 1/d — halving the distance doubles the field. Compare the 1/r² of point-charge E fields.",
      xLabel: "d",
      yLabel: "B",
      curves: [
        {
          label: "B ∝ 1/d",
          color: 5,
          points: sample((d) => 0.12 / Math.max(0.06, d), 0.06, 1, 80),
        },
      ],
    },
    {
      id: "g17-rv",
      title: "Radius of circular path against speed",
      caption:
        "r = mv/BQ is linear in v. The gradient m/BQ separates isotopes (different m) and charge states (different Q).",
      xLabel: "v",
      yLabel: "r",
      curves: [
        {
          label: "mass 22u",
          color: 5,
          points: sample((v) => 1.1 * v, 0, 1, 10),
        },
        {
          label: "mass 20u",
          color: 2,
          points: sample((v) => 1.0 * v, 0, 1, 10),
        },
        {
          label: "20u, charge 2e",
          color: 3,
          dashed: true,
          points: sample((v) => 0.5 * v, 0, 1, 10),
        },
      ],
    },
    {
      id: "g17-selector",
      title: "Forces in a velocity selector",
      caption:
        "Electric force qE is speed-independent; magnetic force Bqv grows linearly. They balance at exactly v = E/B.",
      xLabel: "v",
      yLabel: "Force",
      curves: [
        {
          label: "qE (constant)",
          color: 1,
          points: sample(() => 0.5, 0, 1, 10),
        },
        {
          label: "Bqv (∝ v)",
          color: 6,
          points: sample((v) => v, 0, 1, 10),
        },
      ],
    },
  ],
};
