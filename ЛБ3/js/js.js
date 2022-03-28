for (let numerator = 2; numerator < 10; ++numerator) {
    for (let denominator = 1; denominator < 10; ++denominator) {
        let res=`${numerator} x ${denominator} = ${numerator * denominator}`
        console.log(res);
        document.write(`${res} <br>`)
    }
}

