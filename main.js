const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');

const onDragStart = () => {
    fill.className += ' hold';
    setTimeout(() => {
        fill.className = 'hidden';
    }, 0);
}

const onDragEnd = () => {
    fill.className = 'fill';
}

const onDragOver = (e) => {
    e.preventDefault();
}

function onDragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function onDragLeave() {
    this.className = 'empty';
}

function onDrop() {
    this.className = 'empty';
    this.append(fill);
}

//Loop through boxes and call drag events
for (const box of boxes) {
    box.addEventListener('dragover', onDragOver);
    box.addEventListener('dragenter', onDragEnter);
    box.addEventListener('dragleave', onDragLeave);
    box.addEventListener('drop', onDrop);

}


fill.addEventListener('dragstart', onDragStart);
fill.addEventListener('dragend', onDragEnd);


