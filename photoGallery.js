// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.querySelector(".imageContainer");



// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNsxCE5oYuQOMZR94h68AJWRs4y9p5YqDuMLRe1eTwmEJ125mGPPYk1FzhOsdAXFMye6txst9vVSaswLyl89HA_O-bgLmufdRoNG-B0Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTXu7wGp1LSCO_Eg5sJeUx5nun7_6bNUyhtc-SWbC9NB8S_Fdh8KeD69THKbzNu3rR2o3r_B4gNOyYbt_5kJTSdD6tluPeJ59XUQhVHk&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJU_8Oqo1-M78MdkCGR8rNtFsRVy44xwTw9EThSECaLMhleL86nwzZXH-YaHJxaV0SmjCfur16vlqPlUunXUpZgq18JHU6728-B6ra_g&s=10",
    "https://upnorthpyrenees.com/wp-content/uploads/2025/04/20250316_131132-1024x1024.jpg"
];

// 3. Selecting the imageUrls array, create a forEach loop.

imageUrls.forEach(function(image){
    let img = document.createElement("img");
    img.src = image;
    imageContainer.appendChild(img);
})

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
