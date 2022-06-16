// const landingPage = require('./landing-page.json');
const work = require('./work.json');

// import * as landingPage from './landing-page.json';
// import * as work from './work.json';

export const ENTRY_LISTS = new Map<string, any>([
    ['landing-page', require('./landing-page.json')],
    ['work', require('./work.json')]
]);
