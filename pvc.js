// Matrice initiale de coûts/distance entre les villes
const matriceInitiale = [
    [0, 6, 7, 3, 1, 3],
    [7, 0, 8, 2, 9, 7],
    [5, 10, 0, 10, 1, 7],
    [8, 6, 5, 0, 5, 1],
    [7, 7, 6, 7, 0, 4],
    [9, 8, 8, 5, 3, 0],
];

// Fonction pour trouver le nombre le plus petit par ligne en ignorant les zéros
function trouverPlusPetitDeChaqueLigne(matrice) {
    const n = matrice.length;
    const m = matrice[0].length;

    const lettres = ["A", "B", "C", "D", "E", "F"];
    const plusPetits = [];

    for (let i = 0; i < n; i++) {
        let minLigne = Infinity;
        for (let j = 0; j < m; j++) {
            if (matrice[i][j] !== 0 && matrice[i][j] < minLigne) {
                minLigne = matrice[i][j];
            }
        }
        plusPetits.push(minLigne);
    }

    return plusPetits;
}

// Fonction pour soustraire le minimum de chaque ligne aux valeurs de chaque ligne
function soustraireMinimumDeChaqueLigne(matrice, minimums) {
    const n = matrice.length;
    const m = matrice[0].length;

    const matriceReduite = [];

    for (let i = 0; i < n; i++) {
        const ligneReduite = [];
        for (let j = 0; j < m; j++) {
            if (matrice[i][j] === 0) {
                ligneReduite.push("-"); // Remplacer les zéros par un seul caractère
            } else {
                ligneReduite.push(matrice[i][j] - minimums[i]);
            }
        }
        matriceReduite.push(ligneReduite);
    }

    return matriceReduite;
}

// Exemple d'utilisation
const plusPetitsDeChaqueLigne = trouverPlusPetitDeChaqueLigne(matriceInitiale);
console.log("Plus petits de chaque ligne:", plusPetitsDeChaqueLigne);

const matriceReduite = soustraireMinimumDeChaqueLigne(
    matriceInitiale,
    plusPetitsDeChaqueLigne
);
console.log("Matrice réduite:", matriceReduite);

// Fonction pour soustraire le minimum de chaque colonne aux valeurs de chaque tableau
function soustraireMinimumDeChaqueColonne(matrice) {
    const n = matrice.length;
    const m = matrice[0].length;

    const lettres = ["A", "B", "C", "D", "E", "F"];
    const plusPetits = {};
    const matriceNouvelle = [];

    for (let j = 0; j < m; j++) {
        let minColonne = Infinity;
        for (let i = 0; i < n; i++) {
            if (matrice[i][j] !== "-") {
                const valeur = parseInt(matrice[i][j]);
                if (valeur < minColonne) {
                    minColonne = valeur;
                }
            }
        }
        plusPetits[lettres[j]] = minColonne;
    }

    for (let i = 0; i < n; i++) {
        const ligneNouvelle = [];
        for (let j = 0; j < m; j++) {
            if (matrice[i][j] === "-") {
                ligneNouvelle.push("-");
            } else {
                const valeur = parseInt(matrice[i][j]);
                ligneNouvelle.push(valeur - plusPetits[lettres[j]]);
            }
        }
        matriceNouvelle.push(ligneNouvelle);
    }

    return { plusPetits, matriceNouvelle };
}

// Exemple d'utilisation
const { plusPetits, matriceNouvelle } =
    soustraireMinimumDeChaqueColonne(matriceReduite);
console.log("Plus petits de chaque colonne:", plusPetits);
console.log("Nouveau tableau:", matriceNouvelle);

// Calcul de la somme des minimums de chaque ligne et de chaque colonne
const sommeMinimumsLigne = plusPetitsDeChaqueLigne.reduce(
    (acc, min) => acc + min,
    0
);
const sommeMinimumsColonne = Object.values(plusPetits).reduce(
    (acc, min) => acc + min,
    0
);

console.log("Somme des minimums de chaque ligne :", sommeMinimumsLigne);
console.log("Somme des minimums de chaque colonne :", sommeMinimumsColonne);

// Calcul de la somme totale
const sommeTotale = sommeMinimumsLigne + sommeMinimumsColonne;

console.log("Somme totale :", sommeTotale);