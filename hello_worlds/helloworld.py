"""
Name: 
    - Julio Cesar Tavare

Start Date:
    -1/7/2023
"""



# I wanted to have a function that will display text that will be called from main.
#In many languages we would have a main function and then call other functions within main
def displayText(text):{
    print(f"{text}")    
}

#This is the creation of my main function and inside it I cal my displayText function
#yes I could have run this in one line instead of making 2 functions.
#I saved my hello world text in a variable called hello
def main():
    hello = "Hello World"
    displayText(hello)



#this is calling the main function.
main()

