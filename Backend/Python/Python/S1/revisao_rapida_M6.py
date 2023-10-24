import requests
import copy

# Declarando string e usado interpolação

# name = "cleiton"
# idade = 29
# total_conta = 456
# mensagem_ao_cliente = "VOLTE SEMPRE"

# print(
#     f"""
#     Hello {name}, ficamos
#     felizes com a sua visita
#     o total de sua conta foi R$ {(total_conta)},00.
#     {mensagem_ao_cliente}!
#     """
# )


# Acessando strings

# carro = "amarok"
# print(carro[-4:-2])


"""
* acesso a cada caractere = pelo indice
* fatiamento crescente = Indice:posicao do caractere
* fatiamento crescente outro = Indice:"vazio"
* Fatiamento decrescente = -posição do caractere a direita: posiçãodo 
caractere a esquerda
"""


# metodos de string
# upper(): converte todas as letras de uma string para maiúsculas.

# name = "cleiton"
# print(name.upper())

# lower(): converte todas as letras de uma string para minúsculas.
# gato = "BASH"
# print(gato.lower())

# capitalize(): converte a primeira letra de uma string para maiúscula e as
# demais para minúsculas.
# print(name.capitalize())

# title(): converte a primeira letra de cada palavra de uma string para
# maiúscula e as demais para minúsculas.
# texto = """
#    Hello world,
#    this is my text in vscode
"""
# print(texto.title())

# strip(): remove espaços em branco do início e do final de uma string.

# name_with_space = "linux"
# print(name_with_space.strip())


# replace(): substitui uma parte de uma string por outra.
# print(name_with_space.replace("nux", "gar"))

# split(): divide uma string em uma lista de strings, usando um determinado
# delimitador.
# print(name_with_space.split())

# join(): junta uma lista de strings em uma única string, usando um determinado
# delimitador.
# print(name_with_space.join(name))

# find(): encontra a primeira ocorrência de uma substring em uma string e
# retorna o índice em que ela se encontra.
# print(name_with_space.find("x"))
# print(name_with_space)

# count(): conta quantas vezes uma substring aparece em uma string.
# word = "hello heworld"
# print(word.count("c"))

# =====================================================================================

"""


# def my_function(years_old):
#     actual_date = 2023
#     return actual_date - years_old


# print(f"Olá", "sua data de nascimento é", my_function(29))
# print(type(my_function))
"""


# Funções com parâmetros com valores pré definidos


# def name_age(name, age=29):
#     return f"hello, my name is {name} and i have {age} years old"


# print(name_age("cleiton", 35))

# cont = 0


# while cont < 10:
#     cont = cont + 1
#     print(cont)

# print("-----------------------------------")
# frutas = ["maca", "banana", "pera", "caju"]


# for elem in frutas:
#     if elem.find("u"):
#         print(elem)


# for i in range(1, 9):
#     if i == 3:
#         break
#     print(i)


# print("--------------------------------------------------")
# lista_metodo = list("rafael")
# print(lista_metodo)
# print("--------------------------------------------------")
# print(frutas)
# print(frutas[0:2])
# print(frutas[-3:-1])
# print("--------------------------------------")
# letras = list("rapadura")
# print(letras[0::2])
# num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
# print(num[1::2])


# animals = ["macaco", "zebra", "mico", "elefante", "mula", "cavalo"]

# f"""
#     #list.append(x): adiciona o elemento x no final da lista.
#    { animals.append('baleia')}
#     {print(animals)}

#     # list.extend(iterable): estende a lista adicionando todos os elementos
#     # iterável (por exemplo, outra lista) no final da lista.
#     {animals.extend(['touro', 'bode'])}
#     {print(animals)}

#     # list.insert(i, x): insere o elemento x na posição de índice i da lista.
#     {animals.insert(0, 'aguia')}
#     {print(animals)}


#     #list.remove(x): remove o primeiro elemento da lista cujo valor é
#     igual a x.

#     {animals.remove('zebra')}
#     {print(animals)}

#     # list.pop([i]): remove o elemento na posição de índice i da lista
#     (ou o último elemento, se i não for especificado) e o retorna.
#     {print(animals.pop(1))}
#     {print(animals)}
#     {print(animals.pop())}

#     # list.clear(): remove todos os elementos da lista.
#     animals.clear()
#     {print('--------------------------')}
#     {print(animals)}

