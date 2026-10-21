export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get('transaction_id') || url.searchParams.get('external_identifier') || 'test';
    const reward = url.searchParams.get('reward') || '0';
    
    console.log(`Nova konverzia TomasEarn: User ${userId} dostal ${reward} coinov`);
    
    return new Response("1", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
}
