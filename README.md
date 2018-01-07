# Scrape GitHub Invoices

GitHub doesn't have an API for downloading invoices (as confirmed by GitHub support).

This script uses Google's Puppeteer to fire up a Chromium instance, log you in and enumerate and download invoices
from [the billing page in account settings](https://github.com/settings/billing).

Obviously a dedicated API would be much more straightforward and much less error-prone, but until we have that
(and for non-enterprise users also), this is still much better than a manual process.

## Running

**Prerequisites:**

- Node 9.0.3+
- Yarn 1.0.0+

```sh
# Fill in your details or leave fields blank in order to type them in yourself
echo "export default { userName: '', passphrase: '' }" > secrets.mjs # Git ignored
yarn start
# Enter the GitHub 2FA code
# Find invoices in the Downloads directory
```

## Licensing

This project is licensed under the terms of the [MIT license](LICENSE.md).

## Contributing

See [development plan](doc/tasks.md).

## Studying

See [development log](doc/notes.md).
