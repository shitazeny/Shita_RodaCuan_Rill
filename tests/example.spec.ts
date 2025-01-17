import { test, expect } from '@playwright/test';
import { PlaywrightSignInPage } from './auth/signin';
import { PlaywrightSignUpPage } from './auth/signup';
import { PlaywrightDashboardPage } from './dashboard/dashboard';
import { before } from 'node:test';

test.describe('RodaCuan-e2e', () => {
  let SignInPage: PlaywrightSignInPage;
  let SignUpPage: PlaywrightSignUpPage;
  let DashPage: PlaywrightDashboardPage;

  test.beforeEach(async ({ page }) => {
    SignInPage = new PlaywrightSignInPage(page);
    SignUpPage = new PlaywrightSignUpPage(page);
    DashPage = new PlaywrightDashboardPage(page);

    await page.goto('http://127.0.0.1:8000/login');

    await SignUpPage.toRegisterPage();

    await SignInPage.toLoginPage();
    await SignInPage.inputLogin('shita@gmail.com', 'shita123');
    await expect(page).toHaveURL('http://127.0.0.1:8000/home');
  });

  test('User Dashboard Page', async({page}) => {
    await DashPage.home();
    await DashPage.checkPotoSwipe();
    await DashPage.checkText();
    await DashPage.checkMotorCard();
    await DashPage.goToBeliMotor();

    await DashPage.BuyingMotorCash();
    await DashPage.BuyingMotorKredit();
    await DashPage.goToMenuHome();
  });
  
});