/**
 * 首页JS
 */
define(function(require,exports,module){
    require('/moblieymt/js/lib/jquery.bxslider.min.js');
    require('/moblieymt/js/lib/wow.min.js');
    require('/moblieymt/js/lib/sweetalert.min.js');
    module.exports = {
        bannerslider:function(){
            $('.bxslider').bxSlider({
                mode: 'horizontal',
                auto:true,
                captions: false,
                controls:false,
                pager:true
            });

            $('.bxslider img').show();
        },
        tastefix:function(){
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

            var alreadyclick = getUrlParameter('already_click');

            if(alreadyclick){
                $('.address_box').animate({
                    bottom:0
                },700)

                $('.taste_box').animate({
                    bottom:0
                },700)
            }else{
                $('.taste_box').animate({
                    bottom:0
                },700)
            }



            //点击申请按钮 选择地址
            $('.taste_btn').on('click',function(){
                $('.address_box').animate({
                    bottom:0
                },700)
            })

            //选择地址关闭按钮
            $('.closed').on('click',function(){
                $('.address_box').animate({
                    bottom:-300
                },700)
            })


            //试吃申请成功 如果错误则type 改为error title/text文字相应改动
            $('.apply_btn').on('click',function(){
                swal({
                    title:'试吃申请已经提交',
                    text:'请耐心等待,我们会已短信方式通知你的申请通知请求...',
                    type:'success',
                    timer:5000
                })
            })
        },
        saladselector:function(){
            var selector =  $('.salads-kinds');
            selector.css('height',parseInt($(window).height()+20));
            $(document).on('click','.salad-selector',function(){
                if(selector.hasClass('active')){
                    selector.slideUp().removeClass('active');
                }else{
                    $('.salads-kinds').addClass('active').slideDown();
                }
            })
        },
        beginslider:function(){
            $('.beginnings').bxSlider({
                mode: 'horizontal',
                auto:true,
                captions: false,
                controls:false,
                pager:true
            });

            $('.beginnings img').show();
        },
        collectbtn:function(){
            $(document).on('click','.collect',function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }else{
                    $(this).addClass('active');
                }
            })
        }
    }
});
