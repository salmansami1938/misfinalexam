function sum(){
    const name= document.getElementById("nameField").value ;

    const age = document.getElementById("ageField").value ;

    const monthlybill = document.getElementById("monthlyamountField").value ;

    const maintainancefees = document.getElementById("maintainancefeesField").value ;
    let value;

    const monthlyamountField = maintainancefeesField / 12.0;

    if (age > 50 && maintainancefeesField > 20000) {
        value = maintainancefeesField * 1.20;
    } else if (age > 30 && (monthlyamountField > 250 || monthlyamountField > 250)) {
        value = maintainancefeesField * 1.15;
    } else {
        value = maintainancefeesField;
    }
    value = "Incentive Amount Calculate = ".concat(value)