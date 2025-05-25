
export function CreateDigimon({estagio = '',
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
                       quota = null,
                       imagem = null,
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
        img: imagem == null ? "https://digimon.net/cimages/digimon/"+(nome.toLowerCase())+".jpg" : imagem,
        getImg : function(){
            if(this.estagio == "Egg"){
                return "";
            }
            let imagem_Retorno = this.img;
            if(this.nome == "greymon"){
                imagem_Retorno = "https://digimon.net/cimages/digimon/greymon-first.jpg";
            }
            return imagem_Retorno;
        }
    };

    return digimon;
}


export const Digimons = new Map();
//EGGS
Digimons.set("Red-Egg" , CreateDigimon({estagio: "Egg", nome: "Red-Egg"}));
Digimons.set("Yellow-Egg" , CreateDigimon({estagio: "Egg", nome: "Yellow-Egg"}));
Digimons.set("Grey-Egg" , CreateDigimon({estagio: "Egg", nome: "Grey-Egg"}));
Digimons.set("Purple-Egg" , CreateDigimon({estagio: "Egg", nome: "Purple-Egg"}));
Digimons.set("Green-Egg" , CreateDigimon({estagio: "Egg", nome: "Green-Egg"}));
Digimons.set("Peach-Egg" , CreateDigimon({estagio: "Egg", nome: "Peach-Egg"}));
Digimons.set("Blue-Egg" , CreateDigimon({estagio: "Egg", nome: "Blue-Egg"}));

////
Digimons.set("gigimon" , CreateDigimon({estagio: "Child", nome: "gigimon"}));
Digimons.set("koromon" , CreateDigimon({estagio: "Child", nome: "koromon"}));
Digimons.set("tunomon" , CreateDigimon({estagio: "Child", nome: "tunomon"}));
Digimons.set("tokomon" , CreateDigimon({estagio: "Child", nome: "tokomon"}));
Digimons.set("budmon" , CreateDigimon({estagio: "Child", nome: "budmon"}));
Digimons.set("mochimon" , CreateDigimon({estagio: "Child", nome: "mochimon"}));
Digimons.set("wanyamon" , CreateDigimon({estagio: "Child", nome: "wanyamon"}));

// Rookie
Digimons.set("agumon" , CreateDigimon({estagio: "Rookie", nome: "agumon", atk: "Focus", peso:"12 or less", quota: 2}));
Digimons.set("impmon" , CreateDigimon({estagio: "Rookie", nome: "impmon", int:"Focus", peso:"12 or less", quota: 2}));
Digimons.set("gaomon" , CreateDigimon({estagio: "Rookie", nome: "gaomon", speed:"Focus", peso:"12 or less", quota: 2}));
Digimons.set("gabumon" , CreateDigimon({estagio: "Rookie", nome: "gabumon", hp:"Focus", peso: "14 or more", quota: 2}));
Digimons.set("kamemon" , CreateDigimon({estagio: "Rookie", nome: "kamemon",def:"Focus", peso:"13 or more", quota: 2}));
Digimons.set("candmon" , CreateDigimon({estagio: "Rookie", nome: "candmon",mp:"Focus", peso:"12 or more", quota: 2}));
Digimons.set("guilmon" , CreateDigimon({estagio: "Rookie", nome: "guilmon", atk:"Focus", peso:"13 or more", quota: 2}));
Digimons.set("goburimon" , CreateDigimon({estagio: "Rookie", nome: "goburimon", quota: 2, hp:"Focus", peso:"15 or more"}));
Digimons.set("gomamon" , CreateDigimon({estagio: "Rookie", nome: "gomamon", quota: 2, atk:"Focus", peso:"15 or more"}));
Digimons.set("tyumon" , CreateDigimon({estagio: "Rookie", nome: "tyumon", quota: 2, spd:"Focus", peso:"13 or more"}));
Digimons.set("tentomon" , CreateDigimon({estagio: "Rookie", nome: "tentomon", quota: 2, def:"Focus", peso:"12 or less"}));
Digimons.set("dorumon" , CreateDigimon({estagio: "Rookie", nome: "dorumon", quota: 2, hp:"Focus", peso:"12 or less"}));
Digimons.set("hagurumon" , CreateDigimon({estagio: "Rookie", nome: "hagurumon", quota: 2,int:"Focus", peso:"13 or more"}));
Digimons.set("patamon" , CreateDigimon({estagio: "Rookie", nome: "patamon", quota: 2, mp:"Focus", peso:"14 or more"}));
Digimons.set("palmon" , CreateDigimon({estagio: "Rookie", nome: "palmon", quota: 2, mp:"Focus", peso:"13 or more"}));
Digimons.set("picodevimon" , CreateDigimon({estagio: "Rookie", nome: "picodevimon", quota: 2, spd:"Focus", peso:"14 or more"}));
Digimons.set("piyomon" , CreateDigimon({estagio: "Rookie", nome: "piyomon", quota: 2, hp:"Focus", peso:"14 or more"}));
Digimons.set("v-mon" , CreateDigimon({estagio: "Rookie", nome: "v-mon", quota: 2, def:"Focus", peso:"13 or more"}));
Digimons.set("plotmon" , CreateDigimon({estagio: "Rookie", nome: "plotmon", quota: 2, int:"Focus", peso:"15 or more"}));
Digimons.set("betamon" , CreateDigimon({estagio: "Rookie", nome: "betamon", quota: 2, def:"Focus", peso:"12 or less"}));
Digimons.set("lalamon" , CreateDigimon({estagio: "Rookie", nome: "lalamon", quota: 2, mp:"Focus", peso:"12 or less"}));
Digimons.set("lucemon" , CreateDigimon({estagio: "Rookie", nome: "lucemon", quota: 2, hp: "2500", mp: "2500", atk: "250+", def: "250+", spd: "250+", int: "250+", peso:"14 or more"}));
Digimons.set("renamon" , CreateDigimon({estagio: "Rookie", nome: "renamon", quota: 2, spd:"Focus", peso:"13 or more"}));
Digimons.set("wormmon" , CreateDigimon({estagio: "Rookie", nome: "wormmon", quota: 2, int:"Focus", peso:"14 or more"}));

