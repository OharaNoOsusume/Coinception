export default function handler(req, res) {
  if (req.method === 'POST') {
    const { backgroundUrl, description } = req.body;

    if (!backgroundUrl || !description) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    const fs = require('fs');
    const htmlPath = './public/index.html';

    let html = fs.readFileSync(htmlPath, 'utf-8');
    html = html.replace(/background-image: url\('.*?'\);/, `background-image: url('${backgroundUrl}');`);
    html = html.replace(/<div class="description">.*?<\/div>/, `<div class="description">${description}</div>`);

    fs.writeFileSync(htmlPath, html);

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
