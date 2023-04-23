//Video Section
videoContainer = $("#youtube_container")



var videoSubmit = document.getElementById("VideoSubmit");
videoSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var city = $("#cityLabel").val();
    console.log(city);
    
    getVideos(city)
});

//Create Video Cards
var creatVideoCards = function () {
    for (var i = 0; i < 10; i++) {

        var videoCard = $("<div>")
        videoCard.addClass("each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative")


        var videoDescription = $("<div>")
        videoDescription.addClass("desc p-4 text-gray-800")

        var title = $("<a>")
        title.addClass("title font-bold block cursor-pointer hover:underline")
        videoDescription.append(title)

        var owner = $("<a>")
        owner.addClass("badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer")
        videoDescription.append(owner)

        var description = $("<span>")
        description.addClass("description text-sm block py-2 border-gray-400 mb-2")
        videoDescription.append(description)

        

        videoCard.append(videoDescription)
        videoContainer.append(videoCard)
    }

}


//Retreive data from data from Youtube
var getVideos = function (city) {
    let apiKey = 'AIzaSyBZqIu_o5Mjz45YHuUESqlCtVR3KL3UfG8'
    let maxResults = 20

    let apiUrl = "https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&order=viewCount&maxResults=" + maxResults + "&q=" + "UFO Sighntings " + city

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        displayVideos(data)
                    });
            }
        });
}


//Display youtube videos
var displayVideos = function (data) {
    console.log("DATa IS HERE", data);

    for (var i = 0; i < 10; i++) {
        var video = data.items
        var ytVideoTitle = video[i].snippet.title
        var ytChannelOwner = video[i].snippet.channelTitle
        var ytDescription = video[i].snippet.description
        var ytVideoId = video[i].id.videoId

        videoContainer.children().eq(i).children().eq(0).children().eq(0).text(ytVideoTitle)
        videoContainer.children().eq(i).children().eq(0).children().eq(0).attr("onclick", 'window.open(' + '"' + 'https://www.youtube.com/watch?v=' + ytVideoId + '"' + ')')

        videoContainer.children().eq(i).children().eq(0).children().eq(1).text(ytChannelOwner)
        videoContainer.children().eq(i).children().eq(0).children().eq(2).text(ytDescription)

    }

}


creatVideoCards();