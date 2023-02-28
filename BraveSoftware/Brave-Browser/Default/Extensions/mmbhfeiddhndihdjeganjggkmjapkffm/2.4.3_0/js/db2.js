/**
 * HTML5 Localstorage Utility API
 * @author vedevireddy
 * @type {{dbPut: Function, dbAppend: Function, dbGet: Function, dbDel: Function, dbSupport: Function, dbLog: Function}}
 *
 * Configurations?
 * - 'localStorage' is by default for persistent storage
 * - Replace 'localStorage' with 'localStorage' for session based storage (cleared when tab/browser closed)
 */
var db = {
    set: function (key, value) {
        if (!this.hasSupport()) {
            this.log("can't store");
            return;
        }
        localStorage.setItem(key, value);
    },
    setItem: function (key, value) {
        return this.set(key, value);
    },
    append: function (key, value) {
        if (!this.hasSupport()) {
            this.log("can't store");
            return;
        }

        if (localStorage.getItem(key)) {
            localStorage.setItem(key, localStorage.getItem(key) + "," + value);
        } else {
            localStorage.setItem(key, value);
        }
    },
    getItem: function (key) {
        return this.get(key);
    },
    get: function (key) {
        if (!this.hasSupport()) {
            this.log("No storage support");
            return;
        }

        if (localStorage.getItem(key)) {
            return localStorage.getItem(key);
        } else {
            return null;
        }
    },
    removeItem: function (key) {
        return this.delete(key);
    },
    delete: function (key) {
        return localStorage.removeItem(key);
    },
    hasSupport: function (key) {
        if (typeof(Storage) !== "undefined") return true;
        else return false;
    },
    log: function (log) {
        console.log("db.js# " + log);
    }
};