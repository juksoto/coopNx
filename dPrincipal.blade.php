<header>
	<section class="container">
		<section class="row">
			{!! $blockZone1 !!}
		</section>
	</section>
</header>
<section class="zone-wp zone-two">
	<section class="container-fluid">
		<section class="row">	
    		{!! $blockZone2 !!}
    	</section>
    </section>
</section>

<section class="zone-wp zone-three">
	{!! $blockZone3 !!}
</section>
<section class="bottom">
		{!! $blockZone7 !!}
</section>
<footer>
	{!! $blockZone8 !!}
</footer>
<script src="/info/{{getClienteFolder()}}/web/portal/js/functions.js"></script>
<script>
	$( document ).ready(function() {
			$('.enlaces-simuladores a').each(function(){
		    var me = $(this)
		       , t = me.text().split(' ');
		    me.html( '<small>'+t.shift()+'</small> '+t.join(' ') );
  });
	})

</script>