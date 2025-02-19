import csv

menuType = input(f"1: Breakfast \n2: Lunch \n3: Dinner \n4: Dessert \nDrink \n Please enter a number:")

if menuType == "1":
    menuType = "Breakfast"
elif menuType == "2":
    menuType = "Lunch"
elif menuType == "3":
    menuType = "Dinner"
elif menuType == "4":
    menuType = "Dessert"
elif menuType == "5":
    menuType = "Drink"

def menu(meal):
    with open('menu.csv', newline='') as csv_file:
        menu = csv.reader(csv_file, delimiter = ',', quotechar = '|')

        for i in menu:
            if len(i) != 4:
                continue
            else:
                menuT = i[0]
                if menuType == menuT:
                    imagePath = i[1]
                    name = i[2]
                    price = i[3]
                    print(f"{menuType}: {imagePath} {name} {price}")        #print(menuType)