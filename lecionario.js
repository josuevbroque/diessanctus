/* ==========================================================================
   DADOS DO LECIONÁRIO — Lecionário Trienal (Hinário Luterano / IELB)
   ==========================================================================
   Extraído de index.html para permitir cache independente do navegador e
   deixar o HTML mais enxuto. Contém: cores litúrgicas, ciclos de leitura
   (A/B/C), dias festivos de data fixa, comemorações, imagens associadas a
   comemorações/próprios, e o mapeamento de livros bíblicos usado para
   buscar o texto das leituras.

   Carregado antes do script principal (assim como oracoes.js) — as
   funções que consomem estes dados (comemoracaoDoDia, resolveToday,
   renderTexto, etc.) continuam em index.html e simplesmente leem estas
   mesmas variáveis globais.
   ========================================================================== */

/* ---------- Dados do lecionário (Trienal A / B / C) ---------- */
/* Cada leitura: [Salmo, Antigo Testamento, Epístola, Evangelho] */
const CYCLES = {
A: {
  advento: [
    ["Sl 122","Is 2.1-5","Rm 13.(8-10)11-14","Mt 21.1-11 ou Mt 24.36-44"],
    ["Sl 72.1-7","Is 11.1-10","Rm 15.4-13","Mt 3.1-12"],
    ["Sl 146","Is 35.1-10","Tg 5.7-10","Mt 11.2-15"],
    ["Sl 24","Is 7.10-17","Rm 1.1-7","Mt 1.18-25"]
  ],
  vespNatal: ["Sl 110.1-4","Is 7.10-14","1Jo 4.7-16","Mt 1.18-25"],
  diaNatal: ["Sl 2","Is 52.7-10","Hb 1.1-6(7-12)","Jo 1.1-14(15-18)"],
  natal1: ["Sl 111","Is 63.7-14","Gl 4.4-7","Mt 2.13-23"],
  natal2: ["Sl 119.97-104","1Rs 3.4-15","Ef 1.3-14","Lc 2.40-52"],
  epifania: ["Sl 72.1-11(12-15)","Is 60.1-6","Ef 3.1-12","Mt 2.1-12"],
  epifaniaDom: [
    ["Sl 29","Is 42.1-9","Rm 6.1-11","Mt 3.13-17"],
    ["Sl 40.1-11","Is 49.1-7","1Co 1.1-9","Jo 1.29-42a"],
    ["Sl 27.1-9(10-14)","Is 9.1-4","1Co 1.10-18","Mt 4.12-25"],
    ["Sl 15","Mq 6.1-8","1Co 1.18-31","Mt 5.1-12"],
    ["Sl 112.1-9","Is 58.3-9a","1Co 2.1-12(13-16)","Mt 5.13-20"],
    ["Sl 119.1-8","Dt 30.15-20","1Co 3.1-9","Mt 5.21-37"],
    ["Sl 119.33-40","Lv 19.1-2,9-18","1Co 3.10-23","Mt 5.38-48"],
    ["Sl 115.(1-8)9-18","Is 49.8-16a","1Co 4.1-13","Mt 6.24-34"]
  ],
  transfiguracao: ["Sl 2.6-12","Êx 24.8-18","2Pe 1.16-21","Mt 17.1-9"],
  cinzas: ["Sl 51.1-13(14-19)","Jl 2.12-19","2Co 5.20b-6.10","Mt 6.1-6,16-21"],
  quaresma: [
    ["Sl 32.1-7","Gn 3.1-21","Rm 5.12-19","Mt 4.1-11"],
    ["Sl 121","Gn 12.1-9","Rm 4.1-8,13-17","Jo 3.1-17"],
    ["Sl 95.1-9","Êx 17.1-7","Rm 5.1-8","Jo 4.5-26(27-30,39-42)"],
    ["Sl 142","Is 42.14-21","Ef 5.8-14","Jo 9.1-41 ou Jo 9.1-7,13-17,34-39"],
    ["Sl 130","Ez 37.1-14","Rm 8.1-11","Jo 11.1-45(46-53) ou Jo 11.17-27,38-53"]
  ],
  ramos: ["Sl 118.19-29 ou Sl 31.9-16","Is 50.4-9a","Fp 2.5-11","Mt 26.1-27.66 ou Mt 27.11-66 [ou Mt 21.1-11] ou Jo 12.20-43"],
  semanaSanta: {
    seg:["Sl 36.5-10","Is 50.5-10","Hb 9.11-15","Mt 26.1-27.66 ou Jo 12.1-23"],
    ter:["Sl 71.1-14","Is 49.1-7","1Co 1.18-25(26-31)","Mc 14.1-15.47 ou Jo 12.23-50"],
    qua:["Sl 70","Is 62.11-63.7","Rm 5.6-11","Lc 22.1-23.56 ou Jo 13.16-38"],
    quinta:["Sl 116.12-19","Êx 24.3-11","Hb 9.11-22","Mt 26.17-30"],
    sexta:["Sl 22 ou Sl 31","Is 52.13-53.12","Hb 4.14-16;5.7-9","Jo 18.1-19.42 ou Jo 19.17-30"],
    sabado:["Sl 16","Dn 6.1-24","1Pe 4.1-8","Mt 27.57-66"]
  },
  pascoa: [
    ["Sl 16","At 10.34-43 ou Jr 31.1-6","Cl 3.1-4","Mt 28.1-10"],
    ["Sl 148","At 5.29-42","1Pe 1.3-9","Jo 20.19-31"],
    ["Sl 116.1-14","At 2.14a,36-41","1Pe 1.17-25","Lc 24.13-35"],
    ["Sl 23","At 2.42-47","1Pe 2.19-25","Jo 10.1-10"],
    ["Sl 146","At 6.1-9;7.2a,51-60","1Pe 2.2-10","Jo 14.1-14"],
    ["Sl 66.8-20","At 17.16-31","1Pe 3.13-22","Jo 14.15-21"],
    ["Sl 68.1-10","At 1.12-26","1Pe 4.12-19;5.6-11","Jo 17.1-11"]
  ],
  ascensao: ["Sl 47","At 1.1-11","Ef 1.15-23","Lc 24.44-53"],
  pentecoste: ["Sl 25.1-15","Nm 11.24-30 [ou Jl 2.29-29]","At 2.1-21","Jo 7.37-39"],
  trindade: ["Sl 8","Gn 1.1-2.4a","At 2.14a,22-36","Mt 28.16-20"],
  proprios: {
    3:["24-28/5",["Sl 115.(1-8)9-18","Is 49.8-16a","Rm 1.8-17","Mt 6.24-34"]],
    4:["29/5-4/6",["Sl 4","Dt 11.18-21,26-28","Rm 3.21-28","Mt 7.15-29"]],
    5:["5-11/6",["Sl 119.65-72","Os 5.15-6.6","Rm 4.13-25","Mt 9.9-13"]],
    6:["12-18/6",["Sl 100","Êx 19.2-8","Rm 5.6-15","Mt 9.35-10.8(9-20)"]],
    7:["19-25/6",["Sl 91.1-10(11-16)","Jr 20.7-13","Rm 6.12-23","Mt 10.5a,21-33"]],
    8:["26/6-2/7",["Sl 119.153-160","Jr 28.5-9","Rm 7.1-13","Mt 10.34-42"]],
    9:["3-9/7",["Sl 145.1-14","Zc 9.9-12","Rm 7.14-25a","Mt 11.25-30"]],
    10:["10-16/7",["Sl 65.(1-8)9-13","Is 55.10-13","Rm 8.12-17","Mt 13.1-9,18-23"]],
    11:["17-23/7",["Sl 119.57-64","Is 44.6-8","Rm 8.18-27","Mt 13.24-30,36-43"]],
    12:["24-30/7",["Sl 125","Dt 7.6-9","Rm 8.28-39","Mt 13.44-52"]],
    13:["31/7-6/8",["Sl 136.1-9(23-26)","Is 55.1-5","Rm 9.1-5(6-13)","Mt 14.13-21"]],
    14:["7-13/8",["Sl 18.1-6(7-16)","Jó 38.4-18","Rm 10.5-17","Mt 14.22-33"]],
    15:["14-20/8",["Sl 67","Is 56.1,6-8","Rm 11.1-2a,13-15,28-32","Mt 15.21-28"]],
    16:["21-27/8",["Sl 138","Is 51.1-6","Rm 11.33-12.8","Mt 16.13-20"]],
    17:["28/8-3/9",["Sl 26","Jr 15.15-21","Rm 12.9-21","Mt 16.21-28"]],
    18:["4-10/9",["Sl 32.1-7","Ez 33.7-9","Rm 13.1-10","Mt 18.1-20"]],
    19:["11-17/9",["Sl 103.1-12","Gn 50.15-21","Rm 14.1-12","Mt 18.21-35"]],
    20:["18-24/9",["Sl 27.1-9","Is 55.6-9","Fp 1.12-14,19-30","Mt 20.1-16"]],
    21:["25/9-1/10",["Sl 25.1-10","Ez 18.1-4,25-32","Fp 2.1-4(5-13)14-18","Mt 21.23-27(28-32)"]],
    22:["2-8/10",["Sl 80.7-19","Is 5.1-7","Fp 3.4b-14","Mt 21.33-46"]],
    23:["9-15/10",["Sl 23","Is 25.6-9","Fp 4.4-13","Mt 22.1-14"]],
    24:["16-22/10",["Sl 96.1-9(10-13)","Is 45.1-7","1Ts 1.1-10","Mt 22.15-22"]],
    25:["23-29/10",["Sl 1","Lv 19.1-2,15-18","1Ts 2.1-13","Mt 22.34-46"]],
    26:["30/10-5/11",["Sl 43","Mq 3.5-12","1Ts 4.1-12","Mt 23.1-12"]],
    27:["6-12/11",["Sl 70","Am 5.18-24","1Ts 4.13-18","Mt 25.1-13"]],
    28:["13-19/11",["Sl 90.1-12","Sf 1.7-16","1Ts 5.1-11","Mt 25.14-30"]],
    29:["20-26/11",["Sl 95.1-7a","Ez 34.11-16,20-24 [ou Is 65.17-25]","1Co 15.20-28 [ou 2Pe 3.3-13]","Mt 25.31-46"]]
  }
},
B: {
  advento: [
    ["Sl 80.1-7","Is 64.1-9","1Co 1.3-9","Mc 11.1-10 ou Mc 13.24-37"],
    ["Sl 85","Is 40.1-11","2Pe 3.8-14","Mc 1.1-8"],
    ["Sl 126","Is 61.1-4,8-11","1Ts 5.16-24","Jo 1.6-8,19-28"],
    ["Sl 89.1-5(19-29)","2Sm 7.1-11,16","Rm 16.25-27","Lc 1.26-38"]
  ],
  vespNatal: ["Sl 110.1-4","Is 7.10-14","1Jo 4.7-16","Mt 1.18-25"],
  diaNatal: ["Sl 2","Is 52.7-10","Hb 1.1-6(7-12)","Jo 1.1-14(15-18)"],
  natal1: ["Sl 111","Is 61.10-62.3","Gl 4.4-7","Lc 2.22-40"],
  natal2: ["Sl 119.97-104","1Rs 3.4-15","Ef 1.3-14","Lc 2.40-52"],
  epifania: ["Sl 72.1-11(12-15)","Is 60.1-6","Ef 3.1-12","Mt 2.1-12"],
  epifaniaDom: [
    ["Sl 29","Gn 1.1-5","Rm 6.1-11","Mc 1.4-11"],
    ["Sl 139.1-10","1Sm 3.1-10(11-20)","1Co 6.12-20","Jo 1.43-51"],
    ["Sl 62","Jn 3.1-5,10","1Co 7.29-31(32-35)","Mc 1.14-20"],
    ["Sl 111","Dt 18.15-20","1Co 8.1-13","Mc 1.21-28"],
    ["Sl 147.1-11","Is 40.21-31","1Co 9.16-27","Mc 1.29-39"],
    ["Sl 30","2Rs 5.1-14","1Co 10.(19-30)31-11.1","Mc 1.40-45"],
    ["Sl 41","Is 43.18-25","2Co 1.18-22","Mc 2.1-12"],
    ["Sl 103.1-13","Os 2.14-20","2Co 2.12-3.6","Mc 2.(13-17)18-22"]
  ],
  transfiguracao: ["Sl 50.1-6","2Rs 2.1-12 ou Êx 34.29-35","2Co 3.12-13(14-18);4.1-6","Mc 9.2-9"],
  cinzas: ["Sl 51.1-13(14-19)","Jl 2.12-19","2Co 5.20b-6.10","Mt 6.1-6,16-21"],
  quaresma: [
    ["Sl 25.1-10","Gn 22.1-18","Tg 1.12-18","Mc 1.9-15"],
    ["Sl 22.23-31","Gn 17.1-7,15-16","Rm 5.1-11","Mc 8.27-38"],
    ["Sl 19","Êx 20.1-17","1Co 1.18-31","Jo 2.13-22(23-25)"],
    ["Sl 107.1-9","Nm 21.4-9","Ef 2.1-10","Jo 3.14-21"],
    ["Sl 119.9-16","Jr 31.31-34","Hb 5.1-10","Mc 10.(32-34)35-45"]
  ],
  ramos: ["Sl 118.19-29 ou Sl 31.9-16","Zc 9.9-12","Fp 2.5-11","Mc 14.1-15.47 ou Mc 15.1-47 [ou Mc 11.1-10] ou Jo 12.20-43"],
  semanaSanta: {
    seg:["Sl 36.5-10","Is 50.5-10","Hb 9.11-15","Mt 26.1-27.66 ou Jo 12.1-23"],
    ter:["Sl 71.1-14","Is 49.1-7","1Co 1.18-25(26-31)","Mc 14.1-15.47 ou Jo 12.23-50"],
    qua:["Sl 70","Is 62.11-63.7","Rm 5.6-11","Lc 22.1-23.56 ou Jo 13.16-38"],
    quinta:["Sl 116.12-19","Êx 24.3-11","1Co 10.16-17","Mc 14.12-26"],
    sexta:["Sl 22 ou Sl 31","Is 52.13-53.12","Hb 4.14-16;5.7-9","Jo 18.1-19.42 ou Jo 19.17-30"],
    sabado:["Sl 16","Dn 6.1-24","1Pe 4.1-8","Mt 27.57-66"]
  },
  pascoa: [
    ["Sl 16","Is 25.6-9","1Co 15.1-11","Mc 16.1-8"],
    ["Sl 148","At 4.32-35","1Jo 1.1-2.2","Jo 20.19-31"],
    ["Sl 4","At 3.11-21","1Jo 3.1-7","Lc 24.36-49"],
    ["Sl 23","At 4.1-12","1Jo 3.16-24","Jo 10.11-18"],
    ["Sl 150","At 8.26-40","1Jo 4.1-11(12-21)","Jo 15.1-8"],
    ["Sl 98","At 10.34-48","1Jo 5.1-8","Jo 15.9-17"],
    ["Sl 1","At 1.12-26","1Jo 5.9-15","Jo 17.11b-19"]
  ],
  ascensao: ["Sl 47","At 1.1-11","Ef 1.15-23","Lc 24.44-53"],
  pentecoste: ["Sl 139.1-12","Ez 37.1-14 [ou Jl 2.29-29]","At 2.1-21","Jo 15.26-27;16.4b-15"],
  trindade: ["Sl 29","Is 6.1-8","At 2.14a,22-36","Jo 3.1-17"],
  proprios: {
    3:["24-28/5",["Sl 103.1-13","Os 2.14-20","At 2.14a,36-47","Mc 2.(13-17)18-22"]],
    4:["29/5-4/6",["Sl 81.1-10","Dt 5.12-15","2Co 4.5-12","Mc 2.23-28(3.1-6)"]],
    5:["5-11/6",["Sl 130","Gn 3.8-15","2Co 4.13-5.1","Mc 3.20-35"]],
    6:["12-18/6",["Sl 1","Ez 17.22-24","2Co 5.1-10(11-17)","Mc 4.26-34"]],
    7:["19-25/6",["Sl 124","Jó 38.1-11","2Co 6.1-13","Mc 4.35-41"]],
    8:["26/6-2/7",["Sl 30","Lm 3.22-33","2Co 8.1-9,13-15","Mc 5.21-43"]],
    9:["3-9/7",["Sl 123","Ez 2.1-5","2Co 12.1-10","Mc 6.1-13"]],
    10:["10-16/7",["Sl 85.(1-7)8-13","Am 7.7-15","Ef 1.3-14","Mc 6.14-29"]],
    11:["17-23/7",["Sl 23","Jr 23.1-6","Ef 2.11-22","Mc 6.30-34"]],
    12:["24-30/7",["Sl 136.1-9","Gn 9.8-17","Ef 3.14-21","Mc 6.45-56"]],
    13:["31/7-6/8",["Sl 145.10-21","Êx 16.2-15","Ef 4.1-16","Jo 6.22-35"]],
    14:["7-13/8",["Sl 34.1-8","1Rs 19.1-8","Ef 4.17-5.2","Jo 6.35-51"]],
    15:["14-20/8",["Sl 34.12-22","Pv 9.1-10 ou Js 24.1-2a,14-18","Ef 5.6-21","Jo 6.51-69"]],
    16:["21-27/8",["Sl 14","Is 29.11-19","Ef 5.22-33","Mc 7.1-13"]],
    17:["28/8-3/9",["Sl 119.129-136","Dt 4.1-2,6-9","Ef 6.10-20","Mc 7.14-23"]],
    18:["4-10/9",["Sl 146","Is 35.4-7a","Tg 2.1-10,14-18","Mc 7.(24-30)31-37"]],
    19:["11-17/9",["Sl 116.1-9","Is 50.4-10","Tg 3.1-12","Mc 9.14-29"]],
    20:["18-24/9",["Sl 54","Jr 11.18-20","Tg 3.13-4.10","Mc 9.30-37"]],
    21:["25/9-1/10",["Sl 104.27-35","Nm 11.4-6,10-16,24-29","Tg 5.(1-12)13-20","Mc 9.38-50"]],
    22:["2-8/10",["Sl 128","Gn 2.18-25","Hb 2.1-13(14-18)","Mc 10.2-16"]],
    23:["9-15/10",["Sl 90.12-17","Am 5.6-7,10-15","Hb 3.12-19","Mc 10.17-22"]],
    24:["16-22/10",["Sl 119.9-16","Ec 5.10-20","Hb 4.1-13(14-16)","Mc 10.23-31"]],
    25:["23-29/10",["Sl 126","Jr 31.7-9","Hb 7.23-28","Mc 10.46-52"]],
    26:["30/10-5/11",["Sl 119.1-8","Dt 6.1-9","Hb 9.11-14(15-22)","Mc 12.28-37"]],
    27:["6-12/11",["Sl 146","1Rs 17.8-16","Hb 9.24-28","Mc 12.38-44"]],
    28:["13-19/11",["Sl 16","Dn 12.1-3","Hb 10.11-25","Mc 13.1-13"]],
    29:["20-26/11",["Sl 93","Is 51.4-6 ou Dn 7.9-10,13-14","Jd 20-25 ou Ap 1.4b-8","Mc 13.24-37 ou Jo 18.33-37"]]
  }
},
C: {
  advento: [
    ["Sl 25.1-10","Jr 33.14-16","1Ts 3.9-13","Lc 19.28-40 ou Lc 21.25-36"],
    ["Sl 66.1-12","Ml 3.1-7b","Fp 1.2-11","Lc 3.1-14(15-20)"],
    ["Sl 85","Sf 3.14-20","Fp 4.4-7","Lc 7.18-28(29-35)"],
    ["Sl 80.1-7","Mq 5.2-5a","Hb 10.5-10","Lc 1.39-45(46-56)"]
  ],
  vespNatal: ["Sl 110.1-4","Is 7.10-14","1Jo 4.7-16","Mt 1.18-25"],
  diaNatal: ["Sl 2","Is 52.7-10","Hb 1.1-6(7-12)","Jo 1.1-14(15-18)"],
  natal1: ["Sl 111","Êx 13.1-3a,11-15","Cl 3.12-17","Lc 2.22-40"],
  natal2: ["Sl 119.97-104","1Rs 3.4-15","Ef 1.3-14","Lc 2.40-52"],
  epifania: ["Sl 72.1-11(12-15)","Is 60.1-6","Ef 3.1-12","Mt 2.1-12"],
  epifaniaDom: [
    ["Sl 29","Is 43.1-7","Rm 6.1-11","Lc 3.15-22"],
    ["Sl 128","Is 62.1-5","1Co 12.1-11","Jo 2.1-11"],
    ["Sl 19.(1-6)7-14","Ne 8.1-3,5-6,8-10","1Co 12.12-31a","Lc 4.16-30"],
    ["Sl 71.1-6(7-11)","Jr 1.4-10(17-19)","1Co 12.31b-13.13","Lc 4.31-44"],
    ["Sl 138","Is 6.1-8(9-13)","1Co 14.12b-20","Lc 5.1-11"],
    ["Sl 1","Jr 17.5-8","1Co 15.(1-11)12-20","Lc 6.17-26"],
    ["Sl 103.1-13","Gn 45.3-15","1Co 15.21-26,30-42","Lc 6.27-38"],
    ["Sl 92","Jr 7.1-7(8-15)","1Co 15.42-52(53-58)","Lc 6.39-49"]
  ],
  transfiguracao: ["Sl 99","Dt 34.1-12","Hb 3.1-6","Lc 9.28-36"],
  cinzas: ["Sl 51.1-13(14-19)","Jl 2.12-19","2Co 5.20b-6.10","Mt 6.1-6,16-21"],
  quaresma: [
    ["Sl 91.1-13","Dt 26.1-11","Rm 10.8b-13","Lc 4.1-13"],
    ["Sl 4","Jr 26.8-15","Fp 3.17-4.1","Lc 13.31-35"],
    ["Sl 85","Ez 33.7-20","1Co 10.1-13","Lc 13.1-9"],
    ["Sl 32","Is 12.1-6","2Co 5.16-21","Lc 15.1-3,11-32"],
    ["Sl 126","Is 43.16-21","Fp 3.(4b-7)8-14","Lc 20.9-20"]
  ],
  ramos: ["Sl 118.19-29 ou Sl 31.9-16","Dt 32.36-39","Fp 2.5-11","Lc 22.1-23.56 ou Lc 23.1-56 [ou Lc 19.28-40] ou Jo 12.20-43"],
  semanaSanta: {
    seg:["Sl 36.5-10","Is 50.5-10","Hb 9.11-15","Mt 26.1-27.66 ou Jo 12.1-23"],
    ter:["Sl 71.1-14","Is 49.1-7","1Co 1.18-25(26-31)","Mc 14.1-15.47 ou Jo 12.23-50"],
    qua:["Sl 70","Is 62.11-63.7","Rm 5.6-11","Lc 22.1-23.56 ou Jo 13.16-38"],
    quinta:["Sl 116.12-19","Jr 31.31-34","Hb 10.15-25","Lc 22.7-20"],
    sexta:["Sl 22 ou Sl 31","Is 52.13-53.12","Hb 4.14-16;5.7-9","Jo 18.1-19.42 ou Jo 19.17-30"],
    sabado:["Sl 16","Dn 6.1-24","1Pe 4.1-8","Mt 27.57-66"]
  },
  pascoa: [
    ["Sl 16","Is 65.17-25","1Co 15.19-26","Lc 24.1-12"],
    ["Sl 148","At 5.12-20(21-32)","Ap 1.4-18","Jo 20.19-31"],
    ["Sl 30","At 9.1-22","Ap 5.(1-7)8-14","Jo 21.1-14(15-19)"],
    ["Sl 23","At 20.17-35","Ap 7.9-17","Jo 10.22-30"],
    ["Sl 148","At 11.1-18","Ap 21.1-7","Jo 16.12-22 ou Jo 13.31-35"],
    ["Sl 67","At 16.9-15","Ap 21.9-14,21-27","Jo 16.23-33 ou Jo 5.1-9"],
    ["Sl 133","At 1.12-26","Ap 22.1-6(7-11)12-20","Jo 17.20-26"]
  ],
  ascensao: ["Sl 47","At 1.1-11","Ef 1.15-23","Lc 24.44-53"],
  pentecoste: ["Sl 143","Gn 11.1-9 [ou Jl 2.29-29]","At 2.1-21","Jo 14.23-31"],
  trindade: ["Sl 8","Pv 8.1-4,22-31","At 2.14a,22-36","Jo 8.48-59"],
  proprios: {
    3:["24-28/5",["Sl 112.1-9","Gn 50.15-21","At 2.14a,36-47","Lc 6.(20-26)27-42"]],
    4:["29/5-4/6",["Sl 96.1-9","1Rs 8.22-24,27-29,41-43","Gl 1.1-12","Lc 7.1-10"]],
    5:["5-11/6",["Sl 30","1Rs 17.17-24","Gl 1.11-24","Lc 7.11-17"]],
    6:["12-18/6",["Sl 32.1-7","2Sm 11.26-12.10,13-14","Gl 2.15-21;3.10-14","Lc 7.36-8.3"]],
    7:["19-25/6",["Sl 3","Is 65.1-9","Gl 3.23-4.7","Lc 8.26-39"]],
    8:["26/6-2/7",["Sl 16","1Rs 19.9b-21","Gl 5.1,13-25","Lc 9.51-62"]],
    9:["3-9/7",["Sl 66.1-7","Is 66.10-14","Gl 6.1-10,14-18","Lc 10.1-20"]],
    10:["10-16/7",["Sl 41","Lv (18.1-5);19.9-18","Cl 1.1-14","Lc 10.25-37"]],
    11:["17-23/7",["Sl 27.(1-6)7-14","Gn 18.1-10a(10b-14)","Cl 1.21-29","Lc 10.38-42"]],
    12:["24-30/7",["Sl 138","Gn 18.(17-19)20-33","Cl 2.6-15(16-19)","Lc 11.1-13"]],
    13:["31/7-6/8",["Sl 100","Ec 1.2,12-14;2.18-26","Cl 3.1-11","Lc 12.13-21"]],
    14:["7-13/8",["Sl 33.12-22","Gn 15.1-6","Hb 11.1-16","Lc 12.22-34(35-40)"]],
    15:["14-20/8",["Sl 119.81-88","Jr 23.16-29","Hb 11.17-31(32-40);12.1-3","Lc 12.49-53(54-56)"]],
    16:["21-27/8",["Sl 50.1-15","Is 66.18-23","Hb 12.4-24(25-29)","Lc 13.22-30"]],
    17:["28/8-3/9",["Sl 131","Pv 25.2-10","Hb 13.1-17","Lc 14.1-14"]],
    18:["4-10/9",["Sl 1","Dt 30.15-20","Fm 1-21","Lc 14.25-35"]],
    19:["11-17/9",["Sl 119.169-176","Ez 34.11-24","1Tm 1.(5-11)12-17","Lc 15.1-10"]],
    20:["18-24/9",["Sl 113","Am 8.4-7","1Tm 2.1-8(9-15)","Lc 16.1-15"]],
    21:["25/9-1/10",["Sl 146","Am 6.1-7","1Tm 3.1-13 ou 1Tm 6.6-19","Lc 16.19-31"]],
    22:["2-8/10",["Sl 62","Hc 1.1-4;2.1-4","2Tm 1.1-14","Lc 17.1-10"]],
    23:["9-15/10",["Sl 111","Rt 1.1-19a","2Tm 2.1-13","Lc 17.11-19"]],
    24:["16-22/10",["Sl 121","Gn 32.22-30","2Tm 3.14-4.5","Lc 18.1-8"]],
    25:["23-29/10",["Sl 5","Gn 4.1-15","2Tm 4.6-8,16-18","Lc 18.9-17"]],
    26:["30/10-5/11",["Sl 130","Is 1.10-18","2Ts 1.1-5(6-10)11-12","Lc 19.1-10"]],
    27:["6-12/11",["Sl 148","Êx 3.1-15","2Ts 2.1-8,13-17","Lc 20.27-40"]],
    28:["13-19/11",["Sl 98","Ml 4.1-6","2Ts 3.(1-5)6-13","Lc 21.5-28(29-36)"]],
    29:["20-26/11",["Sl 46","Ml 3.13-18","Cl 1.13-20","Lc 23.27-43"]]
  }
}
};

