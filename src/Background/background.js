const storage = chrome.storage.local;

const initialWords = [
  {
    id: 'dfc7e4bc-fe31-46ff-a805-06dfcef89dfa',
    text: 'unique',
    dateCreated: Date.now(),
    pageUrl: 'https://www.merriam-webster.com/dictionary/unique',
    tabTitle: 'Unique Definition & Meaning - Merriam-Webster',
    note: 'This is the first word saved.',
  },
  {
    id: 'e0bac9c9-7a5c-42c3-83c8-189f0dd361ed',
    text: 'superfluous',
    dateCreated: Date.now(),
    pageUrl: 'https://en.m.wiktionary.org/wiki/superfluous',
    tabTitle: 'superfluous - Wiktionary, the free dictionary',
    note: 'This note is superfluous.',
  },
];

const VOCAB_VAULT_CONTEXT_MENU_ID = '__VOCAB_VAULT_CONTEXT_MENU_ID';
chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
chrome.runtime.onInstalled.addListener(createContextMenuItem);
chrome.runtime.onInstalled.addListener(handleOnInstalled);

showAllStoredItems();

async function showAllStoredItems() {
  const result = await storage.get(null);
  console.log(result);
}

function initSettings() {
  storage.set({ settings: { trim: true } });
}

async function initWordDatabase() {
  console.log('Initializing word database...');
  try {
    const storedWords = await storage.get({ words: [] });
    console.log('storedWords:', storedWords);

    if (storedWords.words.length === 0) {
      await storage.set({ words: initialWords });
    }

    console.log('Finished initializing word database!');
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}

function handleContextMenuClick(info, tab) {
  saveNewWord(info.selectionText, info, tab);
}

function createContextMenuItem() {
  chrome.contextMenus.create(
    {
      title: 'Save selection [Word Vault]',
      contexts: ['selection'],
      id: VOCAB_VAULT_CONTEXT_MENU_ID,
    },
    function () {
      if (chrome.runtime.lastError) {
        console.log(
          'Error creating context menu for Word Vault:',
          chrome.runtime.lastError.message
        );
      }
    }
  );
}

async function saveNewWord(text, info, tab) {
  try {
    const { words } = await storage.get('words');
    const newWord = {
      id: crypto.randomUUID(),
      text,
      dateCreated: Date.now(),
      pageUrl: info.pageUrl,
      tabTitle: tab.title,
      note: '',
    };

    words.push(newWord);

    await storage.set({ words: words });
  } catch (err) {
    console.error('Error saving new word:', err);
  }
}

async function handleOnInstalled(details) {
  const reason = details.reason;

  if (reason === chrome.runtime.OnInstalledReason.UPDATE) {
    handleOnUpdate();
  }

  if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log('Handling install...');
    handleOnInstall();
  }
}

function handleOnInstall() {
  console.log('Handling install...');

  initSettings();
  initWordDatabase();
}

async function handleOnUpdate() {
  console.log('Handling update...');
}
