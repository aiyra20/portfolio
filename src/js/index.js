// ================================
// MOSTRAR MAIS PROJETOS
// ================================
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetos = document.querySelectorAll('.projeto');

const projetosPorClique = 4;
let projetosVisiveis = document.querySelectorAll('.projeto.ativo').length;

botaoMostrarProjetos.addEventListener('click', () => {
    let mostrados = 0;

    for (let i = projetosVisiveis; i < projetos.length && mostrados < projetosPorClique; i++) {
        projetos[i].classList.add('ativo');
        mostrados++;
    }

    projetosVisiveis += mostrados;

    if (projetosVisiveis >= projetos.length) {
        botaoMostrarProjetos.textContent = 'Sem mais projetos';
        botaoMostrarProjetos.disabled = true;
    }
});


// ================================
// CERTIFICADOS (MODAL COM IMAGEM)
// ================================
const imagensCertificado = document.querySelectorAll('[data-img]');
const modalCertificado = document.getElementById('modalCertificado');
const imagemModal = document.getElementById('imagemCertificado');
const fecharModal = document.querySelector('.modal-certificado .fechar');

imagensCertificado.forEach(img => {
    img.addEventListener('click', () => {
        imagemModal.src = img.dataset.img;
        modalCertificado.style.display = 'flex';
    });
});

fecharModal.addEventListener('click', () => {
    modalCertificado.style.display = 'none';
});

modalCertificado.addEventListener('click', (e) => {
    if (e.target === modalCertificado) {
        modalCertificado.style.display = 'none';
    }
});


//Script do modo dark
        const botaoTema = document.getElementById("toggle-theme");
        const body = document.body;

        function aplicarTema(tema) {
            if (tema === "claro") {
                body.classList.add("light-mode");  //Ativa modo claro
                body.classList.remove("dark-mode");
                botaoTema.textContent = "🌙"; //Troca o botão pro ícone de lua
            } else {
                body.classList.add("dark-mode"); //Ativa  modo escuro
                body.classList.remove("light-mode");
                botaoTema.textContent = "🌞"; //Ícone de sol
            }
        }

        // Clicar no botão = alternar tema
        botaoTema.addEventListener("click", () => {
            const temaAtual = body.classList.contains("dark-mode") ? "escuro" : "claro";
            const novoTema = temaAtual === "escuro" ? "claro" : "escuro";
            localStorage.setItem("tema", novoTema); //Salva o novo tema
            aplicarTema(novoTema); //Aplica no site
        });

        // Quando o site carregar, Aplica o tema salvo
        const temaSalvo = localStorage.getItem("tema") || "escuro";
        aplicarTema(temaSalvo);