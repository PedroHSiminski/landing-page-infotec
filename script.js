import animatedCount from './scripts/animations/count.js';
import { Carrousel } from './scripts/carroussel.js';
/* import { typeWriter } from './scripts/animations/writing.js'; */

/* insere animaçào de contagem */
const projetosImplantados = document.getElementById("projetos-implanatados");
const pessoasTreinadas = document.getElementById("pessoas-treinadas");
const treinamentosExecutados = document.getElementById("treinamentos-executados");

animatedCount({
    initialValue: 0,
    finalValue: 200,
    delay: 125,
    increment: 10,
    element: projetosImplantados
});

animatedCount({
    initialValue: 0,
    finalValue: 3000,
    delay: 90,
    increment: 100,
    element: pessoasTreinadas
});

animatedCount({
    initialValue: 0,
    finalValue: 1000,
    delay: 120,
    increment: 50,
    element: treinamentosExecutados
});

new Carrousel({
    element: document.getElementById('wpc-display'),
    leftButton: document.getElementById('btn-wpc-left'),
    rightButton: document.getElementById('btn-wpc-right'),
    onChange: function(self) {
        Array.from(self.element.children).forEach((c, i) => {
            if(i === this.current) {
                c.classList.add("mb:visible");
            } else {
                c.classList.remove("mb:visible");
            }
        })
    }
});

new Carrousel({
    element: document.getElementById("coc-display"),
    leftButton: document.getElementById("btn-coc-left"),
    rightButton: document.getElementById("btn-coc-right"),
    length: 1
})

new Carrousel({
    element: document.getElementById("cc-display"),
    leftButton: document.getElementById("btn-cc-left"),
    rightButton: document.getElementById("btn-cc-right"),
    length: 4
})
