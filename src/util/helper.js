const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();

function printdate()
{
    console.log("cureent Date : " + d )
}
module.exports.printDate = printdate

let month = months[d.getMonth()];

function printmonth()
{
    // console.log("cureent Month : " + d.getMonth() )
     console.log("cureent Month : " + month )
}
module.exports.printMonth = printmonth

function getBatchInfo()
{
    // console.log("cureent Month : " + d.getMonth() )
     console.log("Batch Name : Radium \n Week : 3 \n day : 1 \n topic  : Nodejs first day  \n " )
}
module.exports.GetBatch= getBatchInfo