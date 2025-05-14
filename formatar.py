
arquivoEntrada = open("perfects.csv", "r")
arquivoSaida = open("perfectsFormatado.js", "w")

lista_String = "\nexport const Perfects = ["

evol_String = ""

for linha in arquivoEntrada:
    valores = linha.strip("\n").split(",")
    if(valores[0].startswith("Digimon")):
        continue
    nome = valores[0] 
    estagio = valores[1]
    hp = valores[2]
    mp = valores[3]
    atk = valores[4]
    defe = valores[5]
    spd = valores[6]
    inte = valores[7]
    peso = valores[8]
    miss = valores[9]
    happ = valores[10]
    dis = valores[11]
    btl = valores[12]
    tech = valores[13]
    deco = valores[14]
    quo = valores[15]

    s = f"Digimons.set(\"{nome}\" , CreateDigimon({{estagio: \"{estagio}\", nome: \"{nome}\", hp:\" {hp}\", mp:\"{mp}\", atk:\"{atk}\", def:\"{defe}\", spd:\"{spd}\", int:\"{inte}\", peso: \"{peso}\", miss:\"{miss}\", happy:\"{happ}\", disc:\"{dis}\", tech:\"{tech}\", decode:\"{deco}\", quota:\"{quo}\"}}));\n"
    
    lista_String += f"\"{nome}\","

    evol_String += f"Evolucoes.set(\"{nome}\" , []);\n"

    arquivoSaida.write(s)

lista_String += "]\n"

arquivoSaida.write(lista_String)
arquivoSaida.write(evol_String)

arquivoEntrada.close()
arquivoSaida.close()