# acessa o valor da chave "nome"
meu_dicionario = {"nome": "Cleiton", "idade": 30, "cidade": "são paulo"}
print(meu_dicionario)

print(meu_dicionario["nome"])
print(meu_dicionario["idade"])

# adiciona um novo item ao dicionário

meu_dicionario["sexo"] = "masculino"
meu_dicionario["profissao"] = "Web developer"
print(meu_dicionario)


# remove o item com a chave "profissao"

meu_dicionario["idade"] = 31
print(meu_dicionario)

# remove o item com a chave "cidade"

del meu_dicionario["cidade"]
print(meu_dicionario)


# remove o item com a chave "sexo" e retorna seu valor

removido = meu_dicionario.pop("sexo")
print(removido)

print(meu_dicionario)

# atualiza multiplos items

meu_dicionario.update({"nome": "Edson", "profissao": "Devops"})
print(meu_dicionario)


# recupera o valor da chave "nome"

nome = meu_dicionario.get("nome")
print(nome)


# recupera o valor da chave "profissao" (que não existe no dicionário)

cidade = meu_dicionario.get("cidade", "Valor inexistente")
print(cidade)


# recupera o valor da profissao

profissao = meu_dicionario.get("profissao")
print(profissao)

print("******************************************")
print("******************************************")
print("******************************************")

# percorre somente as chaves do dicionário e as imprime

for key in meu_dicionario:
    print(key)
print("------------------------------------------------------")

# o equivalente ao loop acima seria

for key in meu_dicionario.keys():
    print(key)
print("------------------------------------------------------")


# percorre as chaves do dicionário e as usa para imprimir os valores

for value in meu_dicionario:
    print(meu_dicionario[value])

print("------------------------------------------------------")
# o equivalente ao loop acima seria

for value in meu_dicionario.values():
    print(value)
print("------------------------------------------------------")


for key, value in meu_dicionario.items():
    print(f"Chave: {key} - Valor: {value}")
print("------------------------------------------------------")


