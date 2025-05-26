
import { Digimons, Evolucoes,  Req, Childs, Rookies, Champions, Perfects, Megas} from '../utils/digimon.js';
import {find_preEvo, find_nextEvo, CreateRowDigimon} from '../utils/digimon.js';

const main_div = document.getElementById("main");

/////////////////////////////////////////////////// INFO ////////////////////////////////////////////////////////
//info
const info1 = document.createElement("p");
info1.setAttribute("class", "Info");
info1.innerHTML = "Up to Champion:<br>HP to Brains parameter conditions are counted as one set. Meeting all of them will give you one \"required number\".";
//info
const info2 = document.createElement("p");
info2.setAttribute("class", "Info");
info2.innerHTML = "Champion to Perfect:<br>\"HP & MP\", \"attack & defense\", and \"speed & intelligence\" are counted as a set. In other words, if there are conditions for both, you cannot get one \"required number\" by clearing only one of the conditions.";
//info
const info3 = document.createElement("p");
info3.setAttribute("class", "Info");
info3.innerHTML = "Perfect to Ultimate:<br>For each parameter, if the conditions are met, you will get one required number.";
//info
const info4 = document.createElement("p");
info4.setAttribute("class", "Info");
info4.innerHTML = "To reincarnate from a digimon it needs to be the previous one that you raised.<br>EX: to reincanate to zdGarurumon you need to raise a MetalGururumon, and dont save it when it die.";

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
main_div.appendChild(info4);
//search
main_div.appendChild(SearchTitle);
main_div.appendChild(SearchDiv);

////////////////////////////////////////////////////////////////

// Dados dos nomes
const nomesDigimon = {
    Childs,
    Rookies,
    Champions,
    Perfects,
    Megas
};

// Elementos do DOM
const form = document.getElementById('formEstagios');
const estagioSelect = document.getElementById('estagios');
const nomeContainer = document.getElementById('nomeContainer');
const nomeSelect = document.getElementById('nome');

// Quando o gênero é selecionado
estagioSelect.addEventListener('change', function() {
    if (this.value) {
        // Mostra o container de nomes
        nomeContainer.style.display = 'block';
        
        // Limpa opções anteriores
        nomeSelect.innerHTML = '';
        
        // Adiciona a opção padrão
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select a name...';
        nomeSelect.appendChild(defaultOption);
        
        // Preenche com os nomes do gênero selecionado
        nomesDigimon[this.value].forEach(nome => {
            const option = document.createElement('option');
            option.value = nome;
            option.textContent = nome;
            nomeSelect.appendChild(option);
        });
    } else {
        // Esconde o container se nenhum gênero foi selecionado
        nomeContainer.style.display = 'none';
    }
});

// Quando o formulário é enviado
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const estagio = estagioSelect.value;
    const nome = nomeSelect.value;
    
    if (estagio && nome) {
        mostra_evolucoes(nome);

    } else {
        alert('Please select a name and stage.');
    }
});

