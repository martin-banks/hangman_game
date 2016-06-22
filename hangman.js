// first draft - not in use
var words = [
	'tree',
	'beach',
	'sea',
	'factory'
];


var r = function(min, max){
	return min + (Math.floor(Math.random()*max))
};

var setWord = function(){
	return words[r(0, words.length)]
};

var puzzleWord = ['t','r','e','e'];
var puzzleView = ['_','_','_','_']
// set puzzle view
for(var i=0; i<setWord.length; i++){
	puzzleView.push('_');
};
/*
var puzzleView = function(param){
	return (param.toString()).replace(/,/g, '');
}
*/
//console.log(puzzleView(puzzleWord));


var guessLetter = 't';


// check guess against setWord

(function (){
	var guessLetter = 't';
	console.log('playing', guessLetter);
	for (var i=0; i < (words[0].length); i++){
		console.log('checking', puzzleWord[i])

		if (guessLetter === puzzleWord[i]){
			// right letter
			puzzleWord[i] = guessLetter; 
			//puzzleView(puzzleWord);
			// check if haas complete word
			if ( puzzleView === puzzleWord ){
				console.log( 'winner!')
			} else {
				console.log( 'correct!, next guess')
				return
			}
		} else if (i === (words[0].length)) {
			// show next wrong image
			console.log( 'wrong guess')
		}
	}

})()