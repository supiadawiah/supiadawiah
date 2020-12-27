const newLocal_1 = '.page-scroll';
const newLocal = newLocal_1;
        $(newLocal).on('click', function (e) {
            var tujuan = $(this).attr('href');
            var elemenTujuan = $(tujuan);

            $('body').animate({
                scrollTop: elemenTujuan.offset().top - 50
            }, 1500, 'swing');
            e.preventDefault();
        });
