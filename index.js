
function CreateDigimon({estagio = '',
                       nome = '', 
                       hp = null, 
                       mp = null, 
                       atk = null, 
                       def = null, 
                       spd = null, 
                       int = null, 
                       peso = null, 
                       miss = null, 
                       happy = null, 
                       dis = null,
                       btl = null, 
                       tech = null, 
                       decode = null, 
                       quota = null
                    }){
    let digimon = {
        estagio: estagio,
        nome: nome,
        hp: hp,
        mp: mp,
        atk: atk,
        def: def,
        spd: spd,
        int: int,
        peso: peso,
        miss: miss,
        happy: happy,
        disc: dis,
        btl: btl,
        tech: tech,
        decode: decode,
        quota: quota,
        img: "https://digimon.net/cimages/digimon/"+nome+".jpg"
    };

    return digimon;
}

function CreateRowDigimon(Digimon){
    const table_row = document.createElement("tr");
    //nome
    const name_data = document.createElement("td");
    const name_link = document.createElement("a");
    name_link.setAttribute("class", "Digimon_link");
    name_link.setAttribute("href", "#"+Digimon.nome);
    name_data.appendChild(name_link);
    name_link.innerHTML = (Digimon.nome == '' ) ? "digimon" : Digimon.nome;
    //hp
    const hp_data = document.createElement("td");
    hp_data.innerHTML = (Digimon.hp == null) ? "-" : Digimon.hp;
    //mp
    const mp_data = document.createElement("td");
    mp_data.innerHTML = (Digimon.mp == null) ? "-" : Digimon.mp;
    //atk
    const atk_data = document.createElement("td");
    atk_data.innerHTML = (Digimon.atk == null) ? "-" : Digimon.atk;
    //def
    const def_data = document.createElement("td");
    def_data.innerHTML = (Digimon.def == null) ? "-" : Digimon.def;
    //spd
    const spd_data = document.createElement("td");
    spd_data.innerHTML = (Digimon.spd == null) ? "-" : Digimon.spd;
    //brn
    const brn_data = document.createElement("td");
    brn_data.innerHTML = (Digimon.int == null) ? "-" : Digimon.int;
    //peso
    const peso_data = document.createElement("td");
    peso_data.innerHTML = (Digimon.peso == null) ? "-" : Digimon.peso;
    //miss
    const miss_data = document.createElement("td");
    miss_data.innerHTML = (Digimon.miss == null) ? "-" : Digimon.miss;
    //happy
    const happy_data = document.createElement("td");
    happy_data.innerHTML = (Digimon.happy == null) ? "-" : Digimon.happy;
    //dis
    const disc_data = document.createElement("td");
    disc_data.innerHTML = (Digimon.disc == null) ? "-" : Digimon.disc;
    //btl
    const btl_data = document.createElement("td");
    btl_data.innerHTML = (Digimon.btl == null) ? "-" : Digimon.btl;
    //tech
    const tech_data = document.createElement("td");
    tech_data.innerHTML = (Digimon.tech == null) ? "-" : Digimon.tech;
    //decode
    const decode_data = document.createElement("td");
    decode_data.innerHTML = (Digimon.decode == null) ? "-" : Digimon.decode;
    //quota
    const quota_data = document.createElement("td");
    quota_data.innerHTML = (Digimon.quota == null) ? "-" : Digimon.quota;

    table_row.appendChild(name_data);
    table_row.appendChild(hp_data);
    table_row.appendChild(mp_data);
    table_row.appendChild(atk_data);
    table_row.appendChild(def_data);
    table_row.appendChild(spd_data);
    table_row.appendChild(brn_data);
    table_row.appendChild(peso_data);
    table_row.appendChild(miss_data);
    table_row.appendChild(happy_data);
    table_row.appendChild(disc_data);
    table_row.appendChild(btl_data);
    table_row.appendChild(tech_data);
    table_row.appendChild(decode_data);
    table_row.appendChild(quota_data);
    return table_row;
}

const Digimons = new Map();

Digimons.set("gigimon" , CreateDigimon({estagio: "Child", nome: "gigimon"}));
Digimons.set("koromon" , CreateDigimon({estagio: "Child", nome: "koromon"}));
Digimons.set("tunomon" , CreateDigimon({estagio: "Child", nome: "tunomon"}));
Digimons.set("tokomon" , CreateDigimon({estagio: "Child", nome: "tokomon"}));
Digimons.set("budmon" , CreateDigimon({estagio: "Child", nome: "budmon"}));
Digimons.set("mochimon" , CreateDigimon({estagio: "Child", nome: "mochimon"}));
Digimons.set("wanyamon" , CreateDigimon({estagio: "Child", nome: "wanyamon"}));

