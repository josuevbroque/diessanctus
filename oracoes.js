/* ==========================================================================
   ORAÇÕES, INTRÓITOS, GRADUAIS E VERSOS — Lecionário Trienal (Culto Luterano)
   ==========================================================================
   Fonte: Culto Luterano – Lecionários (extraído dos PDFs fornecidos: tempo
   móvel de Advento a Pentecostes + Dias Festivos de data fixa, e o Tempo da
   Igreja — A Santíssima Trindade + Próprio 3 a Próprio 29).
   Gerado automaticamente a partir do texto do lecionário; revise antes de
   publicar caso encontre alguma quebra de linha ou hifenização estranha.

   ESTRUTURA
   ---------
   Cada chave deste objeto é EXATAMENTE o mesmo texto usado como `nomeDia`
   (para domingos/tempos móveis) ou como `nome` em DIAS_FESTIVOS (para dias
   festivos de data fixa) dentro de index.html — assim, quando o site for
   atualizado para usar este arquivo, a busca será um simples
   `ORACOES[chave]`, sem necessidade de reescrever nada aqui.

   Para os domingos do Tempo Comum (Tempo da Igreja), as chaves usadas são
   "A Santíssima Trindade" e "Próprio 3".."Próprio 29" — essas ainda NÃO
   existem como `nomeDia`/`periodo` no index.html atual (o site hoje só
   cobre Advento até Pentecostes + Dias Festivos), então essas entradas
   ficarão disponíveis aqui à espera de o site ganhar suporte ao Tempo
   Comum completo.

   Cada entrada pode conter:
     - oracao:   string única com a "Oração do Dia" (coleta)
                 ou, quando o texto varia por Série (comum no Tempo Comum),
                 { series: { A: "...", B: "...", C: "..." } }.
     - introito: { ref, linhas[] }               — quando não varia por Série
                 ou
                 { series: { A:{ref,linhas[]}, B:{...}, C:{...} } } — quando
                 o intróito muda conforme a Série (A/B/C) do Lecionário
                 Trienal (normal em domingos móveis: Advento, Epifania,
                 Quaresma, Páscoa, Trindade, Tempo Comum). `tipo:"salmodia"`
                 marca o caso raro (Sábado de Aleluia) em que o livro usa
                 "Salmodia" em vez de "Intróito".
     - gradual:  { ref, linhas[] } ou { series: {...} } (mesmo padrão do
                 intróito — no Tempo Comum o Gradual costuma ser único para
                 todas as séries a partir do Próprio 14, mas varia nos
                 primeiros Próprios).
     - verso:    { ref, linhas[] } ou { series: {...} }  (o "Verso" antes
                 do Evangelho; quase sempre varia por Série).

   Cada item de `linhas` é { text, role }, em que role é "chamada" (linha
   do oficiante) ou "resposta" (linha da congregação, recuada no livro
   impresso) — útil se um dia você quiser renderizar em duas colunas ou
   estilos diferentes.

   COBERTURA
   ---------
   Este conjunto de PDFs cobre: Advento até Pentecostes (tempo móvel), todos
   os Dias Festivos de data fixa já usados em DIAS_FESTIVOS no site, A
   Santíssima Trindade, e todos os Próprios 3 a 29 do Tempo Comum. Não há
   mais lacunas conhecidas nesta cobertura.
   ========================================================================== */

const ORACOES = {
  "1º Domingo do Advento": {
    "oracao": "Senhor Jesus, pedimos que venhas com o teu poder para que sejamos libertados dos nossos pecados, que ameaçam nos separar de ti, e salvos por tua poderosa libertação, pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 118.25-28; antífona Zacarias 9.9b",
          "linhas": [
            {
              "text": "O seu rei está chegando.",
              "role": "chamada"
            },
            {
              "text": "Ele vem triunfante e vitorioso.",
              "role": "resposta"
            },
            {
              "text": "Salva-nos, ó Senhor, salva-nos!",
              "role": "chamada"
            },
            {
              "text": "Dá-nos prosperidade, ó Deus!",
              "role": "resposta"
            },
            {
              "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é Deus; ele é a nossa luz.",
              "role": "chamada"
            },
            {
              "text": "Com ramos nas mãos, comecem a festa e andem em volta do altar.",
              "role": "resposta"
            },
            {
              "text": "Tu és o meu Deus – eu te louvarei;",
              "role": "chamada"
            },
            {
              "text": "Tu és o meu Deus – eu anunciarei a tua grandeza.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O seu rei está chegando.",
              "role": "chamada"
            },
            {
              "text": "Ele vem triunfante e vitorioso.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 25.1-3; antífona Zacarias 9.9b",
          "linhas": [
            {
              "text": "O seu rei está chegando.",
              "role": "chamada"
            },
            {
              "text": "Ele vem triunfante e vitorioso.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, a ti dirijo a minha oração.",
              "role": "chamada"
            },
            {
              "text": "Meu Deus, eu confio em ti.",
              "role": "resposta"
            },
            {
              "text": "Salva-me da vergonha da derrota;",
              "role": "chamada"
            },
            {
              "text": "Não deixes que os meus inimigos se alegrem com a minha desgraça.",
              "role": "resposta"
            },
            {
              "text": "Os que confiam em ti não sofrerão a vergonha da derrota,",
              "role": "chamada"
            },
            {
              "text": "Mas serão derrotados os que sem motivo se revoltam contra ti.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O seu rei está chegando.",
              "role": "chamada"
            },
            {
              "text": "Ele vem triunfante e vitorioso.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 89.6,14-16,18; antífona Zacarias 9.9b",
          "linhas": [
            {
              "text": "O seu rei está chegando.",
              "role": "chamada"
            },
            {
              "text": "Ele vem triunfante e vitorioso.",
              "role": "resposta"
            },
            {
              "text": "Não há no céu ninguém como tu, ó Senhor!",
              "role": "chamada"
            },
            {
              "text": "Entre os seres celestiais não há nenhum igual a ti.",
              "role": "resposta"
            },
            {
              "text": "A honestidade e a justiça são as bases do teu reinado.",
              "role": "chamada"
            },
            {
              "text": "Tu és fiel e amoroso em tudo o que fazes.",
              "role": "resposta"
            },
            {
              "text": "Feliz o povo que te adora com canções",
              "role": "chamada"
            },
            {
              "text": "E que vive na luz da tua presença!",
              "role": "resposta"
            },
            {
              "text": "Por causa de ti, eles se alegram o dia todo",
              "role": "chamada"
            },
            {
              "text": "E te louvam porque és bondoso.",
              "role": "resposta"
            },
            {
              "text": "Pois escolhes o nosso protetor.",
              "role": "chamada"
            },
            {
              "text": "Foste tu, Senhor, o Santo Deus de Israel, que nos deste o nosso rei.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O seu rei está chegando.",
              "role": "chamada"
            },
            {
              "text": "Ele vem triunfante e vitorioso.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Zacarias 9.9; Salmo 118.26",
      "linhas": [
        {
          "text": "Alegre-se muito, povo de Sião!",
          "role": "chamada"
        },
        {
          "text": "Moradores de Jerusalém, cantem de alegria,",
          "role": "resposta"
        },
        {
          "text": "Pois o seu rei está chegando.",
          "role": "chamada"
        },
        {
          "text": "Ele vem triunfante e vitorioso.",
          "role": "resposta"
        },
        {
          "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 24.7",
      "linhas": [
        {
          "text": "Aleluia. Abram bem os portões, abram os portões antigos, e entrará o Rei da glória. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "2º Domingo do Advento": {
    "oracao": "Senhor Deus, age em nossos corações para prepararmos o caminho ao teu único Filho, para que pela sua vinda sejamos capacitados a te servir com a mente purificada; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 105.4-8; antífona Isaías 40.3b",
          "linhas": [
            {
              "text": "Preparem no deserto um caminho para o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Abram ali uma estrada reta para o nosso Deus passar!",
              "role": "resposta"
            },
            {
              "text": "Procurem a ajuda do Senhor;",
              "role": "chamada"
            },
            {
              "text": "Estejam sempre na sua presença.",
              "role": "resposta"
            },
            {
              "text": "Vocês, descendentes de Abraão, servo de Deus,",
              "role": "chamada"
            },
            {
              "text": "Vocês, descendentes de Jacó, o escolhido de Deus,",
              "role": "resposta"
            },
            {
              "text": "Lembrem de tudo o que Deus tem feito,",
              "role": "chamada"
            },
            {
              "text": "Lembrem dos seus grandes e maravilhosos milagres",
              "role": "resposta"
            },
            {
              "text": "E de como tem condenado os nossos inimigos!",
              "role": "chamada"
            },
            {
              "text": "Ele é o Senhor, nosso Deus;",
              "role": "resposta"
            },
            {
              "text": "Os seus mandamentos são para o mundo inteiro.",
              "role": "chamada"
            },
            {
              "text": "Ele sempre lembrará da sua aliança",
              "role": "resposta"
            },
            {
              "text": "E, por milhares de gerações,",
              "role": "chamada"
            },
            {
              "text": "Cumprirá as suas promessas.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Preparem no deserto um caminho para o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Abram ali uma estrada reta para o nosso Deus passar!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 80.1,8a,9b,7; antífona Salmo 80.3",
          "linhas": [
            {
              "text": "Faze com que prosperemos de novo, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Mostra-nos a tua misericórdia, e seremos salvos.",
              "role": "resposta"
            },
            {
              "text": "Ouve-nos, ó Pastor de Israel! Escuta-nos, tu que guias o teu rebanho!",
              "role": "chamada"
            },
            {
              "text": "Tu que estás sentado no teu trono, que fica sobre os querubins,",
              "role": "resposta"
            },
            {
              "text": "Trouxeste do Egito uma parreira, o povo de Israel;",
              "role": "chamada"
            },
            {
              "text": "As suas raízes entraram fundo na terra, e ela se espalhou por toda parte.",
              "role": "resposta"
            },
            {
              "text": "Faze com que prosperemos de novo, ó Deus Todo-Poderoso!",
              "role": "chamada"
            },
            {
              "text": "Mostra-nos a tua misericórdia, e seremos salvos.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Faze com que prosperemos de novo, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Mostra-nos a tua misericórdia, e seremos salvos.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 81.8,10-11,13; antífona Lucas 3.4b",
          "linhas": [
            {
              "text": "Alguém está gritando no deserto:",
              "role": "chamada"
            },
            {
              "text": "Preparem o caminho para o Senhor passar! Abram estradas retas para ele!",
              "role": "resposta"
            },
            {
              "text": "Meu povo, escute os meus conselhos!",
              "role": "chamada"
            },
            {
              "text": "Ó Israel, como eu gostaria que você me ouvisse!",
              "role": "resposta"
            },
            {
              "text": "Eu sou o Senhor, o Deus de vocês, sou aquele que os tirou da terra do Egito.",
              "role": "chamada"
            },
            {
              "text": "Abram a boca, e eu os alimentarei.",
              "role": "resposta"
            },
            {
              "text": "Mas o meu povo não quis me ouvir;",
              "role": "chamada"
            },
            {
              "text": "Israel não me obedeceu.",
              "role": "resposta"
            },
            {
              "text": "Como gostaria que o meu povo me ouvisse,",
              "role": "chamada"
            },
            {
              "text": "Que o povo de Israel me obedecesse!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Alguém está gritando no deserto:",
              "role": "chamada"
            },
            {
              "text": "Preparem o caminho para o Senhor passar! Abram estradas retas para ele!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Zacarias 9.9; Salmo 118.26",
      "linhas": [
        {
          "text": "Alegre-se muito, povo de Sião!",
          "role": "chamada"
        },
        {
          "text": "Moradores de Jerusalém, cantem de alegria,",
          "role": "resposta"
        },
        {
          "text": "Pois o seu rei está chegando.",
          "role": "chamada"
        },
        {
          "text": "Ele vem triunfante e vitorioso.",
          "role": "resposta"
        },
        {
          "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 3.4b,6",
      "linhas": [
        {
          "text": "Aleluia. Preparem o caminho para o Senhor passar! Abram estradas retas para ele! E todos verão a salvação que Deus dá. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "3º Domingo do Advento": {
    "oracao": "Senhor Jesus Cristo, pedimos que ouças as nossas orações e ilumines as trevas dos nossos corações pela tua graciosa visitação; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 71.14-18; antífona Filipenses 4.4",
          "linhas": [
            {
              "text": "Tenham sempre alegria, unidos com o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Repito: tenham alegria!",
              "role": "resposta"
            },
            {
              "text": "Eu sempre porei a minha esperança em ti",
              "role": "chamada"
            },
            {
              "text": "E te louvarei mais e mais.",
              "role": "resposta"
            },
            {
              "text": "Anunciarei que tu és fiel; o dia inteiro falarei da tua salvação,",
              "role": "chamada"
            },
            {
              "text": "Embora não seja capaz de entendê-la.",
              "role": "resposta"
            },
            {
              "text": "Falarei do teu poder, ó Senhor, meu Deus;",
              "role": "chamada"
            },
            {
              "text": "Anunciarei a tua fidelidade, a tua fidelidade somente.",
              "role": "resposta"
            },
            {
              "text": "Tu tens me ensinado desde a minha mocidade,",
              "role": "chamada"
            },
            {
              "text": "E eu continuo a falar das coisas maravilhosas que fazes.",
              "role": "resposta"
            },
            {
              "text": "Agora que estou velho, e os meus cabelos ficaram brancos,",
              "role": "chamada"
            },
            {
              "text": "Não me abandones, ó Deus!",
              "role": "resposta"
            },
            {
              "text": "Fica comigo enquanto anuncio o teu poder e a tua força",
              "role": "chamada"
            },
            {
              "text": "A este povo e aos seus descendentes.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Tenham sempre alegria, unidos com o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Repito: tenham alegria!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 85.8-9,12-13; antífona Salmo 85.7",
          "linhas": [
            {
              "text": "Mostra-nos, ó Senhor Deus, o teu amor",
              "role": "chamada"
            },
            {
              "text": "E dá-nos a tua salvação!",
              "role": "resposta"
            },
            {
              "text": "Eu escuto o que o Senhor está dizendo.",
              "role": "chamada"
            },
            {
              "text": "Para nós, o seu povo, para nós, os que somos fiéis, ele promete paz se não voltarmos aos nossos caminhos de loucura.",
              "role": "resposta"
            },
            {
              "text": "Na verdade, Deus está pronto para salvar os que o temem",
              "role": "chamada"
            },
            {
              "text": "A fim de que a sua presença salvadora fique na nossa terra.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus nos dará o que é bom,",
              "role": "chamada"
            },
            {
              "text": "E a nossa terra produzirá as suas colheitas.",
              "role": "resposta"
            },
            {
              "text": "A justiça irá adiante do Senhor",
              "role": "chamada"
            },
            {
              "text": "E preparará o caminho para ele.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Mostra-nos, ó Senhor Deus, o teu amor",
              "role": "chamada"
            },
            {
              "text": "E dá-nos a tua salvação!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 146.5-8; antífona Filipenses 4.4",
          "linhas": [
            {
              "text": "Tenham sempre alegria, unidos com o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Repito: tenham alegria!",
              "role": "resposta"
            },
            {
              "text": "Feliz aquele que recebe ajuda do Deus de Jacó,",
              "role": "chamada"
            },
            {
              "text": "Aquele que põe a sua esperança no Senhor, seu Deus,",
              "role": "resposta"
            },
            {
              "text": "O Criador do céu, da terra e do mar e de tudo o que neles existe!",
              "role": "chamada"
            },
            {
              "text": "O Senhor sempre cumpre as suas promessas;",
              "role": "resposta"
            },
            {
              "text": "Ele julga a favor dos que são explorados",
              "role": "chamada"
            },
            {
              "text": "E dá comida aos que têm fome.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus põe em liberdade os que estão presos e faz com que os cegos vejam.",
              "role": "chamada"
            },
            {
              "text": "O Senhor levanta os que caem e ama aqueles que lhe obedecem.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Tenham sempre alegria, unidos com o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Repito: tenham alegria!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Zacarias 9.9; Salmo 118.26",
      "linhas": [
        {
          "text": "Alegre-se muito, povo de Sião!",
          "role": "chamada"
        },
        {
          "text": "Moradores de Jerusalém, cantem de alegria,",
          "role": "resposta"
        },
        {
          "text": "Pois o seu rei está chegando.",
          "role": "chamada"
        },
        {
          "text": "Ele vem triunfante e vitorioso.",
          "role": "resposta"
        },
        {
          "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 11.10b",
      "linhas": [
        {
          "text": "Aleluia. Aqui está o meu mensageiro, disse Deus. Eu o enviarei adiante de você para preparar o seu caminho. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "4º Domingo do Advento": {
    "oracao": "Senhor Jesus, pedimos que venhas com o teu poder e nos ajudes para que os pecados que nos fazem sofrer sejam logo retirados pela tua graça e misericórdia; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 130.5-8; antífona Isaías 64.1",
          "linhas": [
            {
              "text": "Como gostaríamos que tu rasgasses os céus e descesses,",
              "role": "chamada"
            },
            {
              "text": "Fazendo as montanhas tremerem diante de ti!",
              "role": "resposta"
            },
            {
              "text": "Eu aguardo ansioso a ajuda de Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "E confio na sua palavra.",
              "role": "resposta"
            },
            {
              "text": "Eu espero pelo Senhor mais do que os vigias esperam o amanhecer,",
              "role": "chamada"
            },
            {
              "text": "Mais do que os vigias esperam o nascer do sol.",
              "role": "resposta"
            },
            {
              "text": "Povo de Israel, ponha a sua esperança em Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Porque o seu amor é fiel, e ele sempre está disposto a salvar.",
              "role": "resposta"
            },
            {
              "text": "Ele salvará Israel, o seu povo,",
              "role": "chamada"
            },
            {
              "text": "De todos os seus pecados.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Como gostaríamos que tu rasgasses os céus e descesses,",
              "role": "chamada"
            },
            {
              "text": "Fazendo as montanhas tremerem diante de ti!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 19.1,4c,5-6; antífona Isaías 45.8",
          "linhas": [
            {
              "text": "Assim como a chuva vem de cima, eu enviarei do céu a minha vitória.",
              "role": "chamada"
            },
            {
              "text": "A terra se abrirá para recebê-la e fará brotar a salvação e a liberdade.",
              "role": "resposta"
            },
            {
              "text": "O céu anuncia a glória de Deus e nos mostra aquilo que as suas mãos fizeram.",
              "role": "chamada"
            },
            {
              "text": "Deus armou no céu uma barraca para o sol.",
              "role": "resposta"
            },
            {
              "text": "O sol sai dali todo alegre como um noivo,",
              "role": "chamada"
            },
            {
              "text": "Como um atleta ansioso para entrar numa corrida.",
              "role": "resposta"
            },
            {
              "text": "O sol sai de um lado do céu e vai até o outro lado;",
              "role": "chamada"
            },
            {
              "text": "Nada pode se esconder do seu calor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Assim como a chuva vem de cima, eu enviarei do céu a minha vitória.",
              "role": "chamada"
            },
            {
              "text": "A terra se abrirá para recebê-la e fará brotar a salvação e a liberdade.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "1 Samuel 2.1b,2,5b-7; antífona Lucas 1.46b-47",
          "linhas": [
            {
              "text": "A minha alma anuncia a grandeza do Senhor.",
              "role": "chamada"
            },
            {
              "text": "O meu espírito está alegre por causa de Deus, o meu Salvador.",
              "role": "resposta"
            },
            {
              "text": "Estou rindo dos meus inimigos",
              "role": "chamada"
            },
            {
              "text": "E me sinto feliz, pois Deus me ajudou.",
              "role": "resposta"
            },
            {
              "text": "Ninguém é santo como o Senhor;",
              "role": "chamada"
            },
            {
              "text": "Não existe outro deus além dele, e não há nenhum protetor como o nosso Deus.",
              "role": "resposta"
            },
            {
              "text": "A mulher que não podia ter filhos deu à luz sete filhos,",
              "role": "chamada"
            },
            {
              "text": "Mas a que possuía muitos filhos ficou sem nenhum.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus é quem tira a vida e quem a dá.",
              "role": "chamada"
            },
            {
              "text": "É ele quem manda a pessoa para o mundo dos mortos e a faz voltar de lá.",
              "role": "resposta"
            },
            {
              "text": "Ele faz com que alguns fiquem pobres e outros, ricos;",
              "role": "chamada"
            },
            {
              "text": "Rebaixa uns e eleva outros.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A minha alma anuncia a grandeza do Senhor.",
              "role": "chamada"
            },
            {
              "text": "O meu espírito está alegre por causa de Deus, o meu Salvador.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Zacarias 9.9; Salmo 118.26",
      "linhas": [
        {
          "text": "Alegre-se muito, povo de Sião!",
          "role": "chamada"
        },
        {
          "text": "Moradores de Jerusalém, cantem de alegria,",
          "role": "resposta"
        },
        {
          "text": "Pois o seu rei está chegando.",
          "role": "chamada"
        },
        {
          "text": "Ele vem triunfante e vitorioso.",
          "role": "resposta"
        },
        {
          "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 1.23a",
      "linhas": [
        {
          "text": "Aleluia. A virgem ficará grávida e terá um filho que receberá o nome de",
          "role": "chamada"
        },
        {
          "text": "Emanuel. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Véspera de Natal": {
    "oracao": "Ó Deus, que nos alegras a cada ano quando lembramos do nascimento de teu único Filho Jesus Cristo, concede que possamos recebê-lo alegremente como nosso Redentor e, nesta verdadeira confiança, estarmos prontos a olhar para ele quando vier como nosso Juiz; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 24.1,3-5; antífona Salmo 2.7",
      "linhas": [
        {
          "text": "Anunciarei o que o Senhor afirmou.",
          "role": "chamada"
        },
        {
          "text": "O Senhor me disse: Você é meu filho; hoje eu me tornei seu pai.",
          "role": "resposta"
        },
        {
          "text": "Ao Senhor Deus pertencem o mundo e tudo o que nele existe;",
          "role": "chamada"
        },
        {
          "text": "A terra e todos os seres vivos que nela vivem são dele.",
          "role": "resposta"
        },
        {
          "text": "Quem tem o direito de subir o monte do Senhor?",
          "role": "chamada"
        },
        {
          "text": "Quem pode ficar no seu santo Templo?",
          "role": "resposta"
        },
        {
          "text": "Somente aquele que é correto no agir e limpo no pensar,",
          "role": "chamada"
        },
        {
          "text": "Que não adora ídolos, nem faz promessas falsas.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus o abençoará, o salvará",
          "role": "chamada"
        },
        {
          "text": "E o declarará inocente no julgamento.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei o que o Senhor afirmou.",
          "role": "chamada"
        },
        {
          "text": "O Senhor me disse: Você é meu filho; hoje eu me tornei seu pai.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Isaías 9.6; Salmo 98.1a",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Pois ele tem feito coisas maravilhosas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 1.21",
      "linhas": [
        {
          "text": "Aleluia. Ela terá um menino, e você porá nele o nome de Jesus, pois ele salvará o seu povo dos pecados deles. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Natal - Meia-noite": {
    "oracao": "Ó Deus, que fizeste brilhar a verdadeira Luz nesta santa noite, concede que conheçamos os mistérios desta Luz aqui na terra e possamos alcançar todas as suas alegrias nos céus; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 2.1-2,4-6; antífona Texto litúrgico",
      "linhas": [
        {
          "text": "Quando tudo era silêncio, no meio da noite,",
          "role": "chamada"
        },
        {
          "text": "Tua Palavra poderosa, ó Senhor, desceu do trono real.",
          "role": "resposta"
        },
        {
          "text": "Por que as nações pagãs planejam revoltas?",
          "role": "chamada"
        },
        {
          "text": "Por que os povos fazem planos tão tolos?",
          "role": "resposta"
        },
        {
          "text": "Os seus reis se preparam, e os seus governantes fazem planos",
          "role": "chamada"
        },
        {
          "text": "Contra Deus, o Senhor, e o rei que ele escolheu.",
          "role": "resposta"
        },
        {
          "text": "Do seu trono lá no céu o Senhor ri",
          "role": "chamada"
        },
        {
          "text": "E zomba deles.",
          "role": "resposta"
        },
        {
          "text": "Então, muito irado, ele os ameaça",
          "role": "chamada"
        },
        {
          "text": "E os assusta com o seu furor.",
          "role": "resposta"
        },
        {
          "text": "Ele diz: Já coloquei o meu rei no trono",
          "role": "chamada"
        },
        {
          "text": "Lá em Sião, o meu monte santo.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Quando tudo era silêncio, no meio da noite,",
          "role": "chamada"
        },
        {
          "text": "Tua Palavra poderosa, ó Senhor, desceu do trono real.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Isaías 9.6; Salmo 98.1a",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Pois ele tem feito coisas maravilhosas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 2.11",
      "linhas": [
        {
          "text": "Aleluia. Hoje mesmo, na cidade de Davi, nasceu o Salvador de vocês – o Messias, o Senhor! Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Natal - Alvorada": {
    "oracao": "Misericordioso Deus, que fizeste a tua Palavra eterna se encarnar através de Maria, concede graça ao teu povo para abandonar os desejos pecaminosos, a fim de que possa se preparar para a tua visitação; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 93.1-2,5; antífona Isaías 9.2",
      "linhas": [
        {
          "text": "O povo que andava na escuridão viu uma forte luz;",
          "role": "chamada"
        },
        {
          "text": "A luz brilhou sobre os que viviam nas trevas.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus é Rei.",
          "role": "chamada"
        },
        {
          "text": "Ele está vestido de majestade e coberto de poder.",
          "role": "resposta"
        },
        {
          "text": "A terra está firme no seu lugar",
          "role": "chamada"
        },
        {
          "text": "E não pode ser abalada.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, o teu trono está firme desde o princípio;",
          "role": "chamada"
        },
        {
          "text": "Tu sempre exististe.",
          "role": "resposta"
        },
        {
          "text": "As tuas leis, ó Senhor, merecem confiança,",
          "role": "chamada"
        },
        {
          "text": "E o teu Templo é santo para sempre.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "O povo que andava na escuridão viu uma forte luz;",
          "role": "chamada"
        },
        {
          "text": "A luz brilhou sobre os que viviam nas trevas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Isaías 9.6; Salmo 98.1a",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Pois ele tem feito coisas maravilhosas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 2.14",
      "linhas": [
        {
          "text": "Aleluia. Glória a Deus nas maiores alturas do céu! E paz na terra para as pessoas a quem ele quer bem! Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "O Nascimento do Senhor": {
    "oracao": "Todo-poderoso Deus, concede que o nascimento de teu único Filho nos liberte da escravidão do pecado; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 98.1-4; antífona Isaías 9.6",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor, pois ele tem feito coisas maravilhosas.",
          "role": "chamada"
        },
        {
          "text": "Com a sua força e com o seu santo poder, ele se tornou vitorioso.",
          "role": "resposta"
        },
        {
          "text": "O Senhor anunciou a sua vitória;",
          "role": "chamada"
        },
        {
          "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
          "role": "resposta"
        },
        {
          "text": "Com amor e fidelidade, ele cumpriu a sua promessa ao povo de Israel.",
          "role": "chamada"
        },
        {
          "text": "Até nos lugares mais distantes do mundo todos viram a vitória do nosso Deus.",
          "role": "resposta"
        },
        {
          "text": "Cantem ao Senhor com alegria, povos de toda a terra!",
          "role": "chamada"
        },
        {
          "text": "Louvem o Senhor com canções e gritos de alegria.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Isaías 9.6; Salmo 98.1a",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Pois ele tem feito coisas maravilhosas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 1.14",
      "linhas": [
        {
          "text": "Aleluia. A Palavra se tornou um ser humano e morou entre nós, cheia de amor e de verdade. E nós vimos a revelação da sua natureza divina, natureza que ele recebeu como Filho único do Pai. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "1º Domingo após o Natal": {
    "oracao": "Ó Deus, nosso Criador e Redentor, que nos criaste de forma maravilhosa e na encarnação de teu Filho de forma ainda mais maravilhosa restauraste nossa natureza humana, concede que possamos estar sempre vivos naquele que se tornou igual a nós; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Jeremias 31.15-17; antífona Oséias 11.1",
          "linhas": [
            {
              "text": "Quando Israel era criança, eu já o amava",
              "role": "chamada"
            },
            {
              "text": "E chamei o meu filho, que estava na terra do Egito.",
              "role": "resposta"
            },
            {
              "text": "O Senhor diz: Ouviu-se um som em Ramá,",
              "role": "chamada"
            },
            {
              "text": "O som de um choro amargo.",
              "role": "resposta"
            },
            {
              "text": "Era Raquel chorando pelos seus filhos;",
              "role": "chamada"
            },
            {
              "text": "Ela não quer ser consolada, pois todos estão mortos.",
              "role": "resposta"
            },
            {
              "text": "Pare de chorar",
              "role": "chamada"
            },
            {
              "text": "E enxugue as suas lágrimas.",
              "role": "resposta"
            },
            {
              "text": "Tudo o que você fez pelos seus filhos será recompensado;",
              "role": "chamada"
            },
            {
              "text": "Eles voltarão da terra do inimigo.",
              "role": "resposta"
            },
            {
              "text": "Sou eu, o Senhor, quem está falando.",
              "role": "chamada"
            },
            {
              "text": "Há esperança para você no futuro;",
              "role": "resposta"
            },
            {
              "text": "Os seus filhos voltarão para casa.",
              "role": "chamada"
            },
            {
              "text": "Sou eu, o Senhor, quem está falando.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Quando Israel era criança, eu já o amava",
              "role": "chamada"
            },
            {
              "text": "E chamei o meu filho, que estava na terra do Egito.",
              "role": "resposta"
            },
            {
              "text": "Séries B e C – Salmo 98.1-4; antífona Isaías 52.10",
              "role": "resposta"
            },
            {
              "text": "Na presença de todas as nações, o Senhor vai mostrar o seu santo poder.",
              "role": "chamada"
            },
            {
              "text": "O mundo inteiro verá que foi o nosso Deus quem nos salvou.",
              "role": "resposta"
            },
            {
              "text": "Cantem uma nova canção a Deus, o Senhor, pois ele tem feito coisas maravilhosas.",
              "role": "chamada"
            },
            {
              "text": "Com a sua força e com o seu santo poder, ele se tornou vitorioso.",
              "role": "resposta"
            },
            {
              "text": "O Senhor anunciou a sua vitória;",
              "role": "chamada"
            },
            {
              "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
              "role": "resposta"
            },
            {
              "text": "Com amor e fidelidade, ele cumpriu a sua promessa ao povo de Israel.",
              "role": "chamada"
            },
            {
              "text": "Até nos lugares mais distantes do mundo todos viram a vitória do nosso",
              "role": "resposta"
            },
            {
              "text": "Deus.",
              "role": "resposta"
            },
            {
              "text": "Cantem ao Senhor com alegria, povos de toda a terra!",
              "role": "chamada"
            },
            {
              "text": "Louvem o Senhor com canções e gritos de alegria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Na presença de todas as nações, o Senhor vai mostrar o seu santo poder.",
              "role": "chamada"
            },
            {
              "text": "O mundo inteiro verá que foi o nosso Deus quem nos salvou.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Isaías 9.6; Salmo 98.1a",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Pois ele tem feito coisas maravilhosas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 2.30,32",
      "linhas": [
        {
          "text": "Aleluia. Pois eu já vi com os meus próprios olhos a tua salvação, uma luz para mostrar o teu caminho a todos os que não são judeus e para dar glória ao teu povo de Israel. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "2º Domingo após o Natal": {
    "oracao": "Todo-poderoso Deus, que derramaste em nossos corações a verdadeira Luz da tua Palavra encarnada, concede que esta Luz possa brilhar em nossas vidas; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 147.1,5,11-12; antífona João 1.14",
      "linhas": [
        {
          "text": "A Palavra se tornou um ser humano e morou entre nós, cheia de amor e de verdade.",
          "role": "chamada"
        },
        {
          "text": "E nós vimos a revelação da sua natureza divina, natureza que ele recebeu como Filho único do Pai.",
          "role": "resposta"
        },
        {
          "text": "Aleluia! É bom cantar louvores ao nosso Deus;",
          "role": "chamada"
        },
        {
          "text": "É agradável e certo louvá-lo.",
          "role": "resposta"
        },
        {
          "text": "Deus, o Senhor nosso, é grande e poderoso;",
          "role": "chamada"
        },
        {
          "text": "A sua sabedoria não pode ser medida.",
          "role": "resposta"
        },
        {
          "text": "O que agrada a Deus são as pessoas que o temem",
          "role": "chamada"
        },
        {
          "text": "E põem a sua esperança no seu amor.",
          "role": "resposta"
        },
        {
          "text": "Louve o Senhor, ó Jerusalém!",
          "role": "chamada"
        },
        {
          "text": "Louve o seu Deus, ó Sião!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "A Palavra se tornou um ser humano e morou entre nós, cheia de amor e de verdade.",
          "role": "chamada"
        },
        {
          "text": "E nós vimos a revelação da sua natureza divina, natureza que ele recebeu como Filho único do Pai.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Isaías 9.6; Salmo 98.1a",
      "linhas": [
        {
          "text": "Pois já nasceu uma criança, Deus nos mandou um menino",
          "role": "chamada"
        },
        {
          "text": "Que será o nosso rei.",
          "role": "resposta"
        },
        {
          "text": "Ele será chamado de Conselheiro Maravilhoso, Deus Poderoso,",
          "role": "chamada"
        },
        {
          "text": "Pai Eterno, Príncipe da Paz.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Pois ele tem feito coisas maravilhosas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 2.40",
      "linhas": [
        {
          "text": "Aleluia. O menino crescia e ficava forte; tinha muita sabedoria e era abençoado por Deus. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Epifania do Senhor": {
    "oracao": "Ó Deus, pela direção de uma estrela tornaste conhecido o teu Filho unigênito àqueles que não faziam parte do teu povo. Dirige a nós, que o conhecemos pela fé, a desfrutar nos céus da plenitude da sua divina presença; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 45.6-8a; antífona Salmo 45.17",
      "linhas": [
        {
          "text": "A minha canção fará com que a sua fama seja sempre lembrada,",
          "role": "chamada"
        },
        {
          "text": "E todos o elogiarão para sempre.",
          "role": "resposta"
        },
        {
          "text": "O reino que Deus lhe deu vai durar para sempre. Ó rei, o senhor governa o seu povo com justiça,",
          "role": "chamada"
        },
        {
          "text": "Ama o bem e odeia o mal.",
          "role": "resposta"
        },
        {
          "text": "Foi por isso que Deus, o seu Deus, o escolheu e deu mais felicidade ao senhor do que a qualquer outro rei.",
          "role": "chamada"
        },
        {
          "text": "A sua roupa está perfumada com mirra e aloés.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "A minha canção fará com que a sua fama seja sempre lembrada,",
          "role": "chamada"
        },
        {
          "text": "E todos o elogiarão para sempre.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 2.2b",
      "linhas": [
        {
          "text": "Aleluia. Onde está o menino que nasceu para ser o rei dos judeus? Nós vimos a estrela dele no Oriente e viemos adorá-lo. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Batismo do Senhor": {
    "oracao": "Pai dos céus, ao ser batizado no Rio Jordão Jesus foi proclamado teu Filho amado e ungido com o Espírito Santo. Faze com que todos os batizados em seu nome sejam fiéis ao seu chamado como teus filhos e herdeiros com ele da vida eterna; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 2.7-11,12c; antífona Isaías 42.1a",
      "linhas": [
        {
          "text": "Aqui está o meu servo, a quem eu fortaleço,",
          "role": "chamada"
        },
        {
          "text": "O meu escolhido, que dá muita alegria ao meu coração.",
          "role": "resposta"
        },
        {
          "text": "Anunciarei o que o Senhor afirmou.",
          "role": "chamada"
        },
        {
          "text": "O Senhor me disse: Você é meu filho; hoje eu me tornei seu pai.",
          "role": "resposta"
        },
        {
          "text": "Peça, e eu lhe darei todas as nações;",
          "role": "chamada"
        },
        {
          "text": "O mundo inteiro será seu.",
          "role": "resposta"
        },
        {
          "text": "Com uma barra de ferro, você as quebrará",
          "role": "chamada"
        },
        {
          "text": "E as fará em pedaços como se fossem potes de barro.",
          "role": "resposta"
        },
        {
          "text": "Agora escutem, ó reis;",
          "role": "chamada"
        },
        {
          "text": "Prestem atenção, autoridades!",
          "role": "resposta"
        },
        {
          "text": "Adorem o Senhor com temor.",
          "role": "chamada"
        },
        {
          "text": "Tremam e se ajoelhem diante dele;",
          "role": "resposta"
        },
        {
          "text": "Se não, ele ficará irado logo, e vocês morrerão.",
          "role": "chamada"
        },
        {
          "text": "Felizes são aqueles que buscam a proteção de Deus!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Aqui está o meu servo, a quem eu fortaleço,",
          "role": "chamada"
        },
        {
          "text": "O meu escolhido, que dá muita alegria ao meu coração.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Marcos 1.11b",
      "linhas": [
        {
          "text": "Aleluia. Tu és o meu Filho querido e me dás muita alegria. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "2º Domingo após Epifania": {
    "oracao": "Todo-poderoso e eterno Deus, que governas todas as coisas nos céus e na terra, com misericórdia escuta as orações do teu povo e concede-nos a tua paz durante todos os nossos dias; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 19.1-4b; antífona Salmo 19.14",
          "linhas": [
            {
              "text": "Que as minhas palavras e os meus pensamentos sejam aceitáveis a ti,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, minha rocha e meu defensor!",
              "role": "resposta"
            },
            {
              "text": "O céu anuncia a glória de Deus",
              "role": "chamada"
            },
            {
              "text": "E nos mostra aquilo que as suas mãos fizeram.",
              "role": "resposta"
            },
            {
              "text": "Cada dia fala dessa glória ao dia seguinte,",
              "role": "chamada"
            },
            {
              "text": "E cada noite repete isso à outra noite.",
              "role": "resposta"
            },
            {
              "text": "Não há discurso nem palavras,",
              "role": "chamada"
            },
            {
              "text": "E não se ouve nenhum som.",
              "role": "resposta"
            },
            {
              "text": "No entanto, a voz do céu se espalha pelo mundo inteiro, e as suas palavras alcançam a terra toda.",
              "role": "chamada"
            },
            {
              "text": "Deus armou no céu uma barraca para o sol.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que as minhas palavras e os meus pensamentos sejam aceitáveis a ti,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, minha rocha e meu defensor!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 40.1-5; antífona Salmo 40.10a,b",
          "linhas": [
            {
              "text": "Não tenho guardado para mim mesmo a notícia da tua salvação.",
              "role": "chamada"
            },
            {
              "text": "Tenho sempre falado da tua fidelidade e do teu poder salvador.",
              "role": "resposta"
            },
            {
              "text": "Esperei com paciência pela ajuda de Deus, o Senhor.",
              "role": "chamada"
            },
            {
              "text": "Ele me escutou e ouviu o meu pedido de socorro.",
              "role": "resposta"
            },
            {
              "text": "Tirou-me de uma cova perigosa, de um poço de lama.",
              "role": "chamada"
            },
            {
              "text": "Ele me pôs seguro em cima de uma rocha e firmou os meus passos.",
              "role": "resposta"
            },
            {
              "text": "Ele me ensinou a cantar uma nova canção, um hino de louvor ao nosso Deus.",
              "role": "chamada"
            },
            {
              "text": "Quando virem isso, muitos temerão o Senhor e nele porão a sua confiança.",
              "role": "resposta"
            },
            {
              "text": "Feliz aquele que confia em Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Que não vai atrás dos ídolos, nem se junta com os que adoram falsos deuses!",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, nosso Deus, tu tens feito grandes coisas por nós. Não há ninguém igual a ti.",
              "role": "chamada"
            },
            {
              "text": "Tu tens feito muitos planos maravilhosos para o nosso bem.",
              "role": "resposta"
            },
            {
              "text": "Ainda que eu quisesse, não poderia falar de todos eles,",
              "role": "chamada"
            },
            {
              "text": "Pois são tantos, que não podem ser contados.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Não tenho guardado para mim mesmo a notícia da tua salvação.",
              "role": "chamada"
            },
            {
              "text": "Tenho sempre falado da tua fidelidade e do teu poder salvador.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 36.5-9; antífona Cantares 2.4 (RA)",
          "linhas": [
            {
              "text": "[O Senhor] me levou ao salão de festas,",
              "role": "chamada"
            },
            {
              "text": "E o seu estandarte sobre mim é o amor.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, o teu amor chega até o céu,",
              "role": "chamada"
            },
            {
              "text": "E a tua fidelidade vai até as nuvens.",
              "role": "resposta"
            },
            {
              "text": "A tua justiça é firme como as grandes montanhas,",
              "role": "chamada"
            },
            {
              "text": "E os teus julgamentos são profundos como o mar. Ó Senhor Deus, tu cuidas das pessoas e dos animais.",
              "role": "resposta"
            },
            {
              "text": "Como é precioso o teu amor!",
              "role": "chamada"
            },
            {
              "text": "Na sombra das tuas asas, encontramos proteção.",
              "role": "resposta"
            },
            {
              "text": "Ficamos satisfeitos com a comida que nos dás com fartura;",
              "role": "chamada"
            },
            {
              "text": "Tu nos deixas beber do rio da tua bondade.",
              "role": "resposta"
            },
            {
              "text": "Tu és a fonte da vida,",
              "role": "chamada"
            },
            {
              "text": "E, por causa da tua luz, nós vemos a luz.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "[O Senhor] me levou ao salão de festas,",
              "role": "chamada"
            },
            {
              "text": "E o seu estandarte sobre mim é o amor.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – João 1.29b",
      "linhas": [
        {
          "text": "Aleluia. Aí está o Cordeiro de Deus, que tira o pecado do mundo! Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – Isaías 49.3",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Israel, você é o meu servo, e por meio de você vou mostrar a minha grandeza. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – João 2.11",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Jesus fez esse seu primeiro milagre em Caná da Galiléia. Assim ele revelou a sua natureza divina, e os seus discípulos creram nele. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "3º Domingo após Epifania": {
    "oracao": "Todo-poderoso e eterno Deus, olha para as nossas enfermidades com misericórdia e estende a tua mão majestosa para nos curar e defender; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 22.27-31; antífona Salmo 22.22",
          "linhas": [
            {
              "text": "Contarei à minha gente o que tens feito;",
              "role": "chamada"
            },
            {
              "text": "Na reunião do povo eu te louvarei.",
              "role": "resposta"
            },
            {
              "text": "Todas as nações lembrarão de Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Todos os povos da terra se voltarão para ele, e todas as raças o adorarão.",
              "role": "resposta"
            },
            {
              "text": "Pois o Senhor é Rei",
              "role": "chamada"
            },
            {
              "text": "E governa as nações.",
              "role": "resposta"
            },
            {
              "text": "Todos os orgulhosos se curvarão na sua presença,",
              "role": "chamada"
            },
            {
              "text": "E o adorarão todos os mortais, todos os que um dia vão morrer.",
              "role": "resposta"
            },
            {
              "text": "As pessoas dos tempos futuros o servirão",
              "role": "chamada"
            },
            {
              "text": "E falarão às gerações seguintes a respeito de Deus, o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Os que ainda não nasceram ouvirão falar do que ele fez:",
              "role": "chamada"
            },
            {
              "text": "Deus salvou o seu povo!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Contarei à minha gente o que tens feito;",
              "role": "chamada"
            },
            {
              "text": "Na reunião do povo eu te louvarei.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 113.1-2,4,7-8; antífona Salmo 113.3",
          "linhas": [
            {
              "text": "Desde o nascer até o pôr-do-sol,",
              "role": "chamada"
            },
            {
              "text": "Que o nome do Senhor seja louvado!",
              "role": "resposta"
            },
            {
              "text": "Aleluia! Servos de Deus, o Senhor, louvem o seu nome!",
              "role": "chamada"
            },
            {
              "text": "Que o nome do Senhor seja louvado agora e para sempre!",
              "role": "resposta"
            },
            {
              "text": "O Senhor governa todas as nações;",
              "role": "chamada"
            },
            {
              "text": "A sua glória está acima dos céus.",
              "role": "resposta"
            },
            {
              "text": "Ele livra da humilhação os pobres",
              "role": "chamada"
            },
            {
              "text": "E tira da miséria os necessitados;",
              "role": "resposta"
            },
            {
              "text": "Ele faz com que eles sejam companheiros de governantes,",
              "role": "chamada"
            },
            {
              "text": "Dos governantes do seu povo.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Desde o nascer até o pôr-do-sol,",
              "role": "chamada"
            },
            {
              "text": "Que o nome do Senhor seja louvado!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 102.18-22; antífona Salmo 102.13",
          "linhas": [
            {
              "text": "Tu te levantarás e terás pena de Jerusalém.",
              "role": "chamada"
            },
            {
              "text": "Já é hora de teres compaixão dela, a hora certa já chegou.",
              "role": "resposta"
            },
            {
              "text": "Que isso fique escrito para que os nossos descendentes saibam o que o Senhor",
              "role": "chamada"
            },
            {
              "text": "Deus fez",
              "role": "chamada"
            },
            {
              "text": "E para que o louvem aqueles que ainda vão nascer!",
              "role": "resposta"
            },
            {
              "text": "Do seu lugar santo, nas alturas, o Senhor olhou;",
              "role": "chamada"
            },
            {
              "text": "Do céu ele olhou para a terra",
              "role": "resposta"
            },
            {
              "text": "A fim de ouvir os gemidos dos prisioneiros",
              "role": "chamada"
            },
            {
              "text": "E libertar os que tinham sido condenados à morte.",
              "role": "resposta"
            },
            {
              "text": "Por isso, o Senhor Deus será louvado em Jerusalém,",
              "role": "chamada"
            },
            {
              "text": "E a sua fama será anunciada ali",
              "role": "resposta"
            },
            {
              "text": "Quando as nações e os reinos",
              "role": "chamada"
            },
            {
              "text": "Se reunirem para adorá-lo.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Tu te levantarás e terás pena de Jerusalém.",
              "role": "chamada"
            },
            {
              "text": "Já é hora de teres compaixão dela, a hora certa já chegou.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Mateus 4.17",
      "linhas": [
        {
          "text": "Aleluia. Daí em diante Jesus começou a anunciar a sua mensagem. Ele dizia:",
          "role": "chamada"
        },
        {
          "text": "Arrependam-se dos seus pecados porque o Reino do Céu está perto! Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 1.15",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Chegou a hora, e o Reino de Deus está perto. Arrependam-se dos seus pecados e creiam no evangelho. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 4.18a",
          "role": "resposta"
        },
        {
          "text": "Aleluia. O Senhor me deu o seu Espírito. Ele me escolheu para levar boas notícias aos pobres. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "4º Domingo após Epifania": {
    "oracao": "Todo-poderoso Deus, que sabes que vivemos em meio a muitos perigos, de tal forma que não podemos ficar de pé por causa de nossa fragilidade, concede força e proteção para nos auxiliar em todos os perigos e guia-nos através de todas as tentações; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 1.1-5; antífona Salmo 1.6",
          "linhas": [
            {
              "text": "O Senhor dirige e abençoa a vida daqueles que lhe obedecem,",
              "role": "chamada"
            },
            {
              "text": "Porém o fim dos maus são a desgraça e a morte.",
              "role": "resposta"
            },
            {
              "text": "Felizes são aqueles que não se deixam levar pelos conselhos dos maus,",
              "role": "chamada"
            },
            {
              "text": "Que não seguem o exemplo dos que não querem saber de Deus e que não se juntam com os que zombam de tudo o que é sagrado!",
              "role": "resposta"
            },
            {
              "text": "Pelo contrário, o prazer deles está na lei do Senhor,",
              "role": "chamada"
            },
            {
              "text": "E nessa lei eles meditam dia e noite.",
              "role": "resposta"
            },
            {
              "text": "Essas pessoas são como árvores que crescem na beira de um riacho; elas dão frutas no tempo certo, e as suas folhas não murcham.",
              "role": "chamada"
            },
            {
              "text": "Assim também tudo o que essas pessoas fazem dá certo.",
              "role": "resposta"
            },
            {
              "text": "O mesmo não acontece com os maus;",
              "role": "chamada"
            },
            {
              "text": "Eles são como a palha que o vento leva.",
              "role": "resposta"
            },
            {
              "text": "No Dia do Juízo eles serão condenados",
              "role": "chamada"
            },
            {
              "text": "E ficarão separados dos que obedecem a Deus.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor dirige e abençoa a vida daqueles que lhe obedecem,",
              "role": "chamada"
            },
            {
              "text": "Porém o fim dos maus são a desgraça e a morte.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 32.1-2,5-7; antífona Salmo 32.10",
          "linhas": [
            {
              "text": "Os maus sofrem muito,",
              "role": "chamada"
            },
            {
              "text": "Mas os que confiam em Deus, o Senhor, são protegidos pelo seu amor.",
              "role": "resposta"
            },
            {
              "text": "Feliz aquele cujas maldades Deus perdoa",
              "role": "chamada"
            },
            {
              "text": "E cujos pecados ele apaga!",
              "role": "resposta"
            },
            {
              "text": "Feliz aquele que o Senhor Deus não acusa de fazer coisas más",
              "role": "chamada"
            },
            {
              "text": "E que não age com falsidade!",
              "role": "resposta"
            },
            {
              "text": "Então eu te confessei o meu pecado e não escondi a minha maldade.",
              "role": "chamada"
            },
            {
              "text": "Resolvi confessar tudo a ti, e tu perdoaste todos os meus pecados.",
              "role": "resposta"
            },
            {
              "text": "Por isso, nos momentos de angústia, todos os que são fiéis a ti devem orar.",
              "role": "chamada"
            },
            {
              "text": "Assim, quando as grandes ondas de sofrimento vierem, não chegarão até eles.",
              "role": "resposta"
            },
            {
              "text": "Tu és o meu esconderijo; tu me livras da aflição.",
              "role": "chamada"
            },
            {
              "text": "Eu canto bem alto a tua salvação, pois me tens protegido.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Os maus sofrem muito,",
              "role": "chamada"
            },
            {
              "text": "Mas os que confiam em Deus, o Senhor, são protegidos pelo seu amor.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 10.16-18; antífona Salmo 10.12",
          "linhas": [
            {
              "text": "Vem, ó Senhor Deus, e castiga essa gente má!",
              "role": "chamada"
            },
            {
              "text": "Não te esqueças dos que estão sendo perseguidos!",
              "role": "resposta"
            },
            {
              "text": "O Senhor é Rei para sempre;",
              "role": "chamada"
            },
            {
              "text": "Os pagãos serão expulsos da terra dele.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, tu ouvirás as orações dos que são perseguidos",
              "role": "chamada"
            },
            {
              "text": "E lhes darás coragem.",
              "role": "resposta"
            },
            {
              "text": "Tu ouvirás os gritos dos oprimidos e dos necessitados e julgarás a favor deles",
              "role": "chamada"
            },
            {
              "text": "Para que seres humanos, que são mortais, nunca mais espalhem o terror.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Vem, ó Senhor Deus, e castiga essa gente má!",
              "role": "chamada"
            },
            {
              "text": "Não te esqueças dos que estão sendo perseguidos!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Mateus 5.3",
      "linhas": [
        {
          "text": "Aleluia. Felizes as pessoas que sabem que são espiritualmente pobres, pois o",
          "role": "chamada"
        },
        {
          "text": "Reino do Céu é delas. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 1.22a",
          "role": "resposta"
        },
        {
          "text": "Aleluia. As pessoas que o escutavam ficaram muito admiradas com a sua maneira de ensinar. É que Jesus ensinava com autoridade. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 4.43b",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Eu preciso anunciar também em outras cidades a boa notícia do Reino de Deus, pois foi para fazer isso que Deus me enviou. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "5º Domingo após Epifania": {
    "oracao": "Ó Senhor, mantém a Igreja, a tua família, continuamente na fé verdadeira, para que, confiando na esperança de tua graça celestial, possamos sempre ser defendidos por teu imenso poder; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 119.9-16; antífona Salmo 119.12",
          "linhas": [
            {
              "text": "Eu te louvo, ó Senhor Deus!",
              "role": "chamada"
            },
            {
              "text": "Ensina-me as tuas leis.",
              "role": "resposta"
            },
            {
              "text": "Como pode um jovem conservar pura a sua vida?",
              "role": "chamada"
            },
            {
              "text": "É só obedecer aos teus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "Eu procuro te servir de todo o coração;",
              "role": "chamada"
            },
            {
              "text": "Não deixes que eu me desvie dos teus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "Guardo a tua palavra no meu coração",
              "role": "chamada"
            },
            {
              "text": "Para não pecar contra ti.",
              "role": "resposta"
            },
            {
              "text": "Eu te louvo, ó Senhor Deus!",
              "role": "chamada"
            },
            {
              "text": "Ensina-me as tuas leis.",
              "role": "resposta"
            },
            {
              "text": "Costumo repetir em voz alta",
              "role": "chamada"
            },
            {
              "text": "Todas as ordens que tens dado.",
              "role": "resposta"
            },
            {
              "text": "Fico mais alegre em seguir os teus mandamentos",
              "role": "chamada"
            },
            {
              "text": "Do que em ser muito rico.",
              "role": "resposta"
            },
            {
              "text": "Estudo as tuas leis",
              "role": "chamada"
            },
            {
              "text": "E examino os teus ensinamentos.",
              "role": "resposta"
            },
            {
              "text": "As tuas leis são o meu prazer;",
              "role": "chamada"
            },
            {
              "text": "Não esqueço a tua palavra.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu te louvo, ó Senhor Deus!",
              "role": "chamada"
            },
            {
              "text": "Ensina-me as tuas leis.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 13.3-5; antífona Salmo 13.6",
          "linhas": [
            {
              "text": "Porque tens sido bom para mim,",
              "role": "chamada"
            },
            {
              "text": "Cantarei hinos a ti, ó Senhor.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, meu Deus, olha para mim e responde-me!",
              "role": "chamada"
            },
            {
              "text": "Dá-me forças novamente para que eu não morra.",
              "role": "resposta"
            },
            {
              "text": "Assim os meus inimigos não poderão se alegrar com a minha desgraça,",
              "role": "chamada"
            },
            {
              "text": "Nem poderão dizer: Nós o derrotamos!",
              "role": "resposta"
            },
            {
              "text": "Eu confio no teu amor.",
              "role": "chamada"
            },
            {
              "text": "O meu coração ficará alegre, pois tu me salvarás.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Porque tens sido bom para mim,",
              "role": "chamada"
            },
            {
              "text": "Cantarei hinos a ti, ó Senhor.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 71.15-18; antífona Salmo 71.12",
          "linhas": [
            {
              "text": "Ó Deus, não fiques longe de mim!",
              "role": "chamada"
            },
            {
              "text": "Ajuda-me agora, meu Deus!",
              "role": "resposta"
            },
            {
              "text": "Anunciarei que tu és fiel; o dia inteiro falarei da tua salvação,",
              "role": "chamada"
            },
            {
              "text": "Embora não seja capaz de entendê-la.",
              "role": "resposta"
            },
            {
              "text": "Falarei do teu poder, ó Senhor, meu Deus;",
              "role": "chamada"
            },
            {
              "text": "Anunciarei a tua fidelidade, a tua fidelidade somente.",
              "role": "resposta"
            },
            {
              "text": "Tu tens me ensinado desde a minha mocidade,",
              "role": "chamada"
            },
            {
              "text": "E eu continuo a falar das coisas maravilhosas que fazes.",
              "role": "resposta"
            },
            {
              "text": "Agora que estou velho, e os meus cabelos ficaram brancos, não me abandones, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Fica comigo enquanto anuncio o teu poder e a tua força a este povo e aos seus descendentes.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.Ó Deus, não fiques longe de mim!",
              "role": "chamada"
            },
            {
              "text": "Ajuda-me agora, meu Deus!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Mateus 5.16b",
      "linhas": [
        {
          "text": "Aleluia. A luz de vocês deve brilhar para que os outros vejam as coisas boas que vocês fazem e louvem o Pai de vocês, que está no céu. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 1.39",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Jesus andava por toda a Galiléia, anunciando o evangelho nas sinagogas e expulsando demônios. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 5.10b",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Não tenha medo! De agora em diante você vai pescar gente. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "6º Domingo após Epifania": {
    "oracao": "Ó Senhor, graciosamente ouve as orações do teu povo a fim de que nós, que sofremos as conseqüências do nosso pecado, possamos ser misericordiosamente libertados pela tua bondade, para a glória do teu nome; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 98.7-9; antífona Salmo 98.2",
          "linhas": [
            {
              "text": "O Senhor anunciou a sua vitória;",
              "role": "chamada"
            },
            {
              "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
              "role": "resposta"
            },
            {
              "text": "Ruja o mar e todas as criaturas que nele vivem.",
              "role": "chamada"
            },
            {
              "text": "Cante a terra e os seus moradores.",
              "role": "resposta"
            },
            {
              "text": "Rios, batam palmas! Montes, cantem com alegria diante do Senhor",
              "role": "chamada"
            },
            {
              "text": "Porque ele vem governar a terra!",
              "role": "resposta"
            },
            {
              "text": "Ele governará os povos do mundo com justiça",
              "role": "chamada"
            },
            {
              "text": "E de acordo com o que é direito.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor anunciou a sua vitória;",
              "role": "chamada"
            },
            {
              "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 112.1,3,7-9; antífona Salmo 112.4",
          "linhas": [
            {
              "text": "A luz brilha na escuridão para aqueles que são corretos,",
              "role": "chamada"
            },
            {
              "text": "Para aqueles que são bondosos, misericordiosos e honestos.",
              "role": "resposta"
            },
            {
              "text": "Aleluia! Feliz aquele que teme a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Que tem prazer em obedecer aos seus mandamentos!",
              "role": "resposta"
            },
            {
              "text": "Na sua casa há muita riqueza,",
              "role": "chamada"
            },
            {
              "text": "E ele é sempre bem-sucedido.",
              "role": "resposta"
            },
            {
              "text": "Ele não tem medo de receber más notícias;",
              "role": "chamada"
            },
            {
              "text": "A sua fé é forte, pois ele confia no Senhor.",
              "role": "resposta"
            },
            {
              "text": "Ele não fica preocupado, nem tem medo;",
              "role": "chamada"
            },
            {
              "text": "Ele tem certeza de que os seus inimigos serão derrotados.",
              "role": "resposta"
            },
            {
              "text": "Ele dá generosamente aos pobres, e a sua bondade dura para sempre.",
              "role": "chamada"
            },
            {
              "text": "Ele é poderoso e respeitado.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A luz brilha na escuridão para aqueles que são corretos,",
              "role": "chamada"
            },
            {
              "text": "Para aqueles que são bondosos, misericordiosos e honestos.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.1-2,4-5; antífona Salmo 119.7",
          "linhas": [
            {
              "text": "Com um coração sincero eu te louvarei",
              "role": "chamada"
            },
            {
              "text": "À medida que for aprendendo os teus justos ensinamentos.",
              "role": "resposta"
            },
            {
              "text": "Felizes são os que não podem ser acusados de nada,",
              "role": "chamada"
            },
            {
              "text": "Que vivem de acordo com a lei de Deus, o Senhor!",
              "role": "resposta"
            },
            {
              "text": "Felizes os que guardam os mandamentos de Deus",
              "role": "chamada"
            },
            {
              "text": "E lhe obedecem de todo o coração!",
              "role": "resposta"
            },
            {
              "text": "Tu, ó Deus, nos deste as tuas leis",
              "role": "chamada"
            },
            {
              "text": "E mandaste que as cumpríssemos fielmente.",
              "role": "resposta"
            },
            {
              "text": "Como desejo obedecer às tuas ordens",
              "role": "chamada"
            },
            {
              "text": "E cumpri-las com fidelidade!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Com um coração sincero eu te louvarei",
              "role": "chamada"
            },
            {
              "text": "À medida que for aprendendo os teus justos ensinamentos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Efésios 5.2",
      "linhas": [
        {
          "text": "Aleluia. Que a vida de vocês seja dominada pelo amor, assim como Cristo nos amou e deu a sua vida por nós, como uma oferta de perfume agradável e como um sacrifício que agrada a Deus! Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – 2 Reis 5.8c",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Mande que esse homem venha falar comigo, e eu mostrarei a ele que há um profeta em Israel! Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 6.23a",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Fiquem felizes e muito alegres quando isso acontecer, pois uma grande recompensa está guardada no céu para vocês. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "7º Domingo após Epifania": {
    "oracao": "Ó Deus, que és a força de todos que colocam sua confiança em ti, misericordiosamente concede que pelo teu poder possamos ser defendidos de toda adversidade; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 103.8-11; antífona Salmo 103.2-3",
          "linhas": [
            {
              "text": "Que todo o meu ser louve o Senhor,",
              "role": "chamada"
            },
            {
              "text": "E que eu não esqueça nenhuma das suas bênçãos!",
              "role": "resposta"
            },
            {
              "text": "O Senhor perdoa todos os meus pecados",
              "role": "chamada"
            },
            {
              "text": "E cura todas as minhas doenças.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é bondoso e misericordioso,",
              "role": "chamada"
            },
            {
              "text": "Não fica irado facilmente e é muito amoroso.",
              "role": "resposta"
            },
            {
              "text": "Ele não vive nos repreendendo,",
              "role": "chamada"
            },
            {
              "text": "E a sua ira não dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "O Senhor não nos castiga como merecemos,",
              "role": "chamada"
            },
            {
              "text": "Nem nos paga de acordo com os nossos pecados e maldades.",
              "role": "resposta"
            },
            {
              "text": "Assim como é grande a distância entre o céu e a terra,",
              "role": "chamada"
            },
            {
              "text": "Assim é grande o seu amor por aqueles que o temem.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que todo o meu ser louve o Senhor,",
              "role": "chamada"
            },
            {
              "text": "E que eu não esqueça nenhuma das suas bênçãos!",
              "role": "resposta"
            },
            {
              "text": "O Senhor perdoa todos os meus pecados",
              "role": "chamada"
            },
            {
              "text": "E cura todas as minhas doenças.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 103.1-5,10-12; antífona Salmo 103.8",
          "linhas": [
            {
              "text": "O Senhor é bondoso e misericordioso,",
              "role": "chamada"
            },
            {
              "text": "Não fica irado facilmente e é muito amoroso.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, que todo o meu ser te louve!",
              "role": "chamada"
            },
            {
              "text": "Que eu louve o Santo Deus com todas as minhas forças!",
              "role": "resposta"
            },
            {
              "text": "Que todo o meu ser louve o Senhor,",
              "role": "chamada"
            },
            {
              "text": "E que eu não esqueça nenhuma das suas bênçãos!",
              "role": "resposta"
            },
            {
              "text": "O Senhor perdoa todos os meus pecados",
              "role": "chamada"
            },
            {
              "text": "E cura todas as minhas doenças;",
              "role": "resposta"
            },
            {
              "text": "Ele me salva da morte",
              "role": "chamada"
            },
            {
              "text": "E me abençoa com amor e bondade.",
              "role": "resposta"
            },
            {
              "text": "Ele enche a minha vida com muitas coisas boas,",
              "role": "chamada"
            },
            {
              "text": "E assim eu continuo jovem e forte como a águia.",
              "role": "resposta"
            },
            {
              "text": "O Senhor não nos castiga como merecemos,",
              "role": "chamada"
            },
            {
              "text": "Nem nos paga de acordo com os nossos pecados e maldades.",
              "role": "resposta"
            },
            {
              "text": "Assim como é grande a distância entre o céu e a terra,",
              "role": "chamada"
            },
            {
              "text": "Assim é grande o seu amor por aqueles que o temem.",
              "role": "resposta"
            },
            {
              "text": "Quanto o Oriente está longe do Ocidente,",
              "role": "chamada"
            },
            {
              "text": "Assim ele afasta de nós os nossos pecados.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é bondoso e misericordioso,",
              "role": "chamada"
            },
            {
              "text": "Não fica irado facilmente e é muito amoroso.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 37.1-5; antífona Salmo 37.7a,b",
          "linhas": [
            {
              "text": "Não se irrite por causa dos que vencem na vida,",
              "role": "chamada"
            },
            {
              "text": "Nem tenha inveja dos que conseguem realizar os seus planos de maldade.",
              "role": "resposta"
            },
            {
              "text": "Não se aborreça por causa dos maus,",
              "role": "chamada"
            },
            {
              "text": "Nem tenha inveja dos que praticam o mal.",
              "role": "resposta"
            },
            {
              "text": "Pois eles vão desaparecer logo como a erva, que seca;",
              "role": "chamada"
            },
            {
              "text": "Eles morrerão como as plantas, que murcham.",
              "role": "resposta"
            },
            {
              "text": "Confie em Deus, o Senhor, e faça o bem",
              "role": "chamada"
            },
            {
              "text": "E assim more com toda a segurança na Terra Prometida.",
              "role": "resposta"
            },
            {
              "text": "Que a sua felicidade esteja no Senhor!",
              "role": "chamada"
            },
            {
              "text": "Ele lhe dará o que o seu coração deseja.",
              "role": "resposta"
            },
            {
              "text": "Ponha a sua vida nas mãos do Senhor,",
              "role": "chamada"
            },
            {
              "text": "Confie nele, e ele o ajudará.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Não se irrite por causa dos que vencem na vida,",
              "role": "chamada"
            },
            {
              "text": "Nem tenha inveja dos que conseguem realizar os seus planos de maldade.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Mateus 5.44b",
      "linhas": [
        {
          "text": "Aleluia. Amem os seus inimigos e orem pelos que perseguem vocês. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 2.12b",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Todos ficaram muito admirados e louvaram a Deus, dizendo: Nunca vimos uma coisa assim! Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 6.36",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Tenham misericórdia dos outros, assim como o Pai de vocês tem misericórdia de vocês. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "8º Domingo após Epifania": {
    "oracao": "Ó Senhor, ouve nossas orações por tua misericórdia para que, livres das algemas dos nossos pecados, sejamos libertos de todo o mal; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "B": {
          "ref": "Salmo 132.13-18; antífona Salmo 132.9",
          "linhas": [
            {
              "text": "Que os teus sacerdotes façam sempre o que é certo!",
              "role": "chamada"
            },
            {
              "text": "Que os teus servos fiéis gritem de alegria!",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus escolheu o monte Sião;",
              "role": "chamada"
            },
            {
              "text": "Ele quis que a sua casa fosse ali e disse:",
              "role": "resposta"
            },
            {
              "text": "Aqui viverei para sempre;",
              "role": "chamada"
            },
            {
              "text": "É aqui que eu quero reinar.",
              "role": "resposta"
            },
            {
              "text": "Darei de tudo com fartura a Jerusalém,",
              "role": "chamada"
            },
            {
              "text": "Darei muito alimento aos seus pobres.",
              "role": "resposta"
            },
            {
              "text": "Abençoarei tudo o que os seus sacerdotes fizerem,",
              "role": "chamada"
            },
            {
              "text": "E o seu povo cantará e gritará de alegria.",
              "role": "resposta"
            },
            {
              "text": "Aqui farei com que um descendente de Davi seja rei poderoso",
              "role": "chamada"
            },
            {
              "text": "E farei com que sempre sejam reis os descendentes desse rei escolhido.",
              "role": "resposta"
            },
            {
              "text": "Farei com que os seus inimigos fiquem cobertos de vergonha,",
              "role": "chamada"
            },
            {
              "text": "Mas ele usará uma coroa que vai brilhar cada vez mais.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que os teus sacerdotes façam sempre o que é certo!",
              "role": "chamada"
            },
            {
              "text": "Que os teus servos fiéis gritem de alegria!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Mateus 6.33",
      "linhas": [
        {
          "text": "Aleluia. Ponham em primeiro lugar na sua vida o Reino de Deus e aquilo que",
          "role": "chamada"
        },
        {
          "text": "Deus quer, e ele lhes dará todas essas coisas. Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 2.19",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Vocês acham que os convidados de um casamento jejuam enquanto o noivo está com eles? Enquanto ele está presente, é claro que não jejuam!",
          "role": "chamada"
        },
        {
          "text": "Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 6.47",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Eu vou mostrar a vocês com quem se parece a pessoa que vem e ouve a minha mensagem e é obediente a ela. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Transfiguração do Senhor": {
    "oracao": "Ó Deus, na gloriosa transfiguração de teu amado Filho confirmaste os mistérios da fé pelo testemunho de Moisés e Elias. Na voz que veio da nuvem brilhante predisseste nossa adoção por graça. Por tua misericórdia, faze-nos herdeiros com o Rei de sua glória e traze-nos à plenitude de sua herança nos céus; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "C": {
          "ref": "Salmo 84.1-2,9,11; antífona Salmo 84.4",
          "linhas": [
            {
              "text": "Felizes são os que moram na tua casa,",
              "role": "chamada"
            },
            {
              "text": "Sempre cantando louvores a ti!",
              "role": "resposta"
            },
            {
              "text": "Como eu amo o teu Templo,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Todo-Poderoso!",
              "role": "resposta"
            },
            {
              "text": "Como eu gostaria de estar ali! Tenho saudade dos pátios do Templo de Deus, o Senhor.",
              "role": "chamada"
            },
            {
              "text": "Com todo o meu ser, canto com alegria ao Deus vivo.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, abençoa o nosso protetor,",
              "role": "chamada"
            },
            {
              "text": "O rei que tu escolheste!",
              "role": "resposta"
            },
            {
              "text": "O Senhor é a nossa luz e o nosso escudo.",
              "role": "chamada"
            },
            {
              "text": "Ele ama e honra os que fazem o que é certo e lhes dá tudo o que é bom.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Felizes são os que moram na tua casa,",
              "role": "chamada"
            },
            {
              "text": "Sempre cantando louvores a ti!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 117.1-2a; 96.8",
      "linhas": [
        {
          "text": "Louvem a Deus, o Senhor, todas as nações!",
          "role": "chamada"
        },
        {
          "text": "Que todos os povos o louvem!",
          "role": "resposta"
        },
        {
          "text": "O seu amor por nós é forte,",
          "role": "chamada"
        },
        {
          "text": "E a sua fidelidade dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Dêem ao Senhor a honra que ele merece;",
          "role": "chamada"
        },
        {
          "text": "Tragam uma oferta e entrem nos pátios do seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 45.2a",
      "linhas": [
        {
          "text": "Aleluia. O senhor é o mais bonito de todos os homens e sabe fazer belos discursos. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Quarta-feira de Cinzas": {
    "oracao": "Todo-poderoso e eterno Deus, que não desprezas o que foi criado por ti e perdoas os pecados de todos os que se arrependem, cria em nós um novo e contrito coração, a fim de que, lamentando nossos pecados e reconhecendo nossa miséria, recebamos de ti total absolvição e perdão; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 51.1-3,10-12; antífona Salmo 51.17",
      "linhas": [
        {
          "text": "Ó Deus, o meu sacrifício é um espírito humilde;",
          "role": "chamada"
        },
        {
          "text": "Tu não rejeitarás um coração humilde e arrependido.",
          "role": "resposta"
        },
        {
          "text": "Por causa do teu amor, ó Deus, tem misericórdia de mim.",
          "role": "chamada"
        },
        {
          "text": "Por causa da tua grande compaixão apaga os meus pecados.",
          "role": "resposta"
        },
        {
          "text": "Purifica-me de todas as minhas maldades",
          "role": "chamada"
        },
        {
          "text": "E lava-me do meu pecado.",
          "role": "resposta"
        },
        {
          "text": "Pois eu conheço bem os meus erros,",
          "role": "chamada"
        },
        {
          "text": "E o meu pecado está sempre diante de mim.",
          "role": "resposta"
        },
        {
          "text": "Ó Deus, cria em mim um coração puro",
          "role": "chamada"
        },
        {
          "text": "E dá-me uma vontade nova e firme!",
          "role": "resposta"
        },
        {
          "text": "Não me expulses da tua presença,",
          "role": "chamada"
        },
        {
          "text": "Nem tires de mim o teu santo Espírito.",
          "role": "resposta"
        },
        {
          "text": "Dá-me novamente a alegria da tua salvação",
          "role": "chamada"
        },
        {
          "text": "E conserva em mim o desejo de ser obediente.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Ó Deus, o meu sacrifício é um espírito humilde;",
          "role": "chamada"
        },
        {
          "text": "Tu não rejeitarás um coração humilde e arrependido.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 12.2",
      "linhas": [
        {
          "text": "Conservemos os nossos olhos fixos em Jesus,",
          "role": "chamada"
        },
        {
          "text": "Pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa.",
          "role": "resposta"
        },
        {
          "text": "Ele não deixou que a cruz fizesse com que ele desistisse.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, por causa da alegria que lhe foi prometida,",
          "role": "resposta"
        },
        {
          "text": "Ele não se importou com a humilhação de morrer na cruz",
          "role": "chamada"
        },
        {
          "text": "E agora está sentado do lado direito do trono de Deus.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Joel 2.13b",
      "linhas": [
        {
          "text": "Voltem para o Senhor, nosso Deus, pois ele é bondoso e misericordioso; é paciente e muito amoroso e está sempre pronto a mudar de idéia e não castigar.",
          "role": "chamada"
        }
      ]
    }
  },
  "1º Domingo na Quaresma": {
    "oracao": "Ó Senhor Deus, que conduziste teu povo antigo através do deserto e o levaste à terra prometida, guia o povo da tua Igreja para que, seguindo nosso Salvador, possamos andar através do deserto deste mundo em direção à glória do mundo que está por vir; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 91.9-13; antífona Salmo 91.15-16",
      "linhas": [
        {
          "text": "Quando eles me chamarem, eu responderei e estarei com eles nas horas de aflição.",
          "role": "chamada"
        },
        {
          "text": "Eu os livrarei e farei com que sejam respeitados.",
          "role": "resposta"
        },
        {
          "text": "Como recompensa, eu lhes darei vida longa",
          "role": "chamada"
        },
        {
          "text": "E mostrarei que sou o seu Salvador.",
          "role": "resposta"
        },
        {
          "text": "Você fez do Senhor Deus o seu protetor",
          "role": "chamada"
        },
        {
          "text": "E, do Altíssimo, o seu defensor;",
          "role": "resposta"
        },
        {
          "text": "Por isso, nenhum desastre lhe acontecerá,",
          "role": "chamada"
        },
        {
          "text": "E a violência não chegará perto da sua casa.",
          "role": "resposta"
        },
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Eles vão segurá-lo com as suas mãos,",
          "role": "chamada"
        },
        {
          "text": "Para que nem mesmo os seus pés sejam feridos nas pedras.",
          "role": "resposta"
        },
        {
          "text": "Com os pés você esmagará leões e cobras,",
          "role": "chamada"
        },
        {
          "text": "Leões ferozes e serpentes venenosas.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Quando eles me chamarem, eu responderei e estarei com eles nas horas de aflição.",
          "role": "chamada"
        },
        {
          "text": "Eu os livrarei e farei com que sejam respeitados.",
          "role": "resposta"
        },
        {
          "text": "Como recompensa, eu lhes darei vida longa",
          "role": "chamada"
        },
        {
          "text": "E mostrarei que sou o seu Salvador.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 12.2",
      "linhas": [
        {
          "text": "Conservemos os nossos olhos fixos em Jesus,",
          "role": "chamada"
        },
        {
          "text": "Pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa.",
          "role": "resposta"
        },
        {
          "text": "Ele não deixou que a cruz fizesse com que ele desistisse.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, por causa da alegria que lhe foi prometida,",
          "role": "resposta"
        },
        {
          "text": "Ele não se importou com a humilhação de morrer na cruz",
          "role": "chamada"
        },
        {
          "text": "E agora está sentado do lado direito do trono de Deus.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Efésios 6.11",
      "linhas": [
        {
          "text": "Vistam-se com toda a armadura que Deus dá a vocês, para ficarem firmes contra as armadilhas do Diabo.",
          "role": "chamada"
        }
      ]
    }
  },
  "2º Domingo na Quaresma": {
    "oracao": "Ó Deus, que vês que não temos forças por nós mesmos, por teu imenso poder defende-nos de todas as adversidades que possam acontecer ao corpo e de todos os pensamentos ruins que possam assaltar ou prejudicar a alma; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 105.4-7; antífona Salmo 105.8",
          "linhas": [
            {
              "text": "Ele sempre lembrará da sua aliança",
              "role": "chamada"
            },
            {
              "text": "E, por milhares de gerações, cumprirá as suas promessas.",
              "role": "resposta"
            },
            {
              "text": "Procurem a ajuda do Senhor;",
              "role": "chamada"
            },
            {
              "text": "Estejam sempre na sua presença.",
              "role": "resposta"
            },
            {
              "text": "Vocês, descendentes de Abraão, servo de Deus,",
              "role": "chamada"
            },
            {
              "text": "Vocês, descendentes de Jacó, o escolhido de Deus,",
              "role": "resposta"
            },
            {
              "text": "Lembrem de tudo o que Deus tem feito,",
              "role": "chamada"
            },
            {
              "text": "Lembrem dos seus grandes e maravilhosos milagres e de como tem condenado os nossos inimigos!",
              "role": "resposta"
            },
            {
              "text": "Ele é o Senhor, nosso Deus;",
              "role": "chamada"
            },
            {
              "text": "Os seus mandamentos são para o mundo inteiro.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ele sempre lembrará da sua aliança",
              "role": "chamada"
            },
            {
              "text": "E, por milhares de gerações, cumprirá as suas promessas.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 115.11-13,18; antífona Salmo 25.6",
          "linhas": [
            {
              "text": "Ó Senhor, lembra da tua bondade e do teu amor,",
              "role": "chamada"
            },
            {
              "text": "Que tens mostrado desde os tempos antigos.",
              "role": "resposta"
            },
            {
              "text": "Confiem no Senhor, todos os que o temem!",
              "role": "chamada"
            },
            {
              "text": "Ele é a ajuda e o escudo de vocês.",
              "role": "resposta"
            },
            {
              "text": "O Senhor lembra de nós e nos abençoará;",
              "role": "chamada"
            },
            {
              "text": "Ele abençoará o povo de Israel e todos os sacerdotes de Deus.",
              "role": "resposta"
            },
            {
              "text": "Ele abençoará todos os que o temem,",
              "role": "chamada"
            },
            {
              "text": "Tanto os importantes como os humildes.",
              "role": "resposta"
            },
            {
              "text": "Mas nós, que estamos vivos, daremos graças ao Senhor",
              "role": "chamada"
            },
            {
              "text": "Agora e para sempre. Aleluia!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor, lembra da tua bondade e do teu amor,",
              "role": "chamada"
            },
            {
              "text": "Que tens mostrado desde os tempos antigos.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 74.1-3; antífona Salmo 69.9",
          "linhas": [
            {
              "text": "O meu amor pelo teu Templo queima dentro de mim como fogo;",
              "role": "chamada"
            },
            {
              "text": "As ofensas daqueles que te insultam caem sobre mim.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, por que nos abandonaste para sempre?",
              "role": "chamada"
            },
            {
              "text": "Por que estás irado com as ovelhas do teu rebanho?",
              "role": "resposta"
            },
            {
              "text": "Lembra do teu povo, que há tanto tempo escolheste para ser teu e que livraste da escravidão para ser a tua própria gente.",
              "role": "chamada"
            },
            {
              "text": "Lembra do monte Sião, onde moraste.",
              "role": "resposta"
            },
            {
              "text": "Vem e anda sobre estas ruínas sem fim;",
              "role": "chamada"
            },
            {
              "text": "Os nossos inimigos destruíram tudo o que estava no Templo.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O meu amor pelo teu Templo queima dentro de mim como fogo;",
              "role": "chamada"
            },
            {
              "text": "As ofensas daqueles que te insultam caem sobre mim.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Hebreus 12.2",
      "linhas": [
        {
          "text": "Conservemos os nossos olhos fixos em Jesus,",
          "role": "chamada"
        },
        {
          "text": "Pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa.",
          "role": "resposta"
        },
        {
          "text": "Ele não deixou que a cruz fizesse com que ele desistisse.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, por causa da alegria que lhe foi prometida,",
          "role": "resposta"
        },
        {
          "text": "Ele não se importou com a humilhação de morrer na cruz",
          "role": "chamada"
        },
        {
          "text": "E agora está sentado do lado direito do trono de Deus.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – João 3.16",
      "linhas": [
        {
          "text": "Porque Deus amou o mundo tanto, que deu o seu único Filho, para que todo aquele que nele crer não morra, mas tenha a vida eterna.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 8.34b",
          "role": "resposta"
        },
        {
          "text": "Se alguém quer ser meu seguidor, que esqueça os seus próprios interesses, esteja pronto para morrer como eu vou morrer e me acompanhe.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 13.35",
          "role": "resposta"
        },
        {
          "text": "Agora a casa de vocês ficará completamente abandonada. Eu afirmo que vocês não me verão mais, até chegar o tempo em que dirão: Deus abençoe aquele que vem em nome do Senhor!",
          "role": "chamada"
        }
      ]
    }
  },
  "3º Domingo na Quaresma": {
    "oracao": "Ó Deus, cuja glória é sempre ter misericórdia, sê gracioso para todos que se desviaram dos teus caminhos e traze-os de volta com coração arrependido e fé, para que abracem e mantenham a verdade imutável da tua Palavra; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 84.1-4; antífona Salmo 84.5",
          "linhas": [
            {
              "text": "Felizes são aqueles que de ti recebem forças",
              "role": "chamada"
            },
            {
              "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
              "role": "resposta"
            },
            {
              "text": "Como eu amo o teu Templo,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Todo-Poderoso!",
              "role": "resposta"
            },
            {
              "text": "Como eu gostaria de estar ali! Tenho saudade dos pátios do Templo de Deus, o Senhor.",
              "role": "chamada"
            },
            {
              "text": "Com todo o meu ser, canto com alegria ao Deus vivo.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Todo-Poderoso, meu Rei e meu Deus,",
              "role": "chamada"
            },
            {
              "text": "Perto dos teus altares os pardais constroem o seu ninho, e as andorinhas fazem a sua casa, onde cuidam dos seus filhotes.",
              "role": "resposta"
            },
            {
              "text": "Felizes são os que moram na tua casa,",
              "role": "chamada"
            },
            {
              "text": "Sempre cantando louvores a ti!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Felizes são aqueles que de ti recebem forças",
              "role": "chamada"
            },
            {
              "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 69.14-16; antífona Salmo 69.9",
          "linhas": [
            {
              "text": "O meu amor pelo teu Templo queima dentro de mim como fogo;",
              "role": "chamada"
            },
            {
              "text": "As ofensas daqueles que te insultam caem sobre mim.",
              "role": "resposta"
            },
            {
              "text": "Não me deixes afundar na lama.",
              "role": "chamada"
            },
            {
              "text": "Livra-me dos meus inimigos e das águas profundas da morte.",
              "role": "resposta"
            },
            {
              "text": "Não deixes que as ondas me cubram. Não permitas que eu me afogue em águas profundas,",
              "role": "chamada"
            },
            {
              "text": "Nem que seja engolido pela sepultura.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, tu és bom e amoroso;",
              "role": "chamada"
            },
            {
              "text": "Responde-me e vem me ajudar, pois é grande a tua compaixão.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O meu amor pelo teu Templo queima dentro de mim como fogo;",
              "role": "chamada"
            },
            {
              "text": "As ofensas daqueles que te insultam caem sobre mim.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 5.4-8; antífona Salmo 1.6",
          "linhas": [
            {
              "text": "O Senhor dirige e abençoa a vida daqueles que lhe obedecem,",
              "role": "chamada"
            },
            {
              "text": "Porém o fim dos maus são a desgraça e a morte.",
              "role": "resposta"
            },
            {
              "text": "Tu não és Deus que tenha prazer na maldade;",
              "role": "chamada"
            },
            {
              "text": "Tu não permites que os maus sejam teus hóspedes.",
              "role": "resposta"
            },
            {
              "text": "Tu não suportas a presença dos orgulhosos",
              "role": "chamada"
            },
            {
              "text": "E detestas os que praticam o mal.",
              "role": "resposta"
            },
            {
              "text": "Acabas com os mentirosos",
              "role": "chamada"
            },
            {
              "text": "E desprezas os violentos e os falsos.",
              "role": "resposta"
            },
            {
              "text": "Mas, por causa do teu grande amor, eu posso entrar nos pátios da tua casa",
              "role": "chamada"
            },
            {
              "text": "E ajoelhar com todo o respeito, voltado para o teu santo Templo.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, ajuda-me a fazer a tua vontade",
              "role": "chamada"
            },
            {
              "text": "E faze com que o teu caminho seja reto e plano para mim!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor dirige e abençoa a vida daqueles que lhe obedecem,",
              "role": "chamada"
            },
            {
              "text": "Porém o fim dos maus são a desgraça e a morte.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Hebreus 12.2",
      "linhas": [
        {
          "text": "Conservemos os nossos olhos fixos em Jesus,",
          "role": "chamada"
        },
        {
          "text": "Pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa.",
          "role": "resposta"
        },
        {
          "text": "Ele não deixou que a cruz fizesse com que ele desistisse.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, por causa da alegria que lhe foi prometida,",
          "role": "resposta"
        },
        {
          "text": "Ele não se importou com a humilhação de morrer na cruz",
          "role": "chamada"
        },
        {
          "text": "E agora está sentado do lado direito do trono de Deus.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – João 4.23a",
      "linhas": [
        {
          "text": "Mas virá o tempo, e, de fato, já chegou, em que os verdadeiros adoradores vão adorar o Pai em espírito e em verdade.",
          "role": "chamada"
        },
        {
          "text": "Série B – João 2.19",
          "role": "resposta"
        },
        {
          "text": "Derrubem este Templo, e eu o construirei de novo em três dias!",
          "role": "chamada"
        },
        {
          "text": "Série C – 2 Pedro 3.9b,c",
          "role": "resposta"
        },
        {
          "text": "[O Senhor] tem paciência com vocês porque não quer que ninguém seja destruído, mas deseja que todos se arrependam dos seus pecados.",
          "role": "chamada"
        }
      ]
    }
  },
  "4º Domingo na Quaresma": {
    "oracao": "Todo-poderoso Deus, nosso Pai celestial, tuas misericórdias são novas a cada manhã; e apesar de merecermos somente punição, nos recebes como teus filhos e atendes todas as nossas necessidades, do corpo e da alma. Concede que reconheçamos de coração a tua bondade misericordiosa, dando graças por todos os teus benefícios e servindo-te de boa vontade; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 27.4-6; antífona Salmo 25.15",
          "linhas": [
            {
              "text": "Eu olho sempre para o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois ele me livra do perigo.",
              "role": "resposta"
            },
            {
              "text": "A Deus, o Senhor, pedi uma coisa, e o que eu quero é só isto:",
              "role": "chamada"
            },
            {
              "text": "Que ele me deixe viver na sua casa todos os dias da minha vida, para sentir, maravilhado, a sua bondade e pedir a sua orientação.",
              "role": "resposta"
            },
            {
              "text": "Em tempos difíceis, ele me esconderá no seu abrigo.",
              "role": "chamada"
            },
            {
              "text": "Ele me guardará no seu Templo e me colocará em segurança no alto de uma rocha.",
              "role": "resposta"
            },
            {
              "text": "Assim vencerei os inimigos que me cercam. Com gritos de alegria, oferecerei sacrifícios no seu Templo;",
              "role": "chamada"
            },
            {
              "text": "Eu cantarei e louvarei a Deus, o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu olho sempre para o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois ele me livra do perigo.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 27.3-5; antífona Salmo 27.1",
          "linhas": [
            {
              "text": "O Senhor Deus é a minha luz e a minha salvação; de quem terei medo?",
              "role": "chamada"
            },
            {
              "text": "O Senhor me livra de todo perigo; não ficarei com medo de ninguém.",
              "role": "resposta"
            },
            {
              "text": "Ainda que um exército inteiro me cerque, não terei medo;",
              "role": "chamada"
            },
            {
              "text": "Ainda que os meus inimigos me ataquem, continuarei confiando em",
              "role": "resposta"
            },
            {
              "text": "Deus.",
              "role": "resposta"
            },
            {
              "text": "A Deus, o Senhor, pedi uma coisa, e o que eu quero é só isto:",
              "role": "chamada"
            },
            {
              "text": "Que ele me deixe viver na sua casa todos os dias da minha vida, para sentir, maravilhado, a sua bondade e pedir a sua orientação.",
              "role": "resposta"
            },
            {
              "text": "Em tempos difíceis, ele me esconderá no seu abrigo.",
              "role": "chamada"
            },
            {
              "text": "Ele me guardará no seu Templo e me colocará em segurança no alto de uma rocha.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor Deus é a minha luz e a minha salvação; de quem terei medo?",
              "role": "chamada"
            },
            {
              "text": "O Senhor me livra de todo perigo; não ficarei com medo de ninguém.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 51.2-6; antífona Salmo 51.1",
          "linhas": [
            {
              "text": "Por causa do teu amor, ó Deus, tem misericórdia de mim.",
              "role": "chamada"
            },
            {
              "text": "Por causa da tua grande compaixão apaga os meus pecados.",
              "role": "resposta"
            },
            {
              "text": "Purifica-me de todas as minhas maldades",
              "role": "chamada"
            },
            {
              "text": "E lava-me do meu pecado.",
              "role": "resposta"
            },
            {
              "text": "Pois eu conheço bem os meus erros,",
              "role": "chamada"
            },
            {
              "text": "E o meu pecado está sempre diante de mim.",
              "role": "resposta"
            },
            {
              "text": "Contra ti eu pequei – somente contra ti – e fiz o que detestas.",
              "role": "chamada"
            },
            {
              "text": "Tu tens razão quando me julgas e estás certo quando me condenas.",
              "role": "resposta"
            },
            {
              "text": "De fato, tenho sido mau desde que nasci;",
              "role": "chamada"
            },
            {
              "text": "Tenho sido pecador desde o dia em que fui concebido.",
              "role": "resposta"
            },
            {
              "text": "O que tu queres é um coração sincero;",
              "role": "chamada"
            },
            {
              "text": "Enche o meu coração com a tua sabedoria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Por causa do teu amor, ó Deus, tem misericórdia de mim.",
              "role": "chamada"
            },
            {
              "text": "Por causa da tua grande compaixão apaga os meus pecados.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Hebreus 12.2",
      "linhas": [
        {
          "text": "Conservemos os nossos olhos fixos em Jesus,",
          "role": "chamada"
        },
        {
          "text": "Pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa.",
          "role": "resposta"
        },
        {
          "text": "Ele não deixou que a cruz fizesse com que ele desistisse.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, por causa da alegria que lhe foi prometida,",
          "role": "resposta"
        },
        {
          "text": "Ele não se importou com a humilhação de morrer na cruz",
          "role": "chamada"
        },
        {
          "text": "E agora está sentado do lado direito do trono de Deus.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – Salmo 36.9",
      "linhas": [
        {
          "text": "Tu és a fonte da vida, e, por causa da tua luz, nós vemos a luz.",
          "role": "chamada"
        },
        {
          "text": "Série B – João 3.16",
          "role": "resposta"
        },
        {
          "text": "Porque Deus amou o mundo tanto, que deu o seu único Filho, para que todo aquele que nele crer não morra, mas tenha a vida eterna.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 15.24",
          "role": "resposta"
        },
        {
          "text": "Porque este meu filho estava morto e viveu de novo; estava perdido e foi achado.",
          "role": "chamada"
        }
      ]
    }
  },
  "5º Domingo na Quaresma": {
    "oracao": "Todo-poderoso Deus, pela tua enorme bondade e misericórdia olha para o teu povo, a fim de sermos sempre governados e preservados em corpo e alma; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 116.1-4,8; antífona Salmo 116.15",
          "linhas": [
            {
              "text": "O Senhor Deus sente pesar",
              "role": "chamada"
            },
            {
              "text": "Quando vê morrerem os que são fiéis a ele.",
              "role": "resposta"
            },
            {
              "text": "Eu amo a Deus, o Senhor, porque ele me ouve;",
              "role": "chamada"
            },
            {
              "text": "Ele escuta as minhas orações.",
              "role": "resposta"
            },
            {
              "text": "Ele me ouve",
              "role": "chamada"
            },
            {
              "text": "Sempre que eu clamo pedindo socorro.",
              "role": "resposta"
            },
            {
              "text": "Os laços da morte estavam me apertando, os horrores da sepultura tomaram conta de mim,",
              "role": "chamada"
            },
            {
              "text": "E eu fiquei aflito e apavorado.",
              "role": "resposta"
            },
            {
              "text": "Então clamei ao Senhor, pedindo:",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, eu te peço: Salva-me da morte!",
              "role": "resposta"
            },
            {
              "text": "Deus me livrou da morte,",
              "role": "chamada"
            },
            {
              "text": "Fez parar as minhas lágrimas e não deixou que eu caísse na desgraça.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor Deus sente pesar",
              "role": "chamada"
            },
            {
              "text": "Quando vê morrerem os que são fiéis a ele.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 116.1-4,8; antífona Salmo 43.1",
          "linhas": [
            {
              "text": "Ó Deus, declara que eu estou inocente e defende a minha causa contra essa gente que não te adora!",
              "role": "chamada"
            },
            {
              "text": "Livra-me das pessoas traiçoeiras e perversas.",
              "role": "resposta"
            },
            {
              "text": "Eu amo a Deus, o Senhor, porque ele me ouve;",
              "role": "chamada"
            },
            {
              "text": "Ele escuta as minhas orações.",
              "role": "resposta"
            },
            {
              "text": "Ele me ouve",
              "role": "chamada"
            },
            {
              "text": "Sempre que eu clamo pedindo socorro.",
              "role": "resposta"
            },
            {
              "text": "Os laços da morte estavam me apertando, os horrores da sepultura tomaram conta de mim,",
              "role": "chamada"
            },
            {
              "text": "E eu fiquei aflito e apavorado.",
              "role": "resposta"
            },
            {
              "text": "Então clamei ao Senhor, pedindo:",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, eu te peço: Salva-me da morte!",
              "role": "resposta"
            },
            {
              "text": "Deus me livrou da morte,",
              "role": "chamada"
            },
            {
              "text": "Fez parar as minhas lágrimas e não deixou que eu caísse na desgraça.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Deus, declara que eu estou inocente e defende a minha causa contra essa gente que não te adora!",
              "role": "chamada"
            },
            {
              "text": "Livra-me das pessoas traiçoeiras e perversas.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 3.3-6; antífona Salmo 3.8",
          "linhas": [
            {
              "text": "És tu que dás a vitória.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, abençoa o teu povo.",
              "role": "resposta"
            },
            {
              "text": "Tu, ó Senhor, me proteges como um escudo.",
              "role": "chamada"
            },
            {
              "text": "Tu me dás a vitória e renovas a minha coragem.",
              "role": "resposta"
            },
            {
              "text": "Eu chamo o Senhor para me ajudar,",
              "role": "chamada"
            },
            {
              "text": "E lá do seu monte santo ele me responde.",
              "role": "resposta"
            },
            {
              "text": "Eu me deito, e durmo tranqüilo,",
              "role": "chamada"
            },
            {
              "text": "E depois acordo porque o Senhor me protege.",
              "role": "resposta"
            },
            {
              "text": "Não tenho medo dos milhares de inimigos",
              "role": "chamada"
            },
            {
              "text": "Que me ameaçam de todos os lados.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "És tu que dás a vitória.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, abençoa o teu povo.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Hebreus 12.2",
      "linhas": [
        {
          "text": "Conservemos os nossos olhos fixos em Jesus,",
          "role": "chamada"
        },
        {
          "text": "Pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa.",
          "role": "resposta"
        },
        {
          "text": "Ele não deixou que a cruz fizesse com que ele desistisse.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, por causa da alegria que lhe foi prometida,",
          "role": "resposta"
        },
        {
          "text": "Ele não se importou com a humilhação de morrer na cruz",
          "role": "chamada"
        },
        {
          "text": "E agora está sentado do lado direito do trono de Deus.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Série A – João 11.25",
      "linhas": [
        {
          "text": "Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá.",
          "role": "chamada"
        },
        {
          "text": "Série B – Marcos 10.45",
          "role": "resposta"
        },
        {
          "text": "Porque até o Filho do Homem não veio para ser servido, mas para servir e dar a sua vida para salvar muita gente.",
          "role": "chamada"
        },
        {
          "text": "Série C – Lucas 20.17b",
          "role": "resposta"
        },
        {
          "text": "A pedra que os construtores rejeitaram veio a ser a mais importante de todas.",
          "role": "chamada"
        }
      ]
    }
  },
  "Domingo de Ramos": {
    "oracao": "Todo-poderoso e eterno Deus, que enviaste teu Filho, nosso Salvador Jesus Cristo, para tomar sobre si nossa natureza pecaminosa e sofrer a morte sobre a cruz, concede que possamos seguir o exemplo de sua grande humilhação e paciência e sermos feitos participantes de sua ressurreição; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 24.7-10; antífona Salmo 118.26",
      "linhas": [
        {
          "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
          "role": "resposta"
        },
        {
          "text": "Abram bem os portões, abram os portões antigos,",
          "role": "chamada"
        },
        {
          "text": "E entrará o Rei da glória.",
          "role": "resposta"
        },
        {
          "text": "Quem é esse Rei da glória?",
          "role": "chamada"
        },
        {
          "text": "É Deus, o Senhor, forte e poderoso, o Senhor, poderoso na batalha.",
          "role": "resposta"
        },
        {
          "text": "Abram bem os portões, abram os portões antigos,",
          "role": "chamada"
        },
        {
          "text": "E entrará o Rei da glória.",
          "role": "resposta"
        },
        {
          "text": "Quem é esse Rei da glória?",
          "role": "chamada"
        },
        {
          "text": "É Deus, o Senhor Todo-Poderoso; ele é o Rei da glória.",
          "role": "resposta"
        },
        {
          "text": "Que Deus abençoe aquele que vem em nome de Deus, o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Daqui do Templo do Senhor, nós abençoamos todos vocês.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 9.12a,c,15a; Salmo 111.9a",
      "linhas": [
        {
          "text": "Cristo veio e entrou, uma vez por todas, no Lugar Santíssimo, oferecendo o seu próprio sangue,",
          "role": "chamada"
        },
        {
          "text": "E conseguiu para nós a salvação eterna.",
          "role": "resposta"
        },
        {
          "text": "Portanto, é Cristo quem consegue fazer uma nova aliança,",
          "role": "chamada"
        },
        {
          "text": "Para que os que foram chamados por Deus possam receber as bênçãos eternas que o próprio Deus prometeu.",
          "role": "resposta"
        },
        {
          "text": "Deus pôs o seu povo em liberdade",
          "role": "chamada"
        },
        {
          "text": "E fez com ele uma aliança eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Filipenses 2.8",
      "linhas": [
        {
          "text": "Ele foi humilde e obedeceu a Deus até a morte – morte de cruz.",
          "role": "chamada"
        }
      ]
    }
  },
  "Segunda-feira na Semana Santa": {
    "oracao": "Todo-poderoso Deus, concede que, em meio a todas as nossas falhas e deficiências, possamos ser restaurados pelo sofrimento e intercessão de teu unigênito Filho, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 31.10-11,13-15; antífona Salmo 31.9",
      "linhas": [
        {
          "text": "Ó Senhor Deus, tem compaixão de mim, pois estou aflito!",
          "role": "chamada"
        },
        {
          "text": "Os meus olhos estão cansados de tanto chorar; estou esgotado de corpo e alma.",
          "role": "resposta"
        },
        {
          "text": "A tristeza acabou com as minhas forças; as lágrimas encurtam a minha vida.",
          "role": "chamada"
        },
        {
          "text": "Estou fraco por causa das minhas aflições; até os meus ossos estão se gastando.",
          "role": "resposta"
        },
        {
          "text": "Os meus inimigos zombam de mim, e os meus vizinhos também caçoam.",
          "role": "chamada"
        },
        {
          "text": "Os meus conhecidos têm medo de mim e fogem quando me vêem na rua.",
          "role": "resposta"
        },
        {
          "text": "Ouço muitos inimigos cochichando; há gente me ameaçando de todos os lados.",
          "role": "chamada"
        },
        {
          "text": "Eles fazem planos contra mim, procurando um jeito de me matar.",
          "role": "resposta"
        },
        {
          "text": "Porém a minha confiança está em ti, ó Senhor;",
          "role": "chamada"
        },
        {
          "text": "Tu és o meu Deus.",
          "role": "resposta"
        },
        {
          "text": "Tu estás sempre cuidando de mim.",
          "role": "chamada"
        },
        {
          "text": "Salva-me dos meus inimigos, daqueles que me perseguem.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, tem compaixão de mim, pois estou aflito!",
          "role": "chamada"
        },
        {
          "text": "Os meus olhos estão cansados de tanto chorar; estou esgotado de corpo e alma.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 9.12a,c,15a; Salmo 111.9a",
      "linhas": [
        {
          "text": "Cristo veio e entrou, uma vez por todas, no Lugar Santíssimo, oferecendo o seu próprio sangue,",
          "role": "chamada"
        },
        {
          "text": "E conseguiu para nós a salvação eterna.",
          "role": "resposta"
        },
        {
          "text": "Portanto, é Cristo quem consegue fazer uma nova aliança,",
          "role": "chamada"
        },
        {
          "text": "Para que os que foram chamados por Deus possam receber as bênçãos eternas que o próprio Deus prometeu.",
          "role": "resposta"
        },
        {
          "text": "Deus pôs o seu povo em liberdade",
          "role": "chamada"
        },
        {
          "text": "E fez com ele uma aliança eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 12.23b",
      "linhas": [
        {
          "text": "Chegou a hora de ser revelada a natureza divina do Filho do Homem.",
          "role": "chamada"
        }
      ]
    }
  },
  "Terça-feira na Semana Santa": {
    "oracao": "Todo-poderoso e eterno Deus, concede que por tua graça possamos passar por este santo tempo da paixão do Senhor e obtermos o perdão dos nossos pecados; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 42.3,9-10; antífona Salmo 42.5",
      "linhas": [
        {
          "text": "Por que estou tão triste? Por que estou tão aflito?",
          "role": "chamada"
        },
        {
          "text": "Eu porei a minha esperança em Deus e ainda o louvarei. Ele é o meu",
          "role": "resposta"
        },
        {
          "text": "Salvador e o meu Deus.",
          "role": "resposta"
        },
        {
          "text": "Choro dia e noite, e as lágrimas são o meu alimento.",
          "role": "chamada"
        },
        {
          "text": "Os meus inimigos estão sempre me perguntando: Onde está o seu Deus?",
          "role": "resposta"
        },
        {
          "text": "Pergunto a Deus, a minha rocha: Por que esqueceste de mim?",
          "role": "chamada"
        },
        {
          "text": "Por que tenho de viver sofrendo por causa da maldade dos meus inimigos?",
          "role": "resposta"
        },
        {
          "text": "Até os meus ossos doem quando os meus inimigos me ofendem,",
          "role": "chamada"
        },
        {
          "text": "Perguntando todos os dias: Onde está o seu Deus?",
          "role": "resposta"
        },
        {
          "text": "Por que estou tão triste? Por que estou tão aflito?",
          "role": "chamada"
        },
        {
          "text": "Eu porei a minha esperança em Deus e ainda o louvarei. Ele é o meu",
          "role": "resposta"
        },
        {
          "text": "Salvador e o meu Deus.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 9.12a,c,15a; Salmo 111.9a",
      "linhas": [
        {
          "text": "Cristo veio e entrou, uma vez por todas, no Lugar Santíssimo, oferecendo o seu próprio sangue,",
          "role": "chamada"
        },
        {
          "text": "E conseguiu para nós a salvação eterna.",
          "role": "resposta"
        },
        {
          "text": "Portanto, é Cristo quem consegue fazer uma nova aliança,",
          "role": "chamada"
        },
        {
          "text": "Para que os que foram chamados por Deus possam receber as bênçãos eternas que o próprio Deus prometeu.",
          "role": "resposta"
        },
        {
          "text": "Deus pôs o seu povo em liberdade",
          "role": "chamada"
        },
        {
          "text": "E fez com ele uma aliança eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 12.23b",
      "linhas": [
        {
          "text": "Chegou a hora de ser revelada a natureza divina do Filho do Homem.",
          "role": "chamada"
        }
      ]
    }
  },
  "Quarta-feira na Semana Santa": {
    "oracao": "Misericordioso e eterno Deus, que não poupaste a teu único Filho, mas o entregaste por todos nós para carregar nossos pecados na cruz, concede que nossos corações possam estar de tal forma fixados com fé nele que não tenhamos medo do poder do pecado, da morte e do diabo; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 56.1-4a; antífona Salmo 56.11",
      "linhas": [
        {
          "text": "Confio [em Deus] e não terei medo de nada.",
          "role": "chamada"
        },
        {
          "text": "O que podem me fazer simples seres humanos?",
          "role": "resposta"
        },
        {
          "text": "Tem misericórdia de mim, ó Deus, pois estou sendo atacado",
          "role": "chamada"
        },
        {
          "text": "Por inimigos que estão sempre me perseguindo!",
          "role": "resposta"
        },
        {
          "text": "O dia inteiro eles me atacam,",
          "role": "chamada"
        },
        {
          "text": "E são muitos os que lutam contra mim.",
          "role": "resposta"
        },
        {
          "text": "Quando estou com medo,",
          "role": "chamada"
        },
        {
          "text": "Eu confio em ti, ó Deus Todo-Poderoso.",
          "role": "resposta"
        },
        {
          "text": "Confio em Deus e o louvo pelo que ele tem prometido;",
          "role": "chamada"
        },
        {
          "text": "Confio nele e não terei medo de nada.",
          "role": "resposta"
        },
        {
          "text": "Confio [em Deus] e não terei medo de nada.",
          "role": "chamada"
        },
        {
          "text": "O que podem me fazer simples seres humanos?",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 9.12a,c,15a; Salmo 111.9a",
      "linhas": [
        {
          "text": "Cristo veio e entrou, uma vez por todas, no Lugar Santíssimo, oferecendo o seu próprio sangue,",
          "role": "chamada"
        },
        {
          "text": "E conseguiu para nós a salvação eterna.",
          "role": "resposta"
        },
        {
          "text": "Portanto, é Cristo quem consegue fazer uma nova aliança,",
          "role": "chamada"
        },
        {
          "text": "Para que os que foram chamados por Deus possam receber as bênçãos eternas que o próprio Deus prometeu.",
          "role": "resposta"
        },
        {
          "text": "Deus pôs o seu povo em liberdade",
          "role": "chamada"
        },
        {
          "text": "E fez com ele uma aliança eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 12.23b",
      "linhas": [
        {
          "text": "Chegou a hora de ser revelada a natureza divina do Filho do Homem.",
          "role": "chamada"
        }
      ]
    }
  },
  "Quinta-feira Santa": {
    "oracao": "Ó Senhor, que neste maravilhoso sacramento nos deixaste uma lembrança do teu sofrimento, concede que possamos receber o sagrado mistério do teu corpo e sangue para que os frutos de tua redenção possam continuamente ser manifestos em nós; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 116.1-4; antífona Salmo 116.5",
      "linhas": [
        {
          "text": "O Senhor é bondoso e fiel;",
          "role": "chamada"
        },
        {
          "text": "O nosso Deus tem compaixão de nós.",
          "role": "resposta"
        },
        {
          "text": "Eu amo a Deus, o Senhor, porque ele me ouve;",
          "role": "chamada"
        },
        {
          "text": "Ele escuta as minhas orações.",
          "role": "resposta"
        },
        {
          "text": "Ele me ouve",
          "role": "chamada"
        },
        {
          "text": "Sempre que eu clamo pedindo socorro.",
          "role": "resposta"
        },
        {
          "text": "Os laços da morte estavam me apertando, os horrores da sepultura tomaram conta de mim,",
          "role": "chamada"
        },
        {
          "text": "E eu fiquei aflito e apavorado.",
          "role": "resposta"
        },
        {
          "text": "Então clamei ao Senhor, pedindo:",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor Deus, eu te peço: Salva-me da morte!",
          "role": "resposta"
        },
        {
          "text": "O Senhor é bondoso e fiel;",
          "role": "chamada"
        },
        {
          "text": "O nosso Deus tem compaixão de nós.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 9.12a,c,15a; Salmo 111.9a",
      "linhas": [
        {
          "text": "Cristo veio e entrou, uma vez por todas, no Lugar Santíssimo, oferecendo o seu próprio sangue,",
          "role": "chamada"
        },
        {
          "text": "E conseguiu para nós a salvação eterna.",
          "role": "resposta"
        },
        {
          "text": "Portanto, é Cristo quem consegue fazer uma nova aliança,",
          "role": "chamada"
        },
        {
          "text": "Para que os que foram chamados por Deus possam receber as bênçãos eternas que o próprio Deus prometeu.",
          "role": "resposta"
        },
        {
          "text": "Deus pôs o seu povo em liberdade",
          "role": "chamada"
        },
        {
          "text": "E fez com ele uma aliança eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 13.1b",
      "linhas": [
        {
          "text": "Ele sempre havia amado os seus que estavam neste mundo e os amou até o fim.",
          "role": "chamada"
        }
      ]
    }
  },
  "Sexta-feira Santa": {
    "oracao": "Todo-poderoso Deus, graciosamente mantém esta tua família, por quem nosso Senhor Jesus Cristo aceitou ser traído e entregue nas mãos de homens pecadores para sofrer a morte sobre a cruz; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 38.1-4,18,22; antífona Isaías 53.5",
      "linhas": [
        {
          "text": "Ele estava sofrendo por causa dos nossos pecados, estava sendo castigado por causa das nossas maldades.",
          "role": "chamada"
        },
        {
          "text": "Nós somos curados pelo castigo que ele sofreu, somos sarados pelos ferimentos que ele recebeu.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, não me corrijas quando estiveres irado!",
          "role": "chamada"
        },
        {
          "text": "Não me castigues no teu furor.",
          "role": "resposta"
        },
        {
          "text": "As tuas flechas de dor me atingiram;",
          "role": "chamada"
        },
        {
          "text": "Eu senti o peso do castigo da tua mão.",
          "role": "resposta"
        },
        {
          "text": "Por causa da tua ira, estou muito doente.",
          "role": "chamada"
        },
        {
          "text": "O meu corpo todo está enfermo por causa das minhas maldades.",
          "role": "resposta"
        },
        {
          "text": "Estou me afogando nos meus pecados;",
          "role": "chamada"
        },
        {
          "text": "Eles são uma carga pesada demais para mim.",
          "role": "resposta"
        },
        {
          "text": "Eu confesso as minhas maldades e os meus pecados,",
          "role": "chamada"
        },
        {
          "text": "Pois me deixam muito aflito.",
          "role": "resposta"
        },
        {
          "text": "Ajuda-me agora,",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor, meu Salvador!",
          "role": "resposta"
        },
        {
          "text": "Ele estava sofrendo por causa dos nossos pecados, estava sendo castigado por causa das nossas maldades.",
          "role": "chamada"
        },
        {
          "text": "Nós somos curados pelo castigo que ele sofreu, somos sarados pelos ferimentos que ele recebeu.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 9.12a,c,15a; Salmo 111.9a",
      "linhas": [
        {
          "text": "Cristo veio e entrou, uma vez por todas, no Lugar Santíssimo, oferecendo o seu próprio sangue,",
          "role": "chamada"
        },
        {
          "text": "E conseguiu para nós a salvação eterna.",
          "role": "resposta"
        },
        {
          "text": "Portanto, é Cristo quem consegue fazer uma nova aliança,",
          "role": "chamada"
        },
        {
          "text": "Para que os que foram chamados por Deus possam receber as bênçãos eternas que o próprio Deus prometeu.",
          "role": "resposta"
        },
        {
          "text": "Deus pôs o seu povo em liberdade",
          "role": "chamada"
        },
        {
          "text": "E fez com ele uma aliança eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Isaías 53.4",
      "linhas": [
        {
          "text": "No entanto, era o nosso sofrimento que ele estava carregando, era a nossa dor que ele estava suportando. E nós pensávamos que era por causa das suas próprias culpas que Deus o estava castigando, que Deus o estava maltratando e ferindo.",
          "role": "chamada"
        }
      ]
    }
  },
  "Sábado de Aleluia": {
    "oracao": "Ó Deus, Criador dos céus e da terra, concede que assim como o corpo crucificado de teu amado Filho foi colocado na tumba e descansou neste santo sábado, da mesma forma possamos aguardar com ele a vinda do terceiro dia e ressuscitar com Cristo para uma nova vida, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 88.1,6-7,8c-9; antífona Salmo 88.3",
      "linhas": [
        {
          "text": "As aflições que caíram sobre mim são tantas,",
          "role": "chamada"
        },
        {
          "text": "Que já estou perto da morte.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, meu Deus e Salvador,",
          "role": "chamada"
        },
        {
          "text": "Dia e noite, na tua presença, eu clamo a ti.",
          "role": "resposta"
        },
        {
          "text": "Tu me atiraste no mundo dos mortos,",
          "role": "chamada"
        },
        {
          "text": "Lá no fundo, na escuridão.",
          "role": "resposta"
        },
        {
          "text": "A tua ira pesa sobre mim,",
          "role": "chamada"
        },
        {
          "text": "E as tuas ondas me esmagam.",
          "role": "resposta"
        },
        {
          "text": "Sou como o preso que não pode escapar. Tenho sofrido tanto, que quase já não enxergo.",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor Deus, dia após dia eu te chamo e levanto as mãos em oração.",
          "role": "resposta"
        },
        {
          "text": "As aflições que caíram sobre mim são tantas,",
          "role": "chamada"
        },
        {
          "text": "Que já estou perto da morte.",
          "role": "resposta"
        }
      ],
      "tipo": "salmodia"
    }
  },
  "Páscoa - Aurora": {
    "oracao": "Todo-poderoso Deus, que através de teu único Filho Jesus Cristo venceste a morte e abriste para nós o portão da vida eterna, oramos com humildade para que possamos viver diante de ti em justiça e pureza para sempre; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Êxodo 15.2a,6,13,17-18; antífona Êxodo 15.1b",
      "linhas": [
        {
          "text": "Cantarei ao Senhor porque ele conquistou uma vitória maravilhosa;",
          "role": "chamada"
        },
        {
          "text": "Ele jogou os cavalos e os cavaleiros dentro do mar.",
          "role": "resposta"
        },
        {
          "text": "O Senhor é o meu forte defensor; foi ele quem me salvou.",
          "role": "chamada"
        },
        {
          "text": "Ele é o meu Deus, e eu o louvarei.",
          "role": "resposta"
        },
        {
          "text": "A tua mão direita, ó Senhor, tem um poder terrível;",
          "role": "chamada"
        },
        {
          "text": "Ela despedaça o inimigo.",
          "role": "resposta"
        },
        {
          "text": "Por causa do teu amor tu guiaste o povo que salvaste;",
          "role": "chamada"
        },
        {
          "text": "Com o teu grande poder tu os levaste para a tua terra santa.",
          "role": "resposta"
        },
        {
          "text": "Tu levarás o teu povo para viver no teu monte,",
          "role": "chamada"
        },
        {
          "text": "O lugar, ó Senhor, que escolheste para morar,",
          "role": "resposta"
        },
        {
          "text": "O Templo que tu mesmo construíste.",
          "role": "chamada"
        },
        {
          "text": "O Senhor Deus será rei para todo o sempre!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Cantarei ao Senhor porque ele conquistou uma vitória maravilhosa;",
          "role": "chamada"
        },
        {
          "text": "Ele jogou os cavalos e os cavaleiros dentro do mar.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "2 Timóteo 1.10b",
      "linhas": [
        {
          "text": "Aleluia. [Cristo Jesus] acabou com o poder da morte e, por meio do evangelho, revelou a vida que dura para sempre. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Ressurreição do Senhor": {
    "oracao": "Todo-poderoso Deus e Pai, que através de teu único Filho Jesus Cristo venceste a morte e abriste para nós o portão da vida eterna, faze com que nós, ao celebrarmos com alegria o dia da ressurreição do Senhor, possamos ser ressuscitados da morte do pecado pelo teu Espírito doador da vida; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre. Ou: Ó Deus, que para nossa redenção entregaste teu único Filho à morte de cruz e pela sua gloriosa ressurreição nos libertaste do poder do inimigo, concede que todo nosso pecado possa ser afogado através do arrependimento diário e que dia após dia possamos nos erguer para viver diante de ti em justiça e pureza eternamente; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Êxodo 15.2a,6,13,17-18; antífona Êxodo 15.1b",
      "linhas": [
        {
          "text": "Cantarei ao Senhor porque ele conquistou uma vitória maravilhosa;",
          "role": "chamada"
        },
        {
          "text": "Ele jogou os cavalos e os cavaleiros dentro do mar.",
          "role": "resposta"
        },
        {
          "text": "O Senhor é o meu forte defensor; foi ele quem me salvou.",
          "role": "chamada"
        },
        {
          "text": "Ele é o meu Deus, e eu o louvarei.",
          "role": "resposta"
        },
        {
          "text": "A tua mão direita, ó Senhor, tem um poder terrível;",
          "role": "chamada"
        },
        {
          "text": "Ela despedaça o inimigo.",
          "role": "resposta"
        },
        {
          "text": "Por causa do teu amor tu guiaste o povo que salvaste;",
          "role": "chamada"
        },
        {
          "text": "Com o teu grande poder tu os levaste para a tua terra santa.",
          "role": "resposta"
        },
        {
          "text": "Tu levarás o teu povo para viver no teu monte,",
          "role": "chamada"
        },
        {
          "text": "O lugar, ó Senhor, que escolheste para morar,",
          "role": "resposta"
        },
        {
          "text": "O Templo que tu mesmo construíste.",
          "role": "chamada"
        },
        {
          "text": "O Senhor Deus será rei para todo o sempre!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Cantarei ao Senhor porque ele conquistou uma vitória maravilhosa;",
          "role": "chamada"
        },
        {
          "text": "Ele jogou os cavalos e os cavaleiros dentro do mar.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "2 Timóteo 1.10b",
      "linhas": [
        {
          "text": "Aleluia. [Cristo Jesus] acabou com o poder da morte e, por meio do evangelho, revelou a vida que dura para sempre. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Páscoa - Segunda-feira": {
    "oracao": "Ó Deus, que na festa da Páscoa restauraste toda a criação, continua a en-viar teus dons celestiais sobre o teu povo para que possamos caminhar em perfeita liberdade e receber vida eterna; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 78.13-15,24-25; antífona Salmo 78.4",
      "linhas": [
        {
          "text": "Não esconderemos dos nossos filhos, mas falaremos aos nossos descendentes a respeito do poder de Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Dos seus feitos poderosos e das coisas maravilhosas que ele fez.",
          "role": "resposta"
        },
        {
          "text": "Ele dividiu o mar e levou os israelitas pelo meio dele;",
          "role": "chamada"
        },
        {
          "text": "Ele fez com que as águas se levantassem como muralhas.",
          "role": "resposta"
        },
        {
          "text": "Durante o dia, ele os guiava com uma nuvem",
          "role": "chamada"
        },
        {
          "text": "E de noite os conduzia por meio de um clarão de fogo.",
          "role": "resposta"
        },
        {
          "text": "Ele partiu rochas no deserto",
          "role": "chamada"
        },
        {
          "text": "E das profundezas da terra tirou muita água para o povo beber.",
          "role": "resposta"
        },
        {
          "text": "Ele deu ao povo pão do céu,",
          "role": "chamada"
        },
        {
          "text": "Fazendo com que caísse o maná para eles comerem,",
          "role": "resposta"
        },
        {
          "text": "E assim comeram o pão dos anjos.",
          "role": "chamada"
        },
        {
          "text": "Deus lhes deu comida com fartura.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Não esconderemos dos nossos filhos, mas falaremos aos nossos descendentes a respeito do poder de Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Dos seus feitos poderosos e das coisas maravilhosas que ele fez.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "2 Timóteo 1.10b",
      "linhas": [
        {
          "text": "Aleluia. [Cristo Jesus] acabou com o poder da morte e, por meio do evangelho, revelou a vida que dura para sempre. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Páscoa - Terça-feira": {
    "oracao": "Todo-poderoso Deus, que pela ressurreição de teu Filho garantiste paz para as consciências atribuladas, concede-nos sempre esta paz para que, confiando nos méritos de teu Filho, possamos alcançar afinal a paz perfeita dos céus; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 118.13-14,17-18,29; antífona Salmo 118.17",
      "linhas": [
        {
          "text": "Não vou morrer; pelo contrário, vou viver",
          "role": "chamada"
        },
        {
          "text": "E anunciar o que o Senhor Deus tem feito.",
          "role": "resposta"
        },
        {
          "text": "Eles me atacaram com violência, e eu quase fui derrotado,",
          "role": "chamada"
        },
        {
          "text": "Porém o Senhor me ajudou.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus me torna forte e poderoso;",
          "role": "chamada"
        },
        {
          "text": "Ele me salvou.",
          "role": "resposta"
        },
        {
          "text": "Não vou morrer; pelo contrário, vou viver",
          "role": "chamada"
        },
        {
          "text": "E anunciar o que o Senhor Deus tem feito.",
          "role": "resposta"
        },
        {
          "text": "Ele me castigou com dureza,",
          "role": "chamada"
        },
        {
          "text": "Mas não deixou que eu morresse.",
          "role": "resposta"
        },
        {
          "text": "Dêem graças a Deus, o Senhor, porque ele é bom",
          "role": "chamada"
        },
        {
          "text": "E porque o seu amor dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Não vou morrer; pelo contrário, vou viver",
          "role": "chamada"
        },
        {
          "text": "E anunciar o que o Senhor Deus tem feito.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "2 Timóteo 1.10b",
      "linhas": [
        {
          "text": "Aleluia. [Cristo Jesus] acabou com o poder da morte e, por meio do evangelho, revelou a vida que dura para sempre. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Páscoa - Quarta-feira": {
    "oracao": "Todo-poderoso Deus, que pela gloriosa ressurreição de teu Filho Jesus Cristo destruíste a morte e trouxeste à luz a vida e a imortalidade, concede que nós, que ressuscitamos com ele, possamos habitar em sua presença e exultar na esperança da glória eterna; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 118.13-14,17-18,29; antífona Salmo 118.17",
      "linhas": [
        {
          "text": "Não vou morrer; pelo contrário, vou viver",
          "role": "chamada"
        },
        {
          "text": "E anunciar o que o Senhor Deus tem feito.",
          "role": "resposta"
        },
        {
          "text": "Eles me atacaram com violência, e eu quase fui derrotado,",
          "role": "chamada"
        },
        {
          "text": "Porém o Senhor me ajudou.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus me torna forte e poderoso;",
          "role": "chamada"
        },
        {
          "text": "Ele me salvou.",
          "role": "resposta"
        },
        {
          "text": "Não vou morrer; pelo contrário, vou viver",
          "role": "chamada"
        },
        {
          "text": "E anunciar o que o Senhor Deus tem feito.",
          "role": "resposta"
        },
        {
          "text": "Ele me castigou com dureza,",
          "role": "chamada"
        },
        {
          "text": "Mas não deixou que eu morresse.",
          "role": "resposta"
        },
        {
          "text": "Dêem graças a Deus, o Senhor, porque ele é bom",
          "role": "chamada"
        },
        {
          "text": "E porque o seu amor dura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Não vou morrer; pelo contrário, vou viver",
          "role": "chamada"
        },
        {
          "text": "E anunciar o que o Senhor Deus tem feito.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "2 Timóteo 1.10b",
      "linhas": [
        {
          "text": "Aleluia. [Cristo Jesus] acabou com o poder da morte e, por meio do evangelho, revelou a vida que dura para sempre. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "2º Domingo de Páscoa": {
    "oracao": "Todo-poderoso Deus, concede que nós, que celebramos a ressurreição do Senhor, possamos por tua graça confessar em nossa vida e por nosso falar que Jesus é Senhor e Deus; através do mesmo Jesus Cristo, teu Filho, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 105.1-5,8; antífona 1 Pedro 2.2-3",
      "linhas": [
        {
          "text": "Sejam como criancinhas recém-nascidas, desejando sempre o puro leite espiritual, para que, bebendo dele, vocês possam crescer e ser salvos.",
          "role": "chamada"
        },
        {
          "text": "Pois, como dizem as Escrituras Sagradas: Vocês já descobriram por vocês mesmos que o Senhor é bom.",
          "role": "resposta"
        },
        {
          "text": "Agradeçam a Deus, o Senhor, anunciem a sua grandeza",
          "role": "chamada"
        },
        {
          "text": "E contem às nações as coisas que ele fez.",
          "role": "resposta"
        },
        {
          "text": "Cantem a Deus, cantem louvores a ele,",
          "role": "chamada"
        },
        {
          "text": "Falem dos seus atos maravilhosos.",
          "role": "resposta"
        },
        {
          "text": "Tenham orgulho daquilo que o Santo Deus tem feito.",
          "role": "chamada"
        },
        {
          "text": "Que fique alegre o coração de todos os que adoram a Deus, o Senhor!",
          "role": "resposta"
        },
        {
          "text": "Procurem a ajuda do Senhor;",
          "role": "chamada"
        },
        {
          "text": "Estejam sempre na sua presença.",
          "role": "resposta"
        },
        {
          "text": "Lembrem de tudo o que Deus tem feito,",
          "role": "chamada"
        },
        {
          "text": "Lembrem dos seus grandes e maravilhosos milagres e de como tem condenado os nossos inimigos!",
          "role": "resposta"
        },
        {
          "text": "Ele sempre lembrará da sua aliança",
          "role": "chamada"
        },
        {
          "text": "E, por milhares de gerações, cumprirá as suas promessas.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Sejam como criancinhas recém-nascidas, desejando sempre o puro leite espiritual, para que, bebendo dele, vocês possam crescer e ser salvos.",
          "role": "chamada"
        },
        {
          "text": "Pois, como dizem as Escrituras Sagradas: Vocês já descobriram por vocês mesmos que o Senhor é bom.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; João 20.29b",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. Felizes são os que não viram, mas assim mesmo creram! Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "3º Domingo de Páscoa": {
    "oracao": "Ó Deus, que através da humilhação de teu Filho levantaste o mundo caído, concede que teu povo fiel, resgatado dos perigos da morte eterna, viva em alegria perpétua; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 133.2-3; antífona Salmo 133.1",
          "linhas": [
            {
              "text": "Como é bom e agradável que o povo de Deus viva unido",
              "role": "chamada"
            },
            {
              "text": "Como se todos fossem irmãos!",
              "role": "resposta"
            },
            {
              "text": "É como o azeite perfumado sobre a cabeça de Arão, que desce pelas suas barbas",
              "role": "chamada"
            },
            {
              "text": "E pela gola do seu manto sacerdotal.",
              "role": "resposta"
            },
            {
              "text": "É como o orvalho do monte Hermom, que cai sobre os montes de Sião.",
              "role": "chamada"
            },
            {
              "text": "Pois é em Sião que o Senhor Deus dá a sua bênção, a vida para sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Como é bom e agradável que o povo de Deus viva unido",
              "role": "chamada"
            },
            {
              "text": "Como se todos fossem irmãos!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 30.1-5; antífona Salmo 16.11b",
          "linhas": [
            {
              "text": "A tua presença me enche de alegria",
              "role": "chamada"
            },
            {
              "text": "E me traz felicidade para sempre.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, eu te louvo porque me socorreste",
              "role": "chamada"
            },
            {
              "text": "E não deixaste que os meus inimigos zombassem de mim.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, meu Deus, eu gritei pedindo ajuda,",
              "role": "chamada"
            },
            {
              "text": "E tu me curaste,",
              "role": "resposta"
            },
            {
              "text": "Tu me salvaste da morte.",
              "role": "chamada"
            },
            {
              "text": "Eu estava entre aqueles que iam para o mundo dos mortos, mas tu me fizeste viver novamente.",
              "role": "resposta"
            },
            {
              "text": "Cantem louvor a Deus, o Senhor, vocês, o seu povo fiel!",
              "role": "chamada"
            },
            {
              "text": "Lembrem do que o Santo Deus tem feito e lhe dêem graças.",
              "role": "resposta"
            },
            {
              "text": "A sua ira dura só um momento, mas a sua bondade é para a vida toda.",
              "role": "chamada"
            },
            {
              "text": "O choro pode durar a noite inteira, mas de manhã vem a alegria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A tua presença me enche de alegria",
              "role": "chamada"
            },
            {
              "text": "E me traz felicidade para sempre.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 145.4-7,9; antífona Salmo 145.10",
          "linhas": [
            {
              "text": "Ó Senhor Deus, todas as tuas criaturas te louvarão,",
              "role": "chamada"
            },
            {
              "text": "E te darão graças os que são fiéis a ti.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, cada geração anunciará à seguinte as coisas que tens feito,",
              "role": "chamada"
            },
            {
              "text": "E todos louvarão os teus atos poderosos.",
              "role": "resposta"
            },
            {
              "text": "Eles falarão da tua glória e da tua majestade,",
              "role": "chamada"
            },
            {
              "text": "E eu meditarei nas coisas maravilhosas que fazes.",
              "role": "resposta"
            },
            {
              "text": "Falarão dos teus atos poderosos,",
              "role": "chamada"
            },
            {
              "text": "E eu anunciarei a tua grandeza.",
              "role": "resposta"
            },
            {
              "text": "Falarão da tua imensa bondade",
              "role": "chamada"
            },
            {
              "text": "E cantarão com alegria a respeito da tua fidelidade.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é bondoso com todos",
              "role": "chamada"
            },
            {
              "text": "E cuida com carinho de todas as suas criaturas.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, todas as tuas criaturas te louvarão,",
              "role": "chamada"
            },
            {
              "text": "E te darão graças os que são fiéis a ti.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; Lucas 24.32",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. Não parecia que o nosso coração queimava dentro do peito quando ele nos falava na estrada e nos explicava as Escrituras Sagradas? Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "4º Domingo de Páscoa": {
    "oracao": "Todo-poderoso Deus, Pai misericordioso, visto que despertaste da morte o Pastor de teu rebanho, concede-nos teu Espírito Santo para que, ao ouvirmos a voz de nosso Pastor, possamos reconhecer aquele que chama a cada um de nós pelo nome e segui-lo por onde ele nos levar; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 95.1-3,6-7a; antífona João 10.14,15b",
          "linhas": [
            {
              "text": "Eu sou o bom pastor.",
              "role": "chamada"
            },
            {
              "text": "Conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.",
              "role": "resposta"
            },
            {
              "text": "Venham todos, e louvemos a Deus, o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Cantemos com alegria à rocha que nos salva.",
              "role": "resposta"
            },
            {
              "text": "Vamos comparecer diante dele com ações de graças,",
              "role": "chamada"
            },
            {
              "text": "Cantando alegres hinos de louvor.",
              "role": "resposta"
            },
            {
              "text": "Pois o Senhor é Deus poderoso;",
              "role": "chamada"
            },
            {
              "text": "É Rei poderoso acima de todos os deuses.",
              "role": "resposta"
            },
            {
              "text": "Venham, fiquemos de joelhos e adoremos o Senhor.",
              "role": "chamada"
            },
            {
              "text": "Vamos nos ajoelhar diante do nosso Criador.",
              "role": "resposta"
            },
            {
              "text": "Ele é o nosso Deus;",
              "role": "chamada"
            },
            {
              "text": "Nós somos o povo que ele guia, somos o rebanho do qual ele cuida.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu sou o bom pastor.",
              "role": "chamada"
            },
            {
              "text": "Conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 23; antífona João 10.14,15b",
          "linhas": [
            {
              "text": "Eu sou o bom pastor.",
              "role": "chamada"
            },
            {
              "text": "Conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é o meu pastor:",
              "role": "chamada"
            },
            {
              "text": "Nada me faltará.",
              "role": "resposta"
            },
            {
              "text": "Ele me faz descansar em pastos verdes",
              "role": "chamada"
            },
            {
              "text": "E me leva a águas tranqüilas.",
              "role": "resposta"
            },
            {
              "text": "O Senhor renova as minhas forças",
              "role": "chamada"
            },
            {
              "text": "E me guia por caminhos certos, como ele mesmo prometeu.",
              "role": "resposta"
            },
            {
              "text": "Ainda que eu ande por um vale escuro como a morte, não terei medo de nada.",
              "role": "chamada"
            },
            {
              "text": "Pois tu, ó Senhor Deus, estás comigo; tu me proteges e me diriges.",
              "role": "resposta"
            },
            {
              "text": "Preparas um banquete para mim, onde os meus inimigos me podem ver.",
              "role": "chamada"
            },
            {
              "text": "Tu me recebes como convidado de honra e enches o meu copo até derramar.",
              "role": "resposta"
            },
            {
              "text": "Certamente a tua bondade e o teu amor ficarão comigo enquanto eu viver.",
              "role": "chamada"
            },
            {
              "text": "E na tua casa, ó Senhor, morarei todos os dias da minha vida.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu sou o bom pastor.",
              "role": "chamada"
            },
            {
              "text": "Conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 78.70-72; 79.13; antífona João 10.14,15b",
          "linhas": [
            {
              "text": "Eu sou o bom pastor.",
              "role": "chamada"
            },
            {
              "text": "Conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.",
              "role": "resposta"
            },
            {
              "text": "Deus escolheu o seu servo Davi; ele o tirou do curral de ovelhas quando ainda pastoreava o rebanho.",
              "role": "chamada"
            },
            {
              "text": "Ele o pôs como rei de Israel, como pastor do povo de Deus.",
              "role": "resposta"
            },
            {
              "text": "Davi cuidou deles com dedicação",
              "role": "chamada"
            },
            {
              "text": "E os dirigiu com sabedoria.",
              "role": "resposta"
            },
            {
              "text": "Então nós, que somos o teu povo, que somos ovelhas do teu rebanho, nós e os nossos descendentes te daremos graças para sempre",
              "role": "chamada"
            },
            {
              "text": "E cantaremos hinos de louvor a ti hoje e nos tempos que estão por vir.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu sou o bom pastor.",
              "role": "chamada"
            },
            {
              "text": "Conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; João 10.14",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. Eu sou o bom pastor. Conheço as minhas ovelhas, e elas me conhecem. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "5º Domingo de Páscoa": {
    "oracao": "Ó Deus, que fazes as mentes dos teus fiéis terem a mesma vontade, concede que possamos amar o que ordenas e desejar o que prometes, para que, em meio às muitas mudanças deste mundo nossos corações possam estar fixados onde se encontram as verdadeiras alegrias; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 30.1-5; antífona Salmo 149.1",
          "linhas": [
            {
              "text": "Aleluia! Cantem a Deus, o Senhor, uma nova canção.",
              "role": "chamada"
            },
            {
              "text": "Louvem a Deus na reunião dos seus servos fiéis.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, eu te louvo porque me socorreste",
              "role": "chamada"
            },
            {
              "text": "E não deixaste que os meus inimigos zombassem de mim.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, meu Deus, eu gritei pedindo ajuda,",
              "role": "chamada"
            },
            {
              "text": "E tu me curaste,",
              "role": "resposta"
            },
            {
              "text": "Tu me salvaste da morte.",
              "role": "chamada"
            },
            {
              "text": "Eu estava entre aqueles que iam para o mundo dos mortos, mas tu me fizeste viver novamente.",
              "role": "resposta"
            },
            {
              "text": "Cantem louvor a Deus, o Senhor, vocês, o seu povo fiel!",
              "role": "chamada"
            },
            {
              "text": "Lembrem do que o Santo Deus tem feito e lhe dêem graças.",
              "role": "resposta"
            },
            {
              "text": "A sua ira dura só um momento, mas a sua bondade é para a vida toda.",
              "role": "chamada"
            },
            {
              "text": "O choro pode durar a noite inteira, mas de manhã vem a alegria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Aleluia! Cantem a Deus, o Senhor, uma nova canção.",
              "role": "chamada"
            },
            {
              "text": "Louvem a Deus na reunião dos seus servos fiéis.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.1-2,8,10,21; antífona João 16.16",
          "linhas": [
            {
              "text": "Daqui a pouco vocês não vão me ver mais;",
              "role": "chamada"
            },
            {
              "text": "Porém, pouco depois, vão me ver novamente.",
              "role": "resposta"
            },
            {
              "text": "Meu Deus e meu Rei, eu anunciarei a tua grandeza",
              "role": "chamada"
            },
            {
              "text": "E sempre serei grato a ti.",
              "role": "resposta"
            },
            {
              "text": "Todos os dias te darei graças",
              "role": "chamada"
            },
            {
              "text": "E sempre te louvarei.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus é bom e cheio de compaixão;",
              "role": "chamada"
            },
            {
              "text": "Ele demora a ficar irado e tem sempre muito amor.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, todas as tuas criaturas te louvarão,",
              "role": "chamada"
            },
            {
              "text": "E te darão graças os que são fiéis a ti.",
              "role": "resposta"
            },
            {
              "text": "Eu sempre louvarei o Senhor.",
              "role": "chamada"
            },
            {
              "text": "Que todos os seres vivos louvem o Santo Deus para sempre!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Daqui a pouco vocês não vão me ver mais;",
              "role": "chamada"
            },
            {
              "text": "Porém, pouco depois, vão me ver novamente.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 98.2-6; antífona Salmo 98.1",
          "linhas": [
            {
              "text": "Cantem uma nova canção a Deus, o Senhor, pois ele tem feito coisas maravilhosas.",
              "role": "chamada"
            },
            {
              "text": "Com a sua força e com o seu santo poder, ele se tornou vitorioso.",
              "role": "resposta"
            },
            {
              "text": "O Senhor anunciou a sua vitória;",
              "role": "chamada"
            },
            {
              "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
              "role": "resposta"
            },
            {
              "text": "Com amor e fidelidade, ele cumpriu a sua promessa ao povo de Israel.",
              "role": "chamada"
            },
            {
              "text": "Até nos lugares mais distantes do mundo todos viram a vitória do nosso Deus.",
              "role": "resposta"
            },
            {
              "text": "Cantem ao Senhor com alegria, povos de toda a terra!",
              "role": "chamada"
            },
            {
              "text": "Louvem o Senhor com canções e gritos de alegria.",
              "role": "resposta"
            },
            {
              "text": "Cantem louvores a Deus, o Senhor, com acompanhamento de harpas",
              "role": "chamada"
            },
            {
              "text": "E toquem música nas liras.",
              "role": "resposta"
            },
            {
              "text": "Ao som de trombetas e cornetas,",
              "role": "chamada"
            },
            {
              "text": "Cantem com alegria diante do Senhor, o Rei.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Cantem uma nova canção a Deus, o Senhor, pois ele tem feito coisas maravilhosas.",
              "role": "chamada"
            },
            {
              "text": "Com a sua força e com o seu santo poder, ele se tornou vitorioso.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; João 14.23",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. A pessoa que me ama obedecerá à minha mensagem, e o meu Pai a amará. E o meu Pai e eu viremos viver com ela. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "6º Domingo de Páscoa": {
    "oracao": "Ó Deus, doador de tudo que é bom, pela tua santa inspiração concede que possamos pensar naquelas coisas que são corretas e pela tua misericordiosa direção possamos realizá-las; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 119.89-93; antífona Salmo 119.105",
          "linhas": [
            {
              "text": "A tua palavra é lâmpada para guiar os meus passos,",
              "role": "chamada"
            },
            {
              "text": "É luz que ilumina o meu caminho.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, a tua palavra dura para sempre;",
              "role": "chamada"
            },
            {
              "text": "Ela é firme como o céu.",
              "role": "resposta"
            },
            {
              "text": "A tua fidelidade permanece em todas as gerações;",
              "role": "chamada"
            },
            {
              "text": "Tu colocaste a terra no seu lugar, e ela fica firme.",
              "role": "resposta"
            },
            {
              "text": "De acordo com as tuas ordens todas as coisas permanecem até hoje,",
              "role": "chamada"
            },
            {
              "text": "Pois tudo te obedece.",
              "role": "resposta"
            },
            {
              "text": "Se a tua lei não tivesse sido o motivo da minha alegria,",
              "role": "chamada"
            },
            {
              "text": "Eu já teria morrido de tanto sofrer.",
              "role": "resposta"
            },
            {
              "text": "Nunca esquecerei os teus ensinamentos,",
              "role": "chamada"
            },
            {
              "text": "Pois é por meio deles que tens conservado a minha vida.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A tua palavra é lâmpada para guiar os meus passos,",
              "role": "chamada"
            },
            {
              "text": "É luz que ilumina o meu caminho.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 66.1-2,8-9,20; antífona Salmo 66.16",
          "linhas": [
            {
              "text": "Todos vocês que temem a Deus, venham e escutem,",
              "role": "chamada"
            },
            {
              "text": "E eu contarei o que ele tem feito por mim.",
              "role": "resposta"
            },
            {
              "text": "Que todos os povos louvem a Deus com gritos de alegria!",
              "role": "chamada"
            },
            {
              "text": "Cantem hinos de louvor a ele; ofereçam a ele louvores gloriosos.",
              "role": "resposta"
            },
            {
              "text": "Que todas as nações louvem o nosso Deus!",
              "role": "chamada"
            },
            {
              "text": "Que cantem hinos de louvor em voz alta!",
              "role": "resposta"
            },
            {
              "text": "Ele nos tem mantido vivos",
              "role": "chamada"
            },
            {
              "text": "E não nos tem deixado cair.",
              "role": "resposta"
            },
            {
              "text": "Eu louvo a Deus",
              "role": "chamada"
            },
            {
              "text": "Porque ele não deixou de ouvir a minha oração e nunca me negou o seu amor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Todos vocês que temem a Deus, venham e escutem,",
              "role": "chamada"
            },
            {
              "text": "E eu contarei o que ele tem feito por mim.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 55.4,16-18; antífona Salmo 55.22",
          "linhas": [
            {
              "text": "Entregue os seus problemas ao Senhor, e ele o ajudará;",
              "role": "chamada"
            },
            {
              "text": "Ele nunca deixa que fracasse a pessoa que lhe obedece.",
              "role": "resposta"
            },
            {
              "text": "O meu coração está cheio de medo,",
              "role": "chamada"
            },
            {
              "text": "E o pavor da morte cai sobre mim.",
              "role": "resposta"
            },
            {
              "text": "Mas eu chamo a Deus, o Senhor, pedindo ajuda,",
              "role": "chamada"
            },
            {
              "text": "E ele me salva.",
              "role": "resposta"
            },
            {
              "text": "De manhã, ao meio-dia e de noite, eu choro e me queixo,",
              "role": "chamada"
            },
            {
              "text": "E ele me ouve.",
              "role": "resposta"
            },
            {
              "text": "Ele me traz são e salvo de volta das batalhas",
              "role": "chamada"
            },
            {
              "text": "Em que luto contra os meus muitos inimigos.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Entregue os seus problemas ao Senhor, e ele o ajudará;",
              "role": "chamada"
            },
            {
              "text": "Ele nunca deixa que fracasse a pessoa que lhe obedece.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; João 16.33b",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. No mundo vocês vão sofrer; mas tenham coragem. Eu venci o mundo. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Ascensão do Senhor": {
    "oracao": "Todo-poderoso Deus, da mesma forma que teu único Filho, nosso Senhor Jesus Cristo, subiu aos céus, que também possamos subir ao céu em coração e mente, para ali morar continuamente com ele, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 110.1,4-5; antífona Salmo 47.5",
      "linhas": [
        {
          "text": "Deus vai subindo para o seu trono.",
          "role": "chamada"
        },
        {
          "text": "Enquanto ele sobe, há gritos de alegria e sons de trombeta.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus disse ao meu senhor, o rei: Sente-se do meu lado direito,",
          "role": "chamada"
        },
        {
          "text": "Até que eu ponha os seus inimigos debaixo dos seus pés.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus fez este juramento e não voltará atrás:",
          "role": "chamada"
        },
        {
          "text": "Você será sacerdote para sempre, na ordem do sacerdócio de Melquisedeque.",
          "role": "resposta"
        },
        {
          "text": "Ó rei, Deus está do seu lado direito",
          "role": "chamada"
        },
        {
          "text": "E derrotará reis no dia em que se irar.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Deus vai subindo para o seu trono.",
          "role": "chamada"
        },
        {
          "text": "Enquanto ele sobe, há gritos de alegria e sons de trombeta.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; Mateus 28.20b",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. E lembrem disto: eu estou com vocês todos os dias, até o fim dos tempos. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "7º Domingo de Páscoa": {
    "oracao": "Ó Rei da glória, Senhor dos exércitos, que estás elevado em triunfo acima de todos os céus, não nos deixes sem consolo mas, como prometeste, envianos o Espírito da verdade que vem do Pai; pois tu vives e reinas com ele e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 100.1-5; antífona Salmo 101.1",
          "linhas": [
            {
              "text": "Eu canto a respeito da fidelidade e da justiça;",
              "role": "chamada"
            },
            {
              "text": "Canto hinos a ti, ó Senhor Deus.",
              "role": "resposta"
            },
            {
              "text": "Cantem hinos a Deus, o Senhor, todos os moradores da terra!",
              "role": "chamada"
            },
            {
              "text": "Adorem o Senhor com alegria e venham cantando até a sua presença.",
              "role": "resposta"
            },
            {
              "text": "Lembrem que o Senhor é Deus.",
              "role": "chamada"
            },
            {
              "text": "Ele nos fez, e nós somos dele; somos o seu povo, o seu rebanho.",
              "role": "resposta"
            },
            {
              "text": "Entrem pelos portões do Templo com ações de graças, entrem nos seus pátios com louvor.",
              "role": "chamada"
            },
            {
              "text": "Louvem a Deus e sejam agradecidos a ele.",
              "role": "resposta"
            },
            {
              "text": "Pois o Senhor é bom; o seu amor dura para sempre,",
              "role": "chamada"
            },
            {
              "text": "E a sua fidelidade não tem fim.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu canto a respeito da fidelidade e da justiça;",
              "role": "chamada"
            },
            {
              "text": "Canto hinos a ti, ó Senhor Deus.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 27.1a,4-5,10,14; antífona Salmo 27.7",
          "linhas": [
            {
              "text": "Ó Senhor, ouve-me quando eu te chamar!",
              "role": "chamada"
            },
            {
              "text": "Tem compaixão de mim e responde-me.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus é a minha luz e a minha salvação;",
              "role": "chamada"
            },
            {
              "text": "De quem terei medo?",
              "role": "resposta"
            },
            {
              "text": "A Deus, o Senhor, pedi uma coisa, e o que eu quero é só isto:",
              "role": "chamada"
            },
            {
              "text": "Que ele me deixe viver na sua casa todos os dias da minha vida, para sentir, maravilhado, a sua bondade e pedir a sua orientação.",
              "role": "resposta"
            },
            {
              "text": "Em tempos difíceis, ele me esconderá no seu abrigo.",
              "role": "chamada"
            },
            {
              "text": "Ele me guardará no seu Templo e me colocará em segurança no alto de uma rocha.",
              "role": "resposta"
            },
            {
              "text": "Ainda que o meu pai e a minha mãe me abandonem,",
              "role": "chamada"
            },
            {
              "text": "O Senhor cuidará de mim.",
              "role": "resposta"
            },
            {
              "text": "Confie no Senhor.",
              "role": "chamada"
            },
            {
              "text": "Tenha fé e coragem. Confie em Deus, o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor, ouve-me quando eu te chamar!",
              "role": "chamada"
            },
            {
              "text": "Tem compaixão de mim e responde-me.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 61.3,5-8; antífona Salmo 61.1",
          "linhas": [
            {
              "text": "Ó Deus, ouve o meu grito de angústia!",
              "role": "chamada"
            },
            {
              "text": "Escuta a minha oração.",
              "role": "resposta"
            },
            {
              "text": "Pois tu és o meu protetor,",
              "role": "chamada"
            },
            {
              "text": "O meu forte defensor contra os meus inimigos.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, tu ouviste as minhas promessas",
              "role": "chamada"
            },
            {
              "text": "E me deste as bênçãos que pertencem aos que te temem.",
              "role": "resposta"
            },
            {
              "text": "Dá uma vida longa ao rei;",
              "role": "chamada"
            },
            {
              "text": "Que ele viva muitos e muitos anos!",
              "role": "resposta"
            },
            {
              "text": "Que ele governe para sempre com a tua bênção, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Protege-o com o teu amor e com a tua fidelidade.",
              "role": "resposta"
            },
            {
              "text": "Assim eu sempre te cantarei louvores",
              "role": "chamada"
            },
            {
              "text": "E todos os dias te darei o que tiver prometido.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Deus, ouve o meu grito de angústia!",
              "role": "chamada"
            },
            {
              "text": "Escuta a minha oração.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Adaptado de Mateus 28.7; Hebreus 2.7; Salmo 8.6",
      "linhas": [
        {
          "text": "[Cristo] foi ressuscitado [dos mortos].",
          "role": "chamada"
        },
        {
          "text": "Tu[, ó Pai,] lhe deste a glória e a honra de um rei.",
          "role": "resposta"
        },
        {
          "text": "Tu lhe deste poder sobre tudo o que criaste;",
          "role": "chamada"
        },
        {
          "text": "Tu puseste todas as coisas debaixo do domínio dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Romanos 6.9; João 14.18",
      "linhas": [
        {
          "text": "Aleluia. Sabemos que Cristo foi ressuscitado e nunca mais morrerá, pois a morte não tem mais poder sobre ele. Aleluia. Não vou deixá-los abandonados, mas voltarei para ficar com vocês. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Véspera de Pentecostes": {
    "oracao": "Deus Todo-poderoso e sempre vivo, que cumpriste tua promessa ao enviar o presente do Espírito Santo para reunir os discípulos de todas as nações na cruz e na ressurreição de teu Filho Jesus Cristo, propaga este presente por todos os lugares da terra pela pregação do Evangelho; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 68.32-35; antífona Salmo 68.19",
      "linhas": [
        {
          "text": "Louvado seja o Senhor, que dia a dia leva as nossas cargas!",
          "role": "chamada"
        },
        {
          "text": "Deus é a nossa salvação.",
          "role": "resposta"
        },
        {
          "text": "Cantem hinos a Deus, povos de todas as nações,",
          "role": "chamada"
        },
        {
          "text": "Cantem louvores ao Senhor!",
          "role": "resposta"
        },
        {
          "text": "Louvem a ele, o cavaleiro do céu, o antigo céu.",
          "role": "chamada"
        },
        {
          "text": "Escutem a voz do Senhor, a sua voz poderosa.",
          "role": "resposta"
        },
        {
          "text": "Anunciem o poder de Deus;",
          "role": "chamada"
        },
        {
          "text": "A majestade dele está sobre o povo de Israel, a sua força está nos céus.",
          "role": "resposta"
        },
        {
          "text": "Como Deus é maravilhoso no seu Templo!",
          "role": "chamada"
        },
        {
          "text": "O Deus de Israel dá força e poder ao seu povo. Louvem a Deus.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Louvado seja o Senhor, que dia a dia leva as nossas cargas!",
          "role": "chamada"
        },
        {
          "text": "Deus é a nossa salvação.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Atos 2.17b; Romanos 10.10",
      "linhas": [
        {
          "text": "Derramarei o meu Espírito sobre todas as pessoas.",
          "role": "chamada"
        },
        {
          "text": "Os filhos e as filhas de vocês anunciarão a minha mensagem.",
          "role": "resposta"
        },
        {
          "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
          "role": "chamada"
        },
        {
          "text": "Falamos com a boca e assim somos salvos.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": null,
      "linhas": [
        {
          "text": "Texto litúrgico",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Vem, Espírito Santo, enche os corações dos fiéis e acende neles o fogo do teu amor. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Pentecostes": {
    "oracao": "Ó Deus, neste dia mais uma vez ensinaste os corações de teu povo fiel ao enviar-lhe a luz de teu Espírito Santo. Concede-nos, em nossos dias, o mesmo Espírito, para termos a correta compreensão de todas as coisas e sempre nos alegrarmos na sua santa consolação; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 104.24,27-28,30; antífona Texto litúrgico",
      "linhas": [
        {
          "text": "Vem, Espírito Santo, enche os corações dos fiéis",
          "role": "chamada"
        },
        {
          "text": "E acende neles o fogo do teu amor. Aleluia.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, tu tens feito tantas coisas e foi com sabedoria que as fizeste.",
          "role": "chamada"
        },
        {
          "text": "A terra está cheia das tuas criaturas.",
          "role": "resposta"
        },
        {
          "text": "Todos dependem de ti,",
          "role": "chamada"
        },
        {
          "text": "Esperando que lhes dês alimento no tempo certo.",
          "role": "resposta"
        },
        {
          "text": "Tu dás a comida,",
          "role": "chamada"
        },
        {
          "text": "E eles comem e ficam satisfeitos.",
          "role": "resposta"
        },
        {
          "text": "Porém, quando lhes dás o [teu Espírito], eles nascem;",
          "role": "chamada"
        },
        {
          "text": "E assim dás vida nova à terra.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Vem, Espírito Santo, enche os corações dos fiéis",
          "role": "chamada"
        },
        {
          "text": "E acende neles o fogo do teu amor. Aleluia.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Atos 2.17b; Romanos 10.10",
      "linhas": [
        {
          "text": "Derramarei o meu Espírito sobre todas as pessoas.",
          "role": "chamada"
        },
        {
          "text": "Os filhos e as filhas de vocês anunciarão a minha mensagem.",
          "role": "resposta"
        },
        {
          "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
          "role": "chamada"
        },
        {
          "text": "Falamos com a boca e assim somos salvos.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": null,
      "linhas": [
        {
          "text": "Texto litúrgico",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Vem, Espírito Santo, enche os corações dos fiéis e acende neles o fogo do teu amor. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Pentecostes - Segunda-feira": {
    "oracao": "Ó Deus, que deste teu Espírito Santo aos apóstolos, concede-nos este mesmo Espírito para que possamos viver em fé e permanecer em paz; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 48.1-2,9-10; antífona Salmo 48.8",
      "linhas": [
        {
          "text": "Temos ouvido falar das coisas que o Senhor Deus tem feito e agora vimos o que aconteceu na cidade do nosso Deus, o Senhor Todo-Poderoso.",
          "role": "chamada"
        },
        {
          "text": "Ele guardará a cidade em segurança para sempre.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus é grande e merece ser louvado na sua cidade,",
          "role": "chamada"
        },
        {
          "text": "Em Sião, o seu monte santo.",
          "role": "resposta"
        },
        {
          "text": "O monte de Deus é alto e bonito;",
          "role": "chamada"
        },
        {
          "text": "A cidade do grande Rei é a alegria do mundo inteiro.",
          "role": "resposta"
        },
        {
          "text": "No teu Templo, ó Deus,",
          "role": "chamada"
        },
        {
          "text": "Ficamos pensando no teu amor.",
          "role": "resposta"
        },
        {
          "text": "Tu és louvado por todos os povos, e a tua fama se espalha pelo mundo inteiro,",
          "role": "chamada"
        },
        {
          "text": "Pois tu governas com justiça.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Temos ouvido falar das coisas que o Senhor Deus tem feito e agora vimos o que aconteceu na cidade do nosso Deus, o Senhor Todo-Poderoso.",
          "role": "chamada"
        },
        {
          "text": "Ele guardará a cidade em segurança para sempre.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Atos 2.17b; Romanos 10.10",
      "linhas": [
        {
          "text": "Derramarei o meu Espírito sobre todas as pessoas.",
          "role": "chamada"
        },
        {
          "text": "Os filhos e as filhas de vocês anunciarão a minha mensagem.",
          "role": "resposta"
        },
        {
          "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
          "role": "chamada"
        },
        {
          "text": "Falamos com a boca e assim somos salvos.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": null,
      "linhas": [
        {
          "text": "Texto litúrgico",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Vem, Espírito Santo, enche os corações dos fiéis e acende neles o fogo do teu amor. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Pentecostes - Terça-feira": {
    "oracao": "Deus Todo-poderoso e sempre vivo, que cumpriste tua promessa ao enviar o presente do Espírito Santo para reunir os discípulos de todas as nações na cruz e na ressurreição de teu Filho Jesus Cristo, propaga este presente por todos os lugares da terra pela pregação do Evangelho; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 78.69-72; antífona Texto litúrgico",
      "linhas": [
        {
          "text": "Vem, Espírito Santo, enche os corações dos fiéis",
          "role": "chamada"
        },
        {
          "text": "E acende neles o fogo do teu amor. Aleluia.",
          "role": "resposta"
        },
        {
          "text": "Ele construiu o seu Templo parecido com a sua casa no céu",
          "role": "chamada"
        },
        {
          "text": "E o fez firme como a terra, que está segura para sempre.",
          "role": "resposta"
        },
        {
          "text": "Então Deus escolheu o seu servo Davi; ele o tirou do curral de ovelhas;",
          "role": "chamada"
        },
        {
          "text": "Quando ainda pastoreava o rebanho, ele o pôs como rei de Israel, como pastor do povo de Deus.",
          "role": "resposta"
        },
        {
          "text": "Davi cuidou deles com dedicação",
          "role": "chamada"
        },
        {
          "text": "E os dirigiu com sabedoria.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Vem, Espírito Santo, enche os corações dos fiéis",
          "role": "chamada"
        },
        {
          "text": "E acende neles o fogo do teu amor. Aleluia.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Atos 2.17b; Romanos 10.10",
      "linhas": [
        {
          "text": "Derramarei o meu Espírito sobre todas as pessoas.",
          "role": "chamada"
        },
        {
          "text": "Os filhos e as filhas de vocês anunciarão a minha mensagem.",
          "role": "resposta"
        },
        {
          "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
          "role": "chamada"
        },
        {
          "text": "Falamos com a boca e assim somos salvos.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": null,
      "linhas": [
        {
          "text": "Texto litúrgico",
          "role": "resposta"
        },
        {
          "text": "Aleluia. Vem, Espírito Santo, enche os corações dos fiéis e acende neles o fogo do teu amor. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "André, Apóstolo": {
    "oracao": "Todo-poderoso Deus, pela tua graça o apóstolo André atendeu ao chamado de teu Filho para ser um discípulo. Concede-nos também seguir de coração e vida ao mesmo Senhor Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona João 15.27",
      "linhas": [
        {
          "text": "Vocês também falarão a meu respeito",
          "role": "chamada"
        },
        {
          "text": "Porque estão comigo desde o começo.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Vocês também falarão a meu respeito",
          "role": "chamada"
        },
        {
          "text": "Porque estão comigo desde o começo.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 1.39a",
      "linhas": [
        {
          "text": "Aleluia. Venham ver! – disse Jesus. Então eles foram, viram onde Jesus estava morando e ficaram com ele o resto daquele dia. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Tomé, Apóstolo": {
    "oracao": "Todo-poderoso e eterno Deus, que fortaleceste ao teu apóstolo Tomé com fé firme e certa na ressurreição de teu Filho, concede-nos tal fé em Jesus Cristo, nosso Senhor e nosso Deus, para que nunca sejamos achados em falta na sua presença; através do mesmo Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 31.14",
      "linhas": [
        {
          "text": "A minha confiança está em ti, ó Senhor;",
          "role": "chamada"
        },
        {
          "text": "Tu és o meu Deus.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "A minha confiança está em ti, ó Senhor;",
          "role": "chamada"
        },
        {
          "text": "Tu és o meu Deus.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 20.29b",
      "linhas": [
        {
          "text": "Aleluia. Felizes são os que não viram, mas assim mesmo creram! Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Estêvão, Mártir": {
    "oracao": "Pai celestial, em meio aos nossos sofrimentos por causa de Cristo concede-nos a graça de seguir o exemplo de Estêvão, o primeiro mártir, para que também nós possamos olhar para aquele que sofreu e foi crucificado em nosso favor e orar por aqueles que nos fazem o mal; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 31.1,3,5; antífona Apocalipse 7.14b",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção; livra-me da vergonha de ser derrotado.",
          "role": "chamada"
        },
        {
          "text": "Tu és justo; eu te peço que me ajudes.",
          "role": "resposta"
        },
        {
          "text": "Tu és a minha rocha e a minha fortaleza;",
          "role": "chamada"
        },
        {
          "text": "Guia-me e orienta-me como prometeste.",
          "role": "resposta"
        },
        {
          "text": "Nas tuas mãos entrego a minha vida.",
          "role": "chamada"
        },
        {
          "text": "Tu me salvarás, ó Senhor, porque tu és Deus fiel.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 116.15",
      "linhas": [
        {
          "text": "Aleluia. O Senhor Deus sente pesar quando vê morrerem os que são fiéis a ele. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "João, Apóstolo e Evangelista": {
    "oracao": "Misericordioso Senhor, lança os raios brilhantes da tua luz sobre a tua Igreja, a fim de que nós, sendo instruídos na doutrina de teu abençoado apóstolo e evangelista João, possamos chegar à luz da vida eterna; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 92.1-5; antífona João 20.31",
      "linhas": [
        {
          "text": "Estes foram escritos para que vocês creiam que Jesus é o Messias, o Filho de Deus.",
          "role": "chamada"
        },
        {
          "text": "E para que, crendo, tenham vida por meio dele.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, como é bom dar-te graças!",
          "role": "chamada"
        },
        {
          "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
          "role": "resposta"
        },
        {
          "text": "Como é bom anunciar de manhã o teu amor",
          "role": "chamada"
        },
        {
          "text": "E de noite, a tua fidelidade,",
          "role": "resposta"
        },
        {
          "text": "Com a música de uma harpa de dez cordas",
          "role": "chamada"
        },
        {
          "text": "E ao som da lira!",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, os teus feitos poderosos me tornam feliz!",
          "role": "chamada"
        },
        {
          "text": "Eu canto de alegria pelas coisas que fazes.",
          "role": "resposta"
        },
        {
          "text": "Que grandes coisas tens feito, ó Senhor!",
          "role": "chamada"
        },
        {
          "text": "Como é difícil entender os teus pensamentos!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Estes foram escritos para que vocês creiam que Jesus é o Messias, o Filho de Deus.",
          "role": "chamada"
        },
        {
          "text": "E para que, crendo, tenham vida por meio dele.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 119.105,103; 45.1a,c",
      "linhas": [
        {
          "text": "A tua palavra é lâmpada para guiar os meus passos,",
          "role": "chamada"
        },
        {
          "text": "É luz que ilumina o meu caminho.",
          "role": "resposta"
        },
        {
          "text": "Como são doces as tuas palavras!",
          "role": "chamada"
        },
        {
          "text": "São mais doces do que o mel.",
          "role": "resposta"
        },
        {
          "text": "Lindas palavras enchem o meu coração.",
          "role": "chamada"
        },
        {
          "text": "A minha língua é como a pena de um bom escritor.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 21.24a,c",
      "linhas": [
        {
          "text": "Aleluia. Este é o discípulo que falou destas coisas. E nós sabemos que o que ele disse é verdade. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Crianças Inocentes, Mártires": {
    "oracao": "Todo-poderoso Deus, os mártires inocentes de Belém anunciaram o louvor a ti não ao falar, mas morrendo. Faze morrer em nós tudo que está em conflito com a tua vontade, para que nossas vidas sejam testemunhas da fé que professamos com os nossos lábios; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 31.1,3,5; antífona Apocalipse 7.14b",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção; livra-me da vergonha de ser derrotado.",
          "role": "chamada"
        },
        {
          "text": "Tu és justo; eu te peço que me ajudes.",
          "role": "resposta"
        },
        {
          "text": "Tu és a minha rocha e a minha fortaleza;",
          "role": "chamada"
        },
        {
          "text": "Guia-me e orienta-me como prometeste.",
          "role": "resposta"
        },
        {
          "text": "Nas tuas mãos entrego a minha vida.",
          "role": "chamada"
        },
        {
          "text": "Tu me salvarás, ó Senhor, porque tu és Deus fiel.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 71.4a,5a,6a,b,8",
      "linhas": [
        {
          "text": "Ó meu Deus, livra-me dos maus,",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor, meu Deus, em ti ponho a minha esperança.",
          "role": "resposta"
        },
        {
          "text": "Toda a minha vida tenho me apoiado em ti;",
          "role": "chamada"
        },
        {
          "text": "Desde o meu nascimento tu tens me protegido.",
          "role": "resposta"
        },
        {
          "text": "O dia inteiro, eu te louvo",
          "role": "chamada"
        },
        {
          "text": "E anuncio a tua glória.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 116.15",
      "linhas": [
        {
          "text": "Aleluia. O Senhor Deus sente pesar quando vê morrerem os que são fiéis a ele. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Véspera de Ano Novo": {
    "oracao": "Deus eterno, entregamos à tua misericórdia e perdão o ano que agora termina e confiamos à tua bênção e amor os dias que estão por vir. No novo ano, habita entre nós com o teu Espírito Santo para que sempre confiemos no nome salvador de nosso Senhor Jesus Cristo, que vive e reina contigo e com o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 98.1-3; antífona Salmo 124.8",
      "linhas": [
        {
          "text": "O nosso socorro vem do Senhor Deus,",
          "role": "chamada"
        },
        {
          "text": "Que fez o céu e a terra.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor, pois ele tem feito coisas maravilhosas.",
          "role": "chamada"
        },
        {
          "text": "Com a sua força e com o seu santo poder, ele se tornou vitorioso.",
          "role": "resposta"
        },
        {
          "text": "O Senhor anunciou a sua vitória;",
          "role": "chamada"
        },
        {
          "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
          "role": "resposta"
        },
        {
          "text": "Com amor e fidelidade, ele cumpriu a sua promessa ao povo de Israel.",
          "role": "chamada"
        },
        {
          "text": "Até nos lugares mais distantes do mundo todos viram a vitória do nosso Deus.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "O nosso socorro vem do Senhor Deus,",
          "role": "chamada"
        },
        {
          "text": "Que fez o céu e a terra.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 90.12,14",
      "linhas": [
        {
          "text": "Faze com que saibamos como são poucos os dias da nossa vida",
          "role": "chamada"
        },
        {
          "text": "Para que tenhamos um coração sábio.",
          "role": "resposta"
        },
        {
          "text": "Alimenta-nos de manhã com o teu amor, até ficarmos satisfeitos,",
          "role": "chamada"
        },
        {
          "text": "Para que cantemos e nos alegremos a vida inteira.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 103.17a",
      "linhas": [
        {
          "text": "Aleluia. Mas o amor de Deus, o Senhor, por aqueles que o temem dura para sempre. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Circuncisão e Nome de Jesus": {
    "oracao": "Senhor Deus, fizeste com que teu amado Filho, nosso Salvador, estivesse sujeito à lei, e levaste-o a derramar seu sangue por nós. Concede-nos a verdadeira circuncisão do Espírito para que nossos corações possam ser purificados de todos os pecados; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 40.6-8; antífona Salmo 40.16",
      "linhas": [
        {
          "text": "Que fiquem alegres e contentes todos os que te adoram!",
          "role": "chamada"
        },
        {
          "text": "E que os que são gratos pela tua ajuda digam sempre: Como o Senhor é grande!",
          "role": "resposta"
        },
        {
          "text": "Tu não queres animais oferecidos em sacrifício, nem ofertas de cereais.",
          "role": "chamada"
        },
        {
          "text": "Não pediste que animais fossem queimados inteiros no altar,",
          "role": "resposta"
        },
        {
          "text": "Nem exigiste sacrifícios oferecidos para tirar pecados.",
          "role": "chamada"
        },
        {
          "text": "Pelo contrário, tu me deste ouvidos para ouvir,",
          "role": "resposta"
        },
        {
          "text": "E por isso respondi: Aqui estou;",
          "role": "chamada"
        },
        {
          "text": "As tuas instruções para mim estão no Livro da Lei.",
          "role": "resposta"
        },
        {
          "text": "Eu tenho prazer em fazer a tua vontade, ó meu Deus!",
          "role": "chamada"
        },
        {
          "text": "Guardo a tua lei no meu coração.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Que fiquem alegres e contentes todos os que te adoram!",
          "role": "chamada"
        },
        {
          "text": "E que os que são gratos pela tua ajuda digam sempre: Como o Senhor é grande!",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Hebreus 8.10; 10.17",
      "linhas": [
        {
          "text": "Quando esse tempo chegar, diz o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Farei com o povo de Israel esta aliança:",
          "role": "resposta"
        },
        {
          "text": "Eu porei as minhas leis na mente deles",
          "role": "chamada"
        },
        {
          "text": "E no coração deles as escreverei.",
          "role": "resposta"
        },
        {
          "text": "Eu serei o Deus deles, e eles serão o meu povo.",
          "role": "chamada"
        },
        {
          "text": "Não lembrarei mais dos seus pecados nem das suas maldades.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 1.21",
      "linhas": [
        {
          "text": "Aleluia. Ela terá um menino, e você porá nele o nome de Jesus, pois ele salvará o seu povo dos pecados deles. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Confissão de Pedro": {
    "oracao": "Pai celestial, tu revelaste ao apóstolo Pedro a abençoada verdade de que teu Filho Jesus é o Cristo. Fortalece-nos pela proclamação desta verdade para que nós também possamos confessar com alegria que não há salvação em nenhum outro; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "2 Coríntios 4.5a,13c; 1 Pedro 4.11b; Salmo 113.3",
      "linhas": [
        {
          "text": "Pois nós não anunciamos a nós mesmos;",
          "role": "chamada"
        },
        {
          "text": "Nós anunciamos Jesus Cristo como o Senhor.",
          "role": "resposta"
        },
        {
          "text": "Pois assim nós... também falamos porque cremos,",
          "role": "chamada"
        },
        {
          "text": "[Como] quem prega... a palavra de Deus.",
          "role": "resposta"
        },
        {
          "text": "Desde o nascer até o pôr-do-sol,",
          "role": "chamada"
        },
        {
          "text": "Que o nome do Senhor seja louvado!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Marcos 8.35",
      "linhas": [
        {
          "text": "Aleluia. Pois quem põe os seus próprios interesses em primeiro lugar nunca terá a vida verdadeira; mas quem esquece a si mesmo por minha causa e por causa do evangelho terá a vida verdadeira. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Timóteo, Pastor e Confessor": {
    "oracao": "Senhor Jesus Cristo, que sempre dás à tua Igreja na terra pastores fiéis como Timóteo, para guiar e alimentar o teu rebanho, faze com que todos os pastores sejam diligentes em pregar a tua santa Palavra e administrar teus meios da graça, e concede ao teu povo sabedoria para seguir no caminho que leva à vida eterna; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona 1 Timóteo 6.12a,b",
      "linhas": [
        {
          "text": "Corra a boa corrida da fé e ganhe a vida eterna.",
          "role": "chamada"
        },
        {
          "text": "Pois foi para essa vida que Deus o chamou.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Corra a boa corrida da fé e ganhe a vida eterna.",
          "role": "chamada"
        },
        {
          "text": "Pois foi para essa vida que Deus o chamou.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Ezequiel 34.11,12b; Jeremias 23.4a,b",
      "linhas": [
        {
          "text": "Eu mesmo procurarei e buscarei as minhas ovelhas;",
          "role": "chamada"
        },
        {
          "text": "Eu buscarei as minhas ovelhas e as trarei de volta de todos os lugares por onde foram espalhadas.",
          "role": "resposta"
        },
        {
          "text": "Eu lhes darei líderes que cuidarão deles.",
          "role": "chamada"
        },
        {
          "text": "Não ficarão mais com medo, nem apavorados.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "1 Timóteo 1.15",
      "linhas": [
        {
          "text": "Aleluia. O ensinamento verdadeiro e que deve ser crido e aceito de todo o coração é este: Cristo Jesus veio ao mundo para salvar os pecadores, dos quais eu sou o pior. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Conversão de Paulo": {
    "oracao": "Todo-poderoso Deus, que mudaste o coração daquele que perseguia a Igreja e pela sua pregação fizeste a luz do Evangelho brilhar em todo mundo, concede que sempre nos alegremos na luz salvadora de teu Evangelho e, seguindo o exemplo do apóstolo Paulo, propaguemos o mesmo por todos os lugares da terra; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Efésios 4.8b,11,12b; 2.19a,c",
      "linhas": [
        {
          "text": "Quando ele subiu aos lugares mais altos, levou consigo muitos prisioneiros",
          "role": "chamada"
        },
        {
          "text": "E deu dons às pessoas.",
          "role": "resposta"
        },
        {
          "text": "Ele escolheu alguns para serem apóstolos, outros para profetas, outros para evangelistas e ainda outros para pastores e mestres da Igreja;",
          "role": "chamada"
        },
        {
          "text": "A fim de construir o corpo de Cristo.",
          "role": "resposta"
        },
        {
          "text": "Portanto, vocês não são mais estrangeiros nem visitantes.",
          "role": "chamada"
        },
        {
          "text": "Agora vocês são membros da família dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Atos 9.15b",
      "linhas": [
        {
          "text": "Aleluia. Vá, pois eu escolhi esse homem para trabalhar para mim, a fim de que ele anuncie o meu nome aos não-judeus, aos reis e ao povo de Israel. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Tito, Pastor e Confessor": {
    "oracao": "Todo-poderoso Deus, que chamaste Tito para a obra de pastor e mestre, faze com que todos os pastores do teu rebanho sejam diligentes em pregar tua santa Palavra de modo que o mundo inteiro possa conhecer as riquezas sem fim de nosso Salvador Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Tito 3.4-5a",
      "linhas": [
        {
          "text": "Quando Deus, o nosso Salvador, mostrou a sua bondade e o seu amor por todos,",
          "role": "chamada"
        },
        {
          "text": "Ele nos salvou porque teve compaixão de nós, e não porque nós tivéssemos feito alguma coisa boa.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Quando Deus, o nosso Salvador, mostrou a sua bondade e o seu amor por todos,",
          "role": "chamada"
        },
        {
          "text": "Ele nos salvou porque teve compaixão de nós, e não porque nós tivéssemos feito alguma coisa boa.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Ezequiel 34.11,12b; Jeremias 23.4a,b",
      "linhas": [
        {
          "text": "Eu, o Senhor Deus, digo que eu mesmo procurarei e buscarei as minhas ovelhas;",
          "role": "chamada"
        },
        {
          "text": "E as trarei de volta de todos os lugares por onde foram espalhadas.",
          "role": "resposta"
        },
        {
          "text": "Eu lhes darei líderes que cuidarão deles.",
          "role": "chamada"
        },
        {
          "text": "Não ficarão mais com medo, nem apavorados, e nenhum deles se perderá.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Tito 2.11",
      "linhas": [
        {
          "text": "Aleluia. Pois Deus revelou a sua graça para dar a salvação a todos. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Purificação de Maria e a Apresentação do Senhor": {
    "oracao": "Deus todo-poderoso e sempre vivo, assim como neste dia o teu Filho unigênito foi apresentado no Templo na substância da sua carne, concede que possamos ser apresentados a ti com corações puros e limpos; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 48.1-3,8; antífona Salmo 48.9",
      "linhas": [
        {
          "text": "No teu Templo, ó Deus,",
          "role": "chamada"
        },
        {
          "text": "Ficamos pensando no teu amor.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus é grande e merece ser louvado na sua cidade,",
          "role": "chamada"
        },
        {
          "text": "Em Sião, o seu monte santo.",
          "role": "resposta"
        },
        {
          "text": "O monte de Deus é alto e bonito;",
          "role": "chamada"
        },
        {
          "text": "A cidade do grande Rei é a alegria do mundo inteiro.",
          "role": "resposta"
        },
        {
          "text": "Deus tem mostrado que ele dá segurança ao povo",
          "role": "chamada"
        },
        {
          "text": "Dentro das fortalezas da cidade.",
          "role": "resposta"
        },
        {
          "text": "Temos ouvido falar das coisas que o Senhor Deus tem feito e agora vimos o que aconteceu na cidade do nosso Deus, o Senhor Todo-Poderoso.",
          "role": "chamada"
        },
        {
          "text": "Ele guardará a cidade em segurança para sempre.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "No teu Templo, ó Deus,",
          "role": "chamada"
        },
        {
          "text": "Ficamos pensando no teu amor.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 48.1,8a,9",
      "linhas": [
        {
          "text": "O Senhor Deus é grande e merece ser louvado",
          "role": "chamada"
        },
        {
          "text": "Na sua cidade, em Sião, o seu monte santo.",
          "role": "resposta"
        },
        {
          "text": "Temos ouvido falar das coisas que o Senhor Deus tem feito e agora vimos",
          "role": "chamada"
        },
        {
          "text": "O que aconteceu na cidade do nosso Deus, o Senhor Todo-Poderoso.",
          "role": "resposta"
        },
        {
          "text": "No teu Templo, ó Deus,",
          "role": "chamada"
        },
        {
          "text": "Ficamos pensando no teu amor.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 2.34b",
      "linhas": [
        {
          "text": "Aleluia. Este menino foi escolhido por Deus tanto para a destruição como para a salvação de muita gente em Israel. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Matias, Apóstolo": {
    "oracao": "Todo-poderoso Deus, que escolheste teu servo Matias para ser contado entre os Doze, concede que tua Igreja, sempre preservada de falsos ensinamentos, possa ser ensinada e guiada por pastores fiéis e verdadeiros; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Efésios 4.8b,11,12b; 2.19a,c",
      "linhas": [
        {
          "text": "Quando ele subiu aos lugares mais altos, levou consigo muitos prisioneiros",
          "role": "chamada"
        },
        {
          "text": "E deu dons às pessoas.",
          "role": "resposta"
        },
        {
          "text": "Ele escolheu alguns para serem apóstolos, outros para profetas, outros para evangelistas e ainda outros para pastores e mestres da Igreja;",
          "role": "chamada"
        },
        {
          "text": "A fim de construir o corpo de Cristo.",
          "role": "resposta"
        },
        {
          "text": "Portanto, vocês não são mais estrangeiros nem visitantes.",
          "role": "chamada"
        },
        {
          "text": "Agora vocês são membros da família dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 11.28",
      "linhas": [
        {
          "text": "Aleluia. Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "José, Tutor de Jesus": {
    "oracao": "Todo-poderoso Deus, que da família de teu servo Davi fizeste nascer a José para ser o tutor de teu Filho encarnado e o marido de sua mãe, Maria, concede-nos a graça de seguir o exemplo deste trabalhador fiel em atender ao teu conselho e obedecer às tuas ordens; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 128.1",
      "linhas": [
        {
          "text": "Feliz aquele que teme a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "E vive de acordo com a sua vontade!",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Feliz aquele que teme a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "E vive de acordo com a sua vontade!",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 45.6-7b",
      "linhas": [
        {
          "text": "O reino que Deus lhe deu vai durar para sempre.",
          "role": "chamada"
        },
        {
          "text": "Ó rei, o senhor governa o seu povo com justiça,",
          "role": "resposta"
        },
        {
          "text": "Ama o bem e odeia o mal.",
          "role": "chamada"
        },
        {
          "text": "Foi por isso que Deus, o seu Deus, o escolheu e deu mais felicidade ao senhor do que a qualquer outro rei.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 1.24a",
      "linhas": [
        {
          "text": "Quando José acordou, fez o que o anjo do Senhor havia mandado e casou com Maria.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Anunciação do Senhor": {
    "oracao": "Ó Senhor, assim como conhecemos a encarnação de teu Filho, Jesus Cristo, pela mensagem do anjo à virgem Maria, assim também, pela mensagem de sua cruz e sofrimento, traze-nos à glória de sua ressurreição; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 34.1-3; antífona Isaías 62.11b",
      "linhas": [
        {
          "text": "Digam ao povo de Jerusalém",
          "role": "chamada"
        },
        {
          "text": "Que o seu Salvador está chegando.",
          "role": "resposta"
        },
        {
          "text": "Eu sempre darei graças a Deus, o Senhor;",
          "role": "chamada"
        },
        {
          "text": "O seu louvor estará nos meus lábios o dia inteiro.",
          "role": "resposta"
        },
        {
          "text": "Eu o louvarei por causa das coisas que ele tem feito;",
          "role": "chamada"
        },
        {
          "text": "Os que são perseguidos ouvirão isso e se alegrarão.",
          "role": "resposta"
        },
        {
          "text": "Anunciem comigo a sua grandeza;",
          "role": "chamada"
        },
        {
          "text": "Louvemos juntos o Senhor.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Digam ao povo de Jerusalém",
          "role": "chamada"
        },
        {
          "text": "Que o seu Salvador está chegando.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 45.6-7b",
      "linhas": [
        {
          "text": "O reino que Deus lhe deu vai durar para sempre.",
          "role": "chamada"
        },
        {
          "text": "Ó rei, o senhor governa o seu povo com justiça,",
          "role": "resposta"
        },
        {
          "text": "Ama o bem e odeia o mal.",
          "role": "chamada"
        },
        {
          "text": "Foi por isso que Deus, o seu Deus, o escolheu e deu mais felicidade ao senhor do que a qualquer outro rei.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 1.38a",
      "linhas": [
        {
          "text": "Aleluia. Eu sou uma serva de Deus; que aconteça comigo o que o senhor acabou de me dizer! Aleluia.",
          "role": "chamada"
        },
        {
          "text": "Durante a Quaresma:",
          "role": "chamada"
        }
      ]
    }
  },
  "Marcos, Evangelista": {
    "oracao": "Todo-poderoso Deus, que enriqueceste a tua Igreja com a proclamação do Evangelho através do evangelista Marcos, concede que possamos crer com firmeza nestas notícias agradáveis e diariamente andar de acordo com esta Palavra; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 92.1-5; antífona Marcos 16.15",
      "linhas": [
        {
          "text": "Vão pelo mundo inteiro",
          "role": "chamada"
        },
        {
          "text": "E anunciem o evangelho a todas as pessoas.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, como é bom dar-te graças!",
          "role": "chamada"
        },
        {
          "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
          "role": "resposta"
        },
        {
          "text": "Como é bom anunciar de manhã o teu amor",
          "role": "chamada"
        },
        {
          "text": "E de noite, a tua fidelidade,",
          "role": "resposta"
        },
        {
          "text": "Com a música de uma harpa de dez cordas",
          "role": "chamada"
        },
        {
          "text": "E ao som da lira!",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, os teus feitos poderosos me tornam feliz!",
          "role": "chamada"
        },
        {
          "text": "Eu canto de alegria pelas coisas que fazes.",
          "role": "resposta"
        },
        {
          "text": "Que grandes coisas tens feito, ó Senhor!",
          "role": "chamada"
        },
        {
          "text": "Como é difícil entender os teus pensamentos!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Vão pelo mundo inteiro",
          "role": "chamada"
        },
        {
          "text": "E anunciem o evangelho a todas as pessoas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 119.105,103; 45.1a,c",
      "linhas": [
        {
          "text": "A tua palavra é lâmpada para guiar os meus passos,",
          "role": "chamada"
        },
        {
          "text": "É luz que ilumina o meu caminho.",
          "role": "resposta"
        },
        {
          "text": "Como são doces as tuas palavras!",
          "role": "chamada"
        },
        {
          "text": "São mais doces do que o mel.",
          "role": "resposta"
        },
        {
          "text": "Lindas palavras enchem o meu coração;",
          "role": "chamada"
        },
        {
          "text": "A minha língua é como a pena de um bom escritor.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Marcos 1.15",
      "linhas": [
        {
          "text": "Aleluia. Chegou a hora, e o Reino de Deus está perto. Arrependam-se dos seus pecados e creiam no evangelho. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Filipe e Tiago, Apóstolos": {
    "oracao": "Todo-poderoso Deus, teu Filho revelou-se a Filipe e a Tiago e lhes deu o conhecimento da vida eterna. Concede-nos conhecer perfeitamente a teu Filho Jesus Cristo como o caminho, a verdade e a vida, e com firmeza andar no caminho que leva à vida eterna; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 14.6",
      "linhas": [
        {
          "text": "Aleluia. Eu sou o caminho, a verdade e a vida; ninguém pode chegar até o",
          "role": "chamada"
        },
        {
          "text": "Pai a não ser por mim. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Visitação": {
    "oracao": "Todo-poderoso Deus, que escolheste a virgem Maria para ser a mãe de teu Filho e através dela tornaste conhecida a graciosa recompensa para os pobres, humildes e desprezados, concede que recebamos tua Palavra com humildade e fé, e assim sejamos feitos um com Jesus, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "1 Samuel 2.1-2,7-8; antífona Lucas 1.46b-47",
      "linhas": [
        {
          "text": "A minha alma anuncia a grandeza do Senhor.",
          "role": "chamada"
        },
        {
          "text": "O meu espírito está alegre por causa de Deus, o meu Salvador.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus encheu o meu coração de alegria; por causa do que ele fez, eu ando de cabeça erguida.",
          "role": "chamada"
        },
        {
          "text": "Estou rindo dos meus inimigos e me sinto feliz, pois Deus me ajudou.",
          "role": "resposta"
        },
        {
          "text": "Ninguém é santo como o Senhor; não existe outro deus além dele,",
          "role": "chamada"
        },
        {
          "text": "E não há nenhum protetor como o nosso Deus.",
          "role": "resposta"
        },
        {
          "text": "Ele faz com que alguns fiquem pobres e outros, ricos;",
          "role": "chamada"
        },
        {
          "text": "Rebaixa uns e eleva outros.",
          "role": "resposta"
        },
        {
          "text": "Deus levanta os pobres do pó e tira da miséria os necessitados.",
          "role": "chamada"
        },
        {
          "text": "Ele faz com que os pobres sejam companheiros dos príncipes e os põe em lugares de honra.",
          "role": "resposta"
        },
        {
          "text": "Os alicerces da terra são de Deus, o Senhor;",
          "role": "chamada"
        },
        {
          "text": "Ele construiu o mundo sobre eles.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "A minha alma anuncia a grandeza do Senhor.",
          "role": "chamada"
        },
        {
          "text": "O meu espírito está alegre por causa de Deus, o meu Salvador.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 103.2; 105.5; 100.4",
      "linhas": [
        {
          "text": "Que todo o meu ser louve o Senhor,",
          "role": "chamada"
        },
        {
          "text": "E que eu não esqueça nenhuma das suas bênçãos!",
          "role": "resposta"
        },
        {
          "text": "Lembrem de tudo o que Deus tem feito,",
          "role": "chamada"
        },
        {
          "text": "Lembrem dos seus grandes e maravilhosos milagres e de como tem condenado os nossos inimigos!",
          "role": "resposta"
        },
        {
          "text": "Entrem pelos portões do Templo com ações de graças, entrem nos seus pátios com louvor.",
          "role": "chamada"
        },
        {
          "text": "Louvem a Deus e sejam agradecidos a ele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 1.45",
      "linhas": [
        {
          "text": "Aleluia. Você é abençoada, pois acredita que vai acontecer o que o Senhor lhe disse. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Barnabé, Apóstolo": {
    "oracao": "Todo-poderoso Deus, teu servo fiel Barnabé não procurou sua própria fama, mas dedicou generosamente sua vida e propriedades para o encorajamento dos apóstolos e do ministério deles. Concede que possamos seguir seu exemplo com vidas dedicadas à caridade e à proclamação do Evangelho; através de teu Filho, Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 135.1-3; antífona Salmo 135.13",
      "linhas": [
        {
          "text": "Ó Senhor, todos sempre saberão que tu és Deus;",
          "role": "chamada"
        },
        {
          "text": "Todas as gerações futuras lembrarão de ti.",
          "role": "resposta"
        },
        {
          "text": "Aleluia! Louvem a Deus, o Senhor,",
          "role": "chamada"
        },
        {
          "text": "Vocês que são seus servos,",
          "role": "resposta"
        },
        {
          "text": "Vocês que estão na casa dele,",
          "role": "chamada"
        },
        {
          "text": "No Templo do nosso Deus!",
          "role": "resposta"
        },
        {
          "text": "Louvem o Senhor porque ele é bom;",
          "role": "chamada"
        },
        {
          "text": "Cantem louvores a ele porque é bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor, todos sempre saberão que tu és Deus;",
          "role": "chamada"
        },
        {
          "text": "Todas as gerações futuras lembrarão de ti.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Efésios 4.8b,11,12b; 2.19a,c",
      "linhas": [
        {
          "text": "Quando ele subiu aos lugares mais altos, levou consigo muitos prisioneiros",
          "role": "chamada"
        },
        {
          "text": "E deu dons às pessoas.",
          "role": "resposta"
        },
        {
          "text": "Ele escolheu alguns para serem apóstolos, outros para profetas, outros para evangelistas e ainda outros para pastores e mestres da Igreja;",
          "role": "chamada"
        },
        {
          "text": "A fim de construir o corpo de Cristo.",
          "role": "resposta"
        },
        {
          "text": "Portanto, vocês não são mais estrangeiros nem visitantes.",
          "role": "chamada"
        },
        {
          "text": "Agora vocês são membros da família dele.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Marcos 6.12",
      "linhas": [
        {
          "text": "Aleluia. Então os discípulos foram e anunciaram que todos deviam se arrepender dos seus pecados. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "O Nascimento de João Batista": {
    "oracao": "Todo-poderoso Deus, que proclamaste a salvação através de João Batista, o precursor de Cristo, concede agora que conheçamos esta salvação e te sirvamos com santidade e justiça todos os dias de nossa vida; através de nosso Senhor Jesus Cristo, teu Filho, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Lucas 1.68,76-79; antífona Malaquias 3.1",
      "linhas": [
        {
          "text": "Eu enviarei o meu mensageiro para preparar o meu caminho.",
          "role": "chamada"
        },
        {
          "text": "E o Senhor a quem vocês estão procurando vai chegar de repente ao seu Templo.",
          "role": "resposta"
        },
        {
          "text": "Louvemos o Senhor, o Deus de Israel,",
          "role": "chamada"
        },
        {
          "text": "Pois ele veio ajudar o seu povo e lhe dar a liberdade.",
          "role": "resposta"
        },
        {
          "text": "E você, menino, será chamado de profeta do Deus Altíssimo",
          "role": "chamada"
        },
        {
          "text": "E irá adiante do Senhor a fim de preparar o caminho para ele.",
          "role": "resposta"
        },
        {
          "text": "Você anunciará ao povo de Deus a salvação",
          "role": "chamada"
        },
        {
          "text": "Que virá por meio do perdão dos pecados deles.",
          "role": "resposta"
        },
        {
          "text": "Pois o nosso Deus é misericordioso e bondoso.",
          "role": "chamada"
        },
        {
          "text": "Ele fará brilhar sobre nós a sua luz",
          "role": "resposta"
        },
        {
          "text": "E do céu iluminará todos os que vivem na escuridão da sombra da morte,",
          "role": "chamada"
        },
        {
          "text": "Para guiar os nossos passos no caminho da paz.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Eu enviarei o meu mensageiro para preparar o meu caminho.",
          "role": "chamada"
        },
        {
          "text": "E o Senhor a quem vocês estão procurando vai chegar de repente ao seu Templo.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Jeremias 1.5,9b",
      "linhas": [
        {
          "text": "Antes do seu nascimento, quando você ainda estava na barriga da sua mãe,",
          "role": "chamada"
        },
        {
          "text": "Eu o escolhi",
          "role": "resposta"
        },
        {
          "text": "E separei para que você fosse um profeta para as nações.",
          "role": "chamada"
        },
        {
          "text": "Eu estou lhe dando a mensagem que você deve anunciar.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 1.17a,c",
      "linhas": [
        {
          "text": "Aleluia. Ele será mandado por Deus como mensageiro e será forte e poderoso como o profeta Elias. E conseguirá preparar o povo de Israel para a vinda do Senhor. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Pedro e Paulo, Apóstolos": {
    "oracao": "Misericordioso e eterno Deus, teus santos apóstolos Pedro e Paulo receberam graça e força para sacrificar suas vidas em favor de teu Filho. Fortalece-nos pelo teu Espírito Santo para que possamos confessar tua verdade e estarmos sempre prontos a sacrificar nossas vidas por aquele que sacrificou sua vida por nós, o próprio Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 16.18b",
      "linhas": [
        {
          "text": "Aleluia. Sobre esta pedra construirei a minha Igreja, e nem a morte poderá vencê-la. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Maria Madalena": {
    "oracao": "Todo-poderoso Deus, teu Filho Jesus Cristo restaurou a saúde de Maria Madalena e a chamou para ser a primeira testemunha de sua ressurreição. Cura-nos de todas as nossas enfermidades e nos chama para conhecermos a ti no poder da vida sem fim de teu Filho; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 30.1a,2-3,12b; antífona Salmo 31.1a",
      "linhas": [
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção;",
          "role": "chamada"
        },
        {
          "text": "Livra-me da vergonha de ser derrotado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu te louvo",
          "role": "chamada"
        },
        {
          "text": "Porque me socorreste.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, meu Deus, eu gritei pedindo ajuda,",
          "role": "chamada"
        },
        {
          "text": "E tu me curaste,",
          "role": "resposta"
        },
        {
          "text": "Tu me salvaste da morte.",
          "role": "chamada"
        },
        {
          "text": "Eu estava entre aqueles que iam para o mundo dos mortos, mas tu me fizeste viver novamente.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, tu és o meu Deus;",
          "role": "chamada"
        },
        {
          "text": "Eu te darei graças para sempre.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção;",
          "role": "chamada"
        },
        {
          "text": "Livra-me da vergonha de ser derrotado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 45.10; João 10.11b,10b,3b,16c",
      "linhas": [
        {
          "text": "Ó noiva do rei, escute o meu conselho:",
          "role": "chamada"
        },
        {
          "text": "Esqueça o seu povo e os seus parentes.",
          "role": "resposta"
        },
        {
          "text": "O bom pastor dá a vida pelas ovelhas,",
          "role": "chamada"
        },
        {
          "text": "Para que as ovelhas tenham vida, a vida completa.",
          "role": "resposta"
        },
        {
          "text": "As ovelhas reconhecem a sua voz quando ele as chama pelo nome,",
          "role": "chamada"
        },
        {
          "text": "Então elas se tornarão um só rebanho com um só pastor.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 20.18a",
      "linhas": [
        {
          "text": "Aleluia. Maria Madalena foi e disse aos discípulos de Jesus: Eu vi o Senhor!",
          "role": "chamada"
        },
        {
          "text": "Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Tiago, o Maior, Apóstolo": {
    "oracao": "Ó gracioso Deus, teu servo e apóstolo Tiago foi o primeiro entre os Doze a sofrer o martírio em nome de Jesus Cristo. Derrama sobre os líderes da tua Igreja este espírito de serviço abnegado para que possamos esquecer todas as atrações falsas e passageiras e seguir somente a Jesus, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Marcos 10.45",
      "linhas": [
        {
          "text": "Aleluia. Até o Filho do Homem não veio para ser servido, mas para servir e dar a sua vida para salvar muita gente. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Maria, Mãe do Senhor": {
    "oracao": "Todo-poderoso Deus, que escolheste a virgem Maria para ser a mãe de teu único Filho, concede que nós, que somos redimidos pelo sangue dele, tomemos parte com ela na glória de teu reino eterno; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 34.2-5; antífona Salmo 34.1",
      "linhas": [
        {
          "text": "Eu sempre darei graças a Deus, o Senhor;",
          "role": "chamada"
        },
        {
          "text": "O seu louvor estará nos meus lábios o dia inteiro.",
          "role": "resposta"
        },
        {
          "text": "Eu o louvarei por causa das coisas que ele tem feito;",
          "role": "chamada"
        },
        {
          "text": "Os que são perseguidos ouvirão isso e se alegrarão.",
          "role": "resposta"
        },
        {
          "text": "Anunciem comigo a sua grandeza;",
          "role": "chamada"
        },
        {
          "text": "Louvemos juntos o Senhor.",
          "role": "resposta"
        },
        {
          "text": "Eu pedi a ajuda do Senhor, e ele me respondeu;",
          "role": "chamada"
        },
        {
          "text": "Ele me livrou de todos os meus medos.",
          "role": "resposta"
        },
        {
          "text": "Os que são perseguidos olham para ele e se alegram;",
          "role": "chamada"
        },
        {
          "text": "Eles nunca ficarão desapontados.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Eu sempre darei graças a Deus, o Senhor;",
          "role": "chamada"
        },
        {
          "text": "O seu louvor estará nos meus lábios o dia inteiro.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 45.13-14",
      "linhas": [
        {
          "text": "A princesa está no palácio – e como é linda!",
          "role": "chamada"
        },
        {
          "text": "O seu vestido é feito de fios de ouro.",
          "role": "resposta"
        },
        {
          "text": "Vestida de roupas coloridas e acompanhada pelas suas damas de honra,",
          "role": "chamada"
        },
        {
          "text": "Ela é levada até o rei.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 1.47",
      "linhas": [
        {
          "text": "Aleluia. A minha alma anuncia a grandeza do Senhor. O meu espírito está alegre por causa de Deus, o meu Salvador. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Bartolomeu, Apóstolo": {
    "oracao": "Todo-poderoso Deus, teu Filho Jesus Cristo escolheu Bartolomeu para ser um apóstolo para pregar o abençoado Evangelho. Concede que tua Igreja possa amar o que ele creu e pregar o que ele ensinou; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 22.26b,27d",
      "linhas": [
        {
          "text": "Aleluia. O mais importante deve ser como o menos importante; e o que manda deve ser como o que é mandado. Entre vocês eu sou como aquele que serve.",
          "role": "chamada"
        },
        {
          "text": "Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "O Martírio de João Batista": {
    "oracao": "Todo-poderoso Deus, que enviaste teu servo João Batista para ser o precursor de teu Filho Jesus Cristo, tanto em sua pregação de arrependimento como em sua inocente morte, concede que nós, que morremos e ressuscitamos com Cristo no santo Batismo, possamos diariamente nos arrepender de nossos pecados, pacientemente sofrer por causa da verdade e sem medo sermos testemunhas de sua vitória sobre a morte; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 31.1,3,5; antífona Apocalipse 7.14b",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção; livra-me da vergonha de ser derrotado.",
          "role": "chamada"
        },
        {
          "text": "Tu és justo; eu te peço que me ajudes.",
          "role": "resposta"
        },
        {
          "text": "Tu és a minha rocha e a minha fortaleza;",
          "role": "chamada"
        },
        {
          "text": "Guia-me e orienta-me como prometeste.",
          "role": "resposta"
        },
        {
          "text": "Nas tuas mãos entrego a minha vida.",
          "role": "chamada"
        },
        {
          "text": "Tu me salvarás, ó Senhor, porque tu és Deus fiel.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 116.15",
      "linhas": [
        {
          "text": "Aleluia. O Senhor Deus sente pesar quando vê morrerem os que são fiéis a ele. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Dia da Santa Cruz": {
    "oracao": "Misericordioso Deus, teu Filho Jesus Cristo foi crucificado para levar sobre si os pecados do mundo e atrair a si todas as pessoas. Faze com que nós, que nos gloriamos na sua morte pela nossa redenção, possamos com fidelidade atender ao seu chamado para tomar a cruz e seguir aquele que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 98.1,4,6; antífona Salmo 98.2",
      "linhas": [
        {
          "text": "O Senhor anunciou a sua vitória;",
          "role": "chamada"
        },
        {
          "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
          "role": "resposta"
        },
        {
          "text": "Cantem uma nova canção a Deus, o Senhor, pois ele tem feito coisas maravilhosas.",
          "role": "chamada"
        },
        {
          "text": "Com a sua força e com o seu santo poder, ele se tornou vitorioso.",
          "role": "resposta"
        },
        {
          "text": "Cantem ao Senhor com alegria, povos de toda a terra!",
          "role": "chamada"
        },
        {
          "text": "Louvem o Senhor com canções e gritos de alegria.",
          "role": "resposta"
        },
        {
          "text": "Ao som de trombetas e cornetas,",
          "role": "chamada"
        },
        {
          "text": "Cantem com alegria diante do Senhor, o Rei.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "O Senhor anunciou a sua vitória;",
          "role": "chamada"
        },
        {
          "text": "Ele fez com que as nações conhecessem o seu poder salvador.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Isaías 49.22a; João 3.14b-15",
      "linhas": [
        {
          "text": "Levantarei a mão [, diz o Senhor Deus,]",
          "role": "chamada"
        },
        {
          "text": "E darei um sinal de comando aos povos.",
          "role": "resposta"
        },
        {
          "text": "Assim também o Filho do Homem tem de ser levantado,",
          "role": "chamada"
        },
        {
          "text": "Para que todos os que crerem nele tenham a vida eterna.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Gálatas 6.14",
      "linhas": [
        {
          "text": "Aleluia. Eu me orgulharei somente da cruz do nosso Senhor Jesus Cristo.",
          "role": "chamada"
        },
        {
          "text": "Pois, por meio da cruz, o mundo está morto para mim, e eu estou morto para o mundo. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Mateus, Apóstolo e Evangelista": {
    "oracao": "Ó Filho de Deus, nosso bendito Salvador Jesus Cristo, que chamaste o cobrador de impostos Mateus para ser um apóstolo e evangelista, concede que, através de seu testemunho fiel e inspirado, possamos também te seguir, deixando para trás todos os desejos cobiçosos e o amor à riqueza; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 92.1-5; antífona Mateus 9.13b,c",
      "linhas": [
        {
          "text": "Eu quero que as pessoas sejam bondosas e não que me ofereçam sacrifícios de animais.",
          "role": "chamada"
        },
        {
          "text": "Porque eu vim para chamar os pecadores e não os bons.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, como é bom dar-te graças!",
          "role": "chamada"
        },
        {
          "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
          "role": "resposta"
        },
        {
          "text": "Como é bom anunciar de manhã o teu amor",
          "role": "chamada"
        },
        {
          "text": "E de noite, a tua fidelidade,",
          "role": "resposta"
        },
        {
          "text": "Com a música de uma harpa de dez cordas",
          "role": "chamada"
        },
        {
          "text": "E ao som da lira!",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, os teus feitos poderosos me tornam feliz!",
          "role": "chamada"
        },
        {
          "text": "Eu canto de alegria pelas coisas que fazes.",
          "role": "resposta"
        },
        {
          "text": "Que grandes coisas tens feito, ó Senhor!",
          "role": "chamada"
        },
        {
          "text": "Como é difícil entender os teus pensamentos!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Eu quero que as pessoas sejam bondosas e não que me ofereçam sacrifícios de animais.",
          "role": "chamada"
        },
        {
          "text": "Porque eu vim para chamar os pecadores e não os bons.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 119.105,103; 45.1a,c",
      "linhas": [
        {
          "text": "A tua palavra é lâmpada para guiar os meus passos,",
          "role": "chamada"
        },
        {
          "text": "É luz que ilumina o meu caminho.",
          "role": "resposta"
        },
        {
          "text": "Como são doces as tuas palavras!",
          "role": "chamada"
        },
        {
          "text": "São mais doces do que o mel.",
          "role": "resposta"
        },
        {
          "text": "Lindas palavras enchem o meu coração.",
          "role": "chamada"
        },
        {
          "text": "A minha língua é como a pena de um bom escritor.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Mateus 28.19a,20b",
      "linhas": [
        {
          "text": "Aleluia. Vão a todos os povos do mundo e façam com que sejam meus seguidores. E lembrem disto: eu estou com vocês todos os dias, até o fim dos tempos. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "São Miguel e Todos os Anjos": {
    "oracao": "Deus eterno, que ordenaste e constituíste o serviço dos anjos e dos homens de modo maravilhoso, concede misericordiosamente que, assim como teus santos anjos sempre te servem e adoram nos céus, da mesma maneira eles possam nos ajudar e defender aqui na terra, de acordo com a tua orientação; através de teu Filho Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 103.20-22; antífona Salmo 103.1",
      "linhas": [
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        },
        {
          "text": "Louvem o Senhor, fortes e poderosos anjos,",
          "role": "chamada"
        },
        {
          "text": "Que ouvem o que ele diz, que obedecem aos seus mandamentos!",
          "role": "resposta"
        },
        {
          "text": "Louvem o Senhor, todos os anjos do céu,",
          "role": "chamada"
        },
        {
          "text": "Todos os seus servos, que fazem a sua vontade!",
          "role": "resposta"
        },
        {
          "text": "Louvem o Senhor, todas as suas criaturas, em todo lugar onde ele reina!",
          "role": "chamada"
        },
        {
          "text": "Que todo o meu ser te louve, ó Senhor!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 91.11; 103.1",
      "linhas": [
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Apocalipse 12.11",
      "linhas": [
        {
          "text": "Aleluia. Os nossos irmãos o derrotaram por meio do sangue do Cordeiro e da mensagem que anunciaram. Eles estavam prontos para dar a sua vida e morrer. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Lucas, Evangelista": {
    "oracao": "Todo-poderoso Deus, nosso Pai, teu bendito Filho chamou o médico Lucas para ser um evangelista e médico das almas. Concede que a medicina curativa do Evangelho e dos sacramentos possa afastar as doenças de nossas almas a fim de que possamos sempre te amar e servir com corações voluntários; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 92.1-5; antífona Lucas 24.46-47",
      "linhas": [
        {
          "text": "O que está escrito é que o Messias tinha de sofrer e no terceiro dia ressuscitar.",
          "role": "chamada"
        },
        {
          "text": "E que, em nome dele, a mensagem sobre o arrependimento e o perdão dos pecados seria anunciada a todas as nações, começando em",
          "role": "resposta"
        },
        {
          "text": "Jerusalém.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, como é bom dar-te graças!",
          "role": "chamada"
        },
        {
          "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
          "role": "resposta"
        },
        {
          "text": "Como é bom anunciar de manhã o teu amor",
          "role": "chamada"
        },
        {
          "text": "E de noite, a tua fidelidade,",
          "role": "resposta"
        },
        {
          "text": "Com a música de uma harpa de dez cordas",
          "role": "chamada"
        },
        {
          "text": "E ao som da lira!",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, os teus feitos poderosos me tornam feliz!",
          "role": "chamada"
        },
        {
          "text": "Eu canto de alegria pelas coisas que fazes.",
          "role": "resposta"
        },
        {
          "text": "Que grandes coisas tens feito, ó Senhor!",
          "role": "chamada"
        },
        {
          "text": "Como é difícil entender os teus pensamentos!",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "O que está escrito é que o Messias tinha de sofrer e no terceiro dia ressuscitar.",
          "role": "chamada"
        },
        {
          "text": "E que, em nome dele, a mensagem sobre o arrependimento e o perdão dos pecados seria anunciada a todas as nações, começando em",
          "role": "resposta"
        },
        {
          "text": "Jerusalém.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 119.105,103; 45.1a,c",
      "linhas": [
        {
          "text": "A tua palavra é lâmpada para guiar os meus passos,",
          "role": "chamada"
        },
        {
          "text": "É luz que ilumina o meu caminho.",
          "role": "resposta"
        },
        {
          "text": "Como são doces as tuas palavras!",
          "role": "chamada"
        },
        {
          "text": "São mais doces do que o mel.",
          "role": "resposta"
        },
        {
          "text": "Lindas palavras enchem o meu coração.",
          "role": "chamada"
        },
        {
          "text": "A minha língua é como a pena de um bom escritor.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 19.9b,10",
      "linhas": [
        {
          "text": "Aleluia. Hoje a salvação entrou nesta casa, pois este homem também é descendente de Abraão. Porque o Filho do Homem veio buscar e salvar quem está perdido. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Tiago de Jerusalém, Irmão de Jesus e Mártir": {
    "oracao": "Pai celestial, pastor do teu povo, que fortaleceste Tiago, o Justo, irmão de nosso Senhor, para dirigir e guiar a tua Igreja, concede que possamos seguir o seu exemplo de oração e reconciliação e sejamos fortalecidos pelo testemunho de sua morte; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 31.1,3,5; antífona Apocalipse 7.14b",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção; livra-me da vergonha de ser derrotado.",
          "role": "chamada"
        },
        {
          "text": "Tu és justo; eu te peço que me ajudes.",
          "role": "resposta"
        },
        {
          "text": "Tu és a minha rocha e a minha fortaleza;",
          "role": "chamada"
        },
        {
          "text": "Guia-me e orienta-me como prometeste.",
          "role": "resposta"
        },
        {
          "text": "Nas tuas mãos entrego a minha vida.",
          "role": "chamada"
        },
        {
          "text": "Tu me salvarás, ó Senhor, porque tu és Deus fiel.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 48.10-11",
      "linhas": [
        {
          "text": "Tu és louvado por todos os povos, e a tua fama se espalha pelo mundo inteiro,",
          "role": "chamada"
        },
        {
          "text": "Pois tu governas com justiça.",
          "role": "resposta"
        },
        {
          "text": "Alegre-se, povo de Jerusalém!",
          "role": "chamada"
        },
        {
          "text": "Ó Deus, os teus julgamentos são justos! Alegrem-se com isso, moradores das cidades de Judá!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Salmo 116.15",
      "linhas": [
        {
          "text": "Aleluia. O Senhor Deus sente pesar quando vê morrerem os que são fiéis a ele. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Simão e Judas, Apóstolos": {
    "oracao": "Todo-poderoso Deus, tu escolheste teus servos Simão e Judas para serem contados entre a gloriosa companhia dos apóstolos. Da mesma maneira que eles foram fiéis e zelosos em sua missão, que assim nós possamos, com ardente devoção, tornar conhecidos o amor e a misericórdia de nosso Senhor e Salvador Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 89.1,5,15-16; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
          "role": "chamada"
        },
        {
          "text": "E anunciarei a tua fidelidade a todas as gerações.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor, os céus cantam as maravilhas que fazes,",
          "role": "chamada"
        },
        {
          "text": "E, reunidos, os anjos cantam a tua fidelidade.",
          "role": "resposta"
        },
        {
          "text": "Feliz o povo que te adora com canções",
          "role": "chamada"
        },
        {
          "text": "E que vive na luz da tua presença!",
          "role": "resposta"
        },
        {
          "text": "Por causa de ti, eles se alegram o dia todo",
          "role": "chamada"
        },
        {
          "text": "E te louvam porque és bondoso.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Romanos 10.15b; Isaías 52.7b; Romanos 10.18b",
      "linhas": [
        {
          "text": "Como é bonito ver os mensageiros trazendo boas notícias!",
          "role": "chamada"
        },
        {
          "text": "Trazendo notícias de paz, boas notícias de salvação!",
          "role": "resposta"
        },
        {
          "text": "A voz deles se espalhou pelo mundo inteiro;",
          "role": "chamada"
        },
        {
          "text": "As suas palavras alcançaram a terra toda.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "João 15.16a",
      "linhas": [
        {
          "text": "Aleluia. Não foram vocês que me escolheram; pelo contrário, fui eu que os escolhi. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Dia da Reforma": {
    "oracao": "Todo-poderoso e gracioso Deus, derrama o teu Espírito Santo sobre o teu povo fiel. Mantém-nos firmes em tua graça e verdade, protege e salva-nos nas horas de tentação, defende-nos contra todos os inimigos e concede à tua Igreja a tua paz salvadora; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 34.1-2,11,22; antífona Salmo 119.46",
      "linhas": [
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        },
        {
          "text": "Eu sempre darei graças a Deus, o Senhor;",
          "role": "chamada"
        },
        {
          "text": "O seu louvor estará nos meus lábios o dia inteiro.",
          "role": "resposta"
        },
        {
          "text": "Eu o louvarei por causa das coisas que ele tem feito;",
          "role": "chamada"
        },
        {
          "text": "Os que são perseguidos ouvirão isso e se alegrarão.",
          "role": "resposta"
        },
        {
          "text": "Venham, meus jovens amigos, e escutem,",
          "role": "chamada"
        },
        {
          "text": "Que eu os ensinarei a temer a Deus, o Senhor.",
          "role": "resposta"
        },
        {
          "text": "O Senhor Deus salva a vida dos seus servos;",
          "role": "chamada"
        },
        {
          "text": "Aqueles que procuram a sua proteção não serão condenados.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Anunciarei aos reis as tuas ordens [, ó Senhor,]",
          "role": "chamada"
        },
        {
          "text": "E não ficarei envergonhado.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Salmo 48.1a,12-14a",
      "linhas": [
        {
          "text": "O Senhor Deus é grande",
          "role": "chamada"
        },
        {
          "text": "E merece ser louvado na sua cidade,",
          "role": "resposta"
        },
        {
          "text": "Povo de Deus, ande em volta de Jerusalém e conte as suas torres!",
          "role": "chamada"
        },
        {
          "text": "Olhem todos com atenção as suas muralhas e examinem as suas fortalezas.",
          "role": "resposta"
        },
        {
          "text": "Assim vocês poderão dizer aos seus descendentes:",
          "role": "chamada"
        },
        {
          "text": "Este Deus é o nosso Deus para sempre.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Lucas 12.32",
      "linhas": [
        {
          "text": "Aleluia. Meu pequeno rebanho, não tenha medo! Pois o Pai tem prazer em dar o Reino a vocês. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Dia de Todos os Santos": {
    "oracao": "Todo-poderoso e eterno Deus, que uniste o teu povo fiel de todos os tempos e lugares em uma santa comunhão, o corpo místico de teu Filho Jesus Cristo, concede que possamos seguir teus santos abençoados em sua maneira virtuosa e cristã de viver, a fim de que, junto com eles, possamos alcançar as incontáveis alegrias que preparaste para aqueles que te amam; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 31.1,3,5; antífona Apocalipse 7.14b",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, em ti eu busco proteção; livra-me da vergonha de ser derrotado.",
          "role": "chamada"
        },
        {
          "text": "Tu és justo; eu te peço que me ajudes.",
          "role": "resposta"
        },
        {
          "text": "Tu és a minha rocha e a minha fortaleza;",
          "role": "chamada"
        },
        {
          "text": "Guia-me e orienta-me como prometeste.",
          "role": "resposta"
        },
        {
          "text": "Nas tuas mãos entrego a minha vida.",
          "role": "chamada"
        },
        {
          "text": "Tu me salvarás, ó Senhor, porque tu és Deus fiel.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "Apocalipse 7.14b; Salmo 84.5",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Felizes são aqueles que de ti recebem forças",
          "role": "chamada"
        },
        {
          "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Hebreus 12.1a,2a",
      "linhas": [
        {
          "text": "Aleluia. Assim nós temos essa grande multidão de testemunhas ao nosso redor. Conservemos os nossos olhos fixos em Jesus, pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa. Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Dia de Finados": {
    "oracao": "Todo-poderoso Deus, contigo estão todos os que adormeceram confiando em ti e nas tuas promessas em Cristo, pois agora descansam aliviados da carga do pecado. Agradecemos-te pela tua presença amorosa na vida de todos aqueles que perseveraram na fé até o fim e pedimos que permitas que os nossos caminhos e os daqueles que já partiram se encontrem na mansão que preparaste para os que confiam em teu Filho Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 116.1-2; 111.4; 39.4a; antífona Salmo 116.15",
      "linhas": [
        {
          "text": "O Senhor Deus sente pesar",
          "role": "chamada"
        },
        {
          "text": "Quando vê morrerem os que são fiéis a ele.",
          "role": "resposta"
        },
        {
          "text": "Eu amo a Deus, o Senhor, porque ele me ouve;",
          "role": "chamada"
        },
        {
          "text": "Ele escuta as minhas orações.",
          "role": "resposta"
        },
        {
          "text": "Ele me ouve",
          "role": "chamada"
        },
        {
          "text": "Sempre que eu clamo pedindo socorro.",
          "role": "resposta"
        },
        {
          "text": "O Senhor não nos deixa esquecer dos seus feitos maravilhosos;",
          "role": "chamada"
        },
        {
          "text": "Ele é bom e tem muita misericórdia.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, quanto tempo ainda vou viver?",
          "role": "chamada"
        },
        {
          "text": "Mostra-me como é passageira a minha vida.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "O Senhor Deus sente pesar",
          "role": "chamada"
        },
        {
          "text": "Quando vê morrerem os que são fiéis a ele.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "ref": "João 8.12b; Apocalipse 22.17a,20",
      "linhas": [
        {
          "text": "Eu sou a luz do mundo;",
          "role": "chamada"
        },
        {
          "text": "Quem me segue nunca andará na escuridão, mas terá a luz da vida.",
          "role": "resposta"
        },
        {
          "text": "O Espírito e a Noiva dizem: Venha!",
          "role": "chamada"
        },
        {
          "text": "Aquele que ouve isso diga também: Venha!",
          "role": "resposta"
        },
        {
          "text": "Aquele que dá testemunho de tudo isso diz: Certamente venho logo!",
          "role": "chamada"
        },
        {
          "text": "Amém! Vem, Senhor Jesus!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "ref": "Apocalipse 14.13b,4a,c",
      "linhas": [
        {
          "text": "Aleluia. Felizes as pessoas que desde agora morrem no serviço do Senhor!",
          "role": "chamada"
        },
        {
          "text": "Eram os que se conservaram puros [... e] seguem o Cordeiro aonde ele vai.",
          "role": "chamada"
        },
        {
          "text": "Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "A Santíssima Trindade": {
    "oracao": "Todo-poderoso e eterno Deus, que deste-nos a graça de conhecer a glória da eterna Trindade pela confissão da verdadeira fé e de adorarmos a Unidade no poder da Majestade Divina, mantém-nos firmes nesta fé e defende-nos de todas as adversidades; pois tu, ó Pai, Filho e Espírito Santo, vives e reinas, um só Deus, agora e sempre.",
    "introito": {
      "ref": "Salmo 16.8-11; antífona Texto litúrgico",
      "linhas": [
        {
          "text": "Abençoada seja a Santíssima Trindade e a indivisível Unidade.",
          "role": "chamada"
        },
        {
          "text": "Demos glórias a Deus porque ele nos tem mostrado a sua misericórdia.",
          "role": "resposta"
        },
        {
          "text": "Estou certo de que o Senhor está sempre comigo;",
          "role": "chamada"
        },
        {
          "text": "Ele está ao meu lado direito, e nada pode me abalar.",
          "role": "resposta"
        },
        {
          "text": "Por isso o meu coração está feliz e alegre,",
          "role": "chamada"
        },
        {
          "text": "E eu, um ser mortal, me sinto bem seguro,",
          "role": "resposta"
        },
        {
          "text": "Porque tu, ó Deus, me proteges do poder da morte.",
          "role": "chamada"
        },
        {
          "text": "Eu tenho te servido fielmente, e por isso não deixarás que eu desça ao mundo dos mortos.",
          "role": "resposta"
        },
        {
          "text": "Tu me mostras o caminho que leva à vida.",
          "role": "chamada"
        },
        {
          "text": "A tua presença me enche de alegria e me traz felicidade para sempre.",
          "role": "resposta"
        },
        {
          "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
          "role": "chamada"
        },
        {
          "text": "Abençoada seja a Santíssima Trindade e a indivisível Unidade.",
          "role": "chamada"
        },
        {
          "text": "Demos glórias a Deus porque ele nos tem mostrado a sua misericórdia.",
          "role": "resposta"
        }
      ]
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Romanos 10.8b,10",
          "linhas": [
            {
              "text": "A mensagem de Deus está perto de você, nos seus lábios e no seu coração",
              "role": "chamada"
            },
            {
              "text": "A mensagem de fé que anunciamos.",
              "role": "resposta"
            },
            {
              "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
              "role": "chamada"
            },
            {
              "text": "Falamos com a boca e assim somos salvos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "ref": "Isaías 6.3b",
      "linhas": [
        {
          "text": "Aleluia. Santo, santo, santo é o Senhor Todo-Poderoso; a sua presença gloriosa enche o mundo inteiro! Aleluia.",
          "role": "chamada"
        }
      ]
    }
  },
  "Próprio 3": {
    "oracao": {
      "series": {
        "A": "Eterno Deus, que nos aconselhas a não ficarmos ansiosos a respeito das coisas deste mundo, mantém vivo em nós o desejo correto por aqueles tesouros celestiais que estão guardados para todos os que confiam em tua misericórdia, para que a cada dia nos alegremos em tua salvação e te sirvamos com devoção constante; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Misericordioso Pai, que deste teu único Filho como sacrifício pelos pecadores, concede-nos a graça de recebermos os frutos de sua obra redentora com gratidão e diariamente segui-lo em seu caminho; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Todo-poderoso Deus, que em tua misericórdia guias o curso deste mundo para que perdoemos assim como fomos perdoados e alegremente te sirvamos em paz e calma divinas; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 62.1-2,11-12; antífona Salmo 62.8",
          "linhas": [
            {
              "text": "Confie sempre em Deus, meu povo! Abram o coração para Deus,",
              "role": "chamada"
            },
            {
              "text": "Pois ele é o nosso refúgio.",
              "role": "resposta"
            },
            {
              "text": "Somente em Deus eu encontro paz;",
              "role": "chamada"
            },
            {
              "text": "É dele que vem a minha salvação.",
              "role": "resposta"
            },
            {
              "text": "Somente ele é a rocha que me salva; ele é o meu protetor,",
              "role": "chamada"
            },
            {
              "text": "E eu nunca serei derrotado.",
              "role": "resposta"
            },
            {
              "text": "Mais de uma vez tenho ouvido Deus dizer",
              "role": "chamada"
            },
            {
              "text": "Que o poder é dele e o amor, também.",
              "role": "resposta"
            },
            {
              "text": "Tu, ó Senhor, recompensas cada um",
              "role": "chamada"
            },
            {
              "text": "De acordo com o que faz.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Confie sempre em Deus, meu povo! Abram o coração para Deus,",
              "role": "chamada"
            },
            {
              "text": "Pois ele é o nosso refúgio.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 132.13-18; antífona Salmo 132.9",
          "linhas": [
            {
              "text": "Que os teus sacerdotes façam sempre o que é certo!",
              "role": "chamada"
            },
            {
              "text": "Que os teus servos fiéis gritem de alegria!",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus escolheu o monte Sião;",
              "role": "chamada"
            },
            {
              "text": "Ele quis que a sua casa fosse ali e disse:",
              "role": "resposta"
            },
            {
              "text": "Aqui viverei para sempre;",
              "role": "chamada"
            },
            {
              "text": "É aqui que eu quero reinar.",
              "role": "resposta"
            },
            {
              "text": "Darei de tudo com fartura a Jerusalém,",
              "role": "chamada"
            },
            {
              "text": "Darei muito alimento aos seus pobres.",
              "role": "resposta"
            },
            {
              "text": "Abençoarei tudo o que os seus sacerdotes fizerem,",
              "role": "chamada"
            },
            {
              "text": "E o seu povo cantará e gritará de alegria.",
              "role": "resposta"
            },
            {
              "text": "Aqui farei com que um descendente de Davi seja rei poderoso",
              "role": "chamada"
            },
            {
              "text": "E farei com que sempre sejam reis os descendentes desse rei escolhido.",
              "role": "resposta"
            },
            {
              "text": "Farei com que os seus inimigos fiquem cobertos de vergonha,",
              "role": "chamada"
            },
            {
              "text": "Mas ele usará uma coroa que vai brilhar cada vez mais.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que os teus sacerdotes façam sempre o que é certo!",
              "role": "chamada"
            },
            {
              "text": "Que os teus servos fiéis gritem de alegria!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 25.8-11; antífona Salmo 25.12",
          "linhas": [
            {
              "text": "Aqueles que temem o Senhor",
              "role": "chamada"
            },
            {
              "text": "Aprenderão com ele o caminho que devem seguir.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é justo e bom",
              "role": "chamada"
            },
            {
              "text": "E por isso mostra aos pecadores o caminho que devem seguir.",
              "role": "resposta"
            },
            {
              "text": "Deus guia os humildes no caminho certo",
              "role": "chamada"
            },
            {
              "text": "E lhes ensina a sua vontade.",
              "role": "resposta"
            },
            {
              "text": "Ele é fiel e com amor guia todos os que são fiéis à sua aliança",
              "role": "chamada"
            },
            {
              "text": "E que obedecem aos seus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, cumpre a tua promessa",
              "role": "chamada"
            },
            {
              "text": "E perdoa os meus pecados, porque são muitos!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Aqueles que temem o Senhor",
              "role": "chamada"
            },
            {
              "text": "Aprenderão com ele o caminho que devem seguir.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Romanos 10.8b,10",
          "linhas": [
            {
              "text": "A mensagem de Deus está perto de você, nos seus lábios e no seu coração",
              "role": "chamada"
            },
            {
              "text": "A mensagem de fé que anunciamos.",
              "role": "resposta"
            },
            {
              "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
              "role": "chamada"
            },
            {
              "text": "Falamos com a boca e assim somos salvos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 6.33",
          "linhas": [
            {
              "text": "Aleluia. Ponham em primeiro lugar na sua vida o Reino de Deus e aquilo que",
              "role": "chamada"
            },
            {
              "text": "Deus quer, e ele lhes dará todas essas coisas. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 2.19",
          "linhas": [
            {
              "text": "Aleluia. Vocês acham que os convidados de um casamento jejuam enquanto o noivo está com eles? Enquanto ele está presente, é claro que não jejuam!",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 6.36,35c",
          "linhas": [
            {
              "text": "Aleluia. Tenham misericórdia dos outros, assim como o Pai de vocês tem misericórdia de vocês. Façam isso porque ele é bom também para os ingratos e maus. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 4": {
    "oracao": {
      "series": {
        "A": "Senhor de todo poder e força, autor e doador de todas as coisas boas, coloca em nossos corações o amor pelo teu nome, imprime em nossas mentes os ensinos da tua Palavra e aumenta em nossas vidas tudo o que é santo e justo; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Deus eterno, teu Filho Jesus Cristo é o nosso verdadeiro dia de descanso. Ajuda-nos a fazer com que cada dia seja santo ao receber tua Palavra de conforto para que achemos nosso descanso nele, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Deus, que pela tua poderosa Palavra colocaste em ordem todas as coisas nos céus e na terra, afasta de nós todas as coisas que podem nos prejudicar e nos dá aquelas que são boas para nós; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 92.12-15; antífona Salmo 92.5",
          "linhas": [
            {
              "text": "Que grandes coisas tens feito, ó Senhor!",
              "role": "chamada"
            },
            {
              "text": "Como é difícil entender os teus pensamentos!",
              "role": "resposta"
            },
            {
              "text": "Os bons florescem como as palmeiras;",
              "role": "chamada"
            },
            {
              "text": "Eles crescem como os cedros dos montes Líbanos.",
              "role": "resposta"
            },
            {
              "text": "Eles são como árvores plantadas na casa do Senhor,",
              "role": "chamada"
            },
            {
              "text": "Que florescem nos pátios do Templo do nosso Deus.",
              "role": "resposta"
            },
            {
              "text": "Na velhice, eles ainda produzem frutos;",
              "role": "chamada"
            },
            {
              "text": "São sempre fortes e cheios de vida.",
              "role": "resposta"
            },
            {
              "text": "Isso prova que o Senhor Deus é justo,",
              "role": "chamada"
            },
            {
              "text": "Prova que ele, a minha rocha, não comete injustiça.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que grandes coisas tens feito, ó Senhor!",
              "role": "chamada"
            },
            {
              "text": "Como é difícil entender os teus pensamentos!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 62.5-8; antífona Salmo 62.1",
          "linhas": [
            {
              "text": "Somente em Deus eu encontro paz;",
              "role": "chamada"
            },
            {
              "text": "É dele que vem a minha salvação.",
              "role": "resposta"
            },
            {
              "text": "Somente em Deus eu encontro paz",
              "role": "chamada"
            },
            {
              "text": "E nele ponho a minha esperança.",
              "role": "resposta"
            },
            {
              "text": "Somente ele é a rocha que me salva; ele é o meu protetor,",
              "role": "chamada"
            },
            {
              "text": "E eu não serei abalado.",
              "role": "resposta"
            },
            {
              "text": "A minha salvação e a minha honra dependem de Deus;",
              "role": "chamada"
            },
            {
              "text": "Ele é a minha rocha poderosa e o meu abrigo.",
              "role": "resposta"
            },
            {
              "text": "Confie sempre em Deus, meu povo! Abram o coração para Deus,",
              "role": "chamada"
            },
            {
              "text": "Pois ele é o nosso refúgio.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Somente em Deus eu encontro paz;",
              "role": "chamada"
            },
            {
              "text": "É dele que vem a minha salvação.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 86.1-4,13; antífona Salmo 86.11",
          "linhas": [
            {
              "text": "Ó Senhor Deus, ensina-me o que queres que eu faça, e eu te obedecerei fielmente!",
              "role": "chamada"
            },
            {
              "text": "Ensina-me a te servir com toda a devoção.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, escuta-me e responde-me,",
              "role": "chamada"
            },
            {
              "text": "Pois estou fraco e necessitado!",
              "role": "resposta"
            },
            {
              "text": "Salva-me da morte, pois sou fiel a ti;",
              "role": "chamada"
            },
            {
              "text": "Salva-me porque sou teu servo e confio em ti. Tu és o meu Deus.",
              "role": "resposta"
            },
            {
              "text": "Tem compaixão de mim, Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois eu oro a ti o dia inteiro!",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, alegra o coração deste teu servo,",
              "role": "chamada"
            },
            {
              "text": "Pois os meus pensamentos sobem a ti!",
              "role": "resposta"
            },
            {
              "text": "Como é grande o teu amor por mim!",
              "role": "chamada"
            },
            {
              "text": "Tu não deixaste que eu fosse levado para o fundo do mundo dos mortos.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, ensina-me o que queres que eu faça, e eu te obedecerei fielmente!",
              "role": "chamada"
            },
            {
              "text": "Ensina-me a te servir com toda a devoção.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Romanos 10.8b,10",
          "linhas": [
            {
              "text": "A mensagem de Deus está perto de você, nos seus lábios e no seu coração",
              "role": "chamada"
            },
            {
              "text": "A mensagem de fé que anunciamos.",
              "role": "resposta"
            },
            {
              "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
              "role": "chamada"
            },
            {
              "text": "Falamos com a boca e assim somos salvos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 7.24",
          "linhas": [
            {
              "text": "Aleluia. Quem ouve esses meus ensinamentos e vive de acordo com eles é como um homem sábio que construiu a sua casa na rocha. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 2.27",
          "linhas": [
            {
              "text": "Aleluia. O sábado foi feito para servir as pessoas, e não as pessoas para servirem o sábado. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 7.6c,7b",
          "linhas": [
            {
              "text": "Aleluia. Senhor, não se incomode, pois eu não mereço que entre na minha casa. Dê somente uma ordem, e o meu empregado ficará bom. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 5": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso e misericordioso Deus, que enviaste teu Filho Jesus Cristo para buscar e salvar o perdido, graciosamente abre nossos ouvidos e nossos corações para ouvir o seu chamado e segui-lo com fé, para que possamos festejar com ele eternamente em seu Reino; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Todo-poderoso e eterno Deus, teu Filho Jesus triunfou sobre o príncipe dos demônios e nos libertou da escravidão do pecado. Ajuda-nos a ficar firmes contra cada assalto de Satanás e capacita-nos sempre a fazermos a tua vontade; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, Pai de toda misericórdia e Deus de todo conforto, que sempre estás à nossa frente e vais atrás de nós, concede que possamos nos alegrar em tua graciosa presença e de forma contínua nos entregarmos à prática das boas obras; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 50.7-10; antífona Salmo 50.1",
          "linhas": [
            {
              "text": "Deus, o Senhor Deus, fala e chama todos os moradores do mundo,",
              "role": "chamada"
            },
            {
              "text": "De um lado da terra ao outro.",
              "role": "resposta"
            },
            {
              "text": "Escute, meu povo, que eu vou falar; vou ser testemunha contra você, povo de Israel.",
              "role": "chamada"
            },
            {
              "text": "Eu sou Deus, o seu Deus.",
              "role": "resposta"
            },
            {
              "text": "Não vou repreendê-los por causa dos sacrifícios",
              "role": "chamada"
            },
            {
              "text": "E das ofertas que vocês sempre me trazem.",
              "role": "resposta"
            },
            {
              "text": "No entanto, eu não preciso dos touros das suas fazendas",
              "role": "chamada"
            },
            {
              "text": "Nem dos bodes dos seus rebanhos.",
              "role": "resposta"
            },
            {
              "text": "Pois os animais da floresta são meus",
              "role": "chamada"
            },
            {
              "text": "E também os milhares de cabeças de gado espalhados nas montanhas.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Deus, o Senhor Deus, fala e chama todos os moradores do mundo,",
              "role": "chamada"
            },
            {
              "text": "De um lado da terra ao outro.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 28.7-9; antífona Salmo 28.6",
          "linhas": [
            {
              "text": "Louvado seja Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois ele ouviu o meu grito pedindo ajuda.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é a minha força e o meu escudo; com todo o coração eu confio nele.",
              "role": "chamada"
            },
            {
              "text": "O Senhor me ajuda; por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus é a força do seu povo.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é o refúgio seguro do rei que ele escolheu.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, salva o teu povo e abençoa aqueles que são teus!",
              "role": "chamada"
            },
            {
              "text": "Sê o pastor deles e cuida deles para sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Louvado seja Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois ele ouviu o meu grito pedindo ajuda.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 138.3,7-8; antífona Salmo 86.16",
          "linhas": [
            {
              "text": "Olha de novo para mim e tem misericórdia de mim;",
              "role": "chamada"
            },
            {
              "text": "Dá-me a tua força e salva-me, pois eu te sirvo, como te serviu também a minha mãe.",
              "role": "resposta"
            },
            {
              "text": "Quando te chamei, tu me respondeste",
              "role": "chamada"
            },
            {
              "text": "E, com o teu poder, aumentaste as minhas forças.",
              "role": "resposta"
            },
            {
              "text": "Quando estou cercado de perigos, tu me dás segurança.",
              "role": "chamada"
            },
            {
              "text": "A tua força me protege do ódio dos meus inimigos; tu me salvas pelo teu poder.",
              "role": "resposta"
            },
            {
              "text": "Tu cumprirás tudo o que me prometeste.",
              "role": "chamada"
            },
            {
              "text": "O teu amor dura para sempre, ó Senhor Deus. Não abandones o trabalho que começaste.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Olha de novo para mim e tem misericórdia de mim;",
              "role": "chamada"
            },
            {
              "text": "Dá-me a tua força e salva-me, pois eu te sirvo, como te serviu também a minha mãe.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Romanos 10.8b,10",
          "linhas": [
            {
              "text": "A mensagem de Deus está perto de você, nos seus lábios e no seu coração",
              "role": "chamada"
            },
            {
              "text": "A mensagem de fé que anunciamos.",
              "role": "resposta"
            },
            {
              "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
              "role": "chamada"
            },
            {
              "text": "Falamos com a boca e assim somos salvos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 9.13b",
          "linhas": [
            {
              "text": "Aleluia. Eu vim para chamar os pecadores e não os bons. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Salmo 127.1a",
          "linhas": [
            {
              "text": "Aleluia. Se o Senhor Deus não edificar a casa, não adianta nada trabalhar para construí-la. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 7.16b",
          "linhas": [
            {
              "text": "Aleluia. Que grande profeta apareceu entre nós! Deus veio salvar o seu povo!",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 6": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso, eterno Deus, que pela Palavra de teus apóstolos e profetas proclamaste para nós a tua vontade salvadora, concede-nos fé para crermos em tuas promessas, a fim de recebermos a salvação eterna; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Bendito Senhor, visto que fizeste que as Escrituras Sagradas fossem escritas para nosso ensino, concede que possamos ouvir, ler, observar, estudar e internamente digeri-las, a fim de podermos abraçar e sempre manter firme a bendita esperança da vida eterna; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Todo-poderoso e eterno Deus, aumenta em nós os teus dons da fé, da esperança e do amor, para que possamos receber o perdão que prometeste e amar o que tens ordenado; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 67.4-7; antífona Salmo 67.3",
          "linhas": [
            {
              "text": "Que os povos te louvem, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Que todos os povos te louvem!",
              "role": "resposta"
            },
            {
              "text": "Que as nações se alegrem e cantem de alegria",
              "role": "chamada"
            },
            {
              "text": "Porque julgas os povos com justiça e guias as nações do mundo!",
              "role": "resposta"
            },
            {
              "text": "Que os povos te louvem, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Que todos os povos te louvem!",
              "role": "resposta"
            },
            {
              "text": "A terra deu a sua colheita;",
              "role": "chamada"
            },
            {
              "text": "Deus, o nosso Deus, nos tem abençoado.",
              "role": "resposta"
            },
            {
              "text": "Ele nos tem abençoado;",
              "role": "chamada"
            },
            {
              "text": "Que os povos do mundo inteiro o temam!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que os povos te louvem, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Que todos os povos te louvem!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 92.12-15; antífona Salmo 92.1",
          "linhas": [
            {
              "text": "Ó Senhor Deus, como é bom dar-te graças!",
              "role": "chamada"
            },
            {
              "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
              "role": "resposta"
            },
            {
              "text": "Os bons florescem como as palmeiras;",
              "role": "chamada"
            },
            {
              "text": "Eles crescem como os cedros dos montes Líbanos.",
              "role": "resposta"
            },
            {
              "text": "Eles são como árvores plantadas na casa do Senhor,",
              "role": "chamada"
            },
            {
              "text": "Que florescem nos pátios do Templo do nosso Deus.",
              "role": "resposta"
            },
            {
              "text": "Na velhice, eles ainda produzem frutos;",
              "role": "chamada"
            },
            {
              "text": "São sempre fortes e cheios de vida.",
              "role": "resposta"
            },
            {
              "text": "Isso prova que o Senhor Deus é justo,",
              "role": "chamada"
            },
            {
              "text": "Prova que ele, a minha rocha, não comete injustiça.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, como é bom dar-te graças!",
              "role": "chamada"
            },
            {
              "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 25.16-18,20; antífona Salmo 25.1-2",
          "linhas": [
            {
              "text": "Ó Senhor Deus, a ti dirijo a minha oração.",
              "role": "chamada"
            },
            {
              "text": "Meu Deus, eu confio em ti.",
              "role": "resposta"
            },
            {
              "text": "Salva-me da vergonha da derrota;",
              "role": "chamada"
            },
            {
              "text": "Não deixes que os meus inimigos se alegrem com a minha desgraça.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, olha para mim e tem pena de mim,",
              "role": "chamada"
            },
            {
              "text": "Pois estou sendo perseguido e não tenho proteção!",
              "role": "resposta"
            },
            {
              "text": "Livra o meu coração de todas as aflições",
              "role": "chamada"
            },
            {
              "text": "E tira-me de todas as dificuldades.",
              "role": "resposta"
            },
            {
              "text": "Vê as minhas tristezas e sofrimentos",
              "role": "chamada"
            },
            {
              "text": "E perdoa todos os meus pecados.",
              "role": "resposta"
            },
            {
              "text": "Protege-me e salva-me;",
              "role": "chamada"
            },
            {
              "text": "Livra-me da vergonha da derrota, pois em ti encontro segurança.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, a ti dirijo a minha oração.",
              "role": "chamada"
            },
            {
              "text": "Meu Deus, eu confio em ti.",
              "role": "resposta"
            },
            {
              "text": "Salva-me da vergonha da derrota;",
              "role": "chamada"
            },
            {
              "text": "Não deixes que os meus inimigos se alegrem com a minha desgraça.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Romanos 10.8b,10",
          "linhas": [
            {
              "text": "A mensagem de Deus está perto de você, nos seus lábios e no seu coração",
              "role": "chamada"
            },
            {
              "text": "A mensagem de fé que anunciamos.",
              "role": "resposta"
            },
            {
              "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
              "role": "chamada"
            },
            {
              "text": "Falamos com a boca e assim somos salvos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 9.37b-38",
          "linhas": [
            {
              "text": "Aleluia. A colheita é grande mesmo, mas os trabalhadores são poucos. Peçam ao dono da plantação que mande mais trabalhadores para fazerem a colheita.",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "2 Pedro 3.18a",
          "linhas": [
            {
              "text": "Aleluia. Continuem a crescer na graça e no conhecimento do nosso Senhor e",
              "role": "chamada"
            },
            {
              "text": "Salvador Jesus Cristo. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "2 Samuel 12.13b; Lucas 7.50b",
          "linhas": [
            {
              "text": "Aleluia. O Senhor perdoou o seu pecado; você não morrerá. A sua fé salvou você. Vá em paz. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 7": {
    "oracao": {
      "series": {
        "A": "Ó Deus, que em tua permanente presença sempre estás conosco, mantém-nos conscientes das tuas misericórdias diárias, a fim de podermos viver seguros e contentes em teu amor eterno; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Todo-poderoso Deus, em tua misericórdia guias os acontecimentos deste mundo de tal forma que a tua Igreja possa te servir com alegria, em paz e tranqüilidade divinas; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Deus, que preparaste para aqueles que te amam coisas tão boas que ultrapassam nossa compreensão, afasta de nós todos os pecados e maus desejos e coloca em nossos corações o teu Espírito Santo para nos guiar em todas as felicidades eternas; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 56.3-4,10-11; antífona Salmo 56.13",
          "linhas": [
            {
              "text": "Tu me salvaste da morte e não deixaste que eu fosse derrotado.",
              "role": "chamada"
            },
            {
              "text": "Assim, ó Deus, eu ando na tua presença, eu ando na luz da vida.",
              "role": "resposta"
            },
            {
              "text": "Quando estou com medo,",
              "role": "chamada"
            },
            {
              "text": "Eu confio em ti, ó Deus Todo-Poderoso.",
              "role": "resposta"
            },
            {
              "text": "Confio em Deus e o louvo pelo que ele tem prometido; confio nele e não terei medo de nada.",
              "role": "chamada"
            },
            {
              "text": "O que podem me fazer simples seres humanos?",
              "role": "resposta"
            },
            {
              "text": "Eu louvo a promessa de Deus,",
              "role": "chamada"
            },
            {
              "text": "A promessa de Deus, o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Confio nele e não terei medo de nada.",
              "role": "chamada"
            },
            {
              "text": "O que podem me fazer simples seres humanos?",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Tu me salvaste da morte e não deixaste que eu fosse derrotado.",
              "role": "chamada"
            },
            {
              "text": "Assim, ó Deus, eu ando na tua presença, eu ando na luz da vida.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 107.29-32; antífona Salmo 107.28",
          "linhas": [
            {
              "text": "Então, na sua angústia, gritavam por socorro,",
              "role": "chamada"
            },
            {
              "text": "E o Senhor Deus os livrava das suas aflições.",
              "role": "resposta"
            },
            {
              "text": "Ele acalmava a tempestade,",
              "role": "chamada"
            },
            {
              "text": "E as ondas ficavam quietas.",
              "role": "resposta"
            },
            {
              "text": "Eles se alegravam porque o mar tinha ficado calmo;",
              "role": "chamada"
            },
            {
              "text": "E assim Deus os levava em segurança para o porto desejado.",
              "role": "resposta"
            },
            {
              "text": "Que eles agradeçam ao Senhor o seu amor",
              "role": "chamada"
            },
            {
              "text": "E as coisas maravilhosas que fez por eles!",
              "role": "resposta"
            },
            {
              "text": "Anunciem a sua grandeza quando o povo se reunir;",
              "role": "chamada"
            },
            {
              "text": "Louvem a Deus na assembléia dos líderes.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Então, na sua angústia, gritavam por socorro,",
              "role": "chamada"
            },
            {
              "text": "E o Senhor Deus os livrava das suas aflições.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 71.20-24; antífona Salmo 71.3",
          "linhas": [
            {
              "text": "Ó Deus, sê a minha rocha de abrigo e uma fortaleza para me proteger!",
              "role": "chamada"
            },
            {
              "text": "Tu és a minha rocha e a minha fortaleza.",
              "role": "resposta"
            },
            {
              "text": "Tu me tens feito passar por aflições e sofrimentos,",
              "role": "chamada"
            },
            {
              "text": "Mas me darás forças novamente e me livrarás da sepultura.",
              "role": "resposta"
            },
            {
              "text": "Tu me tornarás cada vez mais famoso",
              "role": "chamada"
            },
            {
              "text": "E sempre me consolarás.",
              "role": "resposta"
            },
            {
              "text": "Prometo que te louvarei com harpa. Ó meu Deus, eu te louvarei porque és fiel.",
              "role": "chamada"
            },
            {
              "text": "Na minha lira tocarei hinos a ti, ó Santo Deus de Israel.",
              "role": "resposta"
            },
            {
              "text": "Cantarei de alegria quando tocar hinos a ti,",
              "role": "chamada"
            },
            {
              "text": "Cantarei com todas as minhas forças porque tu me salvaste.",
              "role": "resposta"
            },
            {
              "text": "O dia inteiro falarei da tua justiça,",
              "role": "chamada"
            },
            {
              "text": "Pois os que me queriam prejudicar foram derrotados e arruinados.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Deus, sê a minha rocha de abrigo e uma fortaleza para me proteger!",
              "role": "chamada"
            },
            {
              "text": "Tu és a minha rocha e a minha fortaleza.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.3,5b,6b",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Eu meditarei nas coisas maravilhosas que fazes,",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Romanos 10.8b,10",
          "linhas": [
            {
              "text": "A mensagem de Deus está perto de você, nos seus lábios e no seu coração",
              "role": "chamada"
            },
            {
              "text": "A mensagem de fé que anunciamos.",
              "role": "resposta"
            },
            {
              "text": "Porque nós cremos com o coração e somos aceitos por Deus;",
              "role": "chamada"
            },
            {
              "text": "Falamos com a boca e assim somos salvos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 10.32",
          "linhas": [
            {
              "text": "Aleluia. Se uma pessoa afirmar publicamente que pertence a mim, eu também, no Dia do Juízo, afirmarei diante do meu Pai, que está no céu, que ela pertence a mim. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 4.41b",
          "linhas": [
            {
              "text": "Aleluia. Que homem é este que manda até no vento e nas ondas? Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 8.39a",
          "linhas": [
            {
              "text": "Aleluia. Volte para casa e conte o que Deus fez por você. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 8": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso Deus, pela ação de teu Espírito Santo concede que possamos ouvir com alegria a tua Palavra proclamada entre nós e seguir as suas orientações; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Pai celestial, durante seu ministério aqui na terra teu Filho Jesus curou os doentes e levantou os mortos. Pela medicina curativa da tua Palavra e Sacramentos coloca em nossos corações tal amor para contigo que possamos viver eternamente; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Senhor de todo poder e força, autor e doador de todas as coisas boas, enxerta em nossos corações o amor ao teu nome e alimenta-nos com tudo o que é bom, a fim de podermos amar e servir ao nosso próximo; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 89.15-18; antífona Salmo 89.1",
          "linhas": [
            {
              "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua fidelidade a todas as gerações.",
              "role": "resposta"
            },
            {
              "text": "Feliz o povo que te adora com canções",
              "role": "chamada"
            },
            {
              "text": "E que vive na luz da tua presença!",
              "role": "resposta"
            },
            {
              "text": "Por causa de ti, eles se alegram o dia todo",
              "role": "chamada"
            },
            {
              "text": "E te louvam porque és bondoso.",
              "role": "resposta"
            },
            {
              "text": "Tu, ó Deus, és o nosso poder glorioso;",
              "role": "chamada"
            },
            {
              "text": "Por tua bondade, nos fazes vencer,",
              "role": "resposta"
            },
            {
              "text": "Pois escolhes o nosso protetor.",
              "role": "chamada"
            },
            {
              "text": "Foste tu, Senhor, o Santo Deus de Israel, que nos deste o nosso rei.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua fidelidade a todas as gerações.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 121.5-8; antífona Salmo 121.1-2",
          "linhas": [
            {
              "text": "Olho para os montes e pergunto:",
              "role": "chamada"
            },
            {
              "text": "De onde virá o meu socorro?",
              "role": "resposta"
            },
            {
              "text": "O meu socorro vem do Senhor Deus,",
              "role": "chamada"
            },
            {
              "text": "Que fez o céu e a terra.",
              "role": "resposta"
            },
            {
              "text": "O Senhor guardará você;",
              "role": "chamada"
            },
            {
              "text": "Ele está sempre ao seu lado para protegê-lo.",
              "role": "resposta"
            },
            {
              "text": "O sol não lhe fará mal de dia,",
              "role": "chamada"
            },
            {
              "text": "Nem a lua, de noite.",
              "role": "resposta"
            },
            {
              "text": "O Senhor guardará você de todo perigo;",
              "role": "chamada"
            },
            {
              "text": "Ele protegerá a sua vida.",
              "role": "resposta"
            },
            {
              "text": "Ele o guardará quando você for e quando voltar,",
              "role": "chamada"
            },
            {
              "text": "Agora e sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Olho para os montes e pergunto:",
              "role": "chamada"
            },
            {
              "text": "De onde virá o meu socorro?",
              "role": "resposta"
            },
            {
              "text": "O meu socorro vem do Senhor Deus,",
              "role": "chamada"
            },
            {
              "text": "Que fez o céu e a terra.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 85.8-10,13; antífona Salmo 85.7",
          "linhas": [
            {
              "text": "Mostra-nos, ó Senhor Deus, o teu amor",
              "role": "chamada"
            },
            {
              "text": "E dá-nos a tua salvação!",
              "role": "resposta"
            },
            {
              "text": "Eu escuto o que o Senhor está dizendo.",
              "role": "chamada"
            },
            {
              "text": "Para nós, o seu povo, para nós, os que somos fiéis, ele promete paz se não voltarmos aos nossos caminhos de loucura.",
              "role": "resposta"
            },
            {
              "text": "Na verdade, Deus está pronto para salvar os que o temem",
              "role": "chamada"
            },
            {
              "text": "A fim de que a sua presença salvadora fique na nossa terra.",
              "role": "resposta"
            },
            {
              "text": "O amor e a fidelidade se encontrarão;",
              "role": "chamada"
            },
            {
              "text": "A justiça e a paz se abraçarão.",
              "role": "resposta"
            },
            {
              "text": "A justiça irá adiante do Senhor",
              "role": "chamada"
            },
            {
              "text": "E preparará o caminho para ele.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Mostra-nos, ó Senhor Deus, o teu amor",
              "role": "chamada"
            },
            {
              "text": "E dá-nos a tua salvação!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Isaías 52.7a; Romanos 10.18b",
          "linhas": [
            {
              "text": "Como é bonito ver um mensageiro correndo pelas montanhas,",
              "role": "chamada"
            },
            {
              "text": "Trazendo notícias de paz, boas notícias de salvação!",
              "role": "resposta"
            },
            {
              "text": "A voz deles se espalhou pelo mundo inteiro;",
              "role": "chamada"
            },
            {
              "text": "As suas palavras alcançaram a terra toda.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 10.39",
          "linhas": [
            {
              "text": "Aleluia. Quem procura os seus próprios interesses nunca terá a vida verdadeira; mas quem esquece a si mesmo, porque é meu seguidor, terá a vida verdadeira. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Lamentações 3.25",
          "linhas": [
            {
              "text": "Aleluia. O Senhor é bom para todos os que confiam nele. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 9.51",
          "linhas": [
            {
              "text": "Aleluia. Como estava chegando o tempo de Jesus ir para o céu, ele resolveu ir para Jerusalém. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 9": {
    "oracao": {
      "series": {
        "A": "Gracioso Deus, nosso Pai celestial, que em tua misericórdia nos atendes todos os dias, sê nossa força e ajuda em meio às mudanças cansativas deste mundo e, ao final da vida, concede-nos o teu prometido descanso e as perfeitas alegrias da tua salvação; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Deus, que tornas conhecido o teu grande poder principalmente por mostrar misericórdia, concede-nos a abundância da tua graça a fim de podermos ser chamados ao arrependimento e sermos feitos participantes dos teus tesouros celestiais; através de teu Filho Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Todo-poderoso Deus, que construíste a tua Igreja sobre o fundamento dos apóstolos e profetas, sendo o próprio Jesus Cristo a pedra angular, continua a enviar os teus mensageiros para preservar o teu povo em paz verdadeira, a fim de que, pela pregação da tua Palavra, tua Igreja possa ser libertada de todo mal e perigo; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 91.2,9-10; antífona Salmo 91.1",
          "linhas": [
            {
              "text": "A pessoa que procura segurança no Deus Altíssimo",
              "role": "chamada"
            },
            {
              "text": "E se abriga na sombra protetora do Todo-Poderoso",
              "role": "resposta"
            },
            {
              "text": "Pode dizer a ele: Ó Senhor Deus, tu és o meu defensor e o meu protetor.",
              "role": "chamada"
            },
            {
              "text": "Tu és o meu Deus; eu confio em ti.",
              "role": "resposta"
            },
            {
              "text": "Você fez do Senhor Deus o seu protetor",
              "role": "chamada"
            },
            {
              "text": "E, do Altíssimo, o seu defensor;",
              "role": "resposta"
            },
            {
              "text": "Por isso, nenhum desastre lhe acontecerá,",
              "role": "chamada"
            },
            {
              "text": "E a violência não chegará perto da sua casa.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A pessoa que procura segurança no Deus Altíssimo",
              "role": "chamada"
            },
            {
              "text": "Se abriga na sombra protetora do Todo-Poderoso.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 132.13-16; antífona Salmo 34.8",
          "linhas": [
            {
              "text": "Procure descobrir, por você mesmo, como o Senhor Deus é bom.",
              "role": "chamada"
            },
            {
              "text": "Feliz aquele que encontra segurança nele!",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus escolheu o monte Sião;",
              "role": "chamada"
            },
            {
              "text": "Ele quis que a sua casa fosse ali e disse:",
              "role": "resposta"
            },
            {
              "text": "Aqui viverei para sempre;",
              "role": "chamada"
            },
            {
              "text": "É aqui que eu quero reinar.",
              "role": "resposta"
            },
            {
              "text": "Darei de tudo com fartura a Jerusalém,",
              "role": "chamada"
            },
            {
              "text": "Darei muito alimento aos seus pobres.",
              "role": "resposta"
            },
            {
              "text": "Abençoarei tudo o que os seus sacerdotes fizerem,",
              "role": "chamada"
            },
            {
              "text": "E o seu povo cantará e gritará de alegria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Procure descobrir, por você mesmo, como o Senhor Deus é bom.",
              "role": "chamada"
            },
            {
              "text": "Feliz aquele que encontra segurança nele!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 19.2,4-6; antífona Salmo 19.1",
          "linhas": [
            {
              "text": "O céu anuncia a glória de Deus",
              "role": "chamada"
            },
            {
              "text": "E nos mostra aquilo que as suas mãos fizeram.",
              "role": "resposta"
            },
            {
              "text": "Cada dia fala dessa glória ao dia seguinte,",
              "role": "chamada"
            },
            {
              "text": "E cada noite repete isso à outra noite.",
              "role": "resposta"
            },
            {
              "text": "No entanto, a voz do céu se espalha pelo mundo inteiro, e as suas palavras alcançam a terra toda.",
              "role": "chamada"
            },
            {
              "text": "Deus armou no céu uma barraca para o sol.",
              "role": "resposta"
            },
            {
              "text": "O sol sai dali todo alegre como um noivo,",
              "role": "chamada"
            },
            {
              "text": "Como um atleta ansioso para entrar numa corrida.",
              "role": "resposta"
            },
            {
              "text": "O sol sai de um lado do céu e vai até o outro lado;",
              "role": "chamada"
            },
            {
              "text": "Nada pode se esconder do seu calor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O céu anuncia a glória de Deus",
              "role": "chamada"
            },
            {
              "text": "E nos mostra aquilo que as suas mãos fizeram.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Isaías 52.7a; Romanos 10.18b",
          "linhas": [
            {
              "text": "Como é bonito ver um mensageiro correndo pelas montanhas,",
              "role": "chamada"
            },
            {
              "text": "Trazendo notícias de paz, boas notícias de salvação!",
              "role": "resposta"
            },
            {
              "text": "A voz deles se espalhou pelo mundo inteiro;",
              "role": "chamada"
            },
            {
              "text": "As suas palavras alcançaram a terra toda.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 11.28",
          "linhas": [
            {
              "text": "Aleluia. Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 6.13",
          "linhas": [
            {
              "text": "Aleluia. Eles expulsavam muitos demônios e curavam muitos doentes, pondo azeite na cabeça deles. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 10.5b,9b",
          "linhas": [
            {
              "text": "Aleluia. Que a paz esteja nesta casa! O Reino de Deus chegou até vocês. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 10": {
    "oracao": {
      "series": {
        "A": "Bendito Senhor, visto que fizeste que as Escrituras Sagradas fossem escritas para nosso ensino, concede que possamos ouvir, ler, observar, estudar e internamente digeri-las, a fim de podermos abraçar e sempre manter firme a bendita esperança da vida eterna; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Senhor, que concedeste força aos teus profetas para resistir às tentações do diabo e coragem para proclamar arrependimento, dá-nos corações e mentes puros para seguir teu Filho com fidelidade, mesmo no sofrimento e na morte; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Senhor Jesus Cristo, que em tua profunda compaixão nos resgataste de todas as coisas que podiam nos fazer mal, ensina-nos a te amar acima de todas as coisas e amar ao nosso próximo como a nós mesmos; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 103.15-19; antífona Salmo 103.8",
          "linhas": [
            {
              "text": "O Senhor é bondoso e misericordioso,",
              "role": "chamada"
            },
            {
              "text": "Não fica irado facilmente e é muito amoroso.",
              "role": "resposta"
            },
            {
              "text": "A nossa vida é como a grama;",
              "role": "chamada"
            },
            {
              "text": "Cresce e floresce como a flor do campo.",
              "role": "resposta"
            },
            {
              "text": "Aí o vento sopra, a flor desaparece,",
              "role": "chamada"
            },
            {
              "text": "E nunca mais ninguém a vê.",
              "role": "resposta"
            },
            {
              "text": "Mas o amor de Deus, o Senhor, por aqueles que o temem dura para sempre.",
              "role": "chamada"
            },
            {
              "text": "A sua bondade permanece, passando de pais a filhos,",
              "role": "resposta"
            },
            {
              "text": "Para aqueles que guardam a sua aliança",
              "role": "chamada"
            },
            {
              "text": "E obedecem fielmente aos seus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus colocou o seu trono bem firme no céu;",
              "role": "chamada"
            },
            {
              "text": "Ele é Rei e domina tudo.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é bondoso e misericordioso,",
              "role": "chamada"
            },
            {
              "text": "Não fica irado facilmente e é muito amoroso.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 143.1-2,8a; antífona Salmo 143.11",
          "linhas": [
            {
              "text": "Conserva-me vivo, ó Senhor, como prometeste!",
              "role": "chamada"
            },
            {
              "text": "E, porque és bom, livra-me das minhas aflições.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, ouve a minha oração! Escuta o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Responde-me, pois és fiel e bom.",
              "role": "resposta"
            },
            {
              "text": "Não julgues a mim, este teu servo,",
              "role": "chamada"
            },
            {
              "text": "Pois ninguém é inocente diante de ti.",
              "role": "resposta"
            },
            {
              "text": "Peço que todas as manhãs tu me fales do teu amor,",
              "role": "chamada"
            },
            {
              "text": "Pois em ti eu tenho posto a minha confiança.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Conserva-me vivo, ó Senhor, como prometeste!",
              "role": "chamada"
            },
            {
              "text": "E, porque és bom, livra-me das minhas aflições.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 136.23-26; antífona Salmo 136.1",
          "linhas": [
            {
              "text": "Dêem graças a Deus, o Senhor, porque ele é bom;",
              "role": "chamada"
            },
            {
              "text": "O seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "Quando fomos derrotados, Deus não esqueceu de nós;",
              "role": "chamada"
            },
            {
              "text": "O seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "Ele nos livrou dos nossos inimigos;",
              "role": "chamada"
            },
            {
              "text": "O seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "Ele dá comida aos seres humanos e aos animais;",
              "role": "chamada"
            },
            {
              "text": "O seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "Dêem graças ao Deus do céu;",
              "role": "chamada"
            },
            {
              "text": "O seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Dêem graças a Deus, o Senhor, porque ele é bom;",
              "role": "chamada"
            },
            {
              "text": "O seu amor dura para sempre.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Isaías 52.7a; Romanos 10.18b",
          "linhas": [
            {
              "text": "Como é bonito ver um mensageiro correndo pelas montanhas,",
              "role": "chamada"
            },
            {
              "text": "Trazendo notícias de paz, boas notícias de salvação!",
              "role": "resposta"
            },
            {
              "text": "A voz deles se espalhou pelo mundo inteiro;",
              "role": "chamada"
            },
            {
              "text": "As suas palavras alcançaram a terra toda.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Isaías 40.8",
          "linhas": [
            {
              "text": "Aleluia. A erva seca, a flor cai, mas a palavra do nosso Deus dura para sempre. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Mateus 5.10",
          "linhas": [
            {
              "text": "Aleluia. Felizes as pessoas que sofrem perseguições por fazerem a vontade de Deus, pois o Reino do Céu é delas. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 10.27",
          "linhas": [
            {
              "text": "Aleluia. Ame o Senhor, seu Deus, com todo o coração, com toda a alma, com todas as forças e com toda a mente. E ame o seu próximo como você ama a você mesmo. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 11": {
    "oracao": {
      "series": {
        "A": "Ó Deus, dirige e governa nossos corações e mentes pelo teu Espírito Santo de tal maneira que, mesmo cientes do teu juízo final, possamos ser encorajados à santidade de viver aqui e habitar contigo em perfeita alegria na vida futura; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Pai celestial, apesar de não merecermos a tua bondade, ainda assim atendes todas as nossas necessidades do corpo e da alma. Concede-nos teu Espírito Santo a fim de podermos reconhecer os teus dons, dar graças por todos os teus benefícios e te servir com obediência voluntária; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, concede-nos o Espírito para ouvirmos tua Palavra e sabermos a única coisa necessária, para que pela tua Palavra e Espírito possamos viver de acordo com a tua vontade; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 86.11-15; antífona Salmo 86.6",
          "linhas": [
            {
              "text": "Escuta, ó Senhor, a minha oração",
              "role": "chamada"
            },
            {
              "text": "E ouve os meus gritos pedindo socorro!",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, ensina-me o que queres que eu faça, e eu te obedecerei fielmente!",
              "role": "chamada"
            },
            {
              "text": "Ensina-me a te servir com toda a devoção.",
              "role": "resposta"
            },
            {
              "text": "Senhor, meu Deus, eu te louvarei com todo o coração",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua grandeza para sempre.",
              "role": "resposta"
            },
            {
              "text": "Como é grande o teu amor por mim!",
              "role": "chamada"
            },
            {
              "text": "Tu não deixaste que eu fosse levado para o fundo do mundo dos mortos.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, estou sendo atacado por gente orgulhosa. Um bando de pessoas violentas está querendo me matar,",
              "role": "chamada"
            },
            {
              "text": "Pessoas que não querem saber de ti.",
              "role": "resposta"
            },
            {
              "text": "Mas tu, Senhor, és Deus de compaixão e de amor;",
              "role": "chamada"
            },
            {
              "text": "És sempre paciente, bondoso e fiel.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Escuta, ó Senhor, a minha oração",
              "role": "chamada"
            },
            {
              "text": "E ouve os meus gritos pedindo socorro!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 147.7-11; antífona Salmo 145.16",
          "linhas": [
            {
              "text": "Quando os alimenta, o Senhor Deus é generoso;",
              "role": "chamada"
            },
            {
              "text": "Ele satisfaz a todos os seres vivos.",
              "role": "resposta"
            },
            {
              "text": "Cantem hinos de louvor ao Senhor;",
              "role": "chamada"
            },
            {
              "text": "Toquem músicas na lira em louvor ao nosso Deus.",
              "role": "resposta"
            },
            {
              "text": "Ele cobre de nuvens o céu, manda cair chuva na terra",
              "role": "chamada"
            },
            {
              "text": "E faz crescer grama nas montanhas.",
              "role": "resposta"
            },
            {
              "text": "Ele dá de comer aos animais",
              "role": "chamada"
            },
            {
              "text": "E alimenta os filhotes dos corvos quando eles pedem.",
              "role": "resposta"
            },
            {
              "text": "O que agrada a Deus não são cavalos fortes",
              "role": "chamada"
            },
            {
              "text": "Nem soldados corajosos,",
              "role": "resposta"
            },
            {
              "text": "Mas, sim, as pessoas que o temem",
              "role": "chamada"
            },
            {
              "text": "E põem a sua esperança no seu amor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Quando os alimenta, o Senhor Deus é generoso;",
              "role": "chamada"
            },
            {
              "text": "Ele satisfaz a todos os seres vivos.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.57-60,64; antífona Salmo 119.105",
          "linhas": [
            {
              "text": "A tua palavra é lâmpada para guiar os meus passos,",
              "role": "chamada"
            },
            {
              "text": "É luz que ilumina o meu caminho.",
              "role": "resposta"
            },
            {
              "text": "Tu, ó Senhor Deus, és tudo o que eu tenho;",
              "role": "chamada"
            },
            {
              "text": "Prometo obedecer às tuas leis.",
              "role": "resposta"
            },
            {
              "text": "De todo o coração, eu te peço:",
              "role": "chamada"
            },
            {
              "text": "Tem misericórdia de mim, como prometeste.",
              "role": "resposta"
            },
            {
              "text": "Tenho pensado na minha maneira de agir",
              "role": "chamada"
            },
            {
              "text": "E prometo seguir os teus ensinamentos.",
              "role": "resposta"
            },
            {
              "text": "Com toda a pressa e sem demora,",
              "role": "chamada"
            },
            {
              "text": "Procuro obedecer aos teus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, a terra está cheia do teu amor;",
              "role": "chamada"
            },
            {
              "text": "Ensina-me os teus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A tua palavra é lâmpada para guiar os meus passos,",
              "role": "chamada"
            },
            {
              "text": "É luz que ilumina o meu caminho.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Isaías 52.7a; Romanos 10.18b",
          "linhas": [
            {
              "text": "Como é bonito ver um mensageiro correndo pelas montanhas,",
              "role": "chamada"
            },
            {
              "text": "Trazendo notícias de paz, boas notícias de salvação!",
              "role": "resposta"
            },
            {
              "text": "A voz deles se espalhou pelo mundo inteiro;",
              "role": "chamada"
            },
            {
              "text": "As suas palavras alcançaram a terra toda.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 13.35b",
          "linhas": [
            {
              "text": "Aleluia. Usarei parábolas quando falar com esse povo e explicarei coisas desconhecidas desde a criação do mundo. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Salmo 78.25",
          "linhas": [
            {
              "text": "Aleluia. [As pessoas] comeram o pão dos anjos. Deus lhes deu comida com fartura. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Colossenses 2.6b-7a",
          "linhas": [
            {
              "text": "Aleluia. Já que vocês [receberam] Cristo Jesus como Senhor, vivam unidos com ele. Estejam enraizados nele, construam a sua vida sobre ele. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 12": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso e eterno Deus, faze crescer a nossa fé, esperança e amor para que, recebendo o que prometeste, possamos amar o que ordenas; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Todo-poderoso e misericordioso Deus, protetor de todos que confiam em ti, fortalece nossa fé e dá-nos coragem para crer que em teu amor nos resgatas de todas as adversidades; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, deixa os teus misericordiosos ouvidos atentos às orações de teus servos, e pela tua Palavra e Espírito ensina-nos como orar, para que nossas petições sejam agradáveis a ti; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 105.2-6; antífona Salmo 105.1",
          "linhas": [
            {
              "text": "Agradeçam a Deus, o Senhor, anunciem a sua grandeza",
              "role": "chamada"
            },
            {
              "text": "E contem às nações as coisas que ele fez.",
              "role": "resposta"
            },
            {
              "text": "Cantem a Deus, cantem louvores a ele,",
              "role": "chamada"
            },
            {
              "text": "Falem dos seus atos maravilhosos.",
              "role": "resposta"
            },
            {
              "text": "Tenham orgulho daquilo que o Santo Deus tem feito.",
              "role": "chamada"
            },
            {
              "text": "Que fique alegre o coração de todos os que adoram a Deus, o Senhor!",
              "role": "resposta"
            },
            {
              "text": "Procurem a ajuda do Senhor;",
              "role": "chamada"
            },
            {
              "text": "Estejam sempre na sua presença.",
              "role": "resposta"
            },
            {
              "text": "Vocês, descendentes de Abraão, servo de Deus,",
              "role": "chamada"
            },
            {
              "text": "Vocês, descendentes de Jacó, o escolhido de Deus,",
              "role": "resposta"
            },
            {
              "text": "Lembrem de tudo o que Deus tem feito,",
              "role": "chamada"
            },
            {
              "text": "Lembrem dos seus grandes e maravilhosos milagres e de como tem condenado os nossos inimigos!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Agradeçam a Deus, o Senhor, anunciem a sua grandeza",
              "role": "chamada"
            },
            {
              "text": "E contem às nações as coisas que ele fez.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 145.1-3,6-7; antífona Salmo 145.5",
          "linhas": [
            {
              "text": "Eles falarão da tua glória e da tua majestade,",
              "role": "chamada"
            },
            {
              "text": "E eu meditarei nas coisas maravilhosas que fazes.",
              "role": "resposta"
            },
            {
              "text": "Meu Deus e meu Rei, eu anunciarei a tua grandeza",
              "role": "chamada"
            },
            {
              "text": "E sempre serei grato a ti.",
              "role": "resposta"
            },
            {
              "text": "Todos os dias te darei graças",
              "role": "chamada"
            },
            {
              "text": "E sempre te louvarei.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus é grande e merece receber altos louvores.",
              "role": "chamada"
            },
            {
              "text": "Quem pode compreender a sua grandeza?",
              "role": "resposta"
            },
            {
              "text": "Falarão dos teus atos poderosos,",
              "role": "chamada"
            },
            {
              "text": "E eu anunciarei a tua grandeza.",
              "role": "resposta"
            },
            {
              "text": "Falarão da tua imensa bondade",
              "role": "chamada"
            },
            {
              "text": "E cantarão com alegria a respeito da tua fidelidade.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eles falarão da tua glória e da tua majestade,",
              "role": "chamada"
            },
            {
              "text": "E eu meditarei nas coisas maravilhosas que fazes.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.145-149; antífona Salmo 50.15",
          "linhas": [
            {
              "text": "Se me chamarem no dia da aflição,",
              "role": "chamada"
            },
            {
              "text": "Eu os livrarei, e vocês me louvarão.",
              "role": "resposta"
            },
            {
              "text": "De todo o coração, eu clamo a ti; responde-me, ó Senhor,",
              "role": "chamada"
            },
            {
              "text": "E obedecerei aos teus mandamentos!",
              "role": "resposta"
            },
            {
              "text": "Eu clamo pedindo socorro; livra-me dos meus inimigos",
              "role": "chamada"
            },
            {
              "text": "E eu seguirei as tuas ordens.",
              "role": "resposta"
            },
            {
              "text": "Antes do nascer do sol, eu clamo pedindo ajuda,",
              "role": "chamada"
            },
            {
              "text": "Pois a minha esperança está na tua promessa.",
              "role": "resposta"
            },
            {
              "text": "Eu fico acordado a noite inteira",
              "role": "chamada"
            },
            {
              "text": "Para meditar na tua palavra.",
              "role": "resposta"
            },
            {
              "text": "Ouve-me, ó Senhor Deus, por causa do teu amor!",
              "role": "chamada"
            },
            {
              "text": "Conserva-me vivo, de acordo com a tua justa vontade.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Se me chamarem no dia da aflição,",
              "role": "chamada"
            },
            {
              "text": "Eu os livrarei, e vocês me louvarão.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Isaías 52.7a; Romanos 10.18b",
          "linhas": [
            {
              "text": "Como é bonito ver um mensageiro correndo pelas montanhas,",
              "role": "chamada"
            },
            {
              "text": "Trazendo notícias de paz, boas notícias de salvação!",
              "role": "resposta"
            },
            {
              "text": "A voz deles se espalhou pelo mundo inteiro;",
              "role": "chamada"
            },
            {
              "text": "As suas palavras alcançaram a terra toda.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 13.35b",
          "linhas": [
            {
              "text": "Aleluia. Usarei parábolas quando falar com esse povo e explicarei coisas desconhecidas desde a criação do mundo. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 6.50c",
          "linhas": [
            {
              "text": "Aleluia. Coragem, sou eu! Não tenham medo! Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 11.9",
          "linhas": [
            {
              "text": "Aleluia. Por isso eu digo: peçam e vocês receberão; procurem e vocês acharão; batam, e a porta será aberta para vocês. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 13": {
    "oracao": {
      "series": {
        "A": "Pai celestial, apesar de não merecermos a tua bondade, ainda assim atendes todas as nossas necessidades do corpo e da alma. Concede-nos teu Espírito Santo a fim de podermos reconhecer os teus dons, dar graças por todos os teus benefícios e te servir com obediência voluntária; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Pai misericordioso, que deste teu Filho Jesus como o pão da vida celestial, concede-nos fé para nos regalarmos nele, através da tua Palavra e Sacramentos, a fim de sermos alimentados para a vida eterna; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, concede-nos sabedoria para reconhecer os tesouros que tens reservado para nós nos céus, a fim de nunca desesperarmos mas sempre nos alegrarmos e sermos agradecidos pelas riquezas da tua graça; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 105.39-43; antífona Salmo 105.1",
          "linhas": [
            {
              "text": "Agradeçam a Deus, o Senhor, anunciem a sua grandeza",
              "role": "chamada"
            },
            {
              "text": "E contem às nações as coisas que ele fez.",
              "role": "resposta"
            },
            {
              "text": "Deus pôs uma nuvem por cima do seu povo",
              "role": "chamada"
            },
            {
              "text": "E fogo para guiá-los durante a noite.",
              "role": "resposta"
            },
            {
              "text": "Eles pediram, e Deus mandou codornas",
              "role": "chamada"
            },
            {
              "text": "E do céu deu a eles pão bastante para matar a fome.",
              "role": "resposta"
            },
            {
              "text": "Ele partiu uma rocha, e jorrou água,",
              "role": "chamada"
            },
            {
              "text": "Que correu pelo deserto como um rio.",
              "role": "resposta"
            },
            {
              "text": "Pois ele lembrou da sua santa promessa",
              "role": "chamada"
            },
            {
              "text": "Feita a Abraão, seu servo.",
              "role": "resposta"
            },
            {
              "text": "Assim Deus tirou do Egito o seu povo escolhido,",
              "role": "chamada"
            },
            {
              "text": "E eles saíram de lá cantando e gritando de alegria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Agradeçam a Deus, o Senhor, anunciem a sua grandeza",
              "role": "chamada"
            },
            {
              "text": "E contem às nações as coisas que ele fez.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 78.23-25; antífona Salmo 81.10",
          "linhas": [
            {
              "text": "Eu sou o Senhor, o Deus de vocês, sou aquele que os tirou da terra do Egito.",
              "role": "chamada"
            },
            {
              "text": "Abram a boca, e eu os alimentarei.",
              "role": "resposta"
            },
            {
              "text": "Deus deu ordem ao céu lá em cima",
              "role": "chamada"
            },
            {
              "text": "E mandou que as suas portas se abrissem.",
              "role": "resposta"
            },
            {
              "text": "Ele deu ao povo pão do céu,",
              "role": "chamada"
            },
            {
              "text": "Fazendo com que caísse o maná para eles comerem,",
              "role": "resposta"
            },
            {
              "text": "E assim comeram o pão dos anjos.",
              "role": "chamada"
            },
            {
              "text": "Deus lhes deu comida com fartura.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu sou o Senhor, o Deus de vocês, sou aquele que os tirou da terra do Egito.",
              "role": "chamada"
            },
            {
              "text": "Abram a boca, e eu os alimentarei.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 49.7-8,13-14a,15; antífona Salmo 49.1-2",
          "linhas": [
            {
              "text": "Povos, escutem bem isto!",
              "role": "chamada"
            },
            {
              "text": "Ouçam, todos os moradores do mundo,",
              "role": "resposta"
            },
            {
              "text": "Tanto os poderosos como os humildes,",
              "role": "chamada"
            },
            {
              "text": "Tanto os ricos como os pobres!",
              "role": "resposta"
            },
            {
              "text": "Ninguém pode salvar a si mesmo,",
              "role": "chamada"
            },
            {
              "text": "Nem pagar a Deus o preço da sua vida,",
              "role": "resposta"
            },
            {
              "text": "Pois não há dinheiro que pague a vida de alguém,",
              "role": "chamada"
            },
            {
              "text": "Por mais dinheiro que uma pessoa tenha.",
              "role": "resposta"
            },
            {
              "text": "Reparem no que acontece com os que confiam em si mesmos;",
              "role": "chamada"
            },
            {
              "text": "Vejam o fim daqueles que estão satisfeitos com as suas riquezas.",
              "role": "resposta"
            },
            {
              "text": "O pastor deles – a morte – os leva,",
              "role": "chamada"
            },
            {
              "text": "E eles são condenados a morrer como se fossem ovelhas.",
              "role": "resposta"
            },
            {
              "text": "Porém Deus me livrará do poder da morte,",
              "role": "chamada"
            },
            {
              "text": "Pois ele me receberá.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Povos, escutem bem isto!",
              "role": "chamada"
            },
            {
              "text": "Ouçam, todos os moradores do mundo,",
              "role": "resposta"
            },
            {
              "text": "Tanto os poderosos como os humildes,",
              "role": "chamada"
            },
            {
              "text": "Tanto os ricos como os pobres!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "series": {
        "A": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Romanos 11.33,36",
          "linhas": [
            {
              "text": "Como são grandes as riquezas de Deus! Como são profundos o seu conhecimento e a sua sabedoria!",
              "role": "chamada"
            },
            {
              "text": "Quem pode explicar as suas decisões? Quem pode entender os seus planos?",
              "role": "resposta"
            },
            {
              "text": "Pois todas as coisas foram criadas por ele, e tudo existe por meio dele e para ele.",
              "role": "chamada"
            },
            {
              "text": "Glória a Deus para sempre! Amém!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Isaías 52.7a; Romanos 10.18b",
          "linhas": [
            {
              "text": "Como é bonito ver um mensageiro correndo pelas montanhas,",
              "role": "chamada"
            },
            {
              "text": "Trazendo notícias de paz, boas notícias de salvação!",
              "role": "resposta"
            },
            {
              "text": "A voz deles se espalhou pelo mundo inteiro;",
              "role": "chamada"
            },
            {
              "text": "As suas palavras alcançaram a terra toda.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Salmo 78.25",
          "linhas": [
            {
              "text": "Aleluia. [As pessoas] comeram o pão dos anjos. Deus lhes deu comida com fartura. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "João 6.35b",
          "linhas": [
            {
              "text": "Aleluia. Eu sou o pão da vida. Quem vem a mim nunca mais terá fome, e quem crê em mim nunca mais terá sede. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Colossenses 3.23-24a",
          "linhas": [
            {
              "text": "Aleluia. O que vocês fizerem façam de todo o coração, como se estivessem servindo o Senhor e não as pessoas. Lembrem que o Senhor lhes dará como recompensa aquilo que ele tem guardado para o seu povo. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 14": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso e misericordioso Deus, preserva-nos de todo o mal e perigo para que, estando prontos de corpo e alma, possamos cuidadosamente realizar o que tu queres; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Gracioso Pai, teu bendito Filho desceu do céu para ser o verdadeiro pão que dá vida ao mundo. Concede que Cristo, o pão da vida, possa viver em nós e nós nele, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Todo-poderoso e misericordioso Deus, é pela tua graça que vivemos como teu povo que te oferece culto aceitável. Concede que possamos caminhar com fé, e não apenas na aparência, no caminho que leva à vida eterna; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 34.4-8; antífona Salmo 34.1",
          "linhas": [
            {
              "text": "Eu sempre darei graças a Deus, o Senhor;",
              "role": "chamada"
            },
            {
              "text": "O seu louvor estará nos meus lábios o dia inteiro.",
              "role": "resposta"
            },
            {
              "text": "Eu pedi a ajuda do Senhor, e ele me respondeu;",
              "role": "chamada"
            },
            {
              "text": "Ele me livrou de todos os meus medos.",
              "role": "resposta"
            },
            {
              "text": "Os que são perseguidos olham para ele e se alegram;",
              "role": "chamada"
            },
            {
              "text": "Eles nunca ficarão desapontados.",
              "role": "resposta"
            },
            {
              "text": "Eu, um pobre sofredor, gritei; o Senhor me ouviu",
              "role": "chamada"
            },
            {
              "text": "E me livrou das minhas aflições.",
              "role": "resposta"
            },
            {
              "text": "O Anjo do Senhor fica em volta daqueles que o temem",
              "role": "chamada"
            },
            {
              "text": "E os protege do perigo.",
              "role": "resposta"
            },
            {
              "text": "Procure descobrir, por você mesmo, como o Senhor Deus é bom.",
              "role": "chamada"
            },
            {
              "text": "Feliz aquele que encontra segurança nele!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu sempre darei graças a Deus, o Senhor;",
              "role": "chamada"
            },
            {
              "text": "O seu louvor estará nos meus lábios o dia inteiro.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 34.8-10; antífona Salmo 145.16",
          "linhas": [
            {
              "text": "Quando os alimenta, o Senhor Deus é generoso;",
              "role": "chamada"
            },
            {
              "text": "Ele satisfaz a todos os seres vivos.",
              "role": "resposta"
            },
            {
              "text": "Procure descobrir, por você mesmo, como o Senhor Deus é bom.",
              "role": "chamada"
            },
            {
              "text": "Feliz aquele que encontra segurança nele!",
              "role": "resposta"
            },
            {
              "text": "Que todos os que se dedicam a Deus o temam,",
              "role": "chamada"
            },
            {
              "text": "Pois aqueles que o temem não têm falta de nada!",
              "role": "resposta"
            },
            {
              "text": "Até os leões não têm comida e passam fome,",
              "role": "chamada"
            },
            {
              "text": "Porém não falta nada aos que procuram a ajuda do Senhor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Quando os alimenta, o Senhor Deus é generoso;",
              "role": "chamada"
            },
            {
              "text": "Ele satisfaz a todos os seres vivos.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 147.8-11; antífona Salmo 147.7",
          "linhas": [
            {
              "text": "Cantem hinos de louvor ao Senhor;",
              "role": "chamada"
            },
            {
              "text": "Toquem músicas na lira em louvor ao nosso Deus.",
              "role": "resposta"
            },
            {
              "text": "Ele cobre de nuvens o céu, manda cair chuva na terra",
              "role": "chamada"
            },
            {
              "text": "E faz crescer grama nas montanhas.",
              "role": "resposta"
            },
            {
              "text": "Ele dá de comer aos animais",
              "role": "chamada"
            },
            {
              "text": "E alimenta os filhotes dos corvos quando eles pedem.",
              "role": "resposta"
            },
            {
              "text": "O que agrada a Deus não são cavalos fortes",
              "role": "chamada"
            },
            {
              "text": "Nem soldados corajosos,",
              "role": "resposta"
            },
            {
              "text": "Mas, sim, as pessoas que o temem",
              "role": "chamada"
            },
            {
              "text": "E põem a sua esperança no seu amor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Cantem hinos de louvor ao Senhor;",
              "role": "chamada"
            },
            {
              "text": "Toquem músicas na lira em louvor ao nosso Deus.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 14.27",
          "linhas": [
            {
              "text": "Aleluia. Nesse instante Jesus disse: Coragem! Sou eu! Não tenham medo!",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "João 6.51a,b",
          "linhas": [
            {
              "text": "Aleluia. Eu sou o pão vivo que desceu do céu. Se alguém comer desse pão, viverá para sempre. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 12.32",
          "linhas": [
            {
              "text": "Aleluia. Meu pequeno rebanho, não tenha medo! Pois o Pai tem prazer em dar o Reino a vocês. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 15": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso e eterno Pai, que dás aos teus filhos muitas bênçãos mesmo quando não somos merecedores, em cada problema e tentação concede-nos confiança em tua bondade e misericórdia amorosas; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Todo-poderoso Deus, conhecer a ti é ter a vida eterna. Concedenos conhecer a teu Filho Jesus como o caminho, a verdade e a vida, a fim de seguirmos seus passos com fidelidade no caminho que leva à vida eterna; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Misericordioso Senhor, purifica e defende tua Igreja pelo sacrifício de Cristo. Unidos com ele pelo santo Batismo, dá-nos a graça de receber com gratidão os benefícios de sua obra redentora e diariamente segui-lo; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 28.1-2,6-7; antífona Salmo 28.8",
          "linhas": [
            {
              "text": "O Senhor Deus é a força do seu povo.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é o refúgio seguro do rei que ele escolheu.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, minha rocha, eu peço a tua ajuda! Não deixes de ouvir o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Se não me responderes, eu estarei com aqueles que descem ao mundo dos mortos.",
              "role": "resposta"
            },
            {
              "text": "Ouve-me quando levanto as mãos na direção do teu santo Templo",
              "role": "chamada"
            },
            {
              "text": "E grito, pedindo a tua ajuda.",
              "role": "resposta"
            },
            {
              "text": "Louvado seja Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois ele ouviu o meu grito pedindo ajuda.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é a minha força e o meu escudo; com todo o coração eu confio nele.",
              "role": "chamada"
            },
            {
              "text": "O Senhor me ajuda; por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor Deus é a força do seu povo.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é o refúgio seguro do rei que ele escolheu.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 111.1-5,9; antífona Salmo 111.10",
          "linhas": [
            {
              "text": "Para ser sábio, é preciso primeiro temer a Deus, o Senhor. Ele dá compreensão aos que obedecem aos seus mandamentos.",
              "role": "chamada"
            },
            {
              "text": "Que o Senhor seja louvado para sempre!",
              "role": "resposta"
            },
            {
              "text": "Aleluia! Na reunião do povo eu louvarei a Deus, o Senhor, com todo o meu coração,",
              "role": "chamada"
            },
            {
              "text": "Junto com os que lhe obedecem.",
              "role": "resposta"
            },
            {
              "text": "Como são maravilhosas as coisas que ele faz!",
              "role": "chamada"
            },
            {
              "text": "Todos os que se alegram por causa delas querem entendê-las.",
              "role": "resposta"
            },
            {
              "text": "Em tudo o que ele faz, há glória e grandeza;",
              "role": "chamada"
            },
            {
              "text": "A sua fidelidade é eterna.",
              "role": "resposta"
            },
            {
              "text": "O Senhor não nos deixa esquecer dos seus feitos maravilhosos;",
              "role": "chamada"
            },
            {
              "text": "Ele é bom e tem muita misericórdia.",
              "role": "resposta"
            },
            {
              "text": "Ele dá alimento aos que o temem",
              "role": "chamada"
            },
            {
              "text": "E nunca esquece a sua aliança.",
              "role": "resposta"
            },
            {
              "text": "Deus pôs o seu povo em liberdade e fez com ele uma aliança eterna.",
              "role": "chamada"
            },
            {
              "text": "Ele é santo e poderoso.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Para ser sábio, é preciso primeiro temer a Deus, o Senhor. Ele dá compreensão aos que obedecem aos seus mandamentos.",
              "role": "chamada"
            },
            {
              "text": "Que o Senhor seja louvado para sempre!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 55.1,12-14,16; antífona Salmo 55.22",
          "linhas": [
            {
              "text": "Entregue os seus problemas ao Senhor, e ele o ajudará;",
              "role": "chamada"
            },
            {
              "text": "Ele nunca deixa que fracasse a pessoa que lhe obedece.",
              "role": "resposta"
            },
            {
              "text": "Ouve a minha oração, ó Deus!",
              "role": "chamada"
            },
            {
              "text": "Não deixes de atender o meu pedido.",
              "role": "resposta"
            },
            {
              "text": "Não era um inimigo que estava zombando de mim; se fosse, eu poderia suportar;",
              "role": "chamada"
            },
            {
              "text": "Nem era um adversário que me tratava com desprezo, pois eu poderia me esconder dele.",
              "role": "resposta"
            },
            {
              "text": "Porém foi você mesmo, meu companheiro,",
              "role": "chamada"
            },
            {
              "text": "Meu colega e amigo íntimo!",
              "role": "resposta"
            },
            {
              "text": "Conversávamos com toda a liberdade",
              "role": "chamada"
            },
            {
              "text": "E íamos juntos adorar com o povo no Templo.",
              "role": "resposta"
            },
            {
              "text": "Mas eu chamo a Deus, o Senhor, pedindo ajuda,",
              "role": "chamada"
            },
            {
              "text": "E ele me salva.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Entregue os seus problemas ao Senhor, e ele o ajudará;",
              "role": "chamada"
            },
            {
              "text": "Ele nunca deixa que fracasse a pessoa que lhe obedece.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Salmo 147.2-3",
          "linhas": [
            {
              "text": "Aleluia. O Senhor Deus está construindo de novo Jerusalém; ele está trazendo de volta o seu povo, que foi levado como prisioneiro para outro país. Ele cura os que têm o coração partido e trata dos seus ferimentos. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "João 6.68",
          "linhas": [
            {
              "text": "Aleluia. Quem é que nós vamos seguir? O senhor tem as palavras que dão vida eterna! Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Jeremias 23.29a,38c",
          "linhas": [
            {
              "text": "Aleluia. A minha mensagem é como fogo, [diz o Senhor]. Que vale a palha comparada com o trigo? Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 16": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso Deus, conhecer a ti é ter a vida eterna. Concede-nos conhecer a teu Filho Jesus como o caminho, a verdade e a vida, para que possamos confessar com coragem que ele é o Cristo e fielmente seguir no caminho que leva à vida eterna; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Todo-poderoso e misericordioso Deus, defende tua Igreja de todo ensino falso e erro para que teu povo fiel possa confessar-te como o único Deus verdadeiro e se alegrar em teus dons perfeitos e na tua salvação; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, que nos chamaste para entrar em teu Reino pela porta estreita, guia-nos pela tua Palavra e Espírito e conduze-nos agora e sempre à festa de teu Filho Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 2.6-7; Salmo 117; antífona Salmo 115.18",
          "linhas": [
            {
              "text": "Mas nós, que estamos vivos, daremos graças ao Senhor",
              "role": "chamada"
            },
            {
              "text": "Agora e para sempre. Aleluia!",
              "role": "resposta"
            },
            {
              "text": "Ele diz: Já coloquei o meu rei no trono",
              "role": "chamada"
            },
            {
              "text": "Lá em Sião, o meu monte santo.",
              "role": "resposta"
            },
            {
              "text": "O rei diz: Anunciarei o que o Senhor afirmou.",
              "role": "chamada"
            },
            {
              "text": "O Senhor me disse: Você é meu filho; hoje eu me tornei seu pai.",
              "role": "resposta"
            },
            {
              "text": "Louvem a Deus, o Senhor, todas as nações!",
              "role": "chamada"
            },
            {
              "text": "Que todos os povos o louvem!",
              "role": "resposta"
            },
            {
              "text": "O seu amor por nós é forte,",
              "role": "chamada"
            },
            {
              "text": "E a sua fidelidade dura para sempre. Aleluia!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Mas nós, que estamos vivos, daremos graças ao Senhor",
              "role": "chamada"
            },
            {
              "text": "Agora e para sempre. Aleluia!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 26.1-2,6-7; antífona Salmo 26.8",
          "linhas": [
            {
              "text": "Ó Senhor Deus, eu amo a casa onde vives,",
              "role": "chamada"
            },
            {
              "text": "O lugar onde está presente a tua glória.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, declara que estou inocente,",
              "role": "chamada"
            },
            {
              "text": "Pois faço o que é certo e confio inteiramente em ti.",
              "role": "resposta"
            },
            {
              "text": "Examina-me e põe-me à prova, ó Senhor;",
              "role": "chamada"
            },
            {
              "text": "Julga os meus desejos e os meus pensamentos,",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, lavo as mãos para mostrar que estou inocente.",
              "role": "chamada"
            },
            {
              "text": "Ando em volta do teu altar junto com os que te adoram,",
              "role": "resposta"
            },
            {
              "text": "Cantando um hino de gratidão",
              "role": "chamada"
            },
            {
              "text": "E falando das tuas obras maravilhosas.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, eu amo a casa onde vives,",
              "role": "chamada"
            },
            {
              "text": "O lugar onde está presente a tua glória.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 117; antífona Salmo 96.6a; 115.18b",
          "linhas": [
            {
              "text": "Ele está cercado de glória e majestade;",
              "role": "chamada"
            },
            {
              "text": "Daremos graças ao Senhor agora e para sempre. Aleluia!",
              "role": "resposta"
            },
            {
              "text": "Louvem a Deus, o Senhor, todas as nações!",
              "role": "chamada"
            },
            {
              "text": "Que todos os povos o louvem!",
              "role": "resposta"
            },
            {
              "text": "O seu amor por nós é forte,",
              "role": "chamada"
            },
            {
              "text": "E a sua fidelidade dura para sempre. Aleluia!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ele está cercado de glória e majestade;",
              "role": "chamada"
            },
            {
              "text": "Daremos graças ao Senhor agora e para sempre. Aleluia!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Efésios 2.19b-20",
          "linhas": [
            {
              "text": "Aleluia. Vocês são cidadãos que pertencem ao povo de Deus e são membros da família dele. Vocês são como um edifício e estão construídos sobre o alicerce que os apóstolos e os profetas colocaram. E a pedra fundamental desse edifício é o próprio Cristo Jesus. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Jeremias 15.16a,c",
          "linhas": [
            {
              "text": "Aleluia. Tu falaste comigo, e eu prestei atenção em cada palavra, e por isso as tuas palavras encheram o meu coração de alegria e de felicidade. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 13.29",
          "linhas": [
            {
              "text": "Aleluia. Muitos virão do Leste e do Oeste, do Norte e do Sul e vão sentar-se à mesa no Reino de Deus. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 17": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso Deus, teu Filho sofreu a agonia e a vergonha da cruz de boa vontade, para a nossa redenção. Concede-nos coragem para tomar a nossa cruz a cada dia e segui-lo onde ele nos levar; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Deus, fonte de tudo que é justo e bom, alimenta em nós todas as virtudes e leva-nos à realização de toda boa intenção, a fim de crescermos em graça e produzirmos os frutos das boas obras; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor de graça e misericórdia, ensina-nos pelo teu Espírito Santo a seguir o exemplo de teu Filho em verdadeira humildade, a fim de resistirmos às tentações do diabo e com mentes e corações puros evitarmos o orgulho pecaminoso; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 37.5-7; antífona Salmo 37.4",
          "linhas": [
            {
              "text": "Que a sua felicidade esteja no Senhor!",
              "role": "chamada"
            },
            {
              "text": "Ele lhe dará o que o seu coração deseja.",
              "role": "resposta"
            },
            {
              "text": "Ponha a sua vida nas mãos do Senhor,",
              "role": "chamada"
            },
            {
              "text": "Confie nele, e ele o ajudará.",
              "role": "resposta"
            },
            {
              "text": "Ele fará com que a sua honestidade seja como a luz",
              "role": "chamada"
            },
            {
              "text": "E com que a justiça da sua causa brilhe como o sol do meio-dia.",
              "role": "resposta"
            },
            {
              "text": "Não se irrite por causa dos que vencem na vida, nem tenha inveja dos que conseguem realizar os seus planos de maldade.",
              "role": "chamada"
            },
            {
              "text": "Tenha paciência, pois o Senhor Deus cuidará disso.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que a sua felicidade esteja no Senhor!",
              "role": "chamada"
            },
            {
              "text": "Ele lhe dará o que o seu coração deseja.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 51.7,10-12; antífona Salmo 51.2",
          "linhas": [
            {
              "text": "Purifica-me de todas as minhas maldades",
              "role": "chamada"
            },
            {
              "text": "E lava-me do meu pecado.",
              "role": "resposta"
            },
            {
              "text": "Tira de mim o meu pecado, e ficarei limpo;",
              "role": "chamada"
            },
            {
              "text": "Lava-me, e ficarei mais branco do que a neve.",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, cria em mim um coração puro",
              "role": "chamada"
            },
            {
              "text": "E dá-me uma vontade nova e firme!",
              "role": "resposta"
            },
            {
              "text": "Não me expulses da tua presença,",
              "role": "chamada"
            },
            {
              "text": "Nem tires de mim o teu santo Espírito.",
              "role": "resposta"
            },
            {
              "text": "Dá-me novamente a alegria da tua salvação",
              "role": "chamada"
            },
            {
              "text": "E conserva em mim o desejo de ser obediente.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Purifica-me de todas as minhas maldades",
              "role": "chamada"
            },
            {
              "text": "E lava-me do meu pecado.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 75.1-2,6,9; antífona Salmo 75.7",
          "linhas": [
            {
              "text": "É Deus quem julga;",
              "role": "chamada"
            },
            {
              "text": "É ele quem declara que uns são culpados e que outros são inocentes.",
              "role": "resposta"
            },
            {
              "text": "Nós te damos graças, ó Deus, nós damos graças.",
              "role": "chamada"
            },
            {
              "text": "Anunciamos a tua grandeza e contamos as coisas maravilhosas que tens feito.",
              "role": "resposta"
            },
            {
              "text": "Deus diz: Eu marquei um tempo certo para o julgamento",
              "role": "chamada"
            },
            {
              "text": "E julgarei com justiça.",
              "role": "resposta"
            },
            {
              "text": "Pois o julgamento não vem do Leste, nem do Oeste,",
              "role": "chamada"
            },
            {
              "text": "Nem do Norte, nem do Sul.",
              "role": "resposta"
            },
            {
              "text": "Porém eu sempre falarei a respeito do Deus de Jacó",
              "role": "chamada"
            },
            {
              "text": "E lhe cantarei louvores.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "É Deus quem julga;",
              "role": "chamada"
            },
            {
              "text": "É ele quem declara que uns são culpados e que outros são inocentes.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 16.25",
          "linhas": [
            {
              "text": "Aleluia. Pois quem põe os seus próprios interesses em primeiro lugar nunca terá a vida verdadeira; mas quem esquece a si mesmo por minha causa terá a vida verdadeira. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Mateus 5.8",
          "linhas": [
            {
              "text": "Aleluia. Felizes as pessoas que têm o coração puro, pois elas verão a Deus.",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 14.11",
          "linhas": [
            {
              "text": "Aleluia. Porque quem se engrandece será humilhado, mas quem se humilha será engrandecido. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 18": {
    "oracao": {
      "series": {
        "A": "Ó Deus, de quem procede todo o bem, concede a nós, teus humildes servos, tua santa inspiração, a fim de colocarmos nossas mentes nas coisas que são corretas e realizá-las pela tua misericordiosa orientação; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Senhor, que os teus ouvidos misericordiosos estejam abertos às orações dos teus humildes servos e concede que aquilo que eles pedem esteja de acordo com a tua graciosa vontade; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó misericordioso Senhor, que não poupaste a teu único Filho mas o entregaste por todos nós, concede-nos coragem e força para tomar a cruz e segui-lo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 92.1-4; antífona Salmo 92.5",
          "linhas": [
            {
              "text": "Que grandes coisas tens feito, ó Senhor!",
              "role": "chamada"
            },
            {
              "text": "Como é difícil entender os teus pensamentos!",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, como é bom dar-te graças!",
              "role": "chamada"
            },
            {
              "text": "Como é bom cantar hinos em tua honra, ó Altíssimo!",
              "role": "resposta"
            },
            {
              "text": "Como é bom anunciar de manhã o teu amor",
              "role": "chamada"
            },
            {
              "text": "E de noite, a tua fidelidade,",
              "role": "resposta"
            },
            {
              "text": "Com a música de uma harpa de dez cordas",
              "role": "chamada"
            },
            {
              "text": "E ao som da lira!",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, os teus feitos poderosos me tornam feliz!",
              "role": "chamada"
            },
            {
              "text": "Eu canto de alegria pelas coisas que fazes.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que grandes coisas tens feito, ó Senhor!",
              "role": "chamada"
            },
            {
              "text": "Como é difícil entender os teus pensamentos!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 28.1-2,6-7; antífona Salmo 28.8",
          "linhas": [
            {
              "text": "O Senhor Deus é a força do seu povo.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é o refúgio seguro do rei que ele escolheu.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, minha rocha, eu peço a tua ajuda! Não deixes de ouvir o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Se não me responderes, eu estarei com aqueles que descem ao mundo dos mortos.",
              "role": "resposta"
            },
            {
              "text": "Ouve-me quando levanto as mãos na direção do teu santo Templo",
              "role": "chamada"
            },
            {
              "text": "E grito, pedindo a tua ajuda.",
              "role": "resposta"
            },
            {
              "text": "Louvado seja Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Pois ele ouviu o meu grito pedindo ajuda.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é a minha força e o meu escudo; com todo o coração eu confio nele.",
              "role": "chamada"
            },
            {
              "text": "O Senhor me ajuda; por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor Deus é a força do seu povo.",
              "role": "chamada"
            },
            {
              "text": "O Senhor é o refúgio seguro do rei que ele escolheu.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.28-32; antífona Salmo 119.27",
          "linhas": [
            {
              "text": "Ajuda-me a compreender as tuas leis,",
              "role": "chamada"
            },
            {
              "text": "E eu meditarei nos teus maravilhosos ensinamentos.",
              "role": "resposta"
            },
            {
              "text": "É tanta a minha tristeza, que estou me acabando;",
              "role": "chamada"
            },
            {
              "text": "Dá-me forças, como prometeste.",
              "role": "resposta"
            },
            {
              "text": "Não me deixes seguir o caminho errado;",
              "role": "chamada"
            },
            {
              "text": "Com a tua bondade, ensina-me a tua lei.",
              "role": "resposta"
            },
            {
              "text": "Eu escolhi o caminho da fidelidade",
              "role": "chamada"
            },
            {
              "text": "E tenho dado atenção às tuas ordens.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, tenho seguido os teus ensinamentos;",
              "role": "chamada"
            },
            {
              "text": "Não me deixes passar pela vergonha do fracasso.",
              "role": "resposta"
            },
            {
              "text": "Eu me apresso em obedecer aos teus mandamentos",
              "role": "chamada"
            },
            {
              "text": "Porque assim tu me darás mais entendimento.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ajuda-me a compreender as tuas leis,",
              "role": "chamada"
            },
            {
              "text": "E eu meditarei nos teus maravilhosos ensinamentos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 5.3",
          "linhas": [
            {
              "text": "Aleluia. Felizes as pessoas que sabem que são espiritualmente pobres, pois o",
              "role": "chamada"
            },
            {
              "text": "Reino do Céu é delas. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Salmo 147.2-3",
          "linhas": [
            {
              "text": "Aleluia. O Senhor Deus está construindo de novo Jerusalém; ele está trazendo de volta o seu povo, que foi levado como prisioneiro para outro país. Ele cura os que têm o coração partido e trata dos seus ferimentos. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Gálatas 6.14",
          "linhas": [
            {
              "text": "Aleluia. Mas eu me orgulharei somente da cruz do nosso Senhor Jesus Cristo.",
              "role": "chamada"
            },
            {
              "text": "Pois, por meio da cruz, o mundo está morto para mim, e eu estou morto para o mundo. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 19": {
    "oracao": {
      "series": {
        "A": "Ó Deus, nosso refúgio e fortaleza, autor de toda piedade, ouve as devotas orações de tua Igreja, especialmente em tempos de perseguição, e concede que possamos obter aquilo que pedimos em fé; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Senhor Jesus Cristo, nossa ajuda e defesa em todas as necessidades, continua a preservar tua Igreja em segurança, governando-a pela tua bondade e abençoando-a com tua paz; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Senhor Jesus, tu és o Bom Pastor, sem o qual não há segurança. Salva e preserva-nos para que não nos percamos eternamente, mas te sigamos, nos alegrando no caminho que leva à vida eterna, pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 143.1-2; antífona Salmo 143.9",
          "linhas": [
            {
              "text": "Ó Senhor Deus, livra-me dos meus inimigos,",
              "role": "chamada"
            },
            {
              "text": "Pois em ti encontro proteção!",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, ouve a minha oração! Escuta o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Responde-me, pois és fiel e bom.",
              "role": "resposta"
            },
            {
              "text": "Não julgues a mim, este teu servo,",
              "role": "chamada"
            },
            {
              "text": "Pois ninguém é inocente diante de ti.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, livra-me dos meus inimigos,",
              "role": "chamada"
            },
            {
              "text": "Pois em ti encontro proteção!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 31.14-16; antífona Salmo 31.24",
          "linhas": [
            {
              "text": "Sejam fortes e tenham coragem,",
              "role": "chamada"
            },
            {
              "text": "Todos vocês que põem a sua esperança em Deus, o Senhor!",
              "role": "resposta"
            },
            {
              "text": "A minha confiança está em ti, ó Senhor;",
              "role": "chamada"
            },
            {
              "text": "Tu és o meu Deus.",
              "role": "resposta"
            },
            {
              "text": "Tu estás sempre cuidando de mim.",
              "role": "chamada"
            },
            {
              "text": "Salva-me dos meus inimigos, daqueles que me perseguem.",
              "role": "resposta"
            },
            {
              "text": "Olha com bondade para mim, teu servo;",
              "role": "chamada"
            },
            {
              "text": "Salva-me por causa do teu amor.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Sejam fortes e tenham coragem,",
              "role": "chamada"
            },
            {
              "text": "Todos vocês que põem a sua esperança em Deus, o Senhor!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 30.2-5; antífona Salmo 30.11a,12b",
          "linhas": [
            {
              "text": "Tu mudaste o meu choro em dança alegre,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor, tu és o meu Deus; eu te darei graças para sempre.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, meu Deus, eu gritei pedindo ajuda,",
              "role": "chamada"
            },
            {
              "text": "E tu me curaste,",
              "role": "resposta"
            },
            {
              "text": "Tu me salvaste da morte.",
              "role": "chamada"
            },
            {
              "text": "Eu estava entre aqueles que iam para o mundo dos mortos, mas tu me fizeste viver novamente.",
              "role": "resposta"
            },
            {
              "text": "Cantem louvor a Deus, o Senhor, vocês, o seu povo fiel!",
              "role": "chamada"
            },
            {
              "text": "Lembrem do que o Santo Deus tem feito e lhe dêem graças.",
              "role": "resposta"
            },
            {
              "text": "A sua ira dura só um momento, mas a sua bondade é para a vida toda.",
              "role": "chamada"
            },
            {
              "text": "O choro pode durar a noite inteira, mas de manhã vem a alegria.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Tu mudaste o meu choro em dança alegre,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor, tu és o meu Deus; eu te darei graças para sempre.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 6.14",
          "linhas": [
            {
              "text": "Aleluia. Se vocês perdoarem as pessoas que ofenderem vocês, o Pai de vocês, que está no céu, também perdoará vocês. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 9.23b",
          "linhas": [
            {
              "text": "Aleluia. Tudo é possível para quem tem fé. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 15.10",
          "linhas": [
            {
              "text": "Aleluia. Pois eu digo a vocês que assim também os anjos de Deus se alegrarão por causa de um pecador que se arrepende dos seus pecados. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 20": {
    "oracao": {
      "series": {
        "A": "Senhor Deus, Pai celestial, visto que não podemos ficar diante de ti confiando em algo que fizemos, ajuda-nos a confiar em tua graça permanente e a viver de acordo com a tua Palavra; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Deus, cuja força se aperfeiçoa na fraqueza, concede-nos humildade e uma fé como a das crianças, a fim de te agradarmos tanto na vontade como nas ações; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, mantém tua Igreja em tua perpétua misericórdia; e porque sem ti não conseguimos ficar de pé, preserva-nos de todas as coisas prejudiciais e guia-nos a todas as coisas úteis para a nossa salvação; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 116.12-13,15-16; antífona Salmo 116.17",
          "linhas": [
            {
              "text": "Eu te darei uma oferta de gratidão",
              "role": "chamada"
            },
            {
              "text": "E a ti farei as minhas orações.",
              "role": "resposta"
            },
            {
              "text": "Que posso eu oferecer a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Por tudo de bom que ele me tem dado?",
              "role": "resposta"
            },
            {
              "text": "Levarei ao Senhor uma oferta de vinho",
              "role": "chamada"
            },
            {
              "text": "Para lhe dar graças porque me salvou.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus sente pesar",
              "role": "chamada"
            },
            {
              "text": "Quando vê morrerem os que são fiéis a ele.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, eu sou teu servo;",
              "role": "chamada"
            },
            {
              "text": "Eu te sirvo, como te servia a minha mãe. Tu me livraste da morte.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Eu te darei uma oferta de gratidão",
              "role": "chamada"
            },
            {
              "text": "E a ti farei as minhas orações.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 37.5-7; antífona Salmo 37.4",
          "linhas": [
            {
              "text": "Que a sua felicidade esteja no Senhor!",
              "role": "chamada"
            },
            {
              "text": "Ele lhe dará o que o seu coração deseja.",
              "role": "resposta"
            },
            {
              "text": "Ponha a sua vida nas mãos do Senhor,",
              "role": "chamada"
            },
            {
              "text": "Confie nele, e ele o ajudará.",
              "role": "resposta"
            },
            {
              "text": "Ele fará com que a sua honestidade seja como a luz",
              "role": "chamada"
            },
            {
              "text": "E com que a justiça da sua causa brilhe como o sol do meio-dia.",
              "role": "resposta"
            },
            {
              "text": "Não se irrite por causa dos que vencem na vida, nem tenha inveja dos que conseguem realizar os seus planos de maldade.",
              "role": "chamada"
            },
            {
              "text": "Tenha paciência, pois o Senhor Deus cuidará disso.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que a sua felicidade esteja no Senhor!",
              "role": "chamada"
            },
            {
              "text": "Ele lhe dará o que o seu coração deseja.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.137-140,142; antífona Salmo 119.144",
          "linhas": [
            {
              "text": "Os teus ensinamentos são sempre certos;",
              "role": "chamada"
            },
            {
              "text": "Dá-me entendimento, e continuarei vivo.",
              "role": "resposta"
            },
            {
              "text": "Tu és justo, ó Senhor Deus;",
              "role": "chamada"
            },
            {
              "text": "As tuas leis são certas.",
              "role": "resposta"
            },
            {
              "text": "Os ensinamentos que tens dado",
              "role": "chamada"
            },
            {
              "text": "São completamente certos e justos.",
              "role": "resposta"
            },
            {
              "text": "Fico queimando de raiva",
              "role": "chamada"
            },
            {
              "text": "Porque os meus inimigos desprezam a tua palavra.",
              "role": "resposta"
            },
            {
              "text": "Como é firme a tua promessa!",
              "role": "chamada"
            },
            {
              "text": "E como este teu servo a ama!",
              "role": "resposta"
            },
            {
              "text": "A tua justiça dura para sempre,",
              "role": "chamada"
            },
            {
              "text": "E a tua lei é sempre verdadeira.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Os teus ensinamentos são sempre certos;",
              "role": "chamada"
            },
            {
              "text": "Dá-me entendimento, e continuarei vivo.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 34.9,19",
      "linhas": [
        {
          "text": "Que todos os que se dedicam a Deus o temam,",
          "role": "chamada"
        },
        {
          "text": "Pois aqueles que o temem não têm falta de nada!",
          "role": "resposta"
        },
        {
          "text": "Os bons passam por muitas aflições,",
          "role": "chamada"
        },
        {
          "text": "Mas o Senhor os livra de todas elas.",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Efésios 2.8",
          "linhas": [
            {
              "text": "Aleluia. Pela graça de Deus vocês são salvos por meio da fé. Isso não vem de vocês, mas é um presente dado por Deus. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 9.35b",
          "linhas": [
            {
              "text": "Aleluia. Se alguém quer ser o primeiro, deve ficar em último lugar e servir a todos. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "1 Timóteo 2.5-6a",
          "linhas": [
            {
              "text": "Aleluia. Pois existe um só Deus e uma só pessoa que une Deus com os seres humanos – o ser humano Cristo Jesus, que deu a sua vida para que todos fiquem livres dos seus pecados. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 21": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso Deus, que exaltaste teu Filho a um lugar de honra e autoridade, ilumina nossas mentes pelo teu Espírito Santo para que, confessando Jesus como Senhor, sejamos levados a toda a verdade; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Pai eterno, fonte de todas as bênçãos, dirige e governa-nos com misericórdia pelo teu Espírito Santo a fim de realizarmos as obras que preparaste para nós fazermos; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Deus, és a força de todos os que confiam em ti e sem a tua ajuda não podemos fazer nada de bom. Concede-nos a ajuda da tua graça a fim de te agradarmos tanto na vontade como nas ações; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 147.1-5; antífona Salmo 147.6",
          "linhas": [
            {
              "text": "O Senhor Deus levanta os humildes,",
              "role": "chamada"
            },
            {
              "text": "Mas esmaga os maus no chão.",
              "role": "resposta"
            },
            {
              "text": "Aleluia! É bom cantar louvores ao nosso Deus;",
              "role": "chamada"
            },
            {
              "text": "É agradável e certo louvá-lo.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus está construindo de novo Jerusalém;",
              "role": "chamada"
            },
            {
              "text": "Ele está trazendo de volta o seu povo, que foi levado como prisioneiro para outro país.",
              "role": "resposta"
            },
            {
              "text": "Ele cura os que têm o coração partido",
              "role": "chamada"
            },
            {
              "text": "E trata dos seus ferimentos.",
              "role": "resposta"
            },
            {
              "text": "Foi ele quem resolveu quantas estrelas deviam existir",
              "role": "chamada"
            },
            {
              "text": "E chama cada uma pelo nome.",
              "role": "resposta"
            },
            {
              "text": "Deus, o Senhor nosso, é grande e poderoso;",
              "role": "chamada"
            },
            {
              "text": "A sua sabedoria não pode ser medida.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor Deus levanta os humildes,",
              "role": "chamada"
            },
            {
              "text": "Mas esmaga os maus no chão.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 135.1-3,13-14; antífona Salmo 135.13",
          "linhas": [
            {
              "text": "Ó Senhor, todos sempre saberão que tu és Deus;",
              "role": "chamada"
            },
            {
              "text": "Todas as gerações futuras lembrarão de ti.",
              "role": "resposta"
            },
            {
              "text": "Aleluia! Louvem a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Vocês que são seus servos,",
              "role": "resposta"
            },
            {
              "text": "Vocês que estão na casa dele,",
              "role": "chamada"
            },
            {
              "text": "No Templo do nosso Deus!",
              "role": "resposta"
            },
            {
              "text": "Louvem o Senhor porque ele é bom;",
              "role": "chamada"
            },
            {
              "text": "Cantem louvores a ele porque é bondoso.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, todos sempre saberão que tu és Deus;",
              "role": "chamada"
            },
            {
              "text": "Todas as gerações futuras lembrarão de ti.",
              "role": "resposta"
            },
            {
              "text": "O Senhor defenderá o povo de Israel;",
              "role": "chamada"
            },
            {
              "text": "Ele terá compaixão dos seus servos.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor, todos sempre saberão que tu és Deus;",
              "role": "chamada"
            },
            {
              "text": "Todas as gerações futuras lembrarão de ti.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.73-75,77; antífona Salmo 119.76",
          "linhas": [
            {
              "text": "Peço que o teu amor me console,",
              "role": "chamada"
            },
            {
              "text": "Como prometeste a mim, este teu servo!",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, as tuas mãos me criaram e me formaram;",
              "role": "chamada"
            },
            {
              "text": "Dá-me entendimento para que eu possa aprender as tuas leis.",
              "role": "resposta"
            },
            {
              "text": "Aqueles que te temem se alegram quando me vêem",
              "role": "chamada"
            },
            {
              "text": "Porque a minha esperança está na tua palavra.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, eu sei que os teus julgamentos são justos",
              "role": "chamada"
            },
            {
              "text": "E que me castigas porque és fiel.",
              "role": "resposta"
            },
            {
              "text": "Tem compaixão de mim, e eu continuarei vivo,",
              "role": "chamada"
            },
            {
              "text": "Pois gosto de pensar na tua lei.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Peço que o teu amor me console,",
              "role": "chamada"
            },
            {
              "text": "Como prometeste a mim, este teu servo!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 91.11; 103.1",
      "linhas": [
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 28.18b",
          "linhas": [
            {
              "text": "Aleluia. Deus me deu todo o poder no céu e na terra. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 9.50b",
          "linhas": [
            {
              "text": "Aleluia. Tenham sal em vocês mesmos e vivam em paz uns com os outros.",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 16.31",
          "linhas": [
            {
              "text": "Aleluia. Se eles não escutarem Moisés nem os profetas, não crerão, mesmo que alguém ressuscite. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 22": {
    "oracao": {
      "series": {
        "A": "Gracioso Deus, que entregaste teu Filho nas mãos de homens pecadores que o mataram, perdoa-nos quando rejeitamos teu amor interminável e concede-nos a totalidade da tua salvação; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Pai misericordioso, tua paciência e bondade amorosa para conosco não tem fim. Concede que pelo teu Espírito Santo sempre pensemos e façamos aquelas coisas que são agradáveis diante de ti; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Deus, nosso refúgio e fortaleza, autor de toda piedade, pela tua graça ouve as orações da tua Igreja. Concede que aquelas coisas que pedimos com fé possamos receber através da tua abundante misericórdia; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 118.22-24; antífona Salmo 118.1",
          "linhas": [
            {
              "text": "Dêem graças a Deus, o Senhor, porque ele é bom",
              "role": "chamada"
            },
            {
              "text": "E porque o seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "A pedra que os construtores rejeitaram",
              "role": "chamada"
            },
            {
              "text": "Veio a ser a mais importante de todas.",
              "role": "resposta"
            },
            {
              "text": "Isso foi feito pelo Senhor",
              "role": "chamada"
            },
            {
              "text": "E é uma coisa maravilhosa!",
              "role": "resposta"
            },
            {
              "text": "Este é o dia da vitória de Deus, o Senhor;",
              "role": "chamada"
            },
            {
              "text": "Que seja para nós um dia de felicidade e alegria!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Dêem graças a Deus, o Senhor, porque ele é bom",
              "role": "chamada"
            },
            {
              "text": "E porque o seu amor dura para sempre.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 127.3-5; antífona Salmo 127.1a",
          "linhas": [
            {
              "text": "Se o Senhor Deus não edificar a casa,",
              "role": "chamada"
            },
            {
              "text": "Não adianta nada trabalhar para construí-la.",
              "role": "resposta"
            },
            {
              "text": "Os filhos são um presente do Senhor;",
              "role": "chamada"
            },
            {
              "text": "Eles são uma verdadeira bênção.",
              "role": "resposta"
            },
            {
              "text": "Os filhos que o homem tem na sua mocidade",
              "role": "chamada"
            },
            {
              "text": "São como flechas nas mãos de um soldado.",
              "role": "resposta"
            },
            {
              "text": "Feliz o homem que tem muitas dessas flechas!",
              "role": "chamada"
            },
            {
              "text": "Ele não será derrotado quando enfrentar os seus inimigos no tribunal.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Se o Senhor Deus não edificar a casa,",
              "role": "chamada"
            },
            {
              "text": "Não adianta nada trabalhar para construí-la.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 119.162,164-165,167; antífona Salmo 119.166",
          "linhas": [
            {
              "text": "Espero que me livres dos meus inimigos, ó Senhor Deus,",
              "role": "chamada"
            },
            {
              "text": "Pois cumpro os teus mandamentos.",
              "role": "resposta"
            },
            {
              "text": "Como sou feliz por causa das tuas promessas,",
              "role": "chamada"
            },
            {
              "text": "Tão feliz como alguém que encontra um grande tesouro!",
              "role": "resposta"
            },
            {
              "text": "Sete vezes por dia, eu te louvo",
              "role": "chamada"
            },
            {
              "text": "Por causa dos teus julgamentos justos.",
              "role": "resposta"
            },
            {
              "text": "Aqueles que amam a tua lei têm muita segurança,",
              "role": "chamada"
            },
            {
              "text": "E não há nada que os faça cair.",
              "role": "resposta"
            },
            {
              "text": "Obedeço aos teus ensinamentos;",
              "role": "chamada"
            },
            {
              "text": "Eu os amo com todo o coração.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Espero que me livres dos meus inimigos, ó Senhor Deus,",
              "role": "chamada"
            },
            {
              "text": "Pois cumpro os teus mandamentos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 91.11; 103.1",
      "linhas": [
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 21.42b",
          "linhas": [
            {
              "text": "Aleluia. A pedra que os construtores rejeitaram veio a ser a mais importante de todas. Isso foi feito pelo Senhor e é uma coisa maravilhosa! Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 10.14b",
          "linhas": [
            {
              "text": "Aleluia. Deixem que as crianças venham a mim e não proíbam que elas façam isso, pois o Reino de Deus é das pessoas que são como estas crianças. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 17.3b",
          "linhas": [
            {
              "text": "Aleluia. Se o seu irmão pecar, repreenda-o; se ele se arrepender, perdoe.",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 23": {
    "oracao": {
      "series": {
        "A": "Todo-poderoso Deus, que nos convidas a crer em ti para nossa salvação, trata conosco não com a severidade do teu juízo, mas com a grandeza da tua misericórdia; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Senhor Jesus Cristo, cuja graça sempre nos precede e nos segue, ajuda-nos a abandonar toda confiança no lucro terreno e a achar em ti o nosso tesouro celestial; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Todo-poderoso Deus, que mostras misericórdia ao teu povo em todos os seus problemas, concede que sempre reconheçamos tua bondade, agradeçamos por tua compaixão e louvemos teu santo nome; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Isaías 61.10; antífona Salmo 146.2",
          "linhas": [
            {
              "text": "A vida inteira eu louvarei o meu Deus,",
              "role": "chamada"
            },
            {
              "text": "Cantarei louvores a ele enquanto eu viver.",
              "role": "resposta"
            },
            {
              "text": "Nós nos alegraremos e cantaremos um hino de louvor",
              "role": "chamada"
            },
            {
              "text": "Por causa daquilo que o Senhor, nosso Deus, fez.",
              "role": "resposta"
            },
            {
              "text": "Ele nos vestiu com a roupa da salvação",
              "role": "chamada"
            },
            {
              "text": "E com a capa da vitória.",
              "role": "resposta"
            },
            {
              "text": "Somos como um noivo que põe um turbante de festa na cabeça,",
              "role": "chamada"
            },
            {
              "text": "Como uma noiva enfeitada com jóias.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "A vida inteira eu louvarei o meu Deus,",
              "role": "chamada"
            },
            {
              "text": "Cantarei louvores a ele enquanto eu viver.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 112.3-6; antífona Salmo 112.1",
          "linhas": [
            {
              "text": "Aleluia! Feliz aquele que teme a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Que tem prazer em obedecer aos seus mandamentos!",
              "role": "resposta"
            },
            {
              "text": "Na sua casa há muita riqueza,",
              "role": "chamada"
            },
            {
              "text": "E ele é sempre bem-sucedido.",
              "role": "resposta"
            },
            {
              "text": "A luz brilha na escuridão para aqueles que são corretos,",
              "role": "chamada"
            },
            {
              "text": "Para aqueles que são bondosos, misericordiosos e honestos.",
              "role": "resposta"
            },
            {
              "text": "Feliz aquele que tem pena dos outros e empresta generosamente",
              "role": "chamada"
            },
            {
              "text": "E que dirige os seus negócios com honestidade!",
              "role": "resposta"
            },
            {
              "text": "Quem é correto nunca fracassará",
              "role": "chamada"
            },
            {
              "text": "E será lembrado para sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Aleluia! Feliz aquele que teme a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Que tem prazer em obedecer aos seus mandamentos!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 34.2-4,17; antífona Salmo 48.1",
          "linhas": [
            {
              "text": "O Senhor Deus é grande e merece ser louvado na sua cidade,",
              "role": "chamada"
            },
            {
              "text": "Em Sião, o seu monte santo.",
              "role": "resposta"
            },
            {
              "text": "Eu o louvarei por causa das coisas que ele tem feito;",
              "role": "chamada"
            },
            {
              "text": "Os que são perseguidos ouvirão isso e se alegrarão.",
              "role": "resposta"
            },
            {
              "text": "Anunciem comigo a sua grandeza;",
              "role": "chamada"
            },
            {
              "text": "Louvemos juntos o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Eu pedi a ajuda do Senhor, e ele me respondeu;",
              "role": "chamada"
            },
            {
              "text": "Ele me livrou de todos os meus medos.",
              "role": "resposta"
            },
            {
              "text": "Quando as pessoas honestas chamam o Senhor, ele as ouve",
              "role": "chamada"
            },
            {
              "text": "E as livra de todas as suas aflições.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor Deus é grande e merece ser louvado na sua cidade,",
              "role": "chamada"
            },
            {
              "text": "Em Sião, o seu monte santo.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 91.11; 103.1",
      "linhas": [
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Apocalipse 22.17",
          "linhas": [
            {
              "text": "Aleluia. O Espírito e a Noiva dizem: Venha! Aquele que ouve isso diga também: Venha! Aquele que tem sede venha. E quem quiser receba de graça da água da vida. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Gálatas 6.2",
          "linhas": [
            {
              "text": "Aleluia. Ajudem uns aos outros e assim vocês estarão obedecendo à lei de",
              "role": "chamada"
            },
            {
              "text": "Cristo. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 5.15",
          "linhas": [
            {
              "text": "Aleluia. Mas as notícias a respeito de Jesus se espalhavam ainda mais, e muita gente vinha para ouvi-lo e para ser curada das suas doenças. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 24": {
    "oracao": {
      "series": {
        "A": "Ó Deus, protetor de todos que confiam em ti, tem misericórdia de nós a fim de que, tendo a ti como aquele que nos governa e orienta, possamos passar através das coisas deste mundo de tal forma que não percamos as eternas; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Deus, tua sabedoria divina coloca em ordem todas as coisas nos céus e na terra. Afasta de nós todas as coisas prejudiciais e nos dá aquelas que são benéficas para nós; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, todo-poderoso e eterno Deus, que ordenaste que orássemos e que prometeste atender-nos, concede misericordiosamente que teu Espírito Santo possa dirigir e governar nossos corações em todas as coisas, a fim de que perseveremos com fé na confissão do teu nome; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 121.1-4,7-8; antífona Salmo 121.5",
          "linhas": [
            {
              "text": "O Senhor guardará você;",
              "role": "chamada"
            },
            {
              "text": "Ele está sempre ao seu lado para protegê-lo.",
              "role": "resposta"
            },
            {
              "text": "Olho para os montes e pergunto:",
              "role": "chamada"
            },
            {
              "text": "De onde virá o meu socorro?",
              "role": "resposta"
            },
            {
              "text": "O meu socorro vem do Senhor Deus,",
              "role": "chamada"
            },
            {
              "text": "Que fez o céu e a terra.",
              "role": "resposta"
            },
            {
              "text": "Ele, o seu protetor, está sempre alerta",
              "role": "chamada"
            },
            {
              "text": "E não deixará que você caia.",
              "role": "resposta"
            },
            {
              "text": "O protetor do povo de Israel",
              "role": "chamada"
            },
            {
              "text": "Nunca dorme, nem cochila.",
              "role": "resposta"
            },
            {
              "text": "O Senhor guardará você de todo perigo;",
              "role": "chamada"
            },
            {
              "text": "Ele protegerá a sua vida.",
              "role": "resposta"
            },
            {
              "text": "Ele o guardará quando você for e quando voltar,",
              "role": "chamada"
            },
            {
              "text": "Agora e sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O Senhor guardará você;",
              "role": "chamada"
            },
            {
              "text": "Ele está sempre ao seu lado para protegê-lo.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 34.1-4,17; antífona Salmo 34.18",
          "linhas": [
            {
              "text": "Ele fica perto dos que estão desanimados",
              "role": "chamada"
            },
            {
              "text": "E salva os que perderam a esperança.",
              "role": "resposta"
            },
            {
              "text": "Eu sempre darei graças a Deus, o Senhor;",
              "role": "chamada"
            },
            {
              "text": "O seu louvor estará nos meus lábios o dia inteiro.",
              "role": "resposta"
            },
            {
              "text": "Eu o louvarei por causa das coisas que ele tem feito;",
              "role": "chamada"
            },
            {
              "text": "Os que são perseguidos ouvirão isso e se alegrarão.",
              "role": "resposta"
            },
            {
              "text": "Anunciem comigo a sua grandeza;",
              "role": "chamada"
            },
            {
              "text": "Louvemos juntos o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Eu pedi a ajuda do Senhor, e ele me respondeu;",
              "role": "chamada"
            },
            {
              "text": "Ele me livrou de todos os meus medos.",
              "role": "resposta"
            },
            {
              "text": "Quando as pessoas honestas chamam o Senhor, ele as ouve",
              "role": "chamada"
            },
            {
              "text": "E as livra de todas as suas aflições.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ele fica perto dos que estão desanimados",
              "role": "chamada"
            },
            {
              "text": "E salva os que perderam a esperança.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 74.18-19,21,20a,22a; antífona Salmo 74.2a",
          "linhas": [
            {
              "text": "Lembra do teu povo, que há tanto tempo escolheste para ser teu",
              "role": "chamada"
            },
            {
              "text": "E que livraste da escravidão para ser a tua própria gente.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, lembra que os teus inimigos zombam de ti!",
              "role": "chamada"
            },
            {
              "text": "Lembra que eles não têm juízo e xingam o teu nome.",
              "role": "resposta"
            },
            {
              "text": "Não entregues o teu povo explorado aos seus inimigos cruéis.",
              "role": "chamada"
            },
            {
              "text": "Não esqueças para sempre do teu povo perseguido.",
              "role": "resposta"
            },
            {
              "text": "Não deixes que os perseguidos sejam humilhados,",
              "role": "chamada"
            },
            {
              "text": "Mas permite que os pobres e os necessitados te louvem.",
              "role": "resposta"
            },
            {
              "text": "Lembra da aliança que fizeste;",
              "role": "chamada"
            },
            {
              "text": "Levanta-te, ó Deus, e defende a tua causa!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Lembra do teu povo, que há tanto tempo escolheste para ser teu",
              "role": "chamada"
            },
            {
              "text": "E que livraste da escravidão para ser a tua própria gente.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 91.11; 103.1",
      "linhas": [
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Colossenses 2.10 (alt.)",
          "linhas": [
            {
              "text": "Aleluia. Vocês estão unidos com Cristo, que domina todos os poderes e autoridades espirituais. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 10.27b",
          "linhas": [
            {
              "text": "Aleluia. Para os seres humanos isso não é possível; mas, para Deus, é. Pois, para Deus, tudo é possível. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 18.8",
          "linhas": [
            {
              "text": "Aleluia. Eu afirmo a vocês que ele julgará a favor do seu povo e fará isso bem depressa. Mas, quando o Filho do Homem vier, será que vai encontrar fé na terra? Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 25": {
    "oracao": {
      "series": {
        "A": "Ó Deus, que nos ordenaste amar a ti acima de todas as coisas e ao nosso próximo como a nós mesmos, concede-nos o Espírito para pensar e fazer o que é agradável a ti, a fim de que nossa fé em ti nunca vacile e nosso amor uns pelos outros nunca enfraqueça; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Deus, auxiliador de todos que recorrem a ti, tem misericórdia de nós e nos dá os olhos da fé para vermos teu Filho, a fim de o seguirmos no caminho que leva à vida eterna; através do mesmo Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Todo-poderoso e eterno Deus, que sempre estás mais pronto a ouvir do que nós a pedir, e sempre estás pronto a dar mais do que desejamos ou merecemos, derrama sobre nós a abundância da tua misericórdia, perdoanos aquelas coisas com as quais a nossa consciência está apreensiva e nos dá aquelas coisas boas que não somos dignos de pedir, exceto pelos méritos e por meio de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 9.1-2,9-10; antífona Salmo 9.18",
          "linhas": [
            {
              "text": "Os pobres não serão esquecidos para sempre,",
              "role": "chamada"
            },
            {
              "text": "E os necessitados não perderão para sempre a esperança.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, eu te louvarei com todo o coração",
              "role": "chamada"
            },
            {
              "text": "E contarei todas as coisas maravilhosas que tens feito.",
              "role": "resposta"
            },
            {
              "text": "Por causa de ti eu me alegrarei e ficarei feliz.",
              "role": "chamada"
            },
            {
              "text": "Cantarei louvores a ti, ó Deus Altíssimo.",
              "role": "resposta"
            },
            {
              "text": "O Senhor é um abrigo para os que são perseguidos;",
              "role": "chamada"
            },
            {
              "text": "Ele os protege em tempos de aflição.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor, aqueles que te conhecem confiam em ti,",
              "role": "chamada"
            },
            {
              "text": "Pois não abandonas os que procuram a tua ajuda.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Os pobres não serão esquecidos para sempre,",
              "role": "chamada"
            },
            {
              "text": "E os necessitados não perderão para sempre a esperança.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 131; antífona Salmo 130.1-2",
          "linhas": [
            {
              "text": "Ó Senhor Deus, eu te chamei quando estava em profundo desespero.",
              "role": "chamada"
            },
            {
              "text": "Escuta o meu grito, ó Senhor! Ouve o meu pedido de socorro.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, eu já não sou orgulhoso; deixei de olhar os outros com arrogância.",
              "role": "chamada"
            },
            {
              "text": "Não vou atrás das coisas grandes e extraordinárias, que estão fora do meu alcance.",
              "role": "resposta"
            },
            {
              "text": "Assim, como a criança desmamada fica quieta nos braços da mãe,",
              "role": "chamada"
            },
            {
              "text": "Assim eu estou satisfeito e tranqüilo, e o meu coração está calmo dentro de mim.",
              "role": "resposta"
            },
            {
              "text": "Povo de Israel, ponha a sua esperança em Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Agora e sempre!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, eu te chamei quando estava em profundo desespero.",
              "role": "chamada"
            },
            {
              "text": "Escuta o meu grito, ó Senhor! Ouve o meu pedido de socorro.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 56.10-13; antífona Salmo 56.3",
          "linhas": [
            {
              "text": "Quando estou com medo,",
              "role": "chamada"
            },
            {
              "text": "Eu confio em ti, ó Deus Todo-Poderoso.",
              "role": "resposta"
            },
            {
              "text": "Eu louvo a promessa de Deus,",
              "role": "chamada"
            },
            {
              "text": "A promessa de Deus, o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Confio nele e não terei medo de nada.",
              "role": "chamada"
            },
            {
              "text": "O que podem me fazer simples seres humanos?",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, eu te darei o que prometi,",
              "role": "chamada"
            },
            {
              "text": "Eu te darei a minha oferta de louvor",
              "role": "resposta"
            },
            {
              "text": "Porque me salvaste da morte e não deixaste que eu fosse derrotado.",
              "role": "chamada"
            },
            {
              "text": "Assim, ó Deus, eu ando na tua presença, eu ando na luz da vida.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Quando estou com medo,",
              "role": "chamada"
            },
            {
              "text": "Eu confio em ti, ó Deus Todo-Poderoso.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Salmo 91.11; 103.1",
      "linhas": [
        {
          "text": "Deus mandará que os anjos dele cuidem de você",
          "role": "chamada"
        },
        {
          "text": "Para protegê-lo aonde quer que você for.",
          "role": "resposta"
        },
        {
          "text": "Ó Senhor Deus, que todo o meu ser te louve!",
          "role": "chamada"
        },
        {
          "text": "Que eu louve o Santo Deus com todas as minhas forças!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 22.37b",
          "linhas": [
            {
              "text": "Aleluia. Ame o Senhor, seu Deus, com todo o coração, com toda a alma e com toda a mente. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Hebreus 12.2a",
          "linhas": [
            {
              "text": "Aleluia. Conservemos os nossos olhos fixos em Jesus, pois é por meio dele que a nossa fé começa, e é ele quem a aperfeiçoa. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 18.16b",
          "linhas": [
            {
              "text": "Aleluia. Deixem que as crianças venham a mim e não proíbam que elas façam isso, pois o Reino de Deus é das pessoas que são como estas crianças. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 26": {
    "oracao": {
      "series": {
        "A": "Misericordioso e gracioso Senhor, que fazes com que a tua Palavra seja proclamada a cada geração, ergue nossos corações e mentes pelo teu Espírito Santo a fim de recebermos esta proclamação com humildade e finalmente sermos exaltados na vinda de teu Filho, nosso Salvador Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Senhor Jesus Cristo, nosso grande Sumo-Sacerdote, limpa-nos pelo poder de teu sangue redentor, a fim de que, em pureza e paz, prestemos culto e adoremos o teu santo nome; pois tu vives e reinas contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, ergue os corações de teu povo fiel para dar as boas vindas e com alegria receber teu Filho, nosso Salvador Jesus Cristo, a fim de que ele encontre em nós um digno local de habitação; que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 149.1-4; antífona Salmo 148.13",
          "linhas": [
            {
              "text": "Que todos louvem a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Porque ele é superior a todos os outros deuses!",
              "role": "resposta"
            },
            {
              "text": "Aleluia! Cantem a Deus, o Senhor, uma nova canção.",
              "role": "chamada"
            },
            {
              "text": "Louvem a Deus na reunião dos seus servos fiéis.",
              "role": "resposta"
            },
            {
              "text": "Alegre-se, ó povo de Israel, por causa do seu Criador!",
              "role": "chamada"
            },
            {
              "text": "Fique contente, ó povo de Jerusalém, por causa do seu Rei!",
              "role": "resposta"
            },
            {
              "text": "Louvem a Deus, o Senhor, com danças",
              "role": "chamada"
            },
            {
              "text": "E, em seu louvor, toquem pandeiros e liras.",
              "role": "resposta"
            },
            {
              "text": "Pois o Senhor está contente com o seu povo;",
              "role": "chamada"
            },
            {
              "text": "Ele dá aos humildes a honra da vitória.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que todos louvem a Deus, o Senhor,",
              "role": "chamada"
            },
            {
              "text": "Porque ele é superior a todos os outros deuses!",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 89.1-4; antífona Salmo 9.1",
          "linhas": [
            {
              "text": "Ó Senhor Deus, eu te louvarei com todo o coração",
              "role": "chamada"
            },
            {
              "text": "E contarei todas as coisas maravilhosas que tens feito.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, eu sempre cantarei a respeito do teu amor",
              "role": "chamada"
            },
            {
              "text": "E anunciarei a tua fidelidade a todas as gerações.",
              "role": "resposta"
            },
            {
              "text": "Sei que o teu amor dura para sempre",
              "role": "chamada"
            },
            {
              "text": "E que a tua fidelidade é tão firme como o céu.",
              "role": "resposta"
            },
            {
              "text": "Tu disseste: Eu escolhi o meu servo Davi,",
              "role": "chamada"
            },
            {
              "text": "Fiz uma aliança com ele e lhe prometi isto:",
              "role": "resposta"
            },
            {
              "text": "Um dos seus descendentes sempre reinará;",
              "role": "chamada"
            },
            {
              "text": "Eu farei com que eles sempre sejam reis depois de você.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, eu te louvarei com todo o coração",
              "role": "chamada"
            },
            {
              "text": "E contarei todas as coisas maravilhosas que tens feito.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 50.1-2,14-15; antífona Salmo 50.23",
          "linhas": [
            {
              "text": "Aquele que me traz ofertas de gratidão está me honrando,",
              "role": "chamada"
            },
            {
              "text": "E eu salvarei todos os que andam nos meus caminhos.",
              "role": "resposta"
            },
            {
              "text": "Deus, o Senhor Deus, fala e chama todos os moradores do mundo,",
              "role": "chamada"
            },
            {
              "text": "De um lado da terra ao outro.",
              "role": "resposta"
            },
            {
              "text": "Deus brilha lá de Jerusalém,",
              "role": "chamada"
            },
            {
              "text": "A cidade de perfeita beleza.",
              "role": "resposta"
            },
            {
              "text": "Que a gratidão de vocês seja o sacrifício que oferecem a Deus,",
              "role": "chamada"
            },
            {
              "text": "E que vocês dêem ao Deus Altíssimo tudo aquilo que prometeram!",
              "role": "resposta"
            },
            {
              "text": "Se me chamarem no dia da aflição,",
              "role": "chamada"
            },
            {
              "text": "Eu os livrarei, e vocês me louvarão.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Aquele que me traz ofertas de gratidão está me honrando,",
              "role": "chamada"
            },
            {
              "text": "E eu salvarei todos os que andam nos meus caminhos.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Apocalipse 7.14b; Salmo 84.5",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Felizes são aqueles que de ti recebem forças",
          "role": "chamada"
        },
        {
          "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 23.12",
          "linhas": [
            {
              "text": "Aleluia. Quem se engrandece será humilhado, mas quem se humilha será engrandecido. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 12.29b",
          "linhas": [
            {
              "text": "Aleluia. Escute, povo de Israel! O Senhor, nosso Deus, é o único Senhor. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 19.9b,10",
          "linhas": [
            {
              "text": "Aleluia. Hoje a salvação entrou nesta casa, pois este homem também é descendente de Abraão. Porque o Filho do Homem veio buscar e salvar quem está perdido. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 27": {
    "oracao": {
      "series": {
        "A": "Senhor Deus, Pai celestial, envia teu Filho para levar para casa sua noiva, a Igreja, a fim de que, com toda a companhia dos redimidos, possamos finalmente entrar em sua festa eterna de casamento; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Deus Todo-poderoso e sempre vivo, que fizeste promessas extraordinariamente grandes e preciosas àqueles que confiam em ti, concede que com tal firmeza creiamos em teu Filho Jesus que nossa fé nunca esteja ausente; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Deus vivo, teu grande poder é tornado conhecido principalmente ao mostrar misericórdia e piedade. Concede-nos a totalidade da tua graça para nos agarrarmos às tuas promessas e vivermos para sempre em tua presença; através de Jesus Cristo, teu Filho, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 84.1,9-12; antífona Salmo 84.3",
          "linhas": [
            {
              "text": "Ó Senhor Todo-Poderoso, meu Rei e meu Deus,",
              "role": "chamada"
            },
            {
              "text": "Perto dos teus altares os pardais constroem o seu ninho, e as andorinhas fazem a sua casa, onde cuidam dos seus filhotes.",
              "role": "resposta"
            },
            {
              "text": "Como eu amo o teu Templo,",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Todo-Poderoso!",
              "role": "resposta"
            },
            {
              "text": "Ó Deus, abençoa o nosso protetor,",
              "role": "chamada"
            },
            {
              "text": "O rei que tu escolheste!",
              "role": "resposta"
            },
            {
              "text": "É melhor passar um dia no teu Templo do que mil dias em qualquer outro lugar.",
              "role": "chamada"
            },
            {
              "text": "Eu gostaria mais de ficar no portão de entrada da casa do meu Deus do que morar nas casas dos maus.",
              "role": "resposta"
            },
            {
              "text": "O Senhor Deus é a nossa luz e o nosso escudo.",
              "role": "chamada"
            },
            {
              "text": "Ele ama e honra os que fazem o que é certo e lhes dá tudo o que é bom.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Todo-Poderoso,",
              "role": "chamada"
            },
            {
              "text": "Como são felizes aqueles que confiam em ti!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Todo-Poderoso, meu Rei e meu Deus,",
              "role": "chamada"
            },
            {
              "text": "Perto dos teus altares os pardais constroem o seu ninho, e as andorinhas fazem a sua casa, onde cuidam dos seus filhotes.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 107.1-2,41-42; antífona Salmo 107.8",
          "linhas": [
            {
              "text": "Que eles agradeçam ao Senhor o seu amor",
              "role": "chamada"
            },
            {
              "text": "E as coisas maravilhosas que fez por eles!",
              "role": "resposta"
            },
            {
              "text": "Dêem graças a Deus, o Senhor, porque ele é bom,",
              "role": "chamada"
            },
            {
              "text": "E porque o seu amor dura para sempre.",
              "role": "resposta"
            },
            {
              "text": "Que aqueles que ele libertou repitam isso em louvor ao Senhor!",
              "role": "chamada"
            },
            {
              "text": "Ele os livrou das mãos dos seus inimigos.",
              "role": "resposta"
            },
            {
              "text": "Ele livrou os pobres da miséria",
              "role": "chamada"
            },
            {
              "text": "E fez com que as suas famílias aumentassem como rebanhos.",
              "role": "resposta"
            },
            {
              "text": "Os que são bons vêem isso e ficam contentes,",
              "role": "chamada"
            },
            {
              "text": "Mas todos os maus têm de calar a boca.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que eles agradeçam ao Senhor o seu amor",
              "role": "chamada"
            },
            {
              "text": "E as coisas maravilhosas que fez por eles!",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 115.2-4,8,17-18; antífona Salmo 115.11",
          "linhas": [
            {
              "text": "Confiem no Senhor, todos os que o temem!",
              "role": "chamada"
            },
            {
              "text": "Ele é a ajuda e o escudo de vocês.",
              "role": "resposta"
            },
            {
              "text": "Por que é que as outras nações nos perguntam:",
              "role": "chamada"
            },
            {
              "text": "Onde está o Deus de vocês?",
              "role": "resposta"
            },
            {
              "text": "Nós respondemos: O nosso Deus está no céu;",
              "role": "chamada"
            },
            {
              "text": "Ele faz tudo o que quer.",
              "role": "resposta"
            },
            {
              "text": "Os deuses das outras nações são de prata e de ouro,",
              "role": "chamada"
            },
            {
              "text": "São feitos por seres humanos.",
              "role": "resposta"
            },
            {
              "text": "Que fiquem iguais a esses ídolos aqueles que os fazem",
              "role": "chamada"
            },
            {
              "text": "E os que confiam neles!",
              "role": "resposta"
            },
            {
              "text": "Os mortos, que descem à terra do silêncio,",
              "role": "chamada"
            },
            {
              "text": "Não louvam a Deus, o Senhor.",
              "role": "resposta"
            },
            {
              "text": "Mas nós, que estamos vivos, daremos graças ao Senhor",
              "role": "chamada"
            },
            {
              "text": "Agora e para sempre. Aleluia!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Confiem no Senhor, todos os que o temem!",
              "role": "chamada"
            },
            {
              "text": "Ele é a ajuda e o escudo de vocês.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Apocalipse 7.14b; Salmo 84.5",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Felizes são aqueles que de ti recebem forças",
          "role": "chamada"
        },
        {
          "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 25.13",
          "linhas": [
            {
              "text": "Aleluia. Portanto, fiquem vigiando porque vocês não sabem qual será o dia e a hora. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "2 Coríntios 8.9",
          "linhas": [
            {
              "text": "Aleluia. Vocês já conhecem o grande amor do nosso Senhor Jesus Cristo: ele era rico, mas, por amor a vocês, ele se tornou pobre a fim de que vocês se tornassem ricos por meio da pobreza dele. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 20.38",
          "linhas": [
            {
              "text": "Aleluia. Deus é Deus dos vivos e não dos mortos, pois para ele todos estão vivos. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 28": {
    "oracao": {
      "series": {
        "A": "Deus Todo-poderoso e sempre vivo, que fizeste promessas extraordinariamente grandes e preciosas àqueles que confiam em ti, afasta de nós as obras das trevas e concede-nos viver na luz de teu Filho Jesus Cristo, a fim de que nossa fé nunca esteja ausente; através do mesmo Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Ó Senhor, pela tua generosa bondade livra-nos da escravidão dos nossos pecados, que por causa da nossa fraqueza trouxemos sobre nós, a fim de ficarmos firmes até o dia de nosso Senhor Jesus Cristo, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Ó Senhor, Deus Todo-poderoso e sempre vivo, que fizeste promessas extraordinariamente grandes e preciosas àqueles que confiam em ti, dirige e governa nossos corações e mentes pelo teu Espírito Santo, para que vivamos e habitemos para sempre com teu Filho, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 143.2,5-6,10-11; antífona Salmo 143.1",
          "linhas": [
            {
              "text": "Ó Senhor Deus, ouve a minha oração! Escuta o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Responde-me, pois és fiel e bom.",
              "role": "resposta"
            },
            {
              "text": "Não julgues a mim, este teu servo,",
              "role": "chamada"
            },
            {
              "text": "Pois ninguém é inocente diante de ti.",
              "role": "resposta"
            },
            {
              "text": "Eu lembro do passado. Penso em tudo o que tens feito",
              "role": "chamada"
            },
            {
              "text": "E não esqueço as tuas ações.",
              "role": "resposta"
            },
            {
              "text": "A ti levanto as mãos em oração;",
              "role": "chamada"
            },
            {
              "text": "Como terra seca, eu tenho sede de ti.",
              "role": "resposta"
            },
            {
              "text": "Tu és o meu Deus; ensina-me a fazer a tua vontade.",
              "role": "chamada"
            },
            {
              "text": "Que o teu Espírito seja bom para mim e me guie por um caminho seguro!",
              "role": "resposta"
            },
            {
              "text": "Conserva-me vivo, ó Senhor, como prometeste!",
              "role": "chamada"
            },
            {
              "text": "E, porque és bom, livra-me das minhas aflições.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Ó Senhor Deus, ouve a minha oração! Escuta o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Responde-me, pois és fiel e bom.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 48.11-14; antífona Marcos 13.13b",
          "linhas": [
            {
              "text": "Quem ficar firme até o fim",
              "role": "chamada"
            },
            {
              "text": "Será salvo.",
              "role": "resposta"
            },
            {
              "text": "Alegre-se, povo de Jerusalém! Ó Deus, os teus julgamentos são justos!",
              "role": "chamada"
            },
            {
              "text": "Alegrem-se com isso, moradores das cidades de Judá!",
              "role": "resposta"
            },
            {
              "text": "Povo de Deus, ande em volta de Jerusalém",
              "role": "chamada"
            },
            {
              "text": "E conte as suas torres!",
              "role": "resposta"
            },
            {
              "text": "Olhem todos com atenção as suas muralhas e examinem as suas fortalezas.",
              "role": "chamada"
            },
            {
              "text": "Assim vocês poderão dizer aos seus descendentes:",
              "role": "resposta"
            },
            {
              "text": "Este Deus é o nosso Deus para sempre.",
              "role": "chamada"
            },
            {
              "text": "Ele nos guiará eternamente.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Quem ficar firme até o fim",
              "role": "chamada"
            },
            {
              "text": "Será salvo.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 121.1-2,5,7-8; antífona Lucas 21.33",
          "linhas": [
            {
              "text": "O céu e a terra desaparecerão,",
              "role": "chamada"
            },
            {
              "text": "Mas as minhas palavras ficarão para sempre.",
              "role": "resposta"
            },
            {
              "text": "Olho para os montes e pergunto:",
              "role": "chamada"
            },
            {
              "text": "De onde virá o meu socorro?",
              "role": "resposta"
            },
            {
              "text": "O meu socorro vem do Senhor Deus,",
              "role": "chamada"
            },
            {
              "text": "Que fez o céu e a terra.",
              "role": "resposta"
            },
            {
              "text": "O Senhor guardará você;",
              "role": "chamada"
            },
            {
              "text": "Ele está sempre ao seu lado para protegê-lo.",
              "role": "resposta"
            },
            {
              "text": "O Senhor guardará você de todo perigo;",
              "role": "chamada"
            },
            {
              "text": "Ele protegerá a sua vida.",
              "role": "resposta"
            },
            {
              "text": "Ele o guardará quando você for e quando voltar,",
              "role": "chamada"
            },
            {
              "text": "Agora e sempre.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "O céu e a terra desaparecerão,",
              "role": "chamada"
            },
            {
              "text": "Mas as minhas palavras ficarão para sempre.",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Apocalipse 7.14b; Salmo 84.5",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Felizes são aqueles que de ti recebem forças",
          "role": "chamada"
        },
        {
          "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Mateus 25.29a",
          "linhas": [
            {
              "text": "Aleluia. Porque aquele que tem muito receberá mais e assim terá mais ainda.",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Marcos 13.13b",
          "linhas": [
            {
              "text": "Aleluia. Quem ficar firme até o fim será salvo. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 21.28b",
          "linhas": [
            {
              "text": "Aleluia. Fiquem firmes e de cabeça erguida, pois logo vocês serão salvos.",
              "role": "chamada"
            },
            {
              "text": "Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  },
  "Próprio 29": {
    "oracao": {
      "series": {
        "A": "Eterno Deus, misericordioso Pai, que escolheste teu Filho como juiz dos vivos e dos mortos, capacita-nos a esperar pelo dia da sua volta com nossos olhos fixos no Reino preparado por ti mesmo desde a fundação do mundo; através de Jesus Cristo, nosso Senhor, que vive e reina contigo e o Espírito Santo, um só Deus, agora e sempre.",
        "B": "Senhor Jesus Cristo, governa nossos corações e mentes de tal maneira pelo teu Espírito Santo a fim de que, mesmo conscientes do teu glorioso retorno, perseveremos na fé e em santidade de vida; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre.",
        "C": "Senhor Jesus Cristo, que reinas entre nós pela pregação da tua cruz, perdoa as ofensas do teu povo a fim de que, sendo governados por tua generosa bondade, entremos afinal em teu paraíso eterno; pois tu vives e reinas com o Pai e o Espírito Santo, um só Deus, agora e sempre."
      }
    },
    "introito": {
      "series": {
        "A": {
          "ref": "Salmo 39.4-5,7-8,12; antífona 2 Pedro 3.13",
          "linhas": [
            {
              "text": "Deus prometeu, e nós estamos esperando um novo céu e uma nova terra,",
              "role": "chamada"
            },
            {
              "text": "Onde tudo será feito de acordo com a vontade dele.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, quanto tempo ainda vou viver?",
              "role": "chamada"
            },
            {
              "text": "Mostra-me como é passageira a minha vida. Quando é que vou morrer?",
              "role": "resposta"
            },
            {
              "text": "Como é curta a vida que me deste! Diante de ti, a duração da minha vida não é nada.",
              "role": "chamada"
            },
            {
              "text": "De fato, o ser humano é apenas um sopro.",
              "role": "resposta"
            },
            {
              "text": "E agora, Senhor, o que posso esperar?",
              "role": "chamada"
            },
            {
              "text": "A minha esperança está em ti.",
              "role": "resposta"
            },
            {
              "text": "Livra-me de todos os meus pecados",
              "role": "chamada"
            },
            {
              "text": "E não deixes que os tolos zombem de mim.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, ouve a minha oração! Escuta o meu pedido. Não te cales quando choro.",
              "role": "chamada"
            },
            {
              "text": "Como todos os meus antepassados, sou teu hóspede por pouco tempo.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Deus prometeu, e nós estamos esperando um novo céu e uma nova terra,",
              "role": "chamada"
            },
            {
              "text": "Onde tudo será feito de acordo com a vontade dele.",
              "role": "resposta"
            }
          ]
        },
        "B": {
          "ref": "Salmo 39.4-5a,7-8,12a; antífona 2 Pedro 3.13b",
          "linhas": [
            {
              "text": "Estamos esperando um novo céu e uma nova terra,",
              "role": "chamada"
            },
            {
              "text": "Onde tudo será feito de acordo com a vontade dele.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, quanto tempo ainda vou viver?",
              "role": "chamada"
            },
            {
              "text": "Mostra-me como é passageira a minha vida. Quando é que vou morrer?",
              "role": "resposta"
            },
            {
              "text": "Como é curta a vida que me deste!",
              "role": "chamada"
            },
            {
              "text": "Diante de ti, a duração da minha vida não é nada.",
              "role": "resposta"
            },
            {
              "text": "E agora, Senhor, o que posso esperar?",
              "role": "chamada"
            },
            {
              "text": "A minha esperança está em ti.",
              "role": "resposta"
            },
            {
              "text": "Livra-me de todos os meus pecados",
              "role": "chamada"
            },
            {
              "text": "E não deixes que os tolos zombem de mim.",
              "role": "resposta"
            },
            {
              "text": "Ó Senhor Deus, ouve a minha oração! Escuta o meu pedido.",
              "role": "chamada"
            },
            {
              "text": "Não te cales quando choro.",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Estamos esperando um novo céu e uma nova terra,",
              "role": "chamada"
            },
            {
              "text": "Onde tudo será feito de acordo com a vontade dele.",
              "role": "resposta"
            }
          ]
        },
        "C": {
          "ref": "Salmo 134; antífona Salmo 33.8",
          "linhas": [
            {
              "text": "Que toda a terra tema a Deus, o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Que todos os habitantes do mundo o temam!",
              "role": "resposta"
            },
            {
              "text": "Venham e louvem a Deus, o Senhor, todos os seus servos,",
              "role": "chamada"
            },
            {
              "text": "Todos os que de noite servem no seu Templo!",
              "role": "resposta"
            },
            {
              "text": "Levantem as mãos em oração no Templo",
              "role": "chamada"
            },
            {
              "text": "E louvem o Senhor!",
              "role": "resposta"
            },
            {
              "text": "Que de Jerusalém o Senhor Deus, que fez o céu e a terra,",
              "role": "chamada"
            },
            {
              "text": "Abençoe vocês!",
              "role": "resposta"
            },
            {
              "text": "Glória ao Pai e ao Filho e ao Espírito Santo, como era no princípio, agora é, e para sempre será – de eternidade a eternidade. Amém.",
              "role": "chamada"
            },
            {
              "text": "Que toda a terra tema a Deus, o Senhor!",
              "role": "chamada"
            },
            {
              "text": "Que todos os habitantes do mundo o temam!",
              "role": "resposta"
            }
          ]
        }
      }
    },
    "gradual": {
      "ref": "Apocalipse 7.14b; Salmo 84.5",
      "linhas": [
        {
          "text": "Estes são os que atravessaram sãos e salvos a grande perseguição.",
          "role": "chamada"
        },
        {
          "text": "São as pessoas que lavaram as suas roupas no sangue do Cordeiro, e elas ficaram brancas.",
          "role": "resposta"
        },
        {
          "text": "Felizes são aqueles que de ti recebem forças",
          "role": "chamada"
        },
        {
          "text": "E que desejam andar pelas estradas que levam ao monte Sião!",
          "role": "resposta"
        }
      ]
    },
    "verso": {
      "series": {
        "A": {
          "ref": "Apocalipse 22.13",
          "linhas": [
            {
              "text": "Aleluia. Eu sou o Alfa e o Ômega, o Primeiro e o Último, o Princípio e o Fim. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "B": {
          "ref": "Apocalipse 22.13",
          "linhas": [
            {
              "text": "Aleluia. Eu sou o Alfa e o Ômega, o Primeiro e o Último, o Princípio e o Fim. Aleluia.",
              "role": "chamada"
            }
          ]
        },
        "C": {
          "ref": "Lucas 23.43",
          "linhas": [
            {
              "text": "Aleluia. Eu afirmo a você que isto é verdade: hoje você estará comigo no paraíso. Aleluia.",
              "role": "chamada"
            }
          ]
        }
      }
    }
  }
};
