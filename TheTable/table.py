import csv
from flask import Flask
# menuType = input(f"1: Breakfast \n2: Lunch \n3: Dinner \n4: Dessert \nDrink \n Please enter a number:")

# if menuType == "1":
#     menuType = "Breakfast"
# elif menuType == "2":
#     menuType = "Lunch"
# elif menuType == "3":
#     menuType = "Dinner"
# elif menuType == "4":
#     menuType = "Dessert"
# elif menuType == "5":
#     menuType = "Drink"

def menu(meal):
    menuItems = []
    with open('menu.csv', newline='') as csv_file:
        menu = csv.reader(csv_file, delimiter = ',', quotechar = '|')
        for i in menu:
            if len(i) != 4:
                continue
            else:
                menuType = i[0]
                if meal == menuType:
                    imagePath = i[1]
                    name = i[2]
                    price = i[3]
                    menuItems.append([imagePath, name, price])
    return menuItems
