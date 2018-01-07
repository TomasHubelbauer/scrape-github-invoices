# Notes

> Development log

## 2017-01-07 continued

Inspected how to approach redireting downloads to a specific directory.

### `await page._client.send('Page.setDownloadBehavior', …)`

Puppeteer doesn't yet support the
[`setDownloadBehavior`](https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-setDownloadBehavior)
Chrome DevTools protocol method, but we can invoke it like this:

```js
await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './'})
```

Unfortunately for me it returns *Error - path too long*,
[as I've commented on the issue](https://github.com/GoogleChrome/puppeteer/issues/299#issuecomment-355829205).

- [Puppeteer issue](https://github.com/GoogleChrome/puppeteer/issues/299)
- [Chromium issue](https://bugs.chromium.org/p/chromium/issues/detail?id=696481)

### `--profile-directory` launch argument

This might work, but it requires the profile directory to be set up beforehand, the set up screen cannot be
automated with Puppeteer (as far as I can tell, it won't allow DevTools to be shown), and the script will fail
with an empty profile directory because `browser.pages` is empty, so no `page`.

The profile directory could be prepared and then versioned for copying to the destination directory, where
all non-downloaded files could then be removed, leaving us with *just* the downloaded files, but that's too
awkward to do. Not worth the effort.

### `fetch(…, { creentials: 'include' })`

In some instances, possibly including this one, we could use the browser JavaScript context to `fetch` the
file and pass along the response, but I won't attempt this, because it's not nice enough. Besides, I like seeing
the links be clicked and the page scrolled as they are so, where this would make that no longer visible.

## 2018-01-07

Implemented generating a TOTP token from a shared secret key obtained from GitHub 2FA settings page and
filling that in automatically when logging into GitHub.

For some reason the token doesn't match the token generated from the same secret from either
Google Authenticator or Microsoft Authenticator, where the two match and SpeakEasy is the odd one out.

## 2018-01-05

Implemented scraping invoices by loading GitHub, prefilling credentials from `secrets.mjs` and downloading
the invoices to Downloads (Chromium's default).

Posted the project as a [Show HN](https://news.ycombinator.com/item?id=16081655).
