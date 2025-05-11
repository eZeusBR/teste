// Dados das notícias
const noticias = [
    {
        id: 1,
        titulo: "SVO investiga óbitos relacionados a doenças de interesse da saúde pública",
        preview: "O SVO também investiga óbitos relacionados a doenças que são de interesse da saúde pública, ajudando a identificar e controlar surtos e epidemias.",
        conteudo: "O Serviço de Verificação de Óbitos (SVO) tem desempenhado um papel crucial na investigação de óbitos relacionados a doenças de interesse da saúde pública. Esta atuação tem sido fundamental para a identificação precoce de surtos e o controle de epidemias em nossa região...",
        imagem: "imagens/pexels-cottonbro-7584484.jpg",
        data: "15/03/2024",
        autor: "Dr. João Silva",
        imagensAdicionais: [
            "imagens/pexels-cottonbro-7584484.jpg",
            "imagens/pexels-shvetsa-4586984.jpg"
        ]
    },
    {
        id: 2,
        titulo: "SVO firma parceria com universidades para ampliar pesquisas",
        preview: "Nova parceria com instituições de ensino superior vai permitir avanços em pesquisas científicas e formação de novos profissionais na área.",
        conteudo: "Em uma iniciativa inovadora, o SVO estabeleceu parcerias estratégicas com importantes universidades da região. Esta colaboração visa fortalecer a pesquisa científica e proporcionar oportunidades de formação prática para estudantes da área da saúde...",
        imagem: "imagens/pexels-jonathanborba-28736017.jpg",
        data: "10/03/2024",
        autor: "Dra. Maria Santos",
        imagensAdicionais: [
            "imagens/pexels-jonathanborba-28736017.jpg"
        ]
    },
    {
        id: 3,
        titulo: "SVO recebe novos equipamentos",
        preview: "Investimento em tecnologia e infraestrutura permitirá maior precisão nos diagnósticos e agilidade no atendimento aos casos recebidos pelo serviço.",
        conteudo: "O Serviço de Verificação de Óbitos acaba de receber um importante upgrade em sua infraestrutura tecnológica. Os novos equipamentos, que representam um investimento significativo, permitirão diagnósticos mais precisos e um atendimento mais ágil...",
        imagem: "imagens/pexels-saul-siguenza-355267816-28510160.jpg",
        data: "05/03/2024",
        autor: "Técnico Roberto Oliveira",
        imagensAdicionais: [
            "imagens/pexels-saul-siguenza-355267816-28510160.jpg"
        ]
    }
];

// Função para criar o grid de notícias
function criarGridNoticias() {
    const grid = document.getElementById('noticias-grid');
    grid.innerHTML = '';

    noticias.forEach(noticia => {
        const noticiaElement = document.createElement('div');
        noticiaElement.className = 'noticia-card';
        noticiaElement.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="noticia-imagem">
            <div class="noticia-conteudo">
                <h2>${noticia.titulo}</h2>
                <p class="noticia-meta">Por ${noticia.autor} | ${noticia.data}</p>
                <p>${noticia.preview}</p>
                <button onclick="abrirNoticia(${noticia.id})" class="ler-mais">Ler mais</button>
            </div>
        `;
        grid.appendChild(noticiaElement);
    });
}

// Função para abrir notícia no modal
function abrirNoticia(id) {
    const noticia = noticias.find(n => n.id === id);
    const modal = document.getElementById('noticia-modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <h2>${noticia.titulo}</h2>
        <p class="noticia-meta">Por ${noticia.autor} | ${noticia.data}</p>
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="modal-imagem-principal">
        <div class="noticia-texto">${noticia.conteudo}</div>
        <div class="galeria-imagens">
            ${noticia.imagensAdicionais.map(img => `
                <img src="${img}" alt="Imagem adicional" class="imagem-adicional">
            `).join('')}
        </div>
    `;

    modal.style.display = "block";
}

// Função para compartilhar
function compartilhar(rede) {
    const url = encodeURIComponent(window.location.href);
    const titulo = encodeURIComponent(document.title);
    
    const redes = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${titulo}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${titulo}`,
        instagram: `https://instagram.com` // Instagram não possui API de compartilhamento direta
    };

    window.open(redes[rede], '_blank');
}

// Fechar modal
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('noticia-modal').style.display = "none";
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('noticia-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', criarGridNoticias);