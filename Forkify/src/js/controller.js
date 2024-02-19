import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import "core-js";
import "regenerator-runtime/runtime";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();
    // 1. fetching the recipe
    await model.loadRecipe(id);

    // 2. rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
// showRecipe();

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
// window.addEventListener("hashchange", showRecipe);
