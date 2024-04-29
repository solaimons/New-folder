document.getElementById('madLibsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const adjective = document.getElementById('adjective').value;
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;

    // Construct the Mad Lib story
    const story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`;

    // Display the story on the webpage
    document.getElementById('story').textContent = story;
});
