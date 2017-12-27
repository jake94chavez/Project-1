// Adds a click event listener to submit (doesn't actually submit anything yet)
const onSubmit = () => {
	$('#submission').click((event) => {
		alert('Submitted!')
// Get answer score
let answerScore = (qName) => {
	debugger;
	let $radiosNo = $('input[name=' + qName 
		+ ']');

	for (let i=0; i < $radiosNo.length; i++) {
		if ($radiosNo[i].checked) {
			var answerValue = Number($radiosNo[i].value);
		}
	}
	if (isNaN(answerValue)) {
		var answerValue = 0;
	}
	return answerValue;
}

const getScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + 
	answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + 
	answerScore('q8') + answerScore('q9') + answerScore('q10'));
	console.log('getScore: ' + getScore);
	});
}


onSubmit();