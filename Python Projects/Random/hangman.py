import random 
from words import words
import string

def get_valid_word(words):
    word = random.choice(words) #randomly chooses something from the list
    while '-' in word or ' ' in word:
        word = random.choice(words) #randomly chooses something from the list

    return word.upper()

def hangman():
    word = get_valid_word(words)
    word_letters = set(word) #letters in the word
    alphabet = set(string.ascii_uppercase)
    used_letters = set() #user guess
    lives = 6

    #get user input
    while len(word_letters) > 0 and lives > 0:
        #' '.join(['a', 'b', 'cd']) --> 'a b cd'
        print('You have', lives, 'lives left and you have used these letters: ', ' '.join(used_letters))

        #what current is (ie W - R D)
        word_list = [letter if letter in used_letters else '-' for letter in word]
        print('Current word: ', ' '.join(word_list))

        user_letter = input('Guess a letter: ').upper()
        if user_letter in alphabet - used_letters:
            used_letters.add(user_letter)
            if user_letter in word_letters:
                word_letters.remove(user_letter)

            else:
                lives = lives - 1 #lose life if letter is wrong
                print('Letter is not in word')

        elif user_letter in used_letters:
            print('You have already typed that character. Please try again.')
        
        else:
            print('Invalid character. Please try again.')

    #if lives is 0 you died and if you guessed the word you win
    if lives == 0:
        print('You died, sorry. The word was', word)
    else:
        print('You have guessed the word', word, '!!')

hangman()