/**
 * 表单验证JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/jquery.validate');
    require.async('/moblieymt/js/lib/jquery.validate.extend',function(validation){
        validation.validation();
    });
    module.exports = {
        SignInValid:function(){
            $('form.sign-in').validate({
                ignore:'',
                rules:{
                    username:{
                        phone:true
                    },
                    password:{
                        required:true
                    }
                },
                messages:{
                    username:{
                        required:'&times;'
                    },
                    password:{
                        required:'&times;'
                    }
                },
                unhighlight:function(element){
                    $(element).next('.error').remove();
                }
            })

            $('.submit').on('click',function(){
                if($('form.sign-in').valid()){
                    alert('成功!')
                }
            })
        },
        SignUpValid:function(){
            var seconds  = 60;
            $('form.sign-up').validate({
                ignore:'',
                onfocusout: false,
                onkeyup: false,
                onclick: false,
                rules:{
                    username:{
                        phone:true
                    },
                    verifyCode:{
                        required:true
                    },
                    password:{
                        required:true
                    }
                },
                messages:{
                    username:{
                        required:'&times;'
                    },
                    verifyCode:{
                        required:'&times;'
                    },
                    password:{
                        required:'&times;'
                    }
                },
                unhighlight:function(element){
                    $(element).next('.error').remove();
                }
            })

            $('.submit').on('click',function(){
                if($('form.sign-up').valid()){
                    alert('成功!')
                }
            })

            $('.getCode').on('click',function(){
                if ($("form.sign-up").validate().element('#username'))
                {
                    $('.hidden').slideDown();
                    var getcodetimer =  setInterval(function(){
                        seconds -= 1;
                        $('.getCode').addClass('gray').attr("disabled", true).html('重新获取验证码(60)');
                        if(seconds == 0){
                            $('.getCode').attr("disabled", false);
                            window.clearInterval(getcodetimer);
                            return
                        }else{
                            $('.getCode').html('重新获取验证码('+seconds+')')
                        }
                    },1000);
                }
            })
        },
        insertaddressvalid:function(){
            $('form.insert-address').validate({
                ignore:'',
                rules:{
                    consigneeArea:{
                        required:true
                    },
                    consigneeAddress:{
                        required:true
                    },
                    consigneePhone:{
                        phone:true
                    },
                    consigneeName:{
                        required:true
                    }
                },
                messages:{
                    consigneePhone:{
                        phone:'请输入正确的手机号'
                    },
                    consigneeName:{
                        required:'请输入收货人姓名'
                    },
                    consigneeArea:{
                        required:'请选择收货区域'
                    },
                    consigneeAddress:{
                        required:'请输入收货详细地址'
                    }

                },
                errorPlacement:function(error, element){
                    $('.insert-address-error').empty();
                    $('.insert-address-error').append(error);
                }
            })

            var getUrlParameter = function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;
                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }
            }


            var pathresoce ='';
            $('.save_info').on('click',function(){
                if($('form.insert-address').valid()){
                    pathresoce = getUrlParameter('tag');
                    if(pathresoce=='order'){
                        window.location.href = 'insertorder.html';
                    }else{
                        window.location.href = 'addresslist.html';
                    }
                }
            })
        }
    }
})