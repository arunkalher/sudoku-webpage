let labels=document.querySelectorAll('.small_box')
// array declaration
let arr=[[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
]
function func()
{
    let index=0
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            arr[i][j]=Number(labels[index].value)
            index++
        }
    }
    solve(0,0)
    index=0
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
           
            labels[index].value=String(arr[i][j])
            index++
        }
    }
    

}
function check(row,column,k)
{
    if (row<0 || row>8 || column <0 || column>8)
    return false

    for (let r=0;r<9;r++)
    {
        if (arr[r][column]==k)
        return false
    }
    for (let c=0;c<9;c++)
    {
        if (arr[row][c]==k)
        return false
    }
    row=Number(row-row%3)
    column=Number(column-column%3)

    for (let r=0;r<3;r++)
    {
        for (let c=0;c<3;c++)
        {   
            
            if (arr[r+row][c+column]==k)
            return false
        }
    }

    return true
}
function find_next()
{
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if (arr[i][j]==0)
            return [i,j]
        }
    }
    return [-1,-1]

}
function solve(r,c)
{   console.log(arr)
    if (c==9)
    return solve(r+1,0)
    if(r==9)
    return true
    let result=find_next()
    if (result[0]==-1)
    return true
    r=result[0]
    c=result[1]
    for (let i=1;i<=9;i++)
    {   
        if (check(r,c,i))
        {   arr[r][c]=i
            if (solve(r,c+1))
            return true;
            arr[r][c]=0
        }
    }
    return false
    
}