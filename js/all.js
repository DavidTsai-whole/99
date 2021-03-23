let content = document.querySelector('.content');

for (let i = 2; i < 10; i++) {
    let multiplicationFormula = '';
    for (let j = 1; j < 10; j++) {
        multiplicationFormula += `<li class="secondNumber">${i} × ${j} = ${i * j}</li>`;
    }
    let otherItem = `
    <div class="otherItem">
            <ul>
                <li class="mainNumber">${i}</li>
                ${multiplicationFormula}
            </ul>
        </div>
        `;
content.innerHTML  += otherItem;

}