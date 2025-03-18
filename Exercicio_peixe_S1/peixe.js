var config = {
    type: Phaser.AUTO,
    width: 880,
    height: 600,

    scene: { 
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var ronaldo;

function preload () {
    this.load.image('mar', 'assets/bg_azul-claro.png'); 
    this.load.image('ronaldo', 'assets/peixes/peixe_serio.png')
    this.load.image('logo', 'assets/logo-inteli_azul.png')
    this.load.image('psyduck', 'assets/psyduck.png')
}

function create() {
    this.add.image(440, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(200, 200, 'psyduck').setScale(0.3);
    ronaldo = this.add.image(400, 300, 'ronaldo').setOrigin(0.5, 0.5)
    ronaldo.setFlip(true, false);
}

function update() {
    ronaldo.x = this.input.x;
    ronaldo.y = this.input.y;
}
