// Object of planets
let planet_obj = [
    { name: 'Mercury', hasLife: false },
    { name: 'Venus', hasLife: false },
    { name: 'Earth', hasLife: true },
    { name: 'Mars', hasLife: true },
    { name: 'Jupiter', hasLife: false },
    { name: 'Saturn', hasLife: false },
    { name: 'Uranus', hasLife: false },
    { name: 'Naptune'},
];

// Loops means repeating a code for certain times
for (let index = 0; index < planet_obj.length; index++) {
    const element = planet_obj[index];

    if(element['hasLife'] == undefined) {
        console.log(element['name'] + " without info.");
        continue; // break stop the iteration
    }
        
    if(element['hasLife']) 
        console.log(element['name'] + " Has life");
    else if(!element['hasLife']) 
        console.log(element['name'] + " There is not life ");

    // break
    if(element['name'] == "Earth") {
        break;
    }
    
}

// do while, while, foreach

