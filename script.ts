"use script"
class Hunt{
    x:number = Math.ceil((Math.random()*150)+300)
    y:number = Math.ceil((Math.random()*900))
}

let screenLog = <HTMLElement>document.querySelector('#screen-log');
document.addEventListener('click', click);

let tries = 0
function click(e:MouseEvent){    
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
        chest.style.display = '';
        chest.style.position = "absoulte";
        chest.style.left = treasureX + "px"
        chest.style.top = treasureY + "px"
        myAlert(`YAY YOU GOT IT IN ${tries} TRIES!`)
        setTimeout(resetGame,3000)
    }

    tries+=1
}


let chest = <HTMLElement>document.getElementById("chest")
chest.style.display = 'none'
let treasureX = Math.random()* window.innerWidth
let treasureY = Math.random()* window.innerHeight
chest.style.left = treasureX + "px"
chest.style.top = treasureY + "px"

let getDistance = function (event:MouseEvent, treasureX:number, treasureY:number):number {
    let diffX = event.offsetX - treasureX;
    let diffY = event.offsetY - treasureY;
    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY)); 
    return distance 
}


function myAlert(msg:string){
    let output = <HTMLElement>document.getElementById("result")
    output.innerHTML = msg
}

function resetGame(){
    document.location.reload() 
}