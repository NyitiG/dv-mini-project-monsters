// --------------------TÖMBÖK ÉS VÁLTOZÓK BEÁLLÍTÁSAI-------------------------


//  elemental_icon js műveleteihez a tömb és változók beállításai
iea = new Array();
 iea[0] = new Image(); iea[0].src = "icons/air.svg";
 iea[1] = new Image(); iea[1].src = "icons/earth.svg";
 iea[2] = new Image(); iea[2].src = "icons/fire.svg";
 iea[3] = new Image(); iea[3].src = "icons/water.svg";

 iean=2;
 // többfunkciós: kezdeti kép számának beállítása; monster elemental skill eltárolására

// elemental_icon js műveleteihez a tömm és változók beállításainak vége




// --------------------------CREAT MONSTER ELEMEK BEÁLLÍTÁSAI------------

// monster elemental tömb számlálót
measz=0;
// monster elemental skill Array
mesa= new Array();
// monster elemental name array
mena = new Array();
// monster attack number array
mana = new Array();
// monster defence number array
mdna = new Array();

// általános tárolók a név, skill, attack, defense tárolására

// skill tároló
mes=0;
/* egy kis magyarázat: a skill(pl:levegő) képekben van tárolva, amit már létrehoztunk egy img tömbben
     egy számláló segítségéval. A lényeg: ezt a számlálót használom fel a skill tulajdonság tárolására
     azaz: 0=air, 1=earth, 2=fire, 3=water*/

// név tároló
men=0;
// attack tároló
man=0;
// defense tároló
mdn=0;

// -------------------------CREAT MONSTER ELEMEK BEÁLLÍTÁSAI VÉGE---------

// ------------------------- addDIV ELEMEK BEÁLLÍTÁSAI--------------------

//  új div ID beállítása
divnum=0;
// elem törléséhez
torlessz=0;
sor=0;

// ------------------------- addDIV ELEMEK BEÁLLÍTÁSAI VÉGE--------------------

// -------------------------MSEARCH FUNKCIÓ BEÁLLÍTÁSAI------------------------

texttalnum= new Array;
texttalnumsz=0;






// -------------------------OOOOOOOOOOOOOOOOOOOOOOOO--------------------


// -----------------------JS MŰVELETEK MEGHÍVÁSAI----------------------------


// HA A BALRA MUTATÓ NYÍLRA KLIKKELÜNK

 function left() {
   // ellenőrzés: ha a számláló 0, akkor
   if (iean==0) {
     iean=3;
// először visszaállítjuk a legvégére, majd
     document.getElementById('elemental_icon').src=iea[iean].src;
// megváltoztatjuk az elemental_icon srcjét
   }
   // egyébként meg
   else {
      iean--;
      // csökkentjük a számlálót és
          document.getElementById('elemental_icon').src=iea[iean].src;
          // megváltoztatjuk az elemental_icon srcjét
   }
 }

// ----------------------------------VÉGE-----------------------------------

// HA A JOBBRA MUTATÓ NYÍLRA KLIKKELÜNK

function right()  {

  if (iean==3) {
    iean=0;
// először visszaállítjuk a legelejére, majd
    document.getElementById('elemental_icon').src=iea[iean].src;
// megváltoztatjuk az elemental_icon srcjét

    // egyébként meg
  } else {
    iean++;
    // növeljük a számlálót és
        document.getElementById('elemental_icon').src=iea[iean].src;
        // megváltoztatjuk az elemental_icon srcjét
  }
}


// ----------------------------------VÉGE-----------------------------------

// HA A ADD GOMBRA KATTINTUNK (HOZZÁADUNK EGY MONSTERT)

