<script>

var world = document.getElementById('world');

var end = document.getElementById('end');	

var nextB = world.cloneNode(true);
	
document.addEventListener('keydown', event => {
  const keyName = event.key;
    if(keyName === 'ArrowDown') {
 		world.cloneNode(true);
      block4.innerHTML = nextB.innerHTML;
      world.style.backgroundColor ="white";
      block4.style.backgroundColor = "yellow";
      block4.style.color = "yellow";
        return;
    } 
  
}, false);

</script>
