import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = {testKey: 'testData'}

const testFetch = vi.fn((url, options)=>{
  return new Promise((resolve, reject)=>{

    const testResponse = {
      ok: true,
      json: () => new Promise((resolve, reject)=>{
        resolve(testResponseData)
      })
    }

    if(typeof options.body !== 'string'){
      reject('Body is not a string')
    }
    
    resolve(testResponse)
  })
})

vi.stubGlobal('fetch', testFetch)

// it('Shloud return any available response data', async ()=>{
//   const data = {message: 'ok'};

//   const response = await sendDataRequest(data)

//   expect(response).toEqual(testResponseData);
// })

it('Shloud return any available response data', ()=>{
  const data = {message: 'ok'};

  return expect(sendDataRequest(data)).resolves.toEqual(testResponseData);
})

it('should convert the provided data to JSON before sending the request', async ()=>{
  const testData = {key: 'test'};
  let errorMessage;

  try{
    await sendDataRequest(testData)
  } catch(error){
    errorMessage = error
  }

  expect(errorMessage).not.toBe('Body is not a string');
})

it('should throw an HttpError in case of non ok resposes', async ()=>{
  const testData = {key: 'test'}
  

  testFetch.mockImplementationOnce(()=>{
    return Promise.resolve({
      ok:false,
      json:()=>{}
    })
  })

  // let errorMessage;
  // try {
  //   await sendDataRequest(testData)
  // } catch (error) {
  //   errorMessage = error
  // }

  // expect(errorMessage).toBeInstanceOf(HttpError)

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError)
})