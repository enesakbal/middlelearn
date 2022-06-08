class DateManager{


    static getCurrentTime = () => {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }

        return hour + ":" + minute + ":" + second;
    }

    static getCurrentDate = () => {
        var string;
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return day + '/' + month + '/' + year;
    }


}
export default DateManager;
