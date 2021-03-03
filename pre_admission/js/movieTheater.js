function movieTheater() {
	var seats = 50;
	var seatsSold = 28;

	return {
		remainingSeats: function () {
			return (seats - seatsSold)
		}
	}
}

roomOne = movieTheater();
roomOne.remainingSeats();