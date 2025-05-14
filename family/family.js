import { Digimons, Eggs, Childs, Rookies, Champions, Perfects} from '../utils/digimon.js';
import {CreateDigimonTable} from '../utils/digimon.js';
/*import {CreateRowDigimon} from '../utils/digimon.js';*/


//CHILDS
const child_section = document.createElement("section");
child_section.setAttribute("id", "child_section");
child_section.setAttribute("class", "Section");

for (let i = 0; i < Childs.length; i++){
    const EggName = document.createElement("h3");
    EggName.innerHTML = "from " + Eggs[i];
    const digimonTable = CreateDigimonTable(Childs[i]); 
    child_section.appendChild(EggName);
    child_section.appendChild(digimonTable);
}

//ROOKIES
const rookie_section = document.createElement("section");
rookie_section.setAttribute("id", "rookies_section");
rookie_section.setAttribute("class", "Section");


for (let i = 0; i < Rookies.length; i++){
    const digimonTable = CreateDigimonTable(Rookies[i]); 
    rookie_section.appendChild(digimonTable);
}

//CHAMPIONS
const champion_section = document.createElement("section");
champion_section.setAttribute("id", "champion_section");
champion_section.setAttribute("class", "Section");
for (let i = 0; i < Champions.length; i++){
    const digimonTable = CreateDigimonTable(Champions[i]); 
    champion_section.appendChild(digimonTable);
}

//PERFECTS
const perfect_section = document.createElement("section");
perfect_section.setAttribute("id", "perfect_section");
perfect_section.setAttribute("class", "Section");

for (let i = 0; i < Perfects.length; i++){
    const digimonTable = CreateDigimonTable(Perfects[i]); 
    perfect_section.appendChild(digimonTable);
}

/////////////////////////////////////////////////// INFO ////////////////////////////////////////////////////////
//info
const info1 = document.createElement("p");
info1.setAttribute("class", "Info");
info1.innerHTML = "Up to Champion: HP to Brains parameter conditions are counted as one set. Meeting all of them will give you one \"required number\".";
//info
const info2 = document.createElement("p");
info2.setAttribute("class", "Info");
info2.innerHTML = "Champion to Perfect:\n\"HP & MP\", \"attack & defense\", and \"speed & intelligence\" are counted as a set. In other words, if there are conditions for both, you cannot get one \"required number\" by clearing only one of the conditions.";
//info
const info3 = document.createElement("p");
info3.setAttribute("class", "Info");
info3.innerHTML = "Perfect to Ultimate: \nFor each parameter, if the conditions are met, you will get one required number.";

////////////////////////////////////////////////// CHILD //////////////////////////////////////////////////////
//adiciona a secao de childs no main
const ChildTitle = document.createElement("h2");
ChildTitle.setAttribute("class", "Section_title");
ChildTitle.innerHTML = "Children";
//divisor
const ChildDiv = document.createElement("hr");
ChildDiv.setAttribute("class", "Stage_div");
/////////////////////////////////////////////////// ROOKIE ////////////////////////////////////////////////////////
//adiciona a secao de rookies no main
const RookieTitle = document.createElement("h2");
RookieTitle.setAttribute("class", "Section_title");
RookieTitle.innerHTML = "Rookies";
//divisor
const RookieDiv = document.createElement("hr");
RookieDiv.setAttribute("class", "Stage_div");
/////////////////////////////////////////////////// Champion ////////////////////////////////////////////////////////
const ChampionTitle = document.createElement("h2");
ChampionTitle.setAttribute("class", "Section_title");
ChampionTitle.innerHTML = "Champions";
//divisor
const ChampionDiv = document.createElement("hr");
ChampionDiv.setAttribute("class", "Stage_div");
////////////////////////////////////////////////// Perfects ////////////////////////////////////////////////////
const PerfectTitle = document.createElement("h2");
PerfectTitle.setAttribute("class", "Section_title");
PerfectTitle.innerHTML = "Perfects";
//divisor
const PerfectDiv = document.createElement("hr");
PerfectDiv.setAttribute("class", "Stage_div");

const main_div = document.getElementById("main");
//info
main_div.appendChild(info1);
main_div.appendChild(info2);
main_div.appendChild(info3);
//child
main_div.appendChild(ChildTitle);
main_div.appendChild(ChildDiv);
main_div.appendChild(child_section);
//rookie
main_div.appendChild(RookieTitle);
main_div.appendChild(RookieDiv);
main_div.appendChild(rookie_section);
//champion
main_div.appendChild(ChampionTitle);
main_div.appendChild(ChampionDiv);
main_div.appendChild(champion_section);
//perfect
main_div.appendChild(PerfectTitle);
main_div.appendChild(PerfectDiv);
main_div.appendChild(perfect_section);

