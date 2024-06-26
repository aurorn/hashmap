class HashMap {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
      this.buckets = new Array(initialCapacity).fill(null).map(() => []);
      this.size = 0;
      this.loadFactor = loadFactor;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode %= this.buckets.length;
      }
      return hashCode;
    }
  
    resize() {
      const newBuckets = new Array(this.buckets.length * 2).fill(null).map(() => []);
      this.buckets.forEach(bucket => {
        bucket.forEach(([key, value]) => {
          const index = this.hash(key) % newBuckets.length;
          newBuckets[index].push([key, value]);
        });
      });
      this.buckets = newBuckets;
    }
  
    set(key, value) {
      if (this.size / this.buckets.length >= this.loadFactor) {
        this.resize();
      }
  
      const index = this.hash(key) % this.buckets.length;
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
  
      bucket.push([key, value]);
      this.size++;
    }
  
    get(key) {
      const index = this.hash(key) % this.buckets.length;
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
  
      return null;
    }
  
    has(key) {
      const index = this.hash(key) % this.buckets.length;
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
  
      return false;
    }
  
    remove(key) {
      const index = this.hash(key) % this.buckets.length;
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.size--;
          return true;
        }
      }
  
      return false;
    }
  
    length() {
      return this.size;
    }
  
    clear() {
      this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
      this.size = 0;
    }
  
    keys() {
      const keysArray = [];
      this.buckets.forEach(bucket => {
        bucket.forEach(([key]) => {
          keysArray.push(key);
        });
      });
      return keysArray;
    }
  
    values() {
      const valuesArray = [];
      this.buckets.forEach(bucket => {
        bucket.forEach(([, value]) => {
          valuesArray.push(value);
        });
      });
      return valuesArray;
    }
  
    entries() {
      const entriesArray = [];
      this.buckets.forEach(bucket => {
        bucket.forEach(([key, value]) => {
          entriesArray.push([key, value]);
        });
      });
      return entriesArray;
    }
  }
  
  module.exports = HashMap;
  