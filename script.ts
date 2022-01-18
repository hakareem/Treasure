"use script"
class Hunt{
    x:number = Math.ceil((Math.random()*150)+300)
    y:number = Math.ceil((Math.random()*900))
}

let screenLog = <HTMLElement>document.querySelector('#screen-log');
document.addEventListener('click', mouseClick);

let tries = 0
function mouseClick(e:MouseEvent){    
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
    let num = 0;
    screenLog.style.color = "white"
    screenLog.style.bottom = num + "px";


    let distance = getDistance(e,treasureX, treasureY)
    if (distance > 700){
        myAlert("Very Far")
    }else if (distance < 700 && distance >500){
        myAlert("Far")
    } else if (distance<500 && distance>250){
        myAlert("Getting There")
    }else if (distance<250 && distance>100){
        myAlert("Close")
    }else if (distance < 100 && distance>50){
        myAlert("Very Close")
    }else if(distance <50){
        treasureBox.style.display = '';
        treasureBox.style.position = "absoulte";
        treasureBox.style.left = treasureX + "px"
        treasureBox.style.top = treasureY + "px"
        myAlert(`YAY YOU GOT IT IN ${tries} TRIES!`)
        setTimeout(resetGame,3000)
    }

    tries+=1
}


let treasureBox = <HTMLElement>document.getElementById("chest")
treasureBox.style.display = 'none'
let treasureX = Math.random()* 1200
let treasureY = Math.random()* 700
treasureBox.style.left = treasureX + "px"
treasureBox.style.top = treasureY + "px"

let getDistance = function (event:MouseEvent, treasureX:number, treasureY:number):number {
    let diffX = event.offsetX - treasureX;
    let diffY = event.offsetY - treasureY;
    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY)); 
    return distance 
}


function myAlert(msg:string){
    let message = <HTMLElement>document.getElementById("message")
    message.innerHTML = msg
}

function resetGame(){
    document.location.reload() 
}