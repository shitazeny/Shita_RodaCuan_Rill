import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDashboardPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly cekHeader: Locator;
  readonly navbar: Locator;
  readonly navbarLinks: { [key: string]: Locator };
  readonly HomeHeader: Locator;
  readonly potoSwipe: Locator;
  readonly motorCard: Locator;
  readonly recruitmentTable: Locator;
  readonly beliButton: Locator;
  readonly cekBeliButton: Locator;
  readonly cekBeliPage: Locator;
  readonly formCash: Locator;
  readonly closeForm: Locator;
  readonly formKredit: Locator;
  readonly closeFormKredit: Locator;
  readonly cekHomeMenu: Locator;


  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('button', { hasText: 'Login' });
    this.cekHeader = page.locator('h2').filter({ hasText: /Motor Baru Paling Laris/i });

    this.navbar = page.locator('.navbar');
    this.navbarLinks = {
      Home: this.navbar.locator('a', { hasText: 'Home' }),
      Beli: this.navbar.locator('a', { hasText: 'Beli'}),
      Bantuan: this.navbar.locator('a', { hasText: 'Bantuan' }),
    };
    this.potoSwipe = page.locator('.swiper'); 
    this.HomeHeader = page.locator('text=Motor Baru Paling Laris');
    this.motorCard = page.locator('.product', { hasText: 'Yamaha R125' });
    this.beliButton = page.locator('div.product:has-text("Yamaha R125") a:has-text("Beli")');
    this.cekBeliButton = page.locator('h3', { hasText: 'Detail Produk' });
    this.cekBeliPage = page.locator('a', { hasText: 'Bayar Cash'});

    this.formCash = page.locator('a', { hasText: 'Bayar Cash' });
    this.closeForm = page.locator('#modalCashBaru button[type="button"].btn-close[data-bs-dismiss="modal"][aria-label="Close"]');

    this.formKredit = page.locator('a', { hasText: 'Bayar Kredit' });
    this.closeFormKredit = page.locator('#modalKreditBaru button[type="button"].btn-close[data-bs-dismiss="modal"][aria-label="Close"]');

    this.cekHomeMenu = page.locator('text=Motor Baru Paling Laris');
  }

  async home() {
    await expect(this.cekHeader).toBeVisible();
  }

  async gotoLink(linkName: string) {
    const link = this.page.locator(`a:has-text("${linkName}")`);
  
    const isLinkVisible = await link.isVisible();
    if (!isLinkVisible) {
      throw new Error(`Link dengan nama "${linkName}" tidak ditemukan di navbar/sidebar.`);
    }
  
    await link.click();
    if (linkName === 'Dashboard') {
      await expect(this.HomeHeader).toBeVisible();
    } else {
      
      const expectedUrl = new RegExp(linkName.toLowerCase());
      await expect(this.page).toHaveURL(expectedUrl);
    }
  }
  
  async checkNavbar() {
    await expect(this.navbar).toBeVisible();
    for (const [key, link] of Object.entries(this.navbarLinks)) {
      await expect(link).toBeVisible();
    }
  }

  async checkPotoSwipe() {
    await expect(this.potoSwipe).toBeVisible();
  }

  async checkText() {
    await expect(this.HomeHeader).toBeVisible();
  }

  async checkMotorCard() {
    await expect(this.motorCard).toBeVisible();
  }

  async goToBeliMotor() {
    await this.beliButton.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    await expect(this.cekBeliButton).toBeVisible();
  }

  async BuyingMotorCash() {
    await this.formCash.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');

    await this.closeForm.waitFor({ state: 'visible' });
    await this.closeForm.click();
    const modal = this.page.locator('#modalCashBaru');
    await expect(modal).toBeHidden();
  }

  async BuyingMotorKredit() {
    await this.formKredit.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');

    await this.closeFormKredit.waitFor({ state: 'visible' });
    await this.closeFormKredit.click();
    const modal = this.page.locator('#modalKreditBaru');
    await expect(modal).toBeHidden();
  }

  async goToMenuHome() {
    await this.navbarLinks.Home.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/home');
    await expect(this.cekHomeMenu).toBeVisible();
  }
}