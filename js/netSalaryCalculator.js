/* Prompts the user for input of Basic Salary and other deductible benefits */

let UserbasicSalary = parseFloat(prompt("Enter your basic salary"))
let benefits = parseFloat(prompt("Enter your monthly benefit allowances"))

/* Declared a function NetSalary that receives the user input and returns the calculated Net Pay */

/* MAIN LOGIC*/
//ALGO
//STEP 1. CALCULATE GROSS SALARY = BASIC SALARY + BENEFITS/ALLOWANCES 
//STEP 2. CALCULATE TAXABLE INCOME = GROSS SALARY - DEDUCTIBLES(NSSF)
//STEP 3. CALCULATE PAYEE = TAXABLE INCOME USING PROVIDED RATES **
//STEP 4. CALCULATE NET SALARY = GROSS SALARY - (PAYEE + NHIF)


function NetSalary (basicSalary, benefits) {

    /* Declared a global variable for grossSalary that receives calculated gross salary */
    /* Declared a global variable for taxableIncome that receives calculated taxable income by deducting Nssf */


    const grossSalary = basicSalary + benefits
    const taxableIncome = grossSalary - Nssf(basicSalary)

    /*This now does the final deduction of the payee and nhif from the taxable income and returns it in netSalary*/

    const netSalary = (grossSalary - Payee(taxableIncome)) - Nhif(basicSalary)
    
    /* FOR DISPLAYING EMPLOYEE SALARY DETAILS*/
    const salaryObj = {}
    salaryObj["BasicSalary"] = basicSalary
    salaryObj["Benefits"] = benefits
    salaryObj["Deductibles(NSSF)"] = Nssf(basicSalary)
    salaryObj["GrossSalary"] = grossSalary
    salaryObj["TaxableIncome"] = taxableIncome
    salaryObj["PAYEE"] = Payee(taxableIncome)
    salaryObj["NHIF"] = Nhif(basicSalary)
    salaryObj["Net Salary"] = netSalary 

    console.table(salaryObj)

    return netSalary
}

/* CALCULATOR FUNCTIONS */
// function benefitsDeductibles(basicSalary){
//     //returns the amount to be deducted from inputted basic salary by calculating the employees NHIF and NSSF
//     //Passes basicSalary inputted to Nhif and Nssf function to calculate respective deductibles
//     const totalDeductible = Nhif(basicSalary) + Nssf(basicSalary)
//     return totalDeductible
// }

/* NHIF hoisted function receives the basicSalary input and calculates accordindlgy returning a value */
function Nhif (basicSalary) {
    
        if(basicSalary <= 5999){
            return 150
        }else if(basicSalary > 5999 && basicSalary <= 7999){
            return 300
        }else if(basicSalary > 7999 && basicSalary <= 11999){
            return 400
        }else if(basicSalary > 11999 && basicSalary <= 14999){
            return 500
        }else if(basicSalary > 14999 && basicSalary <= 19999){
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
        }else if(basicSalary >= 100000){
            return 1700
    }
}

/* NSSF hoisted function returns a value which is 6% of the basic salary from input */

function Nssf (basicSalary){
    if(basicSalary >= 18000){
        return 1080
    }else{
        return basicSalary * 0.06
    }
}

/* This is now where the taxable payee is calculated, this time from the gross pay after deductions */

function Payee (taxableIncome) {
    const payee = 0
   if(taxableIncome <= 24000){
        return payee
   }
   else if(taxableIncome > 24000 && taxableIncome <= 32333){
        
        let totalPayee = ((taxableIncome - 24001) * 0.25)
        return totalPayee
   }
   else if(taxableIncome > 32333 && taxableIncome <= 500000){
        let totalPayee = ((32334 - 24001)*0.25) + ((taxableIncome - 32334) * 0.3)
        return totalPayee
   }
   else if(taxableIncome > 50000 && taxableIncome <= 800000){
        let totalPayee = ((32334 - 24001)*0.25) + ((500001 - 32334) * 0.3) + ((taxableIncome - 500001) * 0.325)
        return totalPayee

   }else{
        let totalPayee = ((32334 - 24001)*0.25) + ((500001 - 32334) * 0.3) + ((800001 - 500001) * 0.325) + ((taxableIncome - 800001) * 0.35) 
        return totalPayee
   }
}



// console.log(NetSalary(basicSalary))

/* Gets the element in the HTML document with id demo and appends the respective calculated salary in the innerHTML */
document.getElementById("demo").innerHTML = `Hello there, your salary will amount to ${NetSalary(UserbasicSalary, benefits)} <br>`
    

