var responseData = [
    {
        "pasar": [
            {
                "id_pasar": 1,
                "nama_pasar": "Pasar Beringharjo",
                "latitude": -7.798625381586126,
                "longitude": 110.36520612412284
            }]
    },
    {
        "pasar": {
            "id_pasar": 1,
            "nama_pasar": "Pasar Beringharjo",
            "kelas_pasar": 1,
            "alamat_pasar": "Jl. Margo Mulyo No.16, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
            "kecamatan_pasar": "Gondomanan",
            "kodepos": "55122",
            "instagram": ""
        },
        "nama_lain": [
            {
                "id_pasar": 1,
                "nama_pasar": "Pasar Beringharjo",
                "nama_lain": "Pasar Bringharjo"
            }
        ]
    },
    {
        "pasar": {
            "id_pasar": 1,
            "nama_pasar": "Pasar Beringharjo",
            "deskripsi_pasar": "Pasar Beringharjo merupakan pasar yang terletak di lokasi pariwista Yogyarta tepatnya disamping Malioboro.  Selain itu Pasar Beringharjo ...",
            "latitude": -7.798625381586126,
            "longitude": 110.36520612412284,
            "is_denah": 1
        },
        "keterangan": [],
        "tag": [],
        "kios": [],
        "foto": [],
        "fasilitas": [],
        "fotosejarah": []
    },
    [
        {
            "id_pasar_kios": 1,
            "nama_kios": "Batik Atik Ibrahim",
            "lokasi_kios": null,
            "gedung": "DEPAN",
            "lantai": 1,
            "kode_svg": "beringharjo-kiosatikibrahim",
            "sumber": null,
            "id_pasar": 1,
            "id_pasar_lantai": 2,
            "nama_pasar": "Pasar Beringharjo",
            "foto_kios": "beringharjo-kiosatikibrahim.jpg"
        }
    ]
]

var responseDesc = [
    {
        id_pasar: "ID pasar",
        nama_pasar: "Nama pasar",
        latitude: "Garis bujur lattitude",
        longitude: "Garis bujur longtitude"
    },
    {
        id_pasar: "ID pasar",
        nama_pasar: "Nama pasar",
        kelas_pasar: "Kelas pasar (secara keseluruhan terdapat lima kelas pasar di Kota Yogyakarta 1-5)",
        alamat_pasar: "Alamat lengkap pasar",
        kecamatan_pasar: "Kecamatan pasar",
        kodepos: "Kodepos pasar",
        instagram: "Akun instagram dari pasar"
    },
    {
        id_pasar: "ID pasar",
        nama_pasar: "Nama pasar",
        deskripsi_pasar: "Deskripsi yang menjelaskan pasar beserta sejarahnya",
        latitude: "Garis bujur lattitude",
        longitude: "Garis bujur longtitude",
        foto: "Foto dari pasar yang bersangkutan",
        fotosejarah: "Foto sejarah dari pasar yang bersangkutan",
        keterangan: "Beberapa fakta menarik dari pasar",
        tag: "Merupakan kekhasan atau kata kunci yang berhubungan dengan pasar",
        fasilitas: "Fasilitas yang ada pada pasar tersebut",
        kios: "Semua kios yang ada pada pasar tersebut. "
    },
    {
        id_pasar_kios: "ID kios",
        nama_kios: "Nama kios",
        lokasi_kios: "Lokasi kios pada pasar",
        gedung: "Nama gedung tempat kios berada",
        lantai: "Lantai tempat kios berada",
        kode_svg: "Secara default setiap kios diberi kode SVG yang dapat digunakan untuk memetakan kios pada denah digital",
        sumber: "Sumber didapatkan informasi kios tersebut",
        id_pasar: "ID pasar yang berhubungan dengan kios",
        id_pasar_lantai: "ID lantai pasar yang berhubungan dengan kios",
        nama_pasar: "Nama pasar yang berhubungan dengan kios",
        foto_kios: "Foto utama kios"
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