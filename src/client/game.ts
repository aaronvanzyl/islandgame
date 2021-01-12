import 'phaser';
import {io} from 'socket.io-client';
const socket = io();

export default class MainScene extends Phaser.Scene
{
    constructor ()
    {
        super('mainScene');
    }

    preload ()
    {
    }

    create ()
    {
        socket.emit('test')
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 0 }
        }
      },
};

const game = new Phaser.Game(config);