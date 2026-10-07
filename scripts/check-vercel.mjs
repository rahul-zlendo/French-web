import {readFileSync} from 'node:fs';
for(const file of ['public/index.html','public/es.html']){const html=readFileSync(file,'utf8');if(!html.includes('demo-form')||!html.includes('/api/enquiry'))throw new Error('Missing landing page: '+file)}
console.log('French page and deferred Spanish page ready for Vercel.');
