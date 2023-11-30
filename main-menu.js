const menu = {
    addDishToCourse (courseName, dishName, dishPrice) {
        dish = {
            name: dishName,
            price: dishPrice,       
    };
         this.courses[courseName].push(dish); //I still don't fully understand this line
    }, 
    getRandomDishFromCourse (courseName) {
        dishes = this.courses[courseName]; 
        const randomDishGenerator = Math.floor(Math.random() * dishes.length);
        return dishes[randomDishGenerator];
    },
    generateRandomMeal () { //Why doesn't this one need parameters?
        appetizer = this.getRandomDishFromCourse('appetizers');
        main = this.getRandomDishFromCourse('mains');
        dessert = this.getRandomDishFromCourse('desserts'); 
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Appetizer: ${appetizer.name}, Main: ${main.name}, dessert: ${dessert.name}. Total Price: $${totalPrice}.`;
    },

    courses: {
            appetizers: [],
            mains: [],
            desserts: []
        }        
    } 
menu.addDishToCourse('appetizers', 'Caesar Salad', 8.99);
menu.addDishToCourse('appetizers', 'Bruschetta', 7.99);
menu.addDishToCourse('appetizers', 'beef tartar', 21.99);
menu.addDishToCourse('mains', 'Spaghetti Bolognese', 12.99);
menu.addDishToCourse('mains', 'Chicken Alfredo', 14.99);
menu.addDishToCourse('mains', 'Pizza', 18.99);
menu.addDishToCourse('desserts', 'Chocolate Cake', 6.99);
menu.addDishToCourse('desserts', 'Cheesecake', 8.99);
menu.addDishToCourse('desserts', 'Cannoli', 7.99);
const Meal = menu.generateRandomMeal();
console.log(Meal);


