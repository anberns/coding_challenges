const obj = {
  yo: "mama",
  tu: "mama",
  "his": "papa",
  "my": "papa"
}

const obj2 = obj;
const obj3 = {...obj2,
  "my": "brother"
};

console.log(obj2);
obj2["yo"] = "homey";
console.log(obj2)
console.log(obj3)