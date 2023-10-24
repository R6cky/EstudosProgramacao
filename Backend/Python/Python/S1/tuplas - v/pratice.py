minha_tupla_vazia = ()

minha_tupla = (1, 2, 3, 4, 5, 6, 7, 8, 9)

print(minha_tupla[1])

minha_lista = []    

for i in minha_tupla:
    minha_lista.append(i)
print(minha_lista)

minha_lista[1] = "novo valor"
print(minha_lista)

print('----------------------------------------')

minha_lista_2 = list(minha_tupla)

print(minha_lista_2)

minha_lista_2[1] = "new value"

print(minha_lista_2)

print('----------------------------------------')

minha_tupla_vazia = ('João', 'José', 'Maria', 'Joana', 'José', 'João')
print(minha_tupla_vazia)

print(minha_tupla_vazia.count("João"))

print(minha_tupla_vazia.index("João"))

print('----------------------------------------')

