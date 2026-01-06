const jwt=require("jsonwebtoken")

function checkToken(req, res, next){
    let token = req.headers["authorization"];

    if (token && token.startsWith("Bearer ")) {
    token = token.slice(7);
}

    if(!token){
        return res.redirect('/login.html')
    }
    try{
        const decoded=jwt.verify(token, "ishija$2")
        req.user= decoded
        next()
    }
    catch (err){
        console.log(err);
        return res.send(`<script> 
            alert("Invalid Token");
            window.location.href="/login.html";
        </script>`)
    }
}

module.exports=checkToken;