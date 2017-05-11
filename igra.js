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
    chirwaK={clas:'chirwaD',
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
    hod4={petya:'42',vasya:'42'},
    hod5={petya:'51',vasya:'52'},
    hod6={petya:'61',vasya:'62'},
    hod7={petya:'71',vasya:'72'},
    hod8={petya:'81',vasya:'82'},
    hod9={petya:'91',vasya:'92'},
    hod10={petya:'101',vasya:'102'},
    hod11={petya:'111',vasya:'112'},
    hod12={petya:'121',vasya:'122'},
    hod13={petya:'132',vasya:'132'},
    hod14={petya:'141',vasya:'142'},
    hod15={petya:'151',vasya:'152'},
    hod16={petya:'161',vasya:'162'},
    hod17={petya:'171',vasya:'172'},
    hod18={petya:'181',vasya:'182'}

];


alert ( koloda.length);



function viborKozira (){
    var random = Math.floor(Math.random()*4);
    switch (random)
    {case 1: kozir = 'pik';
    break;
        case 2 :kozir='kresty';
    break;
        case 3: kozir ='chirwa';
    break;
        case 4 :kozir ='bubna';
        default :kozir ='bubna'}
    return kozir;
}
var kozir;

console.log(viborKozira ());


var displayKozir = document.getElementById("kozir");
displayKozir.innerHTML= 'Козырная масть теперь'+' '+":"+kozir;

var displayKozRam =document.getElementById(kozir);
displayKozRam.setAttribute("class","etoon");
/*function tasovkaKolod(massiv){


}*/

var pozicia= document.getElementById("12");
pozicia.setAttribute("class","kresty7");

var karta= koloda[16].clas;
console.log(karta);
var mesto = pole[7].petya;
console.log(mesto);

var pozicia2= document.getElementById(mesto);
pozicia2.setAttribute("class",karta);


