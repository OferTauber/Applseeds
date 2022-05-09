document.querySelector('.get-joke').addEventListener('click', () => {
  fetch('https://api.jokes.one/jod')
    .then((res) => res.json())
    .then((res) => {
      document.querySelector('.joke-container').classList.remove('hidden');
      document.querySelector('.error').classList.add('hidden');
      document.querySelector('.joke-title').textContent =
        res.contents.jokes[0].joke.title;
      document.querySelector('.joke-text').textContent =
        res.contents.jokes[0].joke.text;
    })
    .catch((err) => {
      document.querySelector('.joke-container').classList.add('hidden');
      document.querySelector('.error').classList.remove('hidden');
      document.querySelector(
        '.error h4'
      ).textContent = `Somthong went wrong!, ${err}`;
    });
});
