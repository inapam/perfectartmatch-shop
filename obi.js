document.getElementById('ai-bot').addEventListener('click', () => {
  const question = prompt("Hello! I'm Obi, your AI curator. What would you like to know?");
  let response = "";

  if (question.includes("recommend")) {
    response = "Here are some recommendations: the Dream Room features surreal artworks, while the Montana Room showcases nature-inspired pieces.";
  } else if (question.includes("where is")) {
    response = "Artwork X is displayed in the Artist's Room.";
  } else if (question.includes("what is")) {
    response = "An artwork is a window into the soul of the creator.";
  } else {
    response = "Sorry, I can't answer that right now. Try asking something about the gallery!";
  }

  alert(response);
});
