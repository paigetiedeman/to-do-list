# To Do List

#### This is an application that users can submit an input that will turn into a list.

#### _By Paige Tiedeman_

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

## Description

This simple HTML site uses HTML forms and JS functionality to return a list of items the user wants to get done. 

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Go to the top level of this directory_
* _Open index.html in your browser_
* _Fill out form inputs_
* _Submit items to see the list_
* _Mark items once done_

## Known Bugs

* _Delete Button not functioning_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Paige Tiedeman

## Contact Information

_Paige Tiedeman **paigetiedeman@gmail.com**_

## Tests:

### Describe TaskList();

Test: "It will add a task item to the console"  
Code: let task = new Task("Walk Dog")  
Expected Output: undefined  

Test: "It will return previously added task"  
Code: taskList.tasks  
Expected Output: {Walk Dog: Task}  

Test: "It will find/delete the task item"  
Code: delete this.tasks[id];  
Expected Output:   

Test: "It will add tasks to the console from the form input"  
Code: taskList  
Expected Output: TaskList {tasks: {…}, currentId: 1}  

Test: "It will display inputted tasks in a ul"  
Code:   
Expected Output: "Walk Dog: 1"  
