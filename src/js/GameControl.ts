import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl{
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ''
    constructor(snake: Snake = new Snake('snake', '#snake div'), food: Food = new Food('food'), scorePanel: ScorePanel = new ScorePanel('scoreN', 'level')) {
        this.snake = snake
        this.food = food
        this.scorePanel = scorePanel
        this.init()
    }
    init() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
    }
    keyDownHandler(event: KeyboardEvent) {
        console.log(event.key)
        this.direction = event.key
    }
}
new GameControl()