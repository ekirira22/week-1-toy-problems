let basicSalary = parseFloat(prompt("Enter your basic salary"))
let benefits = parseFloat(prompt("Enter your monthly benefits"))

function NetSalary(basicSalary, benefits){

    let grossPay = basicSalary - benefits

    function Payee(grossPay){
        if(grossPay < 24000){
            return grossPay * 0.1
        }else if(grossPay > 24000 && grossPay <= 32333){
            return grossPay * 0.25
        }
        else if(grossPay > 32333 && grossPay <= 500000){
            return grossPay * 0.3
        }else if(grossPay > 500000 && grossPay <= 800000){
            return grossPay * 0.325
        }else{
            return grossPay * 0.35
        }
    }

    function Nhif(){
        if(grossPay <= 5999){
            return 150
        }else if(grossPay > 5999 && grossPay <= 7999){
            return 300
        }
        else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay >= 12000 && grossPay <= 14999){
            return 500
        }else if(grossPay >= 15000 && grossPay <= 19999){
            return 500
        }else if(grossPay > 19999 && grossPay <= 24999){
            return 850
        }else if(grossPay > 24999 && grossPay <= 29999){
            return 900
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 7999 && grossPay <= 11999){
            return 400
        }else if(grossPay > 100000){
            return 1700
    }
}

    function Nssf(){
        return grossPay * 0.06
    
    }

    return grossPay - Payee() - Nhif() - Nssf()
    // console.log(Payee())
    
}

/* Gets the element in the HTML document with id demo and appends the respective salary in the innerHTML */
document.getElementById("demo").innerHTML = `Hello there, your salary is ${NetSalary(basicSalary, benefits)}`
    

