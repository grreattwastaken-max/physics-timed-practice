import { Chapter } from "../types";
import { sample } from "./curves";

const id = "ch18";

export const ch18: Chapter = {
  id,
  number: 18,
  title: "Electromagnetic Induction",
  syllabus: "H2 Physics 9478",
  icon: "refresh",
  color: 4,
  description:
    "Magnetic flux and flux linkage, Faraday's and Lenz's laws, moving rods, rotating coils (AC generators) and transformers.",
  sections: [
    "Faraday's Law of Electromagnetic Induction",
    "Magnetic Flux and Flux Linkage",
    "Direction of Induced e.m.f. (Lenz's Law)",
    "Metal Rod Moving Across a Field",
    "Rotating Coil (AC Generator)",
    "Practical Applications",
    "Transformers",
  ],
  learningOutcomes: [
    "Define magnetic flux as the product of flux density and the perpendicular cross-sectional area.",
    "Understand and use magnetic flux linkage Nφ.",
    "Use φ = BA and Nφ = NBA to solve problems.",
    "Infer from experiments that a changing flux induces an e.m.f., that its direction opposes the change, and the factors affecting its magnitude.",
    "Solve problems with Faraday's law and Lenz's law.",
    "Explain simple applications of electromagnetic induction.",
    "Understand the operation of an ideal iron-core transformer and use Ns/Np = Vs/Vp = Ip/Is.",
  ],
  quickReview: [
    "Magnetic flux φ = BA (B perpendicular to area A); unit weber, 1 Wb = 1 T m². Flux linkage = Nφ = NBA.",
    "Faraday's law: induced e.m.f. = rate of change of flux linkage, E = −d(Nφ)/dt.",
    "Lenz's law: the induced e.m.f. (current) opposes the change producing it — a consequence of energy conservation.",
    "Rod of length L moving at v perpendicular to B: E = BLv.",
    "Coil rotating at ω in field B: flux Nφ = NBA cosωt ⇒ E = NBAω sinωt — e.m.f. is maximum when the coil is PARALLEL to the field (flux zero!).",
    "Ideal transformer: Ns/Np = Vs/Vp = Ip/Is; power in = power out; works on a.c. only.",
    "Eddy currents: induced circulating currents in bulk conductors — useful (braking, induction hobs) or wasteful (laminate cores to reduce).",
  ],
  examReview: [
    {
      heading: "Flux, linkage and Faraday's law",
      points: [
        "φ = BA needs B perpendicular to the area; at angle θ to the NORMAL, φ = BA cosθ.",
        "Flux linkage Nφ = NBA for an N-turn coil — the quantity whose change matters.",
        "Faraday: |E| = d(Nφ)/dt — change B, change A, or change orientation to induce.",
        "An e.m.f. is induced whether or not a circuit is complete; current flows only if it is.",
        "Magnitude factors: number of turns, rate of change (speed of magnet, frequency of rotation), field strength, area.",
      ],
    },
    {
      heading: "Lenz's law and energy",
      points: [
        "The induced current's magnetic field opposes the CHANGE in flux (not the flux itself).",
        "Magnet approaching a coil: near face becomes a like pole (repels); receding: unlike pole (attracts).",
        "Lenz's law is energy conservation: the opposing force means work must be done to induce — that work becomes electrical energy.",
        "Standard explanation structure: state the flux change → induced e.m.f. by Faraday → direction by Lenz → consequence.",
      ],
    },
    {
      heading: "Moving rods and rotating coils",
      points: [
        "Rod: E = BLv (L and v both perpendicular to B). Derive from sweep rate: area swept per second = Lv.",
        "On rails with a resistor, the circuit current I = BLv/R produces a retarding force BIL — external force needed to keep v constant (power balance FV = EI).",
        "Rotating coil: φ = BA cosωt per turn ⇒ E = NBAω sinωt. Peak e.m.f. E₀ = NBAω.",
        "E is 90° out of phase with φ: maximum e.m.f. where flux is zero and changing fastest (coil plane parallel to B).",
        "Doubling ω doubles BOTH the peak e.m.f. and the frequency.",
      ],
    },
    {
      heading: "Transformers",
      points: [
        "A.c. in the primary sets up changing flux in the laminated iron core; the flux links the secondary, inducing an e.m.f. by Faraday.",
        "Ideal: Vs/Vp = Ns/Np; power conservation gives Ip/Is = Ns/Np.",
        "Step-up voltage means step-DOWN current — transmission at high voltage cuts I²R cable losses.",
        "Real losses: resistance of windings (I²R), eddy currents in the core (reduced by laminations), hysteresis, flux leakage.",
        "A transformer cannot work on steady d.c. — no changing flux, no induced e.m.f.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "Flux as 'field through a window'",
      body: "Magnetic flux measures how much field passes through an area — picture field lines threading a window frame. φ = BA when B is perpendicular to the area; tilt the frame and only the perpendicular component counts: φ = BA cosθ with θ measured from the NORMAL. A coil of N turns multiplies the effect — flux linkage Nφ = NBA — because each turn is a separate window in series. The weber (1 T m²) is chosen so that Faraday's law has no constants: one weber per second is one volt.",
    },
    {
      heading: "Faraday's law: change is everything",
      body: "A steady flux, however large, induces nothing. Only the RATE of change of flux linkage matters: |E| = d(Nφ)/dt. You can change flux three ways — vary B (electromagnet switching, moving magnets), vary A (rod sliding on rails, expanding loop), or vary orientation (rotating coil). Every induction problem starts by identifying which is changing and how fast. Graphically, the induced e.m.f. is the negative gradient of the flux-linkage–time graph — a sinusoidal flux gives a cosinusoidal e.m.f., a linear ramp gives a constant e.m.f., a constant flux gives zero.",
    },
    {
      heading: "Lenz's law as energy conservation",
      body: "The minus sign in E = −d(Nφ)/dt is Lenz's law: induced effects oppose the change creating them. Push a magnet's north pole towards a coil and the near face becomes a north pole, repelling your push; pull it away and the face flips to south, resisting the retreat. Why must it be so? If induction ASSISTED the change, a small push would grow flux, current, and force in a runaway loop — energy from nowhere. Instead, the work you do against the opposition is precisely the electrical energy generated. In exam explanations, always chain: flux change → induced e.m.f. (Faraday) → current direction opposing the change (Lenz) → observable consequence.",
    },
    {
      heading: "The rotating coil: geometry of a generator",
      body: "Spin a coil at angular speed ω in a uniform field. The flux linkage is Nφ = NBA cosωt, so the e.m.f. is E = NBAω sinωt: sinusoidal, with peak E₀ = NBAω. The 90° phase shift between flux and e.m.f. is the conceptual heart: when the coil's plane is PERPENDICULAR to B, flux is maximal but momentarily unchanging — zero e.m.f.; a quarter-turn later the plane is PARALLEL to B, flux is zero but sweeping through its fastest change — peak e.m.f. Spinning twice as fast doubles both the frequency and the amplitude, so the peak output quadruples in power terms.",
    },
    {
      heading: "Transformers and the grid",
      body: "A transformer is Faraday's law industrialised: alternating primary current → alternating core flux → e.m.f. induced in every secondary turn. Each turn links the same flux, so voltage divides per turn: Vs/Vp = Ns/Np. An ideal transformer conserves power, forcing current to transform inversely: Ip/Is = Ns/Np. This inverse pairing is why national grids step UP to hundreds of kilovolts for transmission: delivering power P at voltage V requires current I = P/V, and cable heating I²R plummets as V rises. Real transformers approach ideality through laminated cores (chopping eddy-current loops), low-resistance windings and tight flux coupling.",
    },
  ],
  keyIdeas: [
    "Flux = field × perpendicular area; linkage multiplies by turns.",
    "Only changing flux linkage induces e.m.f.; its rate sets the size.",
    "Lenz's law encodes energy conservation in the direction of induced effects.",
    "E = BLv for translation; E = NBAω sinωt for rotation — both are Faraday in disguise.",
    "Transformers trade voltage for current; high-voltage transmission minimises I²R losses.",
  ],
  definitions: [
    {
      term: "Magnetic flux",
      definition:
        "The product of the magnetic flux density and the cross-sectional area perpendicular to the direction of the flux density: φ = BA. Unit: weber (Wb).",
    },
    {
      term: "The weber",
      definition:
        "One weber is the flux through an area of 1 m² perpendicular to a field of flux density 1 T (1 Wb = 1 T m²).",
    },
    {
      term: "Magnetic flux linkage",
      definition:
        "The product of the number of turns and the flux through a coil: Nφ = NBA.",
    },
    {
      term: "Faraday's law",
      definition:
        "The induced e.m.f. is directly proportional to (equal to, in SI) the rate of change of magnetic flux linkage: E = −d(Nφ)/dt.",
    },
    {
      term: "Lenz's law",
      definition:
        "The direction of the induced e.m.f. (or current) is such as to oppose the change in flux producing it — a consequence of the conservation of energy.",
    },
    {
      term: "Eddy currents",
      definition:
        "Circulating currents induced in bulk conductors by changing flux; they dissipate energy (reduced by laminating cores) or provide braking/heating in applications.",
    },
    {
      term: "Ideal transformer",
      definition:
        "A transformer with no energy losses, for which Vs/Vp = Ns/Np and Ip/Is = Ns/Np (power in = power out).",
    },
  ],
  misconceptions: [
    {
      myth: "Flux and flux linkage are the same thing.",
      reality:
        "Flux φ = BA is per turn; flux linkage Nφ multiplies by the N turns of a coil. Faraday's law uses the rate of change of flux LINKAGE.",
    },
    {
      myth: "A large flux induces a large e.m.f.",
      reality:
        "Only the RATE OF CHANGE of flux linkage matters. A huge steady flux induces exactly zero e.m.f.",
    },
    {
      myth: "The induced current opposes the flux.",
      reality:
        "It opposes the CHANGE in flux. If flux is decreasing, the induced current acts to MAINTAIN it (same direction), not cancel it.",
    },
    {
      myth: "In a rotating coil, the e.m.f. peaks when the flux through the coil peaks.",
      reality:
        "They are 90° out of phase. Peak flux (coil plane ⊥ B) means zero rate of change — zero e.m.f. Peak e.m.f. occurs at zero flux, where flux changes fastest.",
    },
    {
      myth: "Transformers change the power level.",
      reality:
        "An ideal transformer conserves power: VpIp = VsIs. Voltage steps up exactly as current steps down.",
    },
    {
      myth: "A transformer works on d.c. if the voltage is big enough.",
      reality:
        "Steady d.c. gives constant flux ⇒ no induced e.m.f. (Only at switch-on/off is there a momentary pulse.)",
    },
    {
      myth: "No current flows, so no e.m.f. was induced.",
      reality:
        "E.m.f. is induced by changing flux regardless of circuit completeness; current additionally requires a closed conducting path.",
    },
  ],
  examTips: [
    "Define flux with 'perpendicular' placed correctly: area perpendicular to B (or B component along the normal).",
    "Faraday explanations must say rate of change of flux LINKAGE for coils — dropping 'linkage' or 'rate of' costs marks.",
    "Lenz's law answers need the full chain: what changes → induced e.m.f. → induced current direction → its field opposes the change → force/effect.",
    "For E = BLv, check the three mutually perpendicular directions (B, L, v) before substituting.",
    "Rotating-coil sketches: label E₀ = NBAω and mark that E = 0 where φ is max. Doubling ω doubles peak AND frequency — redraw accordingly.",
    "Transformer numericals: use the turns ratio for voltage FIRST, then power conservation for current; state the 'ideal' assumption.",
  ],
  formulas: [
    {
      id: "f18-flux",
      chapterId: id,
      name: "Magnetic flux",
      expression: "φ = BA  (φ = BA cosθ at angle θ to the normal)",
      meaning: "Field threading an area — the 'amount of field through the window'.",
      variables: [
        { symbol: "φ", name: "magnetic flux", unit: "Wb" },
        { symbol: "B", name: "flux density", unit: "T" },
        { symbol: "A", name: "area", unit: "m²" },
        { symbol: "θ", name: "angle between B and the normal to A", unit: "°" },
      ],
      conditions: "Uniform B over the area.",
      applications: [
        "Flux through tilted coils",
        "Input to Faraday's law",
      ],
      commonMistakes: [
        "Measuring θ from the plane instead of the normal",
        "Unit slips: Wb = T m²",
      ],
    },
    {
      id: "f18-linkage",
      chapterId: id,
      name: "Flux linkage",
      expression: "Nφ = NBA",
      meaning: "Total flux linked by an N-turn coil.",
      variables: [
        { symbol: "N", name: "number of turns", unit: "—" },
        { symbol: "φ", name: "flux per turn", unit: "Wb" },
      ],
      conditions: "All turns link the same flux.",
      applications: ["Faraday's law for coils", "Rotating coil analysis"],
      commonMistakes: ["Forgetting N in coil problems"],
    },
    {
      id: "f18-faraday",
      chapterId: id,
      name: "Faraday's law",
      expression: "E = −d(Nφ)/dt",
      meaning:
        "Induced e.m.f. equals the rate of change of flux linkage; the sign is Lenz's opposition.",
      variables: [
        { symbol: "E", name: "induced e.m.f.", unit: "V" },
        { symbol: "d(Nφ)/dt", name: "rate of change of flux linkage", unit: "Wb s⁻¹" },
      ],
      conditions: "Any change of B, A or orientation.",
      applications: [
        "Gradient of Nφ–t graphs gives −E",
        "Average e.m.f. = ΔNφ/Δt",
      ],
      commonMistakes: [
        "Using flux instead of flux linkage",
        "Ignoring the graphical (gradient) interpretation",
      ],
    },
    {
      id: "f18-blv",
      chapterId: id,
      name: "E.m.f. of a moving rod",
      expression: "E = BLv",
      meaning:
        "E.m.f. across a rod of length L moving at v with B, L, v mutually perpendicular.",
      variables: [
        { symbol: "L", name: "rod length in field", unit: "m" },
        { symbol: "v", name: "speed perpendicular to B and L", unit: "m s⁻¹" },
      ],
      conditions: "B ⊥ L ⊥ v; from area swept per second = Lv.",
      applications: [
        "Rails-and-rod circuits",
        "Aircraft wings in Earth's field",
      ],
      commonMistakes: [
        "Using non-perpendicular components without resolving",
        "Forgetting a force is needed to sustain v when current flows",
      ],
    },
    {
      id: "f18-rotating",
      chapterId: id,
      name: "Rotating coil (AC generator)",
      expression: "Nφ = NBA cosωt  ⇒  E = NBAω sinωt",
      meaning:
        "Sinusoidal e.m.f. of a coil rotating at angular frequency ω in a uniform field; peak E₀ = NBAω.",
      variables: [
        { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
        { symbol: "E₀", name: "peak e.m.f. = NBAω", unit: "V" },
      ],
      conditions:
        "Uniform B, constant ω; e.m.f. 90° out of phase with flux.",
      applications: [
        "Generator output sketching",
        "Effect of doubling rotation speed",
      ],
      commonMistakes: [
        "Placing peak e.m.f. at peak flux",
        "Forgetting E₀ ∝ ω as well as frequency ∝ ω",
      ],
    },
    {
      id: "f18-transformer",
      chapterId: id,
      name: "Ideal transformer",
      expression: "Ns/Np = Vs/Vp = Ip/Is",
      meaning:
        "Turns ratio sets the voltage ratio; power conservation inverts it for current.",
      variables: [
        { symbol: "Np, Ns", name: "primary/secondary turns", unit: "—" },
        { symbol: "Vp, Vs", name: "primary/secondary voltages", unit: "V" },
        { symbol: "Ip, Is", name: "primary/secondary currents", unit: "A" },
      ],
      conditions: "Ideal (lossless, perfect flux linkage), a.c. only.",
      applications: [
        "Grid step-up/step-down",
        "Charger and appliance supplies",
      ],
      commonMistakes: [
        "Inverting the current ratio",
        "Applying to d.c.",
      ],
    },
    {
      id: "f18-power-loss",
      chapterId: id,
      name: "Transmission loss",
      expression: "P_loss = I²R_cable = (P/V)²R_cable",
      meaning:
        "Cable heating falls with the square of transmission voltage for fixed delivered power.",
      variables: [
        { symbol: "P", name: "power delivered", unit: "W" },
        { symbol: "V", name: "transmission voltage", unit: "V" },
        { symbol: "R_cable", name: "cable resistance", unit: "Ω" },
      ],
      conditions: "Fixed power demand and cable resistance.",
      applications: ["Why grids transmit at 400 kV", "Efficiency calculations"],
      commonMistakes: [
        "Using P_loss = V²/R with the transmission voltage",
        "Forgetting that higher V means lower I for the same power",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc18-1",
      chapterId: id,
      tag: "Definition",
      front: "Define magnetic flux and flux linkage.",
      back: "Flux: φ = BA, the product of flux density and the area perpendicular to it (unit Wb). Flux linkage: Nφ = NBA for an N-turn coil.",
    },
    {
      id: "fc18-2",
      chapterId: id,
      tag: "Laws",
      front: "State Faraday's law of electromagnetic induction.",
      back: "The induced e.m.f. is equal to the rate of change of magnetic flux linkage: E = −d(Nφ)/dt.",
    },
    {
      id: "fc18-3",
      chapterId: id,
      tag: "Laws",
      front: "State Lenz's law and its physical basis.",
      back: "The induced e.m.f./current is directed so as to oppose the change in flux producing it. It follows from energy conservation — work done against the opposition becomes the electrical energy.",
    },
    {
      id: "fc18-4",
      chapterId: id,
      tag: "Scenario",
      front: "A magnet's N pole approaches a coil face. What polarity does that face acquire, and why?",
      back: "North — the induced current circulates to repel the approaching magnet (opposing the increase in flux), by Lenz's law.",
    },
    {
      id: "fc18-5",
      chapterId: id,
      tag: "Formula",
      front: "State the e.m.f. of a rod moving in a field and its geometric requirement.",
      back: "E = BLv with B, L and v mutually perpendicular. It comes from flux swept per second: area rate Lv times B.",
    },
    {
      id: "fc18-6",
      chapterId: id,
      tag: "Generator",
      front: "For a coil rotating in a uniform field, when is the e.m.f. maximum and why?",
      back: "When the coil's plane is PARALLEL to B (flux through it is zero) — that is where flux linkage changes fastest. E = NBAω sinωt is 90° out of phase with φ = BA cosωt.",
    },
    {
      id: "fc18-7",
      chapterId: id,
      tag: "Generator",
      front: "What happens to a generator's output if the rotation speed doubles?",
      back: "Peak e.m.f. doubles (E₀ = NBAω) AND the frequency doubles — the sketch shows twice-tall peaks squeezed twice as close.",
    },
    {
      id: "fc18-8",
      chapterId: id,
      tag: "Transformer",
      front: "Explain how a transformer transfers energy between electrically isolated coils.",
      back: "Alternating primary current creates an alternating flux in the iron core; this changing flux links the secondary coil, inducing an e.m.f. by Faraday's law proportional to its turns.",
    },
    {
      id: "fc18-9",
      chapterId: id,
      tag: "Transformer",
      front: "Give the ideal transformer relations and the a.c.-only reason.",
      back: "Vs/Vp = Ns/Np = Ip/Is (power conserved). D.c. gives constant flux ⇒ zero rate of change ⇒ no induced e.m.f.",
    },
    {
      id: "fc18-10",
      chapterId: id,
      tag: "Applications",
      front: "Why is electrical power transmitted at very high voltage?",
      back: "For fixed power P, current I = P/V falls as V rises; cable losses I²R fall with I² — stepping up 20× cuts losses 400×.",
    },
    {
      id: "fc18-11",
      chapterId: id,
      tag: "Losses",
      front: "Name four loss mechanisms in a real transformer and one mitigation.",
      back: "Winding resistance (I²R), eddy currents in the core (→ laminations), hysteresis in the core, flux leakage (→ tight coupling/core design).",
    },
    {
      id: "fc18-12",
      chapterId: id,
      tag: "Concept",
      front: "Does an e.m.f. exist in an open circuit whose flux changes? Does a current?",
      back: "Yes — e.m.f. depends only on changing flux linkage. No current flows without a closed path.",
    },
  ],
  quiz: [
    {
      id: "q18-1",
      chapterId: id,
      type: "mcq",
      concept: "Flux",
      difficulty: "foundation",
      prompt:
        "A coil of area 2.0 × 10⁻³ m² sits with its plane perpendicular to a 0.30 T field. The flux through it is",
      options: ["6.0 × 10⁻⁴ Wb", "0 Wb", "1.5 × 10⁻² Wb", "6.0 × 10⁻² Wb"],
      answerIndex: 0,
      explanation:
        "Plane ⊥ B means B is along the normal: φ = BA = 0.30 × 2.0 × 10⁻³ = 6.0 × 10⁻⁴ Wb.",
    },
    {
      id: "q18-2",
      chapterId: id,
      type: "mcq",
      concept: "Faraday",
      difficulty: "standard",
      prompt:
        "The flux linkage of a 200-turn coil falls uniformly from 4.0 × 10⁻² Wb to zero in 0.10 s. (The 4.0 × 10⁻² Wb is flux PER TURN.) The induced e.m.f. is",
      options: ["0.08 V", "8.0 V", "80 V", "0.4 V"],
      answerIndex: 2,
      explanation:
        "E = NΔφ/Δt = 200 × 4.0 × 10⁻²/0.10 = 80 V.",
    },
    {
      id: "q18-3",
      chapterId: id,
      type: "mcq",
      concept: "Lenz",
      difficulty: "standard",
      prompt:
        "A bar magnet is dropped N-pole-first through a horizontal coil. As it approaches, viewed from above, the induced current",
      options: [
        "flows to make the top face a north pole",
        "flows to make the top face a south pole",
        "is zero until the magnet is inside",
        "flows to attract the magnet downwards faster",
      ],
      answerIndex: 0,
      explanation:
        "Lenz: the coil opposes the approaching N pole by presenting a like (north) pole upward, repelling/decelerating the magnet.",
    },
    {
      id: "q18-4",
      chapterId: id,
      type: "mcq",
      concept: "BLv",
      difficulty: "standard",
      prompt:
        "A 0.50 m rod moves at 4.0 m s⁻¹ perpendicular to a 0.20 T field. The e.m.f. across it is",
      options: ["0.40 V", "0.10 V", "4.0 V", "1.6 V"],
      answerIndex: 0,
      explanation: "E = BLv = 0.20 × 0.50 × 4.0 = 0.40 V.",
    },
    {
      id: "q18-5",
      chapterId: id,
      type: "mcq",
      concept: "Rotating coil phase",
      difficulty: "challenging",
      prompt:
        "A coil rotates in a uniform field. At the instant its plane is perpendicular to the field,",
      options: [
        "flux is zero and e.m.f. is maximum",
        "flux is maximum and e.m.f. is zero",
        "both flux and e.m.f. are maximum",
        "both flux and e.m.f. are zero",
      ],
      answerIndex: 1,
      explanation:
        "Plane ⊥ B ⇒ B along normal ⇒ maximum flux, but momentarily unchanging ⇒ zero e.m.f. — the 90° phase difference.",
    },
    {
      id: "q18-6",
      chapterId: id,
      type: "mcq",
      concept: "Generator scaling",
      difficulty: "standard",
      prompt:
        "A generator's rotation rate is doubled. The peak e.m.f. and output frequency respectively become",
      options: [
        "×2 and unchanged",
        "unchanged and ×2",
        "×2 and ×2",
        "×4 and ×2",
      ],
      answerIndex: 2,
      explanation:
        "E₀ = NBAω ∝ ω and f = ω/2π ∝ ω — both double.",
    },
    {
      id: "q18-7",
      chapterId: id,
      type: "mcq",
      concept: "Transformer",
      difficulty: "standard",
      prompt:
        "An ideal transformer has 100 primary and 2500 secondary turns. With 12 V a.c. across the primary drawing 5.0 A, the secondary provides",
      options: [
        "300 V and 0.20 A",
        "300 V and 125 A",
        "0.48 V and 125 A",
        "300 V and 5.0 A",
      ],
      answerIndex: 0,
      explanation:
        "Vs = 12 × 25 = 300 V; power conservation: Is = VpIp/Vs = 60/300 = 0.20 A.",
    },
    {
      id: "q18-8",
      chapterId: id,
      type: "mcq",
      concept: "Transmission",
      difficulty: "challenging",
      prompt:
        "Power P is sent down cables of resistance R at voltage V. If V is increased 10×, cable power loss falls by a factor of",
      options: ["10", "100", "√10", "20"],
      answerIndex: 1,
      explanation:
        "I = P/V falls 10×; loss I²R falls 10² = 100×. The core argument for high-voltage transmission.",
    },
    {
      id: "q18-9",
      chapterId: id,
      type: "blank",
      concept: "Faraday",
      difficulty: "foundation",
      prompt:
        "Faraday's law: the induced e.m.f. equals the rate of change of magnetic flux ______.",
      answers: ["linkage"],
      explanation:
        "For a coil, the rate of change of flux LINKAGE (Nφ) gives the total induced e.m.f.",
    },
    {
      id: "q18-10",
      chapterId: id,
      type: "blank",
      concept: "Lenz",
      difficulty: "foundation",
      prompt:
        "Lenz's law is a consequence of the conservation of ______.",
      answers: ["energy"],
      explanation:
        "If induced effects aided the change, energy would be created from nothing.",
    },
    {
      id: "q18-11",
      chapterId: id,
      type: "mcq",
      concept: "Eddy currents",
      difficulty: "standard",
      prompt: "Transformer cores are laminated in order to",
      options: [
        "increase the core's flux density",
        "reduce eddy-current losses",
        "increase the turns ratio",
        "allow d.c. operation",
      ],
      answerIndex: 1,
      explanation:
        "Thin insulated laminations interrupt the large circulating eddy-current loops, cutting I²R heating in the core.",
    },
    {
      id: "q18-12",
      chapterId: id,
      type: "mcq",
      concept: "Flux vs emf graphs",
      difficulty: "challenging",
      prompt:
        "The flux linkage through a coil varies as a triangular wave in time. The induced e.m.f. is",
      options: [
        "triangular, in phase",
        "sinusoidal",
        "a square wave",
        "zero",
      ],
      answerIndex: 2,
      explanation:
        "E = −d(Nφ)/dt: constant gradients (up/down) give constant e.m.f.s of alternating sign — a square wave.",
    },
  ],
  workedExamples: [
    {
      id: "we18-1",
      chapterId: id,
      title: "Rod on rails: e.m.f., current and force balance",
      topic: "Electromagnetic Induction",
      subtopic: "E = BLv and energy transfer",
      difficulty: "challenging",
      conceptsTested: ["E = BLv", "Lenz's law", "Power balance"],
      requiredFormulas: ["E = BLv", "I = E/R", "F = BIL", "P = Fv = EI"],
      question:
        "A conducting rod of length 0.40 m slides at a constant 2.5 m s⁻¹ along frictionless horizontal rails in a vertical field of 0.60 T. The rails are joined by a 1.2 Ω resistor. Find (a) the induced e.m.f., (b) the current, (c) the force needed to keep the rod moving at constant speed, and (d) show the mechanical power input equals the electrical power dissipated.",
      thinking:
        "The moving rod sweeps flux at rate BLv, driving current round the circuit. Lenz's law: the current experiences a retarding force BIL, so a forward force of equal size is needed for constant velocity. Power in = power out closes the energy loop.",
      roadmap:
        "E = BLv → I = E/R → F_applied = BIL (balances retarding force) → verify Fv = I²R.",
      givens: [
        "L = 0.40 m, v = 2.5 m s⁻¹ (constant)",
        "B = 0.60 T perpendicular to the circuit plane",
        "R = 1.2 Ω, frictionless rails",
      ],
      unknowns: ["E", "I", "Applied force", "Power balance"],
      steps: [
        {
          title: "Induced e.m.f.",
          content: "E = BLv = 0.60 × 0.40 × 2.5 = 0.60 V.",
          why: "The rod sweeps area Lv each second, so flux changes at BLv — Faraday's law in translation form.",
        },
        {
          title: "Current",
          content: "I = E/R = 0.60/1.2 = 0.50 A.",
          why: "The rod acts as a battery of e.m.f. 0.60 V driving the resistor loop (rod resistance neglected).",
        },
        {
          title: "Force for constant velocity",
          content:
            "The current-carrying rod in the field feels F = BIL = 0.60 × 0.50 × 0.40 = 0.12 N, directed AGAINST the motion (Lenz). Constant velocity ⇒ applied force = 0.12 N forwards.",
          why: "Lenz's law guarantees the magnetic force retards the rod — otherwise we'd get free energy.",
          checkpoint: {
            question: "Why must the magnetic force on the rod oppose its motion?",
            options: [
              "Because the field is vertical",
              "Lenz's law / energy conservation — induction opposes the change causing it",
              "Because the resistor heats up",
            ],
            answerIndex: 1,
            feedback:
              "If the force aided the motion, the rod would accelerate for free — violating energy conservation. Lenz's law forbids it.",
          },
        },
        {
          title: "Power balance",
          content:
            "Mechanical input: P = Fv = 0.12 × 2.5 = 0.30 W. Electrical dissipation: P = I²R = 0.25 × 1.2 = 0.30 W ✓. The work done against the magnetic force is exactly the heat in the resistor.",
          why: "This equality is the point of the problem: induction converts mechanical work to electrical energy, conserving the total.",
        },
      ],
      finalAnswer:
        "(a) 0.60 V (b) 0.50 A (c) 0.12 N applied forwards (d) Fv = I²R = 0.30 W — energy conserved.",
      hints: [
        "Flux swept per second = B × (area per second) = BLv.",
        "Treat the rod as the cell of the circuit: I = BLv/R.",
        "The rod carries current in a field — what force acts, and which way (Lenz)?",
        "Compare Fv with I²R.",
      ],
      markScheme: [
        { point: "E = BLv = 0.60 V", mark: "A1" },
        { point: "I = 0.50 A", mark: "A1" },
        { point: "Retarding force BIL identified with Lenz reasoning; applied force 0.12 N", mark: "M1 A1" },
        { point: "Power balance Fv = I²R demonstrated", mark: "A1" },
      ],
      variants: [
        {
          question: "The resistor is replaced by one of 0.60 Ω. What applied force now keeps v = 2.5 m s⁻¹?",
          answer:
            "I = 0.60/0.60 = 1.0 A; F = BIL = 0.24 N — halving R doubles the current and the required force.",
          hint: "E is unchanged; only the circuit resistance changed.",
        },
        {
          question:
            "The applied force is removed. Describe the rod's subsequent motion.",
          answer:
            "The retarding force BIL = B²L²v/R decelerates it; as v falls so does the force — an exponential-style decay of speed towards zero (τ = mR/B²L²).",
          hint: "Retarding force is proportional to v.",
        },
      ],
    },
    {
      id: "we18-2",
      chapterId: id,
      title: "AC generator output",
      topic: "Electromagnetic Induction",
      subtopic: "Rotating coil",
      difficulty: "standard",
      conceptsTested: ["Flux linkage of rotating coil", "E = NBAω sinωt", "Phase relationship"],
      requiredFormulas: ["Nφ = NBA cosωt", "E₀ = NBAω"],
      question:
        "A 150-turn rectangular coil of area 8.0 × 10⁻³ m² rotates at 50 revolutions per second in a uniform field of 0.25 T. Find (a) the peak e.m.f., (b) the e.m.f. when the coil's plane makes 30° with the field, and (c) sketch how the e.m.f. varies if the rotation rate doubles.",
      thinking:
        "Standard generator. Convert rev/s to ω, apply E₀ = NBAω. For (b), relate the geometry carefully: e.m.f. ∝ sin(angle between NORMAL and B) = cos(angle between PLANE and B).",
      roadmap:
        "ω = 2πf → E₀ = NBAω → geometric care for the 30° instant → scaling argument for doubled speed.",
      givens: [
        "N = 150, A = 8.0 × 10⁻³ m², B = 0.25 T",
        "f = 50 rev s⁻¹",
      ],
      unknowns: ["E₀", "E at 30° plane-to-field", "Sketch for 2ω"],
      steps: [
        {
          title: "Angular frequency and peak e.m.f.",
          content:
            "ω = 2πf = 2π × 50 = 314 rad s⁻¹. E₀ = NBAω = 150 × 0.25 × 8.0 × 10⁻³ × 314 = 94 V.",
          why: "Peak e.m.f. collects every factor that speeds up flux change: turns, field, area, rotation rate.",
        },
        {
          title: "E.m.f. at the 30° instant",
          content:
            "E = E₀ sinθ where θ is the angle between the coil's NORMAL and B. Plane at 30° to field ⇒ normal at 60° to field ⇒ E = 94 sin60°... careful: E = NBAω sin(ωt) with ωt measured from the position of maximum flux (normal ∥ B). When the plane is at 30° to B, the normal is at 60°, so E = 94 × sin60° = 81 V.",
          why: "The single most common error is mixing plane-angle with normal-angle. Flux uses cos(normal angle); e.m.f. uses sin(normal angle).",
          checkpoint: {
            question:
              "When the coil's PLANE is parallel to B, the e.m.f. is",
            options: ["zero", "maximum", "E₀/2"],
            answerIndex: 1,
            feedback:
              "Plane ∥ B means normal ⊥ B: flux is zero but changing at its fastest rate — e.m.f. is at its peak.",
          },
        },
        {
          title: "Doubling the rotation rate",
          content:
            "ω → 2ω: peak doubles to 188 V AND period halves to 10 ms. The sketch shows a sinusoid twice as tall with peaks twice as frequent.",
          why: "Both amplitude (NBAω) and frequency (ω/2π) are proportional to ω — examiners expect both changes drawn.",
        },
      ],
      finalAnswer:
        "(a) E₀ ≈ 94 V (b) ≈ 81 V (c) doubled amplitude ≈ 188 V and doubled frequency (period 10 ms).",
      hints: [
        "Convert to ω = 2πf first.",
        "E₀ = NBAω.",
        "Track the angle of the NORMAL, not the plane: flux ∝ cos(normal angle), e.m.f. ∝ sin(normal angle).",
      ],
      markScheme: [
        { point: "ω = 314 rad s⁻¹", mark: "B1" },
        { point: "E₀ = 94 V", mark: "A1" },
        { point: "Correct angle handling giving 81 V", mark: "M1 A1" },
        { point: "Doubled amplitude AND frequency in sketch", mark: "B1" },
      ],
      variants: [
        {
          question:
            "At what orientation is the generator's e.m.f. zero, and what is the flux then?",
          answer:
            "When the coil's plane is perpendicular to B (normal parallel to B): flux is at its maximum NBA, but its rate of change — and hence E — is zero.",
          hint: "The 90° phase difference between flux and e.m.f.",
        },
        {
          question:
            "What peak e.m.f. results from 300 turns at 25 rev/s (other values unchanged)?",
          answer:
            "Doubling N doubles E₀; halving f halves it — E₀ stays at 94 V, but the frequency halves to 25 Hz.",
          hint: "E₀ ∝ Nω — the two changes offset in amplitude but not frequency.",
        },
      ],
    },
    {
      id: "we18-3",
      chapterId: id,
      title: "Transformer and transmission efficiency",
      topic: "Electromagnetic Induction",
      subtopic: "Transformers",
      difficulty: "standard",
      conceptsTested: ["Turns ratio", "Power conservation", "I²R transmission loss"],
      requiredFormulas: ["Vs/Vp = Ns/Np", "VpIp = VsIs", "P_loss = I²R"],
      question:
        "A power station generates 2.0 MW at 10 kV. The voltage is stepped up by an ideal transformer of turns ratio 1:25 for transmission along cables of total resistance 50 Ω. Calculate (a) the transmission voltage and current, (b) the power lost in the cables, and (c) the loss if transmission had occurred directly at 10 kV.",
      thinking:
        "The classic 'why high voltage' calculation: step-up reduces current 25-fold, and cable loss falls with I².",
      roadmap:
        "Vs = 25Vp → Is from power conservation → I²R loss → repeat at the original voltage for contrast.",
      givens: [
        "P = 2.0 MW, generated at Vp = 10 kV",
        "Turns ratio Np:Ns = 1:25, ideal transformer",
        "Cable resistance R = 50 Ω",
      ],
      unknowns: ["Vs, Is", "Cable loss stepped-up", "Cable loss at 10 kV"],
      steps: [
        {
          title: "Stepped-up voltage and current",
          content:
            "Vs = 25 × 10 kV = 250 kV. Ideal transformer conserves power: Is = P/Vs = 2.0 × 10⁶/2.5 × 10⁵ = 8.0 A.",
          why: "Turns ratio sets voltage; power conservation (not the turns ratio directly) is the safest route to current.",
        },
        {
          title: "Cable loss after step-up",
          content: "P_loss = Is²R = 8.0² × 50 = 3200 W = 3.2 kW — only 0.16% of the 2.0 MW.",
          why: "The current in the cables, not the voltage across the system, sets the ohmic heating.",
          checkpoint: {
            question: "Which formula gives the cable loss correctly?",
            options: [
              "V²/R with V = 250 kV",
              "I²R with the cable current",
              "P²/R",
            ],
            answerIndex: 1,
            feedback:
              "V²/R would need the p.d. ACROSS THE CABLES (IR = 400 V), not the transmission voltage. I²R with the line current is direct and safe.",
          },
        },
        {
          title: "Loss without step-up",
          content:
            "At 10 kV: I = 2.0 × 10⁶/1.0 × 10⁴ = 200 A; P_loss = 200² × 50 = 2.0 MW — the entire generated power would be dissipated (transmission impossible).",
          why: "25× higher current ⇒ 625× higher loss; the comparison is the whole argument for the grid's high-voltage design.",
        },
      ],
      finalAnswer:
        "(a) 250 kV, 8.0 A (b) 3.2 kW lost (0.16%) (c) 2.0 MW — total loss; stepping up is essential.",
      hints: [
        "Vs = (Ns/Np)Vp; then use VpIp = VsIs.",
        "Cable loss uses the CURRENT through the cables: I²R.",
        "Repeat the current calculation at 10 kV and compare.",
      ],
      markScheme: [
        { point: "Vs = 250 kV and Is = 8.0 A", mark: "A1" },
        { point: "P_loss = I²R = 3.2 kW", mark: "M1 A1" },
        { point: "Comparison case 2.0 MW with conclusion", mark: "A1" },
      ],
      variants: [
        {
          question:
            "What p.d. is actually dropped across the cables in the stepped-up case, and what reaches the far end?",
          answer:
            "V_cable = IR = 8.0 × 50 = 400 V; the far end receives 250 kV − 0.4 kV = 249.6 kV (then stepped down).",
          hint: "Ohm's law on the cable resistance alone.",
        },
        {
          question:
            "A transformer is 96% efficient delivering 480 W from its secondary. What primary power is drawn?",
          answer: "P_p = 480/0.96 = 500 W (20 W lost in windings/core).",
          hint: "Efficiency = P_out/P_in.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d18-1",
      chapterId: id,
      title: "E.m.f. of a rod moving through a field",
      goal: "Derive E = BLv for a rod of length L moving at speed v perpendicular to B.",
      steps: [
        {
          text: "In time Δt the rod advances a distance vΔt, sweeping out an area",
          expression: "ΔA = L v Δt",
          explanation:
            "The rod, its direction of motion and the swept rectangle define the geometry — L and v must be perpendicular.",
        },
        {
          text: "The flux through the circuit therefore changes by",
          expression: "Δφ = B ΔA = B L v Δt",
          explanation:
            "B is perpendicular to the plane of the swept area, so all of it threads the new area.",
        },
        {
          text: "Faraday's law gives the magnitude of the induced e.m.f.:",
          expression: "E = Δφ/Δt = BLv",
          explanation:
            "Rate of change of flux equals e.m.f. — the translation version of the generator equation.",
        },
      ],
    },
    {
      id: "d18-2",
      chapterId: id,
      title: "Sinusoidal e.m.f. of a rotating coil",
      goal: "Show that a coil rotating at ω in a uniform field generates E = NBAω sinωt.",
      steps: [
        {
          text: "Let the coil's normal make angle ωt with B at time t. The flux linkage is",
          expression: "Nφ = NBA cosωt",
          explanation:
            "Only the component of B along the normal counts; uniform rotation makes the angle grow linearly in time.",
        },
        {
          text: "Apply Faraday's law (differentiate with respect to time):",
          expression: "E = −d(Nφ)/dt = NBAω sinωt",
          explanation:
            "The derivative of cos is −sin; the chain rule brings down the factor ω — faster rotation means faster flux change.",
        },
        {
          text: "Identify the peak value:",
          expression: "E₀ = NBAω",
          explanation:
            "E.m.f. peaks when sinωt = 1, i.e. when the coil plane is parallel to B and flux is zero — 90° out of phase with the flux.",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n18-flux",
      label: "Flux φ = BA",
      tier: "core",
      x: 0.5,
      y: 0.08,
      explanation: "Field through an area; linkage Nφ multiplies by turns.",
      example: "0.3 T through 2 × 10⁻³ m²: φ = 6 × 10⁻⁴ Wb.",
      application: "The quantity whose change drives all induction.",
      related: ["n18-faraday"],
    },
    {
      id: "n18-faraday",
      label: "Faraday's law",
      tier: "core",
      x: 0.5,
      y: 0.32,
      explanation: "E = −d(Nφ)/dt — e.m.f. equals rate of change of flux linkage.",
      example: "Linkage falling 8 Wb-turns in 0.1 s induces 80 V.",
      application: "Gradient of Nφ–t graphs; every generator.",
      related: ["n18-flux", "n18-lenz", "n18-blv", "n18-rotating", "n18-transformer"],
    },
    {
      id: "n18-lenz",
      label: "Lenz's law",
      tier: "core",
      x: 0.82,
      y: 0.3,
      explanation:
        "Induced effects oppose the change causing them — energy conservation in disguise.",
      example: "Approaching N pole sees an induced N pole facing it.",
      application: "Direction of every induced current; magnetic braking.",
      related: ["n18-faraday", "n18-eddy"],
    },
    {
      id: "n18-blv",
      label: "Moving rod E = BLv",
      tier: "major",
      x: 0.18,
      y: 0.5,
      explanation:
        "Rod sweeping area converts mechanical work into electrical energy: Fv = EI.",
      example: "0.4 m rod at 2.5 m s⁻¹ in 0.6 T: 0.6 V.",
      application: "Rails problems; aircraft-wing e.m.f.s.",
      related: ["n18-faraday"],
    },
    {
      id: "n18-rotating",
      label: "Rotating coil / generator",
      tier: "major",
      x: 0.5,
      y: 0.58,
      explanation:
        "Nφ = NBA cosωt ⇒ E = NBAω sinωt; e.m.f. 90° out of phase with flux; E₀ = NBAω.",
      example: "150 turns, 8 × 10⁻³ m², 0.25 T at 50 Hz: 94 V peak.",
      application: "AC generation; sketch questions on doubling ω.",
      related: ["n18-faraday", "n18-transformer"],
    },
    {
      id: "n18-eddy",
      label: "Eddy currents",
      tier: "detail",
      x: 0.85,
      y: 0.56,
      explanation:
        "Bulk induced current loops: braking and induction heating, or core losses to laminate away.",
      example: "Induction hob heats the pan directly.",
      application: "Transformer laminations; magnetic braking explanations.",
      related: ["n18-lenz", "n18-transformer"],
    },
    {
      id: "n18-transformer",
      label: "Transformers",
      tier: "major",
      x: 0.6,
      y: 0.82,
      explanation:
        "Shared changing core flux: Vs/Vp = Ns/Np, Ip/Is = Ns/Np (ideal); a.c. only.",
      example: "1:25 step-up sends 2 MW at 8 A instead of 200 A.",
      application: "Grid transmission; loss calculations.",
      related: ["n18-faraday", "n18-rotating", "n18-transmission"],
    },
    {
      id: "n18-transmission",
      label: "High-voltage transmission",
      tier: "detail",
      x: 0.25,
      y: 0.85,
      explanation: "For fixed P, I = P/V; cable loss I²R falls as 1/V².",
      example: "25× voltage ⇒ 625× lower loss.",
      application: "'Explain why the grid uses 400 kV' questions.",
      related: ["n18-transformer"],
    },
  ],
  conceptEdges: [
    { from: "n18-flux", to: "n18-faraday", label: "rate of change" },
    { from: "n18-faraday", to: "n18-lenz", label: "direction" },
    { from: "n18-faraday", to: "n18-blv", label: "translation" },
    { from: "n18-faraday", to: "n18-rotating", label: "rotation" },
    { from: "n18-lenz", to: "n18-eddy", label: "bulk conductors" },
    { from: "n18-rotating", to: "n18-transformer", label: "a.c. supply" },
    { from: "n18-faraday", to: "n18-transformer", label: "core flux" },
    { from: "n18-eddy", to: "n18-transformer", label: "laminations" },
    { from: "n18-transformer", to: "n18-transmission", label: "step-up" },
  ],
  graphs: [
    {
      id: "g18-phase",
      title: "Rotating coil: flux linkage and e.m.f.",
      caption:
        "E = −d(Nφ)/dt: the e.m.f. (sin) lags the flux (cos) by 90° — e.m.f. peaks exactly where flux crosses zero.",
      xLabel: "t / T",
      yLabel: "Nφ, E (normalised)",
      zeroLine: true,
      curves: [
        {
          label: "Flux linkage ∝ cos ωt",
          color: 1,
          points: sample((t) => Math.cos(2 * Math.PI * t), 0, 2, 140),
        },
        {
          label: "e.m.f. ∝ sin ωt",
          color: 6,
          points: sample((t) => Math.sin(2 * Math.PI * t), 0, 2, 140),
        },
      ],
    },
    {
      id: "g18-double",
      title: "Effect of doubling the rotation rate",
      caption:
        "Doubling ω doubles the peak e.m.f. AND the frequency — twice-tall peaks, twice as often.",
      xLabel: "t / T₁",
      yLabel: "E / E₀",
      zeroLine: true,
      curves: [
        {
          label: "ω",
          color: 1,
          points: sample((t) => Math.sin(2 * Math.PI * t), 0, 2, 140),
        },
        {
          label: "2ω",
          color: 3,
          dashed: true,
          points: sample((t) => 2 * Math.sin(4 * Math.PI * t), 0, 2, 200),
        },
      ],
    },
    {
      id: "g18-triangle",
      title: "Triangular flux gives square-wave e.m.f.",
      caption:
        "The induced e.m.f. is the negative GRADIENT of flux linkage: constant slopes produce constant e.m.f.s of alternating sign.",
      xLabel: "t",
      yLabel: "Nφ, E",
      zeroLine: true,
      curves: [
        {
          label: "Flux linkage (triangular)",
          color: 1,
          points: sample(
            (t) => 2 * Math.abs(((t + 0.25) % 1) - 0.5) - 0.5,
            0,
            2,
            160
          ),
        },
        {
          label: "Induced e.m.f. (square)",
          color: 6,
          dashed: true,
          points: sample(
            (t) => (((t + 0.25) % 1) < 0.5 ? -0.8 : 0.8),
            0,
            2,
            320
          ),
        },
      ],
    },
  ],
};
