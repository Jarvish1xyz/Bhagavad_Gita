 // bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445
// demo.js
let ChapterNumber = 1;

document.addEventListener("DOMContentLoaded", () => {
    ChapterNumber = localStorage.getItem("chapterId");
    console.log(ChapterNumber);
    urlCh();
})

// const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/5/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
// 		'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
// 	}
// };

function urlCh() {
    const urlCh = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ChapterNumber}/`;
    console.log(urlCh);
    const options1 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };
    
    try {
        let p = fetch(urlCh, options1);
        p.then((response) => {
            return response.json();
        }).then((Gitach) => {
            console.log(ChapterNumber, Gitach);
            displaychpters(Gitach);
        });
    } catch (error) {
        console.error(error);
    }
}

function displaychpters(Gitach) {
    let main = document.createElement("div");
    main.className = "mainCh";
    main.innerHTML = `
                <h5 class="card-title card-ch">Chapter ${Gitach.chapter_number}</h5>
                <h2 class="card-subtitle mb-2 fw-bolder">${Gitach.name_translated}</h2>
                <p class="card-text CS text-start">${Gitach.chapter_summary}</p>
            `;

    document.getElementById("mcards").appendChild(main);
    urlV();
}


function urlV() {
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ChapterNumber}/verses/`;
    console.log(url);
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };
    
    try {
        let v = fetch(url, options);
        v.then((response) => {
            return response.json();
        }).then((Gita) => {
            displayverses(Gita);
        });
    } catch (error) {
        console.error(error);
    }
}


function displayverses(Gita) {
    // create a parent wrapper for all collapses
    let parent = document.createElement('div');
    parent.id = "accordionGita";

    Gita.forEach((verse) => {
        let col = document.createElement('div');
        col.className = "col row row-cols-1 g-2 m-3 pqr p-3";

        let description = "";
        for (let tr of verse.translations) {
            if (tr.author_name === "Swami Gambirananda") {
                description += `<p class="card-text mb-3">${tr.description}</p>`;
            }
        }

        let collapse = `collapseExample${verse.verse_number}`;
        let colPartId = `col-${verse.verse_number}`;

        col.innerHTML = `
            <a class="d-flex flex-wrap w-100" onclick="abc(${verse.verse_number})" data-bs-toggle="collapse" href="#${collapse}" role="button" aria-expanded="false" aria-controls="${collapse}">
                <div class="col-12 col-lg-2">
                    <span class="card-title card-ch">Verse ${verse.verse_number}</span>
                </div>
                <div class="col-12 col-lg-10">
                    ${description}
                </div>
            </a>
            <div class="collapse" id="${collapse}" data-bs-parent="#accordionGita">
                <div class="card card-body" id="${colPartId}" style="width: 100%;">
                    
                </div>
            </div>
        `;

        parent.appendChild(col);
    });

    document.getElementById("vcards").appendChild(parent);

}


window.abc = function(vid) {
    var urlv = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ChapterNumber}/verses/${vid}/`;
    console.log(urlv);
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bcba844d26msh2d333e852898b44p124f13jsn0e520c9be445',
            'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    try {
        let v = fetch(urlv, options2);
        v.then((response) => {
            return response.json();
        }).then((Verse) => {
            displaycollapse(Verse);
        });
    } catch (error) {
        console.error(error);
    }
}


function displaycollapse(Verse) {
    let colPartId = `col-${Verse.verse_number}`;
    let coll = document.createElement('div');
    coll.className = "coll text-center";
    coll.innerHTML = `
        <div>
            <h2 class="card-title">BG ${Verse.chapter_number}.${Verse.verse_number}</h2>
            <h4 class="card-subtitle mb-2 slok card-ch lh-base">${Verse.text}</h4>
        </div>
    `;

    document.getElementById(colPartId).innerHTML = "";
    document.getElementById(colPartId).appendChild(coll);
}