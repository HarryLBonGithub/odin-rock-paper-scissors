function getComputerChoice(){
    let options = ["rock","paper", "scissors"]

    let roll = Math.floor(Math.random() * options.length)

    return options[roll]
}

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())