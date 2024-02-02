console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("dog-image-container");
    const breedContainer = document.getElementById("dog-breeds");
    const dropdownMenu = document.getElementById("breed-dropdown");
    let allBreeds = [];
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {       
        for (const element of data.message) {
            const image = document.createElement("img");
            image.src = element;
            imageContainer.appendChild(image);
        };
    });
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {      
        for (const category in data.message) {
            const breeds = data.message[category];
            for (const breed of breeds) {
                const breedElement = document.createElement("li");
                breedElement.textContent =  breed + " " + category;
                breedContainer.appendChild(breedElement);
                allBreeds.push(breedElement);

                breedElement.addEventListener("click", function() {
                    breedElement.style.color = "red"
                });
                dropdownMenu.addEventListener("change", function() {
                    const selectedLetter = dropdownMenu.value.toLowerCase();
                    allBreeds.forEach(function (breedElement) {
                        const firstLetter = breedElement.textContent.charAt(0).toLowerCase();
                        if (firstLetter === selectedLetter) {
                            breedElement.style.display = "block";
                        } else {
                            breedElement.style.display = "none";
                        };
                    });
                });
            };
        };
    });
});
