// Game Logic

let currentRoom = "start";

function processInput() {
    const input = document.getElementById("input").value.toLowerCase();
    document.getElementById("input").value = ""; // Clear input field

    let output = "";

    switch (currentRoom) {
        case "start":
            if (input === "forward") {
                currentRoom = "garageEntrance";
                output = "You are at the entrance to your mech garage. Ahead is the tarmac leading to the rest of your base.";
            } else {
                output = "Your mech can only move forwards out of the garage. You wouldn't want to pulverise the walls and bring the whole building down.";
            }
            break;

            case "garageEntrance": 
                if (input === "forward") {
                    currentRoom = "garageApron";
                    output = "You are now outside the garage, a treeline is ahead of you and many mech hangers are to either side.";
                } else if (input === "backward") {
                    currentRoom = "start";
                    output = "You are back inside the garage entrance";
                } else {
                    output = "You can go forwards or backwards or turn right or left here.";
                }
            break;

            case "garageApron":
                if (input === "turn left") {
                    currentRoom = "garageApronW";
                    output = "Your mech has turned 90 degress to the left and you are now facing the garage offices.";
                } else {
                    output = "You can only turn left here.";
                }
                break;

                default:
                    output = "Invalid command.";
            }
            document.getElementById("output").innerHTML = output;
            }