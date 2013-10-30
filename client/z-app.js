$(document).ready(function(){
  Physics(function(world){
    var renderer = Physics.renderer('canvas', {
      el: 'world', // id of the canvas element
        width: 500,
        height: 500
    });

    world.add( renderer );
    var square = Physics.body('convex-polygon', {
      x: 250,
        y: 250,
        vertices: [
    {x: 0, y: 50},
        {x: 50, y: 50},
        {x: 50, y: 0},
        {x: 0, y: 0}
    ]
    });
    world.add( square );
    world.render();
  });
});
