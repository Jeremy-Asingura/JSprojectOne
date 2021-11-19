// ! to ask for one's first name

let firstName = prompt("What is your first name?");
alert(`You are most welcome ${firstName}`);

// ! to ask for one's second name

let secondName = prompt("What is your second name?");
alert(`You are most welcome ${firstName} ${secondName}`);

// ! to ask one for their age

let age = prompt("How old are you?");

// ! to determine whether they are a child or an adult

if (age < 18) {
    alert("You are not an adult.")
} else {
    alert("You are an adult.")
}

alert(`Thank you ${firstName} ${secondName} for visiting my website`)