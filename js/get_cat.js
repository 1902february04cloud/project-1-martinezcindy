get_cat = () => {
    //Get user input
    let breed = document.getElementById('bread').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('coolMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://cs39adya5c.execute-api.us-east-1.amazonaws.com/beta/get_cat`);

    //Sending our request
    let request = {'breed': breed}
    xhr.send(JSON.stringify(request));
}