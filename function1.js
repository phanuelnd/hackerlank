function sum(arr)
{
    let sum =0;
    for(let i =0; i<arr.length; i++)
    {
        if(i%2 != 0){
        sum=sum+arr[i];
        }

    }
    return sum;
    
}
console.log(sum([33,17,10]));