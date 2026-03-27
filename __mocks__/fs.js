import { vi } from 'vitest';

export const promises = {
  writeFile: vi.fn(() => new Promise((resolves) => {
    return resolves();
  }))
}