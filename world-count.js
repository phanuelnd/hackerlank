function vowelsCount(str)
{
    return str.replace(/[^iuoae]/g,"").length;
}
console.log(vowelsCount("Kabil"));