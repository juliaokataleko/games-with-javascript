{
    // in Javascript everything is object
    // Object: Something that has properties, methods and states

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Naptune'
    ];

    // Object of planets
    let planet_obj = [
        { name: 'Mercury', hasLife: false },
        { name: 'Venus', hasLife: false },
        { name: 'Earth', hasLife: true },
        { name: 'Mars', hasLife: true },
        { name: 'Jupiter', hasLife: false },
        { name: 'Saturn', hasLife: false },
        { name: 'Uranus', hasLife: false },
        { name: 'Naptune', hasLife: false },
    ];

    console.log(planet_obj);

    console.log(planets, typeof planets);

    const PEN = {
        color: "Red",
        brand: "Special",
        price: {
            value: 2,
            currency: "USD"
        },
        name: function() {
            return this.color + " " + this.brand
        }
    }; // Or const PEN = new Object;

    PEN.color = "Blue";
    PEN.brand = "Special";
    PEN.is_permanent = true;

    console.log(PEN);
    console.log(PEN.color); // Or console.log(PEN['color']);
    console.log(PEN.brand); // Or console.log(PEN['brand']);
    console.log(PEN.price); // Or console.log(PEN['price']);
    console.log(PEN.is_permanent); // Or console.log(PEN['is_permanent']);
    console.log(PEN.name());

}