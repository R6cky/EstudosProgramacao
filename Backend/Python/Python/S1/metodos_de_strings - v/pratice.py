phrase = """how are you?
            my name is cleiton
            i from brazil, in belo horizonte city
            i love tecnology   
        """
print('print normal: ', phrase)
print('-----------------------------------------------------')
print('Upper')
print(phrase.upper())
print('-----------------------------------------------------')

print('Lower')
print(phrase.lower())
print('-----------------------------------------------------')

print('capitalize')
print(phrase.capitalize())

print('-----------------------------------------------------')

print('title')
print(phrase.title())

print('-----------------------------------------------------')

print('strip')
print(phrase.strip())

print('-----------------------------------------------------')

print('replace')
print(phrase.replace('name', '**'))
print(phrase.replace('i', 'EU'))
print(phrase.replace('i', 'EU', 1))
print(phrase.replace('i', 'EU', 2))
print(phrase.replace('i', 'EU', 3))

print('-----------------------------------------------------')

print('split')
print(phrase.split())
print(phrase.split(','))
print(phrase.split('\n'))

print('-----------------------------------------------------')

print('join')
print("#".join(phrase))

print('-----------------------------------------------------')

print('find')
print(phrase)
print(phrase.find("how"))
print(phrase.find("my", 2, 10))

print('-----------------------------------------------------')

print('count')
print(phrase)
print(phrase.count('how'))
print(phrase.count('o'))
