let carSpeed = parseInt(prompt("Enter the car speed"))

/* We will create a function speedChecker() where if a driver failes this test, he is handed over to the demeriter function */
function speedChecker(speed){
    if(speed >= 70){
        let points = 0        
        
        /* Some Crazy Function Here */

        if(points > 12){
            return 'License suspended'
        }else{
            return points
        }

        /*else block*/
    }else{
        return 'Ok'
    }
}



// console.log(typeof(speedChecker(90)))

document.getElementById("demo").innerHTML = ` ${speedChecker(carSpeed)}`