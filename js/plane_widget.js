// fire on page load
$(document).ready(function() {
	plane = {
		"plane" : "long",
		"seats" : {
			"1A" : false,
			"1B" : false,
			"2A" : false,
			"2B" : false,
			"3A" : false,
			"3B" : false,
			"4A" : false,
			"4B" : false,
		}
	};
	getPlane();
	setPlane();
	// on seat select, update the dropdown list
	$(".plane-seat.seat-empty").click(function () {
		$(".plane-seat").removeClass("seat-selected");
		$(this).addClass("seat-selected");
		$(".single-option-selector").val(this.id).change();
	});
});

// get the plane seats available from the dropdown
function getPlane () {
	var seats = [];
	$(".single-option-selector option").each(function () {
		var seat = $(this).val();
		plane.seats[seat] = true;
	});
}

// output the plane to graphical representation
function setPlane () {
	$.each(plane.seats, function (seatId, status) {
		if (status) {
			seat = "empty";
		} else {
			seat = "occupied";
		}
		$(".seats-list").append(
			"<li>" +
			"<div id=\"" + seatId + "\"" +
			"class=\"plane-seat seat-" + seat + "\"></div>" +
			"</li>");
	});
}