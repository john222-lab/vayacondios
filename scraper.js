import https from 'https';

async function fetch(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extract(html, url) {
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  let title = titleMatch ? titleMatch[1] : 'No title';
  title = title.replace(/&amp;/g, '&').replace(/&#8211;/g, '-');

  const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
  const nav = headerMatch ? headerMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'No header';

  const footerMatch = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
  const footer = footerMatch ? footerMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'No footer';

  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  content = content.replace(/<script[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '');
  if (headerMatch) content = content.replace(headerMatch[0], '');
  if (footerMatch) content = content.replace(footerMatch[0], '');

  let mainCopy = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const images = [];
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    if (!src.includes('wp-emoji') && !src.startsWith('data:') && !src.includes('submit-spin.svg')) {
      images.push(src);
    }
  }

  return { url, title, mainCopy, nav, footer, images: [...new Set(images)] };
}

const urls = [
  'https://vayacondios.org.uk/',
  'https://vayacondios.org.uk/about-us/',
  'https://vayacondios.org.uk/our-vision/',
  'https://vayacondios.org.uk/what-we-have-done/',
  'https://vayacondios.org.uk/networks-relationships/',
  'https://vayacondios.org.uk/join-us/',
  'https://vayacondios.org.uk/how-it-all-began/',
  'https://vayacondios.org.uk/stepping-out-in-faith/'
];

async function run() {
  const results = [];
  for (const url of urls) {
    try {
      const html = await fetch(url);
      results.push(extract(html, url));
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (e) {
      results.push({ url, error: e.message });
    }
  }
  process.stdout.write(JSON.stringify(results, null, 2));
}

run();
