var displayMsg = name => { console.log(`this is self-invoked function - ${name}`) }

(function() {
    displayMsg('original format');
})();

(() => {
    displayMsg('new style');
})();