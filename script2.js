(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button**
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'rgb(124,252,0)';
        }
        // if answer is wrong OR blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      
    }
  
    //Plethora of const's & Questions

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
            question: "1. What was the first Pixar film?",
            answers: {
            a: "Coco",
            b: "Monsters Inc.",
            c: "Toy Story",
        },
            correctAnswer: "c"
        },
        {
            question: "2. What is Nemo's dad's name in Finding Nemo?",
            answers: {
            a: "Brendan Eich",
            b: "Marlin",
            c: "Steve Rogers",
            },
            correctAnswer: "b"
        },
        {
            question: "3. What's the name of the lead protagonist from Cars?",
            answers: {
            a: "Lightning McQueen",
            b: "James Gosling",
            c: "Tow Mater",
        },
            correctAnswer: "a"
        },
        {
            question: "4. Which holiday does the film Coco revolve around?",
            answers: {
            a: "Day of the Dead",
            b: "Christmas",
            c: "New Years",
        },
            correctAnswer: "a"
        },
          {
              question: "5. What is the name of the actor that has appeared in EVERY Pixar feature film?",
              answers: {
              a: "Tom Hiddleston",
              b: "Guido van Rossum",
              c: "John Ratzenberger",
            },
              correctAnswer: "c"
          },
            {
              question: "6. In Monsters Inc, what is the name of the city Mike and Sully work in?",
              answers: {
              a: "Harryhausen's",
              b: "Monstropolis",
              c: "Asgard",
            },
              correctAnswer: "b"
          },
            {
              question: "7. What breed of dog is Dug in Up?",
              answers: {
              a: "Scottish Terrier",
              b: "Golden Retriever",
              c: "Maltipoo",
            },
              correctAnswer: "b"
            },
            {
              question: "8. In what city is Ratatouille set?",
              answers: {
              a: "Paris",
              b: "New York City",
              c: "London",
            },
              correctAnswer: "a"
          },
            {
              question: "9. Who was the owner of Buzz and Woody in Toy Story?",
              answers: {
              a: "Sid",
              b: "Hannah",
              c: "Andy",
            },
              correctAnswer: "c"
            },
            {
              question: "10. Which five emotions control Riley in the film Inside Out?",
              answers: {
              a: "Joy, Sadness, Anger, Fear, and Disgust",
              b: "Sadness, Happiness, Love, Anger, and Fear",
              c: "Joy, Sadness, Excitement, Fear, and Jealousy",
            },
              correctAnswer: "a"
          },
            {
              question: "11. What is the name of eponymous Good Dinosaur?",
              answers: {
              a: "Miguel",
              b: "Arlo",
              c: "Butch",
            },
              correctAnswer: "b"
            },
            {
              question: "12. Who is the first villain featured in Incredibles 2?",
              answers: {
              a: "The Screenslaver",
              b: "The Underminer",
              c: "Syndrome",
            },
              correctAnswer: "b"
          },
            {
              question: "13. What Pasta is the chef controlled by Remy in Ratatouille named after?",
              answers: {
              a: "Ziti",
              b: "Spaghetti",
              c: "Linguine",
            },
              correctAnswer: "c"
          },
            {
              question: "14. What is the name of the little girl in Monsters Inc.?",
              answers: {
              a: "Boo",
              b: "Kitty",
              c: "Sam",
            },
              correctAnswer: "a"
          },
            {
              question: "15. What is the address that Marlin and Dory are trying to reach in Finding Nemo?",
              answers: {
              a: "78 West Brookside Street",
              b: "10 Broad Street",
              c: "42 Wallaby Way",
            },
              correctAnswer: "c"
          },
            {
              question: "16. In Coco, what does Miguel's family make for a living?",
              answers: {
              a: "Candy",
              b: "Shoes",
              c: "Sparkly underwear made for Wrestlers",
            },
              correctAnswer: "b"
          },
            {
              question: "17. What are the names of the two brothers in Onward?",
              answers: {
              a: "Ian and Barley",
              b: "Oliver and James",
              c: "Lucas and Benjamin",
            },
              correctAnswer: "a"
          },
            {
              question: "18. In Toy Story, who is the sworn enemy of the Galactic Alliance?",
              answers: {
              a: "Buzz Lightyear",
              b: "Emperor Zurg",
              c: "Stinky Pete",
            },
              correctAnswer: "b"
          },
            {
              question: "19. Who is the leader of the food stealing grasshopper gang in A Bug's Life?",
              answers: {
              a: "Dot",
              b: "Flik",
              c: "Hopper",
            },
              correctAnswer: "c"
          },
            {
              question: "20. What sport does Riley play in Inside Out?",
              answers: {
              a: "Hockey",
              b: "Tennis",
              c: "Soccer",
            },
              correctAnswer: "a"
          },
        ];
  
    // Kick things off
    buildQuiz();
  


    // Event listener
    submitButton.addEventListener('click', showResults);

  })();