export default {
  async fetch(request) {
    const url = new URL(request.url);

    // 1. CALLBACK - hlavné pre ayeT
    if (url.pathname === '/callback' || url.pathname.startsWith('/callback?')) {
      const uid = url.searchParams.get('external_identifier') || 'unknown';
      const amount = url.searchParams.get('amount') || '0.005';
      return new Response(`OK - ${amount} for ${uid}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // 2. ADS.TXT - pre schválenie
    if (url.pathname === '/ads.txt') {
      return new Response(`ayetstudios.com, 4095893, DIRECT
google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // 3. INDEX - tvoja stránka
    return new Response(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>TomasEarn</title></head><body><h1>TomasEarn is running</h1><p>ads.txt OK<br>callback OK</p><p>Place this in ayeT: https://tomasearn.lilidikano.workers.dev</p></body></html>`, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}
