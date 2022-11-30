/* global phaser */

// Copyright (c) 2022 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "gameScene" })

    this.setBackground = null
    this.ship = null
  }

  /**
   * Can be definded on your own Ssenes.
   * This method is called by the Scene Manager when the scene Starts,
   *   before preload() and create().
   * @param {object} data - Anydata passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create yur game objects.
   */
  preload() {
    console.log("Game Scene")

    this.load.image("startBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
  }

  /**
   * can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.background = this.add.image(0, 0, "startBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
  }

  /**
   * Should be overridden  by your own Scenes.
   * This method is called once per game step white the scene is runing
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms sinec last frame.
   */
  update(time, delta) {
    // called 6- times a scond, hopefully!
    const KeyLeftObj = this.input.Keyboard.addkey("LEFT")
    const KeyRightObj = this.input.Keyboard.addkey("RIGHT")
  


    if (KeyLeftObj.isDown === true) {
      this.ship.x = this.ship.x - 15
    }

    if (KeyRightgObj.isDown === true) {
      this.ship.x = this.ship.x - 15
    }
  }
}

export default GameScene
