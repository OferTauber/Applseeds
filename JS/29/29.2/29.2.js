document.querySelector('.get-joke').addEventListener('click', async () => {
  try {
    const json = await fetch('https://api.jokes.one/jod');
    const data = await json.json();
    document.querySelector('.joke-container').classList.remove('hidden');
    document.querySelector('.error').classList.add('hidden');
    document.querySelector('.joke-title').textContent =
      data.contents.jokes[0].joke.title;
    document.querySelector('.joke-text').textContent =
      data.contents.jokes[0].joke.text;
  } catch (error) {
    document.querySelector('.joke-container').classList.add('hidden');
    document.querySelector('.error').classList.remove('hidden');
    document.querySelector(
      '.error h4'
    ).textContent = `Somthong went wrong!, ${error}`;
  }
});
