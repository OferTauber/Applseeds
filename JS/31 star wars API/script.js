const getPerson = async (number) => {
  try {
    const fetchdJson = await fetch(
      `https://swapi.dev/api/people/${number + ''}`
    );
    const data = await fetchdJson.json();
    const personObj = await getPersonData(data);
    return personObj;
  } catch (err) {
    console.warn(err);
  }
};

const getPersonData = async (data) => {
  try {
    const person = {
      name: data.name,
      height: data.height,
      hair_color: data.hair_color,
    };
    const homePlanetJson = await fetch(data.homeworld);
    homeWorld = await homePlanetJson.json();
    person.homeWorld = homeWorld.name;
    person.homeWorldPop = homeWorld.population;

    return person;
  } catch (err) {
    console.warn(err);
  }
};

const appendPersonToDOM = async (person) => {
  void person;
};

const createTable = async () => {
  try {
    const table = document.createElement('table');
    table.innerHTML = '';
    document.querySelector('body').append(table);
    table.innerHTML = `<tr class="highlight"><th colspan="5">Star Wars</th></tr><tr><th>Name</th><th>Hair</th><th>Height</th><th>Planet Name</th><th>Planet Population</th></tr>`;

    for (let i = 1; i <= 10; i++) {
      const person = await getPerson(i);
      const row = await createTableRow(person);
      table.appendChild(row);
    }
  } catch (err) {
    console.warn(err);
  }
};

const createTableRow = async (person) => {
  try {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.hair_color}</td>
    <td>${person.height}</td>
    <td>${person.homeWorld}</td>
    <td>${person.homeWorldPop}</td>
    `;

    return tableRow;
  } catch (err) {
    console.warn(err);
  }
};

// getPerson(1);
// getPerson(2);

createTable();
