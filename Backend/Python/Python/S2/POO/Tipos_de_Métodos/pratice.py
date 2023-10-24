# class MinhaClasse:

#     def metodo_de_instancia(self):
#         return "Método de instância chamado"

#     @classmethod
#     def metodo_de_classe(cls):
#         return "Método de classe."

#     @staticmethod
#     def metodo_estatico():
#         return "Método estático."
#     # Chamando os métodos pelo objeto


# obj = MinhaClasse()

# print(obj.metodo_de_instancia())
# # Método de instância chamado

# print(obj.metodo_de_classe())
# # Método de classe chamado

# print(obj.metodo_estatico())
# # Método estático chamado

# # Chamando os métodos pela classe
# print(MinhaClasse.metodo_de_classe())
# # Método de classe chamado

# print(MinhaClasse.metodo_estatico())
# # Método estático chamado

# print(MinhaClasse.metodo_de_instancia())
# TypeError: MinhaClasse.metodo_de_instancia() missing
# 1 required positional argument: 'self'

class Corrida:
    def distancia(self):
        return "A distancia é 10 km"

    

run = Corrida()
print(run.distancia())
