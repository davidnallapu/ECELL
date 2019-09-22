$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '6089656920',
        limit: 9,
        resolution: 'standard_resolution',
        accessToken: '6089656920.1677ed0.2895a9a966984b66925e93e757bf2bfd',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 col-xs-6 instaimg"><a href="{{link}}"  target="_blank"><img src="{{image}}" alt="" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});