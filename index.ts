#!/usr/bin/env node
import inquirer from "inquirer"

let todos = [];
let condition=true

while(condition)

{let addTask = await inquirer.prompt(
    [
         {
            name: 'todoItem',
            type:'input',
            message:"What  you want to add in your Todolist?"
        },
        {
          name:'addmore',
          type:'confirm',
          message:'Do you want to add more?',
          default:false
        },
  {
            name: 'todoGrocery',
            type:'input',
            message:"What you want to buy vegetable?",
            

        },
        {
          
          name:'addmore_Grocery',
          type:'confirm',
          message:'Do you want to add more todolist?',
          default:false
        }
      ]
);
    
      
      


todos.push(addTask.todoItem);
todos.push(addTask.todoGrocery);
condition=addTask.addmore
condition=addTask.addmore_Grocery

console.log(todos);

 }
