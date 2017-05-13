

/**
 * Created by 18 on 09.05.2017.
 */
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


// выбор козыря
function viborKozira (){
    var random = Math.floor(Math.random()*3);
    switch (random)
    {case 0: kozir = 'pik';
    break;
        case 1 :kozir='kresty';
    break;
        case 2: kozir ='chirwa';
    break;
        case 3 :kozir ='bubna';
       }
    return kozir;
}
var kozir;

console.log(viborKozira ());

// вывод выбраного козыря на экран
var displayKozir = document.getElementById("kozir");
displayKozir.innerHTML= 'Козырная масть теперь'+' '+":"+kozir;

var displayKozRam =document.getElementById(kozir);
displayKozRam.setAttribute("class","etoon");

//тасовка колоды
var newKoloda = [], wipawshie = [37];
do {
    var i = Math.floor(Math.random() * 36);
    var rrr = wipawshie.indexOf(i);
    wipawshie.push(i);
    if (rrr == -1) {
        newKoloda.push(koloda[i]);
    }
} while (newKoloda.length < 36);
console.log(newKoloda);
console.log(wipawshie);

// раздача карт
var rukaPetia=[];
var rukaVasia=[];

for (  i = 0 ; i<newKoloda.length ; i++) {
    if ( i%2 == 0 ) { rukaPetia.push(koloda[i]);
    } else rukaVasia.push(newKoloda[i]);
}
console.log('1'+rukaPetia);
console.log('2'+rukaVasia);
console.log ('3'+rukaVasia[17].mast);

//сраниваем по очереди карты из массива Пети и Васи и начичляем очки
var countPetya = 0, countVasya = 0;


    var  mastPet , mastVas , vesPet , vesVas , pobeda = 'Победил :',
        mestoPet ,mestoVas ,kartaPet , kartaVas ,poziciaPet ,poziciaVas;
    for ( i=17 ;i>=0 ; i-- ){
    mastPet = rukaPetia[i].mast ;
    mastVas = rukaVasia[i].mast ;
    vesPet  = rukaPetia[i].ves ;
    vesVas =  rukaVasia[i].ves ;

        mestoPet = pole[i].petya ;
        mestoVas = pole[i].vasya ;
        kartaPet = rukaPetia[i].clas ;
        kartaVas = rukaVasia [i].clas;

        poziciaPet = document.getElementById(mestoPet);
        poziciaPet.setAttribute("class",kartaPet);

        poziciaVas = document.getElementById(mestoVas);
        poziciaVas.setAttribute("class",kartaVas);


    if (mastPet === kozir && mastVas!== kozir){
        countPetya+=1;
        }
    else if (mastPet !== kozir && mastVas === kozir) {
        countVasya+=1;
    }
    else if ((mastPet!==kozir && mastVas!== kozir)
              ||(mastPet===kozir && mastVas === kozir) ) {
        if (vesPet > vesVas ){countPetya+=1; }
           else if (vesPet === vesVas){ countPetya+=1;countVasya+=1;}
           else { countVasya+=1;}
    }
} console.log ('пети '+countPetya );console.log ('васи  '+countVasya );
  if (countPetya >countVasya) { console.log(pobeda+'petya');}
  else if (countVasya > countPetya ) {console.log(pobeda+'vasya');}
  else console.log(pobeda+' drugba');

var displayPobeditel = document.getElementById("chet");
displayPobeditel.innerHTML= 'Конечный счет :'+countPetya+" "+":"+' '+countVasya ;







