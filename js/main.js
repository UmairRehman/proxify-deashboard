$(document).ready(function(){
    $('.menu-item-has-children > a').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('#profilePopupBtn').click(function(){
        $('#profilePopup').toggle();
    });

    $('#closeProfilePopup').click(function(){
        $('#profilePopup').hide();
    });

    // Product Filter
    $('.productFilterBtn').click(function(){
        $(this).addClass('active');
        $(this).next().show();
        $('#productFilterPopup').css('display', 'flex');
    });
    $(document).mouseup(function(e) {
        var container = $("#productFilterPopup");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.productFilterBtn').removeClass('active');
            $('#productFilterPopup').hide();
            $('#productFilterPopup').prev().hide();
        }
    });

    // Add Brand
    $('#addBrandBtn').click(function(){
        $(this).next().fadeIn();
        $('#addBrandPopup').show();
        $('#addBrandPopup').addClass('active');
    });
    $('.addBrandPopupClose').click(function(){
        $('#addBrandPopup').hide();
        $('#addBrandPopup').removeClass('active');
        $('#addBrandPopup').prev().fadeOut();
    });
    $(document).mouseup(function(e) {
        var container = $("#addBrandPopup");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('#addBrandPopup').hide();
            $('#addBrandPopup').removeClass('active');
            $('#addBrandPopup').prev().fadeOut();
        }
    });

    // Add Tags
    $('#addTagsBtn').click(function(){
        $(this).next().fadeIn();
        $('#addTagPopup').show();
        $('#addTagPopup').addClass('active');
    });
    $('.addTagPopupClose').click(function(){
        $('#addTagPopup').hide();
        $('#addTagPopup').removeClass('active');
        $('#addTagPopup').prev().fadeOut();
    });
    $(document).mouseup(function(e) {
        var container = $("#addTagPopup");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('#addTagPopup').hide();
            $('#addTagPopup').removeClass('active');
            $('#addTagPopup').prev().fadeOut();
        }
    });

    // Add Seasons
    $('#addSeasonBtn').click(function(){
        $(this).next().fadeIn();
        $('#addSeasonPopup').show();
        $('#addSeasonPopup').addClass('active');
    });
    $('.addSeasonPopupClose').click(function(){
        $('#addSeasonPopup').hide();
        $('#addSeasonPopup').removeClass('active');
        $('#addSeasonPopup').prev().fadeOut();
    });
    $(document).mouseup(function(e) {
        var container = $("#addSeasonPopup");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('#addSeasonPopup').hide();
            $('#addSeasonPopup').removeClass('active');
            $('#addSeasonPopup').prev().fadeOut();
        }
    });
});