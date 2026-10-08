export function validateLead(data){
 if(!data||typeof data!=='object'||Array.isArray(data))return null;
 const clean=(key,max)=>typeof data[key]==='string'?data[key].trim().slice(0,max):'';
 const lead={name:clean('name',100),email:clean('email',254),company:clean('company',150),city:clean('city',100),phone:clean('phone',40),message:clean('message',2000),country:data.countryCode,role:data.roleCode,volume:data.volumeCode,lang:data.lang==='es'?'es':'fr',consent:data.consent===true,id:data.requestId};
 if(!lead.name||!lead.company||!lead.message||!/^\S+@\S+\.\S+$/.test(lead.email)||!lead.consent||!['MA','MU','ES','OTHER'].includes(lead.country)||!['architect','builder','designer','other'].includes(lead.role)||!['1-5','6-20','20+','unknown'].includes(lead.volume)||!/^[-a-f0-9]{36}$/.test(lead.id))return null;
 lead.createdAt=new Date().toISOString();lead.utm={};for(const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'])if(typeof data.utm?.[key]==='string')lead.utm[key]=data.utm[key].slice(0,200);
 return lead;
}
