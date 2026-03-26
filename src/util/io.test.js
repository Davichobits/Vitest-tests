import { it, expect, describe, vi } from 'vitest';
import { promises } from 'fs'
import writeData from './io';

vi.mock('fs');
vi.mock('path', ()=>{
  return {
    default: {
      join: (...args) => {
        return args[args.length -1];
      }
    }
  }
})

describe('writeData()', ()=>{
  it('should execute the writeFile method', ()=>{

    const testData = 'Test';
    const testFilename = 'test.txt'

    writeData(testData, testFilename)
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    //expect(promises.writeFile).toBeCalled();

    expect(promises.writeFile).toBeCalledWith(testFilename, testData)
  })
});