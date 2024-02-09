class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash; 
    }
    set(key, value) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
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
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
            
        }
        return keysArray;
    }
    size() {
        let counter = 0;
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                counter++;
            }
        }
        return counter;
    }
    exists(key) {
        if(this.data[key]) {
            return true;
        }
        return false;
    }
}

const myHashTable = new HashTable(50);
fillHashTable(25);
const keys = myHashTable.keys();
const size = myHashTable.size();
// helper functions

function fillHashTable(int) {
    for (let i = 0; i < int; i++) {
        rand1 = generateRandomString(10);
        rand2 = generateRandomString(10);
        myHashTable.set(rand1, rand2);    
    }
}

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}