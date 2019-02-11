var string = "*";

for (i = 0; i < 9; i++) {
    
    console.log(string)
    if (i < 4) {
        string += "**";
    } else {
        string = string.slice (0, string.length - 2)
    }
}