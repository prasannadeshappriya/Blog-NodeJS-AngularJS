// document.checkBanner = function() {
//     var project_page_right_side = $('.project-page-right'),
//         project_page_right_side_content_height = project_page_right_side.innerHeight();
//
//     var right_side = $('.article-page-right'),
//         document_height = $(document).height(),
//         right_side_content = $('.article-page-right-content'),
//         right_side_content_height = right_side_content.innerHeight(),
//         s = $(document).scrollTop(),
//         wh = $(window).height(),
//         ww = $(window).width();
//     //Article Page
//     if (s < (document_height - 1000)) {
//         if (s + right_side_content_height > wh) {
//             right_side.css({
//                 'top': (s - (wh - right_side_content_height)) + 'px'
//             })
//         } else {
//             right_side.css({
//                 'top': '0px'
//             })
//         }
//     }
//     var element = document.getElementsByClassName('project-page-right');
//     //Project Page
//     console.log(element.scrollHeight);
//     console.log($('.project-page-right').innerHeight());
//     console.log(s);
//     console.log(project_page_right_side_content_height);
//     if (Math.round($(window).scrollTop(),10) >= Math.round((($(document).height()) - project_page_right_side_content_height),10)) {
//         console.log('div reached');
//         project_page_right_side.css({
//             'top': $(window).scrollTop() - (($(document).height()-1000) - project_page_right_side_content_height) + 'px'
//         })
//     }
//     else {
//         project_page_right_side.css({
//             'top': '0px'
//         })
//     }
//     // if (s < (document_height - 1000)) {
//     //     if (s + wh - 20> project_page_right_side_content_height) {
//     //         project_page_right_side.css({
//     //             'top': (s + (wh - project_page_right_side_content_height) -20) + 'px'
//     //         })
//     //     } else {
//     //         project_page_right_side.css({
//     //             'top': '0px'
//     //         })
//     //     }
//     // }
// };
// $(document).scroll(function() {
//     document.checkBanner();
// });
// $(document).resize(function() {
//     document.checkBanner();
// });