
import { Digimons, Evolucoes,  Eggs, Childs, Rookies} from '../utils/digimon.js';
import {CreateDigimonTable} from '../utils/digimon.js';
import {CreateRowDigimon} from '../utils/digimon.js';

const main_div = document.getElementById("main");

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
const SearchTitle = document.createElement("h2");
SearchTitle.setAttribute("class", "Section_title");
SearchTitle.innerHTML = "Search by Name";
//divisor
const SearchDiv = document.createElement("hr");
SearchDiv.setAttribute("class", "Stage_div");


//info
main_div.appendChild(info1);
main_div.appendChild(info2);
main_div.appendChild(info3);
//search
main_div.appendChild(SearchTitle);
main_div.appendChild(SearchDiv);


