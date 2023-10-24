#__str__

class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Classe: {Person.__name__} - Pessoa: {self.name}"


