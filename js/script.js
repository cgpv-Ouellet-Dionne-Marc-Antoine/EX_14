const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
    { titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false }
];

                    // partie 1 //
console.log("Titre du premier livre : " + livres[0].titre); 

console.table(livres);

console.log("Nombre de livres " + livres.length);

for (let i = 0; i < livres.length; i++) {
    console.log([i + 1] + " " + "Titre : " + livres[i].titre +" , Auteur : " + livres[i].auteur);
    
}


                    // partie 2 //
            livres[5].disponible = true;
            console.log("Disponibilité : " + livres[5].disponible);

             console.log(livres.findIndex(livre => livre.titre === "Fahrenheit 451"));

            // pas fini // 



            // partie 3 //

            //partie 4 //

            // partie 5 //

            function rechercherLivre(){

                let auteurRecherche = prompt("Entrez le nom de l'auteur : ");
                alert("Auteur recherché : " + auteurRecherche);

                onclick = "rechercherLivre()"


            }


