class ScorePanel{
    private score: number
    private level: number
    private maxLevel: number
    private upScore: number
    scoreEle: HTMLElement
    levelEle: HTMLElement
    constructor(scoreId: string, levelId: string, upScore: number = 10,  maxLevel: number = 10,score: number = 0, level: number = 1) {
        this.score = score
        this.level = level
        this.scoreEle = document.getElementById(scoreId)!
        this.levelEle = document.getElementById(levelId)!
        this.scoreEle.innerHTML = this.score + ''
        this.levelEle.innerHTML = this.level + ''
        this.maxLevel = maxLevel
        this.upScore = upScore

    }
    addScore() {
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if(this.score%this.upScore === 0){
           this.levelUp() 
        }
    }
    levelUp() {
        if(this.level > this.maxLevel){
            return
        }
        this.level++
        this.levelEle.innerHTML = this.level + ''
    }
    
}
export default ScorePanel