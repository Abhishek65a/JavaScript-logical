function printPatter(rows)
{
    for(let i=rows;i>=1;i--)
    {
        let row=""
        for (let j = 1; j <=(rows-i) * 2; j++) 
        {
           row +=""
        }
        for (let k = 1; k <= i; k++) 
        {
            row += "* "
        }
        console.log(row);

    }

}
printPatter(5)