const CORES = {
  "Verde":"var(--verde)","Roxa":"var(--roxa)","Branca":"var(--branca)",
  "Vermelha":"var(--vermelha)","Escarlate":"var(--escarlate)","Preta":"var(--preta)","Azul":"var(--azul)"
};
const CORES_HEX = {
  "Verde":"#3B6E4F","Roxa":"#5B3A70","Branca":"#C9A227",
  "Vermelha":"#A32638","Escarlate":"#8C1F2B","Preta":"#232020","Azul":"#2f3bad"
};

/* ---------- Dias Festivos (data fixa, com leituras — Hinário Luterano IELB) ---------- */
/* mes: 1-12. leitura: [Salmo, AT, Epístola, Evangelho] */
const DIAS_FESTIVOS = [
  {mes:11,dia:30,nome:"André, Apóstolo",cor:"Vermelha",leitura:["Sl 139.1-12","Ez 3.16-21","Rm 10.8b-18","Jo 1.35-42a"]},
  {mes:12,dia:21,nome:"Tomé, Apóstolo",cor:"Vermelha",leitura:["Sl 136.1-4","Jz 6.36-40","Ef 4.7,11-16","Jo 20.24-29"]},
  {mes:12,dia:26,nome:"Estêvão, Mártir",cor:"Vermelha",leitura:["Sl 119.137-144","2Cr 24.17-22","At 6.8-7.2a,51-60","Mt 23.34-39"]},
  {mes:12,dia:27,nome:"João, Apóstolo e Evangelista",cor:"Branca",leitura:["Sl 11","Ap 1.1-6","1Jo 1.1-2.2","Jo 21.20-25"]},
  {mes:12,dia:28,nome:"Crianças Inocentes, Mártires",cor:"Vermelha",leitura:["Sl 54","Jr 31.15-17","Ap 14.1-5","Mt 2.13-18"]},
  {mes:12,dia:31,nome:"Véspera de Ano Novo",cor:"Branca",leitura:["Sl 90.1-12","Is 30.(8-14)15-17","Rm 8.31b-39","Lc 12.35-40"]},
  {mes:1,dia:1,nome:"Circuncisão e Nome de Jesus",cor:"Branca",leitura:["Sl 8","Nm 6.22-27","Gl 3.23-29","Lc 2.21"]},
  {mes:1,dia:18,nome:"A Confissão de Pedro",cor:"Branca",leitura:["Sl 118.19-29","At 4.8-13","2Pe 1.1-15","Mc 8.27-35(36-9.1)"]},
  {mes:1,dia:24,nome:"Timóteo, Pastor e Confessor",cor:"Branca",leitura:["Sl 71.15-24","At 16.1-5","1Tm 6.11-16","Mt 24.42-47"]},
  {mes:1,dia:25,nome:"A Conversão de Paulo",cor:"Branca",leitura:["Sl 67","At 9.1-22","Gl 1.11-24","Mt 19.27-30"]},
  {mes:1,dia:26,nome:"Tito, Pastor e Confessor",cor:"Branca",leitura:["Sl 71.1-14","At 20.28-35","Tt 1.1-9","Lc 10.1-9"]},
  {mes:2,dia:2,nome:"A Purificação de Maria e a Apresentação do Senhor",cor:"Branca",leitura:["Sl 84","1Sm 1.21-28","Hb 2.14-18","Lc 2.22-32(33-40)"]},
  {mes:2,dia:24,nome:"Matias, Apóstolo",cor:"Vermelha",leitura:["Sl 134","Is 66.1-2","At 1.15-26","Mt 11.25-30"]},
  {mes:3,dia:19,nome:"José, Tutor de Jesus",cor:"Branca",leitura:["Sl 127","2Sm 7.4-16","Rm 4.13-18","Mt 2.13-15,19-23"]},
  {mes:3,dia:25,nome:"A Anunciação do Senhor",cor:"Branca",leitura:["Sl 45.7-17","Is 7.10-14","Hb 10.4-10","Lc 1.26-38"]},
  {mes:4,dia:25,nome:"Marcos, Evangelista",cor:"Vermelha",leitura:["Sl 146","Is 52.7-10","2Tm 4.5-18","Mc 16.14-20"]},
  {mes:5,dia:1,nome:"Filipe e Tiago, Apóstolos",cor:"Vermelha",leitura:["Sl 36.5-12","Is 30.18-21","Ef 2.19-22","Jo 14.1-14"]},
  {mes:5,dia:31,nome:"A Visitação",cor:"Branca",leitura:["Sl 138","Is 11.1-5","Rm 12.9-16","Lc 1.39-45(46-56)"]},
  {mes:6,dia:11,nome:"Barnabé, Apóstolo",cor:"Vermelha",leitura:["Sl 112","Is 42.5-12","At 11.19-30;13.1-3","Mc 6.7-13"]},
  {mes:6,dia:24,nome:"O Nascimento de João Batista",cor:"Branca",leitura:["Sl 85.(1-6)7-13","Is 40.1-5","At 13.13-26","Lc 1.57-80"]},
  {mes:6,dia:29,nome:"Pedro e Paulo, Apóstolos",cor:"Vermelha",leitura:["Sl 46","At 15.1-12(13-21)","Gl 2.1-10","Mt 16.13-19"]},
  {mes:7,dia:22,nome:"Maria Madalena",cor:"Branca",leitura:["Sl 73.23-28","Pv 31.10-31","At 13.26-31","Jo 20.1-2,10-18"]},
  {mes:7,dia:25,nome:"Tiago, o Maior, Apóstolo",cor:"Vermelha",leitura:["Sl 56","At 11.27-12.5","Rm 8.28-39","Mc 10.35-45"]},
  {mes:8,dia:15,nome:"Maria, Mãe do Senhor",cor:"Branca",leitura:["Sl 45.10-17","Is 61.7-11","Gl 4.4-7","Lc 1.(39-45)46-55"]},
  {mes:8,dia:24,nome:"Bartolomeu, Apóstolo",cor:"Vermelha",leitura:["Sl 121","Pv 3.1-8","2Co 4.7-10","Lc 22.24-30 ou Jo 1.43-51"]},
  {mes:8,dia:29,nome:"O Martírio de João Batista",cor:"Vermelha",leitura:["Sl 71.1-8","Ap 6.9-11","Rm 6.1-5","Mc 6.14-29"]},
  {mes:9,dia:14,nome:"Dia da Santa Cruz",cor:"Vermelha",leitura:["Sl 40.1-11","Nm 21.4-9","1Co 1.18-25","Jo 12.20-33"]},
  {mes:9,dia:21,nome:"Mateus, Apóstolo e Evangelista",cor:"Vermelha",leitura:["Sl 119.33-40","Ez 2.8-3.11","Ef 4.7-16","Mt 9.9-13"]},
  {mes:9,dia:29,nome:"São Miguel e Todos os Anjos",cor:"Branca",leitura:["Sl 91","Dn 10.10-14;12.1-3","Ap 12.7-12","Mt 18.1-11 ou Lc 10.17-20"]},
  {mes:10,dia:18,nome:"Lucas, Evangelista",cor:"Vermelha",leitura:["Sl 147.1-11","Is 35.5-8","2Tm 4.5-18","Lc 10.1-9"]},
  {mes:10,dia:23,nome:"Tiago de Jerusalém, Irmão de Jesus e Mártir",cor:"Vermelha",leitura:["Sl 133","At 15.12-22a","Tg 1.1-12","Mt 13.54-58"]},
  {mes:10,dia:28,nome:"Simão e Judas, Apóstolos",cor:"Vermelha",leitura:["Sl 43","Jr 26.1-16","1Pe 1.3-9","Jo 15.(12-16)17-21"]},
  {mes:10,dia:31,nome:"Dia da Reforma",cor:"Vermelha",leitura:["Sl 46","Ap 14.6-7","Rm 3.19-28","Jo 8.31-36 ou Mt 11.12-19"]},
  {mes:11,dia:1,nome:"Dia de Todos os Santos",cor:"Branca",leitura:["Sl 149","Ap 7.(2-8)9-17","1Jo 3.1-3","Mt 5.1-12"]},
  {mes:11,dia:2,nome:"Dia de Finados",cor:"Branca",leitura:["Sl 34.1-9","Is 35.3-10","2Pe 3.8-14,18","Jo 5.24-29"]}
];

