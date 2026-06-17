
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura os elementos de classe 'card' do HTML
    const cards = document.querySelectorAll('.card');
    
    // Associa uma escuta de evento para os cliques
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const trilha = card.getAttribute('data-trilha');
            
            // Apresenta resposta em janela de alerta do navegador
            alert(`Você escolheu a trilha: ${trilha}!\nPrepare seu editor de código, guias detalhados de estudo serão adicionados aqui em breve.`);
        });
    });

    console.log("Portal TechForge carregado e conectado.");
});
