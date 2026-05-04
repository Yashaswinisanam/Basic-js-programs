const cv=function(s){
    let c=0;
    let v="aeiouAEIOU"
    for (let i of s)
    {
        if (v.includes(i))
        {
            c++;
        }
}
    return c;
}
console.log(cv("sreyas"));
