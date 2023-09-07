chrome.contextMenus.onClicked.addListener(handleContextMenuClick);

const VOCAB_VAULT_CONTEXT_MENU_ID = '__VOCAB_VAULT_CONTEXT_MENU_ID';

function handleContextMenuClick(info, tab) {
  console.log('The context menu was clicked.');
  console.log(info);
  console.log(tab);
}

chrome.runtime.onInstalled.addListener(function () {
  let thing = chrome.contextMenus.create(
    {
      title: 'Save selection [Vocab Vault]',
      contexts: ['selection'],
      id: VOCAB_VAULT_CONTEXT_MENU_ID,
    },
    function () {
      if (chrome.runtime.lastError) {
        console.log(
          'Error creating context menu for Vocab Vault:',
          chrome.runtime.lastError.message
        );
      }
    }
  );

  console.log('Thing:', thing);
});
