import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';

type PageFixtures = {
  homePage: HomePage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  loginPage: LoginPage;
};

export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
