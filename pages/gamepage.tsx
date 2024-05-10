import {  useState } from "react"

const items = ["stone", "papper", "scissor"]
const winner =["WIN PC","WIN YOU","DRAW"] 
let win:string
let countpc = 0
let countyou = 0

function random(req:string) {
    const RandomItem:string=items[Math.floor(Math.random() * items.length)]
    if (RandomItem === req ) {
        console.log("draw");
        win=winner[2]
    } else if (RandomItem === "papper" && req === "stone"||
        RandomItem === "stone" && req === "scissor" ||
        RandomItem === "scissor" && req === "paper"){
        console.log("win pc");
        countpc++
        win=winner[0]
    } else if (RandomItem === "papper" && req === "scissor"||
        RandomItem === "stone" && req === "paper" ||
        RandomItem === "scissor" && req === "stone"){
        console.log("win you");
        countyou++
        win=winner[1]}
}
export function Gamepage() {
    const [winn,Setwinner] = useState("Start Game")
    const [countYou,SetcountYou] = useState(0)
    const [countPc,SetcountPc] = useState(0)
    
    function handler(event: React.MouseEvent<HTMLButtonElement>) {
      let id = (event.target as HTMLButtonElement).id
      random(id)
      SetcountPc(countpc)
      SetcountYou(countyou)
      Setwinner(win)
    }
    return (
        <>
        <h1>{winn}</h1>
        <div className="buttons">
            <button onClick={handler} id="stone">Stone</button>
            <button onClick={handler} id="paper">Papper</button>
            <button onClick={handler} id="scissor" >Scissor</button>
        </div>
        <h2>You:{countYou} - Pc:{countPc}</h2>
        </>
    )
}