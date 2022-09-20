// 5 kyu Can you get the loop?

function loopSize(node) {
    let turtle = node
    let rabbit = node
    do{
        turtle= turtle.getNext()
        rabbit = rabbit.getNext().getNext()
    }
    while(turtle != rabbit)
    let count = 0
    do {
        ++ count
        rabbit = rabbit.getNext()
    }
    while(turtle != rabbit)
    return count
}