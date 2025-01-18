import { test, expect } from '@playwright/test';
import { PlaywrightSignInPage } from './auth/signin';
import { PlaywrightSignUpPage } from './auth/signup';
import { PlaywrightDashboardPage } from './dashboard/dashboard';

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

  test('test dashboard page', async({page}) => {
    await DashPage.checkPotoSwipe();
    await DashPage.checkText();
    await DashPage.checkMotorCard();
  });
  
  test('test buy new bike with cash payment', async({page}) => {
    await DashPage.goToBeliMotor();
    await DashPage.BuyingMotorCash('ininii', '32770987651234', 'r125', new Date('2025-01-18'), 110000000);
    await DashPage.AlertCash();
  });
  
  test('test buy new bike with credit payment', async({page}) => {
    await DashPage.goToBeliMotor();
    await DashPage.BuyingMotorKredit();
    // await DashPage.CetakCash();
    // await DashPage.goToCetakCash();
    // await page.goto('http://127.0.0.1:8000/user/motorbaru_desk');
  });

  test('test Navbar Home Menu', async({page}) => {
    await DashPage.goToMenuHome();
  });

  test('test Navbar Beli Menu', async({page}) => {
    await DashPage.goToBeli();
    await DashPage.goToMotorBaru();

    await DashPage.goToBeliBekas();
    await DashPage.goToMotorBekas();

    await DashPage.goToBeliListrik();
    await DashPage.goToMotorListrik();
  });

  test('test Navbar Bantuan Menu', async({page}) => {
    await DashPage.clickBantuan();
    await page.goto('http://127.0.0.1:8000/user/motorlistrik');
  });

  test('test Navbar Hai, shita Menu', async({page}) => {
    await page.goto('http://127.0.0.1:8000/user/motorlistrik');
    await DashPage.clickProfil();
    await DashPage.goToProfil();

    await DashPage.clickRiwayatCash();
    await DashPage.goToRiwayatCash();
    await DashPage.goToRiwayatKredit();

    await DashPage.clickLogout();
    await DashPage.goToLoginfromLogout();
  });

});
