const http=require("http");
http.createServer(function(request,response){
    // response.write("hello world");
    // response.write("<h1>hello</h1>") //html
    let user={name:"chandu",age:22}
    response.write(JSON.stringify(user)); // to convert object into string
    response.end();
}
).listen(3000)