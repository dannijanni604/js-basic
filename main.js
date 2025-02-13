console.log('Adnan');
const todoList = [];
const taskOne = {
    'id': '01',
    'title': 'First Task',
    'date': new Date().toISOString,
}

const taskTwo = {
    'id': '02',
    'title': 'Second Task',
    'date': new Date().toISOString,
}

const taskThree = {
    'id': '03',
    'title': 'Third Task',
    'date': new Date().toISOString,
}

todoList.push(taskOne, taskTwo, taskThree);

const id = prompt('Write ID');

const foundIndex = todoList.findIndex((element) => element.id == id);
console.log(foundIndex);

todoList[foundIndex].title = 'Adnan Ashraf';

console.log('===TODAY TASK===')
todoList.forEach((element) => {
    console.log(element.id, element.title);
});
console.log('===END===')