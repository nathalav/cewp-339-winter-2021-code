let total = 0;
let count = 0;
let score = 0;
var arrayScores = [];


do {
	//alert("here");
	score = parseInt(prompt("Enter a test score between 0 and 100, enter -1 to terminate"));

	if(score >=0 && score <= 100)
	{
		total += score;
		
		//document.write(`<p>Score = ${score} Count is ${count}`);
		//arrayScores.push() = score;
		arrayScores[count] = score;
		//alert(arrayScores[count]);
		document.write(`<p>Score = ${arrayScores[count]} Count is ${count}`);
		count++;
	}
	else if(score != -1){
		alert("Your input was incorrect!");
	}
}	
while(score != -1);

let average = parseInt(total / count);

const html = `<p>Average = ${average}</p>`;

document.write(html);

