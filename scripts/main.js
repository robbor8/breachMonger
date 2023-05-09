let clientOne = "Jim";
let clientOneAttendance = 2;

let clientTwo = "Bob";
let clientTwoAttendance = 0;

//Check for the number of attendences agains the breach amount
function hasBreached(attendences = 0) {
    return attendences > 1;
}

class Client {
    constructor(name) {
        this.name = name;
        this.attendences = 0;
    }

    idBreach() {
        if (hasBreached(this.attendences)) {
            return `${this.name} has breached`;
        } else {
            return `${this.name} hasn't breached`;
        }
    }
}

let clients = [new Client(clientOne), new Client(clientTwo)];
let attendences = [clientOneAttendance, clientTwoAttendance];

for (let client = 0; client < clients.length; client++) {
    clients[client].attendences = attendences[client];
       
    console.log(`${clients[client].idBreach()}`);
}

