{
    /**
     * If we declare a var without use a keyword it goes to global scope (window objetct)
     */

    firstname = "Yahhh";

    function x() {
        var firstname = "Julião Kataleko"
    }

    x();

    var age;
    // console.log(age);
    age = 20;
    // console.log(age);

    // Var hoisting
    // console.log(planet);
    var planet = "Heart"; // This assignment is executed before all code


    // Let keyword
    let country = "Angola";
    
    // you cannot define a variable twice with let in the scope...
    // With let cannot access a variable before initialization
    // Like var hoisting 
    // When define a const var we need to pass a value
    
    function local() {
        let country = "Portugal";
    }

    console.log(country);

    // Const keyword
    // const is like let but its value cannot change
    // Const vars are read_only
    const APP_NAME = "Game F5"
    const BASE_URL = "http://game_f5"
    const LEVELS = ["1", "2", "3"]

    console.log(LEVELS);
    
    try {

        APP_NAME = "Other Game"

    } catch (error) {

        console.log("There'is an error", APP_NAME);

    }
    
}