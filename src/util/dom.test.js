import path from 'path';
import fs from 'fs';

import { showError } from './dom';
import { it, vi } from 'vitest';

import {Window} from 'happy-dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window()
const document = window.document;

document.body.innerHTML = htmlDocumentContent;
vi.stubGlobal('document', document);

it('test', ()=>{
  showError('test');
})