/* ---------- Comemorações (só nome, sem leitura própria — Hinário Luterano IELB) ---------- */
const COMEMORACOES = {
  "1-10":"Basílio, o Grande, de Cesareia, Gregório de Nazianzo e Gregório de Niza, Pastores e Confessores",
  "1-11":"John Hartmeister, Pastor e Fundador do Seminário Concórdia",
  "1-20":"Sara",
  "1-27":"João Crisóstomo, Pregador",
  "2-5":"Jacó (Israel), Patriarca",
  "2-10":"Silas, Cooperador de Paulo e Pedro",
  "2-13":"Áquila, Priscila, Apolo",
  "2-14":"Valentina, Mártir",
  "2-15":"Filemom e Onésimo",
  "2-16":"Filipe Melanchthon (Nascimento), Confessor",
  "2-18":"Martinho Lutero, Doutor em teologia e Confessor",
  "2-23":"Policarpo de Esmirna, Pastor e Mártir",
  "3-7":"Perpétua e Felicitas, Mártires",
  "3-31":"José, Patriarca",
  "4-6":"Lucas Cranach e Albrecht Dürer, Artistas Sacros",
  "4-20":"Johannes Bugenhagen, Pastor",
  "4-24":"Johann Walter, Mestre de capela",
  "5-2":"Atanásio de Alexandria, Pastor e Confessor",
  "5-5":"Frederico, o Sábio, Príncipe Eleitor",
  "5-7":"Carl Ferdinand Wilhelm Walther, Teólogo e Fundador da LCMS",
  "5-9":"Jó",
  "5-21":"Constantino, Imperador Cristão",
  "5-24":"Ester",
  "6-1":"Justino, Mártir",
  "6-12":"Concílio de Niceia, AD 325",
  "6-14":"Eliseu",
  "6-24":"Fundação da IELB, AD 1904",
  "6-25":"Apresentação da Confissão de Augsburgo, AD 1530",
  "6-26":"Jeremias",
  "6-27":"Cirilo de Alexandria, Pastor e Confessor",
  "7-6":"Isaías",
  "7-16":"Rute",
  "7-20":"Elias",
  "7-21":"Ezequiel",
  "7-28":"Johann Sebastian Bach, Mestre de capela",
  "7-29":"Maria, Marta e Lázaro",
  "7-31":"José de Arimateia",
  "8-3":"Joana, Maria e Salomé",
  "8-16":"Isaque",
  "8-19":"Bernardo de Clairvaux, Escritor de hinos e Teólogo",
  "8-20":"Samuel",
  "8-27":"Mônica, Mãe de Agostinho",
  "8-28":"Agostinho de Hipona, Pastor e Teólogo",
  "9-1":"Josué",
  "9-2":"Ana, Mãe de Samuel",
  "9-3":"Gregório, o Grande, Pastor",
  "9-4":"Moisés",
  "9-5":"Zacarias e Isabel",
  "9-16":"Cipriano de Cartago, Pastor e Mártir",
  "9-22":"Jonas",
  "9-30":"Jerônimo, Tradutor da Sagrada Escritura",
  "10-9":"Abraão",
  "10-11":"Filipe, Diácono",
  "10-25":"Dorcas (Tabita), Lídia e Febe",
  "10-26":"Philip Nicolai, Johann Heermann e Paul Gerhardt, Escritores de Hinos",
  "10-27":"Fundação do Seminário Concórdia, AD 1903",
  "11-8":"Johannes von Staupitz, Conselheiro de Lutero",
  "11-9":"Martin Chemnitz, Pastor e Confessor",
  "11-12":"Christian J. Broders, Pastor e Pioneiro da IELB",
  "11-14":"Justiniano, Imperador e Confessor Cristão",
  "11-16":"Carl Wilhelm Gustav Mahler, Pastor e Primeiro Presidente da IELB",
  "11-23":"Clemente de Roma, Pastor",
  "11-29":"Noé",
  "12-4":"João de Damasco, Teólogo e Escritor de Hinos",
  "12-7":"Ambrósio de Milão, Pastor e Escritor de Hinos",
  "12-17":"Daniel, o Profeta, e Sadraque, Mesaque e Abede-Nego",
  "12-19":"Adão e Eva",
  "12-20":"Catarina von Bora, Esposa de Lutero",
  "12-21":"August Wilhelm Gowert, Pioneiro da IELB",
  "12-29":"Davi"
};

