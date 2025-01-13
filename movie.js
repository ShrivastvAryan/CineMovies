let startId=0;
let endId=10;

const apiUrl = "seriesdata.json";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })

    .then(data => {

        for(i =startId; i<=endId; i++)
       { const container = document.querySelector(".movie-card");

        data.forEach(item => {
            // Create a movie card
            if(i==item.id){
            //const idCard=document.getElementById(`${i}`);

            const card = document.createElement("span");
            card.className = "movie-cards--span";

            // Create image element
            const img = document.createElement("img");
            const Link=document.createElement("a");
            img.className = "movie-cards--photo";
            img.src = item.img_url; // Assuming item has an 'img_url' field
            img.alt = item.name;
            Link.href=item.liveLink

            // Create title element
            const title = document.createElement("h2");
            title.className = "movie-name";
            title.textContent = item.name;

            Link.appendChild(img)

            card.append(Link,title);
            container.appendChild(card);}
        });
    }})
    .catch(error => {
        console.error("Error fetching data:", error);
    });


