const atomData = {
    'H': { atomicNumber: 1, atomicMass: 1.008, name: 'Hydrogen', orbits: [{ electrons: 1 }] },
    'He': { atomicNumber: 2, atomicMass: 4.0026, name: 'Helium', orbits: [{ electrons: 2 }] },
    'Li': { atomicNumber: 3, atomicMass: 6.94, name: 'Lithium', orbits: [{ electrons: 2 }, { electrons: 1 }] },
    'Be': { atomicNumber: 4, atomicMass: 9.0122, name: 'Beryllium', orbits: [{ electrons: 2 }, { electrons: 2 }] },
    'B': { atomicNumber: 5, atomicMass: 10.81, name: 'Boron', orbits: [{ electrons: 2 }, { electrons: 3 }] },
    'C': { atomicNumber: 6, atomicMass: 12.011, name: 'Carbon', orbits: [{ electrons: 2 }, { electrons: 4 }] },
    'N': { atomicNumber: 7, atomicMass: 14.007, name: 'Nitrogen', orbits: [{ electrons: 2 }, { electrons: 5 }] },
    'O': { atomicNumber: 8, atomicMass: 15.999, name: 'Oxygen', orbits: [{ electrons: 2 }, { electrons: 6 }] },
    'F': { atomicNumber: 9, atomicMass: 18.998, name: 'Fluorine', orbits: [{ electrons: 2 }, { electrons: 7 }] },
    'Ne': { atomicNumber: 10, atomicMass: 20.180, name: 'Neon', orbits: [{ electrons: 2 }, { electrons: 8 }] },
    'Na': { atomicNumber: 11, atomicMass: 22.990, name: 'Sodium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 1 }] },
    'Mg': { atomicNumber: 12, atomicMass: 24.305, name: 'Magnesium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 2 }] },
    'Al': { atomicNumber: 13, atomicMass: 26.982, name: 'Aluminum', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 3 }] },
    'Si': { atomicNumber: 14, atomicMass: 28.085, name: 'Silicon', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 4 }] },
    'P': { atomicNumber: 15, atomicMass: 30.974, name: 'Phosphorus', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 5 }] },
    'S': { atomicNumber: 16, atomicMass: 32.06, name: 'Sulfur', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 6 }] },
    'Cl': { atomicNumber: 17, atomicMass: 35.45, name: 'Chlorine', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 7 }] },
    'K': { atomicNumber: 19, atomicMass: 39.098, name: 'Potassium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 8 }, { electrons: 1 }] },
    'Ca': { atomicNumber: 20, atomicMass: 40.078, name: 'Calcium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 8 }, { electrons: 2 }] },
    'Sc': { atomicNumber: 21, atomicMass: 44.956, name: 'Scandium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 9 }, { electrons: 2 }] },
    'Ti': { atomicNumber: 22, atomicMass: 47.867, name: 'Titanium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 10 }, { electrons: 2 }] },
    'V': { atomicNumber: 23, atomicMass: 50.942, name: 'Vanadium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 11 }, { electrons: 2 }] },
    'Cr': { atomicNumber: 24, atomicMass: 51.996, name: 'Chromium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 13 }, { electrons: 1 }] },
    'Mn': { atomicNumber: 25, atomicMass: 54.938, name: 'Manganese', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 13 }, { electrons: 2 }] },
    'Fe': { atomicNumber: 26, atomicMass: 55.845, name: 'Iron', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 14 }, { electrons: 2 }] },
    'Ni': { atomicNumber: 28, atomicMass: 58.693, name: 'Nickel', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 16 }] },
    'Cu': { atomicNumber: 29, atomicMass: 63.546, name: 'Copper', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }] },
    'Zn': { atomicNumber: 30, atomicMass: 65.38, name: 'Zinc', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 2 }] },
    'Ga': { atomicNumber: 31, atomicMass: 69.723, name: 'Gallium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 3 }] },
    'Ge': { atomicNumber: 32, atomicMass: 72.630, name: 'Germanium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 4 }] },
    'As': { atomicNumber: 33, atomicMass: 74.922, name: 'Arsenic', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 5 }] },
    'Se': { atomicNumber: 34, atomicMass: 78.971, name: 'Selenium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 6 }] },
    'Br': { atomicNumber: 35, atomicMass: 79.904, name: 'Bromine', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 7 }] },
    'Kr': { atomicNumber: 36, atomicMass: 83.798, name: 'Krypton', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 8 }] },
    'Rb': { atomicNumber: 37, atomicMass: 85.468, name: 'Rubidium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 8 }, { electrons: 1 }] },
    'Sr': { atomicNumber: 38, atomicMass: 87.62, name: 'Strontium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 8 }, { electrons: 2 }] },
    'Y': { atomicNumber: 39, atomicMass: 88.906, name: 'Yttrium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 9 }, { electrons: 2 }] },
    'Zr': { atomicNumber: 40, atomicMass: 91.224, name: 'Zirconium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 10 }, { electrons: 2 }] },
    'Nb': { atomicNumber: 41, atomicMass: 92.906, name: 'Niobium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 12 }] },
    'Mo': { atomicNumber: 42, atomicMass: 95.95, name: 'Molybdenum', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 13 }] },
    'Tc': { atomicNumber: 43, atomicMass: 98, name: 'Technetium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 13 }, { electrons: 2 }] },
    'Ru': { atomicNumber: 44, atomicMass: 101.07, name: 'Ruthenium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 15 }] },
    'Rh': { atomicNumber: 45, atomicMass: 102.91, name: 'Rhodium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 16 }] },
    'Pd': { atomicNumber: 46, atomicMass: 106.42, name: 'Palladium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }] },
    'Ag': { atomicNumber: 47, atomicMass: 107.87, name: 'Silver', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 1 }] },
    'Cd': { atomicNumber: 48, atomicMass: 112.41, name: 'Cadmium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 2 }] },
    'In': { atomicNumber: 49, atomicMass: 114.82, name: 'Indium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 3 }] },
    'Sn': { atomicNumber: 50, atomicMass: 118.71, name: 'Tin', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 4 }] },
    'Sb': { atomicNumber: 51, atomicMass: 121.76, name: 'Antimony', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 5 }] },
    'Te': { atomicNumber: 52, atomicMass: 127.60, name: 'Tellurium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 6 }] },
    'I': { atomicNumber: 53, atomicMass: 126.90, name: 'Iodine', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 7 }] },
    'Xe': { atomicNumber: 54, atomicMass: 131.29, name: 'Xenon', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 8 }] },
    'Cs': { atomicNumber: 55, atomicMass: 132.91, name: 'Cesium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 8 }, { electrons: 1 }] },
    'Ba': { atomicNumber: 56, atomicMass: 137.33, name: 'Barium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 8 }, { electrons: 2 }] },
    'La': { atomicNumber: 57, atomicMass: 138.91, name: 'Lanthanum', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 18 }, { electrons: 9 }, { electrons: 2 }] },
    'Ce': { atomicNumber: 58, atomicMass: 140.12, name: 'Cerium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 19 }, { electrons: 9 }, { electrons: 2 }] },
    'Pr': { atomicNumber: 59, atomicMass: 140.91, name: 'Praseodymium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 21 }, { electrons: 8 }, { electrons: 2 }] },
    'Nd': { atomicNumber: 60, atomicMass: 144.24, name: 'Neodymium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 22 }, { electrons: 8 }, { electrons: 3 }] },
    'Pm': { atomicNumber: 61, atomicMass: 145, name: 'Promethium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 23 }, { electrons: 8 }, { electrons: 2 }] },
    'Sm': { atomicNumber: 62, atomicMass: 150.36, name: 'Samarium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 24 }, { electrons: 8 }, { electrons: 4 }] },
    'Eu': { atomicNumber: 63, atomicMass: 151.96, name: 'Europium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 25 }, { electrons: 8 }, { electrons: 5 }] },
    'Gd': { atomicNumber: 64, atomicMass: 157.25, name: 'Gadolinium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 25 }, { electrons: 9 }, { electrons: 7 }] },
    'Tb': { atomicNumber: 65, atomicMass: 158.93, name: 'Terbium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 27 }, { electrons: 8 }, { electrons: 6 }] },
    'Dy': { atomicNumber: 66, atomicMass: 162.50, name: 'Dysprosium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 28 }, { electrons: 8 }, { electrons: 7 }] },
    'Ho': { atomicNumber: 67, atomicMass: 164.93, name: 'Holmium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 29 }, { electrons: 8 }, { electrons: 8 }] },
    'Er': { atomicNumber: 68, atomicMass: 167.26, name: 'Erbium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 30 }, { electrons: 8 }, { electrons: 9 }] },
    'Tm': { atomicNumber: 69, atomicMass: 168.93, name: 'Thulium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 31 }, { electrons: 8 }, { electrons: 10 }] },
    'Yb': { atomicNumber: 70, atomicMass: 173.04, name: 'Ytterbium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 8 }, { electrons: 8 }, { electrons: 2 }] },
    'Lu': { atomicNumber: 71, atomicMass: 174.97, name: 'Lutetium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 9 }, { electrons: 8 }] },
    'Hf': { atomicNumber: 72, atomicMass: 178.49, name: 'Hafnium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 10 }, { electrons: 2 }] },
    'Ta': { atomicNumber: 73, atomicMass: 180.95, name: 'Tantalum', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 11 }, { electrons: 2 }] },
    'W': { atomicNumber: 74, atomicMass: 183.84, name: 'Tungsten', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 12 }, { electrons: 2 }] },
    'Re': { atomicNumber: 75, atomicMass: 186.21, name: 'Rhenium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 13 }, { electrons: 2 }] },
    'Os': { atomicNumber: 76, atomicMass: 190.23, name: 'Osmium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 14 }, { electrons: 2 }] },
    'Ir': { atomicNumber: 77, atomicMass: 192.22, name: 'Iridium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 15 }, { electrons: 2 }] },
    'Pt': { atomicNumber: 78, atomicMass: 195.08, name: 'Platinum', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 17 }] },
    'Au': { atomicNumber: 79, atomicMass: 196.97, name: 'Gold', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }] },
    'Hg': { atomicNumber: 80, atomicMass: 200.59, name: 'Mercury', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 2 }] },
    'Tl': { atomicNumber: 81, atomicMass: 204.38, name: 'Thallium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 3 }] },
    'Pb': { atomicNumber: 82, atomicMass: 207.2, name: 'Lead', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 4 }] },
    'Bi': { atomicNumber: 83, atomicMass: 208.98, name: 'Bismuth', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 5 }] },
    'Po': { atomicNumber: 84, atomicMass: 209, name: 'Polonium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 6 }] },
    'At': { atomicNumber: 85, atomicMass: 210, name: 'Astatine', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 7 }] },
    'Rn': { atomicNumber: 86, atomicMass: 222, name: 'Radon', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 8 }] },
    'Fr': { atomicNumber: 87, atomicMass: 223, name: 'Francium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 8 }, { electrons: 1 }] },
    'Ra': { atomicNumber: 88, atomicMass: 226, name: 'Radium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 8 }, { electrons: 2 }] },
    'Ac': { atomicNumber: 89, atomicMass: 227, name: 'Actinium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 9 }] },
    'Th': { atomicNumber: 90, atomicMass: 232.04, name: 'Thorium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 18 }, { electrons: 10 }] },
    'Pa': { atomicNumber: 91, atomicMass: 231.04, name: 'Protactinium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 20 }] },
    'U': { atomicNumber: 92, atomicMass: 238.03, name: 'Uranium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 21 }] },
    'Np': { atomicNumber: 93, atomicMass: 237, name: 'Neptunium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 22 }] },
    'Pu': { atomicNumber: 94, atomicMass: 244, name: 'Plutonium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 24 }] },
    'Am': { atomicNumber: 95, atomicMass: 243, name: 'Americium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 25 }] },
    'Cm': { atomicNumber: 96, atomicMass: 247, name: 'Curium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 25 }, { electrons: 2 }] },
    'Bk': { atomicNumber: 97, atomicMass: 247, name: 'Berkelium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 27 }] },
    'Cf': { atomicNumber: 98, atomicMass: 251, name: 'Californium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 28 }] },
    'Es': { atomicNumber: 99, atomicMass: 252, name: 'Einsteinium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 29 }] },
    'Fm': { atomicNumber: 100, atomicMass: 257, name: 'Fermium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 30 }] },
    'Md': { atomicNumber: 101, atomicMass: 258, name: 'Mendelevium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 31 }] },
    'No': { atomicNumber: 102, atomicMass: 259, name: 'Nobelium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }] },
    'Lr': { atomicNumber: 103, atomicMass: 262, name: 'Lawrencium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 1 }] },
    'Rf': { atomicNumber: 104, atomicMass: 267, name: 'Rutherfordium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 2 }] },
    'Db': { atomicNumber: 105, atomicMass: 270, name: 'Dubnium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 3 }] },
    'Sg': { atomicNumber: 106, atomicMass: 271, name: 'Seaborgium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 4 }] },
    'Bh': { atomicNumber: 107, atomicMass: 270, name: 'Bohrium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 5 }] },
    'Hs': { atomicNumber: 108, atomicMass: 277, name: 'Hassium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 6 }] },
    'Mt': { atomicNumber: 109, atomicMass: 276, name: 'Meitnerium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 7 }] },
    'Ds': { atomicNumber: 110, atomicMass: 281, name: 'Darmstadtium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }] },
    'Rg': { atomicNumber: 111, atomicMass: 280, name: 'Roentgenium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 1 }] },
    'Cn': { atomicNumber: 112, atomicMass: 285, name: 'Copernicium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 2 }] },
    'Nh': { atomicNumber: 113, atomicMass: 284, name: 'Nihonium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 3 }] },
    'Fl': { atomicNumber: 114, atomicMass: 289, name: 'Flerovium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 4 }] },
    'Mc': { atomicNumber: 115, atomicMass: 288, name: 'Moscovium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 5 }] },
    'Lv': { atomicNumber: 116, atomicMass: 293, name: 'Livermorium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 6 }] },
    'Ts': { atomicNumber: 117, atomicMass: 294, name: 'Tennessine', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 7 }] },
    'Og': { atomicNumber: 118, atomicMass: 294, name: 'Oganesson', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 32 }, { electrons: 32 }, { electrons: 8 }, { electrons: 8 }] }
};


function displayAtomModel() {
    const inputElement = document.getElementById('elementInput').value.trim();
    const outputDiv = document.getElementById('output');
    const canvas = document.getElementById('atomCanvas');
    const context = canvas.getContext('2d');
    
    if (!inputElement) {
        outputDiv.innerHTML = '<p>Please enter an element symbol.</p>';
        return;
    }

    if (!atomData[inputElement]) {
        outputDiv.innerHTML = `<p>Element with symbol ${inputElement} not found.</p>`;
        return;
    }

    const { atomicNumber, atomicMass, name, orbits } = atomData[inputElement];
    
    outputDiv.innerHTML = `
        <p>${name} (${inputElement})</p>
        <p>Atomic Number: ${atomicNumber}</p>
        <p>Atomic Mass: ${atomicMass}</p>
        <p>Name: ${name}</p>
    `;

    // Clear previous drawings on the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Atom Model
    const atomRadius = 30;
    const nucleusRadius = 5;
    const electronRadius = 3;
    const orbitSpacing = 20; // Spacing between electron orbits
    const padding = 10; // Padding between nucleus and electron orbits
    const orbitColors = ['blue', 'green', 'red', 'purple', 'orange']; // Colors for different orbits
    const atomX = canvas.width / 2;
    const atomY = canvas.height / 2;

    // Draw nucleus
    context.beginPath();
    context.arc(atomX, atomY, nucleusRadius, 0, 2 * Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.stroke();

    // Draw electron orbits
    for (let i = 0; i < orbits.length; i++) {
        const orbit = orbits[i];
        const orbitRadius = atomRadius + padding + (i * orbitSpacing);

        context.beginPath();
        context.arc(atomX, atomY, orbitRadius, 0, 2 * Math.PI);
        context.strokeStyle = orbitColors[i % orbitColors.length];
        context.stroke();

        // Draw electrons in each orbit with animation
        for (let j = 0; j < orbit.electrons; j++) {
            const electronAngle = (2 * Math.PI * j) / orbit.electrons;

            const time = new Date().getTime();
            const angularSpeed = 0.002 / (i + 1); // Adjust this value for the speed of electron rotation
            const rotation = electronAngle + angularSpeed * time;

            const electronX = atomX + orbitRadius * Math.cos(rotation);
            const electronY = atomY + orbitRadius * Math.sin(rotation);

            context.beginPath();
            context.arc(electronX, electronY, electronRadius, 0, 2 * Math.PI);
            context.fillStyle = 'black';  // Electron color
            context.fill();
            context.stroke();
        }
    }

    requestAnimationFrame(displayAtomModel); // Continue animation
}

// Call displayAtomModel initially
displayAtomModel();
