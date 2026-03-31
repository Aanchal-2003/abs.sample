import https from 'https';

const getImages = () => {
  https.get('https://tallysolutions.com/', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const regex = /src=['"](https:\/\/[^'"]+?\.(?:png|webp|svg|jpg|jpeg))['"]/gi;
      const matches = [...data.matchAll(regex)].map(m => m[1]);
      const unique = Array.from(new Set(matches));
      console.log(unique.join('\n'));
    });
  }).on('error', err => console.error(err));
};

getImages();
