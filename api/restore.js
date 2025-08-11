export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { feature, image } = req.body;

  if (!image || !feature) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // Logic panggil API Replicate AI disini (mock contoh)
  // ...

  res.status(200).json({ predictionId: 'dummy-id' });
}