function mostra_evolucoes(digimon_name){
    //pega o local para salvar os search
    const searchResult_div = document.getElementById("search_result");
    //limpa o div
    while (searchResult_div.firstChild) {
        searchResult_div.removeChild(searchResult_div.firstChild);
    }
    /// Div digimon Atual
    const target_digimon_div = document.createElement('div');
    //mostra o digimon digimon_name
    const target_digimon = Digimons.get(digimon_name);
    const name = document.createElement('h3');
    name.innerHTML = target_digimon.estagio + ": " + digimon_name;
    //// foto
    const image = document.createElement('img');
    image.src = target_digimon.getImg();
    image.setAttribute("width", "200");
    image.setAttribute("height", "200");
    image.setAttribute("class", "Digimon_img");
    target_digimon_div.appendChild(name);
    target_digimon_div.appendChild(image);
    //////tabela do digimon
    let hasTable = false;
    if(target_digimon.hp != "" || target_digimon.hp != null){hasTable = true;}
    if(target_digimon.mp != "" || target_digimon.mp != null){hasTable = true;}
    if(target_digimon.atk != "" || target_digimon.atk != null){hasTable = true;}
    if(target_digimon.def != "" || target_digimon.def != null){hasTable = true;}
    if(target_digimon.spd != "" || target_digimon.spd != null){hasTable = true;}
    if(target_digimon.int != "" || target_digimon.int != null){hasTable = true;}
    if(target_digimon.peso != "" || target_digimon.peso != null){hasTable = true;}
    if(target_digimon.miss != "" || target_digimon.miss != null){hasTable = true;}
    if(target_digimon.happy != "" || target_digimon.happy != null){hasTable = true;}
    if(target_digimon.disc != "" || target_digimon.disc != null){hasTable = true;}
    if(target_digimon.btl != "" || target_digimon.btl != null){hasTable = true;}
    if(target_digimon.tech != "" || target_digimon.tech != null){hasTable = true;}
    if(target_digimon.decode != "" || target_digimon.decode != null){hasTable = true;}
    if(target_digimon.quota != "" || target_digimon.quota != null){hasTable = true;}
    ////////
    if(hasTable){
        const tabela = document.createElement("table");
        tabela.setAttribute("class", "Digimon_table");
        const HeaderNames = ["HP", "MP", "Atk", "Def", "Spd", "Brn", "Weight", "Mistakes", "Happiness", "Discipline", "Battles", "Techs", "Decode", "Quota"];
        //header da tabela
        const tableHeader = document.createElement("tr");
        tableHeader.setAttribute("class", "Table_header");
        for (let i = 0; i < HeaderNames.length; i++){
                const header = document.createElement("th");
                header.innerHTML = HeaderNames[i];
                tableHeader.append(header);
        }
        tabela.appendChild(tableHeader);
        const table_row = CreateRowDigimon(target_digimon, {w_name: false});
        if(table_row != null){
            tabela.appendChild(table_row);
            target_digimon_div.appendChild(tabela);
        }
    }
    ///requisito
    if(Req.get(digimon_name) != undefined){
        const digimon_Req = Req.get(digimon_name);
        const req_html = document.createElement("p");
        req_html.setAttribute("class", "Info");
        req_html.innerHTML = "*" + digimon_Req;
        target_digimon_div.appendChild(req_html);
    }
    ////////////////////////////////////
    //Section Name
    const PreEvoName = document.createElement('h3');
    PreEvoName.innerHTML = "Pre-evolution:";
    const divisao1 = document.createElement('hr');
    divisao1.setAttribute("class", "Stage_div");
    const divisao2 = document.createElement('hr');
    divisao2.setAttribute("class", "Stage_div");
    //div pre evolucao
    const pre_evo_div = document.createElement('div');
    pre_evo_div.setAttribute("class", "pre_evo_container");
    //Lista de preEvolucoes
    const pre_evo = find_preEvo(digimon_name);    
    pre_evo.forEach(evo => {
        //cria o div para o digimon
        const evo_div = document.createElement('div');
        evo_div.setAttribute("class", "pre_evo");
        //cria os atributos do digimon
        const target_Evo = Digimons.get(evo);
        
        const nameEvo = document.createElement('h3');
        nameEvo.innerHTML = evo;
        if(target_Evo != undefined){
            const imageEvo = document.createElement('img');
            if(!evo.endsWith("Egg")){
                //// Vai para o Digimon se clicado
                imageEvo.src = target_Evo.getImg();
                imageEvo.setAttribute("width", "150");
                imageEvo.setAttribute("height", "150");
                imageEvo.setAttribute("class", "Digimon_img");
                imageEvo.addEventListener("click", ()=>{ choose_digimon(evo); });
            }
        }
        
        ///
        evo_div.appendChild(nameEvo);
        evo_div.appendChild(imageEvo);
        //adiciona ao container
        pre_evo_div.appendChild(evo_div);
    });
    ///////////////////////////////////////////////
    //pos evolucoes
    //Section Name
    const PosEvoName = document.createElement('h3');
    PosEvoName.innerHTML = "Next-evolution:";
    //div pre evolucao
    const nxt_evo_div = document.createElement('div');
    nxt_evo_div.setAttribute("class", "nxt_evo_container");
    //Lista de preEvolucoes
    const nxt_evo = find_nextEvo(digimon_name);    
    nxt_evo.forEach(evo => {
        //cria o div para o digimon
        const evo_div = document.createElement('div');
        evo_div.setAttribute("class", "nxt_evo");
        //cria os atributos do digimon
        const target_Evo = Digimons.get(evo);

        const nameEvo = document.createElement('h3');
        nameEvo.innerHTML = evo;
        if(target_Evo != undefined){
            const imageEvo = document.createElement('img');
            
            imageEvo.src = target_Evo.getImg();
            imageEvo.setAttribute("width", "200");
            imageEvo.setAttribute("height", "200");
            imageEvo.setAttribute("class", "Digimon_img");
            imageEvo.addEventListener("click", ()=>{ choose_digimon(evo); });
        }
        evo_div.appendChild(nameEvo);
        evo_div.appendChild(imageEvo);
        //adiciona ao container
        nxt_evo_div.appendChild(evo_div);
    });
    //quando clicar na foto do digimon, mostrar a tabela de requerimentos
    searchResult_div.appendChild(target_digimon_div);
    searchResult_div.appendChild(PreEvoName);
    searchResult_div.appendChild(divisao1);
    searchResult_div.appendChild(pre_evo_div);
    searchResult_div.appendChild(PosEvoName);
    searchResult_div.appendChild(divisao2);
    searchResult_div.appendChild(nxt_evo_div);
    
}

function choose_digimon(digimon_name){
    //alert(digimon_name+" clicado");
    const d_Atual = Digimons.get(digimon_name);
    mostra_evolucoes(digimon_name, d_Atual.estagio);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}


