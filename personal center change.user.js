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

$(".product_title").css("font-weight", "bold");

$(".product_title").click(function(){
    common();
});
var now = 0;
var len = 2;
function common(){
    $(".project_header_blank").css("z-index",0);
    $("body").css("background-image",'url("http://10.35.10.71/img/bg/' + now + '.jpg")');
    //now = (now+1)%len;
    $(".project_body_panel .project_description").css("opacity" ,"0.8");
    $("#text_comment").css("opacity" ,"0.8");
    $(".fConnect").remove();
    $("div .project_list_container_panel").css("overflow","visible");
    $(".project_list_film").remove();
    $(".project_header_blank").css("opacity" ,"0.3");
    $(".button_disable").hide();
    $("#vdi_jobid").css("z-index",9969);
    $(".message_container").css("z-index","9999");
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
    $(window).resize();
}
common();