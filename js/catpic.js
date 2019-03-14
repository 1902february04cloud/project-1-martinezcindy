// catpic = () => {
    //Get user input

    //AJAX Logic
    // let xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = () => {
    //     //If the request is DONE (4), and everything is OK
    //     if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //         //Getting JSON from response body
    //         let data = JSON.parse(xhr.responseText);
    //         console.log(data);
    //         var img = document.createElement("img");
    //         img.src = "images/cat-isSecureContext.png";
    //         // img.width = width;
    //         // img.height = height;
    //         // img.alt = alt;
    //         //Set data into div
    //         document.getElementById('picMessage').innerHTML = document.createElement("img");
    //     }
    // };

    //Doing an HTTP call to a specific endpoint
    // xhr.open('GET',`https://cs39adya5c.execute-api.us-east-1.amazonaws.com/beta/see_cats`);

    //Sending our request
    // let request = {'name': name, 'breed': breed, 'fur_length': fur_length, 'has_tail': has_tail}
    // xhr.send();
    
// }
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    var pics = ["images/angry.jpg", "images/cat-face.jpg", "images/kitten.jpg", "images/purrito.jpg"]
    img.src = pics[Math.floor(Math.random()*pics.length)];;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}