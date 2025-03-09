function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).reduce((acc, ingredient) => {
      acc.push(Math.floor((available[ingredient] || 0) / recipe[ingredient]));
      return acc;
    }, [])
  );
}
