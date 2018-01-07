# Scrape GitHub Invoices

GitHub doesn't have an API for downloading invoices (as confirmed by GitHub support).

This script uses Google's Puppeteer to fire up a Chromium instance, log you in and enumerate and download invoices
from [the billing page in account settings](https://github.com/settings/billing).

Obviously a dedicated API would be much more straightforward and much less error-prone, but until we have that
(and for non-enterprise users also), this is still much better than a manual process.

**Features:**

- Download all invoices to the Downloads directory
- Sign in using user name, passphrase and 2 factor authentication is automatic
- ([In development](doc/tasks.md)) Move invoices to a given directory after download has completed

## Running

| Prerequisite | Minimal Version | Optimal Version |
|--------------|-----------------|-----------------|
| NodeJS       | ?               | 9.0.3           |
| Yarn         | ?               | 1.3.2           |

Fill in your details in `secrets.mjs` or leave the fields empty in order to fill them in yourself
(only in non-headless mode).

```js
export default {
  userName: 'Tomas@Hubelbauer.net',
  passphrase: '',
  secret: ''
}
```

`secret` is a TOTP secret for GitHub 2FA. You can obtain it by going to GitHub profile settings page
[for 2FA authentication](https://github.com/settings/two_factor_authentication/configure) and when a QA code
is displayed, clicking through for a manual code entry. The code displayed in the popup is the desired value.

Once set up, run `yarn start` and once the script completes, find the invoices in your Downloads directory.

## Licensing

This project is licensed under the terms of the [MIT license](LICENSE.md).

## Contributing

See [development plan](doc/tasks.md).

## Studying

See [development log](doc/notes.md).
