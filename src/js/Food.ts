class Food{
    element: HTMLElement
    constructor(id: string) {
        this.element = document.getElementById(id)!
    }
    get x() {
        return this.element.offsetLeft
    }
    get y() {
        return this.element.offsetTop
    }
    change() {
        this.element.style.top = Math.round((Math.random()*29))*10 + 'px'
        this.element.style.left = Math.round((Math.random()*29))*10 + 'px'
    }
}
export default Food