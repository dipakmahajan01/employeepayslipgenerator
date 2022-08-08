var count = 0;
var dothejob = (actionType) => {
    count++;
    var empData = {};
    empData.name = document.querySelector("#ename").value;
    empData.age = document.querySelector("#eage").value;
    empData.gender = document.querySelector("input[name=gender]:checked").value;
    empData.bSal = document.querySelector("#bsal").value;
    empData.bSal = parseInt(empData.bSal)

    switch (actionType) {
        case "pf":
            var pf = salutil.getSalpf(empData.bSal);
            document.querySelector("#rblock").innerHTML = " Your Total pf value is" + "  " + pf;
            break;
        case "hra":
            var hra = salutil.getSalhra(empData.bSal)
            document.querySelector("#rblock").innerHTML =
                " Your Total hra value is"+ " " + hra;
            break;
        case "Tsal":
            var totalSal = salutil.gettotalSal(empData.bSal, empData.gender)
            document.querySelector("#rblock").innerHTML =
                "Your Total salary value is"+" " + totalSal;

            break;
        case "Ttax":
            var totaltax = salutil.gettotaltax(empData.bSal, empData.gender)
            document.querySelector("#rblock").innerHTML =
                "Your Total tax pay value is" + "  " + totaltax;

            break;
    }
};