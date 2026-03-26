import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', ()=>{

  it('should call the callback function', ()=>{

    const logFn = vi.fn();

    generateReportData(logFn);

    expect(logFn).toBeCalled();
    // expect(logFn).toBeCalledTimes(1);
    // expect(logFn).toBeCalledWith(); // arguments
  })

})