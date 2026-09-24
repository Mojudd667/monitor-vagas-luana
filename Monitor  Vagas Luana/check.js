import fetch from "node-fetch";

export default async function handler(req, res) {
  const url = "https://www.indaiatuba.sp.gov.br/esportes/projeto-esporte-cidadao/cadastro-de-alunos/selecionar-turma/2/";

  const html = await fetch(url).then(r => r.text());

  // Aqui você pode refinar para olhar só a linha da turma da Luana,
  // mas por enquanto vamos só ver se existe "VAGAS ESGOTADAS" ou não.
  const temVaga = !html.includes("VAGAS ESGOTADAS");

  // Depois vamos trocar isso por notificação (Telegram/WhatsApp).
  console.log("Tem vaga?", temVaga);

  res.status(200).json({ vaga: temVaga });
}
