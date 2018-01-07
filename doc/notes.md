# Notes

> Development log

## 2018-01-07

Implemented generating a TOTP token from a shared secret key obtained from GitHub 2FA settings page and
filling that in automatically when logging into GitHub.

For some reason the token doesn't match the token generated from the same secret from either
Google Authenticator or Microsoft Authenticator, where the two match and SpeakEasy is the odd one out.

## 2018-01-05

Implemented scraping invoices by loading GitHub, prefilling credentials from `secrets.mjs` and downloading
the invoices to Downloads (Chromium's default).

Posted the project as a [Show HN](https://news.ycombinator.com/item?id=16081655).
