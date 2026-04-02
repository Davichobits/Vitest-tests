import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = {testKey: 'testData'}

const testFetch = vi.fn(()=>{
  return new Promise((resolve, reject)=>{
    const testResponse = {
      ok: true,
      json: () => new Promise((resolve, reject)=>{
        resolve(testResponseData)
      })
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