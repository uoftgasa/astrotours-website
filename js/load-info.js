// Load general tour info
$.getJSON("js/tours-next.json", function(data) {
    $('.talk-title').text(data['title']);
    $('.talk-speaker').text(data['speaker']);
    $('.talk-date').text(data['month'] + " " + data['day'] + " " + data['year']);
    $('.talk-year').text(data['year']);
    $('.talk-time').text(data['time'] + " " + data['timezone']);
    $('.talk-building').text(data['buildingName']);
    $('.talk-building-code').text(data['buildingCode']);
    $('.talk-address').text(data['address']);
    $('.talk-room').text(data['roomNumber']);
    $('.talk-map').attr('src', data['mapsrc']);
    $('.talk-abstract').text(data['abstract']);
    $('.talk-abstract').append("<a href='https://www.toronto.ca/community-people/health-wellness-care/diseases-medications-vaccines/coronavirus/'> this website.</a>");
    $('.talk-speaker-info').text(data['speakerInfo']);
    $('.talk-image-credit').text(data['imageCredit']);
});

// Load FAQ contents
$.getJSON("js/faq.json", function(data) {
    $.each(data, function(index, element) {
        $('.faq-body').append("<h4>"+element['question']+"</h4>");
        $('.faq-body').append("<p>"+element['answer']+"</p>");
    });
});

// Load previous tour info
$.getJSON("js/tours-prev.json", function(data) {
    $.each(data, function(index, element) {
        $('#archive-body').append("<h5>"+element['date']+"</h5>");
        $('#archive-body').append("<h3>"+element['title']+" ("+element['speaker']+")</h3>");
        $('#archive-body').append("<div class='prev-tour-wrapper mx-auto'><div class='video-container mx-auto'><iframe class='prev-tour-video' src='"+element['videosrc']+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div>");
        $('#archive-body').append("<hr class='light'>");
    });
});
