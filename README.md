# 🧠 Quiz de Suporte Técnico – Redes e Provedor de Internet

Quiz interativo com perguntas baseadas em situações reais do dia a dia de suporte técnico em redes e provedores de internet (ISP).

As questões abordam cenários como:

- Atenuação de fibra óptica  
- LOS (Loss of Signal)  
- NAT restrito (XBOX)  
- DNS público (Google e Cloudflare)  
- Problemas de velocidade  
- Rede 2.4GHz / 5GHz  
- Configuração de mesh  

A ideia foi transformar conhecimento prático da área técnica em uma aplicação simples utilizando React e TypeScript.

---

## Preview

### Pergunta
<img width="1911" height="1042" alt="image" src="https://github.com/user-attachments/assets/241d8261-28f6-4a22-988c-89005bcf8167" />


### Resultado
<img width="1886" height="1009" alt="image" src="https://github.com/user-attachments/assets/99b1674f-927d-48c2-858b-bf3e124d03b2" />


---

## Tecnologias utilizadas

- React  
- TypeScript  
- Next.js (estrutura do projeto)  
- Tailwind CSS  

> Apesar de ter sido iniciado com Next.js, a lógica principal utiliza recursos do React (estado e componentização).

---

## Funcionalidades

- 10 perguntas técnicas
- Feedback visual de acerto e erro
- Cálculo da porcentagem de acertos com `reduce`
- Tela final com resumo das respostas
- Botão para reiniciar o quiz
- Layout responsivo (mobile-first)

---

## Objetivo

Praticar e consolidar:

- Gerenciamento de estado com `useState`
- Renderização condicional
- Manipulação de arrays
- Cálculo de dados com `reduce`
- Organização e tipagem com TypeScript

---

## ▶ Como executar

### Acessar online

https://network-support-quiz-aj8q.vercel.app/

---

### Rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/Filipuci/network-support-quiz.git

# Entrar na pasta
cd network-support-quiz

# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```
