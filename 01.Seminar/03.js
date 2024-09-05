function counter(n) {
    console.log(n);
    setTimeout(() => counter(n+1), 0); 
}

counter(0);

setTimeout(function() {
    console.log("done");
    process.exit();
}, 1000);