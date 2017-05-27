


// * Created by 18 on 09.05.2017.



var koloda = [
    pik6={clas:'pik6',
        mast:'pik',
        ves:1  },
    pik7={clas:'pik7',
        mast:'pik',
        ves:2},
    pik8={clas:'pik8',
        mast:'pik',
        ves:3  },
    pik9={clas:'pik9',
        mast:'pik',
        ves:4  },
    pik10={clas:'pik10',
        mast:'pik',
        ves:5  },
    pikB={clas:'pikB',
        mast:'pik',
        ves:6  },
    pikD={clas:'pikD',
        mast:'pik',
        ves:7   },
    pikK= {clas:'pikK',
        mast:'pik',
        ves:8   },
    pikT={clas:'pikT',
        mast:'pik',
        ves:9   },
    kresty6={clas:'kresty6',
        mast:'kresty',
        ves:1},
    kresty7={clas:'kresty7',
        mast:'kresty',
        ves:2},
    kresty8={clas:'kresty8',
        mast:'kresty',
        ves:3},
    kresty9={clas:'kresty9',
        mast:'kresty',
        ves:4},
    kresty10={clas:'kresty10',
        mast:'kresty',
        ves:5},
    krestyB={clas:' krestyB',
        mast:'kresty',
        ves:6},
    krestyD={clas:'krestyD',
        mast:'kresty',
        ves:7},
    krestyK={clas:'krestyK',
        mast:'kresty',
        ves:8},
    krestyT={clas:'krestyT',
        mast:'kresty',
        ves:9},
    chirwa6={clas:'chirwa6',
        mast:'chirwa',
        ves:1},
    chirwa7={clas:'chirwa7',
        mast:'chirwa',
        ves:2},
    chirwa8={clas:'chirwa8',
        mast:'chirwa',
        ves:3},
    chirwa9={clas:'chirwa9',
        mast:'chirwa',
        ves:4},
    chirwa10={clas:'chirwa10',
        mast:'chirwa',
        ves:5},
    chirwaB={clas:'chirwaB',
        mast:'chirwa',
        ves:6},
    chirwaD={clas:'chirwaD',
        mast:'chirwa',
        ves:7},
    chirwaK={clas:'chirwaK',
        mast:'chirwa',
        ves:8},
    chirwaT={clas:'chirwaT',
        mast:'chirva',
        ves:9},
    bubna6={clas:'bubna6',
        mast:'bubna',
        ves:1},
    bubna7={clas:' bubna7',
        mast:'bubna',
        ves:2},
    bubna8={clas:'bubna8',
        mast:'bubna',
        ves:3},
    bubna9={clas:'bubna9',
        mast:'bubna',
        ves:4},
    bubna10={clas:'bubna10',
        mast:'bubna',
        ves:5},
    bubnaB={clas:'bubnaB',
        mast:'bubna',
        ves:6},
    bubnaD={clas:'bubnaD',
        mast:'bubna',
        ves:7},
    bubnaK={clas:'bubnaK',
        mast:'bubna',
        ves:8},
    bubnaT={clas:'bubnaT',
        mast:'bubna',
        ves:9}
];

var pole =[
    hod1={petya:'11',vasya:'12'},
    hod2={petya:'21',vasya:'22'},
    hod3={petya:'31',vasya:'32'},
    hod4={petya:'41',vasya:'42'},
    hod5={petya:'51',vasya:'52'},
    hod6={petya:'61',vasya:'62'},
    hod7={petya:'71',vasya:'72'},
    hod8={petya:'81',vasya:'82'},
    hod9={petya:'91',vasya:'92'},
    hod10={petya:'101',vasya:'102'},
    hod11={petya:'111',vasya:'112'},
    hod12={petya:'121',vasya:'122'},
    hod13={petya:'131',vasya:'132'},
    hod14={petya:'141',vasya:'142'},
    hod15={petya:'151',vasya:'152'},
    hod16={petya:'161',vasya:'162'},
    hod17={petya:'171',vasya:'172'},
    hod18={petya:'181',vasya:'182'}

];


