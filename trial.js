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

        data.forEach(item => {
            // Create a movie card
            const card = document.createElement("span");
            card.className = "movie-cards--span";

            // Create image element
            const img = document.createElement("img");
            img.className = "movie-cards--photo";
            img.src = item.img_url; // Assuming item has an 'img_url' field
            img.alt = item.name;

            // Create title element
            const title = document.createElement("h2");
            title.className = "movie-name";
            title.textContent = item.name;

            card.append(img, title);
            container.appendChild(card);

            // Add hover functionality
            card.addEventListener("mouseenter", () => {
            const hoverContainer = document.querySelector(".hover-container");

                // Clear any previous hover content
                hoverContainer.innerHTML = "";

                const hoverTitle = document.createElement("span");
                hoverTitle.className = "hover-container--title";
                hoverTitle.textContent = item.name;

                const hoverDescription = document.createElement("p");
                hoverDescription.className = "dis";
                hoverDescription.textContent = item.description;

                const hoverRating = document.createElement("p");
                hoverRating.className = "rating";
                hoverRating.textContent = `Rating:  ${item.rating}`;

                const hoverCaste = document.createElement("p");
                hoverCaste.className = "caste";
                hoverCaste.textContent = `Cast:  ${item.cast}`;

                const hoverTime = document.createElement("p");
                hoverTime.className = "run-time";
                hoverTime.textContent = `Runtime:  ${item.runtime || "N/A"}`;

                // Append hover details to hover container
                hoverContainer.append(hoverTitle, hoverDescription, hoverRating, hoverCaste, hoverTime);
                
            });

            card.addEventListener("mouseleave", () => {
                const hoverContainer = document.querySelector(".hover-container");
                hoverContainer.innerHTML = ""; // Clear hover container on mouse leave
            });
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });


