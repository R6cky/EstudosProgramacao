a, b, c = "hello", True, 3
packed = (a, b, c)
print(packed)

print("-----------------------")

packed2 = (1, 2, 3)
#a, b, c = packed2
print(packed2)

v1, v2, v3 = packed2
print(v1, v2, v3)


print("-----------------------")


def my_function(*args):
    for arg in args:
        print(arg)


my_function(10, 5, 12)
my_function(5, 15, 22)


print("-----------------------")


def my_function2(**kwargs):
    for key, value in kwargs.items():
        print(f'{key} = {value}')


my_function2(name="Alice", age=25)
my_function2(city="NY", country="USA")
