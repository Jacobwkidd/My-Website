class PipePair{
    static WIDTH = 20;
    static SPEED = 2;
    static x = 2;
    static top = 5;
    static bottom = 5;
    static highlight = false;

    /*
    Must set:
    - x (x-position of the PipePair)
    - top
    flappy bird 4
    - bottom
    - width
    - speed
    - highlight (boolean representing if this PipePair must be highlighted)
    */
    constructor(){
        
    }
    /*
    Draws out the PipePair. Will need to fill with initial color, and will
    eventually check to see if the PipePair needs to be highlighted.
    */
    draw() {
    //will need to call rect() twice - once for the top pipe, and once
    //for the bottom pipe
        //          (width(x), , , height)
        top = react(800, 30, 30, 50);
        bottom = react(800, 60, 30, 50);
        
    }
    /*
    Will be used to update the x-position of the PipePair.
    */
    update(){
        
    }
    /*
    Determines whether or not the PipePair is off screen.
    @return boolean Whether the PipePair is off screen
    */
    isOffScreen(){
        for (let i = pipe.length - 1; i >= 0; i--) {
            pipe[i].draw();
            pipe[i].update();
            
            // If a pipe is off screen, remove it from the array
            if (pipe[i].isOffScreen()) {
              pipe.splice(i, 1);
            }
          }
    
    }
}
    