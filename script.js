const empty = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for (const empties of empty) {
    empties.addEventListener('dragover', dragOver)
    empties.addEventListener('dragenter', dragEnter)
    empties.addEventListener('drop', dragDrop)


}
function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = "invisible", 0)


}

function dragEnd() {
    this.className = 'fill'
}



function dragOver(e) {
    e.preventDefault()
}

function dragEnter() {
    e.preventDefault()


}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}