console.log( koloda.length);

// случ число в диапазоне
function sluchaynChislo(minZ, maxZ) {
    return Math.floor(
            Math.random() * (maxZ - minZ + 1)) + minZ;
}

// выбор козыря
function viborKozira () {
    var random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            kozir = 'pik';
            break;
        case 1 :
            kozir = 'kresty';
            break;
        case 2:
            kozir = 'chirwa';
            break;
        case 3 :
            kozir = 'bubna';
    }
    return kozir;
}

// вывод выбраного козыря на экран
function vivodNaEcran (kozir) {
    var displayKozir = document.getElementById("kozir");
    displayKozir.innerHTML = 'Козырная масть теперь' + ' ' + ":" + kozir;

    var displayKozRam = document.getElementById(kozir);
    displayKozRam.setAttribute("class", "etoon");
}



function ShuffleDeck(kol) {
    for (var i = 0; i < kol.length; i++) {
        var card1 = kol[i];
        var index = sluchaynChislo(0, kol.length - 1);
        var card2 = kol[index];
        kol[i] = card2;
       kol[index] = card1;
    }
    return kol;
}


// раздача карт
function razdachaKart(kol) {

    var rukaPetia = [];
    var rukaVasia = [];

    for (i = 0; i < koloda.length; i++) {
        if (i % 2 == 0) {
            rukaPetia.push(koloda[i]);
        } else rukaVasia.push(koloda[i]);
    }
    var igroki = { pet:rukaPetia , vas:rukaVasia};
    return igroki ;
}


function hod() {
    var i = j;
    while (i >= 0) {
        sravnKarti(i, peter, vasya, kozir, count);
        displayHod(i , peter , vasya ,pole );
        i--;
    }
}
function sravnKarti(i ,peter ,vasya ,kozir ,count) {
    mastPet = peter[i].mast ;
    mastVas = vasya[i].mast ;
    vesPet  = peter[i].ves ;
    vesVas =  vasya[i].ves ;
    if (mastPet === kozir && mastVas!== kozir){
        count.pet+=1;
    }
    else if (mastPet !== kozir && mastVas === kozir) {
        count.vas+=1;
    }
    else if ((mastPet!==kozir && mastVas!== kozir)
        ||(mastPet===kozir && mastVas === kozir) ) {
        if (vesPet > vesVas ){count.pet+=1; }
        else if (vesPet === vesVas){ count.pet = count.pet ;count.vas = count.vas;}
        else { count.vas+=1;}
    }
}
// отображение хода
function displayHod(i , peter , vasya ,pole ) {

    mestoPet = pole[j-i].petya ;
    mestoVas = pole[j-i].vasya ;
    kartaPet = peter[i].clas ;
    kartaVas = vasya[i].clas;

    poziciaPet = document.getElementById(mestoPet);
    poziciaPet.setAttribute("class",kartaPet);

    poziciaVas = document.getElementById(mestoVas);
    poziciaVas.setAttribute("class",kartaVas);

}
function FindWinner(count) {
    if (count.pet == count.vas) {
        return "не выявлен";
    } else if (count.pet >count.vas ) {
        return "Петя";
    } else return "Вася";
}
function display (where , what ) {
    var pozicia = document.getElementById(where);
    pozicia.innerHTML = what ;

}


var kozir = viborKozira ();
vivodNaEcran(kozir);
koloda = ShuffleDeck(koloda);
var igroki = razdachaKart(koloda) ;
var count = { pet : 0, vas : 0};
var peter = igroki.pet;
var vasya = igroki.vas;
var j = vasya.length-1;
hod(); // ходим
var winner ;
winner = FindWinner(count);
winner =`Победитель этого раунда ${winner} Ура ! Ура! `
display ('pobedit' , winner);
var itog = `${count.pet} : ${count.vas} `;
display ('chet' , itog);





