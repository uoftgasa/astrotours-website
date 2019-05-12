$.getJSON("js/tours-next.json", function(data) {
    $('.talk-title').text(data['title']);
    $('.talk-speaker').text(data['speaker']);
    $('.talk-date').text(data['month'] + " " + data['day'] + ", " + data['year']);
    $('.talk-time').text(data['time'] + " " + data['timezone']);
    $('.talk-building').text(data['buildingName']);
    $('.talk-building-code').text(data['buildingCode']);
    $('.talk-address').text(data['address']);
    $('.talk-room').text(data['roomNumber']);
    $('.talk-abstract').text(data['abstract']);
    $('.talk-speaker-info').text(data['speakerInfo']);
});
