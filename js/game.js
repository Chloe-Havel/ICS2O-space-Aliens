/* global phaser */

// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This is the phaser3 game configation file

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  // set background color
  backgroundColor: 0x5f6e7a,
}

const game = new Phaser.Game(config)
console.log(game)
