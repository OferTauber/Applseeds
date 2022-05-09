const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Fresh tomato pasta',
          publisher: 'Pinchas Hodadad',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

const asyncGetIDs = async (isError) => {
  try {
    if (isError) {
      throw 'error';
    } else {
      const IDs = await getIDs();
      console.log(IDs);
      const recipe = await getRecipe(IDs);
      console.log(recipe);
    }
  } catch {
    console.log('It is an error!');
  }
};

asyncGetIDs();
asyncGetIDs(1);
