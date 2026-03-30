// import { extractEnteredNumberValues } from './src/parser.js';
// import { calculateResult } from './src/math.js';
// import { generateResultText, outputResult } from './src/output.js';

// const form = document.querySelector('form');

// function formSubmitHandler(event) {
//   event.preventDefault();
//   const numberValues = extractEnteredNumberValues(form);

//   const result = calculateResult(numberValues);
//   const resultText = generateResultText(result);

//   outputResult(resultText);
// }

// form.addEventListener('submit', formSubmitHandler);


import {extractPostData, savePost} from './src/posts/posts'

const form = document.querySelector('form');

export async function submitFormHandler(event) {
  event.preventDefault();

  const formData = new FormData(formData);
  try {
    const postData = extractPostData(formData);
    await savePost(postData);
  } catch (error) {
    showError(error.message)
  }
}

form.addEventListener('submit', submitFormHandler);