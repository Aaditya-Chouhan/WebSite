import random

secret = random.randrange (1, 101)


guess = 0
tries = 0
print(secret)
print (" INSTRUCTIONS ")
print ("\n1. The computer picks up a random number between 1 and 100")
print ("2. You have to guess the number picked up by the computer")
print ("3. The computer will tell that the guess was high, low or just correct")
print ("\n\nHave Fun")
while guess != secret:
    guess = int (input ("\nMake a guess: "))
    tries = tries + 1

    if guess > secret:
        print ("The guess is too high !!")
    elif guess < secret:
        print ("The guess is too low !!")
    else:
        print ("Great, you got it !!")

print ("Number of tries took: ", tries)
if tries<4:
    print("Excellent!")
elif tries<8:
    print("Great")
else:
    print("Nice Try")
print ("\nThanks for playing this game!!")


import turtle 
aadi = turtle.Pen()
aadi.color("turquoise")
aadi.shape("arrow")
aadi.speed(1)
aadi.width(8)
aadi.penup()
aadi.back(100)
aadi.pendown()


###########################
### Code for letter 'N' ###
###########################

aadi.left(90)
aadi.forward(100)
aadi.right(150)
aadi.forward(120)
aadi.left(150)
aadi.forward(100)
aadi.right(170)

###########################
### Code for letter 'N' ###
###########################

aadi.penup()
aadi.forward(105)
aadi.pendown()

"###########################"
"### Code for letter 'I'  ###"
"###########################"

aadi.left(170)
aadi.forward(94)
aadi.penup()
aadi.forward(10)
aadi.pendown()
aadi.circle(1)

"###########################"
"### Code for letter 'I'  ###"
"###########################"

aadi.right(150)
aadi.penup()
aadi.forward(115)
aadi.right(122)
aadi.pendown()

###########################
### Code for letter 'C' ###
###########################

aadi.fd(42)
aadi.right(90)
aadi.fd(90)
aadi.right(90)
aadi.forward(42)

###########################
### Code for letter 'C' ###
###########################

aadi.right(55)
aadi.penup()
aadi.fd(110)
aadi.right(125)
aadi.pendown()

"###########################"
"### Code for letter 'E'  ###"
"###########################"

aadi.fd(50)
aadi.right(90)
aadi.fd(50)
aadi.right(90)
aadi.fd(30)
aadi.back(30)
aadi.left(90)
aadi.fd(50)
aadi.right(90)
aadi.fd(50)

"###########################"
"### Code for letter 'E'  ###"
"###########################"

aadi.penup()
aadi.color("white")
aadi.fd(1000)
aadi.circle(10)














