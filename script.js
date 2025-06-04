// Question Database

const qaDatabase = {

  'Array Methods': [
    {
      question: 'How can you check if an array includes a specific element?',
      answer: 'Use the includes() method: array.includes(element) - returns true or false.'
    },
    {
      question: 'How do you add elements to the end of an array?',
      answer: 'Use the push() method: array.push(element1, element2, ...)'
    },
    {
      question: 'How do you combine two arrays?',
      answer: 'Use concat() method or spread operator: arr1.concat(arr2) or [...arr1, ...arr2]'
    },
    {
      question: 'How do you find an element in an array?',
      answer: 'Use find() method: array.find(element => condition) - returns the first matching element.'
    },
    {
      question: 'What is the purpose of the `pop()` method?',
      answer: 'The `pop()` method removes the last element from an array and returns that element.'
    },
    {
      question: "How does the `shift()` method work?",
      answer: "The `shift()` method removes the first element from an array and returns that element."
    },
    {
      question: "What does the `unshift()` method do?",
      answer: "The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array."
    },
    {
      question: "What is the use of the `slice()` method?",
      answer: "The `slice()` method returns a shallow copy of a portion of an array into a new array, without modifying the original array."
    },
    {
      question: "What does the `splice()` method do?",
      answer: "The `splice()` method changes the contents of an array by removing, replacing, or adding elements."
    },
    {
      question: "What is the purpose of the `filter()` method?",
      answer: "The `filter()` method creates a new array with all elements that pass a test implemented by a provided function."
    },
    {
      question: "How does the `indexOf()` method work?",
      answer: "The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present."
    },
    {
      question: "How does the `join()` method work?",
      answer: "The `join()` method joins all elements of an array into a string, separated by a specified separator."
    },
    {
      question: "What does the `reverse()` method do?",
      answer: "The `reverse()` method reverses the order of the elements in an array and modifies the original array."
    },
    {
      question: "How does the `sort()` method work?",
      answer: "The `sort()` method sorts the elements of an array in place and returns the sorted array."
    },
  ],

  'Loops': [
    {
      question: "What are the types of loops available in JavaScript?",
      answer: "The types of loops in JavaScript include `for`, `while`, `do...while`, `for...in`, and `for...of` loops."
    },
    {
      question: "How does the `for` loop work in JavaScript?",
      answer: "The `for` loop is used to run a block of code a specified number of times. It consists of three parts: initialization, condition, and increment/decrement."
    },
    {
      question: "What is the syntax of a `while` loop?",
      answer: "The syntax of a `while` loop is: `while (condition) { // code to execute }`. The loop runs as long as the condition evaluates to true."
    },
    {
      question: "What is the difference between `while` and `do...while` loops?",
      answer: "A `while` loop checks the condition before executing the block, whereas a `do...while` loop executes the block at least once before checking the condition."
    },
    {
      question: "What is a `for...in` loop used for?",
      answer: "The `for...in` loop is used to iterate over the enumerable properties of an object or the indices of an array."
    },
    {
      question: "What is a `for...of` loop used for?",
      answer: "The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc."
    },
    {
      question: "How can you break out of a loop in JavaScript?",
      answer: "You can use the `break` statement to exit a loop prematurely."
    },
    {
      question: "How can you skip an iteration in a loop?",
      answer: "You can use the `continue` statement to skip the current iteration and move to the next iteration of the loop."
    },
    {
      question: "Can you nest loops in JavaScript?",
      answer: "Yes, you can nest loops in JavaScript by placing one loop inside another. Each loop should have its own counter or iterator."
    },
    {
      question: "What is an infinite loop?",
      answer: "An infinite loop is a loop that runs indefinitely because its condition never evaluates to false or it lacks a termination condition."
    },
    {
      question: "How can you prevent an infinite loop?",
      answer: "To prevent an infinite loop, ensure the loop has a condition that will eventually evaluate to false and update the loop variable appropriately."
    },
    {
      question: "What is the difference between `for...in` and `for...of` loops?",
      answer: "`for...in` iterates over the keys (property names) of an object, while `for...of` iterates over the values of iterable objects like arrays."
    },
    {
      question: "How can you iterate over an array using a loop?",
      answer: "You can iterate over an array using a `for` loop, `for...of` loop, or array methods like `forEach()`."
    },
    {
      question: "What is the difference between `for` and `forEach()` loops?",
      answer: "`for` is a general-purpose loop, while `forEach()` is a method specifically for iterating over arrays. `forEach()` cannot be stopped with `break`."
    },
    {
      question: "Can you use a `for` loop with an object?",
      answer: "Directly iterating over an object with a `for` loop is not possible, but you can use `for...in` to iterate over an object's keys or `Object.entries()` with a `for...of` loop."
    }, {
      question: "What happens if the condition in a `for` loop is omitted?",
      answer: "If the condition is omitted, the loop runs indefinitely unless it is terminated by a `break` statement."
    },
    {
      question: "Can you iterate over a string using a loop?",
      answer: "Yes, you can iterate over a string using a `for` loop, `for...of` loop, or by accessing each character using its index."
    },
    {
      question: "What is the purpose of the `return` statement in a loop?",
      answer: "The `return` statement is used inside a function to exit the function and optionally return a value. If used inside a loop within a function, it stops the loop and exits the function."
    }
  ],

  'String Methods': [
    {
      question: "What does the `charAt()` method do?",
      answer: "The `charAt()` method returns the character at a specified index in a string."
    },
    {
      question: "How does the `concat()` method work for strings?",
      answer: "The `concat()` method combines two or more strings and returns a new concatenated string."
    },
    {
      question: "What is the purpose of the `includes()` method?",
      answer: "The `includes()` method checks if a string contains a specified substring and returns true or false."
    },
    {
      question: "How does the `indexOf()` method work?",
      answer: "The `indexOf()` method returns the index of the first occurrence of a specified substring in a string, or -1 if the substring is not found."
    },
    {
      question: "What does the `lastIndexOf()` method do?",
      answer: "The `lastIndexOf()` method returns the index of the last occurrence of a specified substring in a string, or -1 if the substring is not found."
    },
    {
      question: "How does the `split()` method work?",
      answer: "The `split()` method splits a string into an array of substrings based on a specified separator."
    },
    {
      question: "What does the `toLowerCase()` method do?",
      answer: "The `toLowerCase()` method converts all characters in a string to lowercase and returns a new string."
    },
    {
      question: "What does the `toUpperCase()` method do?",
      answer: "The `toUpperCase()` method converts all characters in a string to uppercase and returns a new string."
    },
    {
      question: "How does the `trim()` method work?",
      answer: "The `trim()` method removes whitespace from both ends of a string and returns a new string."
    },
    {
      question: "What is the purpose of the `replace()` method?",
      answer: "The `replace()` method replaces a specified substring or pattern in a string with a new substring and returns the modified string."
    },
    {
      question: "What is the difference between `substr()` and `substring()`?",
      answer: "The `substr()` method extracts a substring starting from a specified index for a specified length, while `substring()` extracts a substring between two specified indices."
    },
    {
      question: "How does the `startsWith()` method work?",
      answer: "The `startsWith()` method checks if a string begins with a specified substring and returns true or false."
    },
    {
      question: "What does the `endsWith()` method do?",
      answer: "The `endsWith()` method checks if a string ends with a specified substring and returns true or false."
    },
    {
      question: "What is the purpose of the `padStart()` method?",
      answer: "The `padStart()` method pads the beginning of a string with another string until it reaches a specified length."
    },
    {
      question: "What does the `padEnd()` method do?",
      answer: "The `padEnd()` method pads the end of a string with another string until it reaches a specified length."
    },
    {
      question: "How can you repeat a string multiple times?",
      answer: "You can repeat a string using the `repeat()` method, e.g., `str.repeat(3)` repeats the string three times."
    },
  ],


};