//Champions
Digimons.set("ikkakumon" , CreateDigimon({estagio: "Champion", nome: "ikkakumon", hp:" 1000", mp:"", atk:"70", def:"", spd:"", int:"60", peso: "26+", miss:"3-", happy:"", disc:"70+", tech:"14", decode:"7", quota:"3"}));
Digimons.set("woodmon" , CreateDigimon({estagio: "Champion", nome: "woodmon", hp:" 800", mp:"", atk:"", def:"80", spd:"", int:"", peso: "24+", miss:"5-", happy:"", disc:"60+", tech:"14", decode:"7", quota:"3"}));
Digimons.set("airdramon" , CreateDigimon({estagio: "Champion", nome: "airdramon", hp:" ", mp:"600", atk:"", def:"", spd:"80", int:"80", peso: "26+", miss:"5-", happy:"", disc:"90+", tech:"35", decode:"15", quota:"3"}));
Digimons.set("xv-mon" , CreateDigimon({estagio: "Champion", nome: "xv-mon", hp:" 1200", mp:"", atk:"", def:"160", spd:"90", int:"", peso: "23+", miss:"1-", happy:"", disc:"", tech:"35", decode:"15", quota:"3"}));
Digimons.set("angemon" , CreateDigimon({estagio: "Champion", nome: "angemon", hp:" ", mp:"", atk:"80", def:"", spd:"80", int:"80", peso: "20+", miss:"0", happy:"", disc:"90+", tech:"35", decode:"15", quota:"3"}));
Digimons.set("orgemon" , CreateDigimon({estagio: "Champion", nome: "orgemon", hp:" ", mp:"", atk:"100", def:"", spd:"", int:"60", peso: "22+", miss:"1+", happy:"", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("gaogamon" , CreateDigimon({estagio: "Champion", nome: "gaogamon", hp:" ", mp:"", atk:"80", def:"", spd:"120", int:"", peso: "18+", miss:"1-", happy:"", disc:"90+", tech:"14", decode:"7", quota:"3"}));
Digimons.set("kabuterimon" , CreateDigimon({estagio: "Champion", nome: "kabuterimon", hp:" 800", mp:"", atk:"80", def:"90", spd:"", int:"", peso: "25+", miss:"10-", happy:"80+", disc:"", tech:"35", decode:"15", quota:"3"}));
Digimons.set("garurumon" , CreateDigimon({estagio: "Champion", nome: "garurumon", hp:" 1000", mp:"", atk:"", def:"70", spd:"80", int:"", peso: "23+", miss:"3-", happy:"75+", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("guardromon" , CreateDigimon({estagio: "Champion", nome: "guardromon", hp:" 800", mp:"", atk:"", def:"120", spd:"", int:"80", peso: "27+", miss:"10-", happy:"", disc:"", tech:"28", decode:"12", quota:"3"}));
Digimons.set("kyubimon" , CreateDigimon({estagio: "Champion", nome: "kyubimon", hp:" ", mp:"900", atk:"90", def:"", spd:"160", int:"", peso: "19+", miss:"3-", happy:"", disc:"", tech:"28", decode:"12", quota:"3"}));
Digimons.set("growmon" , CreateDigimon({estagio: "Champion", nome: "growmon", hp:" 800", mp:"", atk:"100", def:"70", spd:"", int:"", peso: "24+", miss:"5-", happy:"", disc:"90+", tech:"35", decode:"15", quota:"3"}));
Digimons.set("greymon" , CreateDigimon({estagio: "Champion", nome: "greymon", hp:" 1000", mp:"", atk:"80", def:"80", spd:"", int:"", peso: "25+", miss:"3-", happy:"60+", disc:"", tech:"28", decode:"12", quota:"3"}));
Digimons.set("kuwagamon" , CreateDigimon({estagio: "Champion", nome: "kuwagamon", hp:" ", mp:"", atk:"100", def:"60", spd:"", int:"", peso: "22+", miss:"1+", happy:"", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("centalmon" , CreateDigimon({estagio: "Champion", nome: "centalmon", hp:" 800", mp:"", atk:"", def:"", spd:"90", int:"", peso: "27+", miss:"5-", happy:"", disc:"70+", tech:"14", decode:"7", quota:"3"}));
Digimons.set("sunflowmon" , CreateDigimon({estagio: "Champion", nome: "sunflowmon", hp:" ", mp:"800", atk:"", def:"", spd:"", int:"80", peso: "20+", miss:"3-", happy:"80+", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("geogreymon" , CreateDigimon({estagio: "Champion", nome: "geogreymon", hp:" ", mp:"", atk:"120", def:"", spd:"80", int:"60", peso: "28+", miss:"5-", happy:"", disc:"", tech:"35", decode:"15", quota:"3"}));
Digimons.set("seadramon" , CreateDigimon({estagio: "Champion", nome: "seadramon", hp:" ", mp:"", atk:"", def:"80", spd:"", int:"90", peso: "24+", miss:"10-", happy:"60+", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("stingmon" , CreateDigimon({estagio: "Champion", nome: "stingmon", hp:" ", mp:"", atk:"115", def:"", spd:"180", int:"", peso: "20+", miss:"5-", happy:"", disc:"90+", tech:"35", decode:"15", quota:"3"}));
Digimons.set("tyranomon" , CreateDigimon({estagio: "Champion", nome: "tyranomon", hp:" 1000", mp:"", atk:"130", def:"50", spd:"", int:"", peso: "25+", miss:"5-", happy:"", disc:"70-", tech:"14", decode:"7", quota:"3"}));
Digimons.set("tailmon" , CreateDigimon({estagio: "Champion", nome: "tailmon", hp:" ", mp:"1000", atk:"", def:"80", spd:"", int:"60", peso: "10+", miss:"1-", happy:"", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("devimon" , CreateDigimon({estagio: "Champion", nome: "devimon", hp:" ", mp:"", atk:"100", def:"", spd:"", int:"100", peso: "20+", miss:"3+", happy:"", disc:"70-", tech:"35", decode:"15", quota:"3"}));
Digimons.set("togemon" , CreateDigimon({estagio: "Champion", nome: "togemon", hp:" 1000", mp:"", atk:"80", def:"", spd:"60", int:"", peso: "28+", miss:"5-", happy:"", disc:"60+", tech:"14", decode:"7", quota:"3"}));
Digimons.set("dorugamon" , CreateDigimon({estagio: "Champion", nome: "dorugamon", hp:" 1800", mp:"1300", atk:"160", def:"160", spd:"150", int:"", peso: "24+", miss:"5-", happy:"", disc:"", tech:"35", decode:"15", quota:"3"}));
Digimons.set("bakemon" , CreateDigimon({estagio: "Champion", nome: "bakemon", hp:" ", mp:"800", atk:"", def:"", spd:"", int:"100", peso: "16+", miss:"2+", happy:"80+", disc:"", tech:"28", decode:"12", quota:"3"}));
Digimons.set("birdramon" , CreateDigimon({estagio: "Champion", nome: "birdramon", hp:" ", mp:"700", atk:"", def:"", spd:"90", int:"60", peso: "21+", miss:"3+", happy:"", disc:"", tech:"35", decode:"15", quota:"3"}));
Digimons.set("v-dramon" , CreateDigimon({estagio: "Champion", nome: "v-dramon", hp:" ", mp:"", atk:"160", def:"", spd:"150", int:"", peso: "22+", miss:"5-", happy:"80+", disc:"", tech:"35", decode:"15", quota:"3"}));
Digimons.set("blacktailmon" , CreateDigimon({estagio: "Champion", nome: "blacktailmon", hp:" 1000", mp:"", atk:"60", def:"", spd:"80", int:"", peso: "10+", miss:"2+", happy:"", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("vegimon" , CreateDigimon({estagio: "Champion", nome: "vegimon", hp:" ", mp:"600", atk:"", def:"", spd:"", int:"80", peso: "18+", miss:"5-", happy:"75+", disc:"", tech:"14", decode:"7", quota:"3"}));
Digimons.set("meramon" , CreateDigimon({estagio: "Champion", nome: "meramon", hp:" 700", mp:"", atk:"110", def:"", spd:"70", int:"", peso: "20+", miss:"10-", happy:"", disc:"", tech:"28", decode:"12", quota:"3"}));
Digimons.set("leomon" , CreateDigimon({estagio: "Champion", nome: "leomon", hp:" 600", mp:"", atk:"80", def:"", spd:"", int:"60", peso: "24+", miss:"5-", happy:"", disc:"", tech:"35", decode:"15", quota:"3"}));
//Digimons Erros
Digimons.set("numemon", CreateDigimon({estagio: "Champion", nome: "numemon", hp:"1500", peso:"20 or more", miss:"10 or less"}));
Digimons.set("scumon", CreateDigimon({estagio: "Champion", nome: "scumon"}));

// Perfect
Digimons.set("lucemonfm", CreateDigimon({estagio: "Perfect", nome: "rucemonfalldownmode", quota: 4, hp: "4500", mp: "4000", atk: "450", def: "380", spd: "420", int: "680", peso:"40 or more", miss: "3 or less", tech: "55 or more", decode:"20+ req" }));
Digimons.set("atlurkabuterimon" , CreateDigimon({estagio: "Perfect", nome: "atlurkabuterimon", hp:" 2600", mp:"", atk:"160", def:"280", spd:"200", int:"", peso: "36+", miss:"10-", happy:"80+", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("andromon" , CreateDigimon({estagio: "Perfect", nome: "andromon", hp:" 1700", mp:"", atk:"280", def:"210", spd:"", int:"240", peso: "44+", miss:"5-", happy:"", disc:"80+", tech:"30", decode:"15", quota:"5"}));
Digimons.set("vamdemon" , CreateDigimon({estagio: "Perfect", nome: "vamdemon", hp:" 2300", mp:"1400", atk:"220", def:"150", spd:"190", int:"350", peso: "34+", miss:"4+", happy:"", disc:"60-", tech:"40", decode:"16", quota:"5"}));
Digimons.set("earov-dramon" , CreateDigimon({estagio: "Perfect", nome: "earov-dramon", hp:" 2400", mp:"", atk:"340", def:"240", spd:"340", int:"", peso: "46+", miss:"5-", happy:"", disc:"", tech:"49", decode:"18", quota:"5"}));
Digimons.set("etemon" , CreateDigimon({estagio: "Perfect", nome: "etemon", hp:" 2800", mp:"1000", atk:"220", def:"240", spd:"350", int:"180", peso: "33+", miss:"2+", happy:"80+", disc:"", tech:"30", decode:"15", quota:"5"}));
Digimons.set("angewomon" , CreateDigimon({estagio: "Perfect", nome: "angewomon", hp:" ", mp:"1900", atk:"180", def:"210", spd:"320", int:"", peso: "35+", miss:"0", happy:"80+", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("okuwamon" , CreateDigimon({estagio: "Perfect", nome: "okuwamon", hp:" 2500", mp:"", atk:"320", def:"180", spd:"", int:"80", peso: "48+", miss:"15-", happy:"", disc:"", tech:"30", decode:"15", quota:"5"}));
Digimons.set("garudamon" , CreateDigimon({estagio: "Perfect", nome: "garudamon", hp:" ", mp:"1800", atk:"", def:"140", spd:"310", int:"270", peso: "46+", miss:"10-", happy:"", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("gigadramon" , CreateDigimon({estagio: "Perfect", nome: "gigadramon", hp:" 2500", mp:"1700", atk:"250", def:"250", spd:"220", int:"180", peso: "60+", miss:"10-", happy:"", disc:"", tech:"49", decode:"18", quota:"5"}));
Digimons.set("grappuleomon" , CreateDigimon({estagio: "Perfect", nome: "grappuleomon", hp:" 1600", mp:"", atk:"280", def:"140", spd:"320", int:"", peso: "44+", miss:"5-", happy:"", disc:"", tech:"30", decode:"15", quota:"5"}));
Digimons.set("jyureimon" , CreateDigimon({estagio: "Perfect", nome: "jyureimon", hp:" ", mp:"2300", atk:"", def:"290", spd:"", int:"280", peso: "52+", miss:"10-", happy:"", disc:"80+", tech:"40", decode:"16", quota:"5"}));
Digimons.set("skullgreymon" , CreateDigimon({estagio: "Perfect", nome: "skullgreymon", hp:" 2800", mp:"", atk:"380", def:"220", spd:"210", int:"", peso: "55+", miss:"6+", happy:"", disc:"40-", tech:"40", decode:"16", quota:"5"}));
Digimons.set("zudomon" , CreateDigimon({estagio: "Perfect", nome: "zudomon", hp:" 2900", mp:"", atk:"230", def:"220", spd:"", int:"160", peso: "53+", miss:"3-", happy:"", disc:"80+", tech:"30", decode:"15", quota:"5"}));
Digimons.set("taomon" , CreateDigimon({estagio: "Perfect", nome: "taomon", hp:" ", mp:"2100", atk:"150", def:"", spd:"190", int:"350", peso: "33+", miss:"0", happy:"", disc:"90+", tech:"40", decode:"16", quota:"5"}));
Digimons.set("digitamamon" , CreateDigimon({estagio: "Perfect", nome: "digitamamon", hp:" 2700", mp:"2100", atk:"180", def:"190", spd:"210", int:"230", peso: "32+", miss:"10-", happy:"", disc:"40-", tech:"49", decode:"18", quota:"5"}));
Digimons.set("deathmeramon" , CreateDigimon({estagio: "Perfect", nome: "deathmeramon", hp:" 2500", mp:"", atk:"380", def:"140", spd:"", int:"120", peso: "52+", miss:"2+", happy:"", disc:"", tech:"30", decode:"15", quota:"5"}));
Digimons.set("doruguremon" , CreateDigimon({estagio: "Perfect", nome: "doruguremon", hp:" 3200", mp:"1700", atk:"300", def:"320", spd:"270", int:"210", peso: "55+", miss:"10-", happy:"", disc:"", tech:"49", decode:"18", quota:"5"}));
Digimons.set("paildramon" , CreateDigimon({estagio: "Perfect", nome: "paildramon", hp:" ", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("panjyamon" , CreateDigimon({estagio: "Perfect", nome: "panjyamon", hp:" 2300", mp:"", atk:"260", def:"200", spd:"210", int:"", peso: "46+", miss:"5-", happy:"", disc:"", tech:"30", decode:"15", quota:"5"}));
Digimons.set("picklemon" , CreateDigimon({estagio: "Perfect", nome: "picklemon", hp:" ", mp:"2100", atk:"260", def:"380", spd:"270", int:"", peso: "30+", miss:"5-", happy:"95+", disc:"", tech:"49", decode:"15", quota:"5"}));
Digimons.set("bluemeramon" , CreateDigimon({estagio: "Perfect", nome: "bluemeramon", hp:" 1700", mp:"", atk:"350", def:"180", spd:"100", int:"", peso: "33+", miss:"15-", happy:"", disc:"", tech:"30", decode:"16", quota:"5"}));
Digimons.set("vademon" , CreateDigimon({estagio: "Perfect", nome: "vademon", hp:" ", mp:"2300", atk:"210", def:"150", spd:"", int:"260", peso: "38+", miss:"15-", happy:"", disc:"60-", tech:"30", decode:"15", quota:"5"}));
Digimons.set("holyangemon" , CreateDigimon({estagio: "Perfect", nome: "holyangemon", hp:" 1900", mp:"", atk:"", def:"300", spd:"170", int:"240", peso: "37+", miss:"0", happy:"", disc:"90+", tech:"40+", decode:"16", quota:"5"}));
Digimons.set("machgaogamon" , CreateDigimon({estagio: "Perfect", nome: "machgaogamon", hp:" 1800", mp:"", atk:"230", def:"330", spd:"", int:"160", peso: "32+", miss:"5-", happy:"", disc:"90+", tech:"40", decode:"16", quota:"5"}));
Digimons.set("mamemon" , CreateDigimon({estagio: "Perfect", nome: "mamemon", hp:" 1800", mp:"1400", atk:"210", def:"", spd:"310", int:"", peso: "20+", miss:"10-", happy:"80+", disc:"", tech:"40", decode:"15", quota:"5"}));
Digimons.set("megaseadramon" , CreateDigimon({estagio: "Perfect", nome: "megaseadramon", hp:" ", mp:"2300", atk:"180", def:"170", spd:"", int:"290", peso: "36+", miss:"10-", happy:"", disc:"", tech:"30", decode:"18", quota:"5"}));
Digimons.set("megadramon" , CreateDigimon({estagio: "Perfect", nome: "megadramon", hp:" 1700", mp:"2300", atk:"300", def:"170", spd:"210", int:"200", peso: "52+", miss:"10-", happy:"", disc:"", tech:"49", decode:"16", quota:"5"}));
Digimons.set("megalogrowmon" , CreateDigimon({estagio: "Perfect", nome: "megalogrowmon", hp:" 2600", mp:"", atk:"230", def:"300", spd:"", int:"130", peso: "53+", miss:"5-", happy:"", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("metalgreymon-v" , CreateDigimon({estagio: "Perfect", nome: "metalgreymon-v", hp:" 2500", mp:"", atk:"280", def:"190", spd:"190", int:"", peso: "53+", miss:"5-", happy:"", disc:"95+", tech:"40", decode:"16", quota:"5"}));
Digimons.set("metaltyranomon" , CreateDigimon({estagio: "Perfect", nome: "metaltyranomon", hp:" 2200", mp:"", atk:"310", def:"210", spd:"160", int:"", peso: "55+", miss:"0", happy:"", disc:"70+", tech:"40", decode:"16", quota:"5"}));
Digimons.set("metalmamemon" , CreateDigimon({estagio: "Perfect", nome: "metalmamemon", hp:" 1600", mp:"", atk:"310", def:"220", spd:"", int:"210", peso: "35+", miss:"10-", happy:"", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("monzaemon" , CreateDigimon({estagio: "Perfect", nome: "monzaemon", hp:" 2800", mp:"1200", atk:"180", def:"250", spd:"160", int:"160", peso: "48+", miss:"0", happy:"", disc:"", tech:"49", decode:"18", quota:"5"}));
Digimons.set("rizegreymon" , CreateDigimon({estagio: "Perfect", nome: "rizegreymon", hp:" 2100", mp:"", atk:"310", def:"240", spd:"", int:"160", peso: "48+", miss:"5-", happy:"", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("lilamon" , CreateDigimon({estagio: "Perfect", nome: "lilamon", hp:" ", mp:"2600", atk:"", def:"180", spd:"210", int:"250", peso: "35-", miss:"5-", happy:"80+", disc:"", tech:"30", decode:"15", quota:"5"}));
Digimons.set("lilimon" , CreateDigimon({estagio: "Perfect", nome: "lilimon", hp:" ", mp:"2400", atk:"190", def:"", spd:"220", int:"250", peso: "30-", miss:"10-", happy:"", disc:"", tech:"40", decode:"15", quota:"5"}));
Digimons.set("ladydevimon" , CreateDigimon({estagio: "Perfect", nome: "ladydevimon", hp:" ", mp:"2000", atk:"210", def:"", spd:"320", int:"160", peso: "33-", miss:"4+", happy:"80+", disc:"", tech:"40", decode:"16", quota:"5"}));
Digimons.set("warumonzaemon" , CreateDigimon({estagio: "Perfect", nome: "warumonzaemon", hp:" 3000", mp:"2500", atk:"250", def:"200", spd:"200", int:"250", peso: "50+", miss:"3+", happy:"", disc:"", tech:"49", decode:"18", quota:"5"}));
Digimons.set("weregarrumon" , CreateDigimon({estagio: "Perfect", nome: "weregarrumon", hp:" 2700", mp:"", atk:"210", def:"180", spd:"240", int:"", peso: "43+", miss:"5-", happy:"80+", disc:"", tech:"40", decode:"16", quota:"5"}));
//Megas
Digimons.set("Alphamon" , CreateDigimon({estagio: "Mega", nome: "Alphamon", hp:" 6700", mp:"3700", atk:"570", def:"620", spd:"530", int:"520", peso: "48+", miss:"1-", happy:"", disc:"", tech:"55+", decode:"20+", quota:"8"}));
Digimons.set("UlforceVdramon" , CreateDigimon({estagio: "Mega", nome: "UlforceVdramon", hp:" 5700", mp:"4600", atk:"600", def:"470", spd:"680", int:"500", peso: "50+", miss:"1-", happy:"", disc:"", tech:"55+", decode:"20+", quota:"8"}));
Digimons.set("imperialdramonfightermode" , CreateDigimon({estagio: "Mega", nome: "imperialdramonfightermode", hp:" 7200", mp:"4600", atk:"680", def:"570", spd:"630", int:"540", peso: "50+", miss:"1-", happy:"", disc:"", tech:"55+", decode:"20+", quota:"8"}));
Digimons.set("Vikemon" , CreateDigimon({estagio: "Mega", nome: "Vikemon", hp:" 6000", mp:"", atk:"420", def:"440", spd:"", int:"380", peso: "53+", miss:"5-", happy:"75+", disc:"", tech:"30+", decode:"15+", quota:"6"}));
Digimons.set("WarGreymon" , CreateDigimon({estagio: "Mega", nome: "WarGreymon", hp:" 4500", mp:"2500", atk:"", def:"420", spd:"380", int:"360", peso: "40+", miss:"10-", happy:"", disc:"95+", tech:"40+", decode:"16+", quota:"8"}));
Digimons.set("Ofanimon" , CreateDigimon({estagio: "Mega", nome: "Ofanimon", hp:" 5800", mp:"3700", atk:"", def:"490", spd:"", int:"560", peso: "45-", miss:"0", happy:"", disc:"95+", tech:"50+", decode:"18+", quota:"6"}));
Digimons.set("GranKuwagamon" , CreateDigimon({estagio: "Mega", nome: "GranKuwagamon", hp:" 4500", mp:"3200", atk:"580", def:"480", spd:"", int:"", peso: "52+", miss:"10-", happy:"", disc:"55-", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("Sakuyamon" , CreateDigimon({estagio: "Mega", nome: "Sakuyamon", hp:" ", mp:"3900", atk:"340", def:"", spd:"490", int:"680", peso: "40-", miss:"0", happy:"", disc:"90+", tech:"50+", decode:"18+", quota:"6"}));
Digimons.set("SaberLeomon" , CreateDigimon({estagio: "Mega", nome: "SaberLeomon", hp:" 4500", mp:"", atk:"590", def:"390", spd:"640", int:"", peso: "50+", miss:"10-", happy:"", disc:"", tech:"50+", decode:"18+", quota:"6"}));
Digimons.set("ShineGreymon" , CreateDigimon({estagio: "Mega", nome: "ShineGreymon", hp:" 4000", mp:"4200", atk:"600", def:"", spd:"520", int:"400", peso: "48+", miss:"5-", happy:"75+", disc:"", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("zdGarurumon" , CreateDigimon({estagio: "Mega", nome: "zdGarurumon", hp:" 5000", mp:"", atk:"460", def:"410", spd:"530", int:"", peso: "45+", miss:"10-", happy:"", disc:"", tech:"50+", decode:"18+", quota:"6"}));
Digimons.set("Seraphimon" , CreateDigimon({estagio: "Mega", nome: "Seraphimon", hp:" 4000", mp:"", atk:"600", def:"", spd:"500", int:"500", peso: "46+", miss:"0", happy:"90+", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("Titamon" , CreateDigimon({estagio: "Mega", nome: "Titamon", hp:" 6000", mp:"3200", atk:"700", def:"400", spd:"400", int:"", peso: "62+", miss:"2+", happy:"", disc:"", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Darkdramon" , CreateDigimon({estagio: "Mega", nome: "Darkdramon", hp:" ", mp:"6500", atk:"550", def:"400", spd:"430", int:"680", peso: "55+", miss:"10-", happy:"", disc:"", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Dukemon" , CreateDigimon({estagio: "Mega", nome: "Dukemon", hp:" 5000", mp:"2500", atk:"500", def:"600", spd:"", int:"550", peso: "40+", miss:"5-", happy:"75+", disc:"", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Hiandromon" , CreateDigimon({estagio: "Mega", nome: "Hiandromon", hp:" 4300", mp:"", atk:"540", def:"480", spd:"", int:"420", peso: "62+", miss:"5-", happy:"", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("Barbamon" , CreateDigimon({estagio: "Mega", nome: "Barbamon", hp:" 5000", mp:"8000", atk:"650", def:"650", spd:"550", int:"850", peso: "50-", miss:"5+", happy:"", disc:"20-", tech:"55+", decode:"20+", quota:"8"}));
Digimons.set("BanchoLeomon" , CreateDigimon({estagio: "Mega", nome: "BanchoLeomon", hp:" 4800", mp:"", atk:"460", def:"400", spd:"350", int:"420", peso: "40+", miss:"0", happy:"", disc:"", tech:"50+", decode:"18+", quota:"7"}));
Digimons.set("Piemon" , CreateDigimon({estagio: "Mega", nome: "Piemon", hp:" 5900", mp:"4100", atk:"450", def:"420", spd:"450", int:"520", peso: "46+", miss:"3+", happy:"", disc:"45-", tech:"55+", decode:"20+", quota:"8"}));
Digimons.set("VictoryGreymon" , CreateDigimon({estagio: "Mega", nome: "VictoryGreymon", hp:" 5000", mp:"", atk:"620", def:"540", spd:"", int:"340", peso: "52+", miss:"10-", happy:"", disc:"", tech:"50+", decode:"18+", quota:"6"}));
Digimons.set("Pinochimon" , CreateDigimon({estagio: "Mega", nome: "Pinochimon", hp:" 5200", mp:"4000", atk:"", def:"", spd:"420", int:"480", peso: "42+", miss:"10-", happy:"75+", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("PlatinumNumemon" , CreateDigimon({estagio: "Mega", nome: "PlatinumNumemon", hp:" 5200", mp:"3200", atk:"", def:"550", spd:"", int:"480", peso: "49+", miss:"15-", happy:"90+", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("PrinceMamemon" , CreateDigimon({estagio: "Mega", nome: "PrinceMamemon", hp:" 5300", mp:"", atk:"", def:"350", spd:"550", int:"420", peso: "35-", miss:"3-", happy:"100+", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("heraklekabuterimon" , CreateDigimon({estagio: "Mega", nome: "heraklekabuterimon", hp:" 5500", mp:"", atk:"370", def:"560", spd:"360", int:"", peso: "48+", miss:"5-", happy:"", disc:"80+", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("Beelzebumon" , CreateDigimon({estagio: "Mega", nome: "Beelzebumon", hp:" 5000", mp:"4000", atk:"650", def:"", spd:"650", int:"450", peso: "44+", miss:"5+", happy:"55-", disc:"", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Hououmon" , CreateDigimon({estagio: "Mega", nome: "Hououmon", hp:" 2500", mp:"3800", atk:"", def:"340", spd:"380", int:"490", peso: "33+", miss:"10-", happy:"", disc:"100+", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Boltmon" , CreateDigimon({estagio: "Mega", nome: "Boltmon", hp:" 4800", mp:"", atk:"600", def:"420", spd:"", int:"320", peso: "58+", miss:"15-", happy:"", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("Magnamon" , CreateDigimon({estagio: "Mega", nome: "Magnamon", hp:" 6200", mp:"", atk:"550", def:"800", spd:"650", int:"", peso: "42+", miss:"5-", happy:"", disc:"80+", tech:"50+", decode:"18+", quota:"6"}));
Digimons.set("marinangemon" , CreateDigimon({estagio: "Mega", nome: "marinangemon", hp:" ", mp:"3800", atk:"", def:"380", spd:"420", int:"500", peso: "40-", miss:"0", happy:"", disc:"80+", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("MirageGaogamon" , CreateDigimon({estagio: "Mega", nome: "MirageGaogamon", hp:" 3500", mp:"", atk:"550", def:"320", spd:"680", int:"", peso: "38+", miss:"5-", happy:"", disc:"90+", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("MugenDramon" , CreateDigimon({estagio: "Mega", nome: "MugenDramon", hp:" 6200", mp:"4200", atk:"750", def:"580", spd:"420", int:"500", peso: "65+", miss:"3+", happy:"", disc:"", tech:"55+", decode:"20+", quota:"8"}));
Digimons.set("MetalEtemon" , CreateDigimon({estagio: "Mega", nome: "MetalEtemon", hp:" 4400", mp:"3200", atk:"410", def:"640", spd:"530", int:"380", peso: "45+", miss:"4+", happy:"80+", disc:"", tech:"40+", decode:"16+", quota:"8"}));
Digimons.set("MetalGarurumon" , CreateDigimon({estagio: "Mega", nome: "MetalGarurumon", hp:" 4500", mp:"", atk:"380", def:"520", spd:"550", int:"", peso: "43+", miss:"5-", happy:"80+", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("MetalSeadramon" , CreateDigimon({estagio: "Mega", nome: "MetalSeadramon", hp:" 4500", mp:"", atk:"350", def:"", spd:"450", int:"580", peso: "49+", miss:"10-", happy:"80+", disc:"", tech:"40+", decode:"16+", quota:"6"}));
Digimons.set("RustTyranomon" , CreateDigimon({estagio: "Mega", nome: "RustTyranomon", hp:" 5600", mp:"3600", atk:"680", def:"420", spd:"400", int:"", peso: "65+", miss:"0", happy:"", disc:"", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Lilithmon" , CreateDigimon({estagio: "Mega", nome: "Lilithmon", hp:" 4600", mp:"", atk:"580", def:"440", spd:"520", int:"650", peso: "40-", miss:"5+", happy:"", disc:"80+", tech:"40+", decode:"16+", quota:"7"}));
Digimons.set("Rosemon" , CreateDigimon({estagio: "Mega", nome: "Rosemon", hp:" 3300", mp:"4600", atk:"", def:"", spd:"490", int:"560", peso: "42-", miss:"5-", happy:"", disc:"80+", tech:"30+", decode:"15+", quota:"6"}));
////
Digimons.set("Omegamon",  CreateDigimon({estagio: "Mega", nome: "Omegamon", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("Chaosmon",  CreateDigimon({estagio: "Mega", nome: "Chaosmon", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("Omegamon-x", CreateDigimon({estagio: "Mega", nome: "Omegamon-x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("Rosemon_x", CreateDigimon({estagio: "Mega", nome: "Rosemon_x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("Dukemon_x", CreateDigimon({estagio: "Mega", nome: "Dukemon_x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("WarGreymon_x", CreateDigimon({estagio: "Mega", nome: "WarGreymon_x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("UlforceVdramon_x", CreateDigimon({estagio: "Mega", nome: "UlforceVdramon_x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("Beelzebumon_x", CreateDigimon({estagio: "Mega", nome: "Beelzebumon_x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
Digimons.set("Magnamon_x", CreateDigimon({estagio: "Mega", nome: "Magnamon_x", hp:"", mp:"", atk:"", def:"", spd:"", int:"", peso: "", miss:"", happy:"", disc:"", tech:"", decode:"", quota:""}));
        
// Arvore de Evolução
export const Evolucoes = new Map();
//Eggs -> children
Evolucoes.set("Red-Egg", ['gigimon'])
Evolucoes.set("Yellow-Egg", ['koromon'])
Evolucoes.set("Grey-Egg", ['tunomon'])
Evolucoes.set("Purple-Egg", ['tokomon'])
Evolucoes.set("Green-Egg", ['budmon'])
Evolucoes.set("Peach-Egg", ['mochimon'])
Evolucoes.set("Blue-Egg", ['wanyamon'])
// Children -> Rookie
Evolucoes.set("gigimon", ["guilmon", "candmon", "dorumon", "agumon", "hagurumon"]);
Evolucoes.set("koromon", ['agumon', 'guilmon', 'gabumon', 'goburimon', 'tyumon']);
Evolucoes.set("tunomon", ['gabumon', 'picodevimon', 'gomamon', 'betamon', 'v-mon']);
Evolucoes.set("tokomon", ['gabumon', 'tentomon', 'kamemon', 'patamon', 'lucemon']);
Evolucoes.set("budmon", ['lalamon', 'piyomon', 'palmon', 'wormmon', 'betamon']);
Evolucoes.set("mochimon", ['hagurumon', 'tentomon', 'lalamon', 'piyomon', 'impmon']);
Evolucoes.set("wanyamon", ['gaomon', 'patamon', 'gomamon', 'renamon', 'plotmon']);

// Rookie -> Champion
Evolucoes.set("agumon", ['greymon', 'geogreymon', 'tyranomon','angemon', 'birdramon']);
Evolucoes.set("impmon", ['devimon','airdramon', 'bakemon', 'kyubimon', 'vegimon']);
Evolucoes.set("gaomon", ['gaogamon', 'garurumon', 'leomon', 'geogreymon', 'orgemon']);
Evolucoes.set("gabumon", ['garurumon', 'leomon', 'growmon', 'blacktailmon', 'greymon']);
Evolucoes.set("kamemon", ['seadramon','ikkakumon','guardromon', 'kabuterimon', 'tailmon']);
Evolucoes.set("candmon", ['meramon', 'birdramon', 'bakemon', 'geogreymon', 'growmon']);
Evolucoes.set("guilmon", ['growmon', 'tyranomon', 'geogreymon', 'meramon', 'devimon']);
Evolucoes.set("goburimon", ['orgemon', 'tyranomon', 'kuwagamon', 'stingmon', 'gaogamon']);
Evolucoes.set("gomamon", ['ikkakumon', 'seadramon', 'gaogamon', 'leomon', "xv-mon"]);
Evolucoes.set("tyumon", ['orgemon', 'tyranomon', 'bakemon', 'tailmon']);
Evolucoes.set("tentomon", ['kabuterimon', 'kuwagamon', 'stingmon', 'sunflowmon', "airdramon"]);
Evolucoes.set("dorumon", ['dorugamon', "xv-mon", 'centalmon', 'guardromon', 'garurumon']);
Evolucoes.set("hagurumon", ['guardromon', 'kabuterimon', 'kuwagamon', 'ikkakumon', 'meramon']);
Evolucoes.set("patamon", ['airdramon', 'angemon', 'birdramon', 'tailmon', 'v-dramon']);
Evolucoes.set("palmon", ['woodmon', 'togemon', 'sunflowmon', 'vegimon', 'centalmon']);
Evolucoes.set("picodevimon", ['devimon', 'bakemon', 'blacktailmon', 'greymon', 'togemon']);
Evolucoes.set("piyomon", ['airdramon', 'angemon', 'v-dramon', 'kyubimon', 'birdramon']);
Evolucoes.set("v-mon", ["xv-mon", 'v-dramon', 'gaogamon', 'greymon', 'meramon']);
Evolucoes.set("plotmon", ['tailmon', 'blacktailmon', 'leomon', 'centalmon', 'guardromon']);
Evolucoes.set("betamon", ['ikkakumon', 'seadramon', 'sunflowmon', 'vegimon', 'orgemon']);
Evolucoes.set("lalamon", ['sunflowmon', 'vegimon', 'togemon', 'seadramon','woodmon']);
Evolucoes.set("lucemon", ['lucemonfm','angemon', 'devimon']);
Evolucoes.set("renamon", ['woodmon', 'kyubimon', 'garurumon', 'blacktailmon', 'growmon']);
Evolucoes.set("wormmon", ['stingmon', 'kuwagamon', 'kabuterimon', 'togemon','woodmon']);

// Champions -> Perfect
Evolucoes.set("ikkakumon", ["zudomon", "gigadramon", 'mamemon']);
Evolucoes.set("woodmon", ['jyureimon', 'lilamon', 'taomon']);
Evolucoes.set("airdramon", ['megadramon', 'megaseadramon', 'garudamon']);
Evolucoes.set("xv-mon", ['paildramon', 'earov-dramon', 'rizegreymon']);
Evolucoes.set("angemon", ['holyangemon', 'angewomon', 'vamdemon']);
Evolucoes.set("orgemon", ['digitamamon', 'warumonzaemon', 'etemon']); 
Evolucoes.set("gaogamon", ['machgaogamon', 'weregarrumon', 'grappuleomon']);
Evolucoes.set("kabuterimon", ['atlurkabuterimon', 'metalmamemon', 'vademon']);
Evolucoes.set("garurumon", ['weregarrumon', 'panjyamon', 'metalmamemon']);
Evolucoes.set("guardromon", ['andromon', 'metalmamemon', 'gigadramon']);
Evolucoes.set("kyubimon", ['taomon', 'monzaemon', 'ladydevimon']);
Evolucoes.set("growmon", ['megalogrowmon', 'skullgreymon', 'metaltyranomon']);
Evolucoes.set("greymon", ['metalgreymon-v', 'skullgreymon', 'metaltyranomon']);
Evolucoes.set("kuwagamon", ['okuwamon', 'picklemon', 'zudomon']);
Evolucoes.set("centalmon", ['holyangemon', 'taomon', 'andromon']);
Evolucoes.set("sunflowmon", ['lilamon', 'angewomon', 'atlurkabuterimon']);
Evolucoes.set("geogreymon", ['rizegreymon', 'megalogrowmon', 'gigadramon']);
Evolucoes.set("seadramon", ['megaseadramon', 'megadramon', 'earov-dramon']);
Evolucoes.set("stingmon", ['paildramon', 'okuwamon', 'metalgreymon-v']);
Evolucoes.set("tyranomon", ['metaltyranomon', 'skullgreymon', 'mamemon']);
Evolucoes.set("tailmon", ['angewomon', 'monzaemon', 'lilimon']);
Evolucoes.set("devimon", ['vamdemon', 'ladydevimon', 'deathmeramon']);
Evolucoes.set("togemon", ['lilimon', 'etemon', 'machgaogamon']);
Evolucoes.set("dorugamon", ['doruguremon']);
Evolucoes.set("bakemon", ['deathmeramon', 'warumonzaemon', 'bluemeramon']);
Evolucoes.set("birdramon", ['garudamon', 'megadramon', 'atlurkabuterimon']);
Evolucoes.set("v-dramon", ['earov-dramon', 'garudamon', 'picklemon']);
Evolucoes.set("blacktailmon", ['ladydevimon', 'warumonzaemon', 'holyangemon']);
Evolucoes.set("vegimon", ['jyureimon', 'digitamamon', 'picklemon']);
Evolucoes.set("meramon", ['bluemeramon', 'deathmeramon', 'vademon']);
Evolucoes.set("leomon", ['grappuleomon', 'panjyamon', 'mamemon']);
Evolucoes.set("numemon", ['monzaemon', 'etemon']);
Evolucoes.set("scumon", []);

// Perfect -> Ultimate
Evolucoes.set("lucemonfm", []);
Evolucoes.set("atlurkabuterimon" , ['heraklekabuterimon', 'Magnamon']);
Evolucoes.set("andromon" , ['Hiandromon', 'Boltmon']);
Evolucoes.set("vamdemon" , ['Beelzebumon', 'Barbamon']);
Evolucoes.set("earov-dramon" , ['UlforceVdramon']);
Evolucoes.set("etemon" , ['MetalEtemon', 'PlatinumNumemon']);
Evolucoes.set("angewomon" , ['Ofanimon', 'marinangemon']);
Evolucoes.set("okuwamon" , ['GranKuwagamon', 'heraklekabuterimon']);
Evolucoes.set("garudamon" , ['Hououmon', 'Seraphimon']);
Evolucoes.set("gigadramon" , ['Darkdramon', 'MugenDramon', 'MetalSeadramon']);
Evolucoes.set("grappuleomon" , ['BanchoLeomon', 'Vikemon']);
Evolucoes.set("jyureimon" , ['Pinochimon', 'GranKuwagamon']);
Evolucoes.set("skullgreymon" , ['WarGreymon', 'SaberLeomon']);
Evolucoes.set("zudomon" , ['Vikemon', 'SaberLeomon']);
Evolucoes.set("taomon" , ['Sakuyamon', 'Hououmon']);
Evolucoes.set("digitamamon" , ['Titamon','PrinceMamemon', 'Dukemon']);
Evolucoes.set("deathmeramon" , ['Barbamon', 'Beelzebumon']);
Evolucoes.set("doruguremon" , ['Alphamon']);
Evolucoes.set("paildramon" , ['imperialdramonfightermode', 'Magnamon']);
Evolucoes.set("panjyamon" , ['SaberLeomon', 'Sakuyamon']);
Evolucoes.set("picklemon" , ['marinangemon', 'Piemon']);
Evolucoes.set("bluemeramon" , ['Boltmon', 'Piemon']);
Evolucoes.set("vademon" , ['Hiandromon', 'heraklekabuterimon']);
Evolucoes.set("holyangemon" , ['Seraphimon', 'Ofanimon']);
Evolucoes.set("machgaogamon" , ['MirageGaogamon','BanchoLeomon', 'zdGarurumon']);
Evolucoes.set("mamemon" , ['PrinceMamemon', 'Pinochimon']);
Evolucoes.set("megaseadramon" , ['MetalSeadramon', 'marinangemon']);
Evolucoes.set("megadramon" , ['Darkdramon','MetalGarurumon']);
Evolucoes.set("megalogrowmon" , ['Dukemon','RustTyranomon']);
Evolucoes.set("metalgreymon-v" , ['WarGreymon', 'VictoryGreymon']);
Evolucoes.set("metaltyranomon" , ['RustTyranomon', 'MugenDramon']);
Evolucoes.set("metalmamemon" , ['Hiandromon', 'MetalGarurumon']);
Evolucoes.set("monzaemon" , ['BanchoLeomon', 'MetalEtemon']);
Evolucoes.set("rizegreymon" , ['VictoryGreymon', 'ShineGreymon']);
Evolucoes.set("lilamon" , ['Rosemon', 'Lilithmon']);
Evolucoes.set("lilimon" , ['Rosemon', 'Sakuyamon']);
Evolucoes.set("ladydevimon" , ['Lilithmon', 'Rosemon']);
Evolucoes.set("warumonzaemon" , ['Beelzebumon', 'GranKuwagamon']);
Evolucoes.set("weregarrumon" , ['zdGarurumon', 'MetalGarurumon', 'MirageGaogamon']);
//Mega
Evolucoes.set("Alphamon" , []);
Evolucoes.set("UlforceVdramon" , ["UlforceVdramon_x"]);
Evolucoes.set("imperialdramonfightermode" , []);
Evolucoes.set("Vikemon" , []);
Evolucoes.set("WarGreymon" , ["Omegamon", "WarGreymon_x"]);
Evolucoes.set("Ofanimon" , []);
Evolucoes.set("GranKuwagamon" , []);
Evolucoes.set("Sakuyamon" , []);
Evolucoes.set("SaberLeomon" , []);
Evolucoes.set("ShineGreymon" , []);
Evolucoes.set("zdGarurumon" , []);
Evolucoes.set("Seraphimon" , []);
Evolucoes.set("Titamon" , []);
Evolucoes.set("Darkdramon" , ["Chaosmon"]);
Evolucoes.set("Dukemon" , ["Dukemon_x"]);
Evolucoes.set("Hiandromon" , []);
Evolucoes.set("Barbamon" , []);
Evolucoes.set("BanchoLeomon" , ["Chaosmon"]);
Evolucoes.set("Piemon" , []);
Evolucoes.set("VictoryGreymon" , []);
Evolucoes.set("Pinochimon" , []);
Evolucoes.set("PlatinumNumemon" , []);
Evolucoes.set("PrinceMamemon" , []);
Evolucoes.set("heraklekabuterimon" , []);
Evolucoes.set("Beelzebumon" , ["Beelzebumon_x"]);
Evolucoes.set("Hououmon" , []);
Evolucoes.set("Boltmon" , []);
Evolucoes.set("Magnamon" , ["Magnamon_x"]);
Evolucoes.set("marinangemon" , []);
Evolucoes.set("MirageGaogamon" , []);
Evolucoes.set("MugenDramon" , []);
Evolucoes.set("MetalEtemon" , []);
Evolucoes.set("MetalGarurumon" , ["Omegamon"]);
Evolucoes.set("MetalSeadramon" , []);
Evolucoes.set("RustTyranomon" , []);
Evolucoes.set("Lilithmon" , []);
Evolucoes.set("Rosemon" , ["Rosemon_x"]);
////
Evolucoes.set("Omegamon", ["Omegamon-x"]);
Evolucoes.set("Chaosmon", []);
Evolucoes.set("Omegamon-x", []);
Evolucoes.set("Rosemon_x", []);
Evolucoes.set("Dukemon_x", []);
Evolucoes.set("WarGreymon_x", []);
Evolucoes.set("UlforceVdramon_x", []);
Evolucoes.set("Beelzebumon_x", []);
Evolucoes.set("Magnamon_x", []);
                


// Rookies Names
export const Eggs    = ["Red-Egg", "Yellow-Egg", "Grey-Egg", "Purple-Egg", "Green-Egg", "Peach-Egg", "Blue-Egg"];
// Childs Names
export const Childs  = ["gigimon", "koromon", "tunomon", "tokomon", "budmon", "mochimon", "wanyamon"];
// Rookies Names
export const Rookies = ["agumon", "impmon", "gaomon", "gabumon", "kamemon", "candmon", 
                 "guilmon", "goburimon", "gomamon", "tyumon", "tentomon", "dorumon", 
                 "hagurumon", "patamon", "palmon", "picodevimon", "piyomon", "v-mon", 
                 "plotmon", "betamon", "lalamon", "lucemon", "renamon", "wormmon"];

// Champions Names
export const Champions = ["ikkakumon", "woodmon", "airdramon", "xv-mon", "angemon", 'orgemon',
                         'gaogamon', "kabuterimon", "garurumon", "guardromon", "kyubimon", "growmon",
                            "greymon", "kuwagamon", "centalmon", "sunflowmon", "geogreymon",
                            "seadramon", "stingmon", "tyranomon", "tailmon", "devimon", "togemon",
                            "dorugamon", "bakemon", "birdramon", "v-dramon", "blacktailmon",
                            "vegimon", "meramon", "leomon", 'numemon', 'scumon'
];
/// Perfect Names
export const Perfects = ["lucemonfm", "atlurkabuterimon","andromon","vamdemon","earov-dramon","etemon",
                        "angewomon","okuwamon","garudamon","gigadramon","grappuleomon","jyureimon",
                        "skullgreymon","zudomon","taomon","digitamamon","deathmeramon","doruguremon",
                        "paildramon","panjyamon","picklemon","bluemeramon","vademon","holyangemon",
                        "machgaogamon","mamemon","megaseadramon","megadramon","megalogrowmon","metalgreymon-v",
                        "metaltyranomon","metalmamemon","monzaemon","rizegreymon","lilamon","lilimon",
                        "ladydevimon","warumonzaemon","weregarrumon"
                    ];

/// Megas
export const Megas = ["Alphamon","UlforceVdramon","imperialdramonfightermode","Vikemon","WarGreymon","Ofanimon",
                     "GranKuwagamon","Sakuyamon","SaberLeomon","ShineGreymon","zdGarurumon","Seraphimon",
                     "Titamon","Darkdramon","Dukemon","Hiandromon","Barbamon","BanchoLeomon",
                     "Piemon","VictoryGreymon","Pinochimon","PlatinumNumemon","PrinceMamemon","heraklekabuterimon",
                     "Beelzebumon","Hououmon","Boltmon","Magnamon","marinangemon","MirageGaogamon",
                     "MugenDramon","MetalEtemon","MetalGarurumon","MetalSeadramon","RustTyranomon","Lilithmon",
                     "Rosemon",
                     "Omegamon", "Chaosmon",
                     "WarGreymon_x", "Omegamon-x", "Rosemon_x", "Dukemon_x", "UlforceVdramon_x",
                     "Beelzebumon_x", "Magnamon_x"
                    ];
/*

BlackWarGreymon
X Antibody	

*/

export const Req = new Map();
//rokie
Req.set("lucemon", "Clear the \"Final Nightmare\" in the Coliseum \"Heaven\'s Chamber\" after clearing the Demon King Chapter.");
//perfect
Req.set("garudamon", "Defeat sora twice in the Coliseum.");
Req.set("monzaemon", "Defeat monzaemon in the Vitium chapter.");
//mega
Req.set("Alphamon", "Defeat Yggdrasil in the X-Antibody arc.");
Req.set("UlforceVdramon", 'Complete the Demon King chapter.');
Req.set("WarGreymon", 'Defeat Taichi twice in the Coliseum');
Req.set("Seraphimon", "Defeat Seraphimon in the Colosseum.");
Req.set("Titamon", "Complete the Demon King chapter.");
Req.set("Dukemon", "Defeat Takato 3 times in the Coliseum (20F, 40F, 40F)");
Req.set("Barbamon", 'After clearing the Demon King chapter, clear \"The Final Nightmare\" in the Coliseum\'s \"Heaven\'s Chamber\".');
Req.set("Beelzebumon", 'Defeat Beelzebumon in the Vitium chapter');
Req.set("Magnamon", 'After clearing \"Battle against my Agumon!\" on the 1st floor of the Coliseum and \"Thank you for taking care of my brother\" on the 30th floor, defeat Magnamon on the 40th floor of the Coliseum.');
Req.set("MugenDramon", "Defeat Mugendramon on Mugen Mountain");
Req.set("MetalGarurumon", "Defeat Yamato twice in the Coliseum.");
Req.set("RustTyranomon", "Complete the Demon King chapter.");
Req.set("Lilithmon", "Defeat Lilithmon in the Demon Lord arc.");
//Especial Requeriment
Req.set("zdGarurumon", "Reincarnate From MetalGarurumon");
Req.set("VictoryGreymon", "Reincarnate From Dukemon");
//Jogress
Req.set("Omegamon", "Jogress: Have a WarGreymon equiped and a MetalGarurumon as current, or vice versa.");
Req.set("Chaosmon", "Jogress: Have a BanchoLeomon equiped and a DarkDramon as current, or vice versa.");
//Via Item
Req.set("Omegamon-x", "Use the x-Antibody on Omegamon.");
Req.set("Rosemon_x", "Use the x-Antibody on Rosemon.");
Req.set("Dukemon_x", "Use the x-Antibody on Dukemon.");
Req.set("WarGreymon_x", "Use the x-Antibody on WarGreymon.");
Req.set("UlforceVdramon_x", "Use the x-Antibody on UlforceVdramon.");
Req.set("Beelzebumon_x", "Use the x-Antibody on Beelzebumon.");
Req.set("Magnamon_x", "Use the x-Antibody on Magnamon.");



// Funcoes
export function CreateRowDigimon(Digimon, {w_name = true}){
    let hasTable = false;
    const table_row = document.createElement("tr");
    //nome
    const name_data = document.createElement("td");
    const name_link = document.createElement("a");
    name_link.setAttribute("class", "Digimon_link");
    let digiNome = Digimon.nome;
    
    name_data.appendChild(name_link);
    name_link.innerHTML = (Digimon.nome == '' ) ? "digimon" : Digimon.nome;
    if(Digimon.nome == "rucemonfalldownmode"){
        name_link.innerHTML = "lucemonfm";
        digiNome = "lucemonfm"
    }
    
    if(w_name == true){hasTable = true;}

    name_link.setAttribute("href", "#"+digiNome);
    //hp
    const hp_data = document.createElement("td");
    hp_data.innerHTML = (Digimon.hp == null || Digimon.hp == "") ? "-" : Digimon.hp;
    if(hp_data.innerHTML != "-"){hasTable = true;}
    //mp
    const mp_data = document.createElement("td");
    mp_data.innerHTML = (Digimon.mp == null || Digimon.mp == "") ? "-" : Digimon.mp;
    if(mp_data.innerHTML != "-"){hasTable = true;}
    //atk
    const atk_data = document.createElement("td");
    atk_data.innerHTML = (Digimon.atk == null || Digimon.atk == "") ? "-" : Digimon.atk;
    if(atk_data.innerHTML != "-"){hasTable = true;}
    //def
    const def_data = document.createElement("td");
    def_data.innerHTML = (Digimon.def == null || Digimon.def == "") ? "-" : Digimon.def;
    if(def_data.innerHTML != "-"){hasTable = true;}
    //spd
    const spd_data = document.createElement("td");
    spd_data.innerHTML = (Digimon.spd == null || Digimon.spd == "") ? "-" : Digimon.spd;
    if(spd_data.innerHTML != "-"){hasTable = true;}
    //brn
    const brn_data = document.createElement("td");
    brn_data.innerHTML = (Digimon.int == null || Digimon.int == "") ? "-" : Digimon.int;
    if(brn_data.innerHTML != "-"){hasTable = true;}
    //peso
    const peso_data = document.createElement("td");
    peso_data.innerHTML = (Digimon.peso == null || Digimon.peso == "") ? "-" : Digimon.peso;
    if(peso_data.innerHTML != "-"){hasTable = true;}
    //miss
    const miss_data = document.createElement("td");
    miss_data.innerHTML = (Digimon.miss == null || Digimon.miss == "") ? "-" : Digimon.miss;
    if(miss_data.innerHTML != "-"){hasTable = true;}
    //happy
    const happy_data = document.createElement("td");
    happy_data.innerHTML = (Digimon.happy == null || Digimon.happy == "") ? "-" : Digimon.happy;
    if(happy_data.innerHTML != "-"){hasTable = true;}
    //dis
    const disc_data = document.createElement("td");
    disc_data.innerHTML = (Digimon.disc == null || Digimon.disc == "") ? "-" : Digimon.disc;
    if(disc_data.innerHTML != "-"){hasTable = true;}
    //btl
    const btl_data = document.createElement("td");
    btl_data.innerHTML = (Digimon.btl == null || Digimon.btl == "") ? "-" : Digimon.btl;
    if(btl_data.innerHTML != "-"){hasTable = true;}
    //tech
    const tech_data = document.createElement("td");
    tech_data.innerHTML = (Digimon.tech == null || Digimon.tech == "") ? "-" : Digimon.tech;
    if(tech_data.innerHTML != "-"){hasTable = true;}
    //decode
    const decode_data = document.createElement("td");
    decode_data.innerHTML = (Digimon.decode == null || Digimon.decode == "") ? "-" : Digimon.decode;
    if(decode_data.innerHTML != "-"){hasTable = true;}
    //quota
    const quota_data = document.createElement("td");
    quota_data.innerHTML = (Digimon.quota == null || Digimon.quota == "") ? "-" : Digimon.quota;
    if(quota_data.innerHTML != "-"){hasTable = true;}

    if(w_name){
        table_row.appendChild(name_data);
    }
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
    if(hasTable){
        return table_row;
    }else{
        return null;
    }
}

export function CreateDigimonTable(digimon_name){
    const digimonSec = document.createElement("div");
    digimonSec.setAttribute("id", digimon_name);
    digimonSec.setAttribute("class", "Digimon_section");

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
    ImagemDigimon.src = Digimons.get(digimon_name).getImg();
    //tabela do digimon
    const tabela = document.createElement("table");
    tabela.setAttribute("class", "Digimon_table");
    //header da tabela
    const tableHeader = document.createElement("tr");
    tableHeader.setAttribute("class", "Table_header");
    //valores do header
    if(Digimons.get(digimon_name).estagio != "Mega"){
        const HeaderNames = ["Evolution", "HP", "MP", "Atk", "Def", "Spd", "Brn", "Weight", "Mistakes", "Happiness", "Discipline", "Battles", "Techs", "Decode", "Quota"];
        for (let i = 0; i < HeaderNames.length; i++){
            const header = document.createElement("th");
            header.innerHTML = HeaderNames[i];
            tableHeader.append(header);
        }
        tabela.appendChild(tableHeader);
    }
    //valores dos digimons
    const next_evolution_size = Evolucoes.get(digimon_name).length;
    const next_evolution = Evolucoes.get(digimon_name);
    for (let i = 0; i < next_evolution_size; i++){
        const digimon_lido = Digimons.get(next_evolution[i]);
        const table_row = CreateRowDigimon(digimon_lido, {});
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
    //
    if(Req.get(digimon_name) != undefined){
        const digimon_Req = Req.get(digimon_name);
        const req_html = document.createElement("p");
        req_html.setAttribute("class", "Requeriment");
        req_html.innerHTML = "*" + digimon_Req;
        digimonSec.appendChild(req_html);
    }
    //
    digimonSec.appendChild(tabela);
    return digimonSec;
}


export function find_preEvo(digimon_name){
    const pre_evo = []
    Evolucoes.forEach((Evols, Evol_name) => 
    {
        Evols.forEach(formas =>{
            if(formas.toLowerCase() == digimon_name.toLowerCase()){
                pre_evo.push(Evol_name);
            }
        });
    });
    return pre_evo;
}

export function find_nextEvo(digimon_name){
    return Evolucoes.get(digimon_name) != undefined ? Evolucoes.get(digimon_name) : [] ;
}

/*
Omegamon
Chaosmon
WarGreymon X-Antibody
BWarGreymon X-Antibody
Chaosmon
Dukemon X Antibody
Belzebumon X Antibody
Rosemon X Antibody 
Alforce V-dramon X-Antibody
Imperiadramon PM
Examon
*/