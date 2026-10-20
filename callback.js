     export async function onRequestGet(context) {
       const url = new URL(context.request.url);
       const uid = url.searchParams.get('external_identifier') || 'unknown';
       const amount = url.searchParams.get('amount') || '0.005';
       return new Response(`OK - Received ${amount} for ${uid}`, { status: 200 });
     }
