var str = "";
var http = require('http');
var server = http.createServer(function (req, res) {
	var path = req.url;
	console.log(path);
	if (path === "/artists") {
		str = "<html><body><h1>Artists</h1><ul><li><a href=\"/artists/Regina_Spektor\">Regina Spektor</a></li><li><a href=\"/artists/Jason_Mraz\">Jason Mraz</a></li><li><a href=\"/artists/Damien_Rice\">Damien Rice</a></li></ul></body></html>";
	}
	else if (path === "/artists/Regina_Spektor") {
		str = "<html><body><h1>Regina Spektor</h1><ul><li><a href=\"/artists/Regina_Spektor/Eleven_Eleven\">Eleven Eleven</a></li><li><a href=\"/artists/Regina_Spektor/Begin_To_Hope\">Begin To Hope</a></li><li><a href=\"/artists/Regina_Spektor/WWSFTCS\">What We Saw From The Cheap Seats</a></li></ul><p><a href=\"/artists\">back</a></p></body></html>";
	}
	else if (path === "/artists/Jason_Mraz") {
		str = "<html><body><h1>Jason Mraz</h1><ul><li><a href=\"/artists/Jason_Mraz/WFMRTC\">Waiting for My Rocket to Come</a></li><li><a href=\"/artists/Jason_Mraz/MrAZ\">Mr. A-Z</a></li><li><a href=\"/artists/Jason_Mraz/WSWDWST\">We Sing. We Dance. We Steal Things.</a></li></ul><p><a href=\"/artists\">back</a></p></body></html>";
	}
	else if (path === "/artists/Damien_Rice") {
		str = "<html><body><h1>Damien Rice</h1><ul><li><a href=\"/artists/Damien_Rice/9\">9</a></li><li><a href=\"/artists/Damien_Rice/O\">O</a></li><li><a href=\"/artists/Damien_Rice/MFFF\">My Favourite Faded Fantasy</a></li></ul><p><a href=\"/artists\">back</a></p></body></html>";
	}
	else if (path === "/artists/Regina_Spektor/Eleven_Eleven") {
		str = "<html><body><h1>Eleven Eleven</h1><ul><li>Marry Ann</li><li>Pavlov's Daughter</li><li>Back of A Truck</li></ul><p><a href=\"/artists/Regina_Spektor\">back</a></p></body></html>";
	}
	else if (path === "/artists/Regina_Spektor/Begin_To_Hope") {
		str = "<html><body><h1>Begin To Hope</h1><ul><li>Fidelity</li><li>Samsonstr</li><li>On The Radio</li></ul><p><a href=\"/artists/Regina_Spektor\">back</a></p></body></html>";
	}
	else if (path === "/artists/Regina_Spektor/WWSFTCS") {
		str = "<html><body><h1>What We Saw From The Cheap Seats</h1><ul><li>Small Town Moon</li><li>Don't Leave Me (Ne me quitte pas)</li><li>All the Rowboats</li></ul><p><a href=\"/artists/Regina_Spektor\">back</a></p></body></html>";
	}
	else if (path === "/artists/Jason_Mraz/WFMRTC") {
		str = "<html><body><h1>Waiting for My Rocket to Come</h1><ul><li>You and I Both</li><li>The Remedy (I Won't Worry)</li><li>Tonight, Not Again</li></ul><p><a href=\"/artists/Jason_Mraz\">back</a></p></body></html>";
	}
	else if (path === "/artists/Jason_Mraz/MrAZ") {
		str = "<html><body><h1>Mr. A-Z</h1><ul><li>Life Is Wonderful</li><li>Mr. Curiosity</li><li>Song For A Friend</li></ul><p><a href=\"/artists/Jason_Mraz\">back</a></p></body></html>";
	}
	else if (path === "/artists/Jason_Mraz/WSWDWST") {
		str = "<html><body><h1>We Sing. We Dance. We Steal Things.</h1><ul><li>Make It Mine</li><li>Details in the Fabric</li><li>If It Kills Me</li></ul><p><a href=\"/artists/Jason_Mraz\">back</a></p></body></html>";
	}
	else if (path === "/artists/Damien_Rice/9") {
		str = "<html><body><h1>9</h1><ul><li>9 Crimes</li><li>Elephant</li><li>Rootless Tree</li></ul><p><a href=\"/artists/Damien_Rice\">back</a></p></body></html>";
	}
	else if (path === "/artists/Damien_Rice/O") {
		str = "<html><body><h1>O</h1><ul><li>Delicate</li><li>The Blower's Daughter</li><li>Cheers Darlin'</li></ul><p><a href=\"/artists/Damien_Rice\">back</a></p></body></html>";
	}
	else if (path === "/artists/Damien_Rice/MFFF") {
		str = "<html><body><h1>My Favourite Faded Fantasy</h1><ul><li>It Takes a Lot to Know a Man</li><li>The Greatest Bastard</li><li>Trusty and True</li></ul><p><a href=\"/artists/Damien_Rice\">back</a></p></body></html>";
	}
	res.end(str);
});
server.listen(shoshanah.princesspeach.nyc);