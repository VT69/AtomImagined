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
    'Nd': { atomicNumber: 60, atomicMass: 144.24, name: 'Neodymium', orbits: [{ electrons: 2 }, { electrons: 8 }, { electrons: 18 }, { electrons: 22 }, { electrons: 8 }, { electrons: 3 }] }
}

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

        // Draw electrons in each orbit
        for (let j = 0; j < orbit.electrons; j++) {
            const electronAngle = (2 * Math.PI * j) / orbit.electrons;

            const electronX = atomX + orbitRadius * Math.cos(electronAngle);
            const electronY = atomY + orbitRadius * Math.sin(electronAngle);

            context.beginPath();
            context.arc(electronX, electronY, electronRadius, 0, 2 * Math.PI);
            context.fillStyle = 'black';  // Electron color
            context.fill();
            context.stroke();
        }
    }
}
 