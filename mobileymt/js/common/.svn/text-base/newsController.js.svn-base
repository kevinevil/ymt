/**
 * Created by kevin on 16/1/8.
 */
/**
 * 表单验证JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/jquery.bxslider.min.js');
    module.exports = {
        newsslider: function () {
            $('.bxslider').bxSlider({
                mode: 'horizontal',
                auto: false,
                pagerCustom: '.garden-scroll',
                swipeThreshold:100,
                touchEnabled:true,//设置手指滚动开关
                preventDefaultSwipeX:true,
                preventDefaultSwipeY:true,
                oneToOneTouch:false,
                onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                    if (newIndex >= 3) {
                        $('.garden-scroll').animate({scrollLeft:100},500);
                        return;
                    } else {
                        $('.garden-scroll').animate({scrollLeft:0},500);
                        return;
                    }
                }
            });

            var text = '<div class="news-single-info"><a href="newsDetail.html" class="news-article row-block"><div class="news-info-title"><span class="title-kind">YYMMTT</span><span>水果的“四性”“五味”</span></div><p class="info">1中国自古就有“药食同源”之说,很多事物即是药物,它们之间并无绝对的分界线.古代医药家将中药的四性</p><img src="images/salads/salad_1.JPG"></a></div>';
            $('.yanshen .news-notice-list').after().append(text);
            $('.bx-viewport').css("overflow", "scroll");
            $('.row-block').animate({scrollTop:0},500)
        }
    }
})
