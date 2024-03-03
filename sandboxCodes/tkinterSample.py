import os
from tkinter import *   
 
# create a tkinter window
root = Tk()              
 
# Open window having dimension 100x100
root.geometry('500x500') 
 
# Create a Button
btn = Button(root, text = 'Click me !', bd = '5',
                          command = root.destroy) 
 
# Set the position of button on the top of window.   
btn.pack(side = 'top')    
 
root.mainloop()