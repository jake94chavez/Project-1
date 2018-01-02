// Adds a click event listener to submit (doesn't actually submit anything yet)
const onSubmit = () => {
	$('#submission').click((event) => {
		console.log('Submitted!')
	// Get individual answer score
	let answerScore = (qName) => {
		let $radiosNo = $('input[name=' + qName 
		+ ']');

		for (let i = 0; i < $radiosNo.length; i++) {
			if ($radiosNo[i].checked) {
				var answerValue = Number($radiosNo[i].value);
			}
		}
		if (isNaN(answerValue)) {
			var answerValue = 0;
		}
		return answerValue;
	}
	// Total Score
	const getScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + 
		answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7') + 
		answerScore('q8') + answerScore('q9') + answerScore('q10'));
		console.log('getScore: ' + getScore);

	// Return correct answer string
	let correctAnswer = (correctStringNo, qNumber) => {
		console.log('qNumber: ' + qNumber);
		return ('The correct answer for question ' + qNumber + ' is <strong>' +
			$('#' + correctStringNo)[0].firstChild.data + '</strong>');
			}

	// Print correct answers for wrong questions only
		for (let i = 1; i <= 10; i++) {
			let question = ('q' + i)
			if (answerScore(question) === 0 ) {
				let correct = ('#correctAnswer' + i)
				$(correct).append(correctAnswer(('correctChoice' + i), i));
			}
			}
		});
}


onSubmit();