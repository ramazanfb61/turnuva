var data = ["tunç","ali","ahmet","ayşe"]
var chosen = []
var random = Math.floor(Math.random()*data.length)

console.log("Data is : " + data);

chosen.push(data[random])
delete data[random]

console.log("chosen and deleted item is : " + chosen);
console.log("deleted item is : " + data);

console.log(data);