import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'
import Restart from './restart'

class GameControl{
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    aside: Map<string, string> = new Map()
    direction: string
    isAlive: boolean = true
    changeDirection: boolean = false
    restart: Restart | null = new Restart()
    RunTimeout: NodeJS.Timeout = setTimeout(()=>{},30)
    constructor(snake: Snake = new Snake('snake', '#snake div'), food: Food = new Food('food'), scorePanel: ScorePanel = new ScorePanel('scoreN', 'level')) {
        this.scorePanel = scorePanel
        this.snake = snake
        this.food = food
        this.init()
        this.direction = 'ArrowRight'
        this.aside.set('ArrowRight', 'ArrowLeft')
        this.aside.set('ArrowLeft', 'ArrowRight')
        this.aside.set('ArrowUp', 'ArrowDown')
        this.aside.set('ArrowDown', 'ArrowUp')
    }
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        this.restart?.element.addEventListener('click', this.restart.restart)
    }
    keyDownHandler(event: KeyboardEvent) {
        clearTimeout(this.RunTimeout)
        console.log(event.key)
        if(this.direction !== this.aside.get(event.key)) {
            this.direction = event.key
        }
        this.run()
    }
    run() {
        let x = this.snake.x
        let y = this.snake.y
        if(this.scorePanel.getLevel() > 6) {
            this.scorePanel.setLevel(6)
        }
        let lay =  30 - (this.scorePanel.getLevel()-1)*5
        if(this.snake.isDead){
            this.isAlive = true
            return
        }
        switch(this.direction) {
            case "ArrowUp":     y-=1;break;
            case "ArrowDown":   y+=1;break;
            case "ArrowLeft":   x-=1;break;
            case "ArrowRight":  x+=1;break;
        }
        this.snake.x = x
        this.snake.y = y
        this.isHit()
        this.checkEat(x, y)
        if(this.snake.body.length > 1) {
            this.snake.moveBody(lay)
        }
        if(this.changeDirection){
            this.changeDirection = false
            return
        }
        
        this.RunTimeout = setTimeout(this.run.bind(this),lay)
        
    }
    checkEat(x: number, y: number) {
        if( ( x < this.food.x + 10 && x + 10 > this.food.x && y+10 > this.food.y && y < this.food.y + 10)) {
            console.log('eat !')
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
            
        }
    }
    isHit() {
        for(let i=3;i<this.snake.body.length;i++){
            let left = (this.snake.body[i] as HTMLElement).offsetLeft
            let top = (this.snake.body[i] as HTMLElement).offsetTop
            if(this.snake.x +10 >= left && this.snake.x <= left + 10 && this.snake.y + 10 >= top && this.snake.y <= top + 10) {
                console.log('hit!')
                this.snake.dead()
            }
        }
    }
}
export default GameControl