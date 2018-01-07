# Tasks

> Development plan

## Figure out why SpeakEasy TOTP token doesn't match Authenticator token

Google Authenticator and Microsoft Authenticator, when set up using the same secret as
SpeakEasy, both give matching and working tokens, but SpeakEasy gives a different, broken
token which doesn't seems to be too old or too new, just completely different.

[The GitHub issue](https://github.com/speakeasyjs/speakeasy/issues/102).

## Move downloaded invoices to a given directory

`a href` indicates the file name so we can move the files once all downloads complete.

## Follow along with the headless download issue

[The headless download GitHub issue](https://github.com/GoogleChrome/puppeteer/issues/299)

This combined with automatic 2FA might make this usable as a `cron` job.

## Do not submit the log in form with missing or blank `userName` or `passphrase`

## Do not submit the 2FA token form with missing or blank `totpSecret`

## Detail how to obtain the `totpSecret` value from GitHub
