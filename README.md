# Scrape GitHub Invoices

GitHub doesn't seem to have an API for downloading invoices.

This script uses Google's Puppeteer to fire up a Chromium instance, log you in and enumerate and download invoices
from [the billing page in account settings](https://github.com/settings/billing).

Obviously a dedicated API would be much more straightforward and much less error-prone, but until we have that
(and for non-enterprise users also), this is still much better than a manual process.

## Running

**Prerequisites:**

- Node 9.0.3+
- Yarn 1.0.0+

`node --experimental-modules index.mjs`

## Contributing

See [development plan](doc/tasks.md).

## Studying

See [development log](doc/notes.md).
