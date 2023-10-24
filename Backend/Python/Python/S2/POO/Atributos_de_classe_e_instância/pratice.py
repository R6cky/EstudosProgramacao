class Roupa:
    tamanho = "Hello world"

    def __init__(self, cor, marca):
        self.cor = cor
        self.marca = marca


print(Roupa.tamanho)


shirt = Roupa('red', "cyclone")

print(shirt.tamanho, shirt.cor, shirt.marca)
