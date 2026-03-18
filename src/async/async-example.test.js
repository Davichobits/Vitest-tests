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