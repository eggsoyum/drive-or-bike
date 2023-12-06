let myBike: Sprite = null
let myCar: Sprite = null
let eligible_driver = false
let age = game.askForNumber("How old are you?", 2)
if (age >= 16) {
    eligible_driver = game.ask("Press A if you have a license" + controller.A.isPressed())
    if (eligible_driver) {
        myCar = sprites.create(img`
            . . . . . . . e e e e e . . . . 
            . . . . . e e 2 2 2 2 2 e . . . 
            . . . . e e 2 2 2 2 2 2 2 e . . 
            . . . . e 9 4 2 2 2 2 2 4 b e . 
            . . e e 9 9 4 4 2 2 2 2 4 9 b e 
            . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
            e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
            e 2 2 2 9 9 e e e e e e e 9 9 e 
            e 2 2 2 9 b e b b b e b e b 9 e 
            e 2 e e e e b b b b e b b e b e 
            e e 3 3 e e 2 2 2 2 e 2 2 e e e 
            e 3 3 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e f f f e e e e f f f e e 
            . e e f b c c f e e f b c c f . 
            . . . . b b f . . . . b b f . . 
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
