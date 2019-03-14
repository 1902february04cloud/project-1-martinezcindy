create = () => {
    //Get user input
    let name = document.getElementById('name').value;
    let breed = document.getElementById('breed').value;
    let fur_length = document.getElementById('fur_length').value;
    let has_tail = document.getElementById('has_tail').value;

    //AJAX Logic
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //If the request is DONE (4), and everything is OK
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            //Getting JSON from response body
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            //Set data into div
            document.getElementById('createMessage').innerHTML = data.response;

        }
    };

    //Doing an HTTP call to a specific endpoint
    xhr.open('POST',`https://cs39adya5c.execute-api.us-east-1.amazonaws.com/beta/put`);

    //Sending our request
    let request = {'name': name, 'breed': breed, 'fur_length': fur_length, 'has_tail': has_tail}
    xhr.send(JSON.stringify(request));
}