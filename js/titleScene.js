/* global phaser */

// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "titleScene" })
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
  perload() {
    console.log("Title Scene")
  }

  /**
   * cand be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step white the scene is runing
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms sinec last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default TitleScene
