function fiborek(number)
{

    if (number == 0){ return 0 }
    if (number == 1){ return 1 }
    else 
    {
        return fiborek(number-1) + fiborek(number-2)
    }
}
function fiboiter(number)
{
    var pom1 = 0
    var pom2 = 1
    if (number == 0){ return 0 }
    if (number == 1){ return 1 }
    for (let i=1; i<number; i++)
    {
        pom2 = pom1 + pom2
        pom1 = pom2 - pom1
    }
    return pom2
}

function fibo_rek_time(n)
{
    console.time()
    fiborek(n)
    console.timeEnd()
}
function fibo_iter_time(n)
{
    console.time()
    fiboiter(n)
    console.timeEnd()
}

function fibo_time_tester(n)
{
    for(let i=0; i<n;i++)
    {
        console.log(fibo_rek_time(i),end = " ")
        console.log(fibo_iter_time(i))
    }
}
console.log(fibo_time_tester(10))
