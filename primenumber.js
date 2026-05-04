function prime(num)
{
    if (num<=1)
    {
        return "not a prime";
    }
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
            {
            return "not a prime";
        }
    }
    return "prime number";
}
console.log(prime(6));