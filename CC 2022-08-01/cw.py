# 7 kyu Vowel Count

# Return the number (count) of vowels in the given string.

# We will consider a, e, i, o, u as vowels for this Kata (but not y).

# The input string will only consist of lower case letters and/or spaces.

def get_count(sentence):
    sentence = sentence.lower()
    count = 0
    for letter in sentence:
        if letter == 'a' or letter == 'e' or letter == 'i' or letter == 'o' or letter == 'u':
            count += 1
    return count        

print(get_count('the quick brown'))