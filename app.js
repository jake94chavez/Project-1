// Adds a click event listener to submit (doesn't actually submit anything yet)
const onSubmit = () => {
	$('#submission').click((event) => {
		console.log('Submitted!')

	// Hides the submit button to prevent multiple submissions and adds 'Show Answers' button
	let buttonChange = () => {
		$('.submitter').css('display','none')
		$('.hideAnswers').css('display', 'block')
	}
	buttonChange();

	// Reveals the answers of the questions
	$('#hider').click((event) => {
		$('div.quizAnswers').css('display', 'block')
		$('.hideAnswers').css('display', 'none')
	})

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
	// Print the score on the page so the user can see their Total
		let printScore = () => {
			console.log(getScore + '/10')
			if (getScore === 10) {
			$('.quizScore').append('Congratulations! A <strong> PERFECT </strong> score!')
			} else if (getScore === 7 || getScore === 8 || getScore === 9) { 
			$('.quizScore').append('Nice! You scored <strong>' + getScore + '/10 </strong>')
			} else if (getScore === 4 || getScore === 5 || getScore === 6) {
			$('.quizScore').append('Not bad! You scored <strong>' + getScore + '/10</strong>, try again.')
			} else if (getScore === 1 || getScore === 2 || getScore === 3) {
			$('.quizScore').append('Yikes! You only scored <strong>' + getScore + '/10</strong>, study up and give it another shot.')
			} else {
			$('.quizScore').append('Oof... Hate to break it to you but you didn\'t get any correct. Maybe this isn\'t your forte.')
			}
		}
		printScore();
		});
}


onSubmit();