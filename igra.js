/**
 * Created by 18 on 09.05.2017.
 */
var koloda=[
    pik6={mast:'pik',
          ves:1  },
    pik7={mast:'pik',
          ves:2},
    pik8={mast:'pik',
          ves:3  },
    pik9={mast:'pik',
          ves:4  },
    pik10={mast:'pik',
          ves:5  },
    pikB={mast:'pik',
          ves:6  },
    pikD={mast:'pik',
          ves:7   },
    pikK={mast:'pik',
           ves:8   },
    pikT={mast:'pik',
           ves:9   },
    kresty6={mast:'kresty',
            ves:1},
    kresty7={mast:'kresty',
        ves:2},
    kresty8={mast:'kresty',
        ves:3},
    kresty9={mast:'kresty',
        ves:4},
    kresty10={mast:'kresty',
        ves:5},
    krestyB={mast:'kresty',
        ves:6},
    krestyD={mast:'kresty',
        ves:7},
    krestyK={mast:'kresty',
        ves:8},
    krestyT={mast:'kresty',
        ves:9},
    chirwa6={mast:'chirva',
         ves:1},
    chirwa7={mast:'chirva',
        ves:2},
    chirwa8={mast:'chirva',
        ves:3},
    chirwa9={mast:'chirva',
        ves:4},
    chirwa10={mast:'chirva',
        ves:5},
    chirwaB={mast:'chirva',
        ves:6},
    chirwaD={mast:'chirva',
        ves:7},
    chirwaK={mast:'chirva',
        ves:8},
    chirwaT={mast:'chirva',
        ves:9},
    bubna6={mast:'bubna',
            ves:1},
    bubna7={mast:'bubna',
        ves:2},
    bubna8={mast:'bubna',
        ves:3},
    bubna9={mast:'bubna',
        ves:4},
    bubna10={mast:'bubna',
        ves:5},
    bubnaB={mast:'bubna',
        ves:6},
    bubnaD={mast:'bubna',
        ves:7},
    bubnaK={mast:'bubna',
        ves:8},
    bubnaT={mast:'bubna',
        ves:9}

];
alert ( koloda.length);

/*var viev = {
    displayChet : function( msg ) {
        var chet = document.getElementById("chet");
        chet.innerHTML= msg;
    }
    displayKozir: function ( nsg) {
        var kozir = document.getElementById("kozir");
        kozir.innerHTML= nsg;

    }
};  */
function viborKozira (){
    var random = Math.floor(Math.random()*4);
    switch (random)
    {case 1: kozir = 'pik';
    break;
        case 2 :kozir='kresty';
    break;
        case 3: kozir ='chirva';
    break;
        case 4 :kozir='bubna';}
    return kozir;
}
var kozir;
console.log(viborKozira ());

function tasovkaKolod(massiv){


}

