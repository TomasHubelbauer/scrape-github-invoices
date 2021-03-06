import puppeteer from 'puppeteer';
import speakeasy from 'speakeasy';
import secrets from './secrets';

async function run() {
	const headless = true;
	const browser = await puppeteer.launch({ headless, slowMo: 10 });
	const page = (await browser.pages())[0];
	await page.goto('https://github.com/settings/billing');
	console.log('Navigated to the login screen.');

	await page.focus('#login_field');
	await page.keyboard.type(secrets.userName);
	await page.focus('#password');
	await page.keyboard.type(secrets.passphrase);
	await page.click('input[type=submit]');
	console.log('Submitted the login form.');

	await page.waitForSelector('#otp'); // This is AJAX navigation.
	await page.focus('#otp');
	await page.keyboard.type(speakeasy.totp({ secret: secrets.secret, encoding: 'base32' }));
	await page.click('button[type=submit]');
	console.log('Filled in the TOTP token.');

	await page.waitForSelector('.billing-section'); // This is AJAX navigation.
	console.log('Entered the billing section.');

	const downloadAs = await page.$$('.boxed-group-table > tbody > tr a');
	console.log(`Found ${downloadAs.length} invoice download links.`);
	for (const downloadA of downloadAs) {
		await downloadA.click();
		console.log('Clicked an invoice download link.');
	}

	console.log(`Downloaded ${downloadAs.length} invoices to your Downloads directory.`);
	await browser.close();
}

run();
