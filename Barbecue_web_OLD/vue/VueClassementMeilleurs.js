class VueClassementMeilleurs{
    constructor(){

        this.html = document.getElementById("html-vue-classement-meilleurs").innerHTML;
        this.listeMeilleurScoresDonnee = null;
        this.actionAjouterScore = null;


    }

    initialiserListeMeilleurScores(listeMeilleurScoresDonnee){
        this.listeMeilleurScoresDonnee = listeMeilleurScoresDonnee;

    }
    initialiserActionAjouterScore(actionAjouterScore){
        this.actionAjouterScore = actionAjouterScore;
    }
    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeMeilleurScores = document.getElementById("liste-meilleur-scores");
        const listeMeilleurScoresInnerHTML = listeMeilleurScores.innerHTML;
        let listeMeilleurScoresHTMLRemplacement = "";

        for(var numeroClassement in this.listeMeilleurScoresDonnee){
            let listeMeilleurScoresInnerHTMLRemplacement = listeMeilleurScoresInnerHTML;

            listeMeilleurScoresInnerHTMLRemplacement = listeMeilleurScoresInnerHTMLRemplacement.replace("{Score.id}", this.listeMeilleurScoresDonnee[numeroClassement].id);

            listeMeilleurScoresInnerHTMLRemplacement = listeMeilleurScoresInnerHTMLRemplacement.replace("{Score.nom}", this.listeMeilleurScoresDonnee[numeroClassement].nom);
            listeMeilleurScoresInnerHTMLRemplacement = listeMeilleurScoresInnerHTMLRemplacement.replace("{Score.score}", this.listeMeilleurScoresDonnee[numeroClassement].score);
            listeMeilleurScoresInnerHTMLRemplacement = listeMeilleurScoresInnerHTMLRemplacement.replace("{Score.dateScore}", this.listeMeilleurScoresDonnee[numeroClassement].dateScore);
            listeMeilleurScoresHTMLRemplacement += listeMeilleurScoresInnerHTMLRemplacement;
   


            }

        listeMeilleurScores.innerHTML = listeMeilleurScoresHTMLRemplacement;
    }
    
    ajouter(){
        
        let score = "25";
        let nom = "testAjout";
        let dateScore = "12/05/19";
        this.actionAjouterScore(new Score(nom,score,dateScore,null));

    }


}
