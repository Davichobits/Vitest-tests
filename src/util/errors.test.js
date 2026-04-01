import { describe, it, expect, beforeEach } from 'vitest';
import { HttpError, ValidationError } from './errors';

let httpError
let validationError

beforeEach(()=>{
  httpError = new HttpError(404, 'Not found', {resourse: 'user'})
  
})

describe('HttpError class', ()=>{
  // it('should have a statusCode, message and data properties', ()=>{
  //   expect(error).toHaveProperty('statusCode')
  //   expect(error).toHaveProperty('message')
  //   expect(error).toHaveProperty('data')
  // })

  it('should create an instance with correct properties', ()=>{
    expect(httpError).toBeInstanceOf(HttpError);
    expect(httpError.statusCode).toBe(404);
    expect(httpError.message).toBe('Not found');
    expect(httpError.data).toEqual({resourse:'user'})
  })

  it('should contain undefined as data if no data is provided', ()=>{
    httpError = new HttpError(404, 'Not found')
    expect(httpError.data).toBeUndefined()
  })

})

describe('ValidationError Class', ()=>{
  it('should have a message provided', ()=>{

    const testMessage = 'User not found'
    
    validationError = new ValidationError(testMessage)

    expect(validationError.message).toBe(testMessage)
  })
})