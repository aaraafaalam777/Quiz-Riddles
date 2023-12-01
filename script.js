// Questions that will be asked
const Questions = [{
	q: "Which African country is the most populous ?",
	a: [{ text: "Nigeria", isCorrect: true },
	{ text: "Egypt", isCorrect: false },
	{ text: "South Africa", isCorrect: false },
	{ text: "Ethiopia", isCorrect: false }
	]

},
{
	q: "Which ancient civilization built the city of Mohenjo-daro ?",
	a: [{ text: "Mesopotamia", isCorrect: false },
	{ text: "Harappan", isCorrect: true },
	{ text: "Egyptian", isCorrect: false },
	{ text: "Greek", isCorrect: false }
	]

},
{
	q: "Which international relations theory emphasizes the role of ideas, norms and identities in shaping global politics ?",
	a: [{ text: "Realism", isCorrect: false },
	{ text: "Constructivism", isCorrect: true },
	{ text: "Liberalism", isCorrect: false },
	{ text: "Marxism", isCorrect: false }
	]

},
{
	q: "Who was the first woman to serve as the Chief Minister of an Indian state ?",
	a: [{ text: "Indira Gandhi", isCorrect: false },
	{ text: "Jayalalithaa", isCorrect: false },
	{ text: "Mamata Banerjee", isCorrect: false },
	{ text: "Sucheta Kripalani", isCorrect: true }
	]

},
{
	q: "A rectangular field has a length of 40 meters and a width of 30 meters. What is the area of the field in square meters ?",
	a: [{ text: "900", isCorrect: false },
	{ text: "1500", isCorrect: false },
	{ text: "1200", isCorrect: true },
	{ text: "1800", isCorrect: false }
	]

},

{
	q: "According to Einstein's theory of relativity, as an object's speed approaches the speed of light, it's mass ... ?",
	a: [{ text: "Increases", isCorrect: true },
	{ text: "Remains constant", isCorrect: false },
	{ text: "Decreases", isCorrect: false },
	{ text: "Vanishes", isCorrect: false }
	]

},
{
	q: "Which planet in our solar system has the most significant axial tilt ?",
	a: [{ text: "Mercury", isCorrect: false },
	{ text: "Venus", isCorrect: false },
	{ text: "Mars", isCorrect: false },
	{ text: "Uranus", isCorrect: true }
	]

},
{
	q: "Which sea is the saltiest natural lake in the world and is bordered by Jordan, Israel(occupied Palestine), and the West Bank ?",
	a: [{ text: "Caspian Sea", isCorrect: false },
	{ text: "Dead Sea", isCorrect: true },
	{ text: "Red Sea", isCorrect: false },
	{ text: "Aral Sea", isCorrect: false }
	]

},
{
	q: "The more you take, the more you leave behind. What am I ?",
	a: [{ text: "Footprints", isCorrect: true },
	{ text: "Time", isCorrect: true },
	{ text: "Memories", isCorrect: false },
	{ text: "Happiness", isCorrect: false }
	]

},
{
	q: "I fly without wings. Wherever I go, darkness follows me. What am I ?",
	a: [{ text: "Cloud", isCorrect: false },
	{ text: "Wind", isCorrect: false },
	{ text: "Moon", isCorrect: true },
	{ text: "Bat", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();


function loadScore() {
    
	const totalScore = document.getElementById("score")
	totalScore.innerHTML = `You scored ${score} out of ${Questions.length}`
    totalScore.style.border = "3px solid Black";
    totalScore.style.borderRadius = "20px";
    totalScore.style.padding = "10px 10px";
}



function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
        loadScore();
	}
    
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
