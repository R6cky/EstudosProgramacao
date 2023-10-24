class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        print("Some generic animal sound")


class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, species="Dog")
        self.breed = breed
    
    def make_sound(self):
        print("Woof!")


class Cat(Animal):
    def __init__(self, name, breed):
        super().__init__(name, species="Cat")
        self.breed = breed
    
    def make_sound(self):
        print("Meow!")


dog1 = Dog("Fido", "Labrador")
print(dog1.name)  # "Fido"
print(dog1.species)  # "Dog"
print(dog1.breed)  # "Labrador"
print(dog1.make_sound()) # "Woof!"

cat1 = Cat("Fluffy", "Persa")
print(cat1.name)  # "Fluffy
print(cat1.species)  # "Cat"
print(cat1.breed)  # "Persa"
print(cat1.make_sound())  # "Meow!"