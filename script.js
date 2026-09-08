/* =========================
   VARIABLES
========================= */

let caVaChoice = null;
let caVaClicks = 0;


/* =========================
   CHANGER DE PAGE
========================= */

function showPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById("page" + pageNumber);

    if (nextPage) {
        nextPage.classList.add("active");
    }
}


/* =========================
   PAGE 1
   ÇA VA / ÇA VA PAS
========================= */

function answerCaVa(choice) {

    /*
       On garde la toute première réponse
       pour savoir ce qu'elle a choisi.
    */

    if (caVaClicks === 0) {
        caVaChoice = choice;
    }

    caVaClicks++;

    const message =
        document.getElementById("page1Message");

    const continueButton =
        document.getElementById("continuePage1");


    if (caVaClicks === 1) {

        message.textContent =
            "Vas y laisse mon petit bijoux répondre moa e 🥺";

    }

    else if (caVaClicks === 2) {

        message.textContent =
            "Encore un petit effort bb 😂❤️";

    }

    else if (caVaClicks >= 3) {

        message.textContent =
            "Voilààà, maintenant on peut continuer ❤️";

        continueButton.classList.remove("hidden");
    }
}


/* =========================
   ALLER À LA PAGE 2
========================= */

function goToPage2() {

    const page2Message =
        document.getElementById("page2Message");


    if (caVaChoice === "oui") {

        page2Message.textContent =
            "Alors comme ça on se sent bien sans be loha à proximité ??? 😾";

    }

    else {

        page2Message.textContent =
            "Je savais parce que si je suis pas là, tu va trouver rien à faire 😭";
    }


    showPage(2);
}


/* =========================
   PAGE 3
========================= */

function goToPage3() {

    showPage(3);
}


/* =========================
   PAGE 4
========================= */

function goToPage4() {

    showPage(4);
}


/* =========================
   CHOIX DE LA DÉCLARATION
========================= */

function chooseDeclaration(choice) {

    const wrongChoice =
        document.getElementById("wrongChoice");


    /*
       CHOIX 1 = BON CHOIX
    */

    if (choice === 1) {

        wrongChoice.classList.add("hidden");

        showPage(5);
    }


    /*
       CHOIX 2 = MAUVAIS CHOIX
    */

    else if (choice === 2) {

        wrongChoice.classList.remove("hidden");
    }
}


/* =========================
   RETOUR APRÈS LE MAUVAIS CHOIX
========================= */

function repeatChoice() {

    const wrongChoice =
        document.getElementById("wrongChoice");

    wrongChoice.classList.add("hidden");
}
