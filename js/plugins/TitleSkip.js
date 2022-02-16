(() => {
"use strict";

Scene_Boot.prototype.startNormalGame = function() {
    this.checkPlayerLocation();
    DataManager.setupNewGame();
    SceneManager.goto(Scene_Map);
};

})();
