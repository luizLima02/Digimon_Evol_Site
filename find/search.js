
import { Digimons, Evolucoes,  Eggs, Childs, Rookies, Champions, Perfects, Megas} from '../utils/digimon.js';
import {find_preEvo, find_nextEvo} from '../utils/digimon.js';

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
        defaultOption.textContent = 'Selecione um nome...';
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
        mostra_evolucoes(nome, estagio);

    } else {
        alert('Por favor, selecione um gênero e um nome.');
    }
});

function mostra_evolucoes(digimon_name, estagio){
    //pega o local para salvar os search
    const searchResult_div = document.getElementById("search_result");
    //limpa o div
    while (searchResult_div.firstChild) {
        searchResult_div.removeChild(searchResult_div.firstChild);
    }
    /// Div digimon Atual
    const target_digimon_div = document.createElement('div');;
    //mostra o digimon digimon_name
    const target_digimon = Digimons.get(digimon_name);
    const name = document.createElement('h3');
    name.innerHTML = nomeSelect.value;
    const image = document.createElement('img');
    image.src = target_digimon.getImg();
    image.setAttribute("width", "200");
    image.setAttribute("height", "200");
    image.setAttribute("class", "Digimon_img");
    target_digimon_div.appendChild(name);
    target_digimon_div.appendChild(image);
    ////////////////////////////////////
    //Section Name
    const PreEvoName = document.createElement('h3');
    PreEvoName.innerHTML = "Pre-evolution:";
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

        const imageEvo = document.createElement('img');
        if(!evo.endsWith("Egg")){
            //// Vai para o Digimon se clicado
            imageEvo.src = target_Evo.getImg();
            imageEvo.setAttribute("width", "200");
            imageEvo.setAttribute("height", "200");
            imageEvo.setAttribute("class", "Digimon_img");

            imageEvo.addEventListener("click", ()=>{ choose_digimon(evo); });
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

        const imageEvo = document.createElement('img');
        
        imageEvo.src = target_Evo.getImg();
        imageEvo.setAttribute("width", "200");
        imageEvo.setAttribute("height", "200");
        imageEvo.setAttribute("class", "Digimon_img");
        imageEvo.addEventListener("click", ()=>{ choose_digimon(evo); });
        
        evo_div.appendChild(nameEvo);
        evo_div.appendChild(imageEvo);
        //adiciona ao container
        nxt_evo_div.appendChild(evo_div);
    });
    //quando clicar na foto do digimon, mostrar a tabela de requerimentos
    searchResult_div.appendChild(target_digimon_div);
    searchResult_div.appendChild(PreEvoName);
    searchResult_div.appendChild(pre_evo_div);
    searchResult_div.appendChild(PosEvoName);
    searchResult_div.appendChild(nxt_evo_div);
    
}

function choose_digimon(digimon_name){
    //alert(digimon_name+" clicado");
    const d_Atual = Digimons.get(digimon_name);
    mostra_evolucoes(digimon_name, d_Atual.estagio);
}


