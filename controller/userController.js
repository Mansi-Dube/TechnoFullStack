// exports.register = 
// (req,res)=>{
//     console.log(req.body);
//     res.send('data received')
// }


const userData = [
    {username : 'sam'},
    {username : 'jade'} 
]

exports.getUsers = (req,res)=>{
    console.log(req.name);
    res.json(
        {
            length: userData.length,
            data : userData
        }
    )
}