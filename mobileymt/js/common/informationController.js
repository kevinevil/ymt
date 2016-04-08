/**
 * Created by kevin on 15/12/10.
 */
/**
 * 列表JS
 */
define(function (require, exports, module) {
    require('/moblieymt/js/lib/switchery.min.js');
    require('/moblieymt/js/lib/sweetalert.min.js');
    require('/moblieymt/js/lib/custombox.min.js');

    module.exports = {
        userselector: function () {
            Math.power = Math.pow;
            Math.pow = function (x, y) {
                if (x != 0) {
                    return Math.pow(x, y);
                    //return Math.power(x, y);//Solution:启用这句可以解决问题.
                } else {
                    return 0;
                }
            }

            $('.select_anywhere').on('click', function (e) {
                Custombox.open({
                    target: '#modal',
                    effect: 'swell',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            });

            $('.sex li').on('click', function () {
                var sexval = $(this).text();
                $('.sex-span').text(sexval);
                Custombox.close();
                $('#sex').val(sexval);
            })

            //选择照片
            $('.select-images').on('click', function (e) {
                var Elem = e.target;
                if (Elem.nodeName == 'A') {
                    $('#files').click();
                }
            })

            $('img.header').on('click',function(){
                $('.select-images').click();
            })

            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        $('.header').attr('src', e.target.result);
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            }

            $("#files").change(function () {
                var ext = $(this).val().split('.').pop().toLowerCase();
                if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
                    swal({
                        title: '这样不行噢',
                        text: '请选择图片格式的文件',
                        type: 'error',
                        timer: 2000
                    })
                } else {
                    readURL(this);
                }
            });
        },
        selectanywhere: function () {
            $('.select_anywhere').on('click', function (e) {
                var selector = '#' + $(this).attr('data-selector');
                Custombox.open({
                    target: selector,
                    effect: 'swell',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            });

            $(document).on('click', '.select-address-type li', function () {
                $('#select-address-type').val($(this).text());
                Custombox.close();
            })
        },
        setcommonaddress: function () {
            var elem = document.querySelector('.js-switch');
            var switchery = new Switchery(elem, { disabled: false });
            var clickCheckbox = document.querySelector('.js-check-click');

            $('.switchery').on('click', function () {
//                alert(clickCheckbox.checked);
            })
        },
        insertorder: function () {
            $('.timer').on('click', function () {
                Custombox.open({
                    target: '#timer',
                    effect: 'swell',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            })

            $(document).on('click', '#timer .closed', function () {
                Custombox.close();
                $('.timer-value').html($(this).html());
            })

            $('.paytype').on('click', function () {
                Custombox.open({
                    target: '#paytype',
                    effect: 'swell',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            })

            $(document).on('click', '#paytype .closed', function () {
                Custombox.close();
                $('.paytype-value').html($(this).html());
            })

            $('.coupon').on('click', function () {
                Custombox.open({
                    target: '#coupon',
                    effect: 'swell',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            })

            $(document).on('click', '#coupon .closed', function () {
                Custombox.close();
                $('.coupon-value').html($(this).html());
            })

        },
        payit: function () {
            $('.pay-it').on('click', function () {
                swal({
                    title: '成功提交订单',
                    text: '客官请耐心等待收货噢',
                    type: 'success',
                    timer: 5000
                })
            })
        },
        service: function () {
            $('.service').on('click', function (e) {
                Custombox.open({
                    target: '#service',
                    effect: 'superscaled',
                    speed: 500,
                    width: 280,
                    position: ['center', 'bottom'],
                    zIndex: 9999
                });
                e.preventDefault();
            })

            $(document).on('click', '.closed', function () {
                Custombox.close();
            })

            $(document).on('click', '.wechat', function () {
                alert('关注人人一亩田微信号,即可联系客服')
            })
        },
        checklogistics: function () {
            $(document).on('click', '.check-logistics', function () {
                Custombox.open({
                    target: '#logistics',
                    effect: 'swell',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999
                });
                e.preventDefault();
            })
        },
        selectaddressarea:function(){
            $('.address-area').on('click',function(e){
                Custombox.open({
                    target: '#address-area',
                    effect: 'superscaled',
                    speed: 500,
                    width: 280,
                    position: ['center', 'center'],
                    zIndex: 9999,
                    close:function(){
                        $('.area').hide();
                        $('.province').show();

                    }
                });
                e.preventDefault();
            })


            var areaid = {
                province:{
                    id:'',
                    name:''
                },
                city:{
                    id:'',
                    name:''
                },
                county:{
                    id:'',
                    name:''
                }
            }


            $(document).on('click','.province dd',function(){
                //获取下一级地址
                areaid.province.name = $(this).text();
                areaid.province.id = $(this).attr('data-area');
                $('.province').hide();
                $('.city').show();
            })

            $(document).on('click','.province .close',function(){
                Custombox.close();
            })

            $(document).on('click','.city dd',function(){
                //获取下一级地址
                areaid.city.name = $(this).text();
                areaid.city.id = $(this).attr('data-area');
                $('.city').hide();
                $('.county').show();
            })

            $(document).on('click','.county dd',function(){
                //关闭
                Custombox.close();
                areaid.county.name = $(this).text();
                areaid.county.id = $(this).attr('data-area');
                $('.county').hide();
                $('.province').show();
                if(areaid.province.id != null && areaid.city.id != null && areaid.county.id != null){
                    $('#address_area').val(areaid.province.name + " " + areaid.city.name +  " " + areaid.county.name);
                    $('#address_area_id').val(areaid.province.id + "," + areaid.city.id +  "," + areaid.county.id);
                    $('#address_area_id').val(areaid.province.name + "," + areaid.city.name +  "," + areaid.county.name)
                }else{
                    console.log('error');
                }
            })

            $(document).on('click','.city-back',function(){
                $('.city').hide();
                $('.province').show();
            })

            $(document).on('click','.county-back',function(){
                $('.county').hide();
                $('.city').show();
            })
        }
    }
})
