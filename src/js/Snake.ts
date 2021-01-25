class Snake{
    element: HTMLElement
    body: HTMLCollection
    head: HTMLElement
    isDead: boolean = false
    cnt: number = 0
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
        if(this.x === value)return
        this.head.style.left = value + 'px'
        if(value > 290 || value < 0){
            this.dead()
        }
    }
    set y(value: number) {
        if(this.y === value)return
        this.head.style.top = value + 'px'
        if(value > 290 || value < 0){
            this.dead()
        }
    }
    addBody() {
        this.element.insertAdjacentElement('beforeend', document.createElement('div'))
    }
    dead() {
        this.isDead = true
        console.log('dead')
        this.element.className = 'dead'
    }
    moveBody(lay: number = 30) {
        // console.log(this.body.length)
            for(let i = this.body.length - 1;i>0;i--) {
                    let beforeX = (this.body[i - 1] as HTMLElement).offsetLeft 
                    let beforeY = (this.body[i - 1] as HTMLElement).offsetTop
                setTimeout(()=> {
                    ;(this.body[i] as HTMLElement).style.left = beforeX + 'px'
                    ;(this.body[i] as HTMLElement).style.top = beforeY + 'px'
                }, lay*10)
            }
    }
}

export default Snake