"use strict";
$(document).ready(function () {

    // $('.btn').click(function (e) {
    //     e.preventDefault();
    //     if ($.trim($('input').val()) == '') {
    //         $('input').val();
    //     } else {
    //         let k = v => {
    //             for (let i = 0; i < v; i++) { $('.box').append(`<h3>${v}</h3>`) };
    //         }
    //         let z = e => Number(e) ? k(e) : $('.box').append(`<h3>${e}</h3>`);
    //         z($('input').val());
    //     }
    //     $('input').val('') 
    // })


    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let k = v => {
                for (let i = 0; i < v; i++) { $('.box').append(`<h3>${v}</h3>`) };
            }
            let z = e => Number(e) ? k(e) : $('.box').append(`<h3>${e}</h3>`);
            z($('input').val());
        }
        $('input').val('') 
    })
    
});