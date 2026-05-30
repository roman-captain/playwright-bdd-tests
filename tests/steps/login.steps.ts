import { When, Then } from '../../src/fixtures/pages.fixture';

When(
  'user logs in with email {string} and password {string}',
  async ({ loginPage }, email: string, password: string) => {
    await loginPage.login(email, password);
  }
);

Then('login error message is displayed', async ({ loginPage }) => {
  await loginPage.assertLoginError();
});

Then('user is logged in successfully', async ({ loginPage }) => {
  await loginPage.assertLoggedIn();
});
