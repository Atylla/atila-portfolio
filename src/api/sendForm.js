export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios' });
  }

  try {
    const response = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem');
    }

    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
