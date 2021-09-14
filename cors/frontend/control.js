function onGet(version) {
    const url = "http://localhost:8000/api/" + version + "/messages";
    var headers = {}
    console.log("Frontend GETTING:", version);
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('messages').value = data.messages;
    })
    .catch(function(error) {
        document.getElementById('messages').value = error;
    });
}

// function onPut(version) {
//     const url = "http://localhost:8000/api/" + version + "/messages/0";
//     // var headers = {}
//     let headers = { "X-Token": "abcd1234" }
//     console.log("frontend PUTTING:", version);
//     fetch(url, {
//         method : "PUT",
//         mode: 'cors',
//         headers: headers,
//         body: new URLSearchParams(new FormData(document.getElementById("form2"))),
//     })
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(response.error)
//         }
//         return response.json();
//     })
//     .then(data => {
//         document.getElementById('messages').value = data.messages;
//     })
//     .catch(function(error) {
//         document.getElementById('messages').value = error;
//     });
// }

function onPut(version) {
    const url = "http://localhost:8000/api/" + version + "/messages/0";
    // var headers = {}
    let headers = { "X-Token": "abcd1234" }
    console.log("frontend PUTTING:", version);
    fetch(url, {
        method : "PUT",
        mode: 'cors',
        headers: headers,
        body: new URLSearchParams(new FormData(document.getElementById("form2"))),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        response.headers.forEach(function(val, key) {
            document.getElementById('headers').value += '\n' + key + ': ' + val; 
        });
        return response.json();
    })
}