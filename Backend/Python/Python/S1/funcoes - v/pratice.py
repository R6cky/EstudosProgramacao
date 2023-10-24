def show_message(msg):
    message = msg
    return message


print(show_message("Hello World"))


def calc(n1, n2):
    n1 = int(input("numero 1: "))
    n2 = int(input("numero 2: "))
    type = input("Qual o tipo ? 1 - soma | 2 - subtracao | 3 - div | 4 - mult")
    if int(type) == 1:
        print("soma")
        return print(f"{n1} + {n2} = {n1+n2}")
    elif int(type) == 2:
        print("subtracão")
        return print(f"{n1} - {n2} = {n1-n2}")

    elif int(type) == 3:
        print("divisão")
        return print(f"{n1} / {n2} = {n1/n2}")
    elif int(type) == 4:
        print("multiplicação")
        return print(f"{n1} * {n2} = {n1*n2}")


calc(1, 3)
