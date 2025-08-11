export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Missing id' });
  }

  // Poll prediction status dari API Replicate (mock contoh)
  // ...

  res.status(200).json({ status: 'succeeded', output: 'https://example.com/restored-image.png' });
}
