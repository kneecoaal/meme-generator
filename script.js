document.addEventListener("DOMContentLoaded", function () {
  const imageUrlInput = document.getElementById("imageUrlInput");
  const topText = document.getElementById("topText");
  const bottomText = document.getElementById("bottomText");
  const generateBtn = document.getElementById("generateBtn");
  const memesContainer = document.getElementById("memesContainer");

  generateBtn.addEventListener("click", generateMeme);

  function generateMeme() {
    const imageUrl = imageUrlInput.value.trim();

    if (!imageUrl) {
      alert("Please enter an image URL.");
      return;
    }

    const topTextValue = topText.value.toUpperCase();
    const bottomTextValue = bottomText.value.toUpperCase();

    const memeContainer = document.createElement("div");
    memeContainer.classList.add("meme-container");

    const memeImage = document.createElement("img");
    memeImage.src = imageUrl;
    memeImage.alt = "Generated Meme Image";

    const topTextElement = document.createElement("div");
    topTextElement.innerText = topTextValue;
    topTextElement.classList.add("meme-text", "top-text");

    const bottomTextElement = document.createElement("div");
    bottomTextElement.innerText = bottomTextValue;
    bottomTextElement.classList.add("meme-text", "bottom-text");

    const deleteBtn = createDeleteBtn(memeContainer);

    memeContainer.appendChild(memeImage);
    memeContainer.appendChild(topTextElement);
    memeContainer.appendChild(bottomTextElement);
    memeContainer.appendChild(deleteBtn);

    memesContainer.appendChild(memeContainer);

    imageUrlInput.value = "";
    topText.value = "";
    bottomText.value = "";
  }

  function createDeleteBtn(container) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
      memesContainer.removeChild(container);
    });

    return deleteBtn;
  }
});
