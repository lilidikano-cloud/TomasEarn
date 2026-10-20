export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // callback - toto potrebuje ayeT
    if (url.pathname === '/callback') {
      const uid = url.searchParams.get('external_identifier') || 'unknown';
      const amount = url.searchParams.get('amount') || '0.005';
      return new Response(`OK - ${amount} for ${uid}`, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
    
    // všetko ostatné (ads.txt, index.html) nech ide normálne
    return env.ASSETS.fetch(request);
  }
}
