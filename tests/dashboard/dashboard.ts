import { expect, type Locator, type Page } from '@playwright/test';
import exp from 'constants';

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
  readonly cekMotorBaru: Locator;
  readonly cekBaruPage: Locator;
  readonly cekMotorBekas: Locator;
  readonly cekBekasPage: Locator;
  readonly CetakLinks: { [key: string]: Locator };;
  readonly ButtonGroup: Locator;
  readonly cekMotorListrik: Locator;
  readonly cekListrikPage: Locator;
  readonly cekBantuan: Locator;
  readonly cekClickProfil: Locator;
  readonly cekProfilePage: Locator;
  readonly cekClickRiwayat: Locator;
  readonly cekClickLogout: Locator;
  readonly cekRiwayatPage: Locator;
  readonly cekRiwayatKreditPage: Locator;
  readonly ButtonRiwayatKredit: Locator;
  readonly cekLoginPage: Locator;
  readonly cekCashCetakPDF: Locator;
  readonly finalCashPDF: Locator;
  readonly Cash_Kode: Locator;
  readonly No_KTP: Locator;
  readonly Motor_Kode: Locator;
  readonly Cash_Tanggal: Locator;
  readonly Cash_Bayar: Locator;
  readonly BeliCashButton: Locator;
  readonly YaPesanButton: Locator;
  readonly SetelahYaPesanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('button', { hasText: 'Login' });
    this.cekHeader = page.locator('h2').filter({ hasText: /Motor Baru Paling Laris/i });

    //Navbar
    this.navbar = page.locator('.navbar');
    this.navbarLinks = {
      Home: this.navbar.locator('a', { hasText: 'Home' }),

      Bantuan: this.navbar.locator('a', { hasText: 'Bantuan' }),

      Beli: this.navbar.locator('a', { hasText: 'Beli' }),
      MotorBaru: this.navbar.locator('a', { hasText: 'Motor Baru' }),
      MotorBekas: this.navbar.locator('a', { hasText: 'Motor Bekas' }),
      MotorListrik: this.navbar.locator('a', { hasText: 'Motor Listrik' }),

      HaiShita: this.navbar.locator('a', { hasText: 'Hai, shita' }),
      Profile: this.navbar.locator('a', { hasText: 'Profile' }),
      Riwayat: this.navbar.locator('a', { hasText: 'Riwayat' }),
      Logout: this.navbar.locator('a', { hasText: 'Logout' }),
    };
    //Navbar Home Menu
    this.cekHomeMenu = page.locator('text=Motor Baru Paling Laris');

    //Navbar Beli Menu
    this.cekMotorBaru = page.getByLabel('Beli').getByRole('link', { name: 'Motor Baru' });
    this.cekMotorBekas = page.getByLabel('Beli').getByRole('link', { name: 'Motor Bekas' });
    this.cekMotorListrik = page.getByLabel('Beli').getByRole('link', { name: 'Motor Listrik' });

    //Navbar Bantuan Menu
    this.cekBantuan = page.getByLabel('Bantuan');

    //Navbar Hai, shita Menu
    this.cekClickProfil = page.getByLabel('Hai, shita').getByRole('link', { name: 'Profile' });
    this.cekClickRiwayat = page.getByLabel('Hai, shita').getByRole('link', { name: 'Riwayat' });
    this.cekClickLogout = page.getByLabel('Hai, shita').getByRole('link', { name: 'Logout' });

    //Navbar Beli Menu After Click
    this.cekBaruPage = page.locator('h2', { hasText: 'Motor Baru' });
    this.cekBekasPage = page.locator('h2', { hasText: 'Motor Bekas' });
    this.cekListrikPage = page.locator('h2', { hasText: 'Motor Listrik' });

    //Navbar Hai, shita Menu After Click
    this.cekProfilePage = page.locator('h2', { hasText: 'Profil Pembeli' });
    this.cekRiwayatPage = page.locator('h2', { hasText: 'Data Transaksi Cash' });
    this.cekRiwayatKreditPage = page.locator('h2', { hasText: 'Data Transaksi Kredit' });
    this.cekLoginPage = page.locator('h1', { hasText: 'Selamat Datang di RodaCuan' });
    this.ButtonRiwayatKredit = page.locator('a', { hasText: 'Data Kredit' });

    //Home
    this.potoSwipe = page.locator('.swiper');
    this.HomeHeader = page.locator('text=Motor Baru Paling Laris');
    this.motorCard = page.locator('.product', { hasText: 'Yamaha R125' });
    this.beliButton = page.locator('div.product:has-text("Yamaha R125") a:has-text("Beli")');

    //Detail Motor
    this.cekBeliButton = page.locator('h3', { hasText: 'Detail Produk' });
    this.ButtonGroup = page.locator('.btn-group');
    this.CetakLinks = {
      Cetak: page.locator('a.btn-warning:has-text("Cetak")'),
      CetakCash: page.locator('a.dropdown-item:has-text("Cetak Pembelian Cash")'),
      CetakKredit: page.locator('a.dropdown-item:has-text("Cetak Pembelian Kredit")'),
    };
    this.cekCashCetakPDF = page.getByLabel('Cetak').getByRole('link', { name: 'Cetak Pembelian Cash' });
    this.finalCashPDF = page.locator('h1', { hasText: 'Bukti Pemesanan Motor' });

    //Cash
    this.formCash = page.locator('a', { hasText: 'Bayar Cash' });
    this.closeForm = page.locator('#modalCashBaru button[type="button"].btn-close[data-bs-dismiss="modal"][aria-label="Close"]');

    //Kredit
    this.formKredit = page.locator('a', { hasText: 'Bayar Kredit' });
    this.closeFormKredit = page.locator('#modalKreditBaru button[type="button"].btn-close[data-bs-dismiss="modal"][aria-label="Close"]');

    //Input Pembelian Motor Cash
    this.Cash_Kode = page.getByLabel('Id Cash');
    this.No_KTP = page.getByLabel('No. KTP');
    this.Motor_Kode = page.getByLabel('Id Motor');
    this.Cash_Tanggal = page.getByLabel('Tanggal Pemesanan Cash');
    this.Cash_Bayar = page.getByLabel('Bayar');
    this.BeliCashButton = page.locator('button', { hasText: 'Pesan Cash' });

    this.YaPesanButton = page.locator('.swal2-confirm');
    this.SetelahYaPesanButton = page.locator('h3', { hasText: 'Detail Produk' });
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
    await expect(this.cekBeliButton).toBeVisible();
  }

  async BuyingMotorCash(cash_kode: string, pembeli_No_KTP: string, motor_kode: string, cash_tanggal: Date, cash_bayar: number) {
    await this.formCash.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
    await this.closeForm.waitFor({ state: 'visible' });
    await this.Cash_Kode.fill(cash_kode);
    await this.No_KTP.fill(pembeli_No_KTP);
    await this.Motor_Kode.fill(motor_kode);
    const formattedDate = cash_tanggal.toISOString().split('T')[0]; 
    await this.Cash_Tanggal.fill(formattedDate);

    const formattedCashBayar = cash_bayar.toString();
    await this.Cash_Bayar.fill(formattedCashBayar);

    await this.BeliCashButton.click();
  }

  async AlertCash() {
    await this.YaPesanButton.waitFor({ state: 'visible' });
    await this.YaPesanButton.click();
    // await this.page.getByRole('button', { name: 'Ya, pesan' }).click();
    await this.page.goto('http://127.0.0.1:8000/user/motorbaru_desk');
    await expect(this.SetelahYaPesanButton).toBeVisible();
  }

  //Cetak Report
  //Cash  
  // async CetakCash() {
  //   await this.CetakLinks.Cetak.click();
  //   await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');
  // }

  // async goToCetakCash() {
  //   await this.CetakLinks.CetakCash.click();
  //   await this.page.goto('http://127.0.0.1:8000/user/motorbaru_desk/cetakpdf', {
  //     waitUntil: 'domcontentloaded', 
  //     timeout: 60000 
  //   });
  //   await expect(this.finalCashPDF).toBeVisible();
  // }

  //Beli Kredit
  async BuyingMotorKredit() {
    await this.formKredit.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru_desk');

    await this.closeFormKredit.waitFor({ state: 'visible' });
    await this.closeFormKredit.click();
    const modal = this.page.locator('#modalKreditBaru');
    await expect(modal).toBeHidden();
  }

  //Menu Home
  async goToMenuHome() {
    await this.navbarLinks.Home.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/home');
    await expect(this.cekHomeMenu).toBeVisible();
  }

  //Menu Beli
  //Motor Baru
  async goToBeli() {
    await this.navbarLinks.Beli.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/home');
    await expect(this.cekMotorBaru).toBeVisible();
  }
  async goToMotorBaru() {
    await this.navbarLinks.MotorBaru.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbaru');
    await expect(this.cekBaruPage).toBeVisible();
  }
  //Motor Bekas
  async goToBeliBekas() {
    await this.navbarLinks.Beli.click();
    await expect(this.cekMotorBekas).toBeVisible();
  }
  async goToMotorBekas() {
    await this.navbarLinks.MotorBekas.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorbekas');
    await expect(this.cekBekasPage).toBeVisible();
  }
  //Motor Listrik
  async goToBeliListrik() {
    await this.navbarLinks.Beli.click();
    await expect(this.cekMotorListrik).toBeVisible();
  }
  async goToMotorListrik() {
    await this.navbarLinks.MotorListrik.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/motorlistrik');
    await expect(this.cekListrikPage).toBeVisible();
  }

  //Menu Bantuan
  async clickBantuan() {
    await this.navbarLinks.Bantuan.click();
    await expect(this.page).toHaveURL('https://api.whatsapp.com/qr/54C5C2GI5AEGL1?autoload=1&app_absent=0');
  }

  //Menu Hai, shita 
  //Profile
  async clickProfil() {
    await this.navbarLinks.HaiShita.click();
    await expect(this.cekClickProfil).toBeVisible();
  }
  async goToProfil() {
    await this.navbarLinks.Profile.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/profile');
    await expect(this.cekProfilePage).toBeVisible();
  }

  //Menu Riwayat
  //Cash
  async clickRiwayatCash() {
    await this.navbarLinks.HaiShita.click();
    await expect(this.cekClickRiwayat).toBeVisible();
  }
  async goToRiwayatCash() {
    await this.navbarLinks.Riwayat.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelian');
    await expect(this.cekRiwayatPage).toBeVisible();
  }

  //Kredit
  async goToRiwayatKredit() {
    await this.ButtonRiwayatKredit.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/RiwayatPembelianKredit');
    await expect(this.cekRiwayatKreditPage).toBeVisible();
  }

  //Menu Logout
  async clickLogout() {
    await this.navbarLinks.HaiShita.click();
    await expect(this.cekClickLogout).toBeVisible();
  }
  async goToLoginfromLogout() {
    await this.navbarLinks.Logout.click();
    await expect(this.page).toHaveURL('http://127.0.0.1:8000/login', { timeout: 30000 });
    await expect(this.cekLoginPage).toBeVisible({ timeout: 30000 });
}

}