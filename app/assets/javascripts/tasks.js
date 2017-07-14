// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
	console.log('document is ready!', new Date());
});

$(document).on('turbolinks:load', function() {
	console.log('document is ready!', new Date());
	$('#task_name'.focus();
});