function sum(arr)
{
    let sum =0;
    for(let i =0; i<arr.length; i++)
    {
        sum=sum+arr[i];

    }
    return sum;
    
}
console.log(sum([10,30,10]));