// Load Questions 

let currentTopic = 'Array Methods'

function loadQuestionsForTopic(topic) {
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  const shuffled = shuffleArray(qaDatabase[topic]);
  const selectedQuestions = shuffled.slice(0, 4);

  const cards = document.querySelectorAll('.flashcard');
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('flipped');

    const questionEl = cards[i].querySelector('.flashcard-question');
    const answerEl = cards[i].querySelector('.flashcard-answer');

    if (selectedQuestions[i]) {
      questionEl.textContent = selectedQuestions[i].question;
      answerEl.textContent = selectedQuestions[i].answer;
    };
  };
};

// Activating Nav

const activatedNavItems = document.querySelectorAll('.nav-item')

for (const nav of activatedNavItems) {
  nav.addEventListener('click', function () {
    for (const nav of activatedNavItems) {
      nav.classList.remove('active');
    };
    this.classList.add('active');

    const newTopic = this.textContent;

    if (currentTopic !== newTopic) {
      currentTopic = newTopic;
      loadQuestionsForTopic(currentTopic);
    };
  });
};

// Flip functionality

const flippedButtons = document.querySelectorAll('.flip-button');

for (const button of flippedButtons) {
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    const card = this.closest('.flashcard');
    card.classList.toggle('flipped');
  });
};

// Refreshing functionality

document.querySelector('.refresh-button').addEventListener('click', function () {
  this.style.transform = 'rotate(360deg)';
  loadQuestionsForTopic(currentTopic);
  setTimeout(() => {
    this.style.transform = 'rotate(0deg)';
  }, 500);
});