#     # list.index(x[, start[, end]]): retorna o índice do primeiro elemento da
#     lista cujo valor é igual a x.
#     # É possível especificar os índices de início e fim da pesquisa usando as
#     opções start e end.
#     {print(animals.index('mula'))}

#     # list.count(x): retorna o número de vezes que o elemento x aparece na
#     lista.
#     {animals.append('elefante')}
#     {print(animals.count('elefante'))}

#     # list.sort(key=None, reverse=False): classifica os elementos da lista em
#     ordem crescente (ou decrescente, se reverse for verdadeiro).
#     # É possível especificar uma função de chave para determinar como os
#     elementos são comparados usando a opção key.
#     {print(animals.sort(key=None,reverse=False))}


#     list.reverse(): inverte a ordem dos elementos da lista.
#     {print(animals.reverse())}

#     """

# print("----------------------------------------------------------------")


# # Criando request com get
# get_data = requests.get("https://pokeapi.co/api/v2/pokemon")
# print(type(get_data.json()))


# # dicionarios

# # Criando dicionários
# dic = {"name": "cleiton", "age": 29, "active": True}
# print(dic)

# # atualizando valor
# dic["name"] = "maria"
# print(dic)

# # adicionando item
# dic["color"] = "black"
# print(dic)

# # removendo item
# del dic["active"]
# print(dic)

# # acessando valor
# print(dic["name"])

# # remove item e retorna valor removido
# # print(dic.pop("color"))
# print(dic)
# print("-----------------------------------------")
# print(dic)
# print("-----------------------------------------")
# dic.update({"name": "tukin", "age": 22})
# print(dic)
# print("-----------------------------------------")
# print("-----------------------------------------")
# print("-----------------------------------------")

# # método get

# print(
#     dic.get("colorr", "chave inexistente")
# )  # retorna None ou a frase setada no 2 argumento(caso ser passada)
# # dic["colorr"]  # retorna um erro

# # Looping

# # acessando chaves
# for key in dic:
#     print("chave: " + key)

# # acessando chaves 2 (com o método keys())
# for key in dic.keys():
#     print("chave2: " + key)


# # Acessando valores das chaves
# for key in dic:
#     print(f"valor da chave {key} : " + str(dic[key]))

# # Acessando valores das chaves 2
# for values in dic.values():
#     print("valor das chaves pelo método: " + str(values))

# for key, value in dic.items():
#     print(f"chave: {key} | valor: {str(value)} ")


dic = [
    {"name": "cleiton", "age": 29},
    {"name": "maria", "age": 70},
    {"name": "victor", "age": 56},
]


lista = ("zebra", "leao", "jacare", "zebra", "jacare", "mico")
domains = [
    "https://github.com/R6cky/m5-kiosque-cleiton",
    "https://github.com/R6cky/m5-kiosque-cleiton",
    "https://github.com/R6cky",
    "https://canvas.kenzie.com.br/courses/90/pages/s1-18-%7C-aula-conjuntos?module_item_id=23312",
]

# num = [1, 2, 3, 4, 5, ["a", "b"]]

# num2 = copy.deepcopy(num)

# num[0] = 10
# num[-1][1] = "Z"
# print(id(num))
# print(id(num2))

# print(num)
# print(num2)


# def args(**params):
#     for value in params.values():
#         print(value)


# args(a=1, b=2, c=3, d="cleiton")

# a, b, c, d = 1, 2, ["a", "b", "c"], 4
# packing = (a, b, c, d)
# print("---------------------")
# print(packing)
# e, f, g, h = packing

# print("---------------")
# print(f)


n = [1, 2, 3, 4, 5, 6, 7]

out = [value**2 for value in n]

out_if = [value for value in n if value % 2 == 0]

print(out)
print(out_if)


products = [
    {
        "_id": 25,
        "description": "Healthy breakfast with cottage cheese and strawberry",
        "price": 14.05,
        "rating": 1,
        "title": "Breakfast with cottage",
        "type": "fruit",
    },
    {
        "_id": 8,
        "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
        "price": 27.35,
        "rating": 0,
        "title": "Hazelnut in black ceramic bowl",
        "type": "vegetable",
    },
    {
        "_id": 20,
        "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
        "price": 16.76,
        "rating": 5,
        "title": "Caprese salad",
        "type": "vegetable",
    },
]

print("-------------------------------------")


def input_data(param):
    try:
        (1 + "90")
    except TypeError:
        print("ERRO de TIPO")


input_data(1)
