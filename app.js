// Adds a click event listener to submit (doesn't actually submit anything yet)
let onSubmit = () => {
	$('#submission').click((event) => {
		alert('Submitted!')
	});
}

onSubmit();