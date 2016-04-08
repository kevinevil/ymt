//创建自己需要增加的正则表达式
define(function (require, exports, module) {
    module.exports = {
        //验证国内的手机号码
        validation: function () {
            jQuery.validator.addMethod("phone", function (value, element) {
                if (!/^1[3578]\d{9}$/.test(value)) {
                    return false;  // FAIL validation when REGEX matches
                } else {
                    return true;   // PASS validation otherwise
                }
                ;
            }, "&times;");

            //可为null手机号
            jQuery.validator.addMethod("nphone", function (value, element) {
                if (!/(^1[3578]\d{9}$)|(^$)/.test(value)) {
                    return false;  // FAIL validation when REGEX matches
                } else {
                    return true;   // PASS validation otherwise
                }
                ;
            }, "&times;");

            //验证数字为正整数
            jQuery.validator.addMethod("pnumber", function (value, element) {
                if (/^[1-9]\d*$/.test(value)) {
                    return true;  // FAIL validation when REGEX matches
                } else {
                    return false;   // PASS validation otherwise
                }
                ;
            }, "请输入正整数");

            //可以为空的正整数
            jQuery.validator.addMethod("nullnumber", function (value, element) {
                if (/^([0-9]*[1-9][0-9]*)?$/.test(value)) {
                    return true;  // FAIL validation when REGEX matches
                } else {
                    return false;   // PASS validation otherwise
                }
                ;
            }, "请输入正整数");

            //可以为空的正整数
            jQuery.validator.addMethod("pointnumber", function (value, element) {
                if (/^[+]?([.]\d+|\d+([.]\d+)?)$/.test(value)) {
                    return true;  // FAIL validation when REGEX matches
                } else {
                    return false;   // PASS validation otherwise
                }
                ;
            }, "请输入正数");

            //日期比较
            jQuery.validator.addMethod("greaterThan",
                function (value, element, params) {
                    if (!/Invalid|NaN/.test(new Date(value))) {
                        return new Date(value) > new Date($(params).val());
                    }
                    return isNaN(value) && isNaN($(params).val())
                        || (Number(value) > Number($(params).val()));
                }, 'Must be greater than {0}.');

        }
    }


})




