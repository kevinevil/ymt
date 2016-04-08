/**
 * 首页二级页面JS
 */

define(function (require, exports, module) {
    require('/moblieymt/js/lib/jquery.countdown.min');
    module.exports = {
        countdown: function () {
            /*单个倒计时*/
            $('#clock').countdown('2015/12/7 15:58:00',function (event) {
                event.elapsed = true;
                var $this = $(this).html(event.strftime(''
                    + '<span>%d</span> 天'
                    + '<span>%H</span> : '
                    + '<span>%M</span> : '
                    + '<span>%S</span>'));
            }).on('finish.countdown',function () {
                }).on('update.countdown', function (event) {
                    console.log(event.elapsed);
                    if (event.elapsed) {
                        console.log('未到时间');
                    } else {
                        console.log('完成');
                    }
                });
        },
        arraycountdown: function () {
            /*多个倒计时加 data-countdown 属性 倒计时*/
            $('[data-countdown]').each(function () {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime('<span>%D</span>天<span>%H</span>:<span>%M</span>:<span>%S</span>'));
                });
            });
        },
        rushfreshaddandmin:function(){
            $(document).on('click','.min',function () {
                var selector = $(this).prev('input');
                var num = parseInt(selector.val());
                if (num == 1) {
                    return
                } else {
                    selector.val(num - 1);
                }
            })

            $(document).on('click','.add',function () {
                var selector = $(this).next('input');
                var num = parseInt(selector.val());
                selector.val(num + 1);
            })
        }
    }
})
