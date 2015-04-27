// ==UserScript==
// @name         personal center change
// @namespace    http://pc.glority.com/
// @version      0.1
// @description  PC PAGE
// @author       ZEROCHS
// @match        http://pc.glority.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

$("body").css("background-image",'url("http://file02.16sucai.com/d/file/2015/0313/7394785d8c19f79da73d84998a23f91e.jpg")');
$(".product_title").css("font-weight", "bold");

$(".product_title").click(function(){
    common();
});
function common(){
    $("div").css("opacity" ,"0.99");
    $(".fConnect").remove();
    $("div .project_list_container_panel").css("overflow","visible");
    $(".project_list_film").remove();
    $(".project_header_blank").css("opacity" ,"0.3");
    $(".button_disable").hide();
    $(".vdi_jobid").each(function(){
        $(this).css("background-color", "#FFFFFF");
        $(this).css("width", "60px");
        var html = $(this).html();
        html = html.split('"')[1];
        html = html.replace(/machines/,"machines/rdp");
        html = '<a href="' + html + '" target="_blank"><img src="/image/project/rdp.png"></a>';
        //html = '<img src="/image/project/rdp.png" href="' + html + '">';

        $(this).append(html);
        $(this).removeClass("vdi_jobid");
    });
}
common();