let myBike: Sprite = null
let myCar: Sprite = null
let eligible_driver = false
let age = game.askForNumber("How old are you?", 2)
if (age >= 16) {
    eligible_driver = game.ask("Press A if you have a license" + controller.A.isPressed())
    if (eligible_driver) {
        myCar = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 d 3 3 3 3 3 3 c 3 . . . 
            . . 3 c d 3 3 3 3 3 3 c c 3 . . 
            . 3 c c d d d d d d 3 c c d 3 d 
            . 3 c 3 a a a a a a a b c d 3 3 
            . 3 3 a b b a b b b a a b d 3 3 
            . 3 a b b b a b b b b a 3 3 3 3 
            . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
            . a a a a a a f a a a f a 3 d d 
            . a a a a a a f a a f a a a 3 d 
            . a a a a a a f f f a a a a a a 
            . a f f f f a a a a f f f a a a 
            . . f f f f f a a f f f f f a . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else {
        myBike = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . 2 . . . . 
            . . . 2 2 2 2 . . . 2 . . . . . 
            . . . . . . 2 . . 2 . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 . . 2 2 . . . . . . 
            . . . . 2 2 . . . 2 . . . . . . 
            . . 2 2 2 . . . . . 2 2 2 . . . 
            . . 2 . 2 . . . . . 2 . 2 . . . 
            . . 2 2 2 . . . . . 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
} else {
    myBike = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . 2 . . . . 
        . . . 2 2 2 2 . . . 2 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 . . 2 2 . . . . . . 
        . . . . 2 2 . . . 2 . . . . . . 
        . . 2 2 2 . . . . . 2 2 2 . . . 
        . . 2 . 2 . . . . . 2 . 2 . . . 
        . . 2 2 2 . . . . . 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
