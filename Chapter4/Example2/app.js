/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var main = function () {
    'use strict';

    var addCommentFromInputBoxUser1 = function () {
        var $newComment1;

        if ($('.comment-input-1 input').val() !== '') {
            $newComment1 = $('<p class ="user1">')
                .text($('.comment-input-1 input').val());
            $newComment1.hide();
            $('.comments').append($newComment1);
            $newComment1.fadeIn();
            $('.comment-input-1 input').val('');
        }
    };

    $('.comment-input-1 button').on('click', function () {
        addCommentFromInputBoxUser1();
    });

    $('.comment-input-1 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBoxUser1();
        }
    });

    var addCommentFromInputBoxUser2 = function () {
        var $newComment2;

        if ($('.comment-input-2 input').val() !== '') {
            $newComment2 = $('<p class ="user2">')
                .text($('.comment-input-2 input').val());
            $newComment2.hide();
            $('.comments').append($newComment2);
            $newComment2.fadeIn();
            $('.comment-input-2 input').val('');
        }
    };

        $('.comment-input-2 button').on('click', function () {
        addCommentFromInputBoxUser2();
    });

    $('.comment-input-2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBoxUser2();
        }
    });

};

$(document).ready(main);
