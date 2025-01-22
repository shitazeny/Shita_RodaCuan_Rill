import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightNavbarPage {
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
  readonly Paket_Kode: Locator;
  readonly Paket_Harga_Cash: Locator;
  readonly Paket_Uang_Muka: Locator;
  readonly Paket_Jumlah_Cicilan: Locator;
  readonly Paket_Bunga: Locator;
  readonly Paket_Nilai_Cicilan: Locator;
  readonly Kredit_Kode: Locator;
  readonly Pembeli_No_KTP: Locator;
  readonly Motor_KodeKredit: Locator;
  readonly Kredit_Tanggal: Locator;
  readonly Fotokopi_KTP: Locator;
  readonly Fotokopi_KK: Locator;
  readonly Fotokopi_Slip_Gaji: Locator;
  readonly LanjutkanButton: Locator;
  readonly LamanKreditSelanjutnya: Locator;
  readonly PesanKreditButton: Locator;
  readonly YaPesanKredit: Locator;
  readonly SetelahYaPesanKredit: Locator;

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

      HaiShita: this.navbar.getByRole('button', { name: 'Hai, shita' }),
      Profile: this.navbar.locator('a', { hasText: 'Profile' }),
      Riwayat: this.navbar.locator('a', { hasText: 'Riwayat' }),
      Logout: this.navbar.getByRole('link', { name: 'Logout' }),
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