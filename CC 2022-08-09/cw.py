# 5 kyu RGB To Hex Conversion

# DESCRIPTION:
# The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

# Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

# The following are examples of expected output values:

# rgb(255, 255, 255) # returns FFFFFF
# rgb(255, 255, 300) # returns FFFFFF
# rgb(0,0,0) # returns 000000
# rgb(148, 0, 211) # returns 9400D3

import math

def rgb(r, g, b):
    hex = ['0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F']
    hex_code = ''
    if r > 255:
        hex_code += 'FF'
    elif r < 0:
        hex_code += '00'
    else:
        new_r = r / 16 # round this after 
        new_r_rounded = math.floor(r/16)
        hex_code += hex[new_r_rounded]
        # print(new_r_rounded)

        new_r_remainder = round((new_r - new_r_rounded) * 16) 
        hex_code += hex[new_r_remainder]
        # print(new_r_remainder)

    if g > 255:
        hex_code += 'FF'
    elif g < 0:
        hex_code += '00'
    else:
        new_g = g / 16 # round this after 
        new_g_rounded = math.floor(g/16)
        hex_code += hex[new_g_rounded]
        # print(new_r_rounded)

        new_g_remainder = round((new_g - new_g_rounded) * 16) 
        hex_code += hex[new_g_remainder]
        # print(new_r_remainder)

    if b > 255:
        hex_code += 'FF'
    elif b < 0:
        hex_code += '00'

    else:
        new_b = b / 16 # round this after 
        new_b_rounded = math.floor(b/16)
        hex_code += hex[new_b_rounded]
        # print(new_r_rounded)

        new_b_remainder = round((new_b - new_b_rounded) * 16) 
        hex_code += hex[new_b_remainder]
        # print(new_r_remainder)
    
    return hex_code

print(rgb(-20,275,125))





def limit(number):
    if number < 0:
        return 0
    if number > 255:
        return 255
    return number

def rgb (r, g, b):
    return '{:02X}{:02X}{:02X}'.format(limit(r), limit(g), limit(b))


print(rgb(-20,275,125))


def rgb(r, g, b):
    rgb_list = [r, g, b]
    # print(rgb_list)
    hex_code = ''
    hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    
    for i in rgb_list:
        if 0 <= i <= 255:
            num = i / 16
            # print(math.floor(num))
            hex_code += str(hex[math.floor(num)])
            dec = num - math.floor(num)
            hex_code += str(hex[math.floor(dec * 16)])
        elif i < 0:
            hex_code += '00'
        else:
            hex_code += 'FF'
    
    return hex_code

print(rgb(-20,275,125))