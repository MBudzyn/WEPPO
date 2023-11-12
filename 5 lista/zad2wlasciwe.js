const stdin = process.stdin;


function petla()
{
console.log("podaj swoje umie urzytkowniku")
stdin.on("data", function(d) {
    console.log("Witaj " + d.toString().trim() );
    process.exit();

})};

petla()