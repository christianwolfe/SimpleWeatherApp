

//click event
$(document).ready(function () {
    event.preventDefault();
    var city = $(this).attr("data-city") || $("#city").val
    $(document).on("click", ".btn", function (event) {

        var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a2a9aa71760a83d744d0e5242edcb21c&units=imperial";



        $.ajax({
            method: "GET",
            url: queryURL,
        })
            .then(function (response) {
                console.log(queryURL);
                window.localStorage.setItem(city, city);

                $("#city").text(response.name)

            });
    });
});