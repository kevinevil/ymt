/**
 * Created by kevin on 16/1/15.
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/sweetalert.min');
    require('/moblieymt/js/lib/custombox.min');
    module.exports = {
        selectpath: function () {
            //URL 获取路径参数方法
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

            //获取Url 参数
            var origin = getUrlParameter('origin');

            //注册选择点击地址事件
            $('.address-list li').on('click', function () {
                if ($(this).hasClass('check-default')) {
                    jumpLocation(origin);
                    return;
                } else {
                    $(this).addClass('check-default').siblings().removeClass('check-default');
                    jumpLocation(origin);
                    return;
                }
            })

            //创建跳转地址选择方向
            function jumpLocation(pathurl) {
                if (pathurl) {
                    switch (pathurl) {
                        case 'taste':
                            window.location.href = 'taste.html?already_click=1';
                            break;
                        case 'order':
                            window.location.href = 'insertorder.html';
                            break;
                        default:
                            return;
                    }
                }
            }

        },
        //提货券
        pickup: function () {
            $('.pickup-button').on('click', function () {
                if ($('.pickup-num').val().length === 0 || $('.pickup-pwd').val().length === 0) {
                    swal({
                        title: '客官莫着急',
                        text: '请输入券号或者提货券密码',
                        type: 'error',
                        timer: 2000
                    });
                } else {
                    swal({
                        title: '客官莫着急',
                        text: '请输入券号或者提货券密码',
                        type: 'success',
                        timer: 2000
                    })
                }
            })
        },
        replacebuy: function () {
            //换购类型
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
            };


            //Array add remove for value
            Array.prototype.remove = function () {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };

            var Arrproduct = [];
            $('.check-box-area').on('click', function (e) {
                e.preventDefault();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    Arrproduct.remove($(this).attr('data-goodsid'));
                    changeArr(Arrproduct);
                } else {
                    $(this).addClass('active');
                    Arrproduct.push($(this).attr('data-goodsid'));
                    changeArr(Arrproduct);
                }
            })

            function changeArr(arr) {
                $('.product_id_arr').val(arr);
            }

            //完成换购
            $('.finish-choose').on('click', function () {
                //添加入购物车 完成换购 跳转页面购物车
                window.location.href = 'shoppingCart.html';
            })

            var replacetype = getUrlParameter('tag');
            if (replacetype == '1') {
                $('.replacebuy-title').text('活动换购优惠');
            } else if (replacetype == '2') {
                $('.replacebuy-title').text('加价全场购');
            } else if (replacetype == '3') {
                $('.replacebuy-title').text('满额199元,换购优惠');
            }
        },
        sameheight: function () {
            $('.cart-list .box-padding').height($('.cart-list li').first().height());
        },
        pickupselectgoods: function () {
            $('.check-box-area').on('click', function (e) {
                e.preventDefault();
                if ($(this).hasClass('active')) {
                    $($(this).removeClass('active'));
                    $('.product_id').val('');
                } else {
                    $('.check-box-area').removeClass('active');
                    $(this).addClass('active');
                    $('.product_id').val($(this).attr('data-goodsid'));
                }

            })

            $('.pickup-goods .pay').on('click', function () {
                if ($('.product_id').val().length === 0) {
                    swal({
                        title: '客官莫着急',
                        text: '请选择兑换商品',
                        type: 'error',
                        timer: 2000
                    });
                } else {
                    window.location.href = 'insertOrder.html';
                }
            })


        },
        beforeselectaddress: function (e) {
            $('a.pay').on('click',function(){
                Custombox.open({
                    target: '#modal',
                    effect: 'fadein',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            })
        },
        beanselectgoods: function () {
            $('.check-box-area').on('click', function (e) {
                e.preventDefault();
                if ($(this).hasClass('active')) {
                    $($(this).removeClass('active'));
                    $('.product_id').val('');
                } else {
                    $(this).addClass('active');
                    $('.product_id').val($(this).attr('data-goodsid'));
                }
            })

            $('.pickup-goods .pay').on('click', function () {
                if('兑换积分'>'已拥有积分'){
                    swal({
                        title: '客官莫着急',
                        text: '您没有足够多的积分',
                        type: 'error',
                        timer: 2000
                    });
                }

                if ($('.product_id').val().length === 0) {
                    swal({
                        title: '客官莫着急',
                        text: '请选择兑换商品',
                        type: 'error',
                        timer: 2000
                    });
                } else {
                    window.location.href = 'insertOrder.html';
                }
            })
        }
    }
})