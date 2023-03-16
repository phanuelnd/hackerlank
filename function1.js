// function sum(arr)
// {
//     let sum =0;
//     for(let i =0; i<arr.length; i++)
//     {
//         if(i%2 != 0){
//         sum=sum+arr[i];
//         }

//     }
//     return sum;
    
// }
// console.log(sum([33,17,10,22]));


function smallest(arr)
{
    let min = arr[0];
    let max = arr[0];
    for(let i =0;i<arr.length;i++){
        if(arr[i]<min)
        {
           min = arr[i];
        }
        if(arr[i]>max)
        {
            max = arr[i];
        }

    }
    return min;
}

console.log(smallest([0,10,20,30,40]));