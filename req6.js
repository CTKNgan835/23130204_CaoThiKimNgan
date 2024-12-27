const courseCards = document.querySelectorAll('.course-card');
const courseDescription = document.getElementById('courseDescription');
const infoContainer = document.querySelector('.info');

courseCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const descriptionText = card.getAttribute('data-description');
        // Set the inner text of the description
        courseDescription.style.display = 'block';
        courseDescription.style.left = `${e.pageX}px`;
        courseDescription.style.top = `${e.pageY}px`;

        // Add additional information
        infoContainer.innerHTML = `
            <p>${descriptionText}</p>
            <p>Updated 12-4-2024</p>
            <p>Totals all levels subtitles</p>
            <p>10 Hours of React just added. Become a Developer With ONE course - HTML, CSS,....</p>
            <p>✔️ The ins and outs od HTML5, CSS3, and Modern JS for 2021</p>
            <p>✔️ Make REAL web applications using cutting-edge technologies  </p>
            <p>✔️ Create responsive, accessible, and beautiful layouts   </p>
            <div class ="button"> Add to cart </div> 
       ` ;
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.course-card') && !courseDescription.contains(event.target)) {
        courseDescription.style.display = 'none';
    }
});