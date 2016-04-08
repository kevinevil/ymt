/**
 * 购物车通用JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/sweetalert.min.js');
    module.exports = {
        addCartEffect: function () {
            $(document).on('click touchend', '.addCart', function () {
                if ($(this).is('.add-disabled')) {
                    return false;
                }
                var cart_btn = $('.cart_btn');

                var imgtofly = $(this).siblings('.product-img').eq(0);
                if (imgtofly[0]) {
                    var imgclone = imgtofly.clone()
                        .offset({ top: imgtofly.offset().top, left: imgtofly.offset().left })
                        .css({ 'opacity': '0.8', 'position': 'absolute', 'height': '120px', 'width': '120px', 'z-index': '9999999999', 'border-radius': '50%' })
                        .appendTo($('body'))
                        .animate({
                            'top': cart_btn.offset().top + 25,
                            'left': cart_btn.offset().left + 25,
                            'width': 55,
                            'height': 55
                        }, 500);
                    imgclone.animate({ 'width': 0, 'height': 0, 'left': cart_btn.offset().left + 36 }, function () {
                        $(this).detach()
                    });
                }
                return false;
            })
        },
        goodsListAddCart: function () {
            $(document).on('click touchend', '.addCart', function () {
                if ($(this).is('.add-disabled')) {
                    return false;
                }

                var cart_btn = $('.cart_btn');

                var imgtofly = $(this).siblings('.product-img').find('img').eq(0);
                if (imgtofly[0]) {
                    var imgclone = imgtofly.clone()
                        .offset({ top: imgtofly.offset().top, left: imgtofly.offset().left })
                        .css({ 'opacity': '0.8', 'position': 'absolute', 'height': '120px', 'width': '120px', 'z-index': '9999999999', 'border-radius': '50%' })
                        .appendTo($('body'))
                        .animate({
                            'top': cart_btn.offset().top + 20,
                            'left': cart_btn.offset().left + 20,
                            'width': 55,
                            'height': 55
                        }, 500);
                    imgclone.animate({ 'width': 0, 'height': 0, 'left': cart_btn.offset().left + 36 }, function () {
                        $(this).detach()
                    });
                }
                return false;
            })
        },
        detailAddCart: function () {
            $(document).on('click touchend', '.addCart', function () {
                if ($(this).is('.add-disabled')) {
                    return false;
                }
                var cart_btn = $('.cart_btn');
                var imgtofly = $('.product-img').find('img').eq(0);
                if (imgtofly[0]) {
                    var imgclone = imgtofly.clone()
                        .offset({ top: 20, right: 50 })
                        .css({ 'opacity': '0.8', 'position': 'absolute', 'height': '120px', 'width': '120px', 'z-index': '9999999999', 'border-radius': '50%' })
                        .appendTo($('body'))
                        .animate({
                            'top': cart_btn.offset().top + 10,
                            'left': cart_btn.offset().left + 10,
                            'width': 55,
                            'height': 55
                        }, 500);
                    imgclone.animate({ 'width': 0, 'height': 0, 'left': cart_btn.offset().left + 36 }, function () {
                        $(this).detach()
                    });
                }
                return false;
            })
        },
        addandmin: function () {
            $(document).on('click','.min',function () {
                var selector = $(this).next('input');
                var num = parseInt(selector.val());
                if (num == 1) {
                    return
                } else {
                    selector.val(num - 1);
                }
            })

            $(document).on('click','.add',function () {
                var selector = $(this).prev('input');
                var num = parseInt(selector.val());
                selector.val(num + 1);
            })
        },
        rushgoodsaddcart: function () {
            $(document).on('click touchend', '.addCart,.get_it', function () {
                if ($(this).is('.not_click')) {
                    return false;
                }

                var cart_btn = $('.cart_btn');
                var imgtofly = $(this).parents('.goods_area').find('.photo img').eq(0);
                if (imgtofly[0]) {
                    var imgclone = imgtofly.clone()
                        .offset({ top: imgtofly.offset().top, left: imgtofly.offset().left })
                        .css({ 'opacity': '0.8', 'position': 'absolute', 'height': '120px', 'width': '120px', 'z-index': '9999999999', 'border-radius': '50%' })
                        .appendTo($('body'))
                        .animate({
                            'top': cart_btn.offset().top + 25,
                            'left': cart_btn.offset().left - 10,
                            'width': 55,
                            'height': 55
                        }, 500);
                    imgclone.animate({ 'width': 0, 'height': 0, 'left': cart_btn.offset().left + 36 }, function () {
                        $(this).detach()
                    });
                }
                return false;
            })
        },
        deletegoods: function () {

            $(document).on('click', '.delete', function () {
                var selector = $(this).parents('.pure-g');
                swal({
                        title: "确定要删除商品吗?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "不要了",
                        cancelButtonText: "点错了",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    },
                    function (isConfirm) {
                        if (isConfirm) {
                            selector.animate({
                                opacity: 0
                            }, {
                                duration: '500',
                                complete: function () {
                                    selector.slideUp('500', function () {
                                        this.remove();
                                    });
                                }
                            })
                        }
                        else {

                        }
                    });
            })

            //购物车 删除全部
            $('.delete_all').on('click', function () {
                var selector = $('.cart-list');
                swal({
                        title: "删除全部?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "不要了",
                        cancelButtonText: "点错了",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    },
                    function (isConfirm) {
                        if (isConfirm) {
                            selector.animate({
                                opacity: 0
                            }, {
                                duration: '500',
                                complete: function () {
                                    selector.children('li').slideUp('500', function () {
                                        this.remove();
                                    });
                                }
                            })
                        }
                        else {

                        }
                    });
            })
        },
        deletefollow: function () {
            $('.no-follow').on('click', function () {
                var selector = $(this).parents('.countdown_goods');
                selector.animate({
                    opacity: 0
                }, {
                    duration: '500',
                    complete: function () {
                        selector.slideUp('500', function () {
                            this.remove();
                        });
                    }
                })
            })
        }
    }
});
