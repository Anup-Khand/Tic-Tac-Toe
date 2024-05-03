const boxes = document.querySelectorAll(".box");
const resetbtn = document.querySelector("#reset-btn")
const newbtn = document.querySelector("#new-btn");
const msg = document.querySelector(".msg")
const msgtext = document.querySelector(".msg-text")

//player turn

let playerTurnX = true;
let count = 0;
// winpattern 
const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],   
]


newbtn.addEventListener("click", ()=> {
    playerTurnX = true;
    count = 0;
    enablebox();
    msg.style.display = "none"
})
resetbtn.addEventListener("click", () => {
    count = 0 ;
    enablebox();
})
const enablebox = () => {
    
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const showMessage = () => {
    msg.style.display = "flex"
       msgtext.innerText = `Nobody is Winner`
}
//checking winner function
const checkWinner = () => {
    for (pattern of WinPatterns) {   //gives the array from winpattern
       console.log(pattern[0], pattern[1], pattern[2])
        //console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]) show the array of box inside boxes 
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)
        
        let position1 = boxes[pattern[0]].innerText
        let position2 = boxes[pattern[1]].innerText
        let position3 = boxes[pattern[2]].innerText

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {

                showWinner(position1)
                return
            }
        } 
    }
    if (count === 9) {
        showMessage();
    }

}
const showWinner = (winner) => {
    msgtext.innerText = `Congratulation ,Winner is ${winner}`
     msg.style.display = "flex"
}


//adding eventlisterner for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count = count+1
      
        if (playerTurnX) {
            box.innerText = "X"
            playerTurnX =false
        }
        else {
            box.innerText = "O"
            playerTurnX =true
        }
        box.disabled = true
        console.log("click")
          console.log(count)
        checkWinner();
    })
})