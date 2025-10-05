// const spotifyAPIKey = 'bd5fd62c63e64962ab58abf607daaddb'

// ///access codes/// needs to be updated every hour
// let Spotifyaccess = {"access_token":"BQCikM5m0vjgBmjhToCQak0PMKq7HGHElIoZnMsFb5MW2ywxuRftEZoc1yYVkUnEogHAmopYZFkLzL_vbb5wiJUt7ma0aeDZG5vIYoMsk6v_9D2AzQpxhdY_9LjT2HhqL41VE2_n-3Y","token_type":"Bearer","expires_in":3600}



// //learned how to use headers and cURL from this article: https://apidog.com/blog/curl-javascript-fetch/
// // fetch('https://api.spotify.com/v1/playlists/7f87ZT5QeiF5Ycyv4EUn3q', {
// //                                                 headers: {
// //                                                     'Authorization':`Bearer ${Spotifyaccess.access_token}`
// //                                                 },
// //                                                 method:'GET'
// //                                                 })
// //     .then(res => res.json())
// //     .then(data => {
// //         let musicChoices = []
// //         data.tracks.items.forEach(item => 
// //             musicChoices.push(item.track.name.toLowerCase().split(' ').join('+'))
// //         )
// //         const musicString = musicChoices.join('%2C+')
// //         console.log(musicString)

// //         fetch(`https://corsproxy.io/?url=https://tastedive.com/api/similar?q=${musicString}&type=music&k=${tastediveAPI}&info=1`)
// //             .then(res => res.json())
// //             .then(data => {
// //                 console.log(data)
// //                 console.log(data.similar.results[0])
// //         })
// //     })
// //     .catch(err => console.log('Error: ' + err))

document.querySelector('button').addEventListener('click',calculate)

function calculate() {
    const musicArray = []
    document.querySelectorAll('input').forEach(input => 
        musicArray.push(input.value.toLowerCase().split(' ').join('+'))
    )
    const musicString = musicArray.join('%2C+')
    console.log(musicString)
    const tastediveAPI = '1059798-GodwinKa-6A33A965'
    fetch(`https://corsproxy.io/?url=https://tastedive.com/api/similar?q=${musicString}&type=music&k=${tastediveAPI}&info=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const topArtist = data.similar.results[0].name
        console.log(topArtist)
        document.querySelector('h2').innerText = topArtist
        const taString = topArtist.split(' ').join('+')
        console.log(taString)
        fetch(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${taString}`)
            .then(res => res.json())
            .then(newData => {
                console.table(newData.artists[0])
                document.querySelector('img').src = newData.artists[0].strArtistThumb
                document.querySelector('h3').innerText = newData.artists[0].strBiographyEN
            })
            .catch(err => console.log(err))

    })
    .catch(err => console.log('Error: ' + err))
}


//create an array with the isrc's from the spotify playlist, 
// get and convert them into tidal ids
// post new playlist and patch it with new songs

//experiment in Tidal API: multiple isrc's

////////    TIDAL EXPERIMENTAION        /////////////////

// const tidalAPIKey = 'E6I4SGtorVrBzt4XaEsguN5rzZQaAoGA0RpeokQXikg='
// let TidalAccess = {"scope":"","token_type":"Bearer","access_token":"eyJraWQiOiJ2OU1GbFhqWSIsImFsZyI6IkVTMjU2In0.eyJ0eXBlIjoibzJfYWNjZXNzIiwic2NvcGUiOiIiLCJnVmVyIjowLCJzVmVyIjowLCJjaWQiOjE5ODQ5LCJleHAiOjE3NTk1Mzc5MTMsImlzcyI6Imh0dHBzOi8vYXV0aC50aWRhbC5jb20vdjEifQ.JnYWtc-mNvFvDScyGk6q-qg9ks3okJ0BIsuntLU5lnmAIqvkPcRFoE37rRZEr0nQQla5twNC9R5AF1_vmqV-Cw","expires_in":43200}

// fetch('https://openapi.tidal.com/v2/tracks?countryCode=US&filter%5Bisrc%5D=USQX92501822', {
//                                                 headers: {
//                                                     'Authorization':`Bearer ${TidalAccess.access_token}`
//                                                 },
//                                                 method:'GET'
//                                                 })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error: ' + err))

// fetch('https://openapi.tidal.com/v2/users/me', {
//                                                                     method:'GET',
//                                                                     headers: {
//                                                                         'Authorization':`Bearer ${TidalAccess.access_token}`,
//                                                                     }
//                                                                 })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error: ' + err))