/* ---------- Imagens de comemorações e festas fixas ---------- */
const COMEMORACAO_IMAGENS = {
  "11-30":{url:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Polittico_del_1476%2C_s._andrea.jpg",legenda:"Santo André (Políptico de 1476)"},
  "12-21":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rubens_apostel_thomas.jpg/960px-Rubens_apostel_thomas.jpg",legenda:"Apóstolo Tomé (Rubens)"},
  "12-26":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/St-stephen.jpg/960px-St-stephen.jpg",legenda:"Santo Estêvão"},
  "12-27":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rubens_apostel_johannes_grt.jpg/500px-Rubens_apostel_johannes_grt.jpg",legenda:"Apóstolo João (Rubens)"},
  "12-28":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lodovico_Mazzolino_-_Massacre_of_the_Innocents_-_323_-_Rijksmuseum.jpg/960px-Lodovico_Mazzolino_-_Massacre_of_the_Innocents_-_323_-_Rijksmuseum.jpg",legenda:"Massacre dos Inocentes (Lodovico Mazzolino)"},
  "1-1":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ludwig_Schongauer%2C_Circoncision_du_Christ.jpg/500px-Ludwig_Schongauer%2C_Circoncision_du_Christ.jpg",legenda:"Circuncisão de Cristo (Ludwig Schongauer)"},
  "1-18":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Saint_Peter_in_Prayer_from_the_circle_of_Hendrick_Bloemaert_Centraal_Museum_2567.jpg/500px-Saint_Peter_in_Prayer_from_the_circle_of_Hendrick_Bloemaert_Centraal_Museum_2567.jpg",legenda:"São Pedro em Oração (Hendrick Bloemaert)"},
  "1-24":{url:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Saint_Timothy.jpg",legenda:"São Timóteo"},
  "1-25":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/La_conversi%C3%B3n_de_san_Pablo_%28Murillo%29.jpg/500px-La_conversi%C3%B3n_de_san_Pablo_%28Murillo%29.jpg",legenda:"A Conversão de São Paulo (Murillo)"},
  "1-26":{url:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Fresco_of_Saint_Titos.jpg",legenda:"Fresco de São Tito"},
  "2-2":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Giotto_-_The_Presentation_of_the_Christ_Child_in_the_Temple_-_P30w9_-_Isabella_Stewart_Gardner_Museum.jpg/500px-Giotto_-_The_Presentation_of_the_Christ_Child_in_the_Temple_-_P30w9_-_Isabella_Stewart_Gardner_Museum.jpg",legenda:"A Apresentação de Jesus no Templo (Giotto)"},
  "2-24":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubens_apostle_Matthias_grt.jpg/500px-Rubens_apostle_Matthias_grt.jpg",legenda:"Apóstolo Matias (Rubens)"},
  "3-19":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Guido_Reni_-_St_Joseph_with_the_Infant_Jesus_-_WGA19304.jpg/500px-Guido_Reni_-_St_Joseph_with_the_Infant_Jesus_-_WGA19304.jpg",legenda:"São José com o Menino Jesus (Guido Reni)"},
  "3-25":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Annunciation_by_El_Greco_%281570-1575%2C_Prado%29.jpg/500px-Annunciation_by_El_Greco_%281570-1575%2C_Prado%29.jpg",legenda:"Anunciação (El Greco)"},
  "4-25":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Emmanuel_Tzanes_-_St._Mark_the_Evangelist_-_1657.jpg/500px-Emmanuel_Tzanes_-_St._Mark_the_Evangelist_-_1657.jpg",legenda:"São Marcos o Evangelista (Emmanuel Tzanes)"},
  "5-1":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tr%C3%ADptico_de_S._Tiago_Menor_e_S._Filipe_MASF.jpg/500px-Tr%C3%ADptico_de_S._Tiago_Menor_e_S._Filipe_MASF.jpg",legenda:"Tríptico de S. Tiago Menor e S. Filipe"},
  "5-31":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Giotto%2C_Lower_Church_Assisi%2C_The_Visitation_01.jpg/500px-Giotto%2C_Lower_Church_Assisi%2C_The_Visitation_01.jpg",legenda:"A Visitação (Giotto)"},
  "6-11":{url:"https://upload.wikimedia.org/wikipedia/commons/0/0a/San_Barnaba.jpg",legenda:"São Barnabé"},
  "6-24":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Nacimiento_de_San_Juan_Bautista.jpg/500px-Nacimiento_de_San_Juan_Bautista.jpg",legenda:"Nascimento de São João Batista"},
  "6-29":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Masolino_-_Saints_Paul_and_Peter_-_Google_Art_Project.jpg/500px-Masolino_-_Saints_Paul_and_Peter_-_Google_Art_Project.jpg",legenda:"Santos Paulo e Pedro (Masolino)"},
  "7-22":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/%CE%91%CE%B3%CE%AF%CE%B1%CE%9C%CE%B1%CF%81%CE%AF%CE%B1_%CE%B7_%CE%9C%CE%B1%CE%B3%CE%B4%CE%B1%CE%BB%CE%B7%CE%BD%CE%AE.jpg/500px-%CE%91%CE%B3%CE%AF%CE%B1%CE%9C%CE%B1%CF%81%CE%AF%CE%B1_%CE%B7_%CE%9C%CE%B1%CE%B3%CE%B4%CE%B1%CE%BB%CE%B7%CE%BD%CE%AE.jpg",legenda:"Santa Maria Magdalena"},
  "7-25":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Guido_Reni_-_Saint_James_the_Greater_-_Google_Art_Project.jpg/500px-Guido_Reni_-_Saint_James_the_Greater_-_Google_Art_Project.jpg",legenda:"São Tiago o Maior (Guido Reni)"},
  "8-15":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nossa_Senhora_do_Perpetuo_Socorro_HD.jpg/500px-Nossa_Senhora_do_Perpetuo_Socorro_HD.jpg",legenda:"Nossa Senhora do Perpétuo Socorro"},
  "8-19":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Stained_glass_St_Bernard_MNMA_Cl3273.jpg/960px-Stained_glass_St_Bernard_MNMA_Cl3273.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20060823080740",legenda:"Vitral de São Bernardo de Clairvaux"},
  "8-20":{url:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Eli_and_Samuel.jpg",legenda:"Samuel relata a Eli os juízos de Deus sobre a casa deste (John Singleton Copley)"},
  "8-24":{url:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Van_Dyck_-_The_Apostle_Saint_Bartholomew%2C_1617_-_1621.jpg",legenda:" Apóstolo São Bartolomeu (Van Dyck)"},
  "8-29":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/St_John_the_Baptist_-_Google_Art_Project.jpg/500px-St_John_the_Baptist_-_Google_Art_Project.jpg",legenda:"São João Batista"},
  "9-14":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/SS._Costantino_e_Elena_con_la_Croce_-_Mosco.jpg/500px-SS._Costantino_e_Elena_con_la_Croce_-_Mosco.jpg",legenda:"São Costantino e Santa Elena com a Cruz (Mosco)"},
  "9-21":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Saint_Matthew_MET_LC-1975_1_006-001.jpg/1280px-Saint_Matthew_MET_LC-1975_1_006-001.jpg",legenda:"Saint Matthew MET LC-1975 1 006-001"},
  "9-29":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/GuidoReni_MichaelDefeatsSatan.jpg/960px-GuidoReni_MichaelDefeatsSatan.jpg",legenda:"Arcanjo Miguel Derrota o Diabo (Guido Reni)"},
  "10-18":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/St._Luke%2C_Painting_by_El_Greco._Indianapolis_Museum_of_Art.jpg/500px-St._Luke%2C_Painting_by_El_Greco._Indianapolis_Museum_of_Art.jpg",legenda:"São Lucas (El Greco)"},
  "10-23":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rubens_apostel_jakobus_mindere_grt.jpg/960px-Rubens_apostel_jakobus_mindere_grt.jpg",legenda:"Apóstolo Tiago (Rubens)"},
  "10-31":{url:"https://upload.wikimedia.org/wikipedia/commons/2/20/Luther95theses.jpg",legenda:"Lutero fixa suas 95 teses na porta a marteladas (Ferdinand Pauwels)"},
  "11-1":{url:"https://upload.wikimedia.org/wikipedia/commons/b/b9/All_saint.JPG",legenda:"Dia de Todos os Santos"},
  "8-27":{url:"https://upload.wikimedia.org/wikipedia/commons/3/36/Santa_Monica_e_Sant%27Agostino.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20190715105406",legenda:"Santa Mônica e Santo Agostinho"},
  "8-28":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Saint_Augustine_by_Philippe_de_Champaigne.jpg/960px-Saint_Augustine_by_Philippe_de_Champaigne.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20161113091625",legenda:"Santo Agostinho (Philippe de Champaigne)"},
  "9-1":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Collection_Motais_de_Narbonne_-_Josu%C3%A9_arr%C3%A8te_la_course_du_soleil_-_Carlo_Maratta.jpg/500px-Collection_Motais_de_Narbonne_-_Josu%C3%A9_arr%C3%A8te_la_course_du_soleil_-_Carlo_Maratta.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail",legenda:"Josué Para a Rotação do Sol (Carlo Maratta)"},
  "9-2":{url:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Samuel_dedicated_by_Hannah.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20170911210334",legenda:"Samuel dedicado por Ana"},
  "9-3":{url:"https://upload.wikimedia.org/wikipedia/commons/0/07/Gregorythegreat.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20140202230013",legenda:"Gregório o Grande (Jusepe de Ribera)"},
  "9-4":{url:"https://upload.wikimedia.org/wikipedia/commons/1/14/Guido_Reni_-_Moses_with_the_Tables_of_the_Law_-_WGA19289.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20110724092721",legenda:"Moisés com as Tábuas da Lei (Guido Reni)"},
  "9-5":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_Meeting_of_Zechariah_and_Elizabeth_%29.jpg/960px-The_Meeting_of_Zechariah_and_Elizabeth_%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",legenda:"Zacarias e Isabel (Francesco Guarino)"},
  "11-2":{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Skogskyrkog%C3%A5rden_at_All_Saints_Day_2010-1.jpg/1920px-Skogskyrkog%C3%A5rden_at_All_Saints_Day_2010-1.jpg",legenda:"Skogskyrkogården no dia de Finados"}

};

/* ---------- Imagens ligadas a um Próprio específico (Tempo Comum) ---------- */
/* Chave = número do Próprio. A data desses domingos muda a cada ano, então
   não podem ser indexadas por dia fixo como as de cima. */
const PROPRIO_IMAGENS = {
  "14":{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzgYZxNDgWBFlhqe9kgTyhp2wUN4qLiIDG_gkXn7lBA&s=10",legenda:"Jesus Andando Sobre as Águas (Ivan Aivazovsky)"},
  "15":{url:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Jean-Germain_Drouais_-_The_Woman_of_Canaan_at_the_Feet_of_Christ_-_WGA06696.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20110625063407",legenda:"Mulher Cananeia aos Pés de Cristo (Jean-Germain Drouais)"},
  "16":{url:"https://allthehousehold.com/wp-content/uploads/2022/01/GL_GM_222-001.jpg",legenda:"Confissão de São Pedro"},
  "17":{url:"https://upload.wikimedia.org/wikipedia/commons/7/70/Brooklyn_Museum_-_Get_Thee_Behind_Me_Satan_%28R%C3%A9tire-toi_Satan%29_-_James_Tissot.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",legenda:"Afasta-te de mim, Satanás (James Tissot)"},
  "18":{url:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Harold_Copping_-_The_little_child_set_in_their_midst_-_%28MeisterDrucke-103283%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20191116093217",legenda:"A Criancinha no Meio Deles (Harold Copping)"},
  "19":{url:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Claude_Vignon_-_Parable_of_the_Unforgiving_Servant.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",legenda:"Parábola do Servo Ingrato (Claude Vignon)"}
};

/* ---------- Texto bíblico (Almeida Atualizada, domínio público) ---------- */
/* Fonte: raw.githubusercontent.com/MaatheusGois/bible (versions/pt-br/aa) */
const BOOK_IDS = {
  "Gn":"gn","Êx":"ex","Ex":"ex","Lv":"lv","Nm":"nm","Dt":"dt","Js":"js","Jz":"jud","Rt":"rt",
  "1Sm":"1sm","2Sm":"2sm","1Rs":"1kgs","2Rs":"2kgs","1Cr":"1ch","2Cr":"2ch",
  "Ed":"ezr","Ne":"ne","Et":"et","Jó":"job","Sl":"ps","Pv":"prv","Ec":"ec","Ct":"so",
  "Is":"is","Jr":"jr","Lm":"lm","Ez":"ez","Dn":"dn","Os":"ho","Jl":"jl","Am":"am","Ob":"ob",
  "Jn":"jn","Mq":"mi","Na":"na","Hc":"hk","Sf":"zp","Ag":"hg","Zc":"zc","Ml":"ml",
  "Mt":"mt","Mc":"mk","Lc":"lk","Jo":"jo","At":"act","Rm":"rm","1Co":"1co","2Co":"2co",
  "Gl":"gl","Ef":"eph","Fp":"ph","Cl":"cl","1Ts":"1ts","2Ts":"2ts","1Tm":"1tm","2Tm":"2tm",
  "Tt":"tt","Fm":"phm","Hb":"hb","Tg":"jm","1Pe":"1pe","2Pe":"2pe","1Jo":"1jo","2Jo":"2jo",
  "3Jo":"3jo","Jd":"jd","Ap":"re"
};

const SINGLE_CHAPTER_BOOKS = new Set(["Ob","Fm","2Jo","3Jo","Jd"]);
