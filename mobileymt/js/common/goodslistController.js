/**
 * 列表JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/jquery.simpler');
    require('/moblieymt/js/lib/jquery.ui');
    require('/moblieymt/js/lib/hammer.js');
    require('/moblieymt/js/lib/jquery.hammer.js');
    module.exports = {
        sideMenu: function () {
            $('#main-sidebar').simplerSidebar({
                opener: '.filter',
                top: 85,
                animation: {
                    easing: "easeOutQuint"
                },
                sidebar: {
                    align: 'right',
                    width: 300,
                    closingLinks: '.close-sidebar'
                }
            });
        },
        changeViews: function () {
            $('.gallery-view').on('click', function () {
                $(this).addClass('active');
                $(this).siblings('.list-view').removeClass('active');
                $('ul.product-list-area').removeAttr('id');
            })

            $('.list-view').on('click', function () {
                $(this).addClass('active');
                $(this).siblings('.gallery-view').removeClass('active');
                $('ul.product-list-area').attr('id', 'gallery-status');
            })

        },
        loadmoregoods: function () {
            var totalheight = 0;
            var timeout;
            var text = '<li><a href="goodsdetail.html" class="product-img"><img src="images/goods/product-1.jpg"></a><p class="goods-name">广东皇帝贡柑—原箱装</p><div class="goods-price">￥77</div><button class="addCart"></button></li>';+
                '<li><a href="goodsdetail.html" class="product-img"><img src="images/goods/product-1.jpg"></a><p class="goods-name">广东皇帝贡柑—原箱装</p><div class="goods-price">￥77</div><button class="addCart"></button></li>';
            $(window).bind('scroll', function () {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());     //浏览器的高度加上滚动条的高度
                    if ($(document).height() <= totalheight){
//                        alert('success')
                        $(".product-list-area li:last").after(text);
                    }
                    else{
                        return 0;
                    }
                }, 100);
            });




        }
    }
})
