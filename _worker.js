export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/videos') {
      const userId = url.searchParams.get('user_id') || 'guest';
      return new Response(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Videá</title>
<style>body{margin:0;background:#111;color:white;font-family:Arial;text-align:center}.header{padding:15px;background:#222;font-size:20px}iframe{width:100%;height:calc(100vh - 60px);border:none;background:white}</style>
</head><body><div class="header">🎬 TomasEarn - Videá</div>
<iframe src="https://offerwall.ayet.io/offers?adSlot=30488&externalIdentifier=${userId}" allow="autoplay"></iframe>
</body></html>`, {headers:{'Content-Type':'text/html'}});
    }
    
    return new Response(`<h1>TomasEarn</h1><p><a href="/videos?user_id=test123">VIDEÁ - KLIKNI</a></p>`, {headers:{'Content-Type':'text/html'}});
  }
}
