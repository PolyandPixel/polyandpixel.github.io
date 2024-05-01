import sys
import random
from enum import Enum


class RPS(Enum):
    ROCK = 1
    PAPER = 2
    SCISSORS = 3


# Avail the question for them to answer
print('')
choice = input('Choose one...\n 1 Rock \n 2 Paper \n 3 Scissors:\n\n')
player_choice = int(choice)

# To show error incase user adds bullshit
if player_choice < 1 | player_choice > 3:
    SystemExit("You need to choose 1, 2 or  3")

computer_choice = random.choice("123")
computer = int(computer_choice)

print('')
print('You chose ' + str(RPS(player_choice)).replace('RPS.', '') + '.')
print('PC chose ' + str(RPS(computer)).replace('RPS.', '') + '.')

# Now to decide the winner of the game
if player_choice == 1 and computer == 3:
    print('🚀 You win')
elif player_choice == 2 and computer == 1:
    print('💫You win')
elif player_choice == 3 and computer == 2:
    print('👾 You win')
elif player_choice == computer:
    print('🥲It\'s a draw')

else:
    print('🐍You win')
