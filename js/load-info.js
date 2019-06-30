// Load general tour info
$.getJSON("js/tours-next.json", function(data) {
    $('.talk-title').text(data['title']);
    $('.talk-speaker').text(data['speaker']);
    $('.talk-date').text(data['month'] + " " + data['day'] + ", " + data['year']);
    $('.talk-time').text(data['time'] + " " + data['timezone']);
    $('.talk-building').text(data['buildingName']);
    $('.talk-building-code').text(data['buildingCode']);
    $('.talk-address').text(data['address']);
    $('.talk-room').text(data['roomNumber']);
    $('.talk-map').attr('src', data['mapsrc']);
    $('.talk-abstract').text(data['abstract']);
    $('.talk-speaker-info').text(data['speakerInfo']);
});

// Load FAQ contents
$.getJSON("js/faq.json", function(data) {
    $.each(data, function(index, element) {
        $('.faq-body').append("<h4>"+element['question']+"</h4>");
        $('.faq-body').append("<p>"+element['answer']+"</p>");
    });
});
