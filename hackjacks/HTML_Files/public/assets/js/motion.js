document.addEventListener('DOMContentLoaded', () => {
    const quizButton = document.getElementById('dykButton');
    const dialogOverlay = document.getElementById('dialogOverlay');
    const dialogClose = document.getElementById('dialogClose');
    const factContent = document.getElementById('factContent');

    // Array of facts
    const facts = [
        "India has thousands of orphanages, both government-run and private.",
        "Orphanages are regulated under the Juvenile Justice (Care and Protection of Children) Act, 2015.",
        "Child Welfare Committees (CWCs) ensure the rights and welfare of children in orphanages.",
        "NGOs play a significant role in running orphanages and child welfare programs.",
        "Orphanages work with CARA to facilitate adoptions, both domestic and international.",
        "Most orphanages provide basic education and vocational training to the children.",
        "Orphanages often collaborate with local health services to provide medical care.",
        "Orphanages offer residential care, providing children with a place to live, eat, and sleep.",
        "Many orphanages run rehabilitation programs to help children integrate into society.",
        "Vocational training programs are common in orphanages to prepare children for adulthood.",
        "Orphanages are funded by government grants, private donations, and international aid.",
        "Orphanages must adhere to the UNCRC guidelines on child rights.",
        "There have been instances of child abuse reported, leading to stricter monitoring.",
        "Many people volunteer at orphanages, providing care and companionship to the children.",
        "Despite a large number of orphans, adoption rates in India are relatively low.",
        "The concept of foster care is growing, with some orphanages facilitating temporary care.",
        "Orphanages provide life skills training, including financial literacy and social skills.",
        "Cultural and recreational activities are part of the routine in many orphanages.",
        "Some orphanages report a higher number of girls due to societal gender discrimination.",
        "Orphanages face challenges such as overcrowding, inadequate funding, and staff shortages."
    ];

    // Function to show a random fact
    function showRandomFact() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factContent.innerText = facts[randomIndex];
    }

    // Event listener for the button
    quizButton.addEventListener('click', () => {
        showRandomFact(); // Show a random fact
        dialogOverlay.style.display = 'flex'; // Show the dialog
        document.body.style.overflow = 'hidden'; // Freeze the background
    });

    // Event listener for the close button
    dialogClose.addEventListener('click', () => {
        dialogOverlay.style.display = 'none'; // Hide the dialog
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
});
