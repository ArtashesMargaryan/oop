class Figure {
    constructor(selector) {
        this.$el = document.querySelector(selector);

    }
    hide() {
        this.$el.style.display = 'none';
    }
    show() {
        this.$el.style.display = 'block';
    }

    rotate(angl = 0) {
        this.$el.style.WebkitTransitionDuration = "1s";
        this.$el.style.webkitTransform = `rotate(${angl}deg)`;
    }
    movement(е) {

    }

}
class Rectangular extends Figure {
    constructor(params) {
        super(params.selector)
        this.$el.style.width = params.width + 'px';
        this.$el.style.height = params.height + 'px';
        this.$el.style.background = params.color;
    }
}
const rec = new Rectangular({
    selector: '#box1',
    width: 100,
    height: 100,
    color: 'red',
})