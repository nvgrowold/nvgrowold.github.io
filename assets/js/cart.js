function save(e){
    var userPreference;

		if (confirm("Do you want to save changes?") == true) {
			alert("Data saved!");
		}
    e.returnValue = false;
}

function purchase(){
    if (confirm("Confirm?") == true) {
		alert("Order confirmed, your meal will be with you shortly, thank you for the purchase!");
	}
    else {
        alert("Check Out Canceled!");
	}
}