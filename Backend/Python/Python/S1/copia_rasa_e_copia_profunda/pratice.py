import copy


print('Cópia raza')

ages = [1, 2, 3, 4, 5]

ages2 = ages.copy()

print('ages', ages.copy())

print('ages', ages2.copy())

print(id(ages))
print(id(ages2))
print('ages is ages2', ages is ages2)
print('ages == ages2', ages == ages2)

print('----------------------------------------------')


print('''Neste exemplo copiamos uma lista com inteiros e array de strings
         Quando fizemos a cópia da lista e modificamos a cópia, a lista
         originaltbm teve alterações, porém somente nos valores mutáveis, os
         inteiros permanecem da mesma forma
      ''')


list_original = [1, 2, 3, ['a', 'b', 'c'], 4, 5, 6]

list_copy = list_original.copy()
list_copy[0] = 10
list_copy[3][0] = 'Q'
print('list original', list_original)
print('list copy', list_copy)

print('----------------------------------------------')

list_original2 = [1, 2, 3, ['a', 'b', 'c'], 4, 5, 6]

list_copy2 = copy.deepcopy(list_original2)

list_copy2[0] = 45
list_copy2[3][0] = 'Q'

print(list_copy2)
print(list_original2)

print('----------------------------------------------')
