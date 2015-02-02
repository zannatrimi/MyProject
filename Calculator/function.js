/**
 * Created by zannatul.ferdous on 1/27/15.
 */

function c(val)
{
    document.getElementById("demo").value=val;
}

function v(val)
{
    document.getElementById("demo").value+=val;
}

function e()
{
    try
    {
        c(eval(document.getElementById("demo").value))
    }
    catch(e)
    {
        c('Error')
    }
}