function addmonster() {
// behozzunk az adatokat: elemetal skill, name, attack num, defense number
     mes=iean;
    /* egy kis magyarázat: a skill(pl:levegő) képekben van tárolva, amit már létrehoztunk egy img tömbben
          egy számláló segítségével. A lényeg: ezt a számlálót használom fel a skill tulajdonság tárolására
          azaz: 0=air, 1=earth, 2=fire, 3=water*/
     men=String(document.create_monsters_name.men.value);
     man=parseInt(document.create_monsters_name.man.value);
     mdn=parseInt(document.create_monsters_name.mdn.value);

    // behoztuk a skill, name, attack, defense értékekek
    // tömbszámláló: measz=0;
    // tömbbe rendezzük az adatokat

    mesa[measz]=mes;
    mena[measz]=men;
    mana[measz]=man;
    mdna[measz]=mdn;

    // document.getElementById('monster_list').innerHTML = "A tömb számláló száma: "+measz+"<br>"+
    //                                                     "A monster skill száma: "+mesa[measz]+"<br>"+
    //                                                     "A monster neve: "+mena[measz]+"<br>"+
    //                                                     "A monster attack száma: "+mana[measz]+"<br>"+
    //                                                     "A monster defence száma: "+mdna[measz]+"<br>";

    // láthatóvá tesszük a lista divet, ha először futtatjuk
    document.getElementById('monster_list').style.visibility="visible";

    // meghívjuk a listakiíró funkciót
    addDIV('monster_list');

    // !!!!!!!!!!!!!!!!!!!! Ide kell egy ciklus, h az összeset írja ki!!!!!!!!!
    measz++;

    document.getElementById('create_monsters_input').value="Name";
    document.getElementById('input_attack').value="3";
    document.getElementById('input_defense').value="3";






}

// -------------------------------VÉGE------------------------------------


// EZZEL A FÜGGVÉNNYEL HOZUNK LÉTRE ANNYI DIV-ET, AMENNYI MONSTER van

function addDIV(hovaid) {
do {
  writediv('monster_list')

  // egyszer mindenképp lefut, hiszen megnyomtuk a hozzáadás gombot, tehát minimum 1 monster már van

} while (measz<mena.lenght);
}

// EZZEL IRATJUK KI A MONSTEREKET


function writediv(hovaid) {
  altag=0;

  // először hozzáadunk egy új divet
  var hova = document.getElementById(hovaid);
  var mit = document.createElement("div");
  // a class-t is megadjuk ...
  mit.className = 'monsterlistclass';
  // kap egy új id-t ...
  mit.id ="ujtag"+divnum+altag;
  // és létrehozzuk
  hova.appendChild(mit);
  // most ebben az új divben szeretnénk létrehozni újabb elemeket
  newdivid="ujtag"+divnum+altag;

// létrehozzuk a monster elemental_icon-ját
  hova=document.getElementById(newdivid);
  mit=document.createElement("img");
  mit.className='monsterlistelementalimg';
  hova.appendChild(mit);
  // a kép az adott monster elemental skilljét mutatja

   mit.src=iea[mesa[measz]].src;
  // mit.innerHTML = tart+"-"+sorszam;

  // most jöhet egy div a név, attack defense, kukának

  hova=document.getElementById(newdivid);
  mit=document.createElement("div");
  mit.className='monsterdata';
  hova.appendChild(mit);
  // mivel ebbe az új divbe hozzuk létre a többi elemet, ezért új id-t adunk neki
  altag++;
  newdivid=newdivid+altag;
  mit.id=newdivid;

  // // létrehozzuk és kiírjuk a nevét
  hova=document.getElementById(newdivid);
  mit=document.createElement("p");
  mit.className='monsterdataparag';
  hova.appendChild(mit);
  // megint változtatjuk a newdivid-t m ebbe tesszük a többit
  newdivid=newdivid+altag;
  mit.id=newdivid;
   sor=torlessz;
  mit.innerHTML=mena[measz]+"<br> <img class='monsterlistimg' src='icons/attack.svg'> <span class='monsterlistspan'>"+
  mana[measz]+"</span>   <img class='monsterlistimg' src='icons/defense.svg'> <span class='monsterlistspan'>"+
  mdna[measz]+"</span> <img id='"+torlessz+"' class='monsterlisteraseimg'src='icons/trash-can.svg' onclick='tol(this.id);'> ";

// létrehoztuk a monster adatait. Növeljük a divnum számot, h ne ugyanoda pakoljon ki mindent
divnum ++;
torlessz++;

}


