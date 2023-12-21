function fibonacci(n) {
    let a = 0, b = 1, f = 1;
    for(let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}
console.log(fibonacci(1)); // Deve retornar 1
console.log(fibonacci(5)); // Deve retornar 5
console.log(fibonacci(10)); // Deve retornar 55
