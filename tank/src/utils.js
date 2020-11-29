export function moveTankUtils() {




    console.log(this.keyCode)
    // if ((key.code == 'KeyW') || (keypress == 'ArrowUp')) {
    //     if (stv == 3) {
    //         this.contanierTank.rotation += Math.PI
    //         stv = 1
    //     } else if (stv == 2) {
    //         stv = 1
    //         this.contanierTank.rotation -= Math.PI / 2
    //     } else if (stv == 4) {
    //         stv = 1
    //         this.contanierTank.rotation += Math.PI / 2
    //     }
    //     this.contanierTank.y -= 10
    // }
    // if ((keypress == 'KeyS') || (keypress == 'ArrowDown')) {
    //     this.contanierTank.y += 5
    //     if (stv == 1) {
    //         this.contanierTank.rotation += Math.PI
    //         stv = 3
    //     } else if (stv == 2) {
    //         this.contanierTank.rotation += Math.PI / 2
    //         stv = 3
    //     } else if (stv == 4) {
    //         this.contanierTank.rotation -= Math.PI / 2
    //         stv = 3
    //     }
    //     this.contanierTank.y += 10
    // }
    // if ((keypress == 'KeyA') || (keypress == 'ArrowLeft')) {
    //     if (stv == 1) {
    //         this.contanierTank.rotation -= Math.PI / 2
    //         stv = 4
    //     } else if (stv == 2) {
    //         this.contanierTank.rotation += Math.PI
    //         stv = 4
    //     } else if (stv == 3) {
    //         this.contanierTank.rotation += Math.PI / 2
    //         stv = 4
    //     }
    //     this.contanierTank.x -= 10
    // }
    // if ((keypress == 'KeyD') || (keypress == 'ArrowRight')) {
    //     if (stv == 3) {
    //         this.contanierTank.rotation -= Math.PI / 2
    //         stv = 2
    //     } else if (stv == 1) {
    //         this.contanierTank.rotation += Math.PI / 2
    //         stv = 2
    //     } else if (stv == 4) {
    //         this.contanierTank.rotation -= Math.PI
    //         stv = 2
    //     }
    //     this.contanierTank.x += 10;
    // }
    // this.stv = stv;

}
export function stvolMove(arg) {
    const direction = 1
    this.view.addEventListener('mousemove', e => {
        let mix = (this.stv === 2 || this.stv === 4) ? 1 : 0
        let a = e.clientX;
        let b = e.clientY;
        this.arrX = a;
        this.arrY = b;
        this.anglK = this.straightEquations(b, a);
        if (b >= this.stvol.parent.y) {
            this.strela = 1;
            (this.stvol.rotation =
                Math.PI - Math.atan(this.anglK) + this.stvol.parent.rotation + mix * Math.PI)
        } else {
            this.strela = -1;

            (this.stvol.rotation =
                - Math.atan(this.anglK) + this.stvol.parent.rotation + mix * Math.PI)
        }
    })
}
