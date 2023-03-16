const findFamousCats = (cats) => {
  let theMostFamousCats = [];

  const sumFollowers = cats.map((element) => {
    return {
      name: element.name,
      followers: element.followers.reduce((a, b) => a + b),
    };
  });

  const descFamousCats = sumFollowers.sort((x, y) =>
    x.followers > y.followers ? -1 : 1
  );

  descFamousCats.filter((element) => {
    if (element.followers === descFamousCats[0].followers) {
      return theMostFamousCats.push(element.name);
    }
  });

  return theMostFamousCats;
};