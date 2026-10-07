import {put,head} from '@vercel/blob';
import {validateLead} from '../lib/enquiry.js';
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST')return res.status(405).json({error:'method'});
 const host=req.headers['x-forwarded-host']||req.headers.host;
 if(req.headers.origin&&new URL(req.headers.origin).host!==host)return res.status(403).json({error:'origin'});
 if(!(req.headers['content-type']||'').includes('application/json'))return res.status(415).json({error:'type'});
 let data=req.body;try{if(typeof data==='string')data=JSON.parse(data)}catch{return res.status(400).json({error:'invalid'})}
 if(JSON.stringify(data||{}).length>12000)return res.status(413).json({error:'size'});
 if(data?.website)return res.status(400).json({error:'invalid'});const lead=validateLead(data);if(!lead)return res.status(400).json({error:'invalid'});
 if(!process.env.BLOB_READ_WRITE_TOKEN&&!process.env.BLOB_STORE_ID)return res.status(503).json({error:'unavailable'});
 try{const key='enquiries/'+lead.id+'.json';await put(key,JSON.stringify(lead),{access:'private',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json'});await head(key);return res.status(201).json({ok:true,id:lead.id})}catch{return res.status(503).json({error:'unavailable'})}
}
