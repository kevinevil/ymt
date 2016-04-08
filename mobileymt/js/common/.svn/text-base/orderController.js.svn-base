/**
 * 订单JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/jquery-asTabs.min');
    require('/moblieymt/js/lib/sweetalert.min');
    module.exports = {
        searchTab:function(){
            $('.order-tab').asTabs({
                namespace: 'tabs',
                navSelector: '> ul',
                contentSelector: '> div'
            });
        },
        selectimages:function(){
            Array.prototype.remove = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };

            $('.select-images').on('click',function(){
                $('#files').click();
            })
            $("#files").change(function (e) {
                var file_counts = $(this).get(0).files.length;
                if(file_counts>3){
                    swal({
                        title:'这样不行噢',
                        text:'最多只能选择3张图片!',
                        type:'error',
                        timer:5000
                    });
                    return;
                }else{
                    $('#image').empty();
                }
                $.each(e.originalEvent.srcElement.files, function(i, file) {
                    var img = document.createElement("img");
                    img.id = "image"+(i+1);
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        img.src = reader.result;
                    }
                    reader.readAsDataURL(file);
                    $("#image").append(img);
                });
            })
            var Arrproduct = [];
            $('.appeal_btn').on('click',function(){
                if($(this).hasClass('active')){
                    Arrproduct.remove($(this).attr('data-goodsid'));
                    changeArr(Arrproduct);
                }else{
                    Arrproduct.push($(this).attr('data-goodsid'));
                    changeArr(Arrproduct);
                }
            })

            function changeArr(arr){
                $('.product_id_arr').val(arr);
            }
        },
        servicesubmit:function(){
            $('.service_submit').on('click',function(){
                swal({
                    title:'提交成功',
                    text:'请耐心等待反馈结果',
                    type:'success',
                    timer:5000
                })
            })
        },
        appealgoods:function(){
            $('.appeal_btn').on('click',function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active').html('申诉');
                }else{
                    $(this).addClass('active').html('撤销')
                }
            })
        },
        deleteorder:function(){
            $('.detele-order').on('click',function(e){
                var selector = $(this).parents('.single-order');
                swal({
                        title: "您需要取消订单吗?",
                        text:'只有每日12点之前才能取消订单',
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "不要了",
                        cancelButtonText: "点错了",
                        closeOnConfirm: false,
                        closeOnCancel: true
                    },
                    function (isConfirm) {
                        if (isConfirm) {
                            swal({
                                title:'订单已取消',
                                text:'我们正在受理订单！',
                                type:'success',
                                timer:5000
                            })
                            selector.animate({
                                opacity: 0
                            }, {
                                duration: '500',
                                complete: function () {
                                    selector.slideUp('1000', function () {
                                        this.remove();
                                    });
                                }
                            })
                        }
                    });
                e.preventDefault();
            })
        },
        payorder:function(){
            $('.pay').on('click',function(e){
                e.preventDefault();
            })
        }
    }
})
