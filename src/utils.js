export const storage = chrome.storage.local;

// converts a regular javascript array into a (reasonably) prettified
// json array
export function arrayToPrettyJSON(dataArray) {
  return JSON.stringify(dataArray, null, 2);
}
