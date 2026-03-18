import { describe, it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken', ()=>{
  it('should generate a token value', (done)=>{
    const userEmail = 'example@example.com'

    generateToken(userEmail, (err, token)=>{
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done()
      } catch (error) {
        done(error);
      }
    })
  });
});

describe('generateTokenPromise', ()=>{

  // option 1
  it('should generate a token value', ()=>{
    const userEmail = 'example@example.com'
    expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
  });

  // option 2
  it('should generate a token value', async ()=>{
    const userEmail = 'example@example.com'
    const token = generateTokenPromise(userEmail);
    expect(token).toBeDefined();
  });

});