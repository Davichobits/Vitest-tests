import { it, expect, describe, vi } from 'vitest';
import { promises } from 'fs'
import writeData from './io';

vi.mock('fs');

describe('writeData()', ()=>{
  it('should execute the writeFile method', ()=>{
    const testData = 'Test';
    const testFilename = 'test.txt'
    writeData(testData, testFilename)
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    expect(promises.writeFile).toBeCalled();
  })
});