// ---------------------------------------VÉGE----------------------------------


// ---------HA A TÖRLÉS IKONRA KATTINT VKI, AKKOR EZT A FÜGGVÉNYT HÍVJA MEG-----

function tol(sor) {

// töröljük a monster_list divet, hiszen mindent újra ki fogunk íratni

tarolodiv = document.getElementById("body");
olddiv = document.getElementById("monster_list");
tarolodiv.removeChild(olddiv);

// létrehozzuk az "új" üres monster_list-et

hova=document.getElementById("body");
mit=document.createElement("div");
mit.id="monster_list";
hova.appendChild(mit);

// töröljük az adott monster minden tulajdonságát a különböző tömbökből

var monsterarnum=parseInt(sor);
 mesa.splice(monsterarnum,1);
 mena.splice(monsterarnum,1);
 mana.splice(monsterarnum,1);
 mdna.splice(monsterarnum,1);
  // meg kell vizsgálnunk, h a tömbökben van-e egyáltalán elem
divnum=0;
measz=0;
torlessz=0;
if (mena.lenght<0) {
  return ;
} else {
  // ha van, akkor láthatóvá tesszük a divet,...
  document.getElementById('monster_list').style.visibility="visible";
  for (var i = 0; i < mena.length; i++) {
    // ... és meghívjuk a kiíró funkciót
      addDIV('monster_list');
      // és növeljük eggyel a monster elemental tömb számlálóját
      measz++;
        }
        // ha kész, kilépünk a funkcióból
        return ;
}

}


// ---------------------------VÉGE A TÖRLÉS IKONRA KATTINTUNK-------------------

// --------------------------MSEARCH FUNCTION ------------------------------------

// HA VKI NÉV ALAPJÁN AKAR KERESNI, AKKOR ELŐSZÖR EZT A FUNKCIÓT HÍVJA MEGHÍVÁSAI

function msearch() {

  // töröljük a monster_list divet, hiszen mindent újra ki fogunk íratni

  tarolodiv = document.getElementById("body");
  olddiv = document.getElementById("monster_list");
  tarolodiv.removeChild(olddiv);

  // létrehozzuk az "új" üres monster_list-et

  hova=document.getElementById("body");
  mit=document.createElement("div");
  mit.id="monster_list";
  hova.appendChild(mit);

  // behozzuk a neveket egy text változóba
  var text=document.getElementById('monster_search').value;
// ha már bent van, megnézzük, h szerepel-e a nevek közt
var sz=0;
for (var i = 0; i < mena.length; i++) {
  // nagybetűsre váltjuk az összes betűt, mind a keres, mind a neveket tároló tömbökben
  // ha eggyezés van, akkor a név tároló tömb indexét tároljuk el
  if (text.toUpperCase()==mena[i].substr(0,text.length).toUpperCase()) {
    texttalnum[sz]=i;
    // és növeljük a texttalnum számlálóját
    sz++;

  }
}
// Megnézzük, h van-e egyáltalán találat
if (texttalnum.length<0) {
  return;

} else {

  for (var i = 0; i < texttalnum.length; i++) {
    // ... és meghívjuk a kiíró funkciót
    measz=texttalnum[i];
    divnum=texttalnum[i];
    torlessz=texttalnum[i];
    writediv('monster_list');

        }
        // ha van, akkor láthatóvá tesszük a divet
        document.getElementById('monster_list').style.visibility="visible";
        // lenullázzuk a számlálókat és a texttalnum tömböt
        texttalnum.splice(0);
        // majd visszatérünk.
        return ;
}


}

// Készült: 2020.02.29
// készítette: Nyitrai Gábor (NyitiG)
