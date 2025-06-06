function corVermelho (){
    corAzul()
    document.body.classList.toggle("Tema-Vermelho")

}
function corAmarela (){
    corAzul()
    document.body.classList.toggle("Tema-Amarelo")

}
function corAzul(){
    document.body.classList.remove("Tema-Vermelho", "Tema-Amarelo")
}

function temaEscuro() {
  corAzul();
  document.body.classList.toggle("tema-escuro");
}


// Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "1. O que causa enchentes?",
    opcoes: [
      { texto: "Chuvas fortes", correta: true },
      { texto: "Sol demais", correta: false },
      { texto: "Terremotos", correta: false }
    ]
  },
  {
    pergunta: "2. Onde ocorrem mais enchentes?",
    opcoes: [
      { texto: "Áreas baixas", correta: true },
      { texto: "Montanhas", correta: false },
      { texto: "Desertos", correta: false }
    ]
  },
  {
    pergunta: "3. Qual é a primeira medida a ser tomada ao receber um alerta de enchente?",
    opcoes: [
      { texto: "Verificar as redes sociais para confirmar a informação", correta: false },
      { texto: "Reunir documentos importantes, medicamentos e itens essenciais", correta: true },
      { texto: "Esperar até que a água comece a subir para tomar uma decisão", correta: false },
      { texto: "Ligar para todos os vizinhos para avisar", correta: false }
    ]
  },
  {
    pergunta: "4. Qual destes itens NÃO deve fazer parte de um kit de emergência para enchentes?",
    opcoes: [
      { texto: "Lanternas e pilhas extras", correta: false },
      { texto: "Alimentos não perecíveis", correta: false },
      { texto: "Equipamentos eletrônicos de valor", correta: true },
      { texto: "Água potável", correta: false }
    ]
  },
  {
    pergunta: "5. Durante uma enchente, é seguro:",
    opcoes: [
      { texto: "Atravessar áreas alagadas a pé", correta: false },
      { texto: "Dirigir através de áreas com água corrente", correta: false },
      { texto: "Permanecer em locais altos e seguros", correta: true },
      { texto: "Tocar em equipamentos elétricos molhados", correta: false }
    ]
  },
  {
    pergunta: "6. Qual é o principal fator que contribui para enchentes em áreas urbanas?",
    opcoes: [
      { texto: "Impermeabilização do solo", correta: true },
      { texto: "Plantio de árvores", correta: false },
      { texto: "Coleta seletiva de lixo", correta: false },
      { texto: "Uso de energia renovável", correta: false }
    ]
  },
  {
    pergunta: "7. Após uma enchente, antes de retornar para casa, é importante:",
    opcoes: [
      { texto: "Ligar imediatamente todos os equipamentos elétricos para verificar se funcionam", correta: false },
      { texto: "Verificar se há danos estruturais e se é seguro entrar", correta: true },
      { texto: "Beber a água da torneira para verificar se está contaminada", correta: false },
      { texto: "Limpar imediatamente com água sanitária pura", correta: false }
    ]
  },
  {
    pergunta: "8. Qual destas doenças NÃO está comumente associada a enchentes?",
    opcoes: [
      { texto: "Leptospirose", correta: false },
      { texto: "Dengue", correta: false },
      { texto: "Sarampo", correta: true },
      { texto: "Hepatite A", correta: false }
    ]
  },
  {
    pergunta: "9. Qual é a melhor maneira de se manter informado durante uma situação de enchente?",
    opcoes: [
      { texto: "Confiar apenas em informações de redes sociais", correta: false },
      { texto: "Ignorar alertas oficiais se não estiver chovendo no momento", correta: false },
      { texto: "Acompanhar boletins oficiais da Defesa Civil, meteorologia e utilizando o Alerta Seguro", correta: true },
      { texto: "Sair para verificar pessoalmente o nível dos rios", correta: false }
    ]
  },
  {
    pergunta: "10. Em caso de evacuação devido a enchentes, o que você deve fazer com animais de estimação?",
    opcoes: [
      { texto: "Deixá-los em casa com bastante comida e água", correta: false },
      { texto: "Soltá-los para que encontrem abrigo por conta própria", correta: false },
      { texto: "Levá-los junto no processo de evacuação", correta: true },
      { texto: "Entregá-los aos vizinhos que não precisam evacuar", correta: false }
    ]
  }
];

// Atualize o array de respostas para o novo tamanho:
let questaoAtual = 0; // controla em qual pergunta está
let pontuacao = 0; // conta os acertos
let respostas = Array(perguntas.length).fill(null); // salva as respostas do usuário

// Elementos do HTML
const textoPergunta = document.getElementById("pergunta");
const areaOpcoes = document.getElementById("opcoes-botao");
const btnProxima = document.querySelector(".botao");
const btnVoltar = document.querySelector(".botao2");

// Mostra a pergunta atual
function mostrarPergunta() {
  // Pega a pergunta da vez
  const pergunta = perguntas[questaoAtual];

  
  textoPergunta.textContent = pergunta.pergunta;

  // Limpa os botões de antes
  areaOpcoes.innerHTML = "";

  // Mostra os botões com as opções
  pergunta.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.textContent = opcao.texto;
    botao.className = "btn";

    // Se já respondeu essa pergunta
    if (respostas[questaoAtual] !== null) {
      botao.disabled = true;

      if (respostas[questaoAtual] === indice) {
        botao.classList.add(opcao.correta ? "correto" : "incorreto");
      } else if (opcao.correta) {
        botao.classList.add("correto");
      }
    }

    // Quando clicar, verifica a resposta
    botao.onclick = function () {
      if (respostas[questaoAtual] === null) {
        respostas[questaoAtual] = indice;

        if (opcao.correta) {
          botao.classList.add("correto");
          pontuacao++;
        } else {
          botao.classList.add("incorreto");
        }

        // Mostrar a opção correta
        const botoes = document.querySelectorAll(".btn");
        pergunta.opcoes.forEach((op, i) => {
          if (op.correta) botoes[i].classList.add("correto");
          botoes[i].disabled = true;
        });
      }
    };

    areaOpcoes.appendChild(botao);
  });
}

// Vai para a próxima pergunta
function proxima() {
  if (questaoAtual < perguntas.length - 1) {
    questaoAtual++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

// Volta para a pergunta anterior
function voltar() {
  if (questaoAtual > 0) {
    questaoAtual--;
    mostrarPergunta();
  }
}

// Mostra o resultado final
function mostrarResultado() {
  textoPergunta.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  areaOpcoes.innerHTML = `<button class="btn" onclick="reiniciar()">Reiniciar</button>`;
  btnProxima.style.display = "none";
  btnVoltar.style.display = "none";
}

// Reinicia o quiz
function reiniciar() {
  questaoAtual = 0;
  pontuacao = 0;
  respostas = Array(perguntas.length).fill(null);
  btnProxima.style.display = "block";
  btnVoltar.style.display = "block";
  mostrarPergunta();
}

// Começa o quiz
mostrarPergunta();

// Menu Hamburguer
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
        // Fecha o menu ao clicar em um link (opcional)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});

