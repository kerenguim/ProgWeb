class IntegerSet {
    constructor(maxValue) {
      this.maxValue = maxValue;
      this.set = new Array(maxValue + 1).fill(false);
    }
  
    insert(value) {
      if (this.isValid(value)) {
        this.set[value] = true;
      }
    }
  
    remove(value) {
      if (this.isValid(value)) {
        this.set[value] = false;
      }
    }
  
    union(otherSet) {
      if (!(otherSet instanceof IntegerSet) || otherSet.maxValue !== this.maxValue) {
        throw new Error("Conjuntos de tamanho diferente.");
      }
  
      const result = new IntegerSet(this.maxValue);
  
      for (let i = 0; i <= this.maxValue; i++) {
        result.set[i] = this.set[i] || otherSet.set[i];
      }
  
      return result;
    }
  
    intersection(otherSet) {
      if (!(otherSet instanceof IntegerSet) || otherSet.maxValue !== this.maxValue) {
        throw new Error("Conjuntos de tamanho diferente.");
      }
  
      const result = new IntegerSet(this.maxValue);
  
      for (let i = 0; i <= this.maxValue; i++) {
        result.set[i] = this.set[i] && otherSet.set[i];
      }
  
      return result;
    }
  
    difference(otherSet) {
      if (!(otherSet instanceof IntegerSet) || otherSet.maxValue !== this.maxValue) {
        throw new Error("Conjuntos de tamanho diferente.");
      }
  
      const result = new IntegerSet(this.maxValue);
  
      for (let i = 0; i <= this.maxValue; i++) {
        result.set[i] = this.set[i] && !otherSet.set[i];
      }
  
      return result;
    }
  
    toString() {
      return this.set
        .map((value, index) => (value ? index : null))
        .filter((value) => value !== null)
        .join(', ');
    }
  
    isValid(value) {
      return Number.isInteger(value) && value >= 0 && value <= this.maxValue;
    }
  }
  
  const setA = new IntegerSet(10);
  setA.insert(1);
  setA.insert(3);
  setA.insert(5);
  
  const setB = new IntegerSet(10);
  setB.insert(3);
  setB.insert(7);
  
  console.log("Conjunto A:", setA.toString());
  console.log("Conjunto B:", setB.toString());
  
  const unionResult = setA.union(setB);
  console.log("União de A e B:", unionResult.toString());
  
  const intersectionResult = setA.intersection(setB);
  console.log("Interseção de A e B:", intersectionResult.toString());
  
  const differenceResult = setA.difference(setB);
  console.log("Diferença de A e B:", differenceResult.toString());
  
