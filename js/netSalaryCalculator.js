/* Prompts the user for input of Basic Salary and other deductible benefits */

let UserbasicSalary = parseInt(prompt("Enter your basic salary"))

/* Declared a function NetSalary that receives the user input and returns the calculated Net Pay */

/* MAIN LOGIC*/
function NetSalary (basicSalary) {

    /* Declared a global variable for grossSalary that uses a function benefitsDeductible() that deducts benefits and nhif, nssf etc */

    const grossSalary = basicSalary - benefitsDeductibles(basicSalary)

    /*This now does the final deduction of the payee from the taxable income */
    const netSalary = grossSalary - Payee(grossSalary)
    return netSalary
}

/* CALCULATOR FUNCTIONS */
function benefitsDeductibles(basicSalary){
    //returns the amount to be deducted from inputted basic salary by calculating the employees NHIF and NSSF
    //Passes basicSalary inputted to Nhif and Nssf function to calculate respective deductibles
    const totalDeductible = Nhif(basicSalary) + Nssf(basicSalary)
    return totalDeductible
}

/* NHIF hoisted function receives the basicSalary input and calculates accordindlgy returning a value */
function Nhif (basicSalary) {
    
        if(basicSalary <= 5999){
            return 150
        }else if(basicSalary > 5999 && basicSalary <= 7999){
            return 300
        }else if(basicSalary > 7999 && basicSalary <= 11999){
            return 400
        }else if(basicSalary >= 12000 && basicSalary <= 14999){
            return 500
        }else if(basicSalary >= 15000 && basicSalary <= 19999){
            return 600
        }else if(basicSalary > 19999 && basicSalary <= 24999){
            return 750
        }else if(basicSalary > 24999 && basicSalary <= 29999){
            return 850
        }else if(basicSalary > 29999 && basicSalary <= 34999){
            return 900
        }else if(basicSalary > 34999 && basicSalary <= 39999){
            return 950
        }else if(basicSalary > 39999 && basicSalary <= 44999){
            return 1000
        }else if(basicSalary > 44999 && basicSalary <= 49999){
            return 1100
        }else if(basicSalary > 49999 && basicSalary <= 59999){
            return 1200
        }else if(basicSalary > 59999 && basicSalary <= 69999){
            return 1300
        }else if(basicSalary > 69999 && basicSalary <= 79999){
            return 1400
        }else if(basicSalary > 79999 && basicSalary <= 89999){
            return 1500
        }else if(basicSalary > 89999 && basicSalary <= 99999){
            return 1600
        }else if(basicSalary > 100000){
            return 1700
    }
}

/* NSSF hoisted function returns a value which is 6% of the basic salary from input */

function Nssf (basicSalary){
    return basicSalary * 0.06
}

/* This is now where the taxable payee is calculated, this time from the gross pay after deductions */

function Payee (grossSalary) {
    if(grossSalary < 24000){
        return grossSalary * 0.1
    }else if(grossSalary > 24000 && grossSalary <= 32333){
        return grossSalary * 0.25
    }
    else if(grossSalary > 32333 && grossSalary <= 500000){
        return grossSalary * 0.3
    }else if(grossSalary > 500000 && grossSalary <= 800000){
        return grossSalary * 0.325
    }else{
        return grossSalary * 0.35
    }
}



// console.log(NetSalary(basicSalary))

/* Gets the element in the HTML document with id demo and appends the respective calculated salary in the innerHTML */
document.getElementById("demo").innerHTML = `Hello there, your salary will amount to ${NetSalary(UserbasicSalary)} <br>`
    

