let shoppingList = {
  pen: '3 dozen',
  books: 5,
  pen_holder: 4,
  pencil : 6
}

let propertyNames = Object.keys(shoppingList);
console.log(propertyNames);
for (i = 0; i < propertyNames.length; i++){
  let propertyValues = shoppingList[propertyNames[i]];
  console.log(propertyNames[i], propertyValues )
}
