// Marca o link ativo pelo nome do arquivo
const path = window.location.pathname;
const page = path.endsWith('projetos.html')
  ? 'projetos'
  : path.endsWith('contato.html')
  ? 'contato'
  : 'home';

document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.dataset.page === page) {
    link.classList.add('active');
  }
});

// Atualiza ano no rodapé automaticamente
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
