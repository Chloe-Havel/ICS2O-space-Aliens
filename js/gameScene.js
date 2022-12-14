/* global phaser */

// Copyright (c) 2022 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2022
// This is the Splash Scene

class GameScene extends Phaser.Scene {
  // create an alien
  createAlien() {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920
    let alienXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number from 1 and 50
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const anAlien = this.physics.add.sprite(alienXLocation, -100, "alien")
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }

  constructor() {
    super({ key: "gameScene" })

    this.ship = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTexttyle = {
      front: "65px Arial",
      fill: "#ffffff",
      align: "center",
    }
    this.gameOverTextStyle = {
      front: "65px Arial",
      fill: "#ff0000",
      align: "center",
    }
  }

  init(data) {
    this.cameras.main.setBackgroundColor("0x5f6e7a")
  }

  preload() {
    console.log("Game Scene")

    // images
    this.load.image("startBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missile", "assets/missile.png")
    this.load.image("alien", "assets/alien.png")
    // sound
    this.load.audio("laser", "assets/laser1.wav")
    this.load.audio("explosion", "assets/barrelExploding.wav")
    this.load.audio("bomb", "assets/bomb.wav")
  }

  create(data) {
    this.background = this.add.image(0, 0, "startBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(
      10,
      10,
      "score: " + this.score.toString(),
      this.scoreTexttyle
    )

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()

    // create a group for the aliens
    this.alienGroup = this.add.group()
    this.createAlien()

    //Collision between missiles and aliens
    this.physics.add.collider(
      this.missileGroup,
      this.alienGroup,
      function (missileCollide, alienCollide) {
        alienCollide.destroy()
        missileCollide.destroy()
        this.sound.play("explosion")
        this.score = this.score + 1
        this.scoreText.setText("Score: " + this.score.toString())
        this.createAlien()
        this.createAlien()
      }.bind(this)
    )

    // Collisions between ship and aliens
    this.physics.add.collider(
      this.ship,
      this.alienGroup,
      function (shipCollide, alienCollide) {
        this.sound.play("bomb")
        this.physics.pause()
        alienCollide.destroy()
        shipCollide.destroy()
        this.gameOverText = this.add
          .text(
            1920 / 2,
            1820 / 2,
            " Game Over!\nClick to play again.",
            this.gameOverTextStyle
          )
          .setOrigin(0.5)
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on("pointerdown", () => this.scene.start("gameScene"))
      }.bind(this)
    )
  }

  update(time, delta) {
    // called 6- times a scond, hopefully!

    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x += -15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire misile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(
          this.ship.x,
          this.ship.y,
          "missile"
        )
        this.missileGroup.add(aNewMissile)
        this.sound.play("laser")
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene
