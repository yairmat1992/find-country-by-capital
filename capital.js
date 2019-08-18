$(function () {

    function getCapital(search, callback) {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/capital/${search}`,
            method: "GET",
            success: function (data) {
                callback(data)
            },
            error: function () {
                $("#capitalCards").html("<h1>can't find any country by this capital city :(</h1>")
            }
        })
    }
    $("#searchByCapital").on("click", () => {
        getCapital($("#capitalCitySearch").val(), (result) => {
            $("#capitalCards").html(draw(result))
        })

    })
})

function draw(array) {
    return array.reduce((someString, country) => {
        const { name, capital, flag } = country
        const cardContainer = `<div class="card capital m-1">
            <img src="${flag}" >
                <div class="card-body">
                    <h2>${name}</h2>
                    <h3>${capital}</h3>
                </div>
            </div>`
        return someString += cardContainer
    }, '')
}