var salutil = (() => {
    var getpf = (bSal) => {
        var pf = (bSal * 12.4) / 100
        return pf;
    }
    var gethra = (bSal) => {
        var Hra = (bSal * 15) / 100
        return Hra;
    }
    var gettotaltax = (bSal, gender) => {
            var pf = getpf(bSal);
            var Hra = gethra(bSal);
            var totalSal = (bSal + pf + Hra);
            var totalYearsal = totalSal*12
            if (gender.toLowerCase() == 'male') {
                if (totalYearsal > 500000) {
                    taxPercent = 20;
                } else {
                    taxPercent = 5;

                }

            } else {
                if (totalYearsal > 500000) {
                    taxPercent = 20;

                } else {
                    taxPercent = 5;
                }
            }
            var totalPaidTax = (totalYearsal * taxPercent) / 100
            return totalPaidTax;
        }
       
    return {
        getSalpf(bsal) {
            return getpf(bsal)
        },
        getSalhra(bsal) {
            return gethra(bsal)
        },
        gettotalSal(bSal, gender) {
            var pf = getpf(bSal)
            var Hra = gethra(bSal)
            var totalPaidTax = gettotaltax(bSal, gender)
            var totalSal = (bSal + pf + Hra) - totalPaidTax;
            return totalSal;
        },
        gettotaltax(bSal, gender) {
            return gettotaltax(bSal, gender)
        }

    }
})();