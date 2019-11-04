

const MinhaLista = new TodoList()
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('teste');
}

//manipular arrray
const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item,index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item %2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 2;
});

console.log(find);

//arrow function
const newArr = arr.map((item,index) =>{
    return item + index ;
});

const newArr = arr.map(item =>{
    return item;
});

const newArr = arr.map(item => item + 1);

console.log(newArr);
    

