var responseData = [
    {
        "pasar": [
            {
                "id_pasar": 1,
                "nama_pasar": "Pasar Beringharjo",
                "latitude": -7.798625381586126,
                "longitude": 110.36520612412284
            }]
    }
]

var responseDesc = [
    {
        id_pasar: "ID pasar",
        nama_pasar: "Nama pasar",
        latitude: "Garis bujur lattitude",
        longitude: "Garis bujur longtitude"
    }
]

window.onload = function () {
    var documentResponse = document.getElementsByClassName("api-response")
    var documentResponseDesc = document.getElementsByClassName("response-description")

    for (let index = 0; index < responseData.length; index++) {
        // insert response (json)
        var jsonFormatted = JSON.stringify(responseData[index], null, 4)
        documentResponse[index].textContent = jsonFormatted

        // insert response description
        var responseDescItem = responseDesc[index]
        for (var key in responseDescItem) {
            var tr = document.createElement("tr")
            let tdKey = document.createElement("td")
            tdKey.innerHTML = key

            let tdValue = document.createElement("td")
            tdValue.innerHTML = responseDescItem[key]

            tr.appendChild(tdKey)
            tr.appendChild(tdValue)
            documentResponseDesc[index].appendChild(tr)
        }
    }
}