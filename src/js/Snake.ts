class Snake{
    element: HTMLElement
    body: HTMLCollection
    head: HTMLElement
    constructor(snakeId: string, body: string = 'div'){
        this.element = document.getElementById(snakeId)!
        this.head = this.element.firstElementChild as HTMLElement
        this.body = this.element.children
    }
    get x() {
        return this.head.offsetLeft
    }
    get y() {
        return this.head.offsetTop
    }
    set x(value: number) {
        this.head.style.left = value + 'px'
    }
    set y(value: number) {
        this.head.style.top = value + 'px'
    }
    addBody() {
        this.element.insertAdjacentElement('beforeend', document.createElement('div'))
    }
}

export default Snake