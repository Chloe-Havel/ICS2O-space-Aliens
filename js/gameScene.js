/* global phaser */

// Copyright (c) 2022 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2022
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" })

    this.setBackground = null
    this.ship = null
    this.fireMissile = false
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Game Scene")

    // images
    this.load.image("startBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missile", "assets/missile.png")
    // sound
    this.load.audio("laser", "assets/laser1.wav")
  }

  create(data) {
    this.background = this.add.image(0, 0, "startBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()
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
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile")
        this.missileGroup.add(aNewMissile)
        this.sound.play("laser")
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
    
    this.missileGroup.children.each(function (item) {
      item.y = item.y -15
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

export default GameScene
