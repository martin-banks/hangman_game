(()=>{
	var makeQuiz = (intro, clue, words)=> {
		return {
			setWords: (newWords)=>{
				words;
				newWords.forEach(function(v,i,a){
					words.push(v)
				})
			},
			getWords: (newWords)=>{
				console.log('maker words', words)
				Array.isArray(words)? console.log('is array!') :console.log('not array')
				
				return words
			},
			setIntro: (newIntro)=>{
				intro = newIntro
			},
			getIntro: ()=>{
				console.log(intro)
				return intro;
			},
			setClue: (newClue)=>{
				clue = newClue
			},
			getClue: ()=>{
				return clue
			}
		}
	};


	var newQuiz = makeQuiz('this is the intro', 'this is the clue', ['blueberry', 'banana']);

	var theclue = newQuiz.getClue();
	console.log('the clue:', theclue);

	var theWords = newQuiz.getWords();
	console.log('the words:', theWords)

	newQuiz.getWords()
	newQuiz.getIntro()

// adds new words to the quiz
	newQuiz.setWords(['apple', 'pear']);
	newQuiz.getWords();
	//console.log(newQuiz.getWords())
	newQuiz.setIntro('blah')
	console.log('new intro:', newQuiz.getIntro())
	newQuiz.getIntro()

})()
