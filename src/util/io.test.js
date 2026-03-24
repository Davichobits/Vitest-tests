import { it, expect, describe } from 'vitest';
import writeData from './io';

describe('writeData()', ()=>{
  it('should execute the writeFile method', ()=>{
    const testData = 'Test';
    const testFilename = 'test.txt'
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
  })
});