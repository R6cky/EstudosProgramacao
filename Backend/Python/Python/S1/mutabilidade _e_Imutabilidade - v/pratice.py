nome = "cleiton"
print(nome)
nome = "Carlos"
print(nome)

print("*" * 50)
print('--------------------------------------------')

nome2 = nome
print(id(nome))
print(id(nome2))

nome = 'Maria'
print(id(nome))
print(id(nome2))

print('--------------------------------------------')


lista = [1, 2, 3, 4]

lista2 = lista

print(id(lista))
print(id(lista2))

lista[0] = 'string'

print(lista)
print(id(lista))

print(lista2)
print(id(lista2))
