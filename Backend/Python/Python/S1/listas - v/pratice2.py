list = [1, 2, 3, 4, 5]
extend_list = [20, 21, 22, 23]

list.append(6)
list.append('a')
print(list)


list.extend(['j', 'l', 'm'])
list.extend(extend_list)
print(list)
print(len(list))
