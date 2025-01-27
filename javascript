document.querySelectorAll('.grow-button').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.project-card'); // Acha o cartão correspondente
        const isGrown = card.classList.contains('grow'); // Verifica se já está crescido
        
        // Remove a classe 'grow' de todos os cartões
        document.querySelectorAll('.project-card').forEach(card => card.classList.remove('grow'));
        
        // Adiciona a classe 'grow' apenas se o cartão não estava crescido
        if (!isGrown) {
            card.classList.add('grow');
        }
    });
});
