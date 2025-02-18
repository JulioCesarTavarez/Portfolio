import csv

with open('menu.csv', newline='') as csv_file:
    menu = csv.reader(csv_file, delimiter = ',', quotechar = '|')
    
    for row in menu:       
        # Print in a formatted way
        print(row)