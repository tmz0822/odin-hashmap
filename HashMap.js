import Node from './Node.js';

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  set(key, value) {
    const hashedKey = hash(key);
    const node = new Node(key, value);

    if (this.buckets[hashedKey] != null) {
      // If bucket is not empty, loop through the bucket
      let current = this.buckets[hashedKey];
      while (current.next != null) {
        if (current.key === node.key) {
          current.value = node.value;
          break;
        }
        current = this.buckets[hashedKey].next;
      }

      // If the last element has the same key
      if (current.key === node.key) {
        current.value = node.value;
      } else {
        // Adds the new node
        current.next = node;
      }
    } else {
      // The bucket is empty
      this.buckets[hashedKey] = node;
    }

    if (this.length() > this.capacity * this.loadFactor) {
      this.buckets = this.buckets.concat(new Array(this.capacity));
      this.capacity *= 2;
    }
  }

  get(key) {
    const hashedKey = hash(key);

    let current = this.buckets[hashedKey];
    while (current != null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return null;
  }

  has(key) {
    return this.get(key) == null ? false : true;
  }

  remove(key) {
    const hashedKey = hash(key);
    let current = this.buckets[hashedKey];
    while (current != null) {
      if (current.key === key) {
        this.buckets[hashedKey] = current.next;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  length() {
    let length = 0;

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        let current = bucket;
        while (current !== null) {
          length += 1;
          current = current.next;
        }
      }
    });

    return length;
  }

  clear() {
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  keys() {
    const keys = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        let current = bucket;
        while (current !== null) {
          keys.push(current.key);
          current = current.next;
        }
      }
    });

    return keys;
  }

  values() {
    const values = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        let current = bucket;
        while (current !== null) {
          values.push(current.value);
          current = current.next;
        }
      }
    });

    return values;
  }

  entries() {
    const pairs = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        let current = bucket;
        while (current !== null) {
          pairs.push([current.key, current.value]);
          current = current.next;
        }
      }
    });

    return pairs;
  }
}

export function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode % 16;
}
