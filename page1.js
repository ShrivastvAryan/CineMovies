const apiUrl = "seriesdata.json";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const container = document.querySelector(".movie-card");

        const limitedData = data.slice(5,10);

        limitedData.forEach(item => {
            // Create a movie card
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
            Link.appendChild(img);


            card.append(Link,title);
            container.appendChild(card);


            //For poster img and information
           /* const posterContainer=document.querySelector(".page1-poster--div");

            const posterCard= document.createElement("div");
            posterCard.className="page1-poster--img";
            posterCard.src=item.img_url;

            const posterInfoDiv=document.createElement("div");
            posterInfoDiv.className="page1-poster--info";

            const posterTitle=document.createElement("p")
            posterTitle.className="title-page1";
            posterTitle.textContent=item.name;

            const posterDescription=document.createElement("p");
            posterDescription.className="title-page1--info";
            posterDescription.textContent=`Description- ${item.description}`;

            const posterRating=document.createElement("p");
            posterRating.className="title-page1--info";
            posterRating.textContent=`Rating- ${item.rating}`;

            const posterRunTime=document.createElement("p");
            posterRunTime.className="title-page1--info";
            posterRunTime.textContent=`RunTime- ${item.runtime} || "NA" `;

            const posterCaste=document.createElement("p");
            posterCaste.className="title-page1--info";
            posterCaste.textContent=`Caste- ${item.cast}`;

            const posterGenre=document.createElement("p");
            posterGenre.className="title-page1--info";
            posterGenre.textContent=`Caste- ${item.genre}`;

            const posterLang=document.createElement("p");
            posterLang.className="title-page1--info";
            posterLang.textContent=`Language- ${item.language || "NA"}`;

           posterInfoDiv.append(posterTitle,posterDescription,posterGenre,posterLang,posterRating,posterRunTime);
           posterContainer.append(posterCard,posterInfoDiv)*/

        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

