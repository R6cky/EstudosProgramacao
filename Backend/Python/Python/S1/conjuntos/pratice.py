meu_conjunto = set([1, 2, 3, 4, 5, 6, 7, 8])
print(meu_conjunto)

meu_conjunto2 = {1, 1, 1, 2, 3, 3, 1, 1, 1, 3, 4, 5, 6, 7, 6, 6, 8}
meu = 'www.google.com'
meu2 = 'www.google.com'
meu3 = 'www.defatoonline.com'

conjunto = set([meu, meu2, meu3])
print(meu_conjunto2)
print(conjunto)


conjunto_plus = set(['a', 'b', 'c', 'd', 'a', 'a', 'b', 'b', 'c'])

print("-----------------------------------------------------------")

print("MÉTODOS")

conjunto.add("www.tesla.com")
print(conjunto)
print("-----------------------------------------------------------")

conjunto.remove("www.tesla.com")
print(conjunto)
print("-----------------------------------------------------------")

conjunto.discard("www.tesla.com")
print(conjunto)
print("-----------------------------------------------------------")

copia_conjunto = conjunto.copy()
print('copia', copia_conjunto)
print("-----------------------------------------------------------")

conjunto.clear()
print(conjunto)
print("-----------------------------------------------------------")

conjunto.add(meu)
conjunto.add(meu2)
conjunto.add(meu3)

conjunto.update(meu_conjunto)
print(conjunto)
print("-----------------------------------------------------------")

conjunto.clear()
conjunto.add('help')
conjunto.add('hello')
conjunto.add("holla")

conjunto_result = conjunto.intersection(conjunto_plus)
print('intercection', conjunto_result)
print(conjunto_result)
print("-----------------------------------------------------------")

difference = conjunto.difference(conjunto_plus)
print(difference)
print("-----------------------------------------------------------")

conjunto_result2 = conjunto.union(conjunto_plus)
print('result2', conjunto_result2)
print("-----------------------------------------------------------")

is_equals = conjunto.isdisjoint(conjunto_plus)
print('isDisJoint', is_equals)

