function busca() {
	$.getJSON(
			"http://search.twitter.com/search.json?callback=?", 
			{ "rpp":"100", "lang":"pt-BR", "result-type":"mixed", "q":"winehouse" }, 
			function(data, textStatus) {
				$.each(data.results, function(index, item) {
					console.log(item);
					avatar = $("<img>", {"src":item.profile_image_url});
					body = $("body");
					body.append(avatar);
					body.append(item.from_user);
					body.append("<br/>");
					body.append(item.text);
					body.append("<br/>");
				});
			}
	);	
}

busca();