class Prenotazione {
    constructor(name, email, checkIn, checkOut, roomType, numberOfGuests) {
        this.name = name;
        this.email = email;
        this.checkIn = new Date(checkIn);
        this.checkOut = new Date(checkOut);
        this.roomType = roomType;
        this.numberOfGuests = numberOfGuests;
    }

    calculateCost() {
        const roomRates = {
            single: 100,
            double: 150,
            suite: 250
        };
        const nights = (this.checkOut - this.checkIn) / (1000 * 60 * 60 * 24);
        return nights * roomRates[this.roomType] * this.numberOfGuests;
    }

    generateSummary() {
        return `
            Name: ${this.name}
            Email: ${this.email}
            Check-in: ${this.checkIn.toLocaleDateString()}
            Check-out: ${this.checkOut.toLocaleDateString()}
            Room Type: ${this.roomType}
            Number of Guests: ${this.numberOfGuests}
            Total Cost: $${this.calculateCost().toFixed(2)}
        `;
    }
}

document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const roomType = document.querySelector('input[name="roomType"]:checked').value;
    const numberOfGuests = parseInt(document.getElementById('numberOfGuests').value);

    const prenotazione = new Prenotazione(name, email, checkIn, checkOut, roomType, numberOfGuests);
    const summary = prenotazione.generateSummary();

    document.getElementById('summary').innerText = summary;
});