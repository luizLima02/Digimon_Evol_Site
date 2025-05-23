const main_div = document.getElementById("main");

/////////////////////////////////////////////////// INFO ////////////////////////////////////////////////////////
//info
const info1 = document.createElement("p");
info1.setAttribute("class", "Info");
info1.innerHTML = "Site to assist players in the game \"Digimon Re:Digitize\"";
//info
const info2 = document.createElement("p");
info2.setAttribute("class", "Info");
info2.innerHTML = "Digimon Tree: to see the digimon evolution table.";
//info
const info3 = document.createElement("p");
info3.setAttribute("class", "Info");
info3.innerHTML = "Digimon Search: to go from a digimo to its evolution.";

////////////////////////////////////////////////// CHILD //////////////////////////////////////////////////////
//botão familia
const FamilyButton = document.createElement("a");
FamilyButton.setAttribute("href", "./family/index.html");
const FamilyBtitle = document.createElement("h2");
FamilyBtitle.setAttribute("class", "Section_title");
FamilyBtitle.innerHTML = "Digimon Tree";
FamilyButton.appendChild(FamilyBtitle);

//botão Search
const SearchButton = document.createElement("a");
SearchButton.setAttribute("href", "./search/index.html");
const SearchBtitle = document.createElement("h2");
SearchBtitle.setAttribute("class", "Section_title");
SearchBtitle.innerHTML = "Search Digimon";
SearchButton.appendChild(SearchBtitle);

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

//info
main_div.appendChild(info1);
main_div.appendChild(info2);
main_div.appendChild(info3);
//child
main_div.appendChild(FamilyButton);
main_div.appendChild(SearchButton);
main_div.appendChild(ChildDiv);
main_div.appendChild(child_section);
//rookie


