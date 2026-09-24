import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.infojobs.net/api/1/offer', {
      headers: {
        'Authorization': 'Basic SEU_SEU_TOKEN_AQUI'
      }
    });

    const data = await response.json();

    console.log('Execução do cron realizada:', new Date().toISOString());

    res.status(200).json({ message: 'Cron executado com sucesso', data });
  } catch (error) {
    console.error('Erro no cron:', error);
    res.status(500).json({ error: 'Erro ao executar o cron' });
  }
}
