{
    // A string can be defined using single quotes, double quotes or ``
    let name = "'Julião Kataleko'";
    let lastname = `Kataleko`;
    let about = "My life is wonderfull... very amazing";

    // let bio = "I was born in Benguela City" +
    //     " Its located in Angola Country" +
    //     " Ocidental Africa coast";

    // let bio = "I was born in Benguela City \
    //     Its located in Angola Country \
    //     Ocidental Africa coast";

    // let bio = `
    //     I was born in Benguela City 
    //     Its located in Angola Country 
    //     Ocidental Africa coast
    // `;

    console.log(lastname + " " + about);
    // console.log(typeof lastname.charAt(10));
    console.log(typeof lastname[4]);

    // Scape notation in Javascript

    let bio = "I was born in \"Benguela\" City \
        Its located in Angola Country \
        Ocidental Africa coast";

    let civil_status = 'I\'m single right now.\nI have a girlfriend and a doughter';
    let eye_color = "\nMy eyes are: \tBlack";
    console.log(bio, civil_status, eye_color);
    console.log(bio.length);

    // getting the last character of string
    console.log(civil_status.charAt(civil_status.length-1));
    console.log(civil_status[civil_status.length-1]);
}