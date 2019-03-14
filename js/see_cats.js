see_cats = () => {
    //Get user input

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            
            //Set data into div
            document.getElementById('seeMessage').innerHTML = data.response;
        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('GET',`https://cs39adya5c.execute-api.us-east-1.amazonaws.com/beta/see_cats`);

    //Sending our request
    // let request = {'name': name, 'breed': breed, 'fur_length': fur_length, 'has_tail': has_tail}
    xhr.send();
}