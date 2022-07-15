import calendar
from tkinter import *

def showCalendar():
    gui = Tk()
    gui.config(background='grey')
    gui.title("Calendar for the year")
    gui.geometry("1920x1080")
    year = int(year_field.get())
    gui_c = calendar.TextCalendar(calendar.SUNDAY)
    gui_content = gui_c.formatyear(year, 2, 1, 20, 3)
    print(gui_content)
    calYear = Label(gui, text= gui_content, font= "Consolas 10 bold", padx=100)
    calYear.grid(row=1, column=1, padx= 20)
    gui.mainloop()
    
if __name__ == '__main__':
    new = Tk()
    new.config(background='grey')
    new.title("Calendar")
    new.geometry("500x250")
    cal = Label(new, text="Calendar", bg='grey', font=("times", 28, "bold"), justify='center')
    #Label for the year entered
    year = Label(new, text="Enter Year", bg='dark grey', width=72)
    #text box for the input of the year
    year_field = Entry(new)
    button = Button(new, text='Show Calendar', fg='Black', bg='Blue',command=showCalendar)

    cal.grid(row=1, column=1)
    year.grid(row=2, column=1)
    year_field.grid(row=3, column=1)
    button.grid(row=4, column=1)
    #Exit.grid(row=6, column=1)
    new.mainloop()