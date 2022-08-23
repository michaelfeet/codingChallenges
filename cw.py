# 6 kyu Unique In Order

# DESCRIPTION:
# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

# For example:

# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1,2,2,3,3])       == [1,2,3]

str = 'AAAABBBCCDAABBB'

def unique_in_order(iterable):
    new_list = []
    letter = ''
    for char in iterable:
        if char != letter:
            letter = char
            new_list.append(char)
    return new_list
    
        





print(unique_in_order(str))

# qwer = []

# print(qwer)