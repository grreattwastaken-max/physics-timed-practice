import { Chapter } from "../types";
import { sample } from "./curves";

const id = "ch15";

export const ch15: Chapter = {
  id,
  number: 15,
  title: "Currents",
  syllabus: "H2 Physics 9478",
  icon: "activity",
  color: 2,
  description:
    "Current and drift velocity, p.d. vs e.m.f., electrical power, and alternating currents with r.m.s. values and rectification.",
  sections: [
    "Current and Drift Velocity",
    "Potential Difference, E.M.F. and Power",
    "Power Supplies: d.c. and a.c.",
    "R.M.S. Values",
    "Rectification",
  ],
  learningOutcomes: [
    "Understand current as the rate of flow of charge and use I = Q/t.",
    "Derive and use I = nAvq for a current-carrying conductor.",
    "Use V = W/Q for potential difference as work done per unit charge.",
    "Use P = VI, P = I²R and P = V²/R for electrical power.",
    "Distinguish e.m.f. and p.d. using energy considerations.",
    "Use period, frequency, peak and root-mean-square values of alternating currents/voltages.",
    "Represent a sinusoidal a.c. by x = x₀ sin ωt.",
    "Deduce that mean power in a resistive load is half the peak power for sinusoidal a.c.",
    "Use I_rms = I₀/√2 and V_rms = V₀/√2.",
    "Explain half-wave rectification by a single diode.",
  ],
  quickReview: [
    "Current I = Q/t — rate of flow of charge; conventional current follows positive charge.",
    "Microscopically I = nAvq: charge-carrier density × area × drift velocity × charge each.",
    "P.d. V = W/Q converts electrical energy to other forms; e.m.f. converts other forms TO electrical energy.",
    "Power: P = VI = I²R = V²/R — pick the form matching the fixed quantity.",
    "Sinusoidal a.c.: x = x₀ sin ωt with ω = 2πf = 2π/T.",
    "R.m.s. value = peak/√2 (sinusoids only); r.m.s. values give the d.c.-equivalent heating effect.",
    "Mean power = ½ × peak power in a resistive load; half-wave rectification passes only alternate half-cycles.",
  ],
  examReview: [
    {
      heading: "Current microscopically",
      points: [
        "I = Q/t defines current; 1 A = 1 C s⁻¹.",
        "I = nAvq: derive by counting the charge in a cylinder of length vt crossing a section in time t.",
        "In series, the same current flows everywhere — if A halves, drift velocity v doubles (n, q fixed).",
        "Metals: n ~ 10²⁸–10²⁹ m⁻³ so drift velocities are tiny (~mm s⁻¹); semiconductors have far smaller n, hence larger v for the same current.",
      ],
    },
    {
      heading: "P.d., e.m.f. and power",
      points: [
        "P.d. between two points = electrical energy converted to other forms per unit charge passing between them: V = W/Q.",
        "E.m.f. of a source = energy converted from other forms to electrical per unit charge driven round the circuit.",
        "The distinction is the DIRECTION of energy conversion — state it explicitly for the mark.",
        "P = VI always; P = I²R and P = V²/R only for resistive components.",
      ],
    },
    {
      heading: "Alternating current",
      points: [
        "x = x₀ sin ωt: peak value x₀, period T = 2π/ω, frequency f = 1/T.",
        "R.m.s. value: the steady (d.c.) value that would dissipate the same average power in the same resistor.",
        "For sinusoids only: I_rms = I₀/√2, V_rms = V₀/√2. Mains '230 V' is an r.m.s. value.",
        "Mean power ⟨P⟩ = I_rms²R = ½I₀²R = ½ peak power. The ½ comes from ⟨sin²⟩ = ½.",
        "Half-wave rectification: a single diode conducts only when forward-biased, passing alternate half-cycles; the load sees zero for half of each period, so ⟨P⟩ falls to ¼ of the peak power.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "Drift velocity: why lights turn on instantly",
      body: "Electrons drift astonishingly slowly — of order 0.1 mm s⁻¹ in household wiring. Yet a lamp lights the instant you flick the switch because the electric field that pushes electrons is established along the whole wire at nearly the speed of light; electrons everywhere begin drifting simultaneously. The derivation of I = nAvq makes the picture quantitative: in time t, all carriers within a cylinder of length vt pass the cross-section, carrying charge nA(vt)q, so I = nAvq. Every symbol matters in exams: n is the number density of charge carriers (m⁻³), not the number of carriers.",
    },
    {
      heading: "E.m.f. vs p.d. — one idea, two directions",
      body: "Both are 'energy per unit charge' (J C⁻¹ = V) but they describe opposite conversions. A source's e.m.f. measures chemical/mechanical/light energy converted TO electrical energy per coulomb driven through the source. A p.d. across a component measures electrical energy converted FROM electrical to heat/light/mechanical per coulomb passing through. In a closed circuit, energy conservation demands: e.m.f. = sum of p.d.s around the loop (the seed of Kirchhoff's second law used in Chapter 16).",
    },
    {
      heading: "Why r.m.s. and not the average?",
      body: "The time-average of a sinusoidal current is zero — it spends as much time negative as positive — so a plain average is useless for describing heating. Power, however, depends on I², which is always positive. Averaging I² over a cycle and square-rooting gives the root-mean-square value, the d.c.-equivalent for power purposes: ⟨P⟩ = I_rms²R. For a sinusoid, ⟨sin²ωt⟩ = ½, giving I_rms = I₀/√2 ≈ 0.707I₀. Remember the √2 conversion applies ONLY to sinusoids — for a square wave the r.m.s. equals the peak.",
    },
    {
      heading: "Mean power in a resistive load",
      body: "Instantaneous power P = I₀²R sin²ωt oscillates between 0 and the peak power I₀²R at twice the supply frequency. Because ⟨sin²⟩ = ½ over a whole cycle, the mean power is exactly half the peak power: ⟨P⟩ = ½I₀²R = I_rms²R = I_rms V_rms. Sketching P–t as a raised sine squared (never negative) alongside I–t is a classic exam task — label the peak I₀²R and the mean ½I₀²R.",
    },
    {
      heading: "Half-wave rectification",
      body: "A diode conducts only when forward-biased. Placed in series with a load on an a.c. supply, it passes current only during the half-cycles when the supply drives current in the diode's forward direction; during the other half-cycles the current is (ideally) zero. The load voltage is a train of positive half-sinusoids. Consequences worth quoting: the current is unidirectional but not steady; the mean output p.d. is V₀/π; and the power delivered is one quarter of the peak power, i.e. half of what full a.c. would deliver, since nothing arrives for half of every cycle: ⟨P⟩ = ¼ V₀²/R.",
    },
  ],
  keyIdeas: [
    "Current is a flow rate; drift velocity links it to the microscopic picture via I = nAvq.",
    "P.d. and e.m.f. are both energy-per-charge, distinguished by the direction of conversion.",
    "Power formulas are three faces of P = VI combined with V = IR.",
    "R.m.s. values are power-equivalent d.c. values; the √2 rule is sinusoid-specific.",
    "Mean power of a sinusoid = half the peak power; half-wave rectification halves it again.",
  ],
  definitions: [
    {
      term: "Electric current",
      definition:
        "The rate of flow of charge: I = Q/t, where Q is the charge passing a cross-section in time t.",
    },
    {
      term: "Potential difference",
      definition:
        "The energy converted from electrical to other forms per unit charge passing between the two points: V = W/Q.",
    },
    {
      term: "Electromotive force (e.m.f.)",
      definition:
        "The energy converted from other forms to electrical energy per unit charge driven through the source.",
    },
    {
      term: "The volt",
      definition: "One volt is one joule per coulomb (1 V = 1 J C⁻¹).",
    },
    {
      term: "Root-mean-square value",
      definition:
        "The value of the steady (direct) current or voltage that would dissipate the same average power in the same resistance.",
    },
    {
      term: "Peak value",
      definition:
        "The maximum magnitude x₀ of an alternating quantity x = x₀ sin ωt.",
    },
    {
      term: "Period and frequency",
      definition:
        "Period T is the time for one complete cycle; frequency f = 1/T is the number of cycles per unit time; ω = 2πf.",
    },
    {
      term: "Rectification",
      definition:
        "The conversion of alternating current to direct (unidirectional) current; a single diode achieves half-wave rectification.",
    },
  ],
  misconceptions: [
    {
      myth: "Electrons travel round the circuit at nearly the speed of light.",
      reality:
        "Drift velocities are typically fractions of a millimetre per second. It is the electric field (the signal) that propagates at near light speed, setting all electrons drifting almost simultaneously.",
    },
    {
      myth: "E.m.f. is a force.",
      reality:
        "Despite the name, e.m.f. is energy per unit charge (measured in volts), not a force. It describes conversion of other energy forms into electrical energy.",
    },
    {
      myth: "The average of an a.c. current describes its heating effect.",
      reality:
        "The time-average of a sinusoid is zero. Heating depends on I², so the root-MEAN-SQUARE value is what matters: ⟨P⟩ = I_rms²R.",
    },
    {
      myth: "The √2 relation I_rms = I₀/√2 works for any waveform.",
      reality:
        "It is derived from ⟨sin²⟩ = ½ and holds only for sinusoids. A square wave has I_rms = I₀; other waveforms need their own averaging.",
    },
    {
      myth: "Mains electricity '230 V' refers to the peak voltage.",
      reality:
        "It is the r.m.s. value. The peak is V₀ = 230√2 ≈ 325 V — important when rating insulation and components.",
    },
    {
      myth: "In half-wave rectification the mean power is half the a.c. mean power... so ½ × peak power.",
      reality:
        "Full a.c. mean power is ½ peak power; removing half the cycles halves it again, so half-wave rectified mean power is ¼ of the peak power.",
    },
  ],
  examTips: [
    "When defining p.d. and e.m.f., name the energy conversion and its direction — 'per unit charge' alone scores nothing.",
    "For I = nAvq derivations, define every symbol and start from the cylinder-of-charge argument.",
    "State 'for a sinusoidal waveform' before using the √2 relations — examiners check the caveat.",
    "P–t sketches: power is never negative in a resistor; it oscillates at TWICE the current's frequency.",
    "In rectification questions, sketch aligned V–t graphs for the supply and the load, marking which half-cycles are blocked.",
    "Watch units: mA, μC, kW-hours; convert before substituting.",
  ],
  formulas: [
    {
      id: "f15-current",
      chapterId: id,
      name: "Current",
      expression: "I = Q / t",
      meaning: "Current is the rate of flow of charge past a point.",
      variables: [
        { symbol: "I", name: "current", unit: "A" },
        { symbol: "Q", name: "charge passing", unit: "C" },
        { symbol: "t", name: "time interval", unit: "s" },
      ],
      conditions: "Steady current (else I = dQ/dt).",
      applications: [
        "Charge delivered by a battery: Q = It",
        "Number of electrons per second: N = I/e",
      ],
      commonMistakes: [
        "Confusing charge (C) with current (A)",
        "Using minutes instead of seconds",
      ],
    },
    {
      id: "f15-navq",
      chapterId: id,
      name: "Microscopic current",
      expression: "I = nAvq",
      meaning:
        "Current in terms of carrier density n, cross-sectional area A, drift velocity v and carrier charge q.",
      variables: [
        { symbol: "n", name: "number density of charge carriers", unit: "m⁻³" },
        { symbol: "A", name: "cross-sectional area", unit: "m²" },
        { symbol: "v", name: "drift velocity", unit: "m s⁻¹" },
        { symbol: "q", name: "charge per carrier", unit: "C" },
      ],
      conditions: "Uniform conductor with a single carrier type.",
      applications: [
        "Comparing drift velocities where a wire narrows (v ∝ 1/A for the same I)",
        "Metal vs semiconductor carrier densities",
      ],
      commonMistakes: [
        "Taking n as 'number of electrons' rather than number per unit volume",
        "Forgetting that same current + smaller A ⇒ larger v",
      ],
    },
    {
      id: "f15-pd",
      chapterId: id,
      name: "Potential difference",
      expression: "V = W / Q",
      meaning:
        "Energy converted from electrical to other forms per unit charge between two points.",
      variables: [
        { symbol: "V", name: "potential difference", unit: "V" },
        { symbol: "W", name: "energy converted", unit: "J" },
        { symbol: "Q", name: "charge passing", unit: "C" },
      ],
      conditions: "Any component; direction of conversion distinguishes it from e.m.f.",
      applications: [
        "Energy dissipated in a resistor: W = QV = VIt",
        "Defining the volt as J C⁻¹",
      ],
      commonMistakes: [
        "Mixing up which way energy is converted (that's e.m.f. vs p.d.)",
      ],
    },
    {
      id: "f15-power",
      chapterId: id,
      name: "Electrical power",
      expression: "P = VI = I²R = V²/R",
      meaning: "Rate of conversion of electrical energy.",
      variables: [
        { symbol: "P", name: "power", unit: "W" },
        { symbol: "V", name: "p.d. across component", unit: "V" },
        { symbol: "I", name: "current through it", unit: "A" },
        { symbol: "R", name: "resistance", unit: "Ω" },
      ],
      conditions:
        "P = VI is general; the R-forms assume the component obeys V = IR at that instant.",
      applications: [
        "Choosing fuse ratings from P = VI",
        "Power loss in transmission lines: P_loss = I²R",
      ],
      commonMistakes: [
        "Applying V²/R with the supply voltage instead of the component's p.d.",
        "Mixing r.m.s. and peak values in a.c. power calculations",
      ],
    },
    {
      id: "f15-sinusoid",
      chapterId: id,
      name: "Sinusoidal a.c.",
      expression: "x = x₀ sin ωt,  ω = 2πf = 2π/T",
      meaning: "General sinusoidal alternating current or voltage.",
      variables: [
        { symbol: "x₀", name: "peak value", unit: "A or V" },
        { symbol: "ω", name: "angular frequency", unit: "rad s⁻¹" },
        { symbol: "T", name: "period", unit: "s" },
        { symbol: "f", name: "frequency", unit: "Hz" },
      ],
      conditions: "Sinusoidal supply.",
      applications: [
        "Reading peak/period off oscilloscope traces",
        "Writing I(t) or V(t) explicitly",
      ],
      commonMistakes: [
        "Confusing ω (rad s⁻¹) with f (Hz)",
        "Reading peak-to-peak as the peak value",
      ],
    },
    {
      id: "f15-rms",
      chapterId: id,
      name: "R.m.s. values (sinusoids)",
      expression: "I_rms = I₀/√2,  V_rms = V₀/√2",
      meaning:
        "The d.c.-equivalent values for average power: ⟨P⟩ = I_rms V_rms = I_rms²R.",
      variables: [
        { symbol: "I₀, V₀", name: "peak current / voltage", unit: "A / V" },
        { symbol: "I_rms, V_rms", name: "root-mean-square values", unit: "A / V" },
      ],
      conditions: "SINUSOIDAL waveforms only — the √2 comes from ⟨sin²⟩ = ½.",
      applications: [
        "Mains 230 V r.m.s. ⇒ 325 V peak",
        "Average power ⟨P⟩ = ½I₀V₀ for resistive loads",
      ],
      commonMistakes: [
        "Applying √2 to square or triangular waves",
        "Using peak values in power formulas without the ½",
      ],
    },
    {
      id: "f15-meanpower",
      chapterId: id,
      name: "Mean power in a resistor",
      expression: "⟨P⟩ = ½ I₀²R = ½ P_peak",
      meaning:
        "For sinusoidal a.c., average power dissipated is half the maximum instantaneous power.",
      variables: [
        { symbol: "⟨P⟩", name: "mean power", unit: "W" },
        { symbol: "I₀", name: "peak current", unit: "A" },
        { symbol: "R", name: "resistance", unit: "Ω" },
      ],
      conditions: "Resistive load, sinusoidal current.",
      applications: [
        "Heater power ratings on a.c. supplies",
        "Comparing half-wave rectified power (¼ P_peak)",
      ],
      commonMistakes: [
        "Forgetting power oscillates at 2f",
        "Claiming mean power is zero because current averages to zero",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc15-1",
      chapterId: id,
      tag: "Definition",
      front: "Define electric current and the coulomb relationship.",
      back: "Current is the rate of flow of charge: I = Q/t. One ampere is one coulomb per second.",
    },
    {
      id: "fc15-2",
      chapterId: id,
      tag: "Derivation",
      front: "Outline the derivation of I = nAvq.",
      back: "In time t, carriers within a cylinder of length vt and area A pass a section. Number = nAvt; charge = nAvtq; current I = charge/time = nAvq.",
    },
    {
      id: "fc15-3",
      chapterId: id,
      tag: "Definition",
      front: "Define potential difference.",
      back: "The energy converted from electrical to other forms per unit charge passing between two points: V = W/Q.",
    },
    {
      id: "fc15-4",
      chapterId: id,
      tag: "Definition",
      front: "Define e.m.f. and state how it differs from p.d.",
      back: "E.m.f. is the energy converted from other forms TO electrical per unit charge driven through the source. P.d. is the reverse conversion (electrical → other forms). Both are J C⁻¹.",
    },
    {
      id: "fc15-5",
      chapterId: id,
      tag: "Concept",
      front: "Same current flows through a wire that narrows to half its area. What happens to the drift velocity, and why?",
      back: "v doubles. I = nAvq is constant along the wire and n, q are fixed, so v ∝ 1/A.",
    },
    {
      id: "fc15-6",
      chapterId: id,
      tag: "Definition",
      front: "Define the r.m.s. value of an alternating current.",
      back: "The value of the steady (direct) current that would dissipate the same average power in the same resistance.",
    },
    {
      id: "fc15-7",
      chapterId: id,
      tag: "Relationship",
      front: "State the r.m.s.–peak relationships and their key caveat.",
      back: "I_rms = I₀/√2, V_rms = V₀/√2 — valid for SINUSOIDAL waveforms only (from ⟨sin²⟩ = ½).",
    },
    {
      id: "fc15-8",
      chapterId: id,
      tag: "Concept",
      front: "For sinusoidal a.c. through a resistor, how are mean and peak power related? At what frequency does power oscillate?",
      back: "⟨P⟩ = ½P_peak = ½I₀²R. The power waveform (∝ sin²ωt) oscillates at twice the supply frequency and is never negative.",
    },
    {
      id: "fc15-9",
      chapterId: id,
      tag: "Application",
      front: "Explain half-wave rectification with a single diode.",
      back: "The diode conducts only when forward-biased, so current flows in the load only during alternate half-cycles; the other half-cycles are blocked, giving unidirectional (but non-steady) current.",
    },
    {
      id: "fc15-10",
      chapterId: id,
      tag: "Numbers",
      front: "Mains is 230 V r.m.s. What is the peak voltage?",
      back: "V₀ = √2 × 230 ≈ 325 V.",
    },
    {
      id: "fc15-11",
      chapterId: id,
      tag: "Concept",
      front: "Why does a lamp light immediately although electrons drift at ~0.1 mm s⁻¹?",
      back: "The electric field is established around the circuit at close to the speed of light, so free electrons throughout the wire start drifting almost simultaneously.",
    },
    {
      id: "fc15-12",
      chapterId: id,
      tag: "Power",
      front: "A half-wave rectified sinusoid feeds a resistor. What is the mean power as a fraction of peak power?",
      back: "¼. Full sinusoid gives ½ P_peak; blocking half the cycles halves it again.",
    },
  ],
  quiz: [
    {
      id: "q15-1",
      chapterId: id,
      type: "mcq",
      concept: "I = Q/t",
      difficulty: "foundation",
      prompt:
        "A charge of 240 C flows through a lamp in 2.0 minutes. The current is",
      options: ["120 A", "2.0 A", "0.5 A", "480 A"],
      answerIndex: 1,
      explanation: "I = Q/t = 240/(2.0 × 60) = 2.0 A. Convert minutes to seconds!",
    },
    {
      id: "q15-2",
      chapterId: id,
      type: "mcq",
      concept: "I = nAvq",
      difficulty: "standard",
      prompt:
        "A copper wire joins a semiconductor of the same diameter carrying the same current. The carrier density in the semiconductor is 10⁶ times smaller. The drift velocity in the semiconductor is",
      options: [
        "10⁶ times smaller",
        "the same",
        "10⁶ times larger",
        "10³ times larger",
      ],
      answerIndex: 2,
      explanation:
        "I = nAvq fixed with same A and q ⇒ v ∝ 1/n, so v is 10⁶ times larger in the semiconductor.",
    },
    {
      id: "q15-3",
      chapterId: id,
      type: "mcq",
      concept: "emf vs pd",
      difficulty: "standard",
      prompt: "Which statement correctly distinguishes e.m.f. from p.d.?",
      options: [
        "E.m.f. is measured in volts; p.d. is measured in joules",
        "E.m.f. converts other energy forms to electrical; p.d. converts electrical to other forms",
        "E.m.f. is a force driving electrons; p.d. is an energy",
        "E.m.f. applies only to a.c. sources",
      ],
      answerIndex: 1,
      explanation:
        "Both are energy per unit charge (volts); the direction of conversion distinguishes them.",
    },
    {
      id: "q15-4",
      chapterId: id,
      type: "mcq",
      concept: "Power",
      difficulty: "foundation",
      prompt:
        "A 60 W lamp runs from a 240 V supply. The current through it is",
      options: ["0.25 A", "4.0 A", "0.4 A", "14400 A"],
      answerIndex: 0,
      explanation: "I = P/V = 60/240 = 0.25 A.",
    },
    {
      id: "q15-5",
      chapterId: id,
      type: "mcq",
      concept: "rms",
      difficulty: "standard",
      prompt:
        "A sinusoidal supply has peak value 12 V. The r.m.s. voltage is approximately",
      options: ["24 V", "17 V", "8.5 V", "6.0 V"],
      answerIndex: 2,
      explanation: "V_rms = V₀/√2 = 12/1.414 ≈ 8.5 V.",
    },
    {
      id: "q15-6",
      chapterId: id,
      type: "mcq",
      concept: "Mean power",
      difficulty: "standard",
      prompt:
        "A sinusoidal current of peak 2.0 A flows in a 10 Ω resistor. The mean power dissipated is",
      options: ["40 W", "20 W", "28 W", "10 W"],
      answerIndex: 1,
      explanation:
        "⟨P⟩ = ½I₀²R = ½ × 4.0 × 10 = 20 W (half the 40 W peak power).",
    },
    {
      id: "q15-7",
      chapterId: id,
      type: "mcq",
      concept: "Waveform of power",
      difficulty: "challenging",
      prompt:
        "For I = I₀ sin ωt in a resistor, the instantaneous power waveform",
      options: [
        "is sinusoidal at frequency ω/2π and takes negative values",
        "is sinusoidal at frequency ω/π and is never negative",
        "is constant at ½I₀²R",
        "alternates between +I₀²R and −I₀²R",
      ],
      answerIndex: 1,
      explanation:
        "P = I₀²R sin²ωt oscillates between 0 and I₀²R at twice the current's frequency (2f = ω/π) and is never negative.",
    },
    {
      id: "q15-8",
      chapterId: id,
      type: "mcq",
      concept: "Rectification",
      difficulty: "standard",
      prompt:
        "A sinusoidal supply of peak power P₀ feeds a resistor through an ideal diode (half-wave rectification). The mean power in the resistor is",
      options: ["P₀", "P₀/2", "P₀/4", "P₀/√2"],
      answerIndex: 2,
      explanation:
        "Unrectified mean is P₀/2; the diode blocks half the cycles, halving it again to P₀/4.",
    },
    {
      id: "q15-9",
      chapterId: id,
      type: "blank",
      concept: "rms definition",
      difficulty: "foundation",
      prompt:
        "The r.m.s. value of an alternating current is the steady current that would dissipate the same average ______ in the same resistance.",
      answers: ["power"],
      explanation:
        "The r.m.s. value is defined through equivalent average power dissipation.",
    },
    {
      id: "q15-10",
      chapterId: id,
      type: "blank",
      concept: "navq",
      difficulty: "foundation",
      prompt:
        "In I = nAvq, the symbol n stands for the number ______ of charge carriers.",
      answers: ["density"],
      explanation:
        "n is the number of carriers per unit volume (m⁻³) — 'density' is the required word.",
    },
    {
      id: "q15-11",
      chapterId: id,
      type: "mcq",
      concept: "Energy",
      difficulty: "challenging",
      prompt:
        "A battery of e.m.f. 12 V drives 5.0 C of charge round a circuit. The energy converted from chemical to electrical is",
      options: ["2.4 J", "60 J", "12 J", "0.42 J"],
      answerIndex: 1,
      explanation: "W = QE = 5.0 × 12 = 60 J — e.m.f. is energy per unit charge.",
    },
  ],
  workedExamples: [
    {
      id: "we15-1",
      chapterId: id,
      title: "Drift velocity in a copper wire",
      topic: "Currents",
      subtopic: "I = nAvq",
      difficulty: "standard",
      conceptsTested: ["Microscopic model of current", "Unit handling"],
      requiredFormulas: ["I = nAvq"],
      question:
        "A copper wire of cross-sectional area 1.0 mm² carries a current of 5.0 A. Copper has 8.5 × 10²⁸ free electrons per m³. Calculate the drift velocity of the electrons.",
      thinking:
        "Direct application of I = nAvq — the only trap is the area unit (mm² → m²) and remembering q = e.",
      roadmap: "Convert A to m², rearrange for v, substitute.",
      givens: [
        "A = 1.0 mm² = 1.0 × 10⁻⁶ m²",
        "I = 5.0 A",
        "n = 8.5 × 10²⁸ m⁻³, q = e = 1.60 × 10⁻¹⁹ C",
      ],
      unknowns: ["Drift velocity v"],
      steps: [
        {
          title: "Convert units",
          content: "A = 1.0 mm² = 1.0 × 10⁻⁶ m². (1 mm = 10⁻³ m, so 1 mm² = 10⁻⁶ m².)",
          why: "n is per cubic metre, so every length must be in metres.",
          checkpoint: {
            question: "What is 1.0 mm² in m²?",
            options: ["1.0 × 10⁻³ m²", "1.0 × 10⁻⁶ m²", "1.0 × 10⁻⁹ m²"],
            answerIndex: 1,
            feedback: "Square the length conversion: (10⁻³ m)² = 10⁻⁶ m².",
          },
        },
        {
          title: "Rearrange and substitute",
          content:
            "v = I/nAq = 5.0 / (8.5 × 10²⁸ × 1.0 × 10⁻⁶ × 1.60 × 10⁻¹⁹) = 3.7 × 10⁻⁴ m s⁻¹.",
          why: "Solving I = nAvq for the one unknown.",
        },
        {
          title: "Interpret",
          content:
            "v ≈ 0.37 mm s⁻¹ — electrons take ~45 minutes to travel one metre! The circuit responds instantly because the field, not the electrons, carries the signal.",
          why: "A-Level answers gain credit for physical interpretation of surprising magnitudes.",
        },
      ],
      finalAnswer: "v ≈ 3.7 × 10⁻⁴ m s⁻¹ (about 0.4 mm per second).",
      hints: [
        "Which formula links current to microscopic carrier motion?",
        "Convert mm² to m² before substituting.",
        "v = I/(nAq).",
      ],
      markScheme: [
        { point: "Correct unit conversion of area", mark: "B1" },
        { point: "Rearrangement v = I/nAq", mark: "M1" },
        { point: "v = 3.7 × 10⁻⁴ m s⁻¹", mark: "A1" },
      ],
      variants: [
        {
          question:
            "The same current passes into a wire of half the diameter. By what factor does the drift velocity change?",
          answer:
            "Area ∝ d², so A falls by 4; v ∝ 1/A rises by a factor of 4.",
          hint: "Careful: half the DIAMETER quarters the area.",
        },
        {
          question:
            "How many electrons pass a point in this wire each second at 5.0 A?",
          answer: "N = I/e = 5.0/1.60 × 10⁻¹⁹ = 3.1 × 10¹⁹ electrons per second.",
          hint: "Current is charge per second; divide by the charge per electron.",
        },
      ],
    },
    {
      id: "we15-2",
      chapterId: id,
      title: "R.m.s. and mean power of a sinusoidal supply",
      topic: "Currents",
      subtopic: "Alternating current",
      difficulty: "standard",
      conceptsTested: ["r.m.s. values", "Mean vs peak power"],
      requiredFormulas: ["V_rms = V₀/√2", "⟨P⟩ = V_rms²/R"],
      question:
        "A sinusoidal supply V = 325 sin(100πt) volts is connected across a 50 Ω heater. Find (a) the r.m.s. voltage, (b) the frequency, (c) the mean power dissipated, and (d) the peak instantaneous power.",
      thinking:
        "Read peak value and angular frequency straight from the equation, then apply the sinusoid-only √2 relation and power formulas.",
      roadmap:
        "Identify V₀ = 325 V, ω = 100π → f = 50 Hz → V_rms → ⟨P⟩ = V_rms²/R → P_peak = 2⟨P⟩.",
      givens: ["V = 325 sin(100πt) V", "R = 50 Ω"],
      unknowns: ["V_rms", "f", "⟨P⟩", "P_peak"],
      steps: [
        {
          title: "Read off peak and angular frequency",
          content: "Comparing with V = V₀ sin ωt: V₀ = 325 V and ω = 100π rad s⁻¹.",
          why: "The general sinusoid form is the template for extracting values.",
        },
        {
          title: "Frequency",
          content: "f = ω/2π = 100π/2π = 50 Hz (mains frequency).",
          why: "ω = 2πf by definition.",
          checkpoint: {
            question: "If ω = 100π rad s⁻¹, the period T is",
            options: ["0.01 s", "0.02 s", "0.1 s"],
            answerIndex: 1,
            feedback: "T = 2π/ω = 2π/100π = 0.02 s, matching f = 50 Hz.",
          },
        },
        {
          title: "R.m.s. voltage",
          content: "V_rms = V₀/√2 = 325/1.414 = 230 V.",
          why: "Sinusoidal waveform ⇒ √2 relation valid; this is exactly the mains rating.",
        },
        {
          title: "Mean and peak power",
          content:
            "⟨P⟩ = V_rms²/R = 230²/50 = 1058 ≈ 1.1 kW. P_peak = V₀²/R = 325²/50 = 2.1 kW = 2⟨P⟩.",
          why: "R.m.s. values feed the d.c. power formulas directly; mean power is half the peak for sinusoids.",
        },
      ],
      finalAnswer:
        "(a) 230 V (b) 50 Hz (c) ≈1.06 kW (d) ≈2.1 kW (twice the mean).",
      hints: [
        "Match the equation to x = x₀ sin ωt — what are x₀ and ω?",
        "f = ω/2π; V_rms = V₀/√2 for sinusoids.",
        "Use V_rms in P = V²/R for the MEAN power.",
      ],
      markScheme: [
        { point: "V₀ and ω identified correctly", mark: "B1" },
        { point: "f = 50 Hz", mark: "A1" },
        { point: "V_rms = 230 V via √2", mark: "A1" },
        { point: "⟨P⟩ ≈ 1.06 kW and P_peak = 2⟨P⟩", mark: "A1" },
      ],
      variants: [
        {
          question:
            "The same heater is fed through an ideal diode. What is the new mean power?",
          answer:
            "Half-wave rectification ⇒ ⟨P⟩ = ¼P_peak = ¼ × 2.11 kW ≈ 530 W.",
          hint: "Half the cycles are blocked: mean power halves from the full-a.c. value.",
        },
        {
          question:
            "A square-wave supply alternates between +325 V and −325 V across the same heater. Find the mean power.",
          answer:
            "For a square wave V_rms = V₀ = 325 V, so ⟨P⟩ = 325²/50 = 2.1 kW — the √2 rule does NOT apply.",
          hint: "V² is constant in time for a square wave.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d15-1",
      chapterId: id,
      title: "I = nAvq from the carrier picture",
      goal: "Derive the microscopic current equation I = nAvq.",
      steps: [
        {
          text: "Consider carriers of charge q, number density n, drifting at speed v along a conductor of cross-section A. In time t each carrier advances a distance",
          expression: "L = v t",
          explanation:
            "Drift velocity is the average velocity of the carriers along the wire.",
        },
        {
          text: "All carriers within a cylinder of length vt behind the cross-section pass through it in time t. The number of such carriers is",
          expression: "N = n × (A v t)",
          explanation:
            "Number = number density × volume of the cylinder, volume = area × length.",
        },
        {
          text: "The charge crossing the section in time t is therefore",
          expression: "Q = N q = n A v t q",
          explanation: "Each of the N carriers transports charge q.",
        },
        {
          text: "Divide by t to obtain the current:",
          expression: "I = Q/t = n A v q",
          explanation:
            "Current is the rate of flow of charge — the geometric factors survive, time cancels.",
        },
      ],
    },
    {
      id: "d15-2",
      chapterId: id,
      title: "Mean power of a sinusoidal current",
      goal: "Show that ⟨P⟩ = ½I₀²R = I_rms²R for I = I₀ sin ωt in a resistor R.",
      steps: [
        {
          text: "Instantaneous power dissipated in the resistor:",
          expression: "P = I²R = I₀²R sin²ωt",
          explanation:
            "Power depends on the square of the current, so it is always positive.",
        },
        {
          text: "Average over a complete cycle, using the standard result",
          expression: "⟨sin²ωt⟩ = ½",
          explanation:
            "sin² oscillates symmetrically between 0 and 1 about ½; its mean over a period is exactly ½.",
        },
        {
          text: "Hence the mean power is",
          expression: "⟨P⟩ = ½ I₀²R",
          explanation: "Half the peak power I₀²R — the key exam fact.",
        },
        {
          text: "Defining I_rms as the equivalent steady current (⟨P⟩ = I_rms²R) gives",
          expression: "I_rms = I₀/√2",
          explanation:
            "Setting I_rms²R = ½I₀²R and square-rooting; this is why the √2 applies only to sinusoids.",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n15-current",
      label: "Current I = Q/t",
      tier: "core",
      x: 0.5,
      y: 0.1,
      explanation: "Rate of flow of charge; conventional direction follows positive charge.",
      example: "2 A means 2 coulombs pass each second.",
      application: "Foundation for every circuit calculation.",
      related: ["n15-drift", "n15-pd"],
    },
    {
      id: "n15-drift",
      label: "Drift velocity I = nAvq",
      tier: "major",
      x: 0.18,
      y: 0.3,
      explanation:
        "Microscopic picture: carriers of density n drifting at v through area A.",
      example: "Copper at 5 A in 1 mm²: v ≈ 0.4 mm s⁻¹.",
      application: "Compare conductors/semiconductors; wire-narrowing problems.",
      related: ["n15-current"],
    },
    {
      id: "n15-pd",
      label: "P.d. V = W/Q",
      tier: "core",
      x: 0.5,
      y: 0.38,
      explanation: "Electrical energy converted to other forms per unit charge.",
      example: "12 V across a motor: 12 J per coulomb becomes mechanical/heat.",
      application: "Energy audits of circuit components.",
      related: ["n15-current", "n15-emf", "n15-power"],
    },
    {
      id: "n15-emf",
      label: "E.m.f.",
      tier: "major",
      x: 0.8,
      y: 0.3,
      explanation:
        "Other forms → electrical energy per unit charge driven through a source.",
      example: "A 1.5 V cell converts 1.5 J of chemical energy per coulomb.",
      application: "Energy conservation round a loop; internal resistance (Ch 16).",
      related: ["n15-pd"],
    },
    {
      id: "n15-power",
      label: "Power P = VI",
      tier: "core",
      x: 0.32,
      y: 0.58,
      explanation: "Rate of energy conversion; with V = IR gives I²R and V²/R forms.",
      example: "60 W lamp at 240 V draws 0.25 A.",
      application: "Fuse ratings, transmission losses, heating.",
      related: ["n15-pd", "n15-rms"],
    },
    {
      id: "n15-ac",
      label: "Sinusoidal a.c.",
      tier: "major",
      x: 0.68,
      y: 0.58,
      explanation: "x = x₀ sin ωt; peak x₀, period 2π/ω, frequency ω/2π.",
      example: "Mains: V = 325 sin(100πt) V.",
      application: "Oscilloscope trace reading; a.c. power.",
      related: ["n15-rms", "n15-rect"],
    },
    {
      id: "n15-rms",
      label: "R.m.s. values",
      tier: "major",
      x: 0.5,
      y: 0.78,
      explanation:
        "D.c.-equivalent for power; sinusoids: rms = peak/√2; ⟨P⟩ = ½ peak power.",
      example: "230 V mains r.m.s. ⇒ 325 V peak.",
      application: "All a.c. power calculations.",
      related: ["n15-power", "n15-ac"],
    },
    {
      id: "n15-rect",
      label: "Rectification",
      tier: "detail",
      x: 0.85,
      y: 0.8,
      explanation:
        "Single diode passes alternate half-cycles → unidirectional current; mean power ¼ peak.",
      example: "Phone chargers rectify mains (with smoothing beyond syllabus).",
      application: "Sketching load V–t graphs; power comparisons.",
      related: ["n15-ac"],
    },
  ],
  conceptEdges: [
    { from: "n15-current", to: "n15-drift", label: "microscopic view" },
    { from: "n15-current", to: "n15-pd", label: "energy per charge" },
    { from: "n15-pd", to: "n15-emf", label: "opposite conversion" },
    { from: "n15-pd", to: "n15-power", label: "P = VI" },
    { from: "n15-power", to: "n15-rms", label: "a.c. average" },
    { from: "n15-ac", to: "n15-rms", label: "÷√2" },
    { from: "n15-ac", to: "n15-rect", label: "diode" },
  ],
  graphs: [
    {
      id: "g15-ac",
      title: "Sinusoidal current and its power waveform",
      caption:
        "P = I²R is never negative and oscillates at twice the frequency; its mean (½ peak) is the r.m.s.-equivalent power.",
      xLabel: "t / T",
      yLabel: "I, P (normalised)",
      zeroLine: true,
      curves: [
        {
          label: "I = I₀ sin ωt",
          color: 1,
          points: sample((t) => Math.sin(2 * Math.PI * t), 0, 2, 140),
        },
        {
          label: "P ∝ sin²ωt",
          color: 6,
          points: sample((t) => Math.sin(2 * Math.PI * t) ** 2, 0, 2, 140),
        },
        {
          label: "⟨P⟩ = ½ peak",
          color: 3,
          dashed: true,
          points: sample(() => 0.5, 0, 2, 4),
        },
      ],
    },
    {
      id: "g15-halfwave",
      title: "Half-wave rectification",
      caption:
        "The diode conducts only on forward half-cycles; the load sees positive half-sinusoids separated by dead half-periods.",
      xLabel: "t / T",
      yLabel: "V_load",
      zeroLine: true,
      curves: [
        {
          label: "Supply",
          color: 5,
          dashed: true,
          points: sample((t) => Math.sin(2 * Math.PI * t), 0, 2, 140),
        },
        {
          label: "Load (rectified)",
          color: 2,
          points: sample((t) => Math.max(0, Math.sin(2 * Math.PI * t)), 0, 2, 140),
        },
      ],
    },
    {
      id: "g15-rms",
      title: "Why r.m.s.: squaring removes the sign",
      caption:
        "I averages to zero; I² has mean ½I₀². The square root of that mean is I₀/√2 — the r.m.s. value.",
      xLabel: "t / T",
      yLabel: "I, I²",
      zeroLine: true,
      curves: [
        {
          label: "I/I₀",
          color: 1,
          points: sample((t) => Math.sin(2 * Math.PI * t), 0, 1, 100),
        },
        {
          label: "(I/I₀)²",
          color: 2,
          points: sample((t) => Math.sin(2 * Math.PI * t) ** 2, 0, 1, 100),
        },
        {
          label: "mean of I² = ½",
          color: 3,
          dashed: true,
          points: sample(() => 0.5, 0, 1, 4),
        },
      ],
    },
  ],
};
