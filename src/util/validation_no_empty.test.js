import { validateNotEmpty } from './validation_no_empty';
import { ValidationError } from './errors';
import { describe, it, expect } from 'vitest';

describe('ValidationError', ()=>{

  it('should not to throw an error if a message text is provided', ()=>{

    const textMessage = 'test'
    const errorMessage = 'no text provided'
    expect(()=> validateNotEmpty(textMessage, errorMessage)).not.toThrow()

  })

  it('Should throw an error if text is empty', ()=>{

    const textMessage = ''
    const errorMessage = 'no text provided'
    expect(()=> validateNotEmpty(textMessage, errorMessage)).toThrow(errorMessage)

  })

  it('Should throw an error if the text contains only spaces', ()=>{

    const textMessage = '    '
    const errorMessage = 'no text provided'
    expect(()=> validateNotEmpty(textMessage, errorMessage)).toThrow(errorMessage)

  })

  it('should throw if text is null', () => {
  expect(() => {
    validateNotEmpty(null, 'no text provided');
  }).toThrow();
});

it('should throw if text is undefined', () => {
  expect(() => {
    validateNotEmpty(undefined, 'no text provided');
  }).toThrow();
});

it('should throw if text is a number', () => {
  expect(() => {
    validateNotEmpty(123, 'no text provided');
  }).toThrow();
});
  
})