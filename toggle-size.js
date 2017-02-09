var grid = document.querySelector('.grid');

var pckry = new Packery( grid, {
  itemSelector: '.grid-item'
});

grid.addEventListener( 'click', function( event ) {
  // filter for grid-item clicks
  if ( !event.target.classList.contains('grid-item') ) {
    return;
  }
  event.target.classList.toggle('grid-item--large');
  pckry.shiftLayout();
});
