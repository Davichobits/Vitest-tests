import { describe, it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken', ()=>{
  it('should generate a token value', ()=>{
    const userEmail = 'example@example.com'

    generateToken(userEmail, (err, token)=>{
      expect(token).toBeDefined();
    })
  });
});