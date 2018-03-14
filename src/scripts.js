Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return this.getItem(key) && JSON.parse(this.getItem(key));
}

function shareListeners() {

}

function init() {

    if (!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
        return;
    }
    //else { console.log('IndexedDB supported, I think.'); }

    localStorage.setObject("tabsOpen", 0);

    chrome.tabs.onCreated.addListener(function(tab) {
        incrementTabOpenCount(1);
    });

    chrome.tabs.onRemoved.addListener(function(tab) {
        decrementTabOpenCount();
    });

    updateTabTotalCount();
}

function incrementTabOpenCount(count) {

    if (!count)
        count = 1;

    localStorage.setObject('tabsOpen', localStorage.getObject('tabsOpen') + count);
    updateTabOpenCount();
}

function decrementTabOpenCount() {
    localStorage.setObject('tabsOpen', localStorage.getObject('tabsOpen') - 1);
    updateTabOpenCount();
}

function updateTabOpenCount() {
    //console.log('updateTabOpenCount()');
    chrome.browserAction.setBadgeText({text: localStorage.getObject('tabsOpen').toString()});
    chrome.browserAction.setBadgeBackgroundColor({ "color": [89, 65, 0, 255] });
    var tabsOpen = localStorage.getObject('tabsOpen').toString();
    idbKeyval.set('tabsOpen', tabsOpen);
    //  .then(() => console.log('It worked.'))
    //  .catch(err => console.log('It failed:', err));
    //console.log('updateTabOpenCount() done');
}

function resetTabOpenCount() {
    localStorage.setObject('tabsOpen', 0);
    updateTabOpenCount();
}

function updateTabTotalCount() {
    chrome.windows.getAll({ 'populate': true}, function(windows) {
        windows.each(function(window) {
            incrementTabOpenCount(window.tabs.size());
        });
    });
}

function initPopup() {
    $$('.totalOpen').invoke('update', localStorage.tabsOpen);

    shareListeners();
}
