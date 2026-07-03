import { Chapter } from "../types";
import { sample, clamped } from "./curves";

const id = "ch14";

export const ch14: Chapter = {
  id,
  number: 14,
  title: "Electric Fields",
  syllabus: "H2 Physics 9478",
  icon: "zap",
  color: 1,
  description:
    "Coulomb's law, field strength, potential and potential energy, uniform fields, conductors and capacitors.",
  sections: [
    "Coulomb's Law",
    "Electric Field Strength",
    "Electric Potential Energy & Potential",
    "Important Relationships (E = −dV/dr)",
    "Uniform Electric Fields",
    "Conductors in Electrostatic Equilibrium",
    "Capacitance and Capacitors",
    "Electric vs Gravitational Fields",
  ],
  learningOutcomes: [
    "Recall and use Coulomb's law F = Q₁Q₂/4πε₀r² for point charges in free space or air.",
    "Recall and use E = Q/4πε₀r² for the field strength due to a point charge.",
    "Define electric potential at a point as work done per unit charge by an external force in bringing a small positive test charge from infinity to that point.",
    "Use V = Q/4πε₀r for the potential due to a point charge.",
    "Understand that the electric PE of two point charges is U = Q₁Q₂/4πε₀r.",
    "Recall that field strength equals the negative potential gradient and use this to solve problems.",
    "Calculate the uniform field between parallel plates using E = ΔV/d.",
    "Calculate the force on a charge in a uniform field and describe the motion of charged particles.",
    "Define capacitance C = Q/V and solve problems.",
    "Use U = ½QV = ½CV² = Q²/2C for the energy stored in a capacitor (area under V–Q graph).",
  ],
  quickReview: [
    "Coulomb's law: F = Q₁Q₂/4πε₀r² — inverse-square force between point charges; like charges repel, unlike attract.",
    "Field strength E = F/q (force per unit positive charge); for a point charge E = Q/4πε₀r².",
    "Potential V = W/q from infinity; for a point charge V = Q/4πε₀r (scalar — add algebraically).",
    "E = −dV/dr: field points from high to low potential; gradient of V–r graph gives −E.",
    "Uniform field between plates: E = ΔV/d, constant force ⇒ parabolic trajectories (like projectile motion).",
    "Inside a conductor at equilibrium: E = 0, whole conductor at one potential; field lines meet surfaces at 90°.",
    "Capacitor: C = Q/V; energy stored U = ½QV = ½CV² = Q²/2C (area under V–Q graph).",
  ],
  examReview: [
    {
      heading: "Forces and fields of point charges",
      points: [
        "F = Q₁Q₂/4πε₀r² applies to point charges only; forces are equal-and-opposite action–reaction pairs along the joining line.",
        "With three or more charges, find the resultant force by vector addition — draw the force vectors on the charge of interest first.",
        "E = Q/4πε₀r² points radially outward from positive, inward towards negative charge.",
        "A charge q in a field experiences F = qE; negative charges feel a force opposite to E.",
        "Field lines: never cross, point high→low potential, density ∝ strength, perpendicular to conductor surfaces.",
      ],
    },
    {
      heading: "Potential and potential energy",
      points: [
        "V at a point = work done per unit positive charge by an external force bringing a small positive test charge from infinity to the point (definition is frequently examined — learn it word-perfect).",
        "U = Qq/4πε₀r keeps the signs of both charges: positive for like charges (repulsion), negative for unlike (attraction).",
        "Potential is a scalar: total V is the algebraic sum; field strength is a vector: total E is the vector sum.",
        "ΔU = qΔV; 1 eV = 1.60 × 10⁻¹⁹ J is the energy gained by an electron accelerated through 1 V.",
        "E = −dV/dr: on a V–r graph the negative gradient at a point gives E there; equipotentials are perpendicular to field lines and no work is done moving along them.",
      ],
    },
    {
      heading: "Uniform fields and charged-particle motion",
      points: [
        "Between parallel plates E = ΔV/d — do NOT use point-charge formulas here.",
        "Constant force qE ⇒ constant acceleration a = qE/m ⇒ kinematics equations apply; perpendicular entry gives a parabolic path, straight line after leaving the field.",
        "Energy shortcut: work done = qΔV = ΔKE — often faster than kinematics.",
        "Weight of electrons/protons is usually negligible compared with the electric force (qE ≫ mg).",
      ],
    },
    {
      heading: "Conductors and capacitors",
      points: [
        "At electrostatic equilibrium: E = 0 inside, entire conductor at the same potential, excess charge resides on the surface.",
        "Charged conducting sphere: outside behaves as a point charge at the centre; inside E = 0 and V is constant at the surface value.",
        "C = Q/V; parallel-plate C = ε₀A/d; energy U = ½QV = ½CV² = Q²/2C (area under V–Q graph).",
        "When a battery charges a capacitor, exactly half the supplied energy QV is stored; the other half is dissipated in resistance.",
      ],
    },
  ],
  deepDive: [
    {
      heading: "Why the field concept exists",
      body: "Electric forces act at a distance with no contact. Faraday's field picture resolves this: a charge modifies the space around it, creating a field E; a second charge placed in that field experiences F = qE locally. This picture becomes indispensable when charges move — changes in the field propagate at the speed of light, so the field is a real physical object, not just book-keeping. At A-Level you use it to organise every calculation: first find E (or V) due to sources, then find the force (or energy) on the test charge.",
    },
    {
      heading: "The logic connecting F, E, U and V",
      body: "There are four quantities and two operations connecting them. Divide by charge: F→E and U→V (field quantities are per-unit-charge). Differentiate with distance and negate: U→F and V→E (forces point downhill in energy). So E = −dV/dr is the field-strength version of F = −dU/dr. This single 2×2 grid — with the gravitational analogues g = −dφ/dr etc. — is the most compressible piece of the whole syllabus. If you can reconstruct the grid you can re-derive every relationship in section 14.4.",
    },
    {
      heading: "Signs: the number-one source of lost marks",
      body: "U = Qq/4πε₀r and V = Q/4πε₀r carry the signs of the charges. Two positives give positive U (you did work pushing them together); a positive and a negative give negative U (the system releases energy as they approach). Contrast gravity, where U = −GMm/r is always negative because gravity always attracts. When a question asks for 'work done by an external force' from A to B, compute W = U_B − U_A with signs intact — a negative answer simply means the field did the work for you.",
    },
    {
      heading: "Uniform fields as 'electric projectile motion'",
      body: "Between parallel plates the field is uniform, so a charge experiences constant acceleration a = qE/m = qΔV/md. Perpendicular to the field the velocity component is unchanged; parallel to the field it changes uniformly. The trajectory is a parabola — precisely the mathematics of projectile motion with g replaced by qE/m. After the particle leaves the plates the force vanishes and it travels in a straight line. In the CRO the deflection on the screen turns out to be proportional to the plate p.d., which is why the oscilloscope displays voltage faithfully.",
    },
    {
      heading: "Conductors: why E = 0 inside",
      body: "Free electrons in a conductor move in response to any internal field, and they keep moving until the field they create cancels the field inside completely. At equilibrium E = 0 everywhere inside; since E = −dV/dr, the potential is constant throughout, and any excess charge sits on the surface with field lines leaving at exactly 90°. A charged conducting sphere therefore mimics a point charge for r > R, while for r < R the field is zero and V stays at its surface value Q/4πε₀R — the flat-top V–r graph is a favourite sketch question.",
    },
    {
      heading: "Capacitors: energy is the area under V–Q",
      body: "Charging a capacitor means forcing charge onto a plate against an ever-growing repulsion, so each extra coulomb costs more work: dW = V dq. Summing gives the area under the V–Q line, W = ½QV. The three equivalent forms ½QV, ½CV², Q²/2C let you pick whichever pair of quantities is fixed in the problem — use ½CV² when connected to a battery (V fixed), Q²/2C when isolated (Q fixed). When two charged capacitors are connected together, charge is conserved but energy is not — the deficit is dissipated as heat and electromagnetic radiation during the redistribution.",
    },
  ],
  keyIdeas: [
    "Inverse-square law forces (Coulomb, Newton) share identical mathematics — exploit the analogy.",
    "Fields are per-unit-charge quantities; energies are per-charge → potentials.",
    "E = −dV/dr links the vector world (fields, forces) to the scalar world (potential, energy).",
    "Scalars add algebraically, vectors add geometrically — the reason potential problems are easier.",
    "Uniform field ⇒ constant acceleration ⇒ projectile mathematics.",
    "Conductors screen their interiors: E = 0, V constant.",
    "Capacitor energy = area under V–Q graph = ½QV.",
  ],
  definitions: [
    {
      term: "Coulomb's law",
      definition:
        "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them.",
    },
    {
      term: "Electric field",
      definition:
        "A region of space in which a charge placed in that region experiences an electric force.",
    },
    {
      term: "Electric field strength",
      definition:
        "The electric force exerted per unit positive charge placed at that point.",
    },
    {
      term: "Electric potential",
      definition:
        "The work done per unit positive charge by an external force in bringing a small positive test charge from infinity to that point.",
    },
    {
      term: "Electric potential energy",
      definition:
        "The work done by an external force in bringing the charge from infinity to that point.",
    },
    {
      term: "Capacitance",
      definition:
        "The ratio of the magnitude of the charge stored on either conductor to the magnitude of the potential difference between the conductors.",
    },
    {
      term: "The farad",
      definition:
        "One farad is the capacitance of a capacitor such that when the charge on each of its plates has magnitude one coulomb, the potential difference across them is one volt.",
    },
    {
      term: "Electron-volt",
      definition:
        "The energy gained by an electron, of charge magnitude 1.60 × 10⁻¹⁹ C, when it is accelerated through a potential difference of 1 V.",
    },
    {
      term: "Equipotential surface",
      definition:
        "A surface on which every point is at the same potential, so no work is done moving a charge along it; it is everywhere perpendicular to the field lines.",
    },
  ],
  misconceptions: [
    {
      myth: "E = Q/4πε₀r² and V = Q/4πε₀r can be used between parallel plates.",
      reality:
        "Those formulas apply only to point charges (and outside charged spheres). Between plates the field is uniform: use E = ΔV/d.",
    },
    {
      myth: "Electric potential and potential energy are the same thing.",
      reality:
        "Potential V is per unit charge (property of the point in the field); potential energy U = qV belongs to the charge–field system and depends on the charge placed there.",
    },
    {
      myth: "Field strength is zero wherever potential is zero (and vice versa).",
      reality:
        "E = −dV/dr depends on the gradient of V, not its value. Midway between + and − charges V = 0 but E ≠ 0; midway between two equal like charges E = 0 but V ≠ 0.",
    },
    {
      myth: "The electric PE of two charges is always negative, like gravity.",
      reality:
        "U = Qq/4πε₀r takes the signs of the charges: positive for like charges, negative for unlike. Only gravity is always attractive with always-negative U.",
    },
    {
      myth: "A charge moving along an equipotential gains or loses energy.",
      reality:
        "Movement along an equipotential is perpendicular to the field everywhere, so zero work is done and the potential energy is unchanged.",
    },
    {
      myth: "A capacitor stores charge Q on the whole capacitor, so total charge = 2Q.",
      reality:
        "One plate holds +Q and the other −Q; the net charge is zero. 'Charge stored' conventionally means the magnitude Q on one plate.",
    },
    {
      myth: "All the battery's energy ends up stored in the capacitor.",
      reality:
        "The battery supplies QV but the capacitor stores only ½QV; the other half is dissipated in circuit resistance regardless of its value.",
    },
  ],
  examTips: [
    "Learn the definitions of potential and field strength word-perfect — 'work done per unit positive charge by an external force… from infinity' earns the mark; paraphrases often don't.",
    "For resultant field/force questions, always sketch the vectors at the point first. Most sign errors come from skipping the diagram.",
    "When sketching V–r or E–r graphs, state the behaviour at the surface of a sphere (E jumps to maximum, V is continuous) — these are standard marking points.",
    "Energy methods (W = qΔV) are usually faster and safer than kinematics for accelerated-charge problems.",
    "Quote and use E = −dV/dr explicitly when asked to relate graphs of E and V — examiners look for the negative gradient statement.",
    "In capacitor energy questions, say which quantity stays constant (Q if isolated, V if still connected) before applying the energy formulas.",
  ],
  formulas: [
    {
      id: "f14-coulomb",
      chapterId: id,
      name: "Coulomb's law",
      expression: "F = Q₁Q₂ / 4πε₀r²",
      meaning:
        "The electrostatic force between two point charges separated by distance r.",
      variables: [
        { symbol: "F", name: "electric force", unit: "N" },
        { symbol: "Q₁, Q₂", name: "point charges", unit: "C" },
        { symbol: "r", name: "separation of charges", unit: "m" },
        { symbol: "ε₀", name: "permittivity of free space (8.85 × 10⁻¹²)", unit: "F m⁻¹" },
      ],
      conditions:
        "Point charges (or spheres treated as point charges from their centres) in free space or air.",
      applications: [
        "Force between charged spheres far apart compared with their radii",
        "Resultant force on a charge in a triangle/line of charges (vector sum)",
      ],
      commonMistakes: [
        "Using centre-to-surface instead of centre-to-centre distance",
        "Forgetting forces form an action–reaction pair (equal magnitude on both charges)",
        "Adding magnitudes instead of vectors for multiple charges",
      ],
    },
    {
      id: "f14-efield-point",
      chapterId: id,
      name: "Field strength of a point charge",
      expression: "E = Q / 4πε₀r²",
      meaning:
        "The force per unit positive charge at distance r from a point charge Q.",
      variables: [
        { symbol: "E", name: "electric field strength", unit: "N C⁻¹ or V m⁻¹" },
        { symbol: "Q", name: "source charge", unit: "C" },
        { symbol: "r", name: "distance from charge", unit: "m" },
      ],
      conditions:
        "Point charge in free space/air; also valid outside a charged conducting sphere (measure r from its centre).",
      applications: [
        "Resultant field at a point due to several charges (vector sum)",
        "Field just outside a charged sphere",
      ],
      commonMistakes: [
        "Applying it to uniform fields between plates",
        "Ignoring direction — E points away from +, towards −",
      ],
    },
    {
      id: "f14-force-charge",
      chapterId: id,
      name: "Force on a charge in a field",
      expression: "F = qE",
      meaning: "A charge q placed at a point of field strength E feels force qE.",
      variables: [
        { symbol: "F", name: "electric force", unit: "N" },
        { symbol: "q", name: "charge placed in the field", unit: "C" },
        { symbol: "E", name: "field strength at the point", unit: "N C⁻¹" },
      ],
      conditions: "Any electric field — uniform or non-uniform.",
      applications: [
        "Motion of electrons between plates",
        "Balancing electric force against weight (Millikan)",
      ],
      commonMistakes: [
        "Forgetting a negative charge feels a force opposite to E",
        "Using the field of q itself instead of the external field",
      ],
    },
    {
      id: "f14-potential-point",
      chapterId: id,
      name: "Potential of a point charge",
      expression: "V = Q / 4πε₀r",
      meaning:
        "Work done per unit positive charge bringing a small test charge from infinity to distance r.",
      variables: [
        { symbol: "V", name: "electric potential", unit: "V (J C⁻¹)" },
        { symbol: "Q", name: "source charge (keep its sign)", unit: "C" },
        { symbol: "r", name: "distance from charge", unit: "m" },
      ],
      conditions:
        "Point charge or outside a charged sphere; V is a scalar — add contributions algebraically.",
      applications: [
        "Total potential at a point due to several charges",
        "Potential at the surface of a sphere V = Q/4πε₀R",
      ],
      commonMistakes: [
        "Squaring r (confusing with field strength)",
        "Dropping the sign of Q",
      ],
    },
    {
      id: "f14-pe",
      chapterId: id,
      name: "PE of two point charges",
      expression: "U = Q₁Q₂ / 4πε₀r",
      meaning: "Energy stored in the configuration of two charges a distance r apart.",
      variables: [
        { symbol: "U", name: "electric potential energy", unit: "J" },
        { symbol: "Q₁, Q₂", name: "the two charges (with signs)", unit: "C" },
        { symbol: "r", name: "separation", unit: "m" },
      ],
      conditions: "Point charges; U = 0 at infinite separation by convention.",
      applications: [
        "Energy conservation for a charge released near another charge",
        "Closest approach of an alpha particle to a nucleus",
      ],
      commonMistakes: [
        "Making U always negative (that's gravity!)",
        "Using r² in the denominator",
      ],
    },
    {
      id: "f14-e-gradient",
      chapterId: id,
      name: "Field strength = −potential gradient",
      expression: "E = −dV/dr",
      meaning:
        "The field strength at a point equals the negative gradient of potential there; E points from high to low V.",
      variables: [
        { symbol: "E", name: "field strength", unit: "V m⁻¹" },
        { symbol: "dV/dr", name: "potential gradient", unit: "V m⁻¹" },
      ],
      conditions: "Always true; the bridge between V–r and E–r graphs.",
      applications: [
        "Deducing E from the tangent of a V–r graph",
        "Explaining why field lines point from high to low potential",
      ],
      commonMistakes: [
        "Forgetting the negative sign",
        "Reading the value of V rather than its gradient",
      ],
    },
    {
      id: "f14-uniform",
      chapterId: id,
      name: "Uniform field between plates",
      expression: "E = ΔV / d",
      meaning:
        "The magnitude of the uniform field between parallel plates a distance d apart with p.d. ΔV.",
      variables: [
        { symbol: "E", name: "field strength", unit: "V m⁻¹" },
        { symbol: "ΔV", name: "p.d. between plates", unit: "V" },
        { symbol: "d", name: "plate separation", unit: "m" },
      ],
      conditions:
        "Parallel plates, ignoring edge (fringing) effects; field points from + plate to − plate.",
      applications: [
        "CRO deflection, velocity selectors, Millikan's experiment",
        "Acceleration a = qΔV/md of charged particles",
      ],
      commonMistakes: [
        "Using point-charge formulas between plates",
        "Mixing up d (separation) with plate length",
      ],
    },
    {
      id: "f14-capacitance",
      chapterId: id,
      name: "Capacitance",
      expression: "C = Q / V",
      meaning: "Charge stored per unit potential difference across the capacitor.",
      variables: [
        { symbol: "C", name: "capacitance", unit: "F (C V⁻¹)" },
        { symbol: "Q", name: "magnitude of charge on one plate", unit: "C" },
        { symbol: "V", name: "p.d. across capacitor", unit: "V" },
      ],
      conditions: "Q ∝ V for a given capacitor; C set by geometry and dielectric.",
      applications: [
        "Isolated sphere C = 4πε₀R",
        "Parallel-plate capacitor C = ε₀A/d",
      ],
      commonMistakes: [
        "Thinking C depends on Q or V individually",
        "Using total charge (zero!) instead of one plate's magnitude",
      ],
    },
    {
      id: "f14-cap-energy",
      chapterId: id,
      name: "Energy stored in a capacitor",
      expression: "U = ½QV = ½CV² = Q²/2C",
      meaning:
        "Electrical potential energy stored — the area under the V–Q graph during charging.",
      variables: [
        { symbol: "U", name: "energy stored", unit: "J" },
        { symbol: "Q", name: "charge stored", unit: "C" },
        { symbol: "V", name: "p.d. across capacitor", unit: "V" },
        { symbol: "C", name: "capacitance", unit: "F" },
      ],
      conditions:
        "Choose the form matching what is held constant: ½CV² with a battery connected, Q²/2C when isolated.",
      applications: [
        "Energy 'lost' when capacitors are connected together",
        "Battery supplies QV; only ½QV is stored",
      ],
      commonMistakes: [
        "Forgetting the ½",
        "Assuming energy is conserved when charge redistributes between capacitors",
      ],
    },
    {
      id: "f14-ev",
      chapterId: id,
      name: "Energy and potential difference",
      expression: "ΔU = qΔV  (1 eV = 1.60 × 10⁻¹⁹ J)",
      meaning:
        "The change in electric PE of charge q moved through a potential difference ΔV.",
      variables: [
        { symbol: "ΔU", name: "change in potential energy", unit: "J" },
        { symbol: "q", name: "charge (with sign)", unit: "C" },
        { symbol: "ΔV", name: "V_final − V_initial", unit: "V" },
      ],
      conditions: "Any field; combine with ΔKE = −ΔU when only the electric force acts.",
      applications: [
        "Speed gained by an electron through an accelerating p.d.",
        "Electron-volt energy conversions",
      ],
      commonMistakes: [
        "Sign errors from dropping the sign of q or the order of ΔV",
        "Confusing work done BY the field with work done by an external force",
      ],
    },
  ],
  flashcards: [
    {
      id: "fc14-1",
      chapterId: id,
      tag: "Definition",
      front: "State Coulomb's law.",
      back: "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of the distance between them: F = Q₁Q₂/4πε₀r².",
    },
    {
      id: "fc14-2",
      chapterId: id,
      tag: "Definition",
      front: "Define electric field strength.",
      back: "The electric force exerted per unit positive charge placed at that point: E = F/q. Vector; units N C⁻¹ or V m⁻¹.",
    },
    {
      id: "fc14-3",
      chapterId: id,
      tag: "Definition",
      front: "Define electric potential at a point.",
      back: "The work done per unit positive charge by an external force in bringing a small positive test charge from infinity to that point. Scalar; unit V.",
    },
    {
      id: "fc14-4",
      chapterId: id,
      tag: "Relationship",
      front: "How are E and V related, and what does the sign mean?",
      back: "E = −dV/dr. The field strength is the negative potential gradient; the minus sign means E points in the direction of decreasing potential.",
    },
    {
      id: "fc14-5",
      chapterId: id,
      tag: "Concept",
      front: "Why is the total potential at a point easier to compute than the total field strength?",
      back: "Potential is a scalar — contributions add algebraically (with signs). Field strength is a vector — contributions must be added by vector methods.",
    },
    {
      id: "fc14-6",
      chapterId: id,
      tag: "Concept",
      front: "Describe the field, potential and charge distribution of a conductor in electrostatic equilibrium.",
      back: "E = 0 everywhere inside; the whole conductor is at one potential; excess charge lies on the surface; external field lines meet the surface at 90°.",
    },
    {
      id: "fc14-7",
      chapterId: id,
      tag: "Graphs",
      front: "Sketch (describe) E–r and V–r for a charged conducting sphere of radius R.",
      back: "For r<R: E = 0, V constant at Q/4πε₀R. For r≥R: E = Q/4πε₀r² (max at surface), V = Q/4πε₀r. V is continuous at R; E jumps from 0 to its maximum.",
    },
    {
      id: "fc14-8",
      chapterId: id,
      tag: "Uniform fields",
      front: "A charged particle enters a uniform field perpendicular to its velocity. Describe its path during and after the field.",
      back: "Inside: parabolic path (constant force qE ⇒ constant acceleration, like projectile motion). After leaving: straight line at constant velocity.",
    },
    {
      id: "fc14-9",
      chapterId: id,
      tag: "Definition",
      front: "Define capacitance and the farad.",
      back: "C = Q/V — charge stored on either plate per unit p.d. between them. One farad: 1 C of charge on each plate produces a p.d. of 1 V.",
    },
    {
      id: "fc14-10",
      chapterId: id,
      tag: "Energy",
      front: "Give three expressions for the energy stored in a capacitor and their graphical origin.",
      back: "U = ½QV = ½CV² = Q²/2C — the area under the V–Q graph accumulated while charging.",
    },
    {
      id: "fc14-11",
      chapterId: id,
      tag: "Concept",
      front: "A battery charges a capacitor to p.d. V. How much energy does the battery supply, and where does it go?",
      back: "Battery supplies QV. Only ½QV is stored in the capacitor; the other ½QV is dissipated as heat in the resistance of the circuit, whatever its value.",
    },
    {
      id: "fc14-12",
      chapterId: id,
      tag: "Concept",
      front: "What is special about work done along an equipotential surface?",
      back: "Zero. The path is perpendicular to the field (and force) everywhere, so W = Fs cos90° = 0; potential energy is unchanged.",
    },
    {
      id: "fc14-13",
      chapterId: id,
      tag: "Comparison",
      front: "Give two key differences between electric and gravitational fields.",
      back: "1) Electric forces can attract or repel (two signs of charge); gravity only attracts. 2) Electric U = Q₁Q₂/4πε₀r carries the charges' signs; gravitational U = −GMm/r is always negative.",
    },
    {
      id: "fc14-14",
      chapterId: id,
      tag: "Definition",
      front: "Define the electron-volt.",
      back: "The energy gained by an electron (|q| = 1.60 × 10⁻¹⁹ C) accelerated through a p.d. of 1 V: 1 eV = 1.60 × 10⁻¹⁹ J.",
    },
  ],
  quiz: [
    {
      id: "q14-1",
      chapterId: id,
      type: "mcq",
      concept: "Coulomb's law",
      difficulty: "foundation",
      prompt:
        "Two point charges attract each other with force F. If both charges are doubled and the separation is doubled, the new force is",
      options: ["F", "2F", "F/2", "4F"],
      answerIndex: 0,
      explanation:
        "F ∝ Q₁Q₂/r². Numerator ×4, denominator ×4 (2² = 4) — the effects cancel, so the force is unchanged.",
    },
    {
      id: "q14-2",
      chapterId: id,
      type: "mcq",
      concept: "Potential vs field",
      difficulty: "standard",
      prompt:
        "At the midpoint between two equal positive charges, which statement is correct?",
      options: [
        "E = 0 and V = 0",
        "E = 0 and V ≠ 0",
        "E ≠ 0 and V = 0",
        "E ≠ 0 and V ≠ 0",
      ],
      answerIndex: 1,
      explanation:
        "The two field vectors are equal and opposite ⇒ E = 0. Potentials are scalars and both positive ⇒ V ≠ 0. (For a + and − pair the answer flips.)",
    },
    {
      id: "q14-3",
      chapterId: id,
      type: "mcq",
      concept: "E = −dV/dr",
      difficulty: "standard",
      prompt:
        "On a V–r graph for a point charge, the field strength at r₁ is found from",
      options: [
        "the value of V at r₁",
        "the area under the graph up to r₁",
        "the negative of the gradient at r₁",
        "the reciprocal of V at r₁",
      ],
      answerIndex: 2,
      explanation:
        "E = −dV/dr — field strength is the negative potential gradient, i.e. minus the tangent's slope at that point.",
    },
    {
      id: "q14-4",
      chapterId: id,
      type: "mcq",
      concept: "Uniform fields",
      difficulty: "standard",
      prompt:
        "An electron enters the space between parallel plates (p.d. V, separation d) moving parallel to the plates. Its acceleration has magnitude",
      options: ["eV/d", "eV/md", "eVd/m", "eV/m"],
      answerIndex: 1,
      explanation:
        "E = V/d, force = eE = eV/d, so a = F/m = eV/md, directed towards the positive plate.",
    },
    {
      id: "q14-5",
      chapterId: id,
      type: "mcq",
      concept: "Energy methods",
      difficulty: "standard",
      prompt:
        "An electron is accelerated from rest through a p.d. of 100 V. Its kinetic energy gain is",
      options: ["100 J", "1.6 × 10⁻¹⁷ J", "1.6 × 10⁻¹⁹ J", "6.25 × 10¹⁷ J"],
      answerIndex: 1,
      explanation:
        "ΔKE = qΔV = (1.60 × 10⁻¹⁹)(100) = 1.6 × 10⁻¹⁷ J (i.e. 100 eV).",
    },
    {
      id: "q14-6",
      chapterId: id,
      type: "mcq",
      concept: "Conducting sphere",
      difficulty: "challenging",
      prompt:
        "For a charged hollow conducting sphere of radius R, which is correct at r = R/2 from the centre?",
      options: [
        "E = 0, V = 0",
        "E = 0, V = Q/4πε₀R",
        "E = Q/πε₀R², V = Q/2πε₀R",
        "E = Q/4πε₀r², V = Q/4πε₀r",
      ],
      answerIndex: 1,
      explanation:
        "Inside a conductor E = 0, and the potential is constant throughout at its surface value Q/4πε₀R — not zero.",
    },
    {
      id: "q14-7",
      chapterId: id,
      type: "mcq",
      concept: "Capacitor energy",
      difficulty: "standard",
      prompt:
        "A capacitor connected to a battery stores energy U. If the p.d. is doubled, the stored energy becomes",
      options: ["U", "2U", "4U", "U/2"],
      answerIndex: 2,
      explanation: "U = ½CV² ∝ V². Doubling V quadruples the stored energy.",
    },
    {
      id: "q14-8",
      chapterId: id,
      type: "mcq",
      concept: "Equipotentials",
      difficulty: "foundation",
      prompt: "Moving a charge along an equipotential surface requires",
      options: [
        "work proportional to the distance moved",
        "work proportional to the field strength",
        "zero work",
        "work equal to qV",
      ],
      answerIndex: 2,
      explanation:
        "The path is perpendicular to the electric force everywhere, so no work is done and PE is unchanged.",
    },
    {
      id: "q14-9",
      chapterId: id,
      type: "blank",
      concept: "Definitions",
      difficulty: "foundation",
      prompt:
        "Electric potential is defined as the work done per unit positive charge by an external force in bringing a small positive test charge from ______ to that point.",
      answers: ["infinity"],
      explanation:
        "The reference point of zero potential is conventionally taken at infinity.",
    },
    {
      id: "q14-10",
      chapterId: id,
      type: "blank",
      concept: "Field geometry",
      difficulty: "foundation",
      prompt:
        "Electric field lines always meet the surface of a conductor at an angle of ______ degrees.",
      answers: ["90", "ninety"],
      explanation:
        "Any parallel component would drive surface charges to move — equilibrium requires perpendicular field lines.",
    },
    {
      id: "q14-11",
      chapterId: id,
      type: "mcq",
      concept: "Point-charge PE",
      difficulty: "challenging",
      prompt:
        "Charges +q and −q are separated by r. The electric potential energy of the system is",
      options: [
        "positive, because energy is always positive",
        "negative, because the charges attract",
        "zero, because the charges are equal and opposite",
        "negative only if q is large",
      ],
      answerIndex: 1,
      explanation:
        "U = (+q)(−q)/4πε₀r < 0. Attracting systems have negative PE relative to infinity — work must be done to separate them.",
    },
    {
      id: "q14-12",
      chapterId: id,
      type: "mcq",
      concept: "Millikan / force balance",
      difficulty: "challenging",
      prompt:
        "A charged oil drop of weight W is stationary between horizontal plates with field strength E. The charge on the drop is",
      options: ["WE", "W/E", "E/W", "W²/E"],
      answerIndex: 1,
      explanation:
        "Equilibrium: qE = W ⇒ q = W/E. This is the principle of Millikan's oil-drop experiment.",
    },
  ],
  workedExamples: [
    {
      id: "we14-1",
      chapterId: id,
      title: "Resultant force from two charges",
      topic: "Electric Fields",
      subtopic: "Coulomb's law",
      difficulty: "standard",
      conceptsTested: ["Coulomb's law", "Vector addition of forces"],
      requiredFormulas: ["F = Q₁Q₂/4πε₀r²"],
      question:
        "Charges Q₁ = +2.0 μC, Q₂ = +1.0 μC and Q₃ = +3.0 μC sit at the corners of a right-angled triangle. Q₁ is 2.0 m to the left of Q₃; Q₂ is 1.0 m directly above Q₃. Determine the magnitude and direction of the resultant force on Q₃.",
      thinking:
        "Three point charges — this is a Coulomb's-law vector-sum problem. Each of Q₁ and Q₂ pushes Q₃ (all positive ⇒ both forces repulsive, pointing away from the other charge). Compute each force magnitude, then add as perpendicular vectors.",
      roadmap:
        "1) Force on Q₃ from Q₁ (acts to the right). 2) Force on Q₃ from Q₂ (acts downwards). 3) Pythagoras + arctangent for the resultant.",
      givens: [
        "Q₁ = +2.0 μC at 2.0 m from Q₃ (horizontal)",
        "Q₂ = +1.0 μC at 1.0 m from Q₃ (vertical)",
        "Q₃ = +3.0 μC",
      ],
      unknowns: ["Resultant force on Q₃ (magnitude and direction)"],
      steps: [
        {
          title: "Force on Q₃ due to Q₁",
          content:
            "F₁ = Q₁Q₃/4πε₀r² = (8.99 × 10⁹)(2.0 × 10⁻⁶)(3.0 × 10⁻⁶)/(2.0)² = 1.35 × 10⁻² N, directed away from Q₁ (to the right).",
          why: "Both charges are positive so the force on Q₃ is repulsive, along the line joining them.",
          checkpoint: {
            question: "Before computing: in which direction does Q₁ push Q₃?",
            options: [
              "Towards Q₁ (left)",
              "Away from Q₁ (right)",
              "Perpendicular to the line joining them",
            ],
            answerIndex: 1,
            feedback:
              "Like charges repel, and Coulomb forces act along the line joining the charges — so Q₃ is pushed away from Q₁, to the right.",
          },
        },
        {
          title: "Force on Q₃ due to Q₂",
          content:
            "F₂ = Q₂Q₃/4πε₀r² = (8.99 × 10⁹)(1.0 × 10⁻⁶)(3.0 × 10⁻⁶)/(1.0)² = 2.70 × 10⁻² N, directed away from Q₂ (downwards).",
          why: "Repulsion again — Q₂ is above Q₃, so it pushes Q₃ downwards. Note the smaller distance makes this force larger despite the smaller charge.",
        },
        {
          title: "Vector sum",
          content:
            "The two forces are perpendicular. F = √(F₁² + F₂²) = √((1.35)² + (2.70)²) × 10⁻² = 3.02 × 10⁻² N. Angle below the horizontal: θ = tan⁻¹(F₂/F₁) = tan⁻¹(2.70/1.35) = 63.4°.",
          why: "Forces are vectors — never add magnitudes directly unless collinear. A right-angle geometry lets us use Pythagoras.",
          checkpoint: {
            question: "Can we just add 1.35 × 10⁻² and 2.70 × 10⁻² N?",
            options: [
              "Yes — force magnitudes always add",
              "No — they are perpendicular vectors and must be combined by Pythagoras",
            ],
            answerIndex: 1,
            feedback:
              "Forces are vectors. Perpendicular components combine as √(F₁² + F₂²).",
          },
        },
      ],
      finalAnswer:
        "F ≈ 3.0 × 10⁻² N at 63° below the horizontal (away from both charges).",
      hints: [
        "Are the forces on Q₃ attractive or repulsive? Draw them first.",
        "Compute each force separately with F = Q₁Q₂/4πε₀r² — watch the different distances.",
        "The two forces are perpendicular: combine with Pythagoras and find the angle with tan⁻¹.",
      ],
      markScheme: [
        { point: "Correct magnitude of F₁ with repulsive direction stated", mark: "M1" },
        { point: "Correct magnitude of F₂ with repulsive direction stated", mark: "M1" },
        { point: "Vector addition using Pythagoras to get ≈3.0 × 10⁻² N", mark: "M1" },
        { point: "Direction 63° below horizontal (or equivalent description)", mark: "A1" },
      ],
      variants: [
        {
          question:
            "Same triangle, but Q₂ is −1.0 μC. What changes about the force on Q₃?",
          answer:
            "F₂ now attracts Q₃ upwards (towards Q₂); magnitude unchanged at 2.70 × 10⁻² N. Resultant 3.0 × 10⁻² N at 63° above the horizontal.",
          hint: "Only the direction of the Q₂ contribution flips.",
        },
        {
          question:
            "Q₁ = +4.0 μC, Q₃ = +3.0 μC at 2.0 m, no Q₂. Find the force on Q₃.",
          answer:
            "F = (8.99 × 10⁹)(4.0 × 10⁻⁶)(3.0 × 10⁻⁶)/4.0 = 2.7 × 10⁻² N away from Q₁.",
          hint: "Single pair — one Coulomb's-law computation.",
        },
      ],
    },
    {
      id: "we14-2",
      chapterId: id,
      title: "Speed of a charge released in a field",
      topic: "Electric Fields",
      subtopic: "Energy conservation with potential",
      difficulty: "challenging",
      conceptsTested: [
        "Electric potential energy",
        "Energy conservation",
        "Non-uniform fields",
      ],
      requiredFormulas: ["U = Q₁Q₂/4πε₀r", "ΔKE = −ΔU"],
      question:
        "A fixed point charge S carries +1.0 × 10⁻⁴ C. A particle P of mass 2.0 × 10⁻⁵ kg and charge −1.5 × 10⁻¹⁰ C is released from rest 1.0 m from S. Calculate the speed of P when it is 0.10 m from S. Neglect gravity.",
      thinking:
        "The charge moves in a NON-uniform field (point charge), so acceleration is not constant — kinematics equations are forbidden. Energy conservation with U = Qq/4πε₀r is the correct tool. P is negative, S positive ⇒ attraction ⇒ P speeds up as r decreases.",
      roadmap:
        "Compute U at r = 1.0 m and r = 0.10 m (keeping signs), then apply KE gained = PE lost.",
      givens: [
        "Q_S = +1.0 × 10⁻⁴ C (fixed)",
        "q_P = −1.5 × 10⁻¹⁰ C, m = 2.0 × 10⁻⁵ kg",
        "Released from rest at r₁ = 1.0 m; find speed at r₂ = 0.10 m",
      ],
      unknowns: ["Speed v at r₂ = 0.10 m"],
      steps: [
        {
          title: "Why kinematics fails",
          content:
            "The force F = Qq/4πε₀r² grows as r shrinks, so acceleration is not constant. The kinematics equations (v² = u² + 2as) do not apply. Use energy conservation instead.",
          why: "Choosing the right framework is the first marking point — examiners penalise constant-acceleration equations here.",
          checkpoint: {
            question: "Which method is valid for motion near a point charge?",
            options: [
              "v² = u² + 2as with a = F/m at the start",
              "Energy conservation with U = Qq/4πε₀r",
              "F = ma with average force",
            ],
            answerIndex: 1,
            feedback:
              "Force varies as 1/r², so acceleration is non-constant. Only energy methods handle this cleanly at A-Level.",
          },
        },
        {
          title: "Potential energy at both positions",
          content:
            "U = Qq/4πε₀r. At r₁ = 1.0 m: U₁ = (8.99 × 10⁹)(1.0 × 10⁻⁴)(−1.5 × 10⁻¹⁰)/1.0 = −1.35 × 10⁻⁴ J. At r₂ = 0.10 m: U₂ = −1.35 × 10⁻³ J.",
          why: "Keep the signs: opposite charges give negative U, more negative as they approach — the system loses PE.",
        },
        {
          title: "Energy conservation",
          content:
            "KE gained = PE lost: ½mv² = U₁ − U₂ = (−1.35 × 10⁻⁴) − (−1.35 × 10⁻³) = 1.21 × 10⁻³ J.",
          why: "Only the electric force acts (gravity neglected), so total mechanical energy is constant.",
        },
        {
          title: "Solve for v",
          content:
            "v = √(2 × 1.21 × 10⁻³ / 2.0 × 10⁻⁵) = √121 = 11.0 m s⁻¹.",
          why: "Rearranging ½mv² = ΔKE. Check units: J/kg = m²s⁻² — consistent.",
        },
      ],
      finalAnswer: "v ≈ 11 m s⁻¹ towards S.",
      hints: [
        "Is the acceleration constant here? What does that rule out?",
        "Write U = Qq/4πε₀r at both distances, keeping the signs of the charges.",
        "KE gained = U(initial) − U(final). The PE becomes more negative, so the particle speeds up.",
      ],
      markScheme: [
        { point: "Recognition that energy conservation must be used (non-constant force)", mark: "B1" },
        { point: "Correct U at both positions with negative signs", mark: "M1" },
        { point: "½mv² = U₁ − U₂ applied correctly", mark: "M1" },
        { point: "v = 11 m s⁻¹", mark: "A1" },
      ],
      variants: [
        {
          question:
            "Same setup but P carries +1.5 × 10⁻¹⁰ C and is fired FROM 0.10 m towards infinity. What minimum launch speed lets it escape to 1.0 m with zero speed?",
          answer:
            "Now U is positive; ½mv² = U(0.10) − U(1.0) = 1.35 × 10⁻³ − 1.35 × 10⁻⁴ = 1.21 × 10⁻³ J ⇒ v = 11 m s⁻¹.",
          hint: "Repulsion decelerates it; the energy bookkeeping mirrors the original.",
        },
        {
          question:
            "An alpha particle (q = +2e, m = 6.6 × 10⁻²⁷ kg) with KE 1.2 MeV approaches a gold nucleus (q = +79e) head-on. Find the distance of closest approach.",
          answer:
            "At closest approach all KE → PE: r = (2)(79)e²/4πε₀(KE) = (8.99 × 10⁹)(158)(1.6 × 10⁻¹⁹)²/(1.2 × 10⁶ × 1.6 × 10⁻¹⁹) ≈ 1.9 × 10⁻¹³ m.",
          hint: "Set initial KE equal to U = Q₁Q₂/4πε₀r at the turning point.",
        },
      ],
    },
    {
      id: "we14-3",
      chapterId: id,
      title: "Electron projected between parallel plates",
      topic: "Electric Fields",
      subtopic: "Uniform fields & projectile-like motion",
      difficulty: "standard",
      conceptsTested: [
        "Uniform field E = V/d",
        "Constant acceleration",
        "Parabolic motion",
      ],
      requiredFormulas: ["E = ΔV/d", "F = qE", "kinematics equations"],
      question:
        "Two horizontal plates of length 5.0 cm are 2.5 cm apart, with the upper plate at +60 V relative to the lower. An electron enters horizontally midway... it is projected horizontally at 7.5 × 10⁶ m s⁻¹ along the plates. (a) Describe and explain its path between and after the plates. (b) Determine the angle it makes with the horizontal on exit. (mₑ = 9.11 × 10⁻³¹ kg, e = 1.60 × 10⁻¹⁹ C)",
      thinking:
        "Uniform field between plates ⇒ constant force on the electron ⇒ constant acceleration ⇒ projectile-style analysis. The electron (negative) is attracted to the +60 V upper plate. Horizontal velocity is unchanged; vertical velocity grows linearly with time.",
      roadmap:
        "(a) Parabola inside (constant ⊥ acceleration), straight line outside (no force). (b) Find E, then a, then time between plates, then v_y, then tan θ = v_y/v_x.",
      givens: [
        "Plate length L = 5.0 cm, separation d = 2.5 cm, p.d. V = 60 V",
        "Initial horizontal speed vₓ = 7.5 × 10⁶ m s⁻¹",
      ],
      unknowns: ["Path description", "Exit angle θ"],
      steps: [
        {
          title: "Describe the path",
          content:
            "Between the plates: uniform field ⇒ constant upward force on the electron (towards the + plate) ⇒ constant acceleration perpendicular to a constant horizontal velocity ⇒ parabolic path curving towards the upper plate. After the plates: no electric force ⇒ straight line at constant velocity.",
          why: "The A-Level answer must link 'uniform field → constant force → constant acceleration → parabola' explicitly.",
        },
        {
          title: "Field and acceleration",
          content:
            "E = V/d = 60/0.025 = 2400 V m⁻¹. a = eE/mₑ = (1.60 × 10⁻¹⁹)(2400)/(9.11 × 10⁻³¹) = 4.21 × 10¹⁴ m s⁻² (towards the upper plate).",
          why: "The electron's weight (~10⁻²⁹ N) is negligible next to the electric force (~10⁻¹⁶ N), so the electric force alone sets the acceleration.",
          checkpoint: {
            question: "Which way does the electric force on the electron point?",
            options: [
              "Down the field lines, from + to − plate",
              "Up, towards the +60 V plate, opposite to E",
            ],
            answerIndex: 1,
            feedback:
              "E points from + to − (downwards). The electron is negative, so F = qE points opposite to E — upwards, towards the positive plate.",
          },
        },
        {
          title: "Time between the plates",
          content: "t = L/vₓ = 0.050/(7.5 × 10⁶) = 6.67 × 10⁻⁹ s.",
          why: "No horizontal force ⇒ horizontal velocity constant ⇒ time is plate length over horizontal speed.",
        },
        {
          title: "Exit angle",
          content:
            "v_y = at = (4.21 × 10¹⁴)(6.67 × 10⁻⁹) = 2.81 × 10⁶ m s⁻¹. tan θ = v_y/vₓ = 2.81/7.5 ⇒ θ = 20.5°.",
          why: "The exit direction combines unchanged vₓ with accumulated v_y — exactly like a projectile leaving a region of uniform gravity.",
        },
      ],
      finalAnswer:
        "(a) Parabolic towards the upper (+) plate inside; straight line after exit. (b) θ ≈ 21° above the horizontal.",
      hints: [
        "What kind of field exists between parallel plates, and what does that imply about the force?",
        "Treat it like projectile motion: E = V/d gives the 'gravity'.",
        "tan θ = v_y/vₓ with v_y = at and t = L/vₓ.",
      ],
      markScheme: [
        { point: "Parabolic path with explanation (constant force ⇒ constant acceleration)", mark: "B1" },
        { point: "Straight line after leaving the field", mark: "B1" },
        { point: "E = V/d and a = eE/m computed correctly", mark: "M1" },
        { point: "t = L/vₓ and v_y = at", mark: "M1" },
        { point: "θ = tan⁻¹(v_y/vₓ) ≈ 21°", mark: "A1" },
      ],
      variants: [
        {
          question:
            "An electron is injected vertically downwards through a hole in the +60 V upper plate at 2.9 × 10⁶ m s⁻¹. How far below the plate does it momentarily stop?",
          answer:
            "Deceleration a = eV/md = 4.21 × 10¹⁴ m s⁻²; s = u²/2a = (2.9 × 10⁶)²/(2 × 4.21 × 10¹⁴) = 1.0 cm.",
          hint: "The force now opposes the motion — pure 1-D deceleration.",
        },
        {
          question:
            "Same plates, but a proton enters at the same speed. Compare the exit angle with the electron's.",
          answer:
            "a is ~1836× smaller (larger mass), so v_y and tan θ shrink by the same factor: θ ≈ 0.011° and it deflects towards the NEGATIVE plate.",
          hint: "Same force magnitude, very different mass and opposite direction.",
        },
      ],
    },
    {
      id: "we14-4",
      chapterId: id,
      title: "Two capacitors connected together",
      topic: "Electric Fields",
      subtopic: "Capacitance & energy",
      difficulty: "challenging",
      conceptsTested: ["C = Q/V", "Charge conservation", "Energy dissipation"],
      requiredFormulas: ["Q = CV", "U = ½CV²"],
      question:
        "A 2.0 μF capacitor charged to 300 V and a 3.0 μF capacitor charged to 200 V are connected with like-charged plates together. Find (a) the initial energy stored, (b) the final p.d., (c) the final energy, and (d) account for the difference.",
      thinking:
        "Connecting like plates ⇒ total charge is conserved and redistributes until both capacitors share one p.d. Energy is NOT conserved — expect a loss.",
      roadmap:
        "Initial charges Q = CV each → total charge → common V = Q_total/C_total → energies before and after → explain the loss.",
      givens: [
        "C₁ = 2.0 μF at V₁ = 300 V",
        "C₂ = 3.0 μF at V₂ = 200 V",
        "Like plates connected (charges add)",
      ],
      unknowns: ["Initial energy", "Final common p.d.", "Final energy", "Energy difference"],
      steps: [
        {
          title: "Initial charges and energy",
          content:
            "Q₁ = C₁V₁ = 600 μC; Q₂ = C₂V₂ = 600 μC. U_initial = ½C₁V₁² + ½C₂V₂² = ½(2.0 μ)(300²) + ½(3.0 μ)(200²) = 0.090 + 0.060 = 0.150 J.",
          why: "Each capacitor's energy is computed independently before connection.",
        },
        {
          title: "Charge conservation",
          content:
            "Like plates together ⇒ Q_total = 600 + 600 = 1200 μC shared across C_total = C₁ + C₂ = 5.0 μF (they are effectively in parallel).",
          why: "Charge cannot leave the connected plates — it only redistributes.",
          checkpoint: {
            question: "What is conserved when the capacitors are connected?",
            options: ["Energy", "Charge", "Potential difference", "All three"],
            answerIndex: 1,
            feedback:
              "Only charge is conserved. The p.d. equalises to a new common value and energy is dissipated during redistribution.",
          },
        },
        {
          title: "Final p.d. and energy",
          content:
            "V_final = Q_total/C_total = 1200 μC / 5.0 μF = 240 V. U_final = ½(5.0 μ)(240²) = 0.144 J.",
          why: "Connected capacitors must sit at one common p.d.; use the combined capacitance.",
        },
        {
          title: "Account for the loss",
          content:
            "ΔU = 0.150 − 0.144 = 0.006 J is dissipated as heat in the connecting wires (and a little electromagnetic radiation) while charge flows to equalise the p.d.",
          why: "A transient current flows through resistance during redistribution; I²R heating consumes the difference — this happens for ANY non-zero resistance.",
        },
      ],
      finalAnswer:
        "(a) 0.150 J (b) 240 V (c) 0.144 J (d) 6 mJ dissipated as heat during charge redistribution.",
      hints: [
        "Start with Q = CV for each capacitor — what is the total charge?",
        "After connection the pair share one p.d.: V = Q_total/(C₁ + C₂).",
        "Compare ½CV² totals before and after; the difference has gone somewhere physical.",
      ],
      markScheme: [
        { point: "Initial charges 600 μC each and U = 0.150 J", mark: "M1" },
        { point: "Charge conservation ⇒ V_final = 240 V", mark: "M1" },
        { point: "U_final = 0.144 J", mark: "A1" },
        { point: "Loss explained as heating during redistribution", mark: "B1" },
      ],
      variants: [
        {
          question:
            "Repeat with UNLIKE plates connected together. What changes?",
          answer:
            "Charges partially cancel: Q_total = 600 − 600 = 0 ⇒ V_final = 0 and U_final = 0. All 0.150 J is dissipated.",
          hint: "Opposite charges neutralise when the plates are joined.",
        },
        {
          question:
            "A 0.6 μF capacitor is charged to 12 V by a battery. How much energy does the battery supply, and how much is stored?",
          answer:
            "Q = 7.2 μC; battery supplies QV = 86.4 μJ; stored = ½QV = 43.2 μJ; the other 43.2 μJ heats the circuit.",
          hint: "Battery work = QV; capacitor stores only half.",
        },
      ],
    },
  ],
  derivations: [
    {
      id: "d14-1",
      chapterId: id,
      title: "Energy stored in a capacitor",
      goal: "Show that the energy stored in a capacitor is U = ½QV = ½CV² = Q²/2C.",
      steps: [
        {
          text: "Consider adding a small charge dq to a capacitor already holding charge q. The work needed is",
          expression: "dW = V dq = (q/C) dq",
          explanation:
            "Moving charge dq across the existing p.d. V requires work V dq, and V = q/C at that instant — the p.d. grows as charge accumulates.",
        },
        {
          text: "Total work to charge from 0 to Q is the integral (the area under the V–q line):",
          expression: "W = ∫₀^Q (q/C) dq = Q²/2C",
          explanation:
            "Summing the strips V dq under the straight V–q graph gives a triangle of area ½ × Q × V — the origin of the factor ½.",
        },
        {
          text: "Substituting Q = CV gives the three equivalent forms:",
          expression: "U = Q²/2C = ½QV = ½CV²",
          explanation:
            "Each form suits a different constraint: Q²/2C when the capacitor is isolated (Q fixed), ½CV² when connected to a battery (V fixed).",
        },
      ],
    },
    {
      id: "d14-2",
      chapterId: id,
      title: "Capacitance of an isolated conducting sphere",
      goal: "Derive C = 4πε₀R for an isolated sphere of radius R and estimate the Earth's capacitance.",
      steps: [
        {
          text: "A charged conducting sphere behaves, for external points, like a point charge at its centre. Its surface potential is",
          expression: "V = Q / 4πε₀R",
          explanation:
            "The 'other plate' is at infinity where V = 0, so the p.d. across this capacitor is just the surface potential.",
        },
        {
          text: "Apply the definition of capacitance:",
          expression: "C = Q/V = Q ÷ (Q/4πε₀R) = 4πε₀R",
          explanation:
            "Capacitance depends only on geometry (radius), not on how much charge is present — Q cancels.",
        },
        {
          text: "For the Earth, R = 6.37 × 10⁶ m:",
          expression: "C = 4π(8.85 × 10⁻¹²)(6.37 × 10⁶) ≈ 7.1 × 10⁻⁴ F",
          explanation:
            "Even a planet-sized conductor has less than a millifarad — one farad is an enormous capacitance.",
        },
      ],
    },
  ],
  conceptNodes: [
    {
      id: "n14-charge",
      label: "Point charges",
      tier: "core",
      x: 0.5,
      y: 0.08,
      explanation:
        "Charged objects modelled as points when small compared with their separation. Two signs: like repel, unlike attract.",
      example: "Two 1 μC spheres 3 m apart are effectively point charges.",
      application: "Basis for Coulomb's law and every field calculation.",
      related: ["n14-coulomb", "n14-field"],
    },
    {
      id: "n14-coulomb",
      label: "Coulomb's law",
      tier: "major",
      x: 0.18,
      y: 0.26,
      explanation:
        "F = Q₁Q₂/4πε₀r² — inverse-square force along the line joining two point charges.",
      example: "Doubling both charges and the distance leaves F unchanged.",
      application: "Resultant force problems; analogy with Newtonian gravity.",
      related: ["n14-charge", "n14-field"],
    },
    {
      id: "n14-field",
      label: "Field strength E",
      tier: "core",
      x: 0.5,
      y: 0.3,
      explanation:
        "Force per unit positive charge, E = F/q. For a point charge E = Q/4πε₀r². Vector.",
      example: "E just outside a van de Graaff dome can exceed 3 MV m⁻¹ (air breaks down).",
      application: "F = qE gives the force on any charge placed in the field.",
      related: ["n14-coulomb", "n14-lines", "n14-potential", "n14-uniform"],
    },
    {
      id: "n14-lines",
      label: "Field lines",
      tier: "detail",
      x: 0.82,
      y: 0.22,
      explanation:
        "Visualisation: arrows from + to −, high to low potential; density ∝ strength; never cross; ⊥ to conductor surfaces.",
      example: "Radially outward spokes for an isolated positive charge.",
      application: "Sketch questions; reasoning about conductors and plates.",
      related: ["n14-field", "n14-equipotential"],
    },
    {
      id: "n14-potential",
      label: "Potential V & PE",
      tier: "core",
      x: 0.32,
      y: 0.52,
      explanation:
        "V = W/q from infinity (scalar). U = qV. For point charges V = Q/4πε₀r, U = Qq/4πε₀r with signs.",
      example: "Midway between + and − charges: V = 0 yet E ≠ 0.",
      application: "Energy-conservation problems; the eV unit.",
      related: ["n14-field", "n14-gradient", "n14-equipotential"],
    },
    {
      id: "n14-gradient",
      label: "E = −dV/dr",
      tier: "major",
      x: 0.6,
      y: 0.55,
      explanation:
        "Field strength is the negative potential gradient — the bridge between E–r and V–r graphs.",
      example: "The tangent slope of a V–r graph at r₁, negated, gives E at r₁.",
      application: "Graph-sketching and interpretation questions.",
      related: ["n14-potential", "n14-uniform"],
    },
    {
      id: "n14-equipotential",
      label: "Equipotentials",
      tier: "detail",
      x: 0.88,
      y: 0.5,
      explanation:
        "Surfaces of constant V, always perpendicular to field lines; zero work moving along them.",
      example: "Concentric spheres around a point charge, spacing widening with r.",
      application: "Explaining why conductor surfaces are equipotentials.",
      related: ["n14-lines", "n14-potential", "n14-conductor"],
    },
    {
      id: "n14-uniform",
      label: "Uniform fields",
      tier: "major",
      x: 0.5,
      y: 0.76,
      explanation:
        "Between parallel plates E = ΔV/d, constant everywhere ⇒ constant force ⇒ parabolic charged-particle paths.",
      example: "CRO deflection plates; Millikan's balanced oil drop.",
      application: "Projectile-style problems; accelerating p.d. and eV energies.",
      related: ["n14-field", "n14-gradient", "n14-capacitor"],
    },
    {
      id: "n14-conductor",
      label: "Conductors in equilibrium",
      tier: "major",
      x: 0.82,
      y: 0.74,
      explanation:
        "E = 0 inside; whole conductor at one potential; charge on the surface; field lines ⊥ surface.",
      example: "Charged sphere: E jumps to max at the surface, V flat inside.",
      application: "Shielding; sphere E–r and V–r sketch questions.",
      related: ["n14-equipotential", "n14-capacitor"],
    },
    {
      id: "n14-capacitor",
      label: "Capacitors",
      tier: "major",
      x: 0.24,
      y: 0.88,
      explanation:
        "C = Q/V set by geometry (ε₀A/d for plates). Energy U = ½QV = area under V–Q graph.",
      example: "Connecting a charged pair: charge conserved, energy partly dissipated.",
      application: "Energy storage; RC timing circuits (Chapter 16).",
      related: ["n14-uniform", "n14-conductor"],
    },
  ],
  conceptEdges: [
    { from: "n14-charge", to: "n14-coulomb", label: "force law" },
    { from: "n14-charge", to: "n14-field", label: "creates" },
    { from: "n14-coulomb", to: "n14-field", label: "per unit charge" },
    { from: "n14-field", to: "n14-lines", label: "visualised by" },
    { from: "n14-field", to: "n14-potential", label: "energy view" },
    { from: "n14-potential", to: "n14-gradient", label: "E = −dV/dr" },
    { from: "n14-gradient", to: "n14-uniform", label: "constant gradient" },
    { from: "n14-potential", to: "n14-equipotential", label: "constant V" },
    { from: "n14-lines", to: "n14-equipotential", label: "perpendicular" },
    { from: "n14-equipotential", to: "n14-conductor", label: "surfaces" },
    { from: "n14-uniform", to: "n14-capacitor", label: "parallel plates" },
    { from: "n14-conductor", to: "n14-capacitor", label: "stores charge" },
  ],
  graphs: [
    {
      id: "g14-vr-er",
      title: "E–r and V–r for a positive point charge",
      caption:
        "Both fall with distance, but E ∝ 1/r² falls faster than V ∝ 1/r. The negative gradient of V gives E.",
      xLabel: "r",
      yLabel: "E, V",
      curves: [
        {
          label: "V ∝ 1/r",
          color: 1,
          points: sample(clamped((r) => 1 / r, 10), 0.08, 1, 90),
        },
        {
          label: "E ∝ 1/r²",
          color: 6,
          dashed: true,
          points: sample(clamped((r) => 0.35 / (r * r), 10), 0.08, 1, 90),
        },
      ],
    },
    {
      id: "g14-sphere",
      title: "Charged conducting sphere (radius R = 0.25)",
      caption:
        "Inside: E = 0 and V is constant at the surface value. Outside: point-charge behaviour from the centre.",
      xLabel: "r",
      yLabel: "E, V",
      curves: [
        {
          label: "V",
          color: 1,
          points: [
            ...sample(() => 1 / 0.25, 0, 0.25, 8),
            ...sample((r) => 1 / r, 0.25, 1, 60),
          ].map((p) => ({ x: p.x, y: p.y / 4 })),
        },
        {
          label: "E",
          color: 6,
          dashed: true,
          points: [
            ...sample(() => 0, 0, 0.2499, 8),
            ...sample(clamped((r) => 0.16 / (r * r), 4), 0.25, 1, 60),
          ],
        },
      ],
    },
    {
      id: "g14-vq",
      title: "Charging a capacitor: V–Q graph",
      caption:
        "V rises linearly with Q (gradient 1/C). The shaded-triangle area ½QV is the energy stored.",
      xLabel: "Q",
      yLabel: "V",
      curves: [
        {
          label: "V = Q/C",
          color: 2,
          points: sample((q) => q, 0, 1, 10),
        },
      ],
    },
    {
      id: "g14-unlike",
      title: "V–r between unlike charges (+Q left, −Q right)",
      caption:
        "Potential runs from +∞ near the positive charge through zero midway to −∞ near the negative charge; E never vanishes between them.",
      xLabel: "position",
      yLabel: "V",
      zeroLine: true,
      curves: [
        {
          label: "V(x)",
          color: 1,
          points: sample(
            clamped((x) => 0.22 / Math.max(0.04, x) - 0.22 / Math.max(0.04, 1 - x), 6),
            0.02,
            0.98,
            120
          ),
        },
      ],
    },
  ],
};
