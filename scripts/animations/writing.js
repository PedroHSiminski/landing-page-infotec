export function typeWriter({ element, texts, delay }) {
    let index = 0;      // Índice do array de texts
    let charIndex = 0;  // Índice do caractere no texto atual
    let isDeleting = false;  // Define se está deletando o texto

    function type() {
        const currentText = texts[index]; // Texto atual baseado no índice

        // Adiciona ou remove caracteres dependendo do estado (digitando ou deletando)
        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1) + ' |';
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1) + ' |';
            charIndex++;
        }

        // Controla a velocidade da animação
        let typingSpeed = isDeleting ? delay / 2 : delay;

        if (!isDeleting && charIndex === currentText.length) {
            // Pausa antes de começar a deletar
            typingSpeed = delay * 8;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move para o próximo texto após deletar
            isDeleting = false;
            index = (index + 1) % texts.length;  // Loop nos texts
        }

        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    type();
}
