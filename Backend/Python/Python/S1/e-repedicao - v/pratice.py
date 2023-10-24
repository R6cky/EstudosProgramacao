list = [1, 2, 3, 4, 5]
word = "Hello world"

print(list[2])

for elem in list:
    print(elem)

print("-------------------------------------")

for elem in word:
    print("#".join(word))

print("-------------------------------------")

for caractere in "Testando for em python":
    print(caractere)

print("-------------------------------------")

for i in range(1, 10):
    print(i)


for i in range(1, 100, 10):
    print(i)
print("-------------------------------------")
print("-------------------------------------")
print("-------------------------------------")
print("-------------------------------------")
print("-------------------------------------")


count = 0

while count <= 15:
    count += 5
    print(count)

print("-------------------------------------")

for i in range(1, 10):
    if i == 3:
        break
    print(i)


for i in range(1, 6):
    if i == 3:
        continue
    print(i)

