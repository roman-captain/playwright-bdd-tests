import { Given, When, Then } from '../../src/fixtures/pages.fixture';

Given('user is on the home page', async ({ homePage }) => {
  await homePage.open();
});

When('user navigates to Products page', async ({ homePage }) => {
  await homePage.navigateToProducts();
});

When('user navigates to Login page', async ({ homePage }) => {
  await homePage.navigateToLogin();
});

When('user searches for {string}', async ({ productsPage }, product: string) => {
  await productsPage.searchProduct(product);
});

Then('search results for {string} are displayed', async ({ productsPage }, product: string) => {
  await productsPage.assertSearchResultsVisible(product);
});

When('user adds the first product to cart', async ({ productsPage }) => {
  await productsPage.addFirstProductToCart();
});

When('user continues shopping', async ({ productsPage }) => {
  await productsPage.continueShoppingAfterAdd();
});

When('user goes to cart', async ({ productsPage }) => {
  await productsPage.goToCart();
});

Then('cart contains {int} product', async ({ cartPage }, _count: number) => {
  await cartPage.assertCartNotEmpty();
});
