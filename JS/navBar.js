// Função para remover a classe ativa de todos os links
function removeActiveClassFromAllLinks() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('bg-amber-900', 'text-white');
        link.classList.add('text-gray-700');
        if (!link.classList.contains('hover:text-amber-800')) {
            link.classList.add('hover:text-amber-800');
        }
    });
}

// Adiciona evento de clique a todos os links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        removeActiveClassFromAllLinks();
        this.classList.add('bg-amber-900', 'text-white');
        this.classList.remove('hover:text-amber-800');
    });
});

// Toggle do menu mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.add('animate-fade-in');
});

// Animação suave opcional (adicione no CSS se quiser)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.3s ease forwards;
    }
  `;
document.head.appendChild(style);