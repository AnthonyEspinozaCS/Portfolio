def find_next_empty(puzzle):
    #find the next row, col that's not filled --> -1
    #return row, col tuple (or (None, None) if there is none)

    for r in range(9):
        for c in range(9):
            if puzzle[r][c] == -1:
                return r,c

    return None, None

def is_valid(puzzle, guess, row, col):
    #figures if the guess is valid in that row/col
    #returns True if valid, False if not

    row_vals = puzzle[row]
    if guess in row_vals:
        return False

    col_vals = [puzzle[i][col] for i in range(9)]
    if guess in col_vals:
        return False

    #now check the square
    row_start = (row // 3) * 3
    col_start = (col // 3) * 3

    for r in range(row_start, row_start + 3):
        for c in range(col_start, col_start+ 3):
            if puzzle[r][c] == guess:
                return False

    #all checks passed
    return True

def solve_sudoku(puzzle):
    #using backtracking
    #our puzzle is a list of lists
    #return if a solution exists
    #mutates puzzle to find the solution

    #step 1: choose where to make a guess
    row, col = find_next_empty(puzzle)

    if row is None:
        return True

    #step 2: if there is a place to guess, we want to guess between 1 and 9
    for guess in range(1, 10): # 1...9
        #step 3: check if valid guess
        if is_valid(puzzle, guess, row, col):
            puzzle[row][col] = guess
            #now recurse using this puzzle!
            #step 4: recursively call function
            if solve_sudoku(puzzle):
                return True
        
        #step 5: if not valid OR if our guess does not solve the puzzle, then we need to backtrack and get a new number
        puzzle[row][col] = -1

    return False

if __name__ == '__main__':
    example_board = [
        [3, 9, -1,   -1, 5, -1,   -1, -1, -1],
        [-1, -1, -1,   2, -1, -1,   -1, -1, 5],
        [-1, -1, -1,   7, 1, 9,   -1, 8, -1],

        [-1, 5, -1,   -1, 6, 8,   -1, -1, -1],
        [2, -1, 6,   -1, -1, 3,   -1, -1, -1],
        [-1, -1, -1,   -1, -1, -1,   -1, -1, 4],

        [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
        [6, 7, -1,   1, -1, 5,   -1, 4, -1],
        [1, -1, 9,   -1, -1, -1,   2, -1, -1]
    ]

    print(solve_sudoku(example_board))
    print(example_board)