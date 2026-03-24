import {generateReportData, storeData} from './src/data.js'
import log from './src/util/logger.js'

// Spies and Mocks
const data = generateReportData(log);
storeData(data)