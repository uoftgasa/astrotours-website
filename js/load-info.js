// Load general tour info
$.getJSON("js/tours-next.json", function(data) {
    $('.homepage-title').text(data[0]['homepage-title']);
    $.each(data.slice(1), function(index, element) {
        $('.talk-title').text(element['title']);
        $('.talk-speaker').text(element['speaker']);
        $('.talk-date').text(element['month'] + " " + element['day'] + ", " + element['year']);
        $('.talk-year').text(element['year']);
        $('.talk-time').text(element['time'] + " " + element['timezone']);
        $('.talk-building').text(element['buildingName']);
        $('.talk-building-code').text(element['buildingCode']);
        $('.talk-address').text(element['address']);
        $('.talk-room').text(element['roomNumber']);
        $('.talk-map').attr('src', element['mapsrc']);
        $('.talk-abstract').text(element['abstract']);
        $('.talk-speaker-info').text(element['speakerInfo']);
        $('.talk-image-credit').text(element['imageCredit']);
    });
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
