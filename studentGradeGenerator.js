// Prompts user for input, parses the input to an Int and stores in variable studentMarks
let studentmarks = parseInt(prompt("Please input your marks")) 

/* Arrow Function gradeGenerator that returns the student grade depending on what the user passes in studentMarks */
const gradeGenerator = studentmarks => {
    //set default to 'invalide mark' as default incase user enters an string

    let grade = 'invalid mark'

    //if statement checker
    if(studentmarks > 79){
        grade = "A"
        return grade
    }else if(studentmarks >= 60 && studentmarks <= 79){
        grade = "B"
        return grade
    }else if(studentmarks >= 49 && studentmarks <= 59){
        grade = "C"
        return grade
    } else if(studentmarks >= 40 && studentmarks < 49){
        grade = "D"
        return grade
    } else if(studentmarks < 40){
        grade = "E"
        return grade
    } else{
        return `${grade}, enter a valid score`
    }    
}

/* Gets the element in the HTML document with id demo and appends the respective grade in the innerHTML */
document.getElementById("demo").innerHTML = `Hello there, your grade is ${gradeGenerator(studentmarks)}`
    