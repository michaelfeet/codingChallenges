# 7 kyu Square Every Digit

# DESCRIPTION:
# Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer

def square_digits(num):
    num_list = list(str(num))
    final_list = []
    for n in num_list:
        n = int(n) ** 2
        final_list.append(str(n))
    return int(''.join(final_list))

number = 9119

print(square_digits(number))