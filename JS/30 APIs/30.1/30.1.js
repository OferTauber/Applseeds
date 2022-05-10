const getPerson = async (userName) => {
  try {
    const fetchdJson = await fetch(`https://api.github.com/users/${userName}`);
    const data = await fetchdJson.json();
    displayPerson(data);
  } catch (err) {
    console.warn(err);
  }
};

const displayPerson = (data) => {
  const person = document.createElement('div');
  person.classList.add('person');
  person.innerHTML = `<img
  src="${data.avatar_url}"
  alt="${data.name}"
/>
<div class="data">
  <h3>${data.name}</h3>
  <h6>${data.login}</h6>
</div>
<a href="${data.html_url}" target="_blanck" class="btn"><span>Go to ${
    data.name.split(' ')[0]
  }'s profile</span></a>`;
  document.querySelector('main').appendChild(person);
};

document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault();
  const userInputel = document.querySelector('.user-input');
  console.log(userInputel.value);
  getPerson(userInputel.value);
});
