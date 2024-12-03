const matriceNouvelle = [
    ["-", 2, 4, 2, 0, 2],
    [2, "-", 4, 0, 7, 5],
    [1, 6, "-", 9, 0, 6],
    [4, 2, 2, "-", 4, 0],
    [0, 0, 0, 3, "-", 0],
    [3, 2, 3, 2, 0, "-"],
];
// Fonction pour trouver le premier zéro dans la première ligne
function trouverPremierZero(matrice) {
    const n = matrice.length;
    const m = matrice[0].length;

    for (let j = 0; j < m; j++) {
        if (matrice[0][j] === 0) {
            return j;
        }
    }

    return -1; // Retourne -1 si aucun zéro n'est trouvé
}

// Trouver le premier zéro ou '-' dans la première ligne
const indexZero = trouverPremierZero(matriceNouvelle);
console.log("Index du premier zéro ou '-' dans la première ligne :", indexZero);
// Fonction pour remplacer le premier zéro par '-' dans la première ligne
function remplacerPremierZeroParTiret(matrice, indexZero) {
    const n = matrice.length;
    const m = matrice[0].length;

    if (indexZero !== -1) {
        matrice[0][indexZero] = "-";
    }

    return matrice;
}

// Remplacer le premier zéro par '-' dans la première ligne
const matriceModifiee = remplacerPremierZeroParTiret(
    matriceNouvelle,
    indexZero
);
console.log(
    "Matrice avec le premier zéro ou '-' remplacé par '-' :",
    matriceModifiee
);

// Fonction pour trouver le minimum dans la colonne et la ligne correspondant à l'index du premier zéro
function trouverMinimumColonneLigne(matrice, indexZero) {
    const n = matrice.length;
    const m = matrice[0].length;

    let minColonne = Infinity;
    let minLigne = Infinity;

    for (let i = 0; i < n; i++) {
        if (matrice[i][indexZero] !== "-") {
            const valeurColonne = parseInt(matrice[i][indexZero]);
            if (valeurColonne < minColonne) {
                minColonne = valeurColonne;
            }
        }
    }

    for (let j = 0; j < m; j++) {
        if (matrice[0][j] !== "-") {
            const valeurLigne = parseInt(matrice[0][j]);
            if (valeurLigne < minLigne) {
                minLigne = valeurLigne;
            }
        }
    }

    return { minColonne, minLigne };
}

// Trouver le minimum dans la colonne et la ligne correspondant à l'index du premier zéro
const { minColonne, minLigne } = trouverMinimumColonneLigne(
    matriceModifiee,
    indexZero
);
console.log("Minimum dans la colonne :", minColonne);
console.log("Minimum dans la ligne :", minLigne);

// Additionner le minimum de la colonne et de la ligne
const sommeMinimum = minColonne + minLigne;
console.log("Somme du minimum de la colonne et de la ligne :", sommeMinimum);

function trouverIndicesZero(matrice) {
    const indicesZero = [];

    for (let i = 0; i < matrice.length; i++) {
        for (let j = 0; j < matrice[i].length; j++) {
            if (matrice[i][j] === 0) {
                indicesZero.push([i, j]);
            }
        }
    }

    return indicesZero;
}

const indicesZero = trouverIndicesZero(matriceNouvelle);
console.log("Indices des valeurs 0 :", indicesZero);