// Rookie
Digimons.set("agumon" , CreateDigimon({estagio: "Rookie", nome: "agumon", atk: "Focus", peso:"<=12", quota: 2}));
Digimons.set("impmon" , CreateDigimon({estagio: "Rookie", nome: "impmon", int:"Focus", peso:"<=12", quota: 2}));
Digimons.set("gaomon" , CreateDigimon({estagio: "Rookie", nome: "gaomon", speed:"Focus", peso:"<=12", quota: 2}));
Digimons.set("gabumon" , CreateDigimon({estagio: "Rookie", nome: "gabumon", hp:"Focus", peso: ">=14", quota: 2}));
Digimons.set("kamemon" , CreateDigimon({estagio: "Rookie", nome: "kamemon",def:"Focus", peso:">=13", quota: 2}));
Digimons.set("candmon" , CreateDigimon({estagio: "Rookie", nome: "candmon",mp:"Focus", peso:">=12", quota: 2}));
Digimons.set("guilmon" , CreateDigimon({estagio: "Rookie", nome: "guilmon", atk:"Focus", peso:">=13", quota: 2}));
Digimons.set("goburimon" , CreateDigimon({estagio: "Rookie", nome: "goburimon", quota: 2, hp:"Focus", peso:">=15"}));
Digimons.set("gomamon" , CreateDigimon({estagio: "Rookie", nome: "gomamon", quota: 2, atk:"Focus", peso:">=15"}));
Digimons.set("tyumon" , CreateDigimon({estagio: "Rookie", nome: "tyumon", quota: 2, spd:"Focus", peso:">=13"}));
Digimons.set("tentomon" , CreateDigimon({estagio: "Rookie", nome: "tentomon", quota: 2, def:"Focus", peso:"<=12"}));
Digimons.set("dorumon" , CreateDigimon({estagio: "Rookie", nome: "dorumon", quota: 2, hp:"Focus", peso:"<=12"}));
Digimons.set("hagurumon" , CreateDigimon({estagio: "Rookie", nome: "hagurumon", quota: 2,int:"Focus", peso:">=13"}));
Digimons.set("patamon" , CreateDigimon({estagio: "Rookie", nome: "patamon", quota: 2, mp:"Focus", peso:">=14"}));
Digimons.set("palmon" , CreateDigimon({estagio: "Rookie", nome: "palmon", quota: 2, mp:"Focus", peso:">=13"}));
Digimons.set("picodevimon" , CreateDigimon({estagio: "Rookie", nome: "picodevimon", quota: 2, spd:"Focus", peso:">=14"}));
Digimons.set("piyomon" , CreateDigimon({estagio: "Rookie", nome: "piyomon", quota: 2, hp:"Focus", peso:">=14"}));
Digimons.set("v-mon" , CreateDigimon({estagio: "Rookie", nome: "v-mon", quota: 2, def:"Focus", peso:">=13"}));
Digimons.set("plotmon" , CreateDigimon({estagio: "Rookie", nome: "plotmon", quota: 2, int:"Focus", peso:">=15"}));
Digimons.set("betamon" , CreateDigimon({estagio: "Rookie", nome: "betamon", quota: 2, def:"Focus", peso:"<=12"}));
Digimons.set("lalamon" , CreateDigimon({estagio: "Rookie", nome: "lalamon", quota: 2, mp:"Focus", peso:"<=12"}));
Digimons.set("lucemon" , CreateDigimon({estagio: "Rookie", nome: "lucemon", quota: 2, hp: "2500", mp: "2500", atk: ">=250", def: ">=250", spd: ">=250", int: ">=250", peso:">=14"}));
Digimons.set("renamon" , CreateDigimon({estagio: "Rookie", nome: "renamon", quota: 2}));
Digimons.set("wormmon" , CreateDigimon({estagio: "Rookie", nome: "wormmon", quota: 2}));
//Champions

