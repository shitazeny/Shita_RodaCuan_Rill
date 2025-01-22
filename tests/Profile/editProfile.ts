import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightEditProfilPage {
  readonly page: Page;
  readonly EditProfil: Locator;
  readonly cekEditProfil: Locator;
  readonly NoKTP: Locator;
  readonly Nama: Locator;
  readonly Alamat: Locator;
  readonly SimpanProfil: Locator;
  readonly Telepon: Locator;
  readonly HP: Locator;
  readonly SetelahSimpanProfil: Locator;

  constructor(page: Page) {
    this.page = page;
    this.EditProfil = page.locator('button', { hasText: 'Edit' });
    this.cekEditProfil = page.locator('h2', { hasText: 'Profil Pembeli' });

    this.NoKTP = page.getByLabel('No. KTP');
    this.Nama = page.getByLabel('Nama');
    this.Alamat = page.getByLabel('Alamat');
    this.Telepon = page.getByLabel('Telepon');
    this.HP = page.getByLabel('HP');

    this.SimpanProfil = page.getByTestId('buttonSimpanProfil');
    this.SetelahSimpanProfil = page.locator('h2', { hasText: 'Profil Pembeli'});
  }

  async ProfilEdit() {
    const NoKTP = faker.string.numeric(10);
    const Nama = faker.person.fullName();
    const Alamat = faker.address.city();

    await this.EditProfil.click();

    // await this.NoKTP.fill(NoKTP);
    await this.Nama.fill(Nama);
    // await this.Alamat.fill(Alamat);

    await this.SimpanProfil.click();
    // await expect(this.page).toHaveURL('http://127.0.0.1:8000/user/profile');
    await expect(this.SetelahSimpanProfil).toBeVisible();
  }
}
