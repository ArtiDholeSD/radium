let name=" Arti Dhole "
function trim()
{
    console.log("My Name is : " + name )
    console.log("My trimmed Name is : " + name.trim() )
}
module.exports.Trim = trim

function lower()
{
    console.log("My lower case  Name is : " + name.toLocaleLowerCase() )
}
module.exports.Lower = lower

function upper()
{
    console.log("Uppercase : " + name.toLocaleUpperCase() )
}
module.exports.Upper =  upper
