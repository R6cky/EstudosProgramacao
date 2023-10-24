
# declaração de classes 
# class FuncionarioPublico:
#     pass


# class Funcionario:
#     def __init__(self, email, telefone):
#         self.email = email
#         self.telefone = telefone

#     def programa(self, language):
#         print(f'Programando em {language}...')

#     def descansar(self):
#         print('Hora de descansar...ZzZzZz')

#     comer = 'estou comendo'


# cleiton = Funcionario('cleiton@mail.com', '31989880338')
# print(cleiton.email, '-', cleiton.telefone)
# print('---------------------------------------------------')
# cleiton.descansar()
# cleiton.programa('Java Script')
# print(Funcionario.comer)
# print(cleiton.comer)
# print('-----------------------------')


# class Carro:
#     def metodo_de_instancia(self):
#         return 'metodo de instancia chamado'

#     @classmethod
#     def medoto_de_classe(cls):
#         return 'metodo de classe'

#     @staticmethod
#     def static_method():
#         return 'metodo estatico chamado.'


# # chamando os métodos 

# obj = Carro()
# print(obj.metodo_de_instancia())
# print('----------------------------')
# print(obj.medoto_de_classe())
# print('----------------------------')
# print(obj.static_method())
# print('----------------------------')
# print(Carro.static_method())
# print('----------------------------')
# print('----------------------------')


# class Animal:
#     def __init__(self, name, species):
#         self.name = name
#         self.species = species

#     def make_sound(self):
#         print('Some generic animal sound!')


# class Dog(Animal):
#     def __init__(self, name, breed):
#         super().__init__(name, species="Dog")
#         self.breed = breed

#     def make_sound(self):
#         print('woof')


# class Cat(Animal):
#     def __init__(self, name, breed):
#         super().__init__(name, species="Cat")
#         self.breed = breed

#     def make_sound(self):
#         print('Meow!')


# neguim = Animal('aa', 'lab')
# neguim.make_sound()


# class Automovel:
#     def __init__(self, type, potencia, color, year) -> None:
#         self.type = type
#         self.potencia = potencia
#         self.color = color
#         self.year = year


# siena = Automovel('carro', '300', 'vermelho', '2011')

# print(f'O tipo é {siena.type} - potencia: {siena.potencia} - cor: {siena.color} - ano: {siena.year}')


# class Moto(Automovel):
#     def __init__(self, type, potencia, color, year) -> None:
#         super().__init__(type, potencia, color, year)


# bros = Moto("moto", '150', 'preta', '2011')

# print(f'O tipo é {bros.type} - potencia: {bros.potencia} - cor: {bros.color} - ano: {bros.year}')
