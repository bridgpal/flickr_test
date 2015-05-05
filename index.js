var Flickr = require('flickr').Flickr;

var flickr = new Flickr(process.env.F_KEY, process.env.F_SECRET);

var flickr_params = {
    text: "soccer",
    media: "photos",
    per_page: 25,
    page: 1,
    extras: "url_q, url_z, url_b, owner_name"
};

flickr.executeAPIRequest("flickr.photos.search", flickr_params, false, function(err, result) {
        // Show the error if we got one
        if(err) {
            console.log("FLICKR ERROR: " + err);

            return;
        }

        // Do something with flicker photos
        console.log(result.photos)
  })


// export FLICKR_KEY=fe5904f7c9e53f6c32ef1ac3b22bdb05
// export FLICKR_SECRET=168821bd97a0831a