{
    let name = "Julien";

    let disciples = [
        "Peter", "James",
        "John", "Andrew", 
        "Bartholomew",
        "James Younger",
        "Thaddeus"
    ]

    console.log(disciples);

    // array length
    console.log(disciples.length);

    // add element to array
    disciples.push("Matthew")

    // add element at beggining of array
    disciples.unshift("Philip")

    // Remove the last element
    disciples.pop()

    console.log(disciples);

    // Remove the first element
    disciples.shift()
    console.log(disciples);

    // Remove specified element
    disciples.splice(0,1); // Start from zero and remove 1
    console.log(disciples);

    // Get the index of a element
    let index_to_delete = disciples.indexOf("John");
    disciples.splice(index_to_delete, 1);
    console.log(disciples);

    // Getting a part of array
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

    let jovians = planets.slice(planets.indexOf("Jupiter"), planets.length);
    console.log(jovians);

    let terrestrial = planets.slice(0,4);
    console.log(terrestrial.concat(jovians).join("|||"));
}