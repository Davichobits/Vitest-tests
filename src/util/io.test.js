import { it, expect, describe, vi } from 'vitest';
// import { promises } from 'fs'
import writeData from './io';

// Solución 1:
// vi.mock('fs', ()=>{
//   return {
//     promises: {
//       writeFile: vi.fn(()=> new Promise((resolves)=>{
//         return resolves();
//       }))
//     }
//   }
// });

// Solución 2:
vi.mock('fs')

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

    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    //expect(promises.writeFile).toBeCalled();
    //expect(promises.writeFile).toBeCalledWith(testFilename, testData)
  })
});