// Arvore de Evolução
const Evolucoes = new Map();
// Children -> Rookie
Evolucoes.set("gigimon", ["guilmon", "candmon", "dorumon", "agumon", "hagurumon"]);
Evolucoes.set("koromon", ['agumon', 'guilmon', 'gabumon', 'goburimon', 'tyumon']);
Evolucoes.set("tunomon", ['gabumon', 'picodevimon', 'gomamon', 'betamon', 'v-mon']);
Evolucoes.set("tokomon", ['gabumon', 'tentomon', 'kamemon', 'patamon', 'lucemon']);
Evolucoes.set("budmon", ['lalamon', 'piyomon', 'palmon', 'wormmon', 'betamon']);
Evolucoes.set("mochimon", ['hagurumon', 'tentomon', 'lalamon', 'piyomon', 'impmon']);
Evolucoes.set("wanyamon", ['gaomon', 'patamon', 'gomamon', 'renamon', 'plotmon']);


// Rookie -> Champion
Evolucoes.set("agumon", []);
Evolucoes.set("impmon", []);
Evolucoes.set("gaomon", []);
Evolucoes.set("gabumon", []);
Evolucoes.set("kamemon", []);
Evolucoes.set("candmon", []);
Evolucoes.set("guilmon", []);
Evolucoes.set("goburimon", []);
Evolucoes.set("gomamon", []);
Evolucoes.set("tyumon", []);
Evolucoes.set("tentomon", []);
Evolucoes.set("dorumon", []);
Evolucoes.set("hagurumon", []);
Evolucoes.set("patamon", []);
Evolucoes.set("palmon", []);
Evolucoes.set("picodevimon", []);
Evolucoes.set("piyomon", []);
Evolucoes.set("v-mon", []);
Evolucoes.set("plotmon", []);
Evolucoes.set("betamon", []);
Evolucoes.set("lalamon", []);
Evolucoes.set("lucemon", []);
Evolucoes.set("renamon", []);
Evolucoes.set("wormmon", []);

// Rookies Names
const Eggs    = ["Red-Egg", "Yellow-Egg", "Grey-Egg", "Purple-Egg", "Green-Egg", "Peach-Egg", "Blue-Egg"];
// Childs Names
const Childs  = ["gigimon", "koromon", "tunomon", "tokomon", "budmon", "mochimon", "wanyamon"];
// Rookies Names
const Rookies = ["agumon", "impmon", "gaomon", "gabumon", "kamemon", "candmon", 
                 "guilmon", "goburimon", "gomamon", "tyumon", "tentomon", "dorumon", 
                 "hagurumon", "patamon", "palmon", "picodevimon", "piyomon", "v-mon", 
                 "plotmon", "betamon", "lalamon", "lucemon", "renamon", "wormmon"];


function CreateDigimonTable(digimon_name){
    const digimonSec = document.createElement("section");
    digimonSec.setAttribute("id", digimon_name);
    //nome do digimon
    const NomeDigi = document.createElement("h3");
    NomeDigi.innerHTML = digimon_name.toUpperCase();

    //divisao
    const Divisao = document.createElement("hr");
    //imagem
    const ImagemDigimon = document.createElement("img");
    ImagemDigimon.setAttribute("width", "200");
    ImagemDigimon.setAttribute("height", "200");
    ImagemDigimon.setAttribute("class", "Digimon_img");
    ImagemDigimon.src = Digimons.get(digimon_name).img;


    //tabela do digimon
    const tabela = document.createElement("table");
    tabela.setAttribute("class", "Digimon_table");
    //header da tabela
    const tableHeader = document.createElement("tr");
    tableHeader.setAttribute("class", "Table_header");
    //valores do header
    const HeaderNames = ["Evolution", "HP", "MP", "Atk", "Def", "Spd", "Brn", "Weight", "Mistakes", "Happiness", "Discipline", "Battles", "Techs", "Decode", "Quota"];
    for (let i = 0; i < HeaderNames.length; i++){
        const header = document.createElement("th");
        header.innerHTML = HeaderNames[i];
        tableHeader.append(header);
    }
    tabela.appendChild(tableHeader);
    //valores dos digimons
    const next_evolution_size = Evolucoes.get(digimon_name).length;
    const next_evolution = Evolucoes.get(digimon_name);
    
    for (let i = 0; i < next_evolution_size; i++){
        console.log(next_evolution[i]);
        const digimon_lido = Digimons.get(next_evolution[i]);
        const table_row = CreateRowDigimon(digimon_lido);
        if(i % 2 == 0){
            table_row.setAttribute("class", "Table_row_odd");
        }else{
            table_row.setAttribute("class", "Table_row_even");
        }
        tabela.appendChild(table_row);
        
    }
    //adiciona os valores na tabela
    digimonSec.appendChild(NomeDigi);
    digimonSec.appendChild(Divisao);
    digimonSec.appendChild(ImagemDigimon);
    
    digimonSec.appendChild(tabela);
    return digimonSec;
}

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

