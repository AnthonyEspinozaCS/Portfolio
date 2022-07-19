print("Welcome to my computer quiz!")

playing = input("Do you want to play? ")

if playing.lower() != "yes":
    quit()

print("Okay! Let's play :)")
life_points = 3

answer = input("what does CPU stand for? ")
if answer.lower() == "central processing unit":
    print("Correct!")
else:
    print("Sorry, we were looking for Central Processing Unit.")
    life_points -= 1
    print(f'-1 point. Point Remaining: {life_points}')

answer = input("What does GPU stand for? ")
if answer.lower() == "graphics processing unit":
    print("Correct!")
else:
    print("Sorry, we were looking for graphics processing unit")
    life_points -= 1
    print(f'-1 point. Point Remaining: {life_points}')

answer = input("What does RAM stand for? ")
if answer.lower() == "random access memory":
    print("Correct!")
else:
    print("Sorry, we were looking for Random Access Memory")
    life_points -= 1
    print(f'-1 point. Point Remaining: {life_points}')

answer = input("What does PSU stand for? ")
if answer.lower() == "power supply":
    print("Correct!")
else:
    print("Sorry, we were looking for Power Supply")
    life_points -= 1
    print(f'-1 point. Point Remaining: {life_points}')

print(f'You finished with {life_points} life point(s) or {life_points/4} %')
if(life_points/4 < 0.6):
    print("You failed :(")
else:
    print("You passed!!")