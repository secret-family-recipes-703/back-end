exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: '6 large eggs', recipe_id: 7 },
        { ingredient: '1/3 cup mayonnaise', recipe_id: 7 },
        { ingredient: '2 tbsp pickle relish', recipe_id: 7 },
        { ingredient: '2 tsp mustard', recipe_id: 7 },
        { ingredient: '1 tsp sugar', recipe_id: 7 },
        { ingredient: '1 tsp lemon juice', recipe_id: 7 },
        { ingredient: '1/4 tsp salt', recipe_id: 7 },
        { ingredient: '1/4 tsp pepper', recipe_id: 7 },
        { ingredient: '3 dashes hot sauce', recipe_id: 7 },
        { ingredient: '1/4 cup vegetable oil', recipe_id: 8 },
        { ingredient: '1/3 cup honey', recipe_id: 8 },
        { ingredient: '1/3 cup soy sauce', recipe_id: 8 },
        { ingredient: '1/4 tsp pepper', recipe_id: 8 },
        { ingredient: '6 chicken breasts', recipe_id: 8 },
        { ingredient: '2 cloves of garlic', recipe_id: 8 },
        { ingredient: '5 small onions', recipe_id: 8 },
        { ingredient: '2 red bell peppers', recipe_id: 8 },
        { ingredient: '12 skewers for grilling', recipe_id: 8 },
        { ingredient: '2 slices Italian bread', recipe_id: 9 },
        { ingredient: '1 tbsp softened butter, divided', recipe_id: 9 },
        { ingredient: '1 tbsp prepared pesto sauce, divided', recipe_id: 9 },
        { ingredient: '1 slice provolone cheese', recipe_id: 9 },
        { ingredient: '2 slices tomato', recipe_id: 9 },
        { ingredient: '1 slice American cheese', recipe_id: 9 },
        { ingredient: '1/2 cup of dry rolled oats', recipe_id: 10 },
        { ingredient: '1 banana', recipe_id: 10 },
        { ingredient: '14 frozen strawberries', recipe_id: 10 },
        { ingredient: '1 cup soy milk', recipe_id: 10 },
        { ingredient: '1/2 tsp vanilla extract (optional)', recipe_id: 10 },
        { ingredient: '1 1/2 tsp sugar (optional)', recipe_id: 10 },
        { ingredient: '1 cup wheat flour', recipe_id: 11 },
        { ingredient: '1/2 cup cornmeal', recipe_id: 11 },
        { ingredient: '1/4 cup sugar', recipe_id: 11 },
        { ingredient: '1 1/2 tsp baking powder', recipe_id: 11 },
        { ingredient: '1/2 tsp baking soda', recipe_id: 11 },
        { ingredient: '1/4 tsp salt', recipe_id: 11 },
        { ingredient: '3/4 cup half-and-half', recipe_id: 11 },
        { ingredient: '1/2 cup ricotta cheese', recipe_id: 11 },
        { ingredient: '2 eggs', recipe_id: 11 },
        { ingredient: '2 tbsp salted butter', recipe_id: 11 },
        { ingredient: '1 tsp lemon extract', recipe_id: 11 },
        { ingredient: '6 eggs', recipe_id: 12 },
        { ingredient: '1/4 cup pan-fried/cooked bacon', recipe_id: 12 },
        { ingredient: '2 tbsp salted butter', recipe_id: 12 },
        { ingredient: '3 slices American cheese', recipe_id: 12 },
        { ingredient: '1/4 tsp salt', recipe_id: 12 },
        { ingredient: '1/4 tsp pepper', recipe_id: 12 },
        { ingredient: '6 flour tortillas', recipe_id: 12 },
        { ingredient: '1 cup salsa', recipe_id: 12 },
      ]);
    });
};
