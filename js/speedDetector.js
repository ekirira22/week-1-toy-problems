/* Request Carspeed from user and store it in a variable carSpeed */
let carSpeed = parseInt(prompt("Enter the car speed"))

/* We will create a function speedChecker() where if a driver exceeds 70 it returns status and if below 70 it says Ok */

function speedChecker(speed){
    // MAIN LOGIC
    if(speed > 70){
        let speedDiff = speed - 70 
        //Passed the SpeedDiff to a function Demeriter that will check and return the number of points or license status then
        //assign the result to a var status
        const status = Demeriter(speedDiff)

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
/* Gets the element in the HTML document with id demo and appends the respective car speed status in the innerHTML */

document.getElementById("demo").innerHTML = ` ${speedChecker(carSpeed)}`