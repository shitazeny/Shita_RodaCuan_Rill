import { test, expect } from '@playwright/test';
import { PlaywrightSignInPage } from './auth/signin';
import { PlaywrightSignUpPage } from './auth/signup';
import { PlaywrightDashboardPage } from './dashboard/dashboard';
import { PlaywrightDetailProdukPage } from './dashboard/detailProduk';
import { PlaywrightNavbarPage } from './dashboard/navbarMenu';
import { PlaywrightEditProfilPage } from './Profile/editProfile';
import { PlaywrightEditCashPage } from './Riwayat/editCash';
import { PlaywrightEditKreditPage } from './Riwayat/edtiKredit';
import { PlaywrightHapusCashPage } from './Riwayat/hapusCash';
import { PlaywrightHapusKreditPage } from './Riwayat/hapusKredit';

test.describe('RodaCuan-e2e', () => {
  let SignInPage: PlaywrightSignInPage;
  let SignUpPage: PlaywrightSignUpPage;
  let DashPage: PlaywrightDashboardPage;
  let DetailPage: PlaywrightDetailProdukPage;
  let NavPage: PlaywrightNavbarPage;
  let EditProfilPage: PlaywrightEditProfilPage;
  let CashPage: PlaywrightEditCashPage;
  let KreditPage: PlaywrightEditKreditPage;
  let HapusCashPage: PlaywrightHapusCashPage;
  let HapusKreditPage: PlaywrightHapusKreditPage;

  test.beforeEach(async ({ page }) => {
    SignInPage = new PlaywrightSignInPage(page);
    SignUpPage = new PlaywrightSignUpPage(page);
    DashPage = new PlaywrightDashboardPage(page);
    DetailPage = new PlaywrightDetailProdukPage(page);
    NavPage = new PlaywrightNavbarPage(page);
    EditProfilPage = new PlaywrightEditProfilPage(page);
    CashPage = new PlaywrightEditCashPage(page);
    KreditPage = new PlaywrightEditKreditPage(page);
    HapusCashPage = new PlaywrightHapusCashPage(page);
    HapusKreditPage = new PlaywrightHapusKreditPage(page);

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
    await DetailPage.BuyingMotorCash(new Date('2025-01-18'), 110000000);
    await DetailPage.AlertCash();
  });
  
  test('test buy new bike with credit payment', async ({ page }) => {
    await DashPage.goToBeliMotor();
    await DetailPage.BuyingMotorKredit( 110000000, 10000000, 210000000);
    await DetailPage.LanjutanBuyingKredit();
    await expect(page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    await DetailPage.CetakCash();
  });


  test('test Navbar Home Menu', async({page}) => {
    await NavPage.goToMenuHome();
  });

  test('test Navbar Beli Menu', async({page}) => {
    await NavPage.goToBeli();
    await NavPage.goToMotorBaru();

    await NavPage.goToBeliBekas();
    await NavPage.goToMotorBekas();

    await NavPage.goToBeliListrik();
    await NavPage.goToMotorListrik();
  });

  test('test Navbar Bantuan Menu', async({page}) => {
    await NavPage.clickBantuan();
    await page.goto('http://127.0.0.1:8000/user/motorlistrik');
  });

  test('test Navbar Hai, shita Profile Menu', async({page}) => {
    await NavPage.clickProfil();
    await NavPage.goToProfil();
    await EditProfilPage.ProfilEdit();
  });

  test('test Navbar Hai, shita Riwayat Cash Menu', async({page}) => {
    await NavPage.clickRiwayatCash();
    await NavPage.goToRiwayatCash();
    await CashPage.EditRiwayatCash(new Date('2025-01-20'), 120000000);
    await HapusCashPage.HapusRiwayatCash();
  });

  test('test Navbar Hai, shita Riwayat Kredit Menu', async({page}) => {
    await NavPage.goToRiwayatKredit();
    await KreditPage.EditRiwayatKredit();
    await HapusKreditPage.HapusRiwayatKredit();
    await page.goto('http://127.0.0.1:8000/user/RiwayatPembelianKredit');
  });

  test('test Navbar Hai, shita Logout Menu', async({page}) => {
    await NavPage.clickLogout();
    await NavPage.goToLoginfromLogout();
  });
  
});