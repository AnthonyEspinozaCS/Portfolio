import random
import re

#play the game
class Board:
    def __init__(self, dim_size, num_bombs):
        #store values to use for later
        self.dim_size = dim_size
        self.num_bombs = num_bombs

        #create the board
        self.board = self.make_new_board()
        self.assign_values_to_board()

        #save a set of all places we've dug
        self.dug = set() #if we dig at 0,0 then self.dug = {(0,0)}

    def make_new_board(self):
        #construct a new board with dim_size and num_bombs
        #create a list of lists here

        #generate board
        board = [[None for _ in range(self.dim_size)] for _ in range(self.dim_size)]

        #plant bombs
        bombs_planted = 0
        while bombs_planted < self.num_bombs:
            loc = random.randint(0, self.dim_size ** 2 - 1) #return a random int N s.t a <= N <= b
            row = loc // self.dim_size # we want the number of times dim_size goes into loc for the row index
            col = loc % self.dim_size # we want the remainder to tell us the index in the row to look at

            if board[row][col] == '*':
                #this means we've planted a bomb here so pick a new spot
                continue

            board[row][col] = '*' #put a bomb here
            bombs_planted += 1

        return board

    def assign_values_to_board(self):
        #now that bombs are planted, let's assign every space 0-8
        #this numbers tell us how many bombs are neighboring it

        for r in range(self.dim_size):
            for c in range(self.dim_size):
                if(self.board[r][c] == '*'):
                    continue

                self.board[r][c] = self.get_num_neighboring_bombs(r, c)

    def get_num_neighboring_bombs(self, row, col):
        num_neighboring_bombs = 0
        for r in range(max(0, row-1), min(self.dim_size -1, (row+1))+1):
            for c in range(max(0, col-1), min(self.dim_size - 1, (col+1)) + 1):
                if r == row and c == col:
                    continue
                if self.board[r][c] == '*':
                    num_neighboring_bombs += 1

        return num_neighboring_bombs

    def dig(self, row, col):
        #dig here
        #return true if successful, false if bomb

        #hit a bomb -> game over
        #dig at location with neighboring bombs -> finish dig
        #dig at a location with no neighboring bombs -> recursively dig neighbors

        self.dug.add((row, col)) #add to spots we dug at

        if(self.board[row][col] == '*'):
            return False

        elif self.board[row][col] > 0:
            return True

        for r in range(max(0, row-1), min(self.dim_size -1, (row+1))+1):
            for c in range(max(0, col-1), min(self.dim_size - 1, (col+1)) + 1):
                if (r, c) in self.dug:
                    continue #don't dig if you've already dug here
                self.dig(r,c)

        return True
        
    def __str__(self):
        #returns a string that prints the board

        #create array that represents what the user would see
        visible_board = [[None for _ in range(self.dim_size)] for _ in range(self.dim_size)]
        for row in range(self.dim_size):
            for col in range(self.dim_size):
                if (row, col) in self.dug:
                    visible_board[row][col]  = str(self.board[row][col])
                else:
                    visible_board[row][col] = ' '

        string_rep = ''
        width = []
        for idx in range(self.dim_size):
            columns = map(lambda x: x[idx], visible_board)
            width.append(len(max(columns, key = len)))

        indices = [i for i in range(self.dim_size)]
        indices_row = '   '
        cells = []
        for idx, col in enumerate(indices):
            format = '%-' + str(width[idx]) + "s"
            cells.append(format % (col))
        indices_row += '  '.join(cells)
        indices_row += '  \n'

        for i in range(len(visible_board)):
            row = visible_board[i]
            string_rep += f'{i} |'
            cells = []
            for idx, col in enumerate(row):
                format = '%-' + str(width[idx]) + "s"
                cells.append(format % (col))
            string_rep += ' |'.join(cells)
            string_rep += '  \n'

        str_len = int(len(string_rep) / self.dim_size)
        string_rep = indices_row + '-'*str_len + '\n' + string_rep + '-'*str_len

        return string_rep

def play(dim_size = 10, num_bombs = 10):
    #step 1: create the board and plant the num_bombs
    board = Board(dim_size, num_bombs)

    #step 2: show the user the board and ask what their next move is
    #step 3a: if location is a bomb, game over
    #step 3b: if location is not a bomb, dig recursively until each square is at least next to a num_bomb
    #step 4: repeat steps 2 and 3a/b until there are no more places to dig
    safe = True

    while len(board.dug) < board.dim_size ** 2 - num_bombs:
        print(board)
        user_input = re.split(',(\\s)*', input("Where would you like to dig? Input as row, col: "))
        row, col = int(user_input[0]), int(user_input[-1])
        if row < 0 or row >= board.dim_size or col < 0 or col >= board.dim_size:
            print("Invalid location. Try again.")
            continue

        safe = board.dig(row, col)
        if not safe:
            #blew up, hit a bomb
            break #ggs

    if safe:
        print("CONGRATS!! You won!")
    else:
        print("RIP, you blew up...")
        #let's reveal the whole board!
        board.dug = [(r,c) for r in range(board.dim_size) for c in range(board.dim_size)]
        print(board)

if __name__ == "__main__":
    play()