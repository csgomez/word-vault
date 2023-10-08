<!-- GETTING STARTED -->

## About Word Vault

### The extension

Word Vault is a simple extension that gives you the ability to save interesting words that you find online. Along with the word, the url, tab title, and date will also be saved. Once saved, you can then add a small (or long) note to each word.

### Motivation

I can't count how many times I'd come across a word online that I found interesting and wrote it down in some `words.txt` file and then forget about it. What I needed what a centralized and easy-to-access place within the browser to store and view these words and phrases. That's where Word Vault finally came into play.

## Getting the extension

For now, the only method of getting this extension is by downloading the repo and building it yourself. In the future, a prebuilt version will be available.

### Instructions

1. Clone the repo
   ```sh
   git clone https://github.com/csgomez/word-vault.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Build the extension
   ```sh
   npm run build
   ```
4. Verify that you have a directory named `dist` at the root of the project.

## Installing the extension onto Chrome

Once you have the Word Vault extension downloaded, all you need to do is install it.

1. Open Chrome and head to [chrome://extensions/](chrome://extensions/)
2. Enable developer mode by toggling the option at the top right
3. Drag and drop the `dist` folder anywhere within Chrome
4. Done!

## Usage

### Saving words

Once installed, you can start using the extension to save words or phrases you find online.

1. Highlight whatever text you want saved
2. Right click
3. Click on 'Save selection [Word Vault]'

### Viewing saved words

#### Enabling the toolbar popup

After installing the extension, it'll likely be hidden within the 'Extensions' icon in Chrome's navigation toolbar (to the right). Click the extensions icon and locate 'Word Vault'. Then, just click on the pin to the right of Word Vault to pin it.

#### Using the toolbar popup

Just click on the Word Vault icon and you should see all your saved words!

## Special Thanks

- [CRXJS](https://github.com/crxjs/chrome-extension-tools) - Chrome extension bundler that made starting and developing this project incredibly easy.
