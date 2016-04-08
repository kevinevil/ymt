/**
 * 搜索页面JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/sweetalert.min');
    require('/moblieymt/js/lib/jquery-asTabs.min');
    module.exports = {
        searchTab:function(){
            $('.search-tab').asTabs({
                namespace: 'tabs',
                navSelector: '> ul',
                contentSelector: '> div'
            });
        },
        softkeyboard:function(){
            $('.search-input').keypress(function (e) {
                if (e.which == 13) {
                    alert('提交')
                    $('form#login').submit();
                    return false;
                }
            });
        },
        paynow:function(){
            $('.pay-now').on('click',function(){
                if($('.pay_sum').val().length == 0){
                    swal({
                        title:'请输入充值金额',
                        text:'客官不要着急啦!',
                        type:'error',
                        timer:5000
                    });
                }else{
                    window.location.href = "rechargesure.html";
                }
            })
        },
        rechange:function(){
            //充值成功 效果
            $('.pay-it').on('click',function(){
                swal({
                    title:'充值成功',
                    text:'充值金额为100元',
                    type:'success',
                    timer:5000
                })
            })
        },
        surepaytype:function(){
            $('.pay_type li').on('click',function(){
                $(this).addClass('active').siblings('.active').removeClass('active');
            })
        },
        couponcode:function(){
            $('.coupon_btn').on('click',function(){
                if($('.coupon_input').val().length === 0 ) {
                    swal({
                        title:'客观别着急',
                        text:'请输入优惠券兑换码',
                        type:'error',
                        timer:5000
                    })
                }else{
                    swal({
                        title:'兑换成功',
                        text:'您获得了一张优惠券,请去你的卡包中确认',
                        type:'success',
                        timer:2000
                    },setTimeout(function(){
                        window.location.href = 'coupon.html';
                    },2000))
                }
            })
        }
    }
})
