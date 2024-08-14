/**
 * Anima a contagem de um valor inicial para um valor final dentro de um elemento HTML,
 * adicionando um valor aleatório ao incremento em cada iteração.
 *
 * @param {number} initialValue - O valor inicial da contagem.
 * @param {number} finalValue - O valor final que será alcançado pela contagem.
 * @param {number} delay - O tempo (em milissegundos) entre cada incremento/decremento na contagem.
 * @param {number} increment - O valor base a ser incrementado a cada iteração.
 * @param {HTMLElement} element - O elemento HTML onde a contagem será exibida.
 */
async function animatedCount({
    initialValue,
    finalValue,
    delay,
    increment,
    element
}) {
    let currentValue = initialValue;

    while (currentValue < finalValue) {
        const randomDelay = delay + (Math.random() - 0.5) * delay;

        await new Promise((res) => {
            setTimeout(() => {
                res(true);
            }, randomDelay);
        });
        /* 0  a 1  */

        /* 
        1 - 0.5  === 0.5 * 10 = 5 + 10 = 15;
        0 - 0.5  === -0.5 * 10 = -5 + 10 = 5;
        */
        const randomFactor = (Math.random() - 0.5) * increment;
        currentValue += increment + randomFactor;

        if (currentValue >= finalValue) {
            currentValue = finalValue;
        }

        element.innerText = String(Math.floor(currentValue));
    }
}

export default animatedCount;