$(document).ready(function(){
// all jQuery methods go here...
$("#runningman-img").hover(enter, leave);
function enter() {
  this.src = "images/runningman-giphy.gif";
}

function leave() {
  this.src = "images/runningman-icon.png";
}

$("#taketheL-img").hover(enter1, leave1);

function enter1() {
  this.src = "images/taketheL-giphy.gif";
}

function leave1() {
  this.src = "images/taketheL-icon.png";
}

$("#electroshuffle-img").hover(enter2, leave2);

function enter2() {
  this.src = "images/electroshuffle-giphy.gif";
}

function leave2() {
  this.src = "images/electroshuffle-icon.png";
}

$("#bestmates-img").hover(enter3, leave3);

function enter3() {
  this.src = "images/bestmates-giphy.gif";
}

function leave3() {
  this.src = "images/taketheL-icon.png";
}

$("#title").html("This is a collection of super cringey Fortnite gifs.");

$("#extra-text").remove();

$("#logo").click(bgImageChange);
function bgImageChange() {
  $("body").css("background-image", "url('images/bg2.jpg')");
}

$("#runningman-name").click(slideThis);

function slideThis() {
  $("#runningman-info").slideToggle();
}

$("#taketheL-name").click(slideThis1);

function slideThis1() {
  $("#taketheL-info").slideToggle();
}

$("#electroshuffle-name").click(slideThis2);

function slideThis2() {
  $("#electroshuffle-info").slideToggle();
}

$("#bestmates-name").click(slideThis3);

function slideThis3() {
  $("#bestmates-info").slideToggle();
}

});
