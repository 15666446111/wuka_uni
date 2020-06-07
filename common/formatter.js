/**
 * 格式化器
 * @Author: wenjm 
 * @Date: 2018-02-24 23:28:28 
 * @Last Modified by: wenjm
 * @Last Modified time: 2018-05-15 14:35:01
 */
export default {

    formatDateTime(value) {
        return this.formatDate(value, 'yyyy-MM-dd hh:mm:ss');
    },

    /**
     * 格式化时间显示方式
     * 用法:format="yyyy-MM-dd hh:mm:ss";
     */
    formatDate(value, format = 'yyyy-MM-dd') {
        if (!value) return "";
        if (!format) format = "yyyy-MM-dd";
        let d = value;
        if (typeof value === 'string') {
            if (value.indexOf("/Date(") > -1)
                d = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
            else
                d = new Date(Date.parse(value.replace(/-/g, "/").replace("T", " ").split(".")[0])); //.split(".")[0] 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
        }
        let o = {
            "M+": d.getMonth() + 1, //month
            "d+": d.getDate(), //day
            "h+": d.getHours(), //hour
            "m+": d.getMinutes(), //minute
            "s+": d.getSeconds(), //second
            "q+": Math.floor((d.getMonth() + 3) / 3), //quarter
            "S": d.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },

    formatTime(t) {
        if (isNaN(t) || t == 0) { return 0; }

        let n = 31536000000;
        if (t >= n) {
            return this.formatNumber(t / n, '#,##0.##') + ' 年';
        }

        n = 86400000;
        if (t >= n) {
            return this.formatNumber(t / n, '#,##0.##') + ' 日';
        }

        n = 3600000;
        if (t >= n) {
            return this.formatNumber(t / n, '#,##0.##') + ' 小时';
        }

        n = 60000;
        if (t >= n) {
            return this.formatNumber(t / n, '#,##0.##') + ' 分';
        }

        n = 1000;
        if (t >= n) {
            return this.formatNumber(t / n, '#,##0.##') + ' 秒';
        }

        return this.formatNumber(t, '#,##0.##') + ' 毫秒';
    },

    /**  
     * 格式化数字显示方式   
     * 用法  
     * formatNumber(12345.999,'#,##0.00');  
     * formatNumber(12345.999,'#,##0.##');  
     * formatNumber(123,'000000');
     */
    formatNumber(value, pattern) {
        if (value == null)
            return value;
        let strarr = value ? value.toString().split('.') : ['0'];
        let fmtarr = pattern ? pattern.split('.') : [''];
        let retstr = '';
        // 整数部分   
        let str = strarr[0];
        let fmt = fmtarr[0];
        let i = str.length - 1;
        let comma = false;
        for (let f = fmt.length - 1; f >= 0; f--) {
            switch (fmt.substr(f, 1)) {
                case '#':
                    if (i >= 0) retstr = str.substr(i--, 1) + retstr;
                    break;
                case '0':
                    if (i >= 0) retstr = str.substr(i--, 1) + retstr;
                    else retstr = '0' + retstr;
                    break;
                case ',':
                    comma = true;
                    retstr = ',' + retstr;
                    break;
            }
        }
        if (i >= 0) {
            if (comma) {
                let l = str.length;
                for (; i >= 0; i--) {
                    retstr = str.substr(i, 1) + retstr;
                    if (i > 0 && ((l - i) % 3) == 0) retstr = ',' + retstr;
                }
            } else retstr = str.substr(0, i + 1) + retstr;
        }
        retstr = retstr + '.';
        // 处理小数部分   
        str = strarr.length > 1 ? strarr[1] : '';
        fmt = fmtarr.length > 1 ? fmtarr[1] : '';
        i = 0;
        for (let f = 0; f < fmt.length; f++) {
            switch (fmt.substr(f, 1)) {
                case '#':
                    if (i < str.length) retstr += str.substr(i++, 1);
                    break;
                case '0':
                    if (i < str.length) retstr += str.substr(i++, 1);
                    else retstr += '0';
                    break;
            }
        }
        return retstr.replace(/^,+/, '').replace(/\.$/, '');
    },

    //格式化金额
    formatMoney(value, pattern) {
        if (!value || value == 0)
            return 0;
        let sign = value < 0 ? '-' : '';
        return sign + this.formatNumber(Math.abs(value), pattern || '#,##0.00');
    },

    formatMoneyCn(value) {
        return '￥' + this.formatMoney(value);
    },

    formatWeek(value) {
        let week = new Array("日", "一", "二", "三", "四", "五", "六");
        let datetimeReg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
        if (datetimeReg.test(value)) {
            value = value.replace(/-/g, "/");
        }
        let day = new Date(value).getDay();

        return "星期" + week[day];
    },

    formatMoneyAuto(value, pattern = '#,##0.00') {
        let unit = "元";
        if (value) {
            let unitNum = {
                // '千': 1000.00,
                '万': 10000.00,
                '千万': 10000000.00,
                '亿': 100000000.00,
                '百亿': 10000000000.00
            };
            let unitCount = {
                // "4": '千',
                "5": '万',
                "8": '千万',
                "9": '亿',
                "11": '百亿'
            };
            let count = 0;
            let money = value;

            while (money >= 1) {
                money = money / 10;
                count++;
            }
            let tmp = unitCount[count + ""];
            while (count >= 4 && tmp === undefined) {
                tmp = unitCount[(--count) + ""];
            }
            unit = tmp === undefined ? unit : tmp;
            value = (count >= 4) ? value / (unitNum[unit]) : value;
        }
        return this.formatMoney(value, pattern) + unit || "";
    },

    formatFileSize(value) {
        if (null == value || value == '') {
            return "0 Bytes";
        }
        var unitArr = new Array("Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB");
        var index = 0;
        var srcsize = parseFloat(value);
        index = Math.floor(Math.log(srcsize) / Math.log(1024));
        var size = srcsize / Math.pow(1024, index);
        size = size.toFixed(2);
        return size + unitArr[index];
    }

}