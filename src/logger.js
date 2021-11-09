function log(name)
{

 console.log("My name is "+name)

}
log('Arti')
function welcome()
{
 console.log("welcome to my App, I am Arti from Functionup ")

}
let new_Url="www.myappfuctionup.com"
// function url(new_Url)
function url()
{
    console.log("this is my url = " + new_Url)  
}
module.exports.nameLog=log
module.exports.welcomeLog=welcome
module.exports.myUrlLog=url
