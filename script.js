import animatedCount from './scripts/animations/count.js';

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