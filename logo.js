// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Jeans accordion button
    $('.jeans-btn').click(function() {
        $('.jeans-list').slideToggle();
    }),
    // Logo main search button
    $('.search').click(function() {
        $('#Search').slideToggle();
    })
})

// JavaScript
const sidebar_Button = document.querySelector('.bars');
const sidebar_Menu = document.querySelector('.mobile-menu');
const sidebar_Closebtn = document.querySelector('.sidebar-closebtn');

// Sidebar open & close width
sidebar_Button.addEventListener('click', () => {
    sidebar_Menu.style.width = '60%';
});
sidebar_Closebtn.addEventListener('click', () => {
    sidebar_Menu.style.width = '0';
});