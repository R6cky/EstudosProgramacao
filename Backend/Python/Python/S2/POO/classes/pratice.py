class Escola:
    def __init__(self, alunos, professores, diretores):
        self.alunos = alunos
        self.professores = professores
        self.diretores = diretores


mys_school = Escola('Diego', 'Ana laura', 'Rosangela')

print(mys_school.alunos, mys_school.professores)
