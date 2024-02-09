class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) { // private hash method, returns hash
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash; 
    }
    set(key, value) { // public set method, sets key and value
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) { // public get method, returns value based on key
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    keys() { // public keys method, returns all keys
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
            
        }
        return keysArray;
    }
    size() { // public size method, returns amount of keys
        let counter = 0;
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                counter++;
            }
        }
        return counter;
    }
    exists(key) { // public exists method, returns true if key exists
        if(this.data[key]) {
            return true;
        }
        return false;
    }
}

// create new hash table
const myHashTable = new HashTable(50);
fillHashTable(25);

// fill hash table
const fillAmount = 25;
fillHashTable(fillAmount);

// print hash table infos
const keys = myHashTable.keys();
const size = myHashTable.size();
const colloisons = fillAmount - size;

console.log("There are " + size + " keys in the hash table");
console.log("There are " + colloisons + " colloisons in the hash table")
console.log("The keys are: " + keys);

// TODO : colloisons to fix and/or list

// helper functions

// fill hash table with random strings
function fillHashTable(int) {
    for (let i = 0; i < int; i++) {
        rand1 = generateRandomString(10);
        rand2 = generateRandomString(10);
        myHashTable.set(rand1, rand2);    
    }
}

// generate random string
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}