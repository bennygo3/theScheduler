# theScheduler
Calendar App

This project was to add code to create a simple scheduling app. Some of the main requirements were to add the functionality that would allow individual time blocks to change colors while indicating if that hour block was in the past, present or future. 

Moment js was used to display the current time and date at the top of the page. It was also used to compare the current user's hour to the time block sections. These time block sections are input elements and will allow the user to save their "to-do's." 

If the current hour was in line with the scheduler app hour then that time block section will show up an off-red color.
If the time blocks were in future hours then that will be indicated by them turning a green color.
If the time blocks were in the past then they will be grey. This can be seen below: 

![schedule screen shotMedium](https://user-images.githubusercontent.com/95048609/153776765-c6755678-733b-41ed-a762-37ee39f28517.jpeg)


The next major task was to prevent the user's input text in the "to do" hour blocks from being deleted upon a page refresh or exiting of the page. 
This required using local storage to save input and then recall that input. Making this text input persistent was (obviously) necessary for this project.

Below is a picture of the final product: 

![Screen Shot final Medium](https://user-images.githubusercontent.com/95048609/153777116-a5f254fa-84dc-41dd-894b-9d455031139b.jpeg)


Future additions will include a clear hour block button and a clear all button!


