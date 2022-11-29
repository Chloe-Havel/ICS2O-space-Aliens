/* global phaser */

// Copyright (c) 2022 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2022
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
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
   * Can be defined on yourown Scenes.
   * Use it to load assests.
   */
  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "assets/aliens_screen_image2.jpg")
    this.load.image("startButton", "assets/start.png")
  }

  /**
   * can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    this.MenuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.MenuSceneBackgroundImage.x = 1920 / 2
    this.MenuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHanfCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  /**
   * Should be overridden  by your own Scenes.
   * This method is called once per game step white the scene is runing
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms sinec last frame.
   */
  update(time, delta) {
    // pass
  }

  clickButton() {
    this.scene.switch("gameScene")
  }
}

export default MenuScene
