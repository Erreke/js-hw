/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    function getRandom () {
        return Math.random() * Math.random() * 10;
    }

    const div = document.createElement('div');
    div.style.width = `${getRandom()}px`;
    div.style.height = `${getRandom()}px`;
    div.style.top = `${getRandom()}px`;
    div.style.left = `${getRandom()}px`;
    div.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    div.classList.add('draggable-div');

    return div;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
    target.addEventListener('dragstart', (e) => {
        console.log('dragstart event', e);
    });

    target.addEventListener('drag', (e) => {
        console.log('drag event', e);
    });

    target.addEventListener('dragenter', (e) => {
        console.log('dragenter event', e);
    });

    target.addEventListener('dragleave', (e) => {
        console.log('dragleave event', e);
    });

    target.addEventListener('dragover', (e) => {
        console.log('dragover event', e);
    });

    target.addEventListener('drop', (e) => {
        console.log('drop event', e);
    });

    target.addEventListener('dragend', (e) => {
        console.log('dragend event', e);
    });
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
