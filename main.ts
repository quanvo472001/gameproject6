namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Flies = SpriteKind.create()
    export const Climb = SpriteKind.create()
    export const ClimbRight = SpriteKind.create()
    export const ClimbFire = SpriteKind.create()
    export const ClimbLeft = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Orb = SpriteKind.create()
    export const Burn = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const ClimbCenter = SpriteKind.create()
    export const Trap = SpriteKind.create()
    export const Boulder = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const RockFire = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const TreeFire = SpriteKind.create()
    export const TreeDefault = SpriteKind.create()
    export const BoomBump = SpriteKind.create()
    export const Pet = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const FireMain = SpriteKind.create()
    export const BossFire = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite5, location2) {
    game.splash(blockSettings.readString("Name"), "You lose")
    game.reset()
})
function MoveGroundEnemy () {
    for (let GEnemy of sprites.allOfKind(SpriteKind.Bumper)) {
        if (GEnemy.isHittingTile(CollisionDirection.Left)) {
            GEnemy.vx = randint(30, 60)
            GEnemy.setImage(assets.image`myImage`)
        } else if (GEnemy.isHittingTile(CollisionDirection.Right)) {
            GEnemy.vx = randint(-60, -30)
            GEnemy.setImage(assets.image`myImage1`)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        if (COUNT % 2 != 0) {
            otherSprite.destroy(effects.spray, 200)
            otherSprite.vy = -50
            sprite.vy = -2 * pixelToMeter
            info.changeScoreBy(5)
        } else {
            statusbar.value += -3
        }
    } else {
        statusbar.value += -3
    }
    EndGame()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        if (COUNT % 2 == 0) {
            mySprite.vy = -110
        } else {
            mySprite.vy = -160
        }
    }
})
function CreatClimbEnemy () {
    for (let CEnemyLeft of tiles.getTilesByType(assets.tile`myTile16`)) {
        CLeft = true
        ClimbEnemyLeft = sprites.create(assets.image`myImage8`, SpriteKind.ClimbLeft)
        tiles.placeOnTile(ClimbEnemyLeft, CEnemyLeft)
        tiles.setTileAt(CEnemyLeft, assets.tile`transparency16`)
    }
    for (let CEnemyRight of tiles.getTilesByType(assets.tile`myTile24`)) {
        CRight = true
        ClimbEnemyRight = sprites.create(assets.image`myImage33`, SpriteKind.ClimbRight)
        tiles.placeOnTile(ClimbEnemyRight, CEnemyRight)
        tiles.setTileAt(CEnemyRight, assets.tile`transparency16`)
    }
    for (let CenemyCenter of tiles.getTilesByType(assets.tile`myTile23`)) {
        Ccenter = true
        ClimbEnemyCenter = sprites.create(assets.image`myImage4`, SpriteKind.Climb)
        tiles.placeOnTile(ClimbEnemyCenter, CenemyCenter)
        tiles.setTileAt(CenemyCenter, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flies, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        if (COUNT % 2 != 0) {
            otherSprite.destroy(effects.spray, 200)
            otherSprite.vy = -50
            sprite.vy = -2 * pixelToMeter
            info.changeScoreBy(7)
        } else {
            statusbar.value += -3
        }
    } else {
        statusbar.value += -3
    }
    EndGame()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RockFire, function (sprite, otherSprite) {
    if (RockStatus) {
        animation.runImageAnimation(
        otherSprite,
        assets.animation`myAnim10`,
        100,
        false
        )
        RockStatus = false
    } else {
        otherSprite.destroy()
        tiles.setWallAt(tiles.getTileLocation(14, 46), false)
        tiles.setTileAt(tiles.getTileLocation(14, 46), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(28, 28), false)
        tiles.setTileAt(tiles.getTileLocation(28, 28), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(5, 4), false)
        tiles.setTileAt(tiles.getTileLocation(5, 4), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(7, 5), false)
        tiles.setTileAt(tiles.getTileLocation(7, 5), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(9, 6), false)
        tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(12, 5), false)
        tiles.setTileAt(tiles.getTileLocation(12, 5), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(17, 6), false)
        tiles.setTileAt(tiles.getTileLocation(17, 6), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(36, 3), false)
        tiles.setTileAt(tiles.getTileLocation(36, 3), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(33, 4), false)
        tiles.setTileAt(tiles.getTileLocation(33, 4), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(31, 3), false)
        tiles.setTileAt(tiles.getTileLocation(31, 3), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(29, 5), false)
        tiles.setTileAt(tiles.getTileLocation(29, 5), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(24, 4), false)
        tiles.setTileAt(tiles.getTileLocation(24, 4), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(27, 5), false)
        tiles.setTileAt(tiles.getTileLocation(27, 5), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(14, 6), false)
        tiles.setTileAt(tiles.getTileLocation(14, 6), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(22, 5), false)
        tiles.setTileAt(tiles.getTileLocation(22, 5), assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(20, 6), false)
        tiles.setTileAt(tiles.getTileLocation(20, 6), assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function Play () {
    Icon.destroy()
    Icon2.destroy()
    textSprite.destroy()
    scene.setBackgroundColor(13)
    startLevel()
    creatPlayer()
    pixelToMeter = 30
    gravity = 9.81 * pixelToMeter
    mySprite.ay = 350
    info.setScore(0)
    info.setLife(5)
    CreatEnemyGame()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0) {
        ChangeForm()
    }
})
function CreatFlyEnemy () {
    for (let FEnemy of tiles.getTilesByType(assets.tile`myTile19`)) {
        FlyEnemy = sprites.create(assets.image`FlyEnemey`, SpriteKind.Flies)
        tiles.placeOnTile(FlyEnemy, FEnemy)
        FlyEnemy.setFlag(SpriteFlag.GhostThroughWalls, false)
        tiles.setTileAt(FEnemy, assets.tile`transparency16`)
        animation.runImageAnimation(
        FlyEnemy,
        assets.animation`myAnim3`,
        50,
        true
        )
    }
}
function CreatePet () {
    for (let value of tiles.getTilesByType(assets.tile`myTile40`)) {
        SuPho = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Pet)
        tiles.placeOnTile(SuPho, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        SuPho.changeScale(-0.25, ScaleAnchor.Middle)
        SuPho.follow(mySprite, 50)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Burn, function (sprite, otherSprite) {
    statusbar.value += -0.5
    EndGame()
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.vy = -5 * pixelToMeter
    statusbar.value += -4
    EndGame()
})
sprites.onOverlap(SpriteKind.ClimbRight, SpriteKind.FireMain, function (sprite, otherSprite) {
    Fire.destroy(effects.fire, 0)
    sprite.destroy()
    CRight = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite3, location) {
    Level += 1
    startLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (COUNT % 2 == 0) {
        if (character.matchesRule(mySprite, character.rule(Predicate.MovingLeft))) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ..........ccc...........
                .........cccc...........
                .....ccccccc..ccc.......
                ...cc555555cccccc.......
                ..c5555555555bcc........
                .c555555555555b..cc.....
                c555555ccb55555bccc.....
                c55d55c555555555bc......
                c5555555555555555b......
                .cbbb1bb5555dd555b.cc...
                .c533bbbb5ddddd55dcc....
                .c533bbbb5ddddddddbcc...
                .c533bbb55dddddddddcccc.
                .c5333bb5bb55bdddddcccdc
                .c5333b5bb555bddddddbddc
                .c53335b5555bddddddddddc
                ..c5555c55bb55dbddddddcc
                ...cccbccc55ddbbbddddcc.
                ....cdddccddddbcbbbcc...
                ....cccccd555ddcccc.....
                ........cccccccc........
                `)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 1 1 . . . . . . . 
                . . . . . 3 3 . 3 1 . . . . . . 
                . . 3 2 2 3 . . . 1 . . . . . . 
                . 3 3 1 2 2 . . . 3 1 . . . . . 
                . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
                . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                . 3 3 1 2 2 . . . 3 1 . . . . . 
                . . 3 2 2 3 . . . 1 . . . . . . 
                . . . . . 3 3 . 3 1 . . . . . . 
                . . . . . . 3 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -64, 0)
            Fire.setKind(SpriteKind.FireMain)
        }
        if (character.matchesRule(mySprite, character.rule(Predicate.MovingRight))) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb55555bcc555555c
                ......cb555555555c55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb1bbbc.
                ....ccd55ddddd5bbbb335c.
                ...ccbdddddddd5bbbb335c.
                .ccccddddddddd55bbb335c.
                cdcccdddddb55bb5bb3335c.
                cddbddddddb555bb5b3335c.
                cddddddddddb5555b53335c.
                ccddddddbd55bb55c5555c..
                .ccddddbbbdd55cccbccc...
                ...ccbbbcbddddccdddc....
                .....ccccdd555dccccc....
                ........cccccccc........
                `)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 3 . . . . . . 
                . . . . . . 1 3 . 3 3 . . . . . 
                . . . . . . 1 . . . 3 2 2 3 . . 
                . . . . . 1 3 . . . 2 2 1 3 3 . 
                . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
                . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                . . . . . 1 3 . . . 2 2 1 3 3 . 
                . . . . . . 1 . . . 3 2 2 3 . . 
                . . . . . . 1 3 . 3 3 . . . . . 
                . . . . . . . 1 1 3 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 64, 0)
            Fire.setKind(SpriteKind.FireMain)
        }
    }
})
sprites.onOverlap(SpriteKind.Flies, SpriteKind.FireMain, function (sprite4, otherSprite3) {
    Fire.destroy(effects.fire, 1)
    sprite4.destroy()
    info.changeScoreBy(7)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ClimbFire, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbar.value += -15
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
    }
    if (info.life() == 0) {
        game.splash(blockSettings.readString("Name"), "You lose")
        game.reset()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    character.loopFrames(
    mySprite,
    assets.animation`Left`,
    100,
    character.rule(Predicate.MovingLeft)
    )
})
function CreatHeart () {
    for (let Heart of tiles.getTilesByType(assets.tile`myTile10`)) {
        HeartLife = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Heart)
        tiles.placeOnTile(HeartLife, Heart)
        tiles.setTileAt(Heart, assets.tile`transparency16`)
        animation.runImageAnimation(
        HeartLife,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 3 3 3 f 3 3 3 f . . . 
            . . . . f 3 3 3 3 3 1 3 f . . . 
            . . . . f 3 3 3 3 3 3 3 f . . . 
            . . . . . f 3 b b b 3 f . . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.FireMain, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function FlyEnemyFollow () {
    for (let Fly of sprites.allOfKind(SpriteKind.Flies)) {
        if (Math.abs(Fly.x) - Math.abs(mySprite.x) < 60) {
            if (Fly.x - mySprite.x < -5) {
                Fly.vx = 25
            } else if (Fly.x - mySprite.x > 5) {
                Fly.vx = -25
            }
            if (Fly.y - mySprite.y < -5) {
                Fly.vy = 25
            } else if (Fly.y - mySprite.y > 5) {
                Fly.vy = -25
            }
        } else {
            Fly.vy = -25
            Fly.vx = 0
        }
    }
}
function Climb2 () {
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right) && mySprite.vy >= 0) {
        mySprite.vy = 0
        mySprite.ay = 0
        mySprite.setImage(img`
            ........ccc.............
            .......c555cccc.........
            ......c5555b555c........
            .....c555d5b335cc....cc.
            .....c555553335cdc...cc.
            ....c55555513b5ccccccdc.
            ....c5551f5bb5dbbbbcddc.
            ....c555ff5b55dbccbbcdc.
            ....c555f5555ddb55cbbccc
            ...cc55555555dbb55cbccdc
            ..ccc5555555ddb55b555d5c
            ..cccc555555dd555c555d5c
            ..cc.c55555ddd55b555dd5c
            .....cb5555dddbbdd5ddddc
            ....cccb5555ddddddddbbdc
            ....ccc.b5555ddddddbbccc
            ....cc..cb555dddddddbbc.
            .......cccbbdddddddddbc.
            .......cc...cbdddddddc..
            ...........cc.cccbdddc..
            ...........cc.ccccddc...
            ..............cc.cddc...
            .................cdc....
            .................cc.....
            `)
        if (COUNT % 2 == 0 && controller.A.isPressed()) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . 3 3 1 1 1 1 1 3 3 . . . 
                . . . . 2 1 1 1 1 1 1 1 2 . . . 
                . . . . 2 2 1 1 1 1 1 2 2 . . . 
                . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
                . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
                . . 1 . . . 2 3 1 3 2 . . . 1 . 
                . . 1 3 . . . 3 1 3 . . . 3 1 . 
                . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -64)
        }
    } else {
        mySprite.ay = 350
    }
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.ax < 0) {
        mySprite.setImage(img`
            .............ccc........
            .........cccc555c.......
            ........c555b5555c......
            .cc....cc533b5d555c.....
            .cc...cdc533355555c.....
            .cdcccccc5b31555555c....
            .cddcbbbbd5bb5f1555c....
            .cdcbbccbd55b5ff555c....
            cccbbc55bdd5555f555c....
            cdccbc55bbd55555555cc...
            c5d555b55bdd5555555ccc..
            c5d555c555dd555555cccc..
            c5dd555b55ddd55555c.cc..
            cdddd5ddbbddd5555bc.....
            cdbbdddddddd5555bccc....
            cccbbdddddd5555b.ccc....
            .cbbddddddd555bc..cc....
            .cbdddddddddbbccc.......
            ..cdddddddbc...cc.......
            ..cdddbccc.cc...........
            ...cddcccc.cc...........
            ...cddc.cc..............
            ....cdc.................
            .....cc.................
            `)
        mySprite.setImage(mySprite.image)
        if (COUNT % 2 == 0 && controller.A.isPressed()) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . 3 3 1 1 1 1 1 3 3 . . . 
                . . . . 2 1 1 1 1 1 1 1 2 . . . 
                . . . . 2 2 1 1 1 1 1 2 2 . . . 
                . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
                . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
                . . 1 . . . 2 3 1 3 2 . . . 1 . 
                . . 1 3 . . . 3 1 3 . . . 3 1 . 
                . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -64)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile29`)
    Boulder = sprites.create(assets.image`myImage7`, SpriteKind.Boulder)
    tiles.placeOnTile(Boulder, tiles.getTileLocation(30, 45))
    tiles.setTileAt(tiles.getTileLocation(30, 45), assets.tile`transparency16`)
    Boulder.vx = -100
    Boulder.ay = 0
    animation.runImageAnimation(
    Boulder,
    assets.animation`myAnim6`,
    50,
    true
    )
    sprite.vy = -5 * pixelToMeter
    Boulder.lifespan = 5000
    statusbar.value += -10
    EndGame()
})
sprites.onOverlap(SpriteKind.ClimbLeft, SpriteKind.FireMain, function (sprite, otherSprite) {
    sprite.destroy()
    Fire.destroy(effects.fire, 1)
    CLeft = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flies, function (sprite2, otherSprite2) {
    otherSprite2.destroy()
    statusbar.value += -5
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
    }
    if (info.life() == 0) {
        game.splash(blockSettings.readString("Name"), "You lose")
        game.reset()
    }
})
sprites.onOverlap(SpriteKind.Bumper, SpriteKind.FireMain, function (sprite4, otherSprite3) {
    Fire.destroy(effects.fire, 1)
    sprite4.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    character.loopFrames(
    mySprite,
    assets.animation`Right`,
    100,
    character.rule(Predicate.MovingRight)
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    statusbar.value += -0.5
    EndGame()
})
function CreateBoom () {
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        Boom = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.BoomBump)
        tiles.placeOnTile(Boom, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        BoomStatus = true
    }
}
function CreatEnemyGame () {
    CreatFlyEnemy()
    CreatGroundEnemy()
    MoveGroundEnemy()
    FlyEnemyFollow()
    CreateTreeTrap()
    CreateBoom()
    CreatCoin()
    CreatBurn()
    CreatGroundEnemy()
    CreatClimbEnemy()
    CreatFlyEnemy()
    CreatHeart()
    CreateRock()
    CreateBoss1()
    CreatePet()
}
sprites.onOverlap(SpriteKind.BossFire, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -5
    sprite.destroy(effects.disintegrate, 100)
    EndGame()
})
function CreateBoss1 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile41`)) {
        Boss1 = sprites.create(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Boss)
        animation.runImageAnimation(
        Boss1,
        [img`
            . . . f . . . f f f f f . f . . 
            . . . f . . f e e e e e f f . . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . f . . . f f f f f . f . . 
            . . . f . . f e e e e e f f . . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e f f e e e f . . 
            f f . f e e e e e f f f f f . . 
            f e . f e e f f e e f b d f . . 
            f e . f e e e f f e f d d f f . 
            f e f f e f b b e f f f f f f . 
            f f f f e b d d e e e f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . f . . . f f f f f . . . f . 
            . . f . . f e e e e e f . . f . 
            . . f f f e e d d d d d f f f . 
            . . . f f e d f f d d f f f . . 
            . . f d d e d d d d e e d d c . 
            . f f f d e d d c d d d d c c . 
            f d b f d e d d d c c c c d c . 
            f d d f f e e d d d d d d c . . 
            f f f e f f e e d d d d c . . . 
            . . f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . f . . . f f f f f . . . f . 
            . . f . . f e e e e e f . . f . 
            . . f f f e d d d d d d f f f . 
            . . . f f d f f d d f f d f . . 
            . . f d e d d d d e e d d d c . 
            . . f f e d d c d d d d c d c . 
            f f f f e d d d c c c c d d c . 
            f d b f f e d d d d d d d c . . 
            f d d f f f e e d d d d c . . . 
            f f f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f f f f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . . . . . . f . 
            . . . f . . . f f f f f . . f . 
            . . . f . . f e e e e e f f f . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d d d d d f . . 
            . . . f d d e e d f f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d f f c 
            . . . . f e e e f f f e f d d f 
            . . . . f f f f f e e e f d d f 
            . f f . f f e e e e e f f f f f 
            . f e . f f e e e f f e f f f . 
            . f e f f f b b f f e f d b f . 
            . f e f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . f . . . f f f f f . f . . 
            . . . f . . f e e e e e f f . . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `],
        200,
        true
        )
        tiles.placeOnTile(Boss1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        Boss1.changeScale(2, ScaleAnchor.Middle)
        BossStatus = statusbars.create(20, 4, StatusBarKind.BossHealth)
        BossStatus.value = 1000
        BossStatus.attachToSprite(Boss1, 5, 5)
        Boss1Fight = true
    }
}
function CreatGroundEnemy () {
    for (let GEnemy2 of tiles.getTilesByType(assets.tile`myTile18`)) {
        Enemies = sprites.create(assets.image`myImage1`, SpriteKind.Bumper)
        tiles.placeOnTile(Enemies, GEnemy2)
        tiles.setTileAt(GEnemy2, assets.tile`transparency16`)
        Enemies.ay = gravity
        if (Math.percentChance(100)) {
            Enemies.vx = randint(50, 100)
        } else {
            Enemies.vx = randint(-100, -50)
        }
    }
}
function CreatBossHelp () {
    for (let GEnemy2 of tiles.getTilesByType(assets.tile`myTile42`)) {
        Enemies = sprites.create(assets.image`myImage`, SpriteKind.Bumper)
        tiles.placeOnTile(Enemies, GEnemy2)
        tiles.setTileAt(GEnemy2, assets.tile`transparency16`)
        Enemies.ay = gravity
        if (Math.percentChance(100)) {
            Enemies.vx = randint(50, 100)
        } else {
            Enemies.vx = randint(-100, -50)
        }
    }
}
sprites.onOverlap(SpriteKind.Tree, SpriteKind.FireMain, function (sprite, otherSprite) {
    sprite.destroy()
    TreeFire = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 64, 0)
    TreeFire.setKind(SpriteKind.TreeFire)
    info.changeScoreBy(5)
})
function CreateTreeTrap () {
    for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
        TreeTrap = sprites.create(assets.image`Tree`, SpriteKind.Tree)
        tiles.placeOnTile(TreeTrap, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.FireMain, SpriteKind.Boss, function (sprite, otherSprite) {
    BossStatus.value += -4
    sprite.destroy(effects.fire, 100)
    if (BossStatus.value == 0) {
        otherSprite.destroy(effects.bubbles, 500)
        Boss1Fight = false
    }
})
statusbars.onStatusReached(StatusBarKind.BossHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    CreatBossHelp()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile27`)
    Trap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f . . . f f . . . f . . . 
        . . . f . . f f f f . . f . . . 
        . . . f . . f b b f . . f . . . 
        . . f f f . f b b f . f f f . . 
        . . f b f . f d 1 f . f d f . . 
        . . f b f d f 1 d f . f d f . . 
        . 1 f b f d c d d d f f d f 1 . 
        . f d d d f b d d c f d b b f . 
        . f c d d f b d d c f c d d f 1 
        1 f d d d f b d d d f b d d f d 
        f c b d b f c d d c f c b d c f 
        f c b d b f c d d c b c b d c f 
        `, SpriteKind.Trap)
    animation.runImageAnimation(
    Trap,
    assets.animation`myAnim4`,
    50,
    false
    )
    tiles.placeOnTile(Trap, location)
    Trap.lifespan = 450
    statusbar.value += -5
    sprite.vy = -3 * pixelToMeter
    EndGame()
})
function ChangeForm () {
    if (controller.B.isPressed()) {
        COUNT += 1
        if (COUNT % 2 == 0) {
            mySprite.changeScale(0.4, ScaleAnchor.Middle)
        }
        if (COUNT % 2 != 0) {
            mySprite.changeScale(-0.4, ScaleAnchor.Middle)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TreeFire, function (sprite, otherSprite) {
    statusbar.value += -20
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
    }
    if (info.life() == 0) {
        game.splash(blockSettings.readString("Name"), "You lose")
        game.reset()
    }
    TreeFire.destroy(effects.fire, 100)
})
function CreatBurn () {
    for (let Burn of tiles.getTilesByType(assets.tile`myTile12`)) {
        BurnE = sprites.create(assets.image`myImage6`, SpriteKind.Burn)
        tiles.placeOnTile(BurnE, Burn)
        tiles.setTileAt(Burn, assets.tile`transparency16`)
        animation.runImageAnimation(
        BurnE,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BoomBump, function (sprite, otherSprite) {
    if (BoomStatus) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        otherSprite.changeScale(1, ScaleAnchor.Middle)
        BoomStatus = false
    } else {
        otherSprite.destroy(effects.disintegrate, 200)
        tiles.setWallAt(tiles.getTileLocation(38, 29), false)
        tiles.setWallAt(tiles.getTileLocation(37, 29), false)
        tiles.setTileAt(tiles.getTileLocation(38, 29), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(37, 29), assets.tile`transparency16`)
        sprite.vy = 2 * pixelToMeter
        statusbar.value += -30
        EndGame()
    }
})
function startLevel () {
    if (Level == 0) {
        tiles.setCurrentTilemap(tilemap`level9`)
    } else if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
        CreatEnemyGame()
    } else if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
        CreatEnemyGame()
    } else {
        game.splash(blockSettings.readString("Name"), "You win")
        game.reset()
    }
}
function CreatCoin () {
    for (let Coin of tiles.getTilesByType(assets.tile`myTile14`)) {
        EarnCoin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(EarnCoin, Coin)
        tiles.setTileAt(Coin, assets.tile`transparency16`)
        animation.runImageAnimation(
        EarnCoin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
}
function CreateRock () {
    for (let value of tiles.getTilesByType(assets.tile`myTile39`)) {
        RockFire = sprites.create(assets.image`myImage13`, SpriteKind.RockFire)
        tiles.placeOnTile(RockFire, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        RockStatus = true
    }
}
function creatPlayer () {
    mySprite = sprites.create(img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 50, 0)
    if (Level == 0) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile35`)
    } else if (Level == 1) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    } else {
    	
    }
    scene.cameraFollowSprite(mySprite)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite)
    statusbar.max = 100
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "How to play") {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Mode WASD", DialogLayout.Full)
    } else if (option == "Play") {
        blockMenu.setControlsEnabled(false)
        Game_Started = true
        blockMenu.closeMenu()
        blockSettings.writeString("Name", game.askForString("Please input a name:", 10))
        Play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tree, function (sprite, otherSprite) {
    statusbar.value += -0.5
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
    }
    if (info.life() == 0) {
        game.splash(blockSettings.readString("Name"), "You lose")
        game.reset()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile30`)
    Boulder = sprites.create(assets.image`myImage7`, SpriteKind.Boulder)
    tiles.placeOnTile(Boulder, tiles.getTileLocation(68, 32))
    tiles.setTileAt(tiles.getTileLocation(68, 32), assets.tile`transparency16`)
    Boulder.vx = -100
    Boulder.ay = 0
    animation.runImageAnimation(
    Boulder,
    assets.animation`myAnim6`,
    50,
    true
    )
    Boulder.lifespan = 2500
    sprite.vy = -5 * pixelToMeter
    statusbar.value += -10
    EndGame()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile28`)
    TrapLeft = sprites.create(assets.image`myImage2`, SpriteKind.Trap)
    animation.runImageAnimation(
    TrapLeft,
    assets.animation`myAnim5`,
    50,
    false
    )
    tiles.placeOnTile(TrapLeft, location)
    TrapLeft.lifespan = 450
    statusbar.value += -0.5
    sprite.vx = -3 - pixelToMeter
    EndGame()
})
function EndGame () {
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
    }
    if (info.life() == 0) {
        game.splash(blockSettings.readString("Name"), "You lose")
        game.reset()
    }
}
let FireClimbCenter: Sprite = null
let FireClimbRight: Sprite = null
let FireClimbLeft: Sprite = null
let Boss1Fire: Sprite = null
let TrapLeft: Sprite = null
let RockFire: Sprite = null
let EarnCoin: Sprite = null
let BurnE: Sprite = null
let Trap: Sprite = null
let TreeTrap: Sprite = null
let TreeFire: Sprite = null
let Enemies: Sprite = null
let Boss1Fight = false
let BossStatus: StatusBarSprite = null
let Boss1: Sprite = null
let BoomStatus = false
let Boom: Sprite = null
let Boulder: Sprite = null
let HeartLife: Sprite = null
let Level = 0
let Fire: Sprite = null
let SuPho: Sprite = null
let FlyEnemy: Sprite = null
let gravity = 0
let RockStatus = false
let ClimbEnemyCenter: Sprite = null
let Ccenter = false
let ClimbEnemyRight: Sprite = null
let CRight = false
let ClimbEnemyLeft: Sprite = null
let CLeft = false
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let pixelToMeter = 0
let COUNT = 0
let Icon2: TextSprite = null
let Icon: TextSprite = null
let textSprite: TextSprite = null
let Game_Started = false
class ActionKind {
    static Walking = 0
    static Idle = 1
    static Jumping = 2
}
blockMenu.showMenu(["Play", "How to play"], MenuStyle.Grid, MenuLocation.BottomHalf)
blockMenu.setColors(1, 15)
Game_Started = false
textSprite = textsprite.create("Adventure Dinosaur")
textSprite.setMaxFontHeight(9)
textSprite.setPosition(80, 34)
Icon = textsprite.create("")
Icon.setIcon(img`
    ........................
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555bcc555555c
    ......cb555555555c55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb1bbbc.
    ....ccd55ddddd5bbbb335c.
    ...ccbdddddddd5bbbb335c.
    .ccccddddddddd55bbb335c.
    cdcccdddddb55bb5bb3335c.
    cddbddddddb555bb5b3335c.
    cddddddddddb5555b53335c.
    ccddddddbd55bb55c5555c..
    .ccddddbbbdd55cccbccc...
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `)
Icon.setPosition(13, 32)
Icon2 = textsprite.create("")
Icon2.setIcon(img`
    ........................
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555555ccb55555bccc.....
    c55d55c555555555bc......
    c5555555555555555b......
    .cbbb1bb5555dd555b.cc...
    .c533bbbb5ddddd55dcc....
    .c533bbbb5ddddddddbcc...
    .c533bbb55dddddddddcccc.
    .c5333bb5bb55bdddddcccdc
    .c5333b5bb555bddddddbddc
    .c53335b5555bddddddddddc
    ..c5555c55bb55dbddddddcc
    ...cccbccc55ddbbbddddcc.
    ....cdddccddddbcbbbcc...
    ....cccccd555ddcccc.....
    ........cccccccc........
    `)
Icon2.setPosition(146, 32)
game.onUpdate(function () {
    if (Game_Started) {
        MoveGroundEnemy()
        FlyEnemyFollow()
        Climb2()
    }
})
game.onUpdateInterval(1000, function () {
    if (Boss1Fight) {
        Boss1Fire = sprites.createProjectileFromSprite(img`
            . . . . e e e e e . . . . . . . 
            . . . e 2 2 2 2 2 e e . . . . . 
            . . e 2 2 2 2 2 2 2 e e . . . . 
            . e b 4 2 2 2 4 4 4 9 e . . . . 
            e b 9 4 2 2 4 4 4 4 9 9 e e . . 
            e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
            e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
            e 9 9 e e e e e e e 9 9 2 2 2 e 
            e 9 b e b e b b b e b 9 2 2 2 e 
            e b e b b e b b b b e e e e 2 e 
            e e e 2 2 e 2 2 2 2 e e 3 3 e e 
            e e e e e e e e e e e e e 3 3 e 
            e e e e e e e e e e e e e e e e 
            e e f f f e e e e f f f e e e e 
            . f b f f f e e f b f f f e e . 
            . . b b c . . . . b b c . . . . 
            `, Boss1, 100, 0)
        tiles.placeOnTile(Boss1Fire, tiles.getTileLocation(51, 13))
        Boss1Fire.setKind(SpriteKind.BossFire)
    }
})
game.onUpdateInterval(1500, function () {
    if (CLeft) {
        FireClimbLeft = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            `, ClimbEnemyLeft, 0, 64)
        FireClimbLeft.setKind(SpriteKind.ClimbFire)
    }
    if (CRight) {
        FireClimbRight = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            `, ClimbEnemyRight, 0, 64)
        FireClimbRight.setKind(SpriteKind.ClimbFire)
    }
    for (let value of sprites.allOfKind(SpriteKind.Climb)) {
        if (Ccenter) {
            FireClimbCenter = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
                . . 1 3 . . . 3 1 3 . . . 3 1 . 
                . . 1 . . . 2 3 1 3 2 . . . 1 . 
                . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
                . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
                . . . . 2 2 1 1 1 1 1 2 2 . . . 
                . . . . 2 1 1 1 1 1 1 1 2 . . . 
                . . . . 3 3 1 1 1 1 1 3 3 . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 100)
            FireClimbCenter.setFlag(SpriteFlag.DestroyOnWall, true)
            FireClimbCenter.setKind(SpriteKind.ClimbFire)
        }
    }
})
