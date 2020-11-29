// Import Application class that is the main part of our PIXI project
import * as PIXI from 'pixi.js'
import { moveTankUtils } from './utils.js'
export class Game extends PIXI.Application {
	constructor() {
		super({

			width: window.innerWidth,
			height: window.innerHeight,
		})
		this.width = window.innerWidth;
		this.height = window.innerWidth;
		document.body.appendChild(this.view)
		this.loadAssets()
	}
	loadAssets() {
		this.loader.add('tankMy', './assets/tank.png')
		this.loader.add('bashnya', './assets/bashnya.png')
		this.loader.load(() => {
			this.createMyTank()
			this.moveTank()
			this.bashnyaMove()
		})

	}

	createMyTank() {
		this.myTank = {
			tank: PIXI.Sprite.from('tankMy'),
			bashnya: PIXI.Sprite.from('bashnya')
		}
		///*************************************************************************** */
		const bashnya = this.myTank.bashnya;
		bashnya.x = 216
		bashnya.y = 200
		bashnya.anchor.set(0.5, 0.75)
		////************************************************************************ */
		const tank = this.myTank.tank;
		tank.anchor.set(0.5)
		tank.x = 212
		tank.y = 200
		this.contenierByTank = new PIXI.Container();
		this.contenierByTank.addChild(tank)
		this.contenierByTank.addChild(bashnya)
		this.contenierByTank.x = 300
		this.contenierByTank.y = 250
		this.stage.addChild(this.contenierByTank);
		this.ticker.add((timer) => {
			//bashnya.rotation += 0.01 * Math.PI / 4;
		})
	}
	moveTank() {
		window.addEventListener('keydown', key => {
			const keyPress = key.code;
			const tank = this.contenierByTank;
			const tankShasy = this.myTank.tank
			let rotTank = tankShasy.rotation
			this.keyCode = keyPress;
			switch (keyPress) {
				case ('KeyW'): {
					tank.position.x += -3 * Math.sin(-rotTank);
					tank.position.y += -3 * Math.cos(-rotTank)
					break
				} case ('KeyS'): {
					tank.position.x += 3 * Math.sin(-rotTank);
					tank.position.y += 3 * Math.cos(-rotTank)
					break
				} case ('KeyA'): {
					tankShasy.rotation -= 0.02
					rotTank = tankShasy.rotation;
					break
				} case ('KeyD'): {
					tankShasy.rotation += 0.02
					rotTank = tankShasy.rotation;
					break;
				}
			}
		})
	}

	bashnyaMove() {
		window.addEventListener('keydown', key => {
			const keyPress = key.code;
			this.keyCode = keyPress;
			const bashnya = this.myTank.bashnya;
			switch (keyPress) {
				case ('ArrowLeft'): {
					bashnya.rotation -= 0.05
					break
				} case ('ArrowRight'): {
					bashnya.rotation += 0.05
					break;
				}
			}
		})
	}

	tankFire() {
		const tank = this.myTank.tank;
		const bashnya = this.myTank.bashnya;


	}


}



new Game();























































































// // Load the logo
// app.loader.add('Basketball', './assets/basketball.png')
// app.loader.add('logo', './assets/logo.png')
// app.loader.load(() => {
// 	const spriteLogo = PIXI.Sprite.from('logo');
// 	const spriteBasketball = PIXI.Sprite.from('Basketball');


// 	spriteLogo.anchor.set(0.5) // We want to rotate our spriteLogo relative to the center, so 0.5
// 	//app.stage.addChild(spriteLogo)
// 	app.stage.addChild(spriteBasketball)


// 	// Position the spriteLogo at the center of the stage
// 	spriteLogo.x = app.screen.width * 0.5
// 	spriteLogo.y = app.screen.height * 0.5

// 	// Put the rotating function into the update loop
// 	app.ticker.add(delta => {
// 		spriteLogo.rotation += 0.005 * delta
// 	})
// })