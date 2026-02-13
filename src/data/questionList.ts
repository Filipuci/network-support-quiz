import { QuestionType } from "@/types/QuestionType";

export const questionList: QuestionType[] = [
  {
    question: 'Cliente em canal congestionado pode:',
    answers: [
      'Causar interferência e gerar lentidão',
      'Deixar o cliente sem conexão',
      'Reiniciar o roteador do cliente',
      'Queimar o equipamento'
    ],
    answer: 0
  },

  {
    question: 'Como restabelecer conexáo de cliente "conectado sem acesso a internet" ?',
    answers: [
      'Reiniciar roteador pela tomada',
      'Resetar o roteador',
      'Regravar o equipamento',
      'Trocar o canal e banda'
    ], answer: 2
  },

  {
    question: 'O sinal da fibra atenuado pode causar:',
    answers: [
      'Queda de conexão, lentidão',
      'Queda de conexão, lentidão, queimar o equipamento',
      'Somente lentidão',
      'Nenhuma das alternativas'
    ], answer: 0
  },

  {
    question: 'Qual o significado da sigla LOS?',
    answers: [
      'Lost of connection',
      'Loss of signal',
      'Lost of signal',
      'Nenhuma das alternativas'
    ], answer: 1
  },

  {
    question: 'O que verificar quando rede 2.4g não aparece?',
    answers: [
      'Banda e canal',
      'Modelo de celular do cliente',
      'Nenhuma das alternativas',
      'Banda e nome da rede'
    ], answer: 3
  },

  {
    question: 'O que verificar quando velocidade não chega ao contratado?',
    answers: [
      'Verificar se está conectado na rede correta, se está via cabo de rede e se está próximo do roteador',
      'Modelo do dispositivo e placa de rede',
      'Verificar se está utilizando modo de economia de bateria',
      'Todas alternativas'
    ], answer: 3
  },

  {
    question: 'Como configurar cubo mesh como rede mesh?',
    answers: [
      'Conectar via cabo de rede em entrada LAN e aguardar autenticação',
      'Conectar via cabo de rede em entrada WAN e aguardar autenticação',
      'Segurar o botão de reset ao lado do roteador principal',
      'Nenhuma das alternativas'
    ], answer: 0
  },

  {
    question: 'O que fazer quando XBOX do cliente estiver com NAT restrito',
    answers: [
      'Realizar a liberação de portas necessárias manualmente ou via DMZ',
      'Alterar canal e banda',
      'Ativar protocolo RIP',
      'Todas as alternativas'
    ], answer: 0
  },

  {
    question: 'O que suspeitar quando cliente estiver com muitas quedas USER-REQUEST?',
    answers: [
      'Fonte danificada',
      'Fonte com voltagem errada',
      'Todas as alternativas',
      'Tomada com mal contato'
    ], answer: 2
  },

  {
    question: 'Qual é o DNS do Google e CloudFlare?',
    answers: [
      '8.8.8.8 e 1.1.1.1',
      '3.4.4.4 e 1.1.1.1',
      '1.1.1.1 e 8.8.8.8',
      '8.8.8.8 e 9.9.9.9'
    ], answer: 0
  },
]