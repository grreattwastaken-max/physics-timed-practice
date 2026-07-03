import { Chapter } from "../types";
import { sample } from "./curves";

const id = "ch19";

export const ch19: Chapter = {
  id,
  number: 19,
  title: "Quantum Physics",
  syllabus: "H2 Physics 9478",
  icon: "atom",
  color: 6,
  description:
    "The photoelectric effect, wave-particle duality, wavefunctions and the particle in a box, atomic energy levels, line spectra and the uncertainty principle.",
  sections: [
    "The Photoelectric Effect",
    "Wave-Particle Duality",
    "Wavefunction of a Particle",
    "Particle in a Box (Infinite Square Well)",
    "Energy Levels of Atoms and Line Spectra",
    "Heisenberg Uncertainty Principle",
  ],
  learningOutcomes: [
    "Explain how the threshold frequency evidences the particulate nature of light, while interference/diffraction evidence its wave nature.",
    "Use E = hf for photon energy.",
    "Use photon momentum p = E/c and p = h/λ.",
    "Understand that electron diffraction and single-particle interference evidence the wave nature of particles.",
    "Use λ = h/p for the de Broglie wavelength.",
    "Represent a particle's state by a wavefunction ψ, with |ψ|² the probability density (including normalisation of square and sinusoidal wavefunctions).",
    "Understand superposition of wavefunctions leading to standing-wave solutions for a particle in a box and single-particle interference.",
    "Apply the position-momentum uncertainty principle ΔxΔp ≳ ℏ.",
    "Understand standing-wave solutions ψₙ for the 1-D infinite square well.",
    "Use Eₙ = h²n²/8mL² for allowed energies in an infinite square well of width L.",
    "Understand discrete atomic energy levels and deduce the appearance of spectral lines.",
    "Distinguish emission and absorption line spectra; solve photon-transition problems.",
  ],
  quickReview: [
    "Photon energy E = hf = hc/λ; photon momentum p = E/c = h/λ.",
    "Photoelectric effect: hf = Φ + KE_max; threshold frequency f₀ = Φ/h; intensity changes electron NUMBER, frequency changes electron ENERGY.",
    "Instantaneous emission and the existence of f₀ contradict wave theory — evidence for photons.",
    "Matter waves: λ = h/p — electron diffraction confirms particles behave as waves.",
    "Wavefunction ψ describes a particle's state; |ψ|² is probability density; total probability integrates to 1 (normalisation).",
    "Particle in a box: standing waves with L = nλ/2 give Eₙ = h²n²/8mL² — confinement quantises energy.",
    "Atomic energy levels are discrete: photon emitted/absorbed has hf = |E₂ − E₁|; emission spectra are bright lines, absorption spectra dark lines on a continuum.",
    "Uncertainty principle: ΔxΔp ≳ ℏ — localisation demands a spread of momenta.",
  ],
  examReview: [
    {
      heading: "Photoelectric effect",
      points: [
        "Einstein's equation: hf = Φ + ½mv²_max. Work function Φ = hf₀ is the minimum energy to remove an electron from the SURFACE.",
        "Below f₀: no emission at ANY intensity — inexplicable by wave theory, natural for photons (one photon ↔ one electron).",
        "Emission is effectively instantaneous even at low intensity — again anti-wave, pro-photon.",
        "Intensity ∝ photon arrival rate ⇒ photocurrent; frequency ⇒ individual electron KE.",
        "Stopping potential: eVs = KE_max; plot Vs against f — gradient h/e, intercept −Φ/e.",
      ],
    },
    {
      heading: "Duality and matter waves",
      points: [
        "Light: interference/diffraction (wave) AND photoelectric effect/photon momentum (particle).",
        "Matter: electron diffraction rings through graphite; double-slit interference builds up even ONE PARTICLE AT A TIME.",
        "de Broglie: λ = h/p = h/mv (non-relativistic); accelerated electrons: λ = h/√(2meV).",
        "Wave behaviour is significant only when λ is comparable to the aperture/lattice spacing — everyday objects have immeasurably small λ.",
      ],
    },
    {
      heading: "Wavefunctions and the particle in a box",
      points: [
        "ψ(x) encodes the state; |ψ(x)|² is the probability density of finding the particle at x.",
        "Normalisation: total probability = area under |ψ|² = 1 — used to find amplitude factors.",
        "Confinement between rigid walls ⇒ ψ = 0 at both walls ⇒ standing waves: L = nλₙ/2.",
        "Using λₙ = 2L/n in KE = p²/2m with p = h/λ gives Eₙ = h²n²/8mL².",
        "Energy is quantised BECAUSE of boundary conditions; minimum energy E₁ > 0 (zero-point energy) is consistent with the uncertainty principle.",
      ],
    },
    {
      heading: "Energy levels, spectra and uncertainty",
      points: [
        "Electrons in atoms occupy discrete levels; transitions emit/absorb photons with hf = |ΔE|.",
        "Emission spectrum: discrete bright lines (downward transitions). Absorption: dark lines in a continuous spectrum (upward transitions from the ground state, mostly).",
        "Number of possible lines from level n downwards: n(n−1)/2.",
        "ΔxΔp ≳ ℏ: squeezing position spread widens momentum spread — explains why electrons don't sit in the nucleus and why confined particles have zero-point energy.",
        "Apply as estimates: Δp ≈ ℏ/Δx, then KE_min ≈ (Δp)²/2m.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "Why the photoelectric effect breaks wave theory",
      body: "Wave theory makes three predictions that all fail. (1) Any frequency should eventually eject electrons if the light is bright enough — instead there is a sharp threshold f₀ below which nothing happens at any intensity. (2) Dim light should take minutes to accumulate enough energy — instead emission is instantaneous (< 1 ns). (3) Brighter light should mean faster electrons — instead intensity changes only HOW MANY electrons leave; their maximum KE depends only on frequency. Einstein's photon picture explains all three at a stroke: light arrives in quanta of energy hf; one photon gives all its energy to one electron; if hf < Φ the electron cannot escape, however many photons arrive.",
    },
    {
      heading: "Einstein's equation as energy bookkeeping",
      body: "hf = Φ + KE_max reads: photon energy in = escape cost + kinetic energy out. The work function Φ is the minimum energy to liberate an electron from the metal SURFACE — electrons deeper in the metal or losing energy in collisions emerge with less than KE_max, which is why the equation carries the 'max' subscript. The stopping potential experiment measures KE_max directly: increase the reverse p.d. until even the fastest electrons just fail to arrive: eVs = KE_max. Plotting Vs against f is a marking-scheme classic: straight line, gradient h/e, x-intercept f₀, y-intercept −Φ/e.",
    },
    {
      heading: "Matter waves and the meaning of ψ",
      body: "De Broglie's proposal λ = h/p symmetrised nature: if waves (light) carry particle momentum, particles should carry wavelength. Electron diffraction through graphite — rings exactly where X-rays of equal λ produce them — confirmed it. Quantum mechanics encodes a particle's state in a wavefunction ψ; the measurable content is |ψ|², the probability density. Send electrons one at a time through a double slit and each lands at a point (particle), yet the accumulated pattern shows fringes (wave): each electron's wavefunction passes through BOTH slits and interferes with itself, and |ψ|² sets where it is likely to land. Normalisation — total probability 1 — fixes the amplitude of ψ, a small calculation examiners like to set for square and sinusoidal wavefunctions.",
    },
    {
      heading: "The particle in a box: quantisation from confinement",
      body: "Trap a particle between rigid walls a distance L apart. Its wavefunction must vanish at both walls (it cannot exist outside), so only standing waves fit: L = nλ/2, i.e. λₙ = 2L/n — precisely the string-harmonics condition. Each allowed wavelength implies a momentum pₙ = h/λₙ = nh/2L and hence energy Eₙ = pₙ²/2m = h²n²/8mL². Three deep consequences: energy is DISCRETE (quantisation emerges from boundary conditions, not decree); the minimum energy E₁ = h²/8mL² is NOT zero (zero-point energy — a stationary confined particle would violate ΔxΔp ≳ ℏ); and levels spread out as the box shrinks (E ∝ 1/L²), which is why confinement energies dwarf thermal energies at atomic scales.",
    },
    {
      heading: "Line spectra: reading atomic structure in light",
      body: "An atom's electron energies are discrete, so transitions exchange photons of exact energies hf = |E₂ − E₁|. A hot gas emits its characteristic BRIGHT lines (electrons cascading down); cool gas in front of a continuum absorbs the same energies, leaving DARK lines (electrons kicked up, then re-radiating in all directions). Each element's level ladder is unique — spectra are chemical fingerprints, whether from a sodium lamp or a star. Counting lines: from level n, transitions to all lower levels give n(n−1)/2 possible lines. Energy-level diagrams put E = 0 at ionisation with bound states negative; the ground state is the most negative, and the photon energy is the LEVEL DIFFERENCE, never a single level's value.",
    },
    {
      heading: "Uncertainty as necessity, not ignorance",
      body: "ΔxΔp ≳ ℏ does not say our instruments are clumsy; it says a state localised in position is BUILT from a spread of momenta. A wavefunction confined to Δx must superpose waves with wavelengths spanning Δp ≈ ℏ/Δx — narrower packets need broader momentum mixtures. Two standard estimates: an electron confined to an atom (Δx ≈ 10⁻¹⁰ m) needs Δp ≈ 10⁻²⁴ kg m s⁻¹, giving KE ~ eV scales (chemistry!); confined to a nucleus (Δx ≈ 10⁻¹⁵ m), the implied KE reaches ~GeV — far above what nuclear wells can hold, which is why electrons are not nuclear constituents and why beta-decay electrons must be CREATED at emission.",
    },
  ],
  keyIdeas: [
    "Light and matter both show wave AND particle behaviour — which appears depends on the experiment.",
    "Photons: E = hf, p = h/λ; one photon interacts with one electron.",
    "λ = h/p makes wave behaviour detectable only at tiny momenta.",
    "|ψ|² is probability density; normalisation fixes amplitudes.",
    "Boundary conditions quantise: the box's standing waves give Eₙ ∝ n²/L².",
    "Spectral lines are level differences; emission bright, absorption dark.",
    "ΔxΔp ≳ ℏ: localisation costs momentum spread — the origin of zero-point energy.",
  ],
  definitions: [
    {
      term: "Photon",
      definition:
        "A quantum of electromagnetic radiation carrying energy E = hf and momentum p = E/c = h/λ.",
    },
    {
      term: "Work function (Φ)",
      definition:
        "The minimum energy required to remove an electron from the surface of a metal.",
    },
    {
      term: "Threshold frequency (f₀)",
      definition:
        "The minimum frequency of incident radiation for photoelectric emission: f₀ = Φ/h. Below it no electrons are emitted regardless of intensity.",
    },
    {
      term: "Stopping potential (Vs)",
      definition:
        "The minimum reverse potential difference that reduces the photocurrent to zero: eVs = KE_max of the emitted electrons.",
    },
    {
      term: "de Broglie wavelength",
      definition: "The wavelength associated with a particle of momentum p: λ = h/p.",
    },
    {
      term: "Wavefunction (ψ)",
      definition:
        "The function representing the state of a particle; the square of its amplitude |ψ|² is the probability density of finding the particle at each position.",
    },
    {
      term: "Normalisation",
      definition:
        "The requirement that the total probability of finding the particle somewhere equals 1 — the area under |ψ|² over all space is unity.",
    },
    {
      term: "Zero-point energy",
      definition:
        "The minimum, non-zero energy E₁ = h²/8mL² of a confined particle — required by the uncertainty principle.",
    },
    {
      term: "Emission line spectrum",
      definition:
        "Discrete bright lines produced when electrons in excited atoms fall to lower levels, emitting photons of energy equal to the level difference.",
    },
    {
      term: "Absorption line spectrum",
      definition:
        "Dark lines in a continuous spectrum where photons of specific energies have been absorbed, exciting electrons to higher levels (and re-emitted in all directions).",
    },
    {
      term: "Heisenberg position-momentum uncertainty principle",
      definition:
        "The position and momentum spreads of a particle satisfy ΔxΔp ≳ ℏ: localising a particle requires a spread of momenta.",
    },
  ],
  misconceptions: [
    {
      myth: "Brighter light gives photoelectrons more kinetic energy.",
      reality:
        "Intensity sets only the NUMBER of photons (hence electrons) per second. KE_max depends solely on frequency: hf = Φ + KE_max.",
    },
    {
      myth: "Below the threshold frequency, very intense light will eventually eject electrons.",
      reality:
        "Never (at ordinary intensities): each electron absorbs ONE photon; if hf < Φ no single photon suffices, no matter how many arrive.",
    },
    {
      myth: "The work function is the energy to remove any electron from the metal.",
      reality:
        "Φ is the MINIMUM energy — for electrons at the surface. Deeper electrons need more, which is why emitted electrons have a RANGE of KE up to KE_max.",
    },
    {
      myth: "ψ itself is the probability of finding the particle.",
      reality:
        "ψ can be negative (it must be, to interfere destructively). The probability DENSITY is |ψ|²; probabilities come from areas under |ψ|².",
    },
    {
      myth: "In the double-slit experiment, electrons interfere with each other.",
      reality:
        "The fringes build up even one electron at a time — each electron's wavefunction passes through both slits and interferes with itself.",
    },
    {
      myth: "A confined particle can have zero energy (be at rest).",
      reality:
        "n = 0 gives ψ = 0 everywhere — no particle. The minimum is E₁ = h²/8mL² > 0, consistent with ΔxΔp ≳ ℏ.",
    },
    {
      myth: "A photon of any sufficiently large energy can be absorbed by an atom.",
      reality:
        "Bound-bound absorption requires hf to match a level DIFFERENCE exactly (only ionisation accepts a continuum of energies above the ionisation energy).",
    },
    {
      myth: "The uncertainty principle reflects measurement clumsiness.",
      reality:
        "It is intrinsic: a localised wavepacket mathematically REQUIRES a spread of momenta. Better instruments cannot beat ΔxΔp ≳ ℏ.",
    },
  ],
  examTips: [
    "State Einstein's equation with KE_max and define Φ with 'minimum' and 'surface' — both words carry marks.",
    "For 'explain how X evidences the particle nature of light': cite threshold frequency AND instantaneous emission, and say why wave theory fails each.",
    "Stopping-potential graphs: gradient = h/e (not h), intercepts f₀ and −Φ/e — practice extracting all three.",
    "Electron-through-p.d. chains: eV = ½mv² → p = mv → λ = h/p. Or directly λ = h/√(2meV).",
    "Particle-in-a-box: always start from ψ = 0 at the walls ⇒ L = nλ/2; the energy formula follows, don't just quote it.",
    "Spectra: distinguish emission (bright lines on dark) from absorption (dark lines on continuum); photon energy = LEVEL DIFFERENCE with hf = |ΔE|; convert eV ↔ J carefully.",
    "Uncertainty estimates: use Δp ≈ ℏ/Δx then KE ≈ (Δp)²/2m; give order-of-magnitude answers confidently.",
  ],
  formulas: [
    {
      id: "f19-photon",
      chapterId: id,
      name: "Photon energy",
      expression: "E = hf = hc/λ",
      meaning: "Energy of one quantum of electromagnetic radiation.",
      variables: [
        { symbol: "h", name: "Planck constant (6.63 × 10⁻³⁴)", unit: "J s" },
        { symbol: "f", name: "frequency", unit: "Hz" },
        { symbol: "λ", name: "wavelength", unit: "m" },
      ],
      conditions: "Any electromagnetic radiation.",
      applications: [
        "Photoelectric threshold; spectral-line energies",
        "Photon-count rates from beam power (P = N hf per second)",
      ],
      commonMistakes: [
        "eV↔J conversion errors",
        "Using beam intensity as photon energy",
      ],
    },
    {
      id: "f19-momentum",
      chapterId: id,
      name: "Photon momentum",
      expression: "p = E/c = h/λ",
      meaning: "A photon is massless yet carries momentum.",
      variables: [
        { symbol: "p", name: "photon momentum", unit: "kg m s⁻¹" },
        { symbol: "c", name: "speed of light", unit: "m s⁻¹" },
      ],
      conditions: "Photons in vacuum.",
      applications: ["Radiation pressure", "Compton-style recoil arguments"],
      commonMistakes: ["Using p = mv for a photon (m = 0!)"],
    },
    {
      id: "f19-einstein",
      chapterId: id,
      name: "Photoelectric equation",
      expression: "hf = Φ + ½mv²_max  (eVs = ½mv²_max)",
      meaning:
        "Photon energy = work function + maximum KE of emitted electrons; the stopping potential measures KE_max.",
      variables: [
        { symbol: "Φ", name: "work function", unit: "J or eV" },
        { symbol: "v_max", name: "max speed of photoelectrons", unit: "m s⁻¹" },
        { symbol: "Vs", name: "stopping potential", unit: "V" },
      ],
      conditions: "One photon absorbed per electron; Φ for the surface.",
      applications: [
        "Threshold frequency f₀ = Φ/h",
        "Vs–f graph: gradient h/e, intercept −Φ/e",
      ],
      commonMistakes: [
        "Dropping 'max' — most electrons emerge slower",
        "Mixing eV and J for Φ",
      ],
    },
    {
      id: "f19-debroglie",
      chapterId: id,
      name: "de Broglie wavelength",
      expression: "λ = h/p = h/mv",
      meaning: "Wavelength of the matter wave associated with momentum p.",
      variables: [
        { symbol: "λ", name: "de Broglie wavelength", unit: "m" },
        { symbol: "p", name: "momentum", unit: "kg m s⁻¹" },
      ],
      conditions:
        "Non-relativistic momenta at A-Level; for electrons through p.d. V: λ = h/√(2meV).",
      applications: [
        "Electron diffraction spacing",
        "Why macroscopic objects show no wave effects",
      ],
      commonMistakes: [
        "Using KE directly instead of momentum",
        "Forgetting √ in λ = h/√(2meV)",
      ],
    },
    {
      id: "f19-psi",
      chapterId: id,
      name: "Probability density",
      expression: "P(x) = |ψ(x)|²,  ∫|ψ|² dx = 1",
      meaning:
        "The square of the wavefunction's amplitude gives the probability per unit length; total probability normalises to 1.",
      variables: [
        { symbol: "ψ", name: "wavefunction", unit: "m^(−1/2) in 1-D" },
        { symbol: "|ψ|²", name: "probability density", unit: "m⁻¹ in 1-D" },
      ],
      conditions: "Any quantum state; probabilities are areas under |ψ|².",
      applications: [
        "Normalising square/sinusoidal wavefunctions",
        "Probability of finding a particle in a region",
      ],
      commonMistakes: [
        "Treating ψ as a probability (it can be negative)",
        "Forgetting to square before integrating",
      ],
    },
    {
      id: "f19-box",
      chapterId: id,
      name: "Particle in a box energies",
      expression: "Eₙ = h²n²/8mL²,  n = 1, 2, 3…",
      meaning:
        "Allowed energies of a particle in a 1-D infinite square well of width L.",
      variables: [
        { symbol: "n", name: "quantum number (nodes + 1)", unit: "—" },
        { symbol: "L", name: "well width", unit: "m" },
        { symbol: "m", name: "particle mass", unit: "kg" },
      ],
      conditions:
        "Infinite walls: ψ = 0 at x = 0 and x = L, giving standing waves L = nλ/2.",
      applications: [
        "Zero-point energy E₁ = h²/8mL²",
        "Photon energies of transitions: ΔE = (n₂² − n₁²)h²/8mL²",
      ],
      commonMistakes: [
        "Allowing n = 0",
        "Forgetting E ∝ 1/L² (smaller box, larger energies)",
      ],
    },
    {
      id: "f19-transition",
      chapterId: id,
      name: "Photon transitions",
      expression: "hf = |E₂ − E₁|",
      meaning:
        "The photon emitted or absorbed in a transition carries exactly the energy difference between levels.",
      variables: [
        { symbol: "E₁, E₂", name: "energy levels (usually negative)", unit: "J or eV" },
      ],
      conditions:
        "Bound-bound transitions; upward = absorption, downward = emission.",
      applications: [
        "Wavelengths of spectral lines",
        "Counting lines: n(n−1)/2 from level n",
      ],
      commonMistakes: [
        "Using a level's energy instead of the difference",
        "Sign confusion with negative level values",
      ],
    },
    {
      id: "f19-uncertainty",
      chapterId: id,
      name: "Uncertainty principle",
      expression: "ΔxΔp ≳ ℏ  (ℏ = h/2π)",
      meaning:
        "The spreads in position and momentum cannot both be made arbitrarily small.",
      variables: [
        { symbol: "Δx", name: "position spread", unit: "m" },
        { symbol: "Δp", name: "momentum spread", unit: "kg m s⁻¹" },
        { symbol: "ℏ", name: "reduced Planck constant (1.05 × 10⁻³⁴)", unit: "J s" },
      ],
      conditions: "Intrinsic to quantum states — order-of-magnitude estimates.",
      applications: [
        "Minimum KE of confined particles",
        "Why electrons cannot reside in nuclei",
      ],
      commonMistakes: [
        "Treating it as instrument error",
        "Expecting exact equalities rather than estimates",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc19-1",
      chapterId: id,
      tag: "Photoelectric",
      front:
        "State TWO observations of the photoelectric effect that wave theory cannot explain.",
      back: "1) A threshold frequency below which no emission occurs at any intensity. 2) Emission is instantaneous even in very dim light. (Also: KE_max independent of intensity.) Each follows naturally if one photon of energy hf gives all its energy to one electron.",
    },
    {
      id: "fc19-2",
      chapterId: id,
      tag: "Photoelectric",
      front: "Write Einstein's photoelectric equation and define each term.",
      back: "hf = Φ + ½mv²_max. hf: photon energy; Φ: work function — minimum energy to remove an electron from the metal surface; ½mv²_max: maximum KE of emitted electrons (surface electrons losing least energy).",
    },
    {
      id: "fc19-3",
      chapterId: id,
      tag: "Photoelectric",
      front: "What do intensity and frequency each control in photoelectric emission?",
      back: "Intensity → number of photons per second → photocurrent (number of electrons). Frequency → energy per photon → KE_max of individual electrons.",
    },
    {
      id: "fc19-4",
      chapterId: id,
      tag: "Graphs",
      front: "For the stopping potential vs frequency graph, give the gradient and both intercepts.",
      back: "eVs = hf − Φ ⇒ Vs = (h/e)f − Φ/e. Gradient h/e; x-intercept f₀ = Φ/h; y-intercept −Φ/e.",
    },
    {
      id: "fc19-5",
      chapterId: id,
      tag: "Duality",
      front: "State the de Broglie relation and the key experimental evidence for matter waves.",
      back: "λ = h/p. Electron diffraction (rings through polycrystalline graphite) and double-slit interference built up one electron at a time.",
    },
    {
      id: "fc19-6",
      chapterId: id,
      tag: "Photon",
      front: "A photon is massless. What momentum does it carry?",
      back: "p = E/c = h/λ. (Radiation pressure and recoil experiments confirm it.)",
    },
    {
      id: "fc19-7",
      chapterId: id,
      tag: "Wavefunction",
      front: "What is the physical meaning of ψ and of |ψ|²?",
      back: "ψ is the wavefunction representing the particle's state (can be negative — needed for interference). |ψ|² is the probability DENSITY; probabilities are areas under |ψ|², and the total area is normalised to 1.",
    },
    {
      id: "fc19-8",
      chapterId: id,
      tag: "Particle in box",
      front: "Why are the energies of a particle in an infinite well quantised, and what are they?",
      back: "ψ must vanish at both walls, so only standing waves fit: L = nλ/2 ⇒ λₙ = 2L/n ⇒ pₙ = nh/2L ⇒ Eₙ = h²n²/8mL². Boundary conditions cause quantisation.",
    },
    {
      id: "fc19-9",
      chapterId: id,
      tag: "Particle in box",
      front: "What is zero-point energy and why can't a confined particle have E = 0?",
      back: "E₁ = h²/8mL², the n = 1 energy. E = 0 would mean exact momentum (zero) in a finite Δx, violating ΔxΔp ≳ ℏ; also n = 0 gives ψ ≡ 0 (no particle).",
    },
    {
      id: "fc19-10",
      chapterId: id,
      tag: "Spectra",
      front: "Distinguish emission and absorption line spectra and their origins.",
      back: "Emission: bright discrete lines from downward transitions in excited gas. Absorption: dark lines in a continuum where a cooler gas absorbed matching photons (upward transitions), re-emitting them in all directions.",
    },
    {
      id: "fc19-11",
      chapterId: id,
      tag: "Spectra",
      front: "A photon is emitted in a transition between levels E₂ = −1.5 eV and E₁ = −3.4 eV. Its energy and wavelength?",
      back: "hf = E₂ − E₁ = 1.9 eV = 3.04 × 10⁻¹⁹ J; λ = hc/E = 6.5 × 10⁻⁷ m (red, hydrogen Balmer Hα).",
    },
    {
      id: "fc19-12",
      chapterId: id,
      tag: "Uncertainty",
      front: "State the position-momentum uncertainty principle and its physical reading.",
      back: "ΔxΔp ≳ ℏ. A particle localised to Δx must be a superposition spanning momentum spread Δp ≈ ℏ/Δx — localisation requires a spread of momenta; it is intrinsic, not instrumental.",
    },
    {
      id: "fc19-13",
      chapterId: id,
      tag: "Duality",
      front: "In the single-electron double-slit experiment, what interferes?",
      back: "Each electron's own wavefunction, passing through both slits and superposing. Electrons arrive as individual dots; |ψ|² shapes the emerging fringe pattern.",
    },
  ],
  quiz: [
    {
      id: "q19-1",
      chapterId: id,
      type: "mcq",
      concept: "Photon energy",
      difficulty: "foundation",
      prompt: "The energy of a photon of wavelength 500 nm is about",
      options: ["4.0 × 10⁻¹⁹ J", "1.3 × 10⁻²⁷ J", "4.0 × 10⁻¹⁶ J", "2.5 eV × 10⁻¹⁹"],
      answerIndex: 0,
      explanation:
        "E = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(5.0 × 10⁻⁷) ≈ 4.0 × 10⁻¹⁹ J (≈2.5 eV).",
    },
    {
      id: "q19-2",
      chapterId: id,
      type: "mcq",
      concept: "Threshold",
      difficulty: "standard",
      prompt:
        "Light below the threshold frequency shines on a metal at ever-increasing intensity. The photocurrent",
      options: [
        "increases with intensity",
        "remains zero",
        "appears after a time delay",
        "flows only for very thin metals",
      ],
      answerIndex: 1,
      explanation:
        "Each electron absorbs one photon; hf < Φ means no photon can free an electron regardless of arrival rate.",
    },
    {
      id: "q19-3",
      chapterId: id,
      type: "mcq",
      concept: "Einstein equation",
      difficulty: "standard",
      prompt:
        "Light of photon energy 3.0 eV strikes a surface of work function 1.8 eV. The stopping potential is",
      options: ["4.8 V", "3.0 V", "1.8 V", "1.2 V"],
      answerIndex: 3,
      explanation: "KE_max = hf − Φ = 1.2 eV, so eVs = 1.2 eV ⇒ Vs = 1.2 V.",
    },
    {
      id: "q19-4",
      chapterId: id,
      type: "mcq",
      concept: "de Broglie",
      difficulty: "standard",
      prompt:
        "An electron and a proton have the same SPEED. Compared with the proton's de Broglie wavelength, the electron's is",
      options: ["shorter", "the same", "longer", "zero"],
      answerIndex: 2,
      explanation:
        "λ = h/mv: smaller mass at equal speed means smaller momentum, hence LONGER wavelength (×~1836).",
    },
    {
      id: "q19-5",
      chapterId: id,
      type: "mcq",
      concept: "Wavefunction",
      difficulty: "standard",
      prompt: "The square of the wavefunction's amplitude, |ψ|², represents",
      options: [
        "the particle's energy",
        "the probability density of finding the particle",
        "the particle's charge distribution",
        "the certainty of the momentum",
      ],
      answerIndex: 1,
      explanation:
        "|ψ|² is probability per unit length (1-D); areas under it give probabilities and normalise to 1.",
    },
    {
      id: "q19-6",
      chapterId: id,
      type: "mcq",
      concept: "Particle in box",
      difficulty: "challenging",
      prompt:
        "A particle in an infinite square well has ground-state energy E₁. The energy of the n = 3 state is",
      options: ["3E₁", "6E₁", "9E₁", "27E₁"],
      answerIndex: 2,
      explanation: "Eₙ ∝ n²: E₃ = 9E₁.",
    },
    {
      id: "q19-7",
      chapterId: id,
      type: "mcq",
      concept: "Particle in box scaling",
      difficulty: "challenging",
      prompt:
        "The width of an infinite square well is halved. Each energy level",
      options: ["halves", "doubles", "quadruples", "is unchanged"],
      answerIndex: 2,
      explanation: "Eₙ ∝ 1/L²: halving L multiplies every level by 4.",
    },
    {
      id: "q19-8",
      chapterId: id,
      type: "mcq",
      concept: "Spectra",
      difficulty: "standard",
      prompt:
        "An absorption line spectrum appears as",
      options: [
        "bright lines on a dark background",
        "dark lines on a continuous spectrum",
        "a continuous band with no lines",
        "bright bands separated by dark bands",
      ],
      answerIndex: 1,
      explanation:
        "Cool gas absorbs its characteristic photon energies from the continuum and re-emits them in all directions — dark lines remain in the forward beam.",
    },
    {
      id: "q19-9",
      chapterId: id,
      type: "mcq",
      concept: "Transitions",
      difficulty: "standard",
      prompt:
        "Levels: E₃ = −1.5 eV, E₂ = −3.4 eV, E₁ = −13.6 eV. The photon from the 3→2 transition has energy",
      options: ["1.9 eV", "4.9 eV", "12.1 eV", "15.1 eV"],
      answerIndex: 0,
      explanation: "ΔE = (−1.5) − (−3.4) = 1.9 eV.",
    },
    {
      id: "q19-10",
      chapterId: id,
      type: "blank",
      concept: "Work function",
      difficulty: "foundation",
      prompt:
        "The work function is the ______ energy needed to remove an electron from the surface of a metal.",
      answers: ["minimum"],
      explanation: "'Minimum' is the key word — surface electrons need exactly Φ; others need more.",
    },
    {
      id: "q19-11",
      chapterId: id,
      type: "blank",
      concept: "Duality evidence",
      difficulty: "foundation",
      prompt:
        "Electron ______ through a thin graphite film produces rings, evidencing the wave nature of particles.",
      answers: ["diffraction"],
      explanation:
        "Diffraction rings at angles matching λ = h/p confirmed de Broglie's hypothesis.",
    },
    {
      id: "q19-12",
      chapterId: id,
      type: "mcq",
      concept: "Uncertainty",
      difficulty: "challenging",
      prompt:
        "An electron is confined to a region of size 1.0 × 10⁻¹⁰ m. The minimum momentum spread is about",
      options: [
        "1.1 × 10⁻²⁴ kg m s⁻¹",
        "6.6 × 10⁻²⁴ kg m s⁻¹",
        "1.1 × 10⁻³⁴ kg m s⁻¹",
        "zero",
      ],
      answerIndex: 0,
      explanation:
        "Δp ≈ ℏ/Δx = 1.05 × 10⁻³⁴/1.0 × 10⁻¹⁰ ≈ 1.1 × 10⁻²⁴ kg m s⁻¹.",
    },
    {
      id: "q19-13",
      chapterId: id,
      type: "mcq",
      concept: "Photon momentum",
      difficulty: "standard",
      prompt: "A photon of wavelength 600 nm has momentum",
      options: [
        "1.1 × 10⁻²⁷ kg m s⁻¹",
        "3.3 × 10⁻²⁸ kg m s⁻¹",
        "zero — photons are massless",
        "6.6 × 10⁻²⁶ kg m s⁻¹",
      ],
      answerIndex: 0,
      explanation:
        "p = h/λ = 6.63 × 10⁻³⁴/6.0 × 10⁻⁷ = 1.1 × 10⁻²⁷ kg m s⁻¹ — massless but not momentum-less.",
    },
  ],
  workedExamples: [
    {
      id: "we19-1",
      chapterId: id,
      title: "Full photoelectric analysis of a metal surface",
      topic: "Quantum Physics",
      subtopic: "Photoelectric effect",
      difficulty: "standard",
      conceptsTested: ["Einstein's equation", "Threshold frequency", "Stopping potential"],
      requiredFormulas: ["hf = Φ + KE_max", "eVs = KE_max", "f₀ = Φ/h"],
      question:
        "Ultraviolet light of wavelength 250 nm falls on a zinc surface of work function 4.3 eV. Determine (a) the photon energy, (b) whether emission occurs and the maximum KE of any photoelectrons, (c) the stopping potential, and (d) the threshold wavelength for zinc.",
      thinking:
        "Convert the photon's wavelength to energy, compare against Φ. Everything else is Einstein's bookkeeping. Watch eV↔J conversions.",
      roadmap:
        "E = hc/λ (in J and eV) → KE_max = E − Φ → Vs = KE_max/e → λ₀ = hc/Φ.",
      givens: ["λ = 250 nm", "Φ = 4.3 eV = 6.88 × 10⁻¹⁹ J"],
      unknowns: ["Photon energy", "KE_max", "Vs", "λ₀"],
      steps: [
        {
          title: "Photon energy",
          content:
            "E = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(2.5 × 10⁻⁷) = 7.96 × 10⁻¹⁹ J = 4.97 eV.",
          why: "Each photon carries this energy regardless of beam intensity.",
        },
        {
          title: "Emission check and KE_max",
          content:
            "4.97 eV > 4.3 eV, so emission occurs. KE_max = hf − Φ = 4.97 − 4.3 = 0.67 eV = 1.07 × 10⁻¹⁹ J.",
          why: "The photon pays the escape cost Φ first; the surplus becomes kinetic energy of the fastest (surface) electrons.",
          checkpoint: {
            question: "If the intensity of this UV light doubles, KE_max",
            options: ["doubles", "is unchanged", "quadruples"],
            answerIndex: 1,
            feedback:
              "Intensity changes the photon arrival RATE (photocurrent), not the energy per photon: KE_max is fixed by frequency.",
          },
        },
        {
          title: "Stopping potential",
          content: "eVs = KE_max ⇒ Vs = 0.67 V.",
          why: "The reverse p.d. that just turns back the fastest electrons measures KE_max directly in eV.",
        },
        {
          title: "Threshold wavelength",
          content:
            "At threshold, hf₀ = Φ: λ₀ = hc/Φ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(6.88 × 10⁻¹⁹) = 2.9 × 10⁻⁷ m = 290 nm.",
          why: "Any wavelength LONGER than 290 nm (lower frequency) ejects nothing from zinc, at any intensity.",
        },
      ],
      finalAnswer:
        "(a) 4.97 eV (b) emission occurs; KE_max = 0.67 eV ≈ 1.1 × 10⁻¹⁹ J (c) 0.67 V (d) λ₀ ≈ 290 nm.",
      hints: [
        "Photon energy: E = hc/λ. Convert to eV to compare with Φ easily.",
        "KE_max = photon energy − work function.",
        "Stopping potential in volts equals KE_max in eV.",
        "Threshold: photon energy exactly equals Φ.",
      ],
      markScheme: [
        { point: "Photon energy 7.96 × 10⁻¹⁹ J or 4.97 eV", mark: "A1" },
        { point: "Comparison with Φ and KE_max = 0.67 eV", mark: "M1 A1" },
        { point: "Vs = 0.67 V", mark: "A1" },
        { point: "λ₀ = 290 nm from hf₀ = Φ", mark: "A1" },
      ],
      variants: [
        {
          question:
            "The 250 nm source is replaced by a 300 nm source of the SAME POWER. What changes qualitatively?",
          answer:
            "Photon energy falls to 4.1 eV < Φ = 4.3 eV: emission stops entirely, even though the beam delivers the same power (more, lower-energy photons).",
          hint: "Compare the new photon energy with the work function.",
        },
        {
          question:
            "For a sodium surface (Φ = 2.3 eV) under the same 250 nm light, find the stopping potential.",
          answer: "KE_max = 4.97 − 2.3 = 2.67 eV ⇒ Vs = 2.7 V.",
          hint: "Same photon energy, smaller escape cost.",
        },
      ],
    },
    {
      id: "we19-2",
      chapterId: id,
      title: "de Broglie wavelength of an accelerated electron",
      topic: "Quantum Physics",
      subtopic: "Matter waves",
      difficulty: "standard",
      conceptsTested: ["Energy-momentum chain", "λ = h/p"],
      requiredFormulas: ["eV = ½mv²", "λ = h/p"],
      question:
        "An electron is accelerated from rest through 1.5 kV. Calculate its de Broglie wavelength and comment on whether it would diffract noticeably through a crystal lattice (atomic spacing ~2 × 10⁻¹⁰ m).",
      thinking:
        "Accelerating p.d. → kinetic energy → momentum → wavelength. The final comparison against the lattice spacing decides whether wave effects appear.",
      roadmap: "eV = ½mv² → p = √(2meV) → λ = h/p → compare with 2 × 10⁻¹⁰ m.",
      givens: ["V = 1.5 kV", "mₑ = 9.11 × 10⁻³¹ kg, e = 1.60 × 10⁻¹⁹ C"],
      unknowns: ["λ", "Diffraction judgement"],
      steps: [
        {
          title: "Kinetic energy and momentum",
          content:
            "KE = eV = 1.60 × 10⁻¹⁹ × 1500 = 2.4 × 10⁻¹⁶ J. p = √(2m·KE) = √(2 × 9.11 × 10⁻³¹ × 2.4 × 10⁻¹⁶) = 2.09 × 10⁻²³ kg m s⁻¹.",
          why: "The field does work eV on the electron; momentum follows from KE = p²/2m — the standard chain.",
          checkpoint: {
            question: "Which is the correct route from accelerating p.d. to momentum?",
            options: [
              "p = eV/c",
              "eV = ½mv², then p = mv",
              "p = h/eV",
            ],
            answerIndex: 1,
            feedback:
              "Energy first (eV = ½mv²), then p = mv — equivalently p = √(2meV).",
          },
        },
        {
          title: "Wavelength",
          content:
            "λ = h/p = 6.63 × 10⁻³⁴/2.09 × 10⁻²³ = 3.2 × 10⁻¹¹ m = 0.032 nm.",
          why: "de Broglie's relation converts momentum to wavelength.",
        },
        {
          title: "Diffraction judgement",
          content:
            "λ ≈ 0.03 nm is within an order of magnitude of the lattice spacing 0.2 nm (λ/d ≈ 0.16), so clear diffraction rings appear — exactly the geometry of X-ray diffraction at similar wavelengths.",
          why: "Wave effects are noticeable when λ is comparable to (within ~an order of magnitude of) the obstacle spacing.",
        },
      ],
      finalAnswer:
        "λ ≈ 3.2 × 10⁻¹¹ m; comparable to atomic spacings, so strong diffraction — the electron behaves as a wave here.",
      hints: [
        "Work done by the p.d. becomes kinetic energy: eV = ½mv².",
        "λ = h/p; get p from √(2m·KE).",
        "Compare λ with the lattice spacing to judge diffraction.",
      ],
      markScheme: [
        { point: "KE = eV and p = √(2meV)", mark: "M1" },
        { point: "λ = 3.2 × 10⁻¹¹ m", mark: "A1" },
        { point: "Comparison with lattice spacing and conclusion", mark: "B1" },
      ],
      variants: [
        {
          question:
            "What accelerating p.d. gives an electron λ = 1.0 × 10⁻¹⁰ m?",
          answer:
            "p = h/λ = 6.63 × 10⁻²⁴; KE = p²/2m = 2.41 × 10⁻¹⁷ J; V = KE/e ≈ 150 V.",
          hint: "Run the chain backwards.",
        },
        {
          question:
            "A cricket ball (0.16 kg) travels at 40 m s⁻¹. Find its de Broglie wavelength and comment.",
          answer:
            "λ = h/mv = 6.63 × 10⁻³⁴/6.4 ≈ 1.0 × 10⁻³⁴ m — about 10²⁰ times smaller than a nucleus; no conceivable slit reveals wave behaviour for macroscopic objects.",
          hint: "Same formula, gigantic momentum.",
        },
      ],
    },
    {
      id: "we19-3",
      chapterId: id,
      title: "Electron in a 1-D box: levels and photon emission",
      topic: "Quantum Physics",
      subtopic: "Infinite square well",
      difficulty: "challenging",
      conceptsTested: [
        "Standing-wave quantisation",
        "Eₙ = h²n²/8mL²",
        "Photon transitions",
      ],
      requiredFormulas: ["Eₙ = h²n²/8mL²", "hf = ΔE"],
      question:
        "An electron is confined to an infinite square well of width 0.50 nm. Find (a) the ground-state energy in eV, (b) the energy of the n = 2 level, and (c) the wavelength of the photon emitted in the 2→1 transition. (d) Explain why the electron cannot have zero energy.",
      thinking:
        "Direct application of the box formula, then a transition calculation. Part (d) connects to the uncertainty principle — a conceptual marking point.",
      roadmap:
        "E₁ = h²/8mL² → E₂ = 4E₁ → ΔE = 3E₁ → λ = hc/ΔE → uncertainty argument.",
      givens: ["L = 0.50 nm = 5.0 × 10⁻¹⁰ m", "mₑ = 9.11 × 10⁻³¹ kg"],
      unknowns: ["E₁", "E₂", "λ of 2→1 photon", "Why E > 0"],
      steps: [
        {
          title: "Ground state",
          content:
            "E₁ = h²/8mL² = (6.63 × 10⁻³⁴)²/(8 × 9.11 × 10⁻³¹ × (5.0 × 10⁻¹⁰)²) = 2.41 × 10⁻¹⁹ J = 1.5 eV.",
          why: "n = 1: half a wavelength fits in the box (λ₁ = 2L); this is the smallest allowed energy.",
        },
        {
          title: "First excited state",
          content: "E₂ = 4E₁ = 6.0 eV (Eₙ ∝ n²).",
          why: "n = 2 fits a full wavelength (λ₂ = L); energy scales as n².",
          checkpoint: {
            question: "How does E₂ relate to E₁ in an infinite well?",
            options: ["E₂ = 2E₁", "E₂ = 4E₁", "E₂ = E₁/4"],
            answerIndex: 1,
            feedback: "Eₙ ∝ n², so the second level is 4× the ground state.",
          },
        },
        {
          title: "Photon from the 2→1 transition",
          content:
            "ΔE = E₂ − E₁ = 3E₁ = 4.5 eV = 7.2 × 10⁻¹⁹ J. λ = hc/ΔE = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/7.2 × 10⁻¹⁹ = 2.8 × 10⁻⁷ m (UV).",
          why: "The photon carries exactly the level difference — the same rule as atomic spectra.",
        },
        {
          title: "Why not zero energy?",
          content:
            "n = 0 would make ψ vanish everywhere (no particle). Physically, confinement to Δx ≈ L forces a momentum spread Δp ≳ ℏ/L, so the kinetic energy cannot be zero — the zero-point energy E₁ is the uncertainty principle made concrete.",
          why: "Links the box result to ΔxΔp ≳ ℏ — the syllabus expects this connection.",
        },
      ],
      finalAnswer:
        "(a) 1.5 eV (b) 6.0 eV (c) ≈ 2.8 × 10⁻⁷ m (ultraviolet) (d) confinement forbids zero energy (ΔxΔp ≳ ℏ; n = 0 gives no wavefunction).",
      hints: [
        "E₁ = h²/8mL² — watch the squares.",
        "Levels scale as n².",
        "Photon wavelength from λ = hc/ΔE.",
        "Think uncertainty principle for part (d).",
      ],
      markScheme: [
        { point: "E₁ = 1.5 eV", mark: "A1" },
        { point: "E₂ = 4E₁ = 6.0 eV", mark: "A1" },
        { point: "λ = 2.8 × 10⁻⁷ m via ΔE = 3E₁", mark: "M1 A1" },
        { point: "Zero-point energy explained via uncertainty/boundary conditions", mark: "B1" },
      ],
      variants: [
        {
          question:
            "The well is widened to 1.0 nm. What happens to E₁ and to the 2→1 photon wavelength?",
          answer:
            "E ∝ 1/L²: E₁ falls to 0.38 eV (÷4); ΔE also ÷4, so the photon wavelength stretches ×4 to ≈1.1 × 10⁻⁶ m (infrared).",
          hint: "Everything scales with 1/L².",
        },
        {
          question:
            "Sketch ψ and |ψ|² for n = 2 and give the probability of finding the particle at the centre.",
          answer:
            "ψ₂ is a full sine wave with a NODE at the centre; |ψ₂|² has two humps and is ZERO at the centre — the particle is never found exactly there.",
          hint: "n = 2 has one interior node, at x = L/2.",
        },
      ],
    },
    {
      id: "we19-4",
      chapterId: id,
      title: "Reading an energy-level diagram",
      topic: "Quantum Physics",
      subtopic: "Line spectra",
      difficulty: "standard",
      conceptsTested: ["Transitions", "Emission vs absorption", "Line counting"],
      requiredFormulas: ["hf = |ΔE|", "lines = n(n−1)/2"],
      question:
        "Hydrogen-like levels: E₁ = −13.6 eV, E₂ = −3.4 eV, E₃ = −1.5 eV. A gas of such atoms is excited to n = 3. (a) How many emission lines can appear? (b) Find the longest and shortest emitted wavelengths. (c) White light now passes through the COOL gas (all atoms in the ground state): which absorption line(s) appear in the visible region, given that only 1→2 and 1→3 are energetically accessible with these levels and visible light spans roughly 1.8–3.1 eV?",
      thinking:
        "Downward transitions from n = 3: 3→2, 3→1, 2→1 (three lines). Longest wavelength ↔ smallest energy gap. For absorption from the ground state, check which upward gaps fall in the visible energy window.",
      roadmap:
        "Count lines n(n−1)/2 → identify smallest and largest ΔE → λ = hc/ΔE → test 1→2 and 1→3 against the visible band.",
      givens: [
        "E₁ = −13.6 eV, E₂ = −3.4 eV, E₃ = −1.5 eV",
        "Visible ≈ 1.8–3.1 eV",
      ],
      unknowns: ["Number of lines", "λ_max and λ_min", "Visible absorption lines"],
      steps: [
        {
          title: "Count the emission lines",
          content: "From n = 3: 3(3−1)/2 = 3 lines — the transitions 3→2, 3→1 and 2→1.",
          why: "Every pair of levels gives one possible downward transition.",
        },
        {
          title: "Longest wavelength (smallest gap)",
          content:
            "Smallest ΔE is 3→2: 1.9 eV = 3.04 × 10⁻¹⁹ J. λ = hc/ΔE = 6.5 × 10⁻⁷ m (red).",
          why: "λ ∝ 1/ΔE: the smallest jump emits the longest wavelength.",
          checkpoint: {
            question: "Which transition gives the LONGEST wavelength?",
            options: ["3→1 (biggest gap)", "3→2 (smallest gap)", "2→1"],
            answerIndex: 1,
            feedback: "Longest λ ↔ smallest energy difference: 3→2 at 1.9 eV.",
          },
        },
        {
          title: "Shortest wavelength (largest gap)",
          content:
            "Largest ΔE is 3→1: 12.1 eV = 1.94 × 10⁻¹⁸ J ⇒ λ = 1.03 × 10⁻⁷ m (far UV).",
          why: "The biggest jump compresses the wavelength into the ultraviolet.",
        },
        {
          title: "Visible absorption lines from the cool gas",
          content:
            "From the ground state: 1→2 needs 10.2 eV, 1→3 needs 12.1 eV — both far above the visible band (1.8–3.1 eV). NO visible absorption lines appear: the gas is transparent to visible light even though its EMISSION spectrum (from excited atoms) contains a red line.",
          why: "Absorption at ordinary temperatures starts from the ground state — a subtle but heavily-examined asymmetry between emission and absorption spectra.",
        },
      ],
      finalAnswer:
        "(a) 3 lines (b) longest 6.5 × 10⁻⁷ m (3→2, red); shortest 1.03 × 10⁻⁷ m (3→1, UV) (c) none — ground-state gaps (10.2, 12.1 eV) exceed visible photon energies.",
      hints: [
        "Lines from level n: n(n−1)/2.",
        "λ = hc/ΔE — invert the gap ordering for wavelengths.",
        "Absorption starts from the GROUND state at normal temperatures.",
      ],
      markScheme: [
        { point: "3 lines identified", mark: "B1" },
        { point: "Longest λ from smallest gap: 6.5 × 10⁻⁷ m", mark: "M1 A1" },
        { point: "Shortest λ 1.03 × 10⁻⁷ m", mark: "A1" },
        { point: "No visible absorption, with ground-state reasoning", mark: "B1" },
      ],
      variants: [
        {
          question: "How many lines can a gas excited to n = 4 emit?",
          answer: "4 × 3/2 = 6 lines.",
          hint: "n(n−1)/2 counts all downward pairs.",
        },
        {
          question:
            "What minimum photon energy ionises this atom from its ground state, and what happens for larger energies?",
          answer:
            "13.6 eV frees the electron. Above 13.6 eV any energy is absorbed — the surplus becomes the freed electron's KE (continuum absorption).",
          hint: "Ionisation is a bound→free transition — no discreteness above the edge.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d19-1",
      chapterId: id,
      title: "Energy levels of a particle in a box",
      goal: "Derive Eₙ = h²n²/8mL² from the standing-wave condition.",
      steps: [
        {
          text: "The wavefunction must vanish at both rigid walls (the particle cannot exist outside), so an integer number of half-wavelengths fits the width L:",
          expression: "L = nλₙ/2  ⇒  λₙ = 2L/n",
          explanation:
            "Identical to a string fixed at both ends — boundary conditions select the allowed waves.",
        },
        {
          text: "de Broglie converts each allowed wavelength to a momentum:",
          expression: "pₙ = h/λₙ = nh/2L",
          explanation:
            "The matter-wave relation p = h/λ ties the geometry to mechanics.",
        },
        {
          text: "With no potential energy inside the box, the energy is purely kinetic:",
          expression: "Eₙ = pₙ²/2m = n²h²/8mL²",
          explanation:
            "Substituting pₙ gives discrete levels growing as n² and shrinking as 1/L².",
        },
        {
          text: "The minimum (n = 1) energy is non-zero:",
          expression: "E₁ = h²/8mL² > 0",
          explanation:
            "Zero-point energy: confinement to Δx ≈ L forces Δp ≳ ℏ/L by the uncertainty principle — a confined particle can never be at rest.",
        },
      ],
    },
    {
      id: "d19-2",
      chapterId: id,
      title: "Normalising a square wavefunction",
      goal: "Find the amplitude A of a wavefunction that is constant, ψ(x) = A, for 0 ≤ x ≤ L and zero elsewhere.",
      steps: [
        {
          text: "The total probability of finding the particle somewhere must be 1:",
          expression: "∫₀^L |ψ|² dx = 1",
          explanation:
            "Normalisation is the probabilistic interpretation's bookkeeping requirement.",
        },
        {
          text: "For the constant wavefunction the integral is elementary:",
          expression: "A²L = 1",
          explanation:
            "|ψ|² = A² across width L — the area under a rectangle.",
        },
        {
          text: "Solve for the amplitude:",
          expression: "A = 1/√L",
          explanation:
            "Note the unit m^(−1/2): |ψ|² then has units m⁻¹, a probability per unit length. (For ψ = A sin(nπx/L), the same procedure gives A = √(2/L).)",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n19-photon",
      label: "Photons E = hf",
      tier: "core",
      x: 0.5,
      y: 0.07,
      explanation:
        "Light quanta with energy hf and momentum h/λ; massless but not momentum-less.",
      example: "Green 500 nm photon: 2.5 eV.",
      application: "Photoelectric effect, spectra, photon-count rates.",
      related: ["n19-pe", "n19-duality", "n19-spectra"],
    },
    {
      id: "n19-pe",
      label: "Photoelectric effect",
      tier: "core",
      x: 0.18,
      y: 0.27,
      explanation:
        "hf = Φ + KE_max; threshold f₀ and instant emission defeat wave theory.",
      example: "Zinc (Φ = 4.3 eV) responds to UV but never to visible light.",
      application: "Stopping-potential experiments give h/e.",
      related: ["n19-photon"],
    },
    {
      id: "n19-duality",
      label: "Wave-particle duality",
      tier: "core",
      x: 0.8,
      y: 0.25,
      explanation:
        "Light diffracts AND arrives in quanta; electrons diffract too: λ = h/p.",
      example: "Electron diffraction rings through graphite.",
      application: "Choosing wave or particle model per experiment.",
      related: ["n19-photon", "n19-debroglie", "n19-psi"],
    },
    {
      id: "n19-debroglie",
      label: "de Broglie λ = h/p",
      tier: "major",
      x: 0.62,
      y: 0.44,
      explanation:
        "Every particle carries a wavelength; noticeable only for tiny momenta.",
      example: "150 V electron: λ ≈ 0.1 nm — atomic scale.",
      application: "Electron microscopes; diffraction problems.",
      related: ["n19-duality", "n19-box"],
    },
    {
      id: "n19-psi",
      label: "Wavefunction ψ, |ψ|²",
      tier: "core",
      x: 0.35,
      y: 0.47,
      explanation:
        "ψ encodes the state; |ψ|² is probability density; normalisation fixes amplitude.",
      example: "Square wavefunction on width L: A = 1/√L.",
      application: "Probabilities as areas; interference of single particles.",
      related: ["n19-duality", "n19-box", "n19-hup"],
    },
    {
      id: "n19-box",
      label: "Particle in a box",
      tier: "major",
      x: 0.5,
      y: 0.66,
      explanation:
        "ψ = 0 at walls ⇒ L = nλ/2 ⇒ Eₙ = h²n²/8mL²; zero-point energy E₁ > 0.",
      example: "Electron in 0.5 nm well: E₁ = 1.5 eV.",
      application: "Model of confinement; transition photons.",
      related: ["n19-psi", "n19-debroglie", "n19-spectra", "n19-hup"],
    },
    {
      id: "n19-spectra",
      label: "Energy levels & spectra",
      tier: "major",
      x: 0.82,
      y: 0.66,
      explanation:
        "Discrete atomic levels; hf = |ΔE|; emission bright lines, absorption dark lines.",
      example: "Hydrogen 3→2 gives the red 656 nm line.",
      application: "Element identification; astrophysics.",
      related: ["n19-photon", "n19-box"],
    },
    {
      id: "n19-hup",
      label: "Uncertainty ΔxΔp ≳ ℏ",
      tier: "major",
      x: 0.22,
      y: 0.8,
      explanation:
        "Localisation requires momentum spread; explains zero-point energy.",
      example: "Electron in an atom: Δp ≈ 10⁻²⁴ kg m s⁻¹, KE ~ eV.",
      application: "Order-of-magnitude confinement estimates.",
      related: ["n19-psi", "n19-box"],
    },
  ],
  conceptEdges: [
    { from: "n19-photon", to: "n19-pe", label: "one photon, one electron" },
    { from: "n19-photon", to: "n19-duality", label: "particle side" },
    { from: "n19-duality", to: "n19-debroglie", label: "matter waves" },
    { from: "n19-duality", to: "n19-psi", label: "state description" },
    { from: "n19-psi", to: "n19-box", label: "standing waves" },
    { from: "n19-debroglie", to: "n19-box", label: "p = h/λ" },
    { from: "n19-box", to: "n19-spectra", label: "discrete levels" },
    { from: "n19-photon", to: "n19-spectra", label: "hf = ΔE" },
    { from: "n19-psi", to: "n19-hup", label: "wavepackets" },
    { from: "n19-hup", to: "n19-box", label: "zero-point energy" },
  ],
  graphs: [
    {
      id: "g19-stopping",
      title: "Stopping potential against frequency",
      caption:
        "Vs = (h/e)f − Φ/e: a straight line with gradient h/e for every metal; different work functions shift the intercept f₀ = Φ/h.",
      xLabel: "f",
      yLabel: "Vs",
      curves: [
        {
          label: "Sodium (small Φ)",
          color: 1,
          points: sample((f) => Math.max(0, 1.2 * (f - 0.25)), 0.25, 1, 40),
        },
        {
          label: "Zinc (larger Φ)",
          color: 6,
          points: sample((f) => Math.max(0, 1.2 * (f - 0.55)), 0.55, 1, 40),
        },
      ],
    },
    {
      id: "g19-psi",
      title: "Particle in a box: ψ and |ψ|² for n = 1, 2",
      caption:
        "Standing waves vanish at the walls. n = 2 has a node at the centre — the particle is never found there, though it appears on both sides.",
      xLabel: "x / L",
      yLabel: "ψ, |ψ|²",
      zeroLine: true,
      curves: [
        {
          label: "ψ₁ (half wave)",
          color: 1,
          points: sample((x) => Math.sin(Math.PI * x), 0, 1, 80),
        },
        {
          label: "ψ₂ (full wave)",
          color: 6,
          points: sample((x) => Math.sin(2 * Math.PI * x), 0, 1, 80),
        },
        {
          label: "|ψ₂|²",
          color: 3,
          dashed: true,
          points: sample((x) => Math.sin(2 * Math.PI * x) ** 2, 0, 1, 80),
        },
      ],
    },
    {
      id: "g19-levels",
      title: "Infinite-well energy ladder Eₙ ∝ n²",
      caption:
        "Level spacing grows with n (1, 4, 9, 16…): unlike a uniform ladder, quantum levels spread out — and everything scales as 1/L².",
      xLabel: "n",
      yLabel: "Eₙ / E₁",
      curves: [
        {
          label: "Eₙ = n²E₁",
          color: 5,
          points: [1, 2, 3, 4].map((n) => ({ x: n, y: n * n })),
        },
      ],
    },
    {
      id: "g19-photoelectric-i",
      title: "Photocurrent against p.d. for two intensities",
      caption:
        "Higher intensity raises the saturation current (more electrons) but the stopping potential — set by photon energy — is identical.",
      xLabel: "V (reverse → forward)",
      yLabel: "I",
      zeroLine: false,
      curves: [
        {
          label: "Intensity 2I₀",
          color: 1,
          points: sample(
            (v) => 0.9 / (1 + Math.exp(-9 * (v - 0.25))),
            0,
            1,
            80
          ),
        },
        {
          label: "Intensity I₀",
          color: 2,
          points: sample(
            (v) => 0.45 / (1 + Math.exp(-9 * (v - 0.25))),
            0,
            1,
            80
          ),
        },
      ],
    },
  ],
};
