// Exercise 1
// Refactor the following code to use forEach instead of a "for loop":

/*var saveUser = function (user) {
    console.log('saving', user.name);
  };
  
  var saveUsers = function () {
    var users = [
      { id: 15, name: 'Bob' },
      { id: 23, name: 'Jimbo' },
      { id: 35, name: 'Cathy' }
    ];
  
   users.forEach(function (j) {
       saveUser(j); 
   });
  };
 console.log(saveUser()); */


//  exercise 2
// Use forEach to calculate the volumes of each "box" in the boxes array and populate volumes with those figures. The volumes array should have 5 numbers in it.

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 },
];

/*var volumes = [];

boxes.forEach (measurement => {
    volume = measurement.length * measurement.width * measurement.height; 
    volumes.push(volume); 
}); 

console.log(volumes); */

// Use map to make lengths an array of all the length properties from the boxes array of objects.

 let lengths = boxes.map((lengths) => {
    return lengths.length;
 });

 console.log(lengths); 

 let volumes = boxes.map((vol) => {
        return vol.length * vol.width * vol.height; 
 });
 console.log(volumes); 