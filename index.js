function func(wordVal)
{
  // Check if the sentence entered is empty.
  if(wordVal.trim() == "")
  {
  return {
    "status": false,
    "message": "sentence cannot be empty" 
  };
  }

  let splittedWords = wordVal.split(" ");

  //Check if the sentence contains less than 2 words
  if(splittedWords.length < 2)
  {
    return {
      "status": false,
      "message": "Sentence Cannot Have Less than 2 Words" 
    };
  }
  //Check if the sentence contains words that has less than 1 character
  if(splittedWords.includes("")){
    return {
      "status": false,
      "message": "Each word must have more than 1 character" 
    };
  }

  let largestWord = "";

  //Loop through the splittedWords array and compare each length of the words
  for(let x of splittedWords)
  {
    //If the current word length is greater than the previous largest word length, replace it.
    if(x.length > largestWord.length)
    {
      largestWord = x;
    }
  } 

  //Get the index position of the largest Word
  let largestWordIndex = wordVal.indexOf(largestWord);

  return {
  "status": true,
  "message": "Successful",
  "value": {
    "largestWord": largestWord,
    "index": largestWordIndex
    }
  };
}

let sentence = prompt("Enter Your Sentence");
let sentenceFuncCall = func(sentence);
if(sentenceFuncCall.status){
  let largestSentenceWord = sentenceFuncCall.value.largestWord;
  let largestSentenceWordIndex = sentenceFuncCall.value.index;
  let finalAnswer = `The largest word in the sentence is ${largestSentenceWord}, and the start index is ${largestSentenceWordIndex}`;
  console.log(finalAnswer);
  alert(finalAnswer);
}
else{
  alert(sentenceFuncCall.message);
}
