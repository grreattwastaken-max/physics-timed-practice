import { Chapter } from "../types";
import { sample } from "./curves";

const id = "ch16";

export const ch16: Chapter = {
  id,
  number: 16,
  title: "Circuits",
  syllabus: "H2 Physics 9478",
  icon: "cpu",
  color: 3,
  description:
    "Resistance and resistivity, I–V characteristics, internal resistance, series/parallel networks, potential dividers and RC circuits.",
  sections: [
    "Circuit Symbols and Diagrams",
    "Resistance, Resistivity and Internal Resistance",
    "I–V Characteristics",
    "Resistors in Series and Parallel",
    "Potential Dividers",
    "RC Circuits with d.c. Source",
  ],
  learningOutcomes: [
    "Recall and use circuit symbols; draw and interpret circuit diagrams.",
    "Define resistance R = V/I and solve problems with V = IR.",
    "Use R = ρl/A relating resistance to resistivity, length and area.",
    "Sketch and interpret I–V characteristics of ohmic resistors, semiconductor diodes, filament lamps and NTC thermistors.",
    "Explain the temperature dependence of resistivity of metals (drift velocity) and semiconductors (carrier density).",
    "Understand the effect of internal resistance on terminal p.d. and output power.",
    "Solve series and parallel resistor combinations.",
    "Solve potential divider circuits, including with thermistors and LDRs.",
    "Combine capacitors in series and parallel.",
    "Describe charging/discharging of a capacitor through a resistor using x = x₀e^(−t/τ) or x = x₀(1 − e^(−t/τ)), with τ = RC.",
  ],
  quickReview: [
    "R = V/I defines resistance; ohmic conductors have constant R (straight I–V line through origin).",
    "R = ρl/A — resistivity ρ is material-specific; length and area are geometric.",
    "Filament lamp: R rises with temperature (lattice vibrations slow drift); NTC thermistor: R falls (carrier density n rises).",
    "Real cells: e.m.f. E = I(R + r); terminal p.d. V = E − Ir drops as current rises.",
    "Series: R = R₁ + R₂; parallel: 1/R = 1/R₁ + 1/R₂. Capacitors combine the opposite way.",
    "Potential divider: V_out = R₂/(R₁+R₂) × V_in — the basis of sensor circuits.",
    "RC circuits: τ = RC; charge/discharge curves are exponentials; after one τ, 63% charged or 37% remaining.",
  ],
  examReview: [
    {
      heading: "Resistance and materials",
      points: [
        "Define R = V/I (it is a ratio — not necessarily constant). Ohm's law adds 'constant temperature ⇒ I ∝ V'.",
        "R = ρl/A: doubling length doubles R; doubling diameter quarters R (A ∝ d²).",
        "Metals heated: n unchanged, but lattice vibrations increase collision rate, reducing drift velocity ⇒ ρ and R rise (filament lamp's curving I–V graph).",
        "NTC semiconductors heated: n increases dramatically, outweighing the drift effect ⇒ R falls.",
        "Diode: conducts above ~0.6–0.7 V forward; near-zero current in reverse — know the I–V sketch.",
      ],
    },
    {
      heading: "Internal resistance",
      points: [
        "E = I(R + r): the e.m.f. drives current through both external R and internal r.",
        "Terminal p.d. V = E − Ir: equals E only when no current flows (open circuit).",
        "Graph of V against I: intercept = E, gradient = −r.",
        "Maximum power transfer to the load occurs when R = r (useful check: P = E²R/(R+r)²).",
        "'Lost volts' Ir heat the cell — why batteries warm up under heavy load.",
      ],
    },
    {
      heading: "Networks and dividers",
      points: [
        "Series: same current, p.d.s add, R_total = ΣR. Parallel: same p.d., currents add, 1/R_total = Σ1/R.",
        "Adding a resistor in parallel always REDUCES total resistance (extra current path).",
        "Potential divider: V₂ = R₂V/(R₁+R₂). With a thermistor or LDR in one arm, V_out responds to temperature/light — decide which arm places V_out rising or falling.",
        "Capacitors: parallel C_total = ΣC; series 1/C_total = Σ1/C — opposite to resistors.",
      ],
    },
    {
      heading: "RC charging and discharging",
      points: [
        "Time constant τ = RC (seconds). Large τ ⇒ slow charge/discharge.",
        "Discharge: Q, V, I all decay as x₀e^(−t/τ); after each τ the value falls to 1/e ≈ 37%.",
        "Charging: Q and V grow as x₀(1 − e^(−t/τ)); the CURRENT still decays as I₀e^(−t/τ).",
        "At t = 0 a discharged capacitor behaves like a wire (max current); fully charged it behaves like a break (zero current).",
        "Half-life analogue: t_½ = τ ln2 ≈ 0.69RC.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "What resistance really is",
      body: "Resistance is the ratio V/I at an operating point — a definition, not a law. Ohm's law is the additional experimental claim that for metals at constant temperature this ratio stays fixed. The microscopic story: conduction electrons accelerate in the field, collide with vibrating lattice ions, and lose their directed momentum. More vibrations (higher temperature) means more frequent collisions, a smaller drift velocity for the same field, and larger ρ. In semiconductors an entirely different effect dominates: thermal energy promotes electrons across the band gap, so carrier density n grows exponentially with temperature and resistance collapses — the NTC thermistor.",
    },
    {
      heading: "Internal resistance and the V–I diagnostic line",
      body: "A real source is modelled as a perfect e.m.f. E in series with internal resistance r. The terminal p.d. is V = E − Ir: every ampere drawn 'loses' Ir volts inside the cell. Plotting terminal V against current I gives a straight line whose intercept is E and gradient −r — a standard practical and data-analysis question. Two limits anchor intuition: open circuit (I = 0) reads the full e.m.f.; short circuit (V = 0) draws the maximum current E/r. Power to the external load peaks when R = r, but efficiency is then only 50% — power stations therefore operate far from matching.",
    },
    {
      heading: "Why parallel resistance is smaller",
      body: "Adding a resistor in parallel opens another path for current at the same p.d. Total current rises while V is fixed, so total resistance falls — always below the smallest branch resistance. The reciprocal-sum rule is just conservation of current plus the shared p.d.: I = V/R₁ + V/R₂ = V(1/R₁ + 1/R₂). Common exam traps: forgetting to invert at the end of 1/R calculations, and assuming equal current split when branch resistances differ (current divides in inverse proportion to resistance).",
    },
    {
      heading: "The potential divider as a sensor interface",
      body: "Two resistors in series share the supply p.d. in proportion to their resistances: V₂ = R₂V/(R₁+R₂). Replace one with a thermistor or LDR and V_out becomes a temperature or light signal. The design question examiners love: where should the sensing element go so that V_out RISES when temperature rises? If the thermistor (R falls when hot) is the TOP arm R₁, then V_out = R₂V/(R₁+R₂) rises as R₁ falls. Check limits mentally: R₁ → 0 gives V_out → V; R₁ → ∞ gives V_out → 0.",
    },
    {
      heading: "RC circuits: exponential behaviour from first principles",
      body: "Discharging through R, the capacitor drives current I = V/R = Q/RC, and this current is the rate at which the capacitor loses its own charge: dQ/dt = −Q/RC. A quantity whose decay rate is proportional to itself decays exponentially: Q = Q₀e^(−t/RC). The time constant τ = RC sets the scale: 37% remains after τ, ~5τ empties it for practical purposes. Charging mirrors this with Q = Q₀(1 − e^(−t/τ)) — but note the current on charging still DECAYS exponentially, because as charge accumulates the opposing p.d. grows and the net driving p.d. shrinks. This is mathematically identical to radioactive decay (Chapter 20) — the same exponential with the same half-life relation t_½ = τ ln 2.",
    },
  ],
  keyIdeas: [
    "Resistance is a ratio; Ohm's law is a special-case behaviour of metals at constant temperature.",
    "Temperature effects: metals — drift velocity falls; semiconductors — carrier density rises.",
    "Terminal p.d. = e.m.f. − lost volts (Ir).",
    "Series shares p.d.; parallel shares current; dividers turn resistance ratios into voltage signals.",
    "τ = RC governs all capacitor timing; exponentials arise because rate ∝ amount.",
  ],
  definitions: [
    {
      term: "Resistance",
      definition:
        "The ratio of the potential difference across a component to the current through it: R = V/I.",
    },
    {
      term: "Ohm's law",
      definition:
        "The current through a metallic conductor is proportional to the p.d. across it, provided physical conditions (esp. temperature) remain constant.",
    },
    {
      term: "Resistivity",
      definition:
        "The property ρ of a material defined by R = ρl/A; numerically the resistance of a unit cube of the material. Unit: Ω m.",
    },
    {
      term: "Internal resistance",
      definition:
        "The resistance within a source of e.m.f. that causes the terminal p.d. to be less than the e.m.f. when current flows: V = E − Ir.",
    },
    {
      term: "Terminal potential difference",
      definition:
        "The p.d. across the terminals of a source when delivering current: V = E − Ir.",
    },
    {
      term: "Time constant",
      definition:
        "τ = RC — the time for the charge (or p.d./current) on a discharging capacitor to fall to 1/e (≈37%) of its initial value.",
    },
    {
      term: "NTC thermistor",
      definition:
        "A semiconductor component whose resistance decreases as temperature increases (negative temperature coefficient), because carrier density rises with temperature.",
    },
    {
      term: "Light-dependent resistor (LDR)",
      definition:
        "A semiconductor component whose resistance decreases as light intensity increases.",
    },
  ],
  misconceptions: [
    {
      myth: "R = V/I is Ohm's law.",
      reality:
        "R = V/I merely defines resistance. Ohm's law is the claim that I ∝ V (constant R) for a metallic conductor at constant temperature — many components (diodes, lamps) do not obey it.",
    },
    {
      myth: "A filament lamp's resistance falls as it heats because 'hot things conduct better'.",
      reality:
        "In metals, heating increases lattice vibrations, reducing drift velocity — resistance RISES. It is semiconductors whose resistance falls (carrier density n increases).",
    },
    {
      myth: "The terminal p.d. of a battery always equals its e.m.f.",
      reality:
        "Only at zero current. Under load, V = E − Ir: the 'lost volts' Ir heat the cell internally.",
    },
    {
      myth: "Current is used up as it flows through resistors in series.",
      reality:
        "Charge is conserved — the same current flows through every series element. It is ENERGY (p.d.) that is shared between them.",
    },
    {
      myth: "Adding more resistors always increases total resistance.",
      reality:
        "Only in series. In parallel each added resistor opens a new current path and total resistance FALLS below the smallest branch.",
    },
    {
      myth: "Capacitors combine like resistors.",
      reality:
        "They combine the opposite way: parallel capacitances ADD (C = C₁ + C₂); series combine by reciprocals.",
    },
    {
      myth: "During charging, the current through the resistor grows as the capacitor fills.",
      reality:
        "Charging current is largest at t = 0 (uncharged capacitor ≈ wire) and decays exponentially as the opposing capacitor p.d. builds.",
    },
  ],
  examTips: [
    "For I–V sketch questions, label axes and mark key features: origin line for ohmic, curvature direction for the lamp, knee voltage (~0.7 V) for the diode.",
    "Explain temperature effects in TWO steps: what happens microscopically (v or n), then the effect on R — one without the other loses marks.",
    "V–I data for a cell: plot terminal V against I; quote E from the intercept and r from −gradient.",
    "In divider problems write V_out = (R_bottom/(R_top + R_bottom))V and sanity-check limits before substituting numbers.",
    "RC questions: identify what is decaying (Q, V, I all share the same exponential) and whether the process is charge (1 − e^(−t/τ)) or discharge (e^(−t/τ)).",
    "Check the time-constant units: Ω × F = s. If your τ isn't in seconds, a conversion slipped.",
  ],
  formulas: [
    {
      id: "f16-resistance",
      chapterId: id,
      name: "Resistance",
      expression: "R = V / I",
      meaning: "Ratio of p.d. across a component to current through it.",
      variables: [
        { symbol: "R", name: "resistance", unit: "Ω" },
        { symbol: "V", name: "potential difference", unit: "V" },
        { symbol: "I", name: "current", unit: "A" },
      ],
      conditions: "Definition — applies at any operating point, ohmic or not.",
      applications: [
        "Reading R off any point of an I–V characteristic",
        "All circuit analysis via V = IR",
      ],
      commonMistakes: [
        "Calling this 'Ohm's law' (that adds constancy of R)",
        "Using gradient of a curved I–V graph instead of V/I at the point",
      ],
    },
    {
      id: "f16-resistivity",
      chapterId: id,
      name: "Resistivity",
      expression: "R = ρl / A",
      meaning: "Resistance from material property (ρ) and geometry (l, A).",
      variables: [
        { symbol: "ρ", name: "resistivity", unit: "Ω m" },
        { symbol: "l", name: "length of conductor", unit: "m" },
        { symbol: "A", name: "cross-sectional area", unit: "m²" },
      ],
      conditions: "Uniform conductor at fixed temperature.",
      applications: [
        "Wire-design problems (doubling d quarters R)",
        "Comparing materials via ρ",
      ],
      commonMistakes: [
        "Using diameter instead of area (A = πd²/4)",
        "Forgetting ρ changes with temperature",
      ],
    },
    {
      id: "f16-emf-internal",
      chapterId: id,
      name: "E.m.f. with internal resistance",
      expression: "E = I(R + r);  V = E − Ir",
      meaning:
        "The e.m.f. drives current through external and internal resistance; terminal p.d. is reduced by the lost volts Ir.",
      variables: [
        { symbol: "E", name: "e.m.f. of source", unit: "V" },
        { symbol: "r", name: "internal resistance", unit: "Ω" },
        { symbol: "R", name: "external (load) resistance", unit: "Ω" },
        { symbol: "V", name: "terminal p.d.", unit: "V" },
      ],
      conditions: "Source modelled as ideal e.m.f. + series r.",
      applications: [
        "V–I graphs: intercept E, gradient −r",
        "Max power to load at R = r",
      ],
      commonMistakes: [
        "Using the e.m.f. as the p.d. across the external load",
        "Sign slips in V = E − Ir",
      ],
    },
    {
      id: "f16-series-parallel",
      chapterId: id,
      name: "Resistor combinations",
      expression: "Series: R = R₁ + R₂ + …   Parallel: 1/R = 1/R₁ + 1/R₂ + …",
      meaning: "Equivalent resistance of networks.",
      variables: [
        { symbol: "R", name: "combined resistance", unit: "Ω" },
        { symbol: "R₁, R₂ …", name: "individual resistances", unit: "Ω" },
      ],
      conditions:
        "Series: same current through all. Parallel: same p.d. across all.",
      applications: [
        "Reducing ladder networks stage by stage",
        "Two-resistor shortcut: R = R₁R₂/(R₁+R₂)",
      ],
      commonMistakes: [
        "Forgetting the final reciprocal in parallel sums",
        "Expecting parallel combination to exceed branch values",
      ],
    },
    {
      id: "f16-divider",
      chapterId: id,
      name: "Potential divider",
      expression: "V_out = R₂ V_in / (R₁ + R₂)",
      meaning: "Series resistors share the input p.d. in proportion to resistance.",
      variables: [
        { symbol: "V_in", name: "supply p.d.", unit: "V" },
        { symbol: "R₁", name: "upper resistor", unit: "Ω" },
        { symbol: "R₂", name: "lower resistor (across which V_out is taken)", unit: "Ω" },
      ],
      conditions: "Negligible current drawn by the output device.",
      applications: [
        "Thermistor/LDR sensing circuits",
        "Setting bias voltages",
      ],
      commonMistakes: [
        "Putting the wrong arm in the numerator",
        "Ignoring loading when the output device draws current",
      ],
    },
    {
      id: "f16-cap-combo",
      chapterId: id,
      name: "Capacitor combinations",
      expression: "Parallel: C = C₁ + C₂   Series: 1/C = 1/C₁ + 1/C₂",
      meaning: "Equivalent capacitance — the reverse pattern of resistors.",
      variables: [
        { symbol: "C", name: "combined capacitance", unit: "F" },
        { symbol: "C₁, C₂", name: "individual capacitances", unit: "F" },
      ],
      conditions:
        "Parallel: same p.d., charges add. Series: same charge, p.d.s add.",
      applications: [
        "Energy storage banks (parallel)",
        "Voltage-rating stacks (series)",
      ],
      commonMistakes: [
        "Applying resistor rules by habit",
        "Forgetting series capacitors all carry the SAME charge",
      ],
    },
    {
      id: "f16-rc",
      chapterId: id,
      name: "RC charge/discharge",
      expression: "x = x₀e^(−t/τ) or x = x₀(1 − e^(−t/τ)),  τ = RC",
      meaning:
        "Exponential decay (discharge; also charging CURRENT) or growth (charging Q, V) with time constant RC.",
      variables: [
        { symbol: "τ", name: "time constant", unit: "s" },
        { symbol: "x", name: "Q, V or I", unit: "C, V or A" },
        { symbol: "R", name: "series resistance", unit: "Ω" },
        { symbol: "C", name: "capacitance", unit: "F" },
      ],
      conditions: "Capacitor charging/discharging through a resistor from a d.c. source.",
      applications: [
        "Camera flash, timing circuits, smoothing",
        "t_½ = τ ln 2 ≈ 0.69RC",
      ],
      commonMistakes: [
        "Using the growth form for charging CURRENT (it decays!)",
        "Dropping units so τ isn't in seconds",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc16-1",
      chapterId: id,
      tag: "Definition",
      front: "Define resistance and state Ohm's law — they are different!",
      back: "Resistance: R = V/I (a ratio, always defined). Ohm's law: for a metallic conductor at constant temperature, I ∝ V (R constant).",
    },
    {
      id: "fc16-2",
      chapterId: id,
      tag: "Explanation",
      front: "Why does a filament lamp's resistance increase as it brightens?",
      back: "Higher temperature → greater amplitude of lattice-ion vibrations → more frequent electron-ion collisions → lower drift velocity for a given field → higher resistivity and resistance. (n is unchanged in a metal.)",
    },
    {
      id: "fc16-3",
      chapterId: id,
      tag: "Explanation",
      front: "Why does an NTC thermistor's resistance fall when heated?",
      back: "Thermal energy promotes many more electrons into conduction — the number density n of charge carriers rises steeply, outweighing increased lattice scattering, so resistance falls.",
    },
    {
      id: "fc16-4",
      chapterId: id,
      tag: "Internal resistance",
      front: "Write the circuit equation for a cell with internal resistance, and identify E and r on a V–I graph.",
      back: "E = I(R + r), terminal p.d. V = E − Ir. Plot V against I: y-intercept = E, gradient = −r.",
    },
    {
      id: "fc16-5",
      chapterId: id,
      tag: "Networks",
      front: "State the series and parallel combination rules for resistors AND capacitors.",
      back: "Resistors — series: add; parallel: reciprocals add. Capacitors — parallel: add; series: reciprocals add (the opposite pattern).",
    },
    {
      id: "fc16-6",
      chapterId: id,
      tag: "Divider",
      front: "Give the potential-divider equation and its validity condition.",
      back: "V_out = R₂V_in/(R₁+R₂) across R₂ — valid when the output draws negligible current (otherwise the load changes the effective R₂).",
    },
    {
      id: "fc16-7",
      chapterId: id,
      tag: "Divider design",
      front:
        "A thermistor divider must output a RISING voltage when temperature rises. Where does the thermistor go?",
      back: "In the TOP arm (R₁). Heating lowers R₁, so V_out = R₂V/(R₁+R₂) rises. Check limits: R₁→0 ⇒ V_out→V.",
    },
    {
      id: "fc16-8",
      chapterId: id,
      tag: "RC",
      front: "Define the time constant of an RC circuit two ways.",
      back: "τ = RC; the time for a discharging capacitor's charge (or V, I) to fall to 1/e ≈ 37% of its initial value. Also: time to reach 63% of full charge when charging.",
    },
    {
      id: "fc16-9",
      chapterId: id,
      tag: "RC",
      front: "During charging, how do Q and I behave with time?",
      back: "Q (and V_C) grow as Q₀(1 − e^(−t/τ)); the current DECAYS as I₀e^(−t/τ) because the growing capacitor p.d. opposes the supply.",
    },
    {
      id: "fc16-10",
      chapterId: id,
      tag: "I–V curves",
      front: "Describe the I–V characteristic of a semiconductor diode.",
      back: "Negligible current until the forward 'knee' (~0.6–0.7 V), then current rises steeply; in reverse bias the current is essentially zero (until breakdown, beyond syllabus).",
    },
    {
      id: "fc16-11",
      chapterId: id,
      tag: "Power",
      front: "When is power delivered to an external load maximised, and what is the efficiency there?",
      back: "When load resistance equals internal resistance (R = r). Efficiency is then only 50% — half the energy heats the cell.",
    },
    {
      id: "fc16-12",
      chapterId: id,
      tag: "Numbers",
      front: "Two 6 Ω resistors in parallel, in series with 3 Ω. Total resistance?",
      back: "Parallel pair: 3 Ω. Total: 3 + 3 = 6 Ω.",
    },
  ],
  quiz: [
    {
      id: "q16-1",
      chapterId: id,
      type: "mcq",
      concept: "Resistivity",
      difficulty: "standard",
      prompt:
        "A wire of resistance R is stretched (volume constant) to twice its length. Its new resistance is",
      options: ["R/2", "R", "2R", "4R"],
      answerIndex: 3,
      explanation:
        "Doubling l halves A (volume fixed). R = ρl/A ⇒ ×2 from l and ×2 from A ⇒ 4R.",
    },
    {
      id: "q16-2",
      chapterId: id,
      type: "mcq",
      concept: "Internal resistance",
      difficulty: "standard",
      prompt:
        "A cell of e.m.f. 1.5 V and internal resistance 0.5 Ω delivers 1.0 A. The terminal p.d. is",
      options: ["1.5 V", "1.0 V", "0.5 V", "2.0 V"],
      answerIndex: 1,
      explanation: "V = E − Ir = 1.5 − (1.0)(0.5) = 1.0 V.",
    },
    {
      id: "q16-3",
      chapterId: id,
      type: "mcq",
      concept: "Parallel resistance",
      difficulty: "foundation",
      prompt: "Three 6.0 Ω resistors are connected in parallel. The combination is",
      options: ["18 Ω", "6.0 Ω", "2.0 Ω", "0.5 Ω"],
      answerIndex: 2,
      explanation: "1/R = 3 × (1/6) ⇒ R = 2.0 Ω — below the smallest branch, as always.",
    },
    {
      id: "q16-4",
      chapterId: id,
      type: "mcq",
      concept: "Potential divider",
      difficulty: "standard",
      prompt:
        "In a divider with R₁ = 4.0 kΩ (top) and R₂ = 2.0 kΩ (bottom) across 9.0 V, the p.d. across R₂ is",
      options: ["3.0 V", "6.0 V", "4.5 V", "2.0 V"],
      answerIndex: 0,
      explanation: "V₂ = R₂V/(R₁+R₂) = (2/6) × 9.0 = 3.0 V.",
    },
    {
      id: "q16-5",
      chapterId: id,
      type: "mcq",
      concept: "Thermistor divider",
      difficulty: "challenging",
      prompt:
        "A thermistor forms the BOTTOM arm of a divider; V_out is taken across it. As temperature rises, V_out",
      options: [
        "rises, because thermistor resistance rises",
        "falls, because thermistor resistance falls",
        "stays constant",
        "rises, because thermistor resistance falls",
      ],
      answerIndex: 1,
      explanation:
        "NTC: heating lowers its resistance. V_out ∝ R_thermistor/(R₁+R_th) falls as R_th falls.",
    },
    {
      id: "q16-6",
      chapterId: id,
      type: "mcq",
      concept: "Metals vs semiconductors",
      difficulty: "standard",
      prompt:
        "The resistance of a metal rises with temperature primarily because",
      options: [
        "the number density of electrons decreases",
        "electron drift velocity falls due to increased lattice vibration",
        "electrons gain too much energy to conduct",
        "the wire expands",
      ],
      answerIndex: 1,
      explanation:
        "n is fixed in a metal; increased ion vibration scatters electrons more often, cutting drift velocity.",
    },
    {
      id: "q16-7",
      chapterId: id,
      type: "mcq",
      concept: "RC discharge",
      difficulty: "standard",
      prompt:
        "A capacitor discharges through a resistor with τ = 2.0 s. After 4.0 s the fraction of initial charge remaining is about",
      options: ["50%", "37%", "25%", "14%"],
      answerIndex: 3,
      explanation:
        "Two time constants: e⁻² ≈ 0.135 ≈ 14%. (Each τ multiplies by 1/e ≈ 0.37.)",
    },
    {
      id: "q16-8",
      chapterId: id,
      type: "mcq",
      concept: "RC charging current",
      difficulty: "challenging",
      prompt:
        "While a capacitor charges through a resistor from a battery, the charging current",
      options: [
        "grows as 1 − e^(−t/τ)",
        "is constant at E/R",
        "decays as e^(−t/τ) from initial value E/R",
        "is zero until the capacitor is half-charged",
      ],
      answerIndex: 2,
      explanation:
        "At t = 0 the uncharged capacitor offers no opposing p.d. (I₀ = E/R); as V_C grows the net p.d. shrinks, so I decays exponentially.",
    },
    {
      id: "q16-9",
      chapterId: id,
      type: "blank",
      concept: "Time constant",
      difficulty: "foundation",
      prompt: "The time constant of an RC circuit is τ = R × ______.",
      answers: ["C", "capacitance"],
      explanation: "τ = RC; ohms × farads = seconds.",
    },
    {
      id: "q16-10",
      chapterId: id,
      type: "blank",
      concept: "Internal resistance graph",
      difficulty: "standard",
      prompt:
        "For a V–I graph of a real cell, the magnitude of the gradient equals the ______ resistance.",
      answers: ["internal"],
      explanation: "V = E − Ir is linear with gradient −r and intercept E.",
    },
    {
      id: "q16-11",
      chapterId: id,
      type: "mcq",
      concept: "Capacitor combination",
      difficulty: "standard",
      prompt: "Two 4.0 μF capacitors in series have combined capacitance",
      options: ["8.0 μF", "4.0 μF", "2.0 μF", "1.0 μF"],
      answerIndex: 2,
      explanation:
        "Series: 1/C = 1/4 + 1/4 = 1/2 ⇒ C = 2.0 μF — capacitors combine opposite to resistors.",
    },
    {
      id: "q16-12",
      chapterId: id,
      type: "mcq",
      concept: "Diode characteristic",
      difficulty: "foundation",
      prompt: "An ideal silicon diode in reverse bias conducts",
      options: [
        "a current proportional to voltage",
        "essentially zero current",
        "only above 0.7 V",
        "a constant leakage of 0.7 A",
      ],
      answerIndex: 1,
      explanation:
        "Reverse-biased diodes block current; forward conduction begins near the 0.6–0.7 V knee.",
    },
  ],
  workedExamples: [
    {
      id: "we16-1",
      chapterId: id,
      title: "E.m.f. and internal resistance from circuit data",
      topic: "Circuits",
      subtopic: "Internal resistance",
      difficulty: "standard",
      conceptsTested: ["E = I(R + r)", "Terminal p.d.", "Power dissipation"],
      requiredFormulas: ["E = I(R + r)", "P = I²R"],
      question:
        "A battery of e.m.f. 12.0 V and internal resistance 0.50 Ω is connected to a 5.5 Ω resistor. Calculate (a) the current, (b) the terminal p.d., (c) the power delivered to the resistor, and (d) the fraction of total power wasted internally.",
      thinking:
        "Classic single-loop circuit with internal resistance. The e.m.f. drives the current through the TOTAL resistance R + r; the terminal p.d. is what remains after the lost volts.",
      roadmap:
        "I = E/(R+r) → V = E − Ir → P_R = I²R → compare with P_total = EI.",
      givens: ["E = 12.0 V", "r = 0.50 Ω", "R = 5.5 Ω"],
      unknowns: ["I", "V_terminal", "P_R", "wasted fraction"],
      steps: [
        {
          title: "Current from the full loop",
          content: "I = E/(R + r) = 12.0/(5.5 + 0.50) = 2.0 A.",
          why: "The e.m.f. drives charge through BOTH resistances in series — using R alone is the classic error.",
          checkpoint: {
            question: "Which resistance belongs in I = E/(…)?",
            options: ["R only", "r only", "R + r"],
            answerIndex: 2,
            feedback:
              "The current passes through the cell's internal resistance too: I = E/(R + r).",
          },
        },
        {
          title: "Terminal p.d.",
          content: "V = E − Ir = 12.0 − (2.0)(0.50) = 11.0 V. (Check: V = IR = 2.0 × 5.5 = 11.0 V ✓)",
          why: "One volt is 'lost' per 2 A across the internal resistance; the external resistor sees the rest.",
        },
        {
          title: "Power to the load",
          content: "P_R = I²R = (2.0)²(5.5) = 22 W.",
          why: "I²R gives the dissipation in the specific resistor; using E here would count the internal loss too.",
        },
        {
          title: "Wasted fraction",
          content:
            "P_total = EI = 24 W; P_internal = I²r = 2.0 W. Fraction wasted = 2/24 ≈ 8.3%.",
          why: "Energy audit: everything the e.m.f. supplies is either delivered (22 W) or lost internally (2 W).",
        },
      ],
      finalAnswer:
        "(a) 2.0 A (b) 11.0 V (c) 22 W (d) 8.3% of the supplied power heats the battery.",
      hints: [
        "Draw the loop: e.m.f. in series with r and R.",
        "I = E/(R + r), then V_terminal = E − Ir.",
        "Compare I²R with EI for the energy audit.",
      ],
      markScheme: [
        { point: "I = 2.0 A using total resistance", mark: "M1" },
        { point: "Terminal p.d. 11.0 V", mark: "A1" },
        { point: "P = 22 W in the load", mark: "A1" },
        { point: "Internal loss identified as I²r with fraction ≈ 8%", mark: "A1" },
      ],
      variants: [
        {
          question:
            "The 5.5 Ω resistor is replaced so that maximum power is delivered to the load. What resistance is needed and what is that power?",
          answer:
            "R = r = 0.50 Ω. Then I = 12 A and P = I²R = 72 W (with equal 72 W wasted internally — 50% efficiency).",
          hint: "Maximum power transfer occurs at R = r.",
        },
        {
          question:
            "With the original resistor, what current would flow if the terminals were accidentally shorted?",
          answer: "I = E/r = 12.0/0.50 = 24 A — dangerously large; the cell heats rapidly.",
          hint: "Short circuit means R = 0.",
        },
      ],
    },
    {
      id: "we16-2",
      chapterId: id,
      title: "Designing a thermistor sensing circuit",
      topic: "Circuits",
      subtopic: "Potential dividers",
      difficulty: "challenging",
      conceptsTested: ["Potential divider", "NTC behaviour", "Design reasoning"],
      requiredFormulas: ["V_out = R₂V/(R₁+R₂)"],
      question:
        "A fan controller needs an output voltage that rises above 6.0 V when the temperature exceeds 30 °C. A thermistor has resistance 4.0 kΩ at 30 °C (falling with temperature). A 9.0 V supply and one fixed resistor are available. Design the divider: where should the thermistor go, and what fixed resistance is required?",
      thinking:
        "Design question: choose the arm so V_out RISES with temperature, then solve the divider equation at the threshold point (V_out = 6.0 V exactly when R_th = 4.0 kΩ).",
      roadmap:
        "1) NTC: R falls when hot. For rising V_out, thermistor goes in the TOP arm. 2) Set V_out = 6.0 V with R_th = 4.0 kΩ; solve for R_fixed.",
      givens: [
        "Supply 9.0 V",
        "R_thermistor = 4.0 kΩ at the 30 °C threshold, NTC",
        "Required: V_out = 6.0 V at threshold, rising when hotter",
      ],
      unknowns: ["Thermistor arm (top/bottom)", "Fixed resistance value"],
      steps: [
        {
          title: "Choose the arm",
          content:
            "V_out is taken across the bottom resistor: V_out = R_bot × V/(R_top + R_bot). Heating lowers the thermistor's resistance. If the thermistor is the TOP arm, R_top falls when hot ⇒ V_out rises. So: thermistor on top, fixed resistor on the bottom, output across the fixed resistor.",
          why: "Direction of response is set by circuit position, not by component value — this is the design insight being tested.",
          checkpoint: {
            question:
              "For V_out (across the bottom arm) to rise with temperature, the NTC thermistor must be",
            options: ["the bottom arm", "the top arm", "either arm"],
            answerIndex: 1,
            feedback:
              "Falling top-arm resistance pushes a larger share of the supply onto the bottom arm, raising V_out.",
          },
        },
        {
          title: "Apply the divider at threshold",
          content:
            "At 30 °C: 6.0 = R_f × 9.0/(4000 + R_f).",
          why: "The switching condition is exactly met at the threshold temperature where R_th = 4.0 kΩ.",
        },
        {
          title: "Solve for the fixed resistor",
          content:
            "6.0(4000 + R_f) = 9.0R_f ⇒ 24 000 = 3.0R_f ⇒ R_f = 8.0 kΩ.",
          why: "Linear rearrangement; check: 8/(4+8) × 9 = 6.0 V ✓.",
        },
        {
          title: "Verify the response direction",
          content:
            "At 40 °C the thermistor might be, say, 2.5 kΩ: V_out = 8/(2.5+8) × 9 = 6.9 V > 6.0 V ✓ — output rises past the threshold as required.",
          why: "A design answer should demonstrate the circuit behaves correctly beyond the design point.",
        },
      ],
      finalAnswer:
        "Thermistor in the top arm, 8.0 kΩ fixed resistor in the bottom arm with V_out across it.",
      hints: [
        "Does the thermistor's resistance rise or fall when heated? (NTC)",
        "Write V_out for the bottom arm and ask which arm must shrink for V_out to grow.",
        "Set V_out = 6.0 V at R_th = 4.0 kΩ and solve.",
      ],
      markScheme: [
        { point: "Thermistor placed in top arm with correct reasoning", mark: "B1" },
        { point: "Divider equation set up at threshold", mark: "M1" },
        { point: "R_f = 8.0 kΩ", mark: "A1" },
        { point: "Response direction verified", mark: "B1" },
      ],
      variants: [
        {
          question:
            "Redesign so V_out FALLS below 3.0 V when light intensity rises, using an LDR that is 6.0 kΩ at the threshold.",
          answer:
            "LDR resistance falls in bright light. Output across the LDR (bottom arm): V_out = R_LDR V/(R_f + R_LDR). At threshold: 3.0 = 6.0k × 9/(R_f + 6.0k) ⇒ R_f = 12 kΩ.",
          hint: "Now you want V_out tracking the falling resistance — put the LDR in the bottom arm.",
        },
        {
          question:
            "In the original design, what happens to V_out if the controller input draws significant current?",
          answer:
            "The input resistance loads the bottom arm (parallel combination < 8.0 kΩ), so V_out drops below the design value and the switch-on temperature shifts higher.",
          hint: "A loaded divider no longer obeys the simple two-resistor formula.",
        },
      ],
    },
    {
      id: "we16-3",
      chapterId: id,
      title: "Capacitor discharge timing",
      topic: "Circuits",
      subtopic: "RC circuits",
      difficulty: "standard",
      conceptsTested: ["Exponential decay", "Time constant", "Logarithms"],
      requiredFormulas: ["V = V₀e^(−t/RC)", "τ = RC"],
      question:
        "A 470 μF capacitor charged to 9.0 V discharges through a 2.2 kΩ resistor. Find (a) the time constant, (b) the p.d. after 1.5 s, and (c) the time for the p.d. to fall to 2.0 V.",
      thinking:
        "Pure discharge problem: identify τ = RC, apply the decay law, invert with natural logs for part (c).",
      roadmap: "τ = RC → V(t) = V₀e^(−t/τ) → t = τ ln(V₀/V).",
      givens: ["C = 470 μF", "R = 2.2 kΩ", "V₀ = 9.0 V"],
      unknowns: ["τ", "V at t = 1.5 s", "t when V = 2.0 V"],
      steps: [
        {
          title: "Time constant",
          content: "τ = RC = (2.2 × 10³)(470 × 10⁻⁶) = 1.03 s.",
          why: "Ω × F = s; this sets the scale of the whole discharge.",
        },
        {
          title: "P.d. after 1.5 s",
          content: "V = 9.0e^(−1.5/1.03) = 9.0e^(−1.45) = 9.0 × 0.234 = 2.1 V.",
          why: "Direct substitution into the decay law; 1.5 s is about 1.5 time constants.",
          checkpoint: {
            question: "Roughly what fraction remains after 1.5 time constants?",
            options: ["about 50%", "about 22%", "about 37%"],
            answerIndex: 1,
            feedback: "e^(−1.5) ≈ 0.22 — between 37% (1τ) and 14% (2τ).",
          },
        },
        {
          title: "Invert for the time",
          content:
            "2.0 = 9.0e^(−t/τ) ⇒ e^(−t/τ) = 0.222 ⇒ t = τ ln(9.0/2.0) = 1.03 × 1.504 = 1.55 s.",
          why: "Taking natural logs is the standard technique for extracting time from an exponential.",
        },
      ],
      finalAnswer: "(a) τ ≈ 1.0 s (b) ≈2.1 V (c) ≈1.6 s.",
      hints: [
        "τ = RC — watch the μF and kΩ prefixes.",
        "V = V₀e^(−t/τ) for discharge.",
        "Rearrange with natural logarithms: t = τ ln(V₀/V).",
      ],
      markScheme: [
        { point: "τ = 1.03 s with correct unit handling", mark: "A1" },
        { point: "V(1.5 s) ≈ 2.1 V", mark: "A1" },
        { point: "Correct log rearrangement and t ≈ 1.6 s", mark: "M1 A1" },
      ],
      variants: [
        {
          question:
            "The same capacitor is CHARGED through the same resistor from 9.0 V. What is the p.d. after one time constant?",
          answer: "V = 9.0(1 − e⁻¹) = 9.0 × 0.632 = 5.7 V.",
          hint: "Charging uses the (1 − e^(−t/τ)) form.",
        },
        {
          question: "What is the half-life of this discharge?",
          answer: "t_½ = τ ln2 = 1.03 × 0.693 = 0.72 s.",
          hint: "Same mathematics as radioactive decay.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d16-1",
      chapterId: id,
      title: "Parallel resistor formula",
      goal: "Derive 1/R = 1/R₁ + 1/R₂ for two resistors in parallel.",
      steps: [
        {
          text: "Both resistors share the same p.d. V (they connect the same two nodes). The branch currents are",
          expression: "I₁ = V/R₁,  I₂ = V/R₂",
          explanation:
            "Parallel elements have a common potential difference — the defining feature.",
        },
        {
          text: "Charge conservation at the junction: the supply current is the sum of branch currents,",
          expression: "I = I₁ + I₂ = V/R₁ + V/R₂",
          explanation:
            "Current splits at a node with no accumulation of charge (Kirchhoff's first law).",
        },
        {
          text: "Define the equivalent resistance by I = V/R and divide through by V:",
          expression: "1/R = 1/R₁ + 1/R₂",
          explanation:
            "The equivalent resistor must carry the same total current at the same p.d. — reciprocals add.",
        },
      ],
    },
    {
      id: "d16-2",
      chapterId: id,
      title: "Exponential discharge of a capacitor",
      goal: "Show that a capacitor discharging through R obeys Q = Q₀e^(−t/RC).",
      steps: [
        {
          text: "At any instant the capacitor p.d. drives a current through R:",
          expression: "I = V/R = Q/RC",
          explanation: "V = Q/C for the capacitor, and the resistor obeys V = IR.",
        },
        {
          text: "This current is the rate of loss of the capacitor's own charge:",
          expression: "dQ/dt = −Q/RC",
          explanation:
            "The minus sign encodes discharge — the charge decreases as current flows.",
        },
        {
          text: "Rate proportional to amount ⇒ exponential decay. Integrating:",
          expression: "Q = Q₀e^(−t/RC)",
          explanation:
            "Separating variables and integrating ln Q = −t/RC + const, with Q = Q₀ at t = 0.",
        },
        {
          text: "Since V = Q/C and I = V/R, all three quantities share the decay:",
          expression: "V = V₀e^(−t/τ),  I = I₀e^(−t/τ),  τ = RC",
          explanation:
            "Dividing the Q-solution by constants C or RC preserves the exponential form.",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n16-resistance",
      label: "Resistance R = V/I",
      tier: "core",
      x: 0.5,
      y: 0.08,
      explanation: "Ratio of p.d. to current; constant only for ohmic conductors.",
      example: "A component with 6 V across it carrying 2 A has R = 3 Ω.",
      application: "Every circuit computation.",
      related: ["n16-resistivity", "n16-iv", "n16-series"],
    },
    {
      id: "n16-resistivity",
      label: "Resistivity ρ",
      tier: "major",
      x: 0.16,
      y: 0.24,
      explanation: "Material property: R = ρl/A.",
      example: "Copper ρ ≈ 1.7 × 10⁻⁸ Ω m.",
      application: "Wire sizing; comparing materials.",
      related: ["n16-resistance", "n16-temperature"],
    },
    {
      id: "n16-iv",
      label: "I–V characteristics",
      tier: "major",
      x: 0.84,
      y: 0.22,
      explanation:
        "Ohmic resistor: straight line. Lamp: gradient falls as it heats. Diode: knee at ~0.7 V. NTC: gradient rises.",
      example: "Filament lamp curve bends towards the V-axis.",
      application: "Component identification questions.",
      related: ["n16-resistance", "n16-temperature"],
    },
    {
      id: "n16-temperature",
      label: "Temperature effects",
      tier: "major",
      x: 0.5,
      y: 0.3,
      explanation:
        "Metals: drift velocity falls (R↑). Semiconductors: carrier density rises (R↓).",
      example: "NTC thermistor in a fridge sensor.",
      application: "Explain-style exam questions; sensor design.",
      related: ["n16-resistivity", "n16-iv", "n16-divider"],
    },
    {
      id: "n16-emf",
      label: "Internal resistance",
      tier: "core",
      x: 0.2,
      y: 0.5,
      explanation: "E = I(R + r); terminal p.d. V = E − Ir; V–I graph gives E and r.",
      example: "Car battery sags from 12.6 V to ~10 V while cranking.",
      application: "Battery testing; max-power transfer.",
      related: ["n16-resistance", "n16-series"],
    },
    {
      id: "n16-series",
      label: "Series & parallel",
      tier: "core",
      x: 0.55,
      y: 0.54,
      explanation:
        "Series: add R, share V. Parallel: add 1/R, share I. Capacitors reversed.",
      example: "Two 6 Ω in parallel = 3 Ω.",
      application: "Network reduction, household wiring.",
      related: ["n16-emf", "n16-divider", "n16-capcombo"],
    },
    {
      id: "n16-divider",
      label: "Potential divider",
      tier: "major",
      x: 0.84,
      y: 0.56,
      explanation: "V_out = R₂V/(R₁+R₂); with thermistor/LDR arms becomes a sensor.",
      example: "Thermostat input stage.",
      application: "Design questions: choose the arm for the required response.",
      related: ["n16-series", "n16-temperature"],
    },
    {
      id: "n16-capcombo",
      label: "Capacitor networks",
      tier: "detail",
      x: 0.3,
      y: 0.74,
      explanation: "Parallel: C add. Series: 1/C add (same charge on each).",
      example: "Two 4 μF in series = 2 μF.",
      application: "Equivalent capacitance before RC analysis.",
      related: ["n16-series", "n16-rc"],
    },
    {
      id: "n16-rc",
      label: "RC circuits",
      tier: "core",
      x: 0.62,
      y: 0.82,
      explanation:
        "τ = RC. Discharge: x₀e^(−t/τ). Charging Q,V: x₀(1−e^(−t/τ)); charging I decays.",
      example: "Camera flash recharge; intermittent wiper timing.",
      application: "Timing calculations; log rearrangement for t.",
      related: ["n16-capcombo", "n16-series"],
    },
  ],
  conceptEdges: [
    { from: "n16-resistance", to: "n16-resistivity", label: "R = ρl/A" },
    { from: "n16-resistance", to: "n16-iv", label: "graphs" },
    { from: "n16-resistivity", to: "n16-temperature", label: "ρ(T)" },
    { from: "n16-iv", to: "n16-temperature", label: "explains curves" },
    { from: "n16-resistance", to: "n16-emf", label: "real sources" },
    { from: "n16-emf", to: "n16-series", label: "loop analysis" },
    { from: "n16-series", to: "n16-divider", label: "share V" },
    { from: "n16-temperature", to: "n16-divider", label: "sensors" },
    { from: "n16-series", to: "n16-capcombo", label: "reversed rules" },
    { from: "n16-capcombo", to: "n16-rc", label: "with resistor" },
  ],
  graphs: [
    {
      id: "g16-iv",
      title: "I–V characteristics of three components",
      caption:
        "Ohmic resistor: straight through the origin. Filament lamp: gradient falls as heating raises R. Diode: conduction only beyond the ~0.7 V knee.",
      xLabel: "V",
      yLabel: "I",
      zeroLine: false,
      curves: [
        {
          label: "Ohmic resistor",
          color: 1,
          points: sample((v) => 0.8 * v, 0, 1, 20),
        },
        {
          label: "Filament lamp",
          color: 3,
          points: sample((v) => Math.tanh(2.2 * v) * 0.75, 0, 1, 60),
        },
        {
          label: "Diode",
          color: 6,
          points: sample(
            (v) => (v < 0.55 ? 0.002 : 0.9 * (Math.exp(9 * (v - 0.55)) - 1) / (Math.exp(9 * 0.45) - 1)),
            0,
            1,
            80
          ),
        },
      ],
    },
    {
      id: "g16-vi-cell",
      title: "Terminal p.d. against current for a real cell",
      caption:
        "V = E − Ir: intercept gives the e.m.f., the magnitude of the gradient gives the internal resistance.",
      xLabel: "I",
      yLabel: "V",
      curves: [
        {
          label: "V = E − Ir",
          color: 1,
          points: sample((i) => 1 - 0.45 * i, 0, 1, 10),
        },
      ],
    },
    {
      id: "g16-rc",
      title: "Capacitor charging and discharging (τ = RC)",
      caption:
        "Charging p.d. grows as 1 − e^(−t/τ) reaching 63% at t = τ; discharge decays to 37% at t = τ. Charging current follows the discharge curve.",
      xLabel: "t / τ",
      yLabel: "V / V₀",
      curves: [
        {
          label: "Charging: 1 − e^(−t/τ)",
          color: 2,
          points: sample((t) => 1 - Math.exp(-t), 0, 5, 90),
        },
        {
          label: "Discharge: e^(−t/τ)",
          color: 6,
          points: sample((t) => Math.exp(-t), 0, 5, 90),
        },
        {
          label: "63% / 37% at t = τ",
          color: 3,
          dashed: true,
          points: [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
          ],
        },
      ],
    },
  ],
};
