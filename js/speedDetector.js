let carSpeed = parseInt(prompt("Enter the car speed"))

/* We will create a function speedChecker() where if a driver exceeds 70 it returns status and if below 70 it says Ok */
// MAIN LOGIC
function speedChecker(speed){
    if(speed > 70){
        let overSpeed = speed - 70 
        const status = Demeriter(overSpeed)

        return status

    }else{
        return 'Ok'
    }
}

/* A function Demeriter that will calculate the points above 70 and return License expired if above 12 points*/

function Demeriter(speed){
    const points = Math.floor(speed / 5)
    //SPEED IS BETWEEN 1-5 // INCREMENTS BY 1
    //SPEED IS BETWEEN 6-10 // INCREMENT POINTS BY 2
    if(points <= 12){
        return `Demerit Points:${points}`
    }else{
        return 'License Expired'
    }    
}

document.getElementById("demo").innerHTML = ` ${speedChecker(carSpeed)}`