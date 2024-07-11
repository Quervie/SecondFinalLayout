function determineStanding() {
    let generalAverage = parseFloat(document.getElementById('average').value);
    let result = "";

    switch (true) {
        case (generalAverage > 100 || generalAverage < 0):
            result = "Invalid Grade";
            break;
        case (generalAverage >= 98 && generalAverage <= 100):
            result = "With Highest Honor";
            break;
        case (generalAverage >= 95 && generalAverage <= 97):
            result = "With High Honor";
            break;
        case (generalAverage >= 90 && generalAverage <= 94):
            result = "With Honor";
            break;
        case (generalAverage >= 75 && generalAverage <= 89):
            result = "Passed";
            break;
        case (generalAverage >= 0 && generalAverage <= 74):
            result = "Failed";
            break;
        default:
            result = "Invalid Grade";
            break;
    }

    document.getElementById('averageCell').innerText = generalAverage;
    document.getElementById('standingCell').innerText = result;
}
