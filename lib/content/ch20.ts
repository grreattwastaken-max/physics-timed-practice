import { Chapter } from "../types";
import { sample } from "./curves";

const id = "ch20";

export const ch20: Chapter = {
  id,
  number: 20,
  title: "Nuclear Physics",
  syllabus: "H2 Physics 9478",
  icon: "radiation",
  color: 3,
  description:
    "The nuclear atom and Rutherford scattering, radioactive decay, α/β/γ radiation, half-life, mass defect, binding energy, fission and fusion.",
  sections: [
    "The Nuclear Atom",
    "Radioactive Decay",
    "Nuclear Processes and Conservation Laws",
    "Mass Defect and Nuclear Binding Energy",
    "Fission and Fusion",
  ],
  learningOutcomes: [
    "Infer from Rutherford α-scattering the existence and small size of the nucleus.",
    "Distinguish nucleon number and proton number; use isotope notation ᴬ_Z X.",
    "Understand the spontaneous and random nature of nuclear decay, inferred from count-rate fluctuations.",
    "Understand the origin and significance of background radiation.",
    "Know the nature and properties of α, β and γ radiations.",
    "Define activity and decay constant; use A = λN.",
    "Use x = x₀e^(−λt) for activity, undecayed nuclei or count rate.",
    "Define half-life and use λ = ln2/t½.",
    "Discuss applications and hazards of radioactivity via half-life, penetration and ionisation.",
    "Represent nuclear reactions by equations; apply conservation of nucleon number, charge and mass-energy.",
    "Understand how energy/momentum conservation in β decay predicted the neutrino.",
    "Understand mass defect and use E = mc².",
    "Relate binding energy to mass defect; sketch BE per nucleon against nucleon number.",
    "Explain the relevance of binding energy per nucleon to fission and fusion.",
  ],
  quickReview: [
    "Rutherford scattering: most α pass straight through (atom mostly empty), a tiny fraction bounce back (mass and + charge concentrated in a tiny nucleus).",
    "ᴬ_Z X: A = nucleons (protons + neutrons), Z = protons. Isotopes: same Z, different A.",
    "α: helium nucleus, +2e, strongly ionising, stopped by paper. β⁻: fast electron (from n → p), moderately ionising, stopped by ~mm aluminium. γ: EM photon, weakly ionising, attenuated by thick lead.",
    "Decay is spontaneous (unaffected by environment) and random (unpredictable for a single nucleus) — seen in count-rate fluctuations.",
    "A = λN; N = N₀e^(−λt); t½ = ln2/λ. After k half-lives, 1/2ᵏ remains.",
    "Mass defect Δm = mass of separated nucleons − nuclear mass; binding energy = Δmc².",
    "BE per nucleon peaks at Fe-56 (~8.8 MeV): fusion of light nuclei and fission of heavy nuclei both climb towards the peak, releasing energy.",
    "Conserved in all nuclear processes: nucleon number, charge, mass-energy (and momentum — the β-decay spectrum forced the neutrino hypothesis).",
  ],
  examReview: [
    {
      heading: "The nuclear atom",
      points: [
        "Scattering observations → inferences: (1) most α undeflected ⇒ atom mostly empty space; (2) few large deflections ⇒ charge concentrated; (3) very rare back-scatter ⇒ tiny, massive, positive nucleus (~10⁻¹⁴ m in a ~10⁻¹⁰ m atom).",
        "Notation ᴬ_Z X; isotopes differ only in neutron number — identical chemistry, different nuclear stability.",
        "Learn the α/β/γ property table: nature, charge, mass, speed, ionising power (α ≫ β ≫ γ), penetration (reverse order), deflection in fields.",
      ],
    },
    {
      heading: "Radioactive decay mathematics",
      points: [
        "Spontaneous: rate unaffected by temperature, pressure, chemistry. Random: each nucleus has fixed probability λ per unit time; only statistics are predictable.",
        "Activity A = λN (decays per second, Bq); A, N and count rate all follow x₀e^(−λt).",
        "Half-life t½ = ln2/λ; measure from a decay curve (time to halve) or ln-plot gradient (−λ).",
        "Count-rate work: SUBTRACT BACKGROUND before any analysis.",
        "Applications hinge on matching half-life + radiation type to the job: tracers (short t½, γ), smoke alarms (long t½, α), dating (t½ ~ sample age).",
      ],
    },
    {
      heading: "Nuclear equations and conservation",
      points: [
        "Balance A (top) and Z (bottom) on both sides; e.g. ²³⁸U → ²³⁴Th + ⁴He; ¹⁴C → ¹⁴N + β⁻ + ν̄.",
        "β⁻ decay: a neutron becomes a proton + electron (+ antineutrino); A unchanged, Z rises by 1.",
        "The continuous β energy spectrum seemed to violate energy conservation — Pauli predicted the (anti)neutrino to carry the missing energy and momentum.",
        "Mass-energy is conserved as a whole: mass difference × c² = energy released (KE of products + photons).",
      ],
    },
    {
      heading: "Binding energy, fission and fusion",
      points: [
        "Mass defect: separated nucleons weigh MORE than the nucleus; the difference (×c²) is the binding energy that must be supplied to dismantle it.",
        "BE per nucleon measures stability; the curve rises steeply to ~8.8 MeV at Fe-56 then falls gently.",
        "Fusion (light → heavier) and fission (heavy → medium) both move products towards the peak: products more tightly bound ⇒ energy released.",
        "Energy released = (BE of products) − (BE of reactants) = Δm c² — compute either way.",
        "1 u = 1.66 × 10⁻²⁷ kg ↔ 931 MeV — memorise the conversion workflow.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "Rutherford's experiment: logic, not just results",
      body: "Geiger and Marsden fired α particles at gold foil. Three observations, three inferences. Most α passed with negligible deflection — the atom is mostly empty space. A small fraction deflected through large angles — they encountered an intense electric field, so the atom's positive charge is concentrated, not spread out (as Thomson's model held). About 1 in 8000 bounced back beyond 90° — the scatterer must be far more massive than the α particle and tiny (a head-on Coulomb calculation bounds the nuclear radius at ~10⁻¹⁴ m). The exam skill is pairing each OBSERVATION with its INFERENCE — quoting results without the logic loses most of the marks.",
    },
    {
      heading: "Randomness you can see",
      body: "Radioactive decay is spontaneous — no change of temperature, pressure or chemical state alters it — and random: for a single nucleus only a probability per unit time (the decay constant λ) exists. The evidence is in every counting experiment: identical intervals give fluctuating counts scattered about a mean. Yet enormous numbers tame chance into the exact exponential law: A = λN says the population's decay rate is proportional to the population, and the solution is N = N₀e^(−λt). The same mathematics as capacitor discharge (Chapter 16) — rate ∝ amount — with t½ = ln2/λ playing the role of 0.69RC.",
    },
    {
      heading: "α, β, γ: matching radiation to consequence",
      body: "Alpha particles are helium nuclei: doubly charged, relatively slow and massive, so they ionise intensely and exhaust their energy within centimetres of air or a sheet of paper — harmless outside the body, devastating inside it. Beta-minus particles are fast electrons created when a neutron converts to a proton; lighter and singly charged, they ionise less and penetrate a few millimetres of aluminium. Gamma photons are uncharged electromagnetic quanta: weakly ionising, never fully stopped, only attenuated by thick lead or concrete. This ionisation-penetration trade-off drives every application question: smoke detectors want α's dense local ionisation; medical tracers need γ to escape the body; thickness gauges pick the radiation that half-passes the material.",
    },
    {
      heading: "The neutrino: conservation laws as prophecy",
      body: "In α decay the products (two bodies) share energy in fixed proportions — every α from a given decay has the same energy. β decay should be identical, yet measured β particles emerge with a continuous SPECTRUM of energies up to a maximum, and the daughter's recoil doesn't line up back-to-back with the electron. Either energy and momentum conservation fail, or a third, invisible particle shares the budget. Pauli chose conservation: a neutral, nearly massless particle — the (anti)neutrino — carries the missing energy and momentum. Detected directly in 1956, it stands as the syllabus's best example of conservation laws predicting new physics.",
    },
    {
      heading: "Mass defect and the binding-energy curve",
      body: "Weigh a helium-4 nucleus and it comes up ~0.030 u lighter than its two protons plus two neutrons weighed separately. That missing mass is the binding energy, E = Δmc² ≈ 28 MeV — the energy you would need to pull the nucleus apart, released when it formed. Dividing by nucleon count gives the stability-per-particle measure: BE per nucleon. Its curve rises steeply through the light elements, peaks at ~8.8 MeV near iron-56, then drifts down towards uranium. Reading the curve is the whole energetics of nuclear power: any reaction whose products sit HIGHER on the curve releases energy. Light nuclei fuse upward (stars, tokamaks); heavy nuclei fission upward (reactors, weapons). Iron sits at the top with nowhere to go — the ash of stellar burning.",
    },
    {
      heading: "Doing energy-release calculations cleanly",
      body: "Two equivalent routes. Mass route: total rest mass before − after = Δm; energy released = Δmc² (SI) or Δm × 931 MeV (with u). Binding-energy route: energy released = BE(products) − BE(reactants) — note the direction: MORE binding energy in the products means energy OUT. Typical slip: subtracting binding energies the wrong way round, or forgetting the electron masses in β-decay bookkeeping (at A-Level, nuclear masses given in questions already handle this). Always finish by stating where the energy goes: kinetic energy of the products and photons.",
    },
  ],
  keyIdeas: [
    "Scattering observations map to inferences: empty atom, concentrated charge, tiny massive nucleus.",
    "Decay is spontaneous and random for one nucleus, exactly exponential for many: A = λN.",
    "Half-life mathematics mirrors RC discharge: t½ = ln2/λ.",
    "α/β/γ trade ionisation against penetration — the key to every application.",
    "Mass IS energy: Δm × c² prices every nuclear transaction.",
    "The BE-per-nucleon peak at iron explains why fusion AND fission can both release energy.",
  ],
  definitions: [
    {
      term: "Isotopes",
      definition:
        "Nuclides of the same element (same proton number Z) with different numbers of neutrons (different nucleon number A).",
    },
    {
      term: "Spontaneous decay",
      definition:
        "Decay unaffected by external conditions (temperature, pressure, chemical state) — the rate cannot be altered.",
    },
    {
      term: "Random decay",
      definition:
        "It cannot be predicted which nucleus will decay or when; each has a constant probability of decay per unit time, evidenced by fluctuations in count rate.",
    },
    {
      term: "Activity",
      definition:
        "The number of decays per unit time of a sample: A = λN. Unit: becquerel (1 Bq = 1 decay s⁻¹).",
    },
    {
      term: "Decay constant",
      definition:
        "The probability of decay of a nucleus per unit time: λ = A/N. Unit: s⁻¹.",
    },
    {
      term: "Half-life",
      definition:
        "The time taken for a quantity x (activity, number of undecayed nuclei, or count rate) to reduce to half its initial value: t½ = ln2/λ.",
    },
    {
      term: "Background radiation",
      definition:
        "The ever-present radiation from cosmic rays, rocks and soil (e.g. radon), food and medical sources — it must be subtracted from measured count rates.",
    },
    {
      term: "Mass defect",
      definition:
        "The difference between the total mass of the separated nucleons and the mass of the nucleus: Δm = Zmₚ + (A−Z)mₙ − m_nucleus.",
    },
    {
      term: "Binding energy",
      definition:
        "The energy required to separate a nucleus into its constituent nucleons (equal to the energy released on forming it): BE = Δmc².",
    },
    {
      term: "Binding energy per nucleon",
      definition:
        "BE/A — a measure of nuclear stability; maximal (~8.8 MeV) near iron-56.",
    },
    {
      term: "Nuclear fission",
      definition:
        "The splitting of a heavy nucleus into two lighter nuclei (plus neutrons), releasing energy because the fragments have higher BE per nucleon.",
    },
    {
      term: "Nuclear fusion",
      definition:
        "The joining of light nuclei into a heavier nucleus, releasing energy because the product has higher BE per nucleon.",
    },
  ],
  misconceptions: [
    {
      myth: "Half-life is half the time a sample takes to decay completely.",
      reality:
        "Exponential decay never finishes. Half-life is the time for HALF of what remains to decay — after each t½, 50% of the current amount survives.",
    },
    {
      myth: "Heating or chemically binding a radioactive sample speeds up or slows its decay.",
      reality:
        "Decay is spontaneous — nuclear, not electronic. No physical or chemical environment changes λ.",
    },
    {
      myth: "After two half-lives the sample has all decayed.",
      reality: "(½)² = ¼ remains after two half-lives; 1/2ᵏ after k half-lives.",
    },
    {
      myth: "Binding energy is energy stored inside the nucleus waiting to be released.",
      reality:
        "Binding energy is the energy REQUIRED to pull the nucleus apart. Nuclei with MORE BE per nucleon are MORE stable; energy is released when products are more tightly bound than reactants.",
    },
    {
      myth: "Fission releases energy, so fusion must absorb it (or vice versa).",
      reality:
        "Both release energy — from opposite sides of the BE/A curve. Light nuclei climb the curve by fusing; heavy nuclei climb it by splitting. Only iron-region nuclei can do neither.",
    },
    {
      myth: "The mass defect means some nucleons are lost when a nucleus forms.",
      reality:
        "All nucleons remain; it is MASS (not particles) that converts to the released binding energy via E = mc².",
    },
    {
      myth: "β particles are orbital electrons ejected from the atom.",
      reality:
        "They are created IN THE NUCLEUS when a neutron converts to a proton (n → p + e⁻ + ν̄) — the atom's electron cloud is not the source.",
    },
    {
      myth: "γ emission changes the element.",
      reality:
        "γ photons carry no charge or nucleons: A and Z are unchanged — the nucleus merely de-excites. Only α and β change the element.",
    },
  ],
  examTips: [
    "Rutherford questions: write observation → inference pairs explicitly; each pairing is a separate mark.",
    "Always subtract background count rate before computing half-life from data.",
    "For decay problems, decide first whether you need N (amount), A (rate) or counts — all obey the same exponential.",
    "Non-integer half-life counts: use x = x₀e^(−λt) with λ = ln2/t½ rather than halving repeatedly.",
    "Nuclear equations: balance A and Z BEFORE reading off the mystery particle.",
    "Energy release: (masses before − after) × 931 MeV per u; state that products carry it as kinetic energy (+ γ).",
    "BE/A curve sketches: label the peak (Fe-56, ~8.8 MeV), the steep rise at small A, H at the origin, U at the right — and mark fission/fusion arrows pointing towards the peak.",
    "Applications: justify by BOTH half-life AND radiation type (penetration/ionisation) — one alone is half the marks.",
  ],
  formulas: [
    {
      id: "f20-activity",
      chapterId: id,
      name: "Activity",
      expression: "A = λN",
      meaning:
        "Decay rate is proportional to the number of undecayed nuclei present.",
      variables: [
        { symbol: "A", name: "activity", unit: "Bq (s⁻¹)" },
        { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
        { symbol: "N", name: "number of undecayed nuclei", unit: "—" },
      ],
      conditions: "Any radioactive sample; the seed of the exponential law.",
      applications: [
        "Finding N from measured activity",
        "Linking sample mass (via molar mass) to activity",
      ],
      commonMistakes: [
        "Confusing activity with count rate (detector catches a fraction)",
        "Using t½ directly instead of λ",
      ],
    },
    {
      id: "f20-exponential",
      chapterId: id,
      name: "Exponential decay law",
      expression: "x = x₀e^(−λt)",
      meaning:
        "Activity, undecayed nuclei or (background-corrected) count rate all decay exponentially.",
      variables: [
        { symbol: "x", name: "A, N or count rate", unit: "various" },
        { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
        { symbol: "t", name: "elapsed time", unit: "s" },
      ],
      conditions: "Large numbers of nuclei; single decaying species.",
      applications: [
        "Dating problems: t = (1/λ)ln(x₀/x)",
        "ln x vs t plots: gradient −λ",
      ],
      commonMistakes: [
        "Forgetting to subtract background first",
        "Mismatched time units between λ and t",
      ],
    },
    {
      id: "f20-halflife",
      chapterId: id,
      name: "Half-life",
      expression: "t½ = ln2 / λ;  x = x₀(½)^(t/t½)",
      meaning:
        "Time for any of the decaying quantities to halve; ln2 links it to the decay constant.",
      variables: [
        { symbol: "t½", name: "half-life", unit: "s" },
        { symbol: "λ", name: "decay constant", unit: "s⁻¹" },
      ],
      conditions: "Constant λ (always true for a given nuclide).",
      applications: [
        "Quick fractions: 1/2, 1/4, 1/8 after 1, 2, 3 half-lives",
        "Choosing isotopes for tracers/dating",
      ],
      commonMistakes: [
        "Treating t½ as half the total lifetime",
        "Using log₁₀ instead of ln",
      ],
    },
    {
      id: "f20-emc2",
      chapterId: id,
      name: "Mass-energy equivalence",
      expression: "E = mc²  (1 u ↔ 931 MeV)",
      meaning:
        "Mass and energy are interchangeable; mass differences price nuclear energy release.",
      variables: [
        { symbol: "E", name: "energy", unit: "J" },
        { symbol: "m", name: "mass (or mass difference)", unit: "kg" },
        { symbol: "c", name: "speed of light 3.0 × 10⁸", unit: "m s⁻¹" },
      ],
      conditions: "Universal; at A-Level applied to rest-mass differences.",
      applications: [
        "Energy released in decay/fission/fusion",
        "u → MeV conversions",
      ],
      commonMistakes: [
        "Forgetting to square c",
        "Mixing u and kg mid-calculation",
      ],
    },
    {
      id: "f20-massdefect",
      chapterId: id,
      name: "Mass defect",
      expression: "Δm = Zmₚ + (A−Z)mₙ − m_nucleus",
      meaning:
        "Separated nucleons out-weigh the bound nucleus; the difference is the binding energy's mass.",
      variables: [
        { symbol: "Z", name: "proton number", unit: "—" },
        { symbol: "A−Z", name: "neutron number", unit: "—" },
        { symbol: "mₚ, mₙ", name: "proton, neutron masses", unit: "u or kg" },
      ],
      conditions: "Use nuclear (not atomic) masses, or handle electrons consistently.",
      applications: ["BE = Δmc²", "BE per nucleon = Δmc²/A"],
      commonMistakes: [
        "Subtracting the wrong way (Δm is positive)",
        "Using A instead of A−Z for neutrons",
      ],
    },
    {
      id: "f20-be",
      chapterId: id,
      name: "Binding energy & release",
      expression: "BE = Δmc²;  E_released = BE(products) − BE(reactants)",
      meaning:
        "Binding energy measures how tightly bound a nucleus is; reactions release the increase in total binding.",
      variables: [
        { symbol: "BE", name: "binding energy", unit: "J or MeV" },
        { symbol: "Δm", name: "mass defect", unit: "kg or u" },
      ],
      conditions:
        "Products more bound than reactants ⇒ energy out (as KE and γ).",
      applications: [
        "Fission/fusion energy budgets",
        "Reading the BE/A curve",
      ],
      commonMistakes: [
        "Reversing the subtraction direction",
        "Thinking higher BE means less stable",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc20-1",
      chapterId: id,
      tag: "Rutherford",
      front:
        "State the three observations of the α-scattering experiment and the inference from each.",
      back: "1) Most α undeflected ⇒ atom is mostly empty space. 2) A few deflected through large angles ⇒ positive charge concentrated in a small region. 3) Very rarely (~1 in 8000) deflected back ⇒ nucleus is tiny, massive and positively charged.",
    },
    {
      id: "fc20-2",
      chapterId: id,
      tag: "Notation",
      front: "In ᴬ_Z X, what are A and Z? What defines isotopes?",
      back: "A = nucleon (mass) number = protons + neutrons; Z = proton (atomic) number. Isotopes share Z but differ in A (different neutron count).",
    },
    {
      id: "fc20-3",
      chapterId: id,
      tag: "Radiations",
      front: "Compare α, β and γ: nature, charge, ionising power, penetration.",
      back: "α: He nucleus, +2e, intensely ionising, stopped by paper/cm of air. β⁻: fast electron, −e, moderate, stopped by mm of Al. γ: EM photon, 0, weak, attenuated by cm of lead (never fully stopped).",
    },
    {
      id: "fc20-4",
      chapterId: id,
      tag: "Randomness",
      front: "What do 'spontaneous' and 'random' mean for nuclear decay, and what evidences randomness?",
      back: "Spontaneous: unaffected by external conditions (T, p, chemistry). Random: cannot predict which nucleus or when — only a fixed probability λ per unit time. Evidence: fluctuations in count rate about a mean for identical intervals.",
    },
    {
      id: "fc20-5",
      chapterId: id,
      tag: "Definitions",
      front: "Define activity and decay constant, with their relation.",
      back: "Activity A: decays per unit time (Bq). Decay constant λ: probability of decay per nucleus per unit time. A = λN.",
    },
    {
      id: "fc20-6",
      chapterId: id,
      tag: "Half-life",
      front: "Define half-life and connect it to λ.",
      back: "The time for a quantity (A, N or corrected count rate) to fall to half its initial value: t½ = ln2/λ.",
    },
    {
      id: "fc20-7",
      chapterId: id,
      tag: "Beta decay",
      front: "What happens inside the nucleus during β⁻ decay, and how did it predict the neutrino?",
      back: "n → p + e⁻ + ν̄ (A unchanged, Z +1). The continuous β energy spectrum and non-collinear recoil would violate energy/momentum conservation for two bodies — Pauli postulated a third neutral particle (the antineutrino) carrying the balance.",
    },
    {
      id: "fc20-8",
      chapterId: id,
      tag: "Mass defect",
      front: "Define mass defect and binding energy.",
      back: "Δm = (mass of separated nucleons) − (mass of nucleus). Binding energy BE = Δmc² — the energy needed to separate the nucleus into its nucleons.",
    },
    {
      id: "fc20-9",
      chapterId: id,
      tag: "BE curve",
      front: "Sketch (describe) the BE-per-nucleon curve and its key features.",
      back: "Rises steeply from H, local spike at He-4, peaks ~8.8 MeV at Fe-56, declines gently to ~7.6 MeV at U-238. Fusion moves light nuclei up the left slope; fission moves heavy nuclei up from the right.",
    },
    {
      id: "fc20-10",
      chapterId: id,
      tag: "Energy release",
      front: "Two equivalent ways to compute nuclear energy release?",
      back: "1) Δm route: (total mass before − after) × c² (or ×931 MeV per u). 2) BE route: BE(products) − BE(reactants). Energy appears as KE of products and γ photons.",
    },
    {
      id: "fc20-11",
      chapterId: id,
      tag: "Applications",
      front: "Why does a smoke detector use an α source with a long half-life?",
      back: "α ionises air intensely across the small gap (sensitive detection) but is stopped by centimetres of air/casing (safe externally); a long half-life (Am-241, 432 yr) keeps activity constant for the device's lifetime.",
    },
    {
      id: "fc20-12",
      chapterId: id,
      tag: "Conservation",
      front: "List the quantities conserved in every nuclear reaction.",
      back: "Nucleon number A, charge (proton number balance), mass-energy, and momentum.",
    },
    {
      id: "fc20-13",
      chapterId: id,
      tag: "Background",
      front: "Name sources of background radiation and its practical significance.",
      back: "Cosmic rays, rocks/soil (radon), food and drink, medical/industrial sources. Measured count rates must have background subtracted before analysis.",
    },
  ],
  quiz: [
    {
      id: "q20-1",
      chapterId: id,
      type: "mcq",
      concept: "Rutherford",
      difficulty: "standard",
      prompt:
        "In the α-scattering experiment, the observation that a tiny fraction of α particles deflect by more than 90° implies that",
      options: [
        "atoms are mostly empty space",
        "electrons orbit the nucleus",
        "the atom's positive charge and most of its mass occupy a very small volume",
        "α particles are positively charged",
      ],
      answerIndex: 2,
      explanation:
        "Back-scattering requires a nearly head-on encounter with something small, massive and intensely charged — the nucleus.",
    },
    {
      id: "q20-2",
      chapterId: id,
      type: "mcq",
      concept: "Notation",
      difficulty: "foundation",
      prompt: "The nuclide ²³⁴₉₀Th has",
      options: [
        "234 protons and 90 neutrons",
        "90 protons and 234 neutrons",
        "90 protons and 144 neutrons",
        "144 protons and 90 neutrons",
      ],
      answerIndex: 2,
      explanation: "Z = 90 protons; neutrons = A − Z = 234 − 90 = 144.",
    },
    {
      id: "q20-3",
      chapterId: id,
      type: "mcq",
      concept: "Decay equation",
      difficulty: "standard",
      prompt:
        "²³⁸₉₂U decays by α emission. The daughter nuclide is",
      options: ["²³⁴₉₀Th", "²³⁴₉₂U", "²³⁶₉₀Th", "²³⁸₉₀Th"],
      answerIndex: 0,
      explanation:
        "α removes A = 4, Z = 2: A = 234, Z = 90 — thorium-234.",
    },
    {
      id: "q20-4",
      chapterId: id,
      type: "mcq",
      concept: "Beta decay",
      difficulty: "standard",
      prompt: "In β⁻ decay, the nucleus's A and Z change by",
      options: [
        "A − 1, Z unchanged",
        "A unchanged, Z + 1",
        "A unchanged, Z − 1",
        "A + 1, Z + 1",
      ],
      answerIndex: 1,
      explanation:
        "A neutron becomes a proton: nucleon count fixed, charge up one (n → p + e⁻ + ν̄).",
    },
    {
      id: "q20-5",
      chapterId: id,
      type: "mcq",
      concept: "Half-life",
      difficulty: "foundation",
      prompt:
        "A sample's activity is 8000 Bq. After 3 half-lives it is",
      options: ["4000 Bq", "2667 Bq", "1000 Bq", "0 Bq"],
      answerIndex: 2,
      explanation: "(½)³ = 1/8: 8000/8 = 1000 Bq.",
    },
    {
      id: "q20-6",
      chapterId: id,
      type: "mcq",
      concept: "Decay maths",
      difficulty: "challenging",
      prompt:
        "A nuclide has t½ = 5.0 days. The fraction remaining after 12 days is closest to",
      options: ["19%", "25%", "40%", "8%"],
      answerIndex: 0,
      explanation:
        "λ = ln2/5.0 = 0.139 day⁻¹; e^(−0.139 × 12) = e^(−1.66) ≈ 0.19.",
    },
    {
      id: "q20-7",
      chapterId: id,
      type: "mcq",
      concept: "Radiation properties",
      difficulty: "standard",
      prompt:
        "Which radiation is most ionising and least penetrating?",
      options: ["α", "β", "γ", "all equal"],
      answerIndex: 0,
      explanation:
        "Alpha's double charge and low speed maximise ionisation per mm — hence exhaustion within paper/cm of air.",
    },
    {
      id: "q20-8",
      chapterId: id,
      type: "mcq",
      concept: "Neutrino",
      difficulty: "challenging",
      prompt:
        "The continuous energy spectrum of β particles was evidence for",
      options: [
        "violation of energy conservation",
        "a third particle sharing the decay energy",
        "β particles being orbital electrons",
        "the quantisation of nuclear levels",
      ],
      answerIndex: 1,
      explanation:
        "Two-body decays give fixed energies; a spread means a third body (the antineutrino) shares energy and momentum.",
    },
    {
      id: "q20-9",
      chapterId: id,
      type: "mcq",
      concept: "Binding energy",
      difficulty: "standard",
      prompt: "Energy is released in a nuclear reaction when",
      options: [
        "the total binding energy of the products exceeds that of the reactants",
        "the products have less binding energy",
        "mass is created",
        "the nucleon number decreases",
      ],
      answerIndex: 0,
      explanation:
        "More tightly bound products ⇒ mass decreased ⇒ Δmc² released as KE/γ.",
    },
    {
      id: "q20-10",
      chapterId: id,
      type: "mcq",
      concept: "BE curve",
      difficulty: "standard",
      prompt:
        "Binding energy per nucleon is greatest for nuclides near",
      options: ["hydrogen-1", "helium-4", "iron-56", "uranium-238"],
      answerIndex: 2,
      explanation:
        "The curve peaks (~8.8 MeV/nucleon) around Fe-56 — the most stable region.",
    },
    {
      id: "q20-11",
      chapterId: id,
      type: "blank",
      concept: "Half-life relation",
      difficulty: "foundation",
      prompt: "t½ = ln2 divided by the decay ______.",
      answers: ["constant"],
      explanation: "t½ = ln2/λ.",
    },
    {
      id: "q20-12",
      chapterId: id,
      type: "blank",
      concept: "Conservation",
      difficulty: "foundation",
      prompt:
        "In all nuclear processes, nucleon number, charge and mass-______ are conserved.",
      answers: ["energy"],
      explanation:
        "Mass-energy (with momentum) — mass alone is NOT conserved; the defect becomes energy.",
    },
    {
      id: "q20-13",
      chapterId: id,
      type: "mcq",
      concept: "Applications",
      difficulty: "standard",
      prompt:
        "A medical tracer should ideally emit ______ and have a ______ half-life.",
      options: [
        "α; long",
        "γ; short (hours-days)",
        "β; very long",
        "γ; of centuries",
      ],
      answerIndex: 1,
      explanation:
        "γ escapes the body for external detection with minimal ionisation damage; a short half-life limits the dose after imaging.",
    },
    {
      id: "q20-14",
      chapterId: id,
      type: "mcq",
      concept: "E = mc²",
      difficulty: "challenging",
      prompt:
        "A reaction's products are 0.20 u lighter than its reactants. The energy released is about",
      options: ["186 MeV", "0.20 MeV", "931 MeV", "3.2 × 10⁻¹¹ MeV"],
      answerIndex: 0,
      explanation: "0.20 × 931 ≈ 186 MeV.",
    },
  ],
  workedExamples: [
    {
      id: "we20-1",
      chapterId: id,
      title: "Half-life from activity data (with background)",
      topic: "Nuclear Physics",
      subtopic: "Decay mathematics",
      difficulty: "standard",
      conceptsTested: ["Background correction", "Exponential decay", "t½ = ln2/λ"],
      requiredFormulas: ["x = x₀e^(−λt)", "t½ = ln2/λ"],
      question:
        "A detector near a sample reads 1250 counts per minute; background is 50 counts per minute. Four hours later the reading is 350 counts per minute. Find the half-life of the nuclide.",
      thinking:
        "Counts include background — subtract it FIRST at both times, then fit the exponential and convert λ to half-life.",
      roadmap:
        "Corrected rates 1200 → 300 → ratio ¼ hints at 2 half-lives; verify formally with logs.",
      givens: [
        "Initial reading 1250 cpm; final reading 350 cpm; background 50 cpm",
        "Elapsed time t = 4.0 h",
      ],
      unknowns: ["Half-life t½"],
      steps: [
        {
          title: "Subtract background",
          content:
            "Source rates: 1250 − 50 = 1200 cpm initially; 350 − 50 = 300 cpm finally.",
          why: "Background counts are not from the sample and do not decay with it — using raw readings skews λ.",
          checkpoint: {
            question: "Why must background be subtracted before analysis?",
            options: [
              "It makes the numbers smaller and easier",
              "Background is constant, not decaying — only the source's counts follow the exponential",
              "Background is negative",
            ],
            answerIndex: 1,
            feedback:
              "The exponential law applies to the SOURCE only; the steady background would flatten the apparent decay.",
          },
        },
        {
          title: "Spot the ratio",
          content:
            "300/1200 = ¼ = (½)². The corrected rate has halved twice in 4.0 hours.",
          why: "Clean power-of-two ratios let you count half-lives directly.",
        },
        {
          title: "Half-life",
          content:
            "Two half-lives = 4.0 h ⇒ t½ = 2.0 h. (Check via logs: λ = ln(4)/4.0 h = 0.347 h⁻¹; t½ = ln2/λ = 2.0 h ✓)",
          why: "The formal route with λ = (1/t)ln(x₀/x) works for ANY ratio, not just powers of two.",
        },
      ],
      finalAnswer: "t½ = 2.0 hours.",
      hints: [
        "What part of each reading is actually from the sample?",
        "Compare corrected initial and final rates as a fraction.",
        "¼ remaining means how many half-lives?",
      ],
      markScheme: [
        { point: "Background subtracted at both times", mark: "B1" },
        { point: "Ratio ¼ identified or λ computed by logs", mark: "M1" },
        { point: "t½ = 2.0 h", mark: "A1" },
      ],
      variants: [
        {
          question:
            "The same sample later reads 200 cpm (background still 50). How much more time has passed since the 350 cpm reading?",
          answer:
            "150/300 = ½ — exactly one more half-life: 2.0 h later.",
          hint: "Correct both readings, then compare.",
        },
        {
          question:
            "A nuclide's corrected count rate falls from 900 to 500 cpm in 3.0 h. Find t½ (non-integer half-lives!).",
          answer:
            "λ = ln(900/500)/3.0 = 0.196 h⁻¹; t½ = ln2/0.196 ≈ 3.5 h.",
          hint: "Use logs — the ratio isn't a neat power of ½.",
        },
      ],
    },
    {
      id: "we20-2",
      chapterId: id,
      title: "Binding energy of helium-4",
      topic: "Nuclear Physics",
      subtopic: "Mass defect & binding energy",
      difficulty: "standard",
      conceptsTested: ["Mass defect", "E = mc²", "BE per nucleon"],
      requiredFormulas: ["Δm = Zmₚ + (A−Z)mₙ − m_nucleus", "BE = Δmc²"],
      question:
        "The helium-4 nucleus has mass 4.00151 u. Given mₚ = 1.00728 u and mₙ = 1.00867 u, calculate (a) the mass defect, (b) the binding energy in MeV, and (c) the binding energy per nucleon. (1 u = 931 MeV)",
      thinking:
        "Assemble the separated-nucleon mass, subtract the nuclear mass, convert with 931 MeV/u, divide by A = 4.",
      roadmap: "Δm = 2mₚ + 2mₙ − m_He → ×931 → ÷4.",
      givens: [
        "m_He = 4.00151 u",
        "mₚ = 1.00728 u, mₙ = 1.00867 u",
        "Z = 2, A = 4",
      ],
      unknowns: ["Δm", "BE (MeV)", "BE/A"],
      steps: [
        {
          title: "Mass of separated nucleons",
          content:
            "2mₚ + 2mₙ = 2(1.00728) + 2(1.00867) = 2.01456 + 2.01734 = 4.03190 u.",
          why: "Helium-4 has 2 protons and 2 neutrons — weigh them apart first.",
        },
        {
          title: "Mass defect",
          content: "Δm = 4.03190 − 4.00151 = 0.03039 u.",
          why: "The bound nucleus weighs LESS than its parts — the deficit left as binding energy when it formed.",
          checkpoint: {
            question: "Which is heavier: the He-4 nucleus, or its separated nucleons?",
            options: [
              "The nucleus — binding adds mass",
              "The separated nucleons — binding energy was released on formation",
              "They are identical",
            ],
            answerIndex: 1,
            feedback:
              "Formation released Δmc²; to separate them again you must pay that energy back.",
          },
        },
        {
          title: "Binding energy",
          content: "BE = 0.03039 × 931 = 28.3 MeV.",
          why: "The u→MeV conversion packages E = Δmc² into one step.",
        },
        {
          title: "Per nucleon",
          content:
            "BE/A = 28.3/4 = 7.1 MeV per nucleon — remarkably high for a light nucleus (the He-4 spike on the BE/A curve).",
          why: "Per-nucleon values enable stability comparisons across nuclides of different sizes.",
        },
      ],
      finalAnswer:
        "(a) 0.03039 u (b) ≈ 28.3 MeV (c) ≈ 7.1 MeV per nucleon.",
      hints: [
        "Weigh the parts: 2 protons + 2 neutrons.",
        "Δm = parts − whole (a positive number).",
        "1 u ↔ 931 MeV; divide by A = 4 at the end.",
      ],
      markScheme: [
        { point: "Separated mass 4.03190 u", mark: "M1" },
        { point: "Δm = 0.03039 u", mark: "A1" },
        { point: "BE = 28.3 MeV", mark: "A1" },
        { point: "BE/A = 7.1 MeV", mark: "A1" },
      ],
      variants: [
        {
          question:
            "Iron-56 (nuclear mass 55.9207 u, Z = 26) — show its BE per nucleon is about 8.8 MeV.",
          answer:
            "Parts: 26(1.00728) + 30(1.00867) = 56.4494 u; Δm = 0.5287 u; BE = 492 MeV; ÷56 ≈ 8.8 MeV.",
          hint: "Same recipe, 26 protons and 30 neutrons.",
        },
        {
          question:
            "Express He-4's binding energy in joules.",
          answer:
            "Δm = 0.03039 × 1.66 × 10⁻²⁷ = 5.04 × 10⁻²⁹ kg; E = mc² = 5.04 × 10⁻²⁹ × (3.0 × 10⁸)² = 4.5 × 10⁻¹² J.",
          hint: "Convert u→kg, then multiply by c².",
        },
      ],
    },
    {
      id: "we20-3",
      chapterId: id,
      title: "Energy released in uranium fission",
      topic: "Nuclear Physics",
      subtopic: "Fission energetics",
      difficulty: "challenging",
      conceptsTested: ["Nuclear equations", "Mass-energy conversion", "BE reasoning"],
      requiredFormulas: ["Conservation of A and Z", "E = Δm × 931 MeV"],
      question:
        "One fission channel is ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x·¹₀n. Masses: U-235 = 235.0439 u, n = 1.0087 u, Ba-141 = 140.9144 u, Kr-92 = 91.9262 u. Find (a) the number x of neutrons released, (b) the energy released per fission in MeV and joules, and (c) explain, using the BE/A curve, why fission of uranium releases energy.",
      thinking:
        "Balance nucleon numbers for x, then a mass audit before vs after, then curve reasoning.",
      roadmap:
        "A-balance → Δm → ×931 → BE/A curve: fragments sit higher than uranium.",
      givens: [
        "Masses as listed",
        "Reaction: U-235 + n → Ba-141 + Kr-92 + x n",
      ],
      unknowns: ["x", "Energy per fission", "Curve explanation"],
      steps: [
        {
          title: "Balance the equation",
          content:
            "A: 235 + 1 = 141 + 92 + x(1) ⇒ x = 3. Z check: 92 + 0 = 56 + 36 + 0 ✓. Three neutrons emerge.",
          why: "Nucleon number and charge conservation determine the mystery multiplicity — these three neutrons enable the chain reaction.",
        },
        {
          title: "Mass audit",
          content:
            "Before: 235.0439 + 1.0087 = 236.0526 u. After: 140.9144 + 91.9262 + 3(1.0087) = 235.8667 u. Δm = 0.1859 u.",
          why: "The lost mass is the energy source — nothing else changes in the books.",
          checkpoint: {
            question: "The mass after fission is LESS than before. Where did it go?",
            options: [
              "Destroyed — mass isn't conserved and that's fine",
              "Converted to energy (KE of fragments and neutrons, plus γ) via E = mc²",
              "Absorbed by the neutrons",
            ],
            answerIndex: 1,
            feedback:
              "Mass-energy as a whole is conserved: Δm × c² appears as kinetic energy of the fragments (mostly) and photons.",
          },
        },
        {
          title: "Energy released",
          content:
            "E = 0.1859 × 931 = 173 MeV = 173 × 1.60 × 10⁻¹³ = 2.8 × 10⁻¹¹ J per fission.",
          why: "Roughly 50 million times the energy per atom of chemical combustion — the scale argument for nuclear power.",
        },
        {
          title: "BE/A curve explanation",
          content:
            "U-238 region sits at ~7.6 MeV/nucleon; the fragments (A ≈ 90–140) sit near ~8.5 MeV/nucleon, closer to the Fe-56 peak. Total binding energy increases by roughly (8.5 − 7.6) MeV × 236 nucleons ≈ 200 MeV — consistent with the mass-audit answer. More tightly bound products ⇒ energy released.",
          why: "The curve is the conceptual summary: any move towards the iron peak releases the binding-energy difference.",
        },
      ],
      finalAnswer:
        "(a) x = 3 neutrons (b) ≈173 MeV ≈ 2.8 × 10⁻¹¹ J per fission (c) fragments lie higher on the BE/A curve than uranium — greater total binding energy, difference released as KE and γ.",
      hints: [
        "Balance nucleon numbers to find x.",
        "Total mass before minus after, then × 931 MeV/u.",
        "Where do the fragments sit on the BE/A curve relative to uranium?",
      ],
      markScheme: [
        { point: "x = 3 by A/Z balance", mark: "B1" },
        { point: "Δm = 0.1859 u", mark: "M1 A1" },
        { point: "E ≈ 173 MeV (2.8 × 10⁻¹¹ J)", mark: "A1" },
        { point: "BE/A reasoning: products nearer the peak", mark: "B1" },
      ],
      variants: [
        {
          question:
            "Deuterium-tritium fusion: ²₁H + ³₁H → ⁴₂He + ¹₀n. Masses: 2.0141, 3.0161, 4.0026, 1.0087 u. Find the energy released.",
          answer:
            "Δm = (2.0141 + 3.0161) − (4.0026 + 1.0087) = 0.0189 u ⇒ E ≈ 17.6 MeV.",
          hint: "Same audit, fusion side of the curve.",
        },
        {
          question:
            "Estimate the energy released by complete fission of 1.0 kg of U-235.",
          answer:
            "N = 1000/235 × 6.02 × 10²³ ≈ 2.56 × 10²⁴ nuclei; E ≈ 2.56 × 10²⁴ × 2.8 × 10⁻¹¹ ≈ 7 × 10¹³ J — about 20 kilotonnes-of-TNT scale.",
          hint: "Moles → nuclei → multiply by energy per fission.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d20-1",
      chapterId: id,
      title: "Half-life from the decay law",
      goal: "Derive t½ = ln2/λ from N = N₀e^(−λt).",
      steps: [
        {
          text: "Decay is random with fixed probability λ per nucleus per unit time, so the population loses nuclei at a rate proportional to itself:",
          expression: "dN/dt = −λN",
          explanation:
            "This 'rate ∝ amount' structure is shared with capacitor discharge — the origin of all exponential decay.",
        },
        {
          text: "Integrating gives the exponential law:",
          expression: "N = N₀e^(−λt)",
          explanation:
            "Separation of variables: ln N = −λt + const with N(0) = N₀.",
        },
        {
          text: "The half-life is defined by N = N₀/2:",
          expression: "N₀/2 = N₀e^(−λt½)",
          explanation: "Substitute the halving condition into the law.",
        },
        {
          text: "Cancel N₀ and take natural logs:",
          expression: "t½ = ln2/λ",
          explanation:
            "ln(½) = −ln2. A large decay constant (fast decay) means a short half-life — and t½ is independent of when you start counting.",
        },
      ],
    },
    {
      id: "d20-2",
      chapterId: id,
      title: "Energy released from a mass audit",
      goal: "Show how conservation of mass-energy converts a mass difference to released energy in any nuclear process.",
      steps: [
        {
          text: "Write total rest mass on each side of the reaction:",
          expression: "m_before = Σm_reactants,  m_after = Σm_products",
          explanation:
            "Include every particle — stray neutrons and electrons are the usual omissions.",
        },
        {
          text: "The mass difference is",
          expression: "Δm = m_before − m_after",
          explanation:
            "Positive Δm means the products are lighter — mass has been converted.",
        },
        {
          text: "Mass-energy conservation prices the difference:",
          expression: "E_released = Δm c²  (= Δm × 931 MeV if Δm is in u)",
          explanation:
            "The energy appears as kinetic energy of the products and γ photons — total mass-energy, not mass alone, is conserved.",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n20-nucleus",
      label: "The nuclear atom",
      tier: "core",
      x: 0.5,
      y: 0.07,
      explanation:
        "Rutherford scattering: tiny (~10⁻¹⁴ m), massive, positive nucleus in a mostly-empty atom.",
      example: "1 in 8000 α back-scattered from gold foil.",
      application: "Observation→inference exam questions.",
      related: ["n20-isotopes", "n20-decay"],
    },
    {
      id: "n20-isotopes",
      label: "Isotopes ᴬ_Z X",
      tier: "major",
      x: 0.18,
      y: 0.22,
      explanation: "Same Z, different A; identical chemistry, different stability.",
      example: "C-12 stable; C-14 β-emitter used for dating.",
      application: "Nuclide equations; choosing isotopes for jobs.",
      related: ["n20-nucleus", "n20-radiations"],
    },
    {
      id: "n20-radiations",
      label: "α, β, γ",
      tier: "core",
      x: 0.8,
      y: 0.22,
      explanation:
        "He nucleus / fast electron / photon: ionisation falls, penetration rises across the trio.",
      example: "α stopped by paper; γ needs thick lead.",
      application: "Safety, applications, deflection-in-field questions.",
      related: ["n20-isotopes", "n20-decay", "n20-neutrino"],
    },
    {
      id: "n20-decay",
      label: "Decay law A = λN",
      tier: "core",
      x: 0.5,
      y: 0.4,
      explanation:
        "Spontaneous & random per nucleus; exponential for populations: x = x₀e^(−λt), t½ = ln2/λ.",
      example: "8000 Bq → 1000 Bq after 3 half-lives.",
      application: "Dating, tracers, all decay numericals.",
      related: ["n20-nucleus", "n20-radiations", "n20-applications"],
    },
    {
      id: "n20-neutrino",
      label: "β spectrum & neutrino",
      tier: "detail",
      x: 0.85,
      y: 0.45,
      explanation:
        "Continuous β energies ⇒ a third particle conserves energy & momentum: the antineutrino.",
      example: "Pauli's 1930 'desperate remedy', detected 1956.",
      application: "Conservation-law reasoning marks.",
      related: ["n20-radiations", "n20-conservation"],
    },
    {
      id: "n20-conservation",
      label: "Conservation laws",
      tier: "major",
      x: 0.62,
      y: 0.6,
      explanation:
        "Nucleon number, charge, mass-energy and momentum balance in every nuclear equation.",
      example: "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n.",
      application: "Balancing equations; identifying unknown particles.",
      related: ["n20-neutrino", "n20-massenergy"],
    },
    {
      id: "n20-massenergy",
      label: "Mass defect & E = mc²",
      tier: "core",
      x: 0.3,
      y: 0.62,
      explanation:
        "Bound nuclei weigh less than their parts; Δmc² is the binding energy.",
      example: "He-4: Δm = 0.0304 u ⇒ 28.3 MeV.",
      application: "All nuclear energy calculations (1 u ↔ 931 MeV).",
      related: ["n20-conservation", "n20-becurve"],
    },
    {
      id: "n20-becurve",
      label: "BE/A curve",
      tier: "major",
      x: 0.42,
      y: 0.82,
      explanation:
        "Peaks ~8.8 MeV at Fe-56; moves towards the peak release energy.",
      example: "U fission fragments jump from 7.6 to ~8.5 MeV/nucleon.",
      application: "Explaining fission AND fusion energy release.",
      related: ["n20-massenergy", "n20-fissionfusion"],
    },
    {
      id: "n20-fissionfusion",
      label: "Fission & fusion",
      tier: "major",
      x: 0.72,
      y: 0.84,
      explanation:
        "Heavy nuclei split; light nuclei merge — both climb the BE/A curve, releasing ~MeV per nucleon.",
      example: "D-T fusion 17.6 MeV; U-235 fission ~200 MeV.",
      application: "Reactors, stars, energy-scale comparisons.",
      related: ["n20-becurve"],
    },
    {
      id: "n20-applications",
      label: "Applications & hazards",
      tier: "detail",
      x: 0.15,
      y: 0.85,
      explanation:
        "Match half-life + radiation type to the task: tracers, smoke alarms, dating, sterilisation; shield/ingestion hazards.",
      example: "Tc-99m (6 h, γ) for imaging; Am-241 (432 y, α) in alarms.",
      application: "Discuss-style questions need BOTH criteria.",
      related: ["n20-decay", "n20-radiations"],
    },
  ],
  conceptEdges: [
    { from: "n20-nucleus", to: "n20-isotopes", label: "composition" },
    { from: "n20-nucleus", to: "n20-decay", label: "instability" },
    { from: "n20-isotopes", to: "n20-radiations", label: "emissions" },
    { from: "n20-radiations", to: "n20-neutrino", label: "β spectrum" },
    { from: "n20-neutrino", to: "n20-conservation", label: "predicted by" },
    { from: "n20-decay", to: "n20-applications", label: "half-life choice" },
    { from: "n20-radiations", to: "n20-applications", label: "penetration choice" },
    { from: "n20-conservation", to: "n20-massenergy", label: "mass-energy" },
    { from: "n20-massenergy", to: "n20-becurve", label: "per nucleon" },
    { from: "n20-becurve", to: "n20-fissionfusion", label: "towards the peak" },
  ],
  graphs: [
    {
      id: "g20-decay",
      title: "Exponential decay and half-lives",
      caption:
        "Each half-life halves whatever remains: 100% → 50% → 25% → 12.5%. The curve never quite reaches zero.",
      xLabel: "t / t½",
      yLabel: "N / N₀",
      curves: [
        {
          label: "N = N₀e^(−λt)",
          color: 2,
          points: sample((t) => Math.exp(-Math.LN2 * t), 0, 4, 90),
        },
        {
          label: "½ and ¼ marks",
          color: 3,
          dashed: true,
          points: [
            { x: 0, y: 0.5 },
            { x: 1, y: 0.5 },
            { x: 1, y: 0.25 },
            { x: 2, y: 0.25 },
          ],
        },
      ],
    },
    {
      id: "g20-becurve",
      title: "Binding energy per nucleon against nucleon number",
      caption:
        "Steep rise through the light elements (He-4 spike), peak ≈8.8 MeV at Fe-56, gentle decline to uranium. Fusion climbs from the left, fission from the right.",
      xLabel: "nucleon number A",
      yLabel: "BE per nucleon / MeV",
      curves: [
        {
          label: "BE/A",
          color: 1,
          points: [
            { x: 1, y: 0 },
            { x: 2, y: 1.1 },
            { x: 3, y: 2.6 },
            { x: 4, y: 7.1 },
            { x: 6, y: 5.3 },
            { x: 7, y: 5.6 },
            { x: 9, y: 6.5 },
            { x: 12, y: 7.7 },
            { x: 16, y: 8.0 },
            { x: 20, y: 8.0 },
            { x: 28, y: 8.4 },
            { x: 40, y: 8.6 },
            { x: 56, y: 8.8 },
            { x: 75, y: 8.7 },
            { x: 100, y: 8.6 },
            { x: 130, y: 8.4 },
            { x: 160, y: 8.2 },
            { x: 190, y: 7.9 },
            { x: 220, y: 7.7 },
            { x: 238, y: 7.6 },
          ],
        },
      ],
    },
    {
      id: "g20-lnplot",
      title: "Linearising decay: ln N against t",
      caption:
        "Taking logs turns the exponential into a straight line of gradient −λ — the standard data-analysis technique.",
      xLabel: "t",
      yLabel: "ln (N/N₀)",
      zeroLine: true,
      curves: [
        {
          label: "ln N = ln N₀ − λt",
          color: 5,
          points: sample((t) => -0.9 * t, 0, 1, 10),
        },
      ],
    },
  ],
};
