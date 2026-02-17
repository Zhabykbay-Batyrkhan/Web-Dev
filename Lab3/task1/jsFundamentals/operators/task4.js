let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

// prompt всегда возвращает string
alert(a + b); // "12"

// исправление
alert(Number(a) + Number(b)); // 3
