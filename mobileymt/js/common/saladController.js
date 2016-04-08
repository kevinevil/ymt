/**
 * 色拉客 JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/sweetalert.min.js');
    require('/moblieymt/js/lib/jquery.bxslider.min.js');
    module.exports = {
        saladCart: function () {
            $('.min').on('click', function () {
                var selector = $(this).next('input');
                var num = parseInt(selector.val());
                if (num == 1) {
                    return
                } else {
                    selector.val(num - 1);
                }
            })

            $('.add').on('click', function () {
                var selector = $(this).prev('input');
                var num = parseInt(selector.val());
                selector.val(num + 1);
            })
        },
        deleteCart: function () {
            $('.delete').on('click', function () {
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

            $('.delete_all').on('click',function(){
                var selector = $('.salad-good');
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
        },
        saladListAddCart:function(){
            $(document).on('click touchend', '.addCart', function () {
                if ($(this).is('.add-disabled')) {
                    return false;
                }

                var cart_btn = $('.cart_btn');

                var imgtofly = $(this).parent('.salad-good').find('.photo img').eq(0);
                if (imgtofly[0]) {
                    var imgclone = imgtofly.clone()
                        .offset({ top: imgtofly.offset().top, left: imgtofly.offset().left })
                        .css({ 'opacity': '0.8', 'position': 'absolute', 'height': '120px', 'width': '120px', 'z-index': '9999999999', 'border-radius': '50%' })
                        .appendTo($('body'))
                        .animate({
                            'top': cart_btn.offset().top + 20,
                            'left': cart_btn.offset().left - 20,
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
        saladDetailAddCart:function(){
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
        validforCompany:function(){
            $('#for_company').submit(function () {
                // Get the Login Name value and trim it
                var company_name = $.trim($('#company_name').val());
                var user_name = $.trim($('#user_name').val());
                var contact_type = $.trim($('#contact_type').val());

                // Check if empty of not
                if (company_name  === '') {
                    alert('请输入公司名称');
                    return false;
                }

                if (user_name  === '') {
                    alert('请输入您的姓名');
                    return false;
                }

                if (contact_type  === '') {
                    alert('请输入联系方式');
                    return false;
                }
            });
        }
    }
});
