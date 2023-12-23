const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/", function(req,res){
 res.render("home");
});

// men section starts here
app.get("/men-fashion",function(req,res){
  res.render("men-fashion");
});
app.get("/men-dress-shirts",function(req,res){
  res.render("men-dress-shirts");
});
app.get("/men-suits-blazers",function(req,res){
  res.render("men-suits-blazers");
});
app.get("/men-shoes",function(req,res){
  res.render("men-shoes");
});
app.get("/men-slippers-slides-flip-flops",function(req,res){
  res.render("men-slippers-slides-flip-flops");
});
app.get("/men-hoodies-tracksuits",function(req,res){
  res.render("men-hoodies-tracksuits");
});
app.get("/men-coats",function(req,res){
  res.render("men-coats");
});
app.get("/men-jackets",function(req,res){
  res.render("men-jackets");
});
app.get("/men-winter-jackets",function(req,res){
  res.render("men-winter-jackets");
});
app.get("/men-leather-jackets",function(req,res){
  res.render("men-leather-jackets");
});

app.get("/men-jean-jackets",function(req,res){
  res.render("men-jean-jackets");
});
app.get("/men-casual-shirts",function(req,res){
  res.render("men-casual-shirts");
});
app.get("/men-tshirt-tank-tops",function(req,res){
  res.render("men-tshirt-tank-tops");
});
app.get("/men-polos",function(req,res){
  res.render("men-polos");
});
app.get("/men-jumpsuits-overalls-coverall",function(req,res){
  res.render("men-jumpsuits-overalls-coverall");
});
app.get("/men-jeans",function(req,res){
  res.render("men-jeans");
});
app.get("/men-shorts",function(req,res){
  res.render("men-shorts");
});
app.get("/men-sweater",function(req,res){
  res.render("men-sweater");
});
app.get("/men-pants",function(req,res){
  res.render("men-pants");
});
app.get("/men-underwears",function(req,res){
  res.render("men-underwears");
});
app.get("/men-belts",function(req,res){
  res.render("men-belts");
});
app.get("/men-hat-and-caps",function(req,res){
  res.render("men-hat-and-caps");
});
app.get("/men-wallets",function(req,res){
  res.render("men-wallets");
});
app.get("/men-soccer-shoes",function(req,res){
  res.render("men-soccer-shoes");
});
app.get("/men-boots",function(req,res){
  res.render("men-boots");
});
app.get("/men-flat-shoes",function(req,res){
  res.render("men-flat-shoes");
});
app.get("/men-sneakers",function(req,res){
  res.render("men-sneakers");
});
app.get("/men-cycling-shoes",function(req,res){
  res.render("men-cycling-shoes");
});
app.get("/men-loafers-slip-ons",function(req,res){
  res.render("men-loafers-slip-ons");
});

// men section ends here

// women section starts here
app.get("/women-fashion",function(req,res){
  res.render("women-fashion");
});
app.get("/women-jeans",function(req,res){
  res.render("women-jeans");
});
app.get("/women-office-dress",function(req,res){
  res.render("women-office-dress");
});
app.get("/women-dresses",function(req,res){
  res.render("women-dresses");
});
app.get("/women-casual-dress",function(req,res){
  res.render("women-casual-dress");
});
app.get("/women-club-night-outing-dress",function(req,res){
  res.render("women-club-night-outing-dress");
});
app.get("/women-wedding-dress-ball-gowns",function(req,res){
  res.render("women-wedding-dress-ball-gowns");
});
app.get("/women-cocktail-dress",function(req,res){
  res.render("women-cocktail-dress");
});
app.get("/women-formal-dress",function(req,res){
  res.render("women-formal-dress");
});
app.get("/women-lingerie-sleeping-gowns-pajamas",function(req,res){
  res.render("women-lingerie-sleeping-gowns-pajamas");
});
app.get("/women-coats",function(req,res){
  res.render("women-coats");
});
app.get("/women-jumpsuits-rompers-overalls",function(req,res){
  res.render("women-jumpsuits-rompers-overalls");
});
app.get("/women-panty-bra",function(req,res){
  res.render("women-panty-bra");
});
app.get("/women-shorts-skirts",function(req,res){
  res.render("women-shorts-skirts");
});
app.get("/women-shoes",function(req,res){
  res.render("women-shoes");
});
app.get("/women-soccer-shoes",function(req,res){
  res.render("women-soccer-shoes");
});
app.get("/women-jackets",function(req,res){
  res.render("women-jackets");
});
app.get("/women-sweater",function(req,res){
  res.render("women-sweater");
});
app.get("/women-bodysuit-jumpsuits",function(req,res){
  res.render("women-bodysuit-jumpsuits");
});
app.get("/women-hoodies-tracksuits",function(req,res){
  res.render("women-hoodies-tracksuits");
});
app.get("/women-tops-blouses",function(req,res){
  res.render("women-tops-blouses");
});
app.get("/women-suits-blazers",function(req,res){
  res.render("women-suits-blazers");
});
app.get("/women-handbags",function(req,res){
  res.render("women-handbags");
});
app.get("/women-boots",function(req,res){
  res.render("women-boots");
});
app.get("/women-flat-shoes",function(req,res){
  res.render("women-flat-shoes");
});
app.get("/women-sandals",function(req,res){
  res.render("women-sandals");
});
app.get("/women-sneakers",function(req,res){
  res.render("women-sneakers");
});
app.get("/women-low-high-heel-shoes",function(req,res){
  res.render("women-low-high-heel-shoes");
});
app.get("/women-loafers-slip-ons",function(req,res){
  res.render("women-loafers-slip-ons");
});
app.get("/women-slippers-slides-flip-flops",function(req,res){
  res.render("women-slippers-slides-flip-flops");
});
app.get("/women-snow-winter-boots",function(req,res){
  res.render("women-snow-winter-boots");
});
app.get("/women-hiking-trekking-shoes",function(req,res){
  res.render("women-hiking-trekking-shoes");
});
app.get("/women-knee-hign&over-the-knee-boots",function(req,res){
  res.render("women-knee-hign&over-the-knee-boots");
});
app.get("/women-cycling-shoes",function(req,res){
  res.render("women-cycling-shoes");
});
app.get("/women-fitness-crossTraining-shoes",function(req,res){
  res.render("women-fitness-crossTraining-shoes");
});
app.get("/women-work-safety-shoes",function(req,res){
  res.render("women-work-safety-shoes");
});
app.get("/women-rain-footwear",function(req,res){
  res.render("women-rain-footwear");
});
app.get("/women-mules-clogs-shoes",function(req,res){
  res.render("women-mules-clogs-shoes");
});
app.get("/women-red-and-white-floral-tunic-top",function(req,res){
  res.render("women-red-and-white-floral-tunic-top");
});



// women section ends here

// toy section starts here

app.get("/toy-section",function(req,res){
  res.render("toy-section");
});

// toy section ends here

// children section starts here

app.get("/children-fashion",function(req,res){
  res.render("children-fashion");
});
// children section ends here

// phone section starts here
app.get("/phone-accessories",function(req,res){
  res.render("phone-accessories");
});

// phone section ends here

// sex toys section starts here
app.get("/sex-shop",function(req,res){
  res.render("sex-shop");
});
app.get("/anal-sex-lubricants",function(req,res){
  res.render("anal-sex-lubricants");
});
app.get("/dildo",function(req,res){
  res.render("dildo");
});
app.get("/butt-plugs",function(req,res){
  res.render("butt-plugs");
});
app.get("/g-spot-clitoral-vibrators",function(req,res){
  res.render("g-spot-clitoral-vibrators");
});
app.get("/g-spot-pulsator-vibrators",function(req,res){
  res.render("g-spot-pulsator-vibrators");
});
app.get("/sex-handcuffs",function(req,res){
  res.render("sex-handcuffs");
});
app.get("/kegel-vagina-exercise-balls",function(req,res){
  res.render("kegel-vagina-exercise-balls");
});
app.get("/men-masturbation-sleeves",function(req,res){
  res.render("men-masturbation-sleeves");
});
app.get("/penis-rings",function(req,res){
  res.render("penis-rings");
});
app.get("/sex-bondage-straps",function(req,res){
  res.render("sex-bondage-straps");
});
app.get("/sex-magic-wand-massagers",function(req,res){
  res.render("sex-magic-wand-massagers");
});
app.get("/anal-sex-toys",function(req,res){
  res.render("anal-sex-toys");
});
app.get("/sex-toy-doll-for-men",function(req,res){
  res.render("sex-toy-doll-for-men");
});
app.get("/sex-toy-doll-for-women",function(req,res){
  res.render("sex-toy-doll-for-women");
});
app.get("/sex-whip",function(req,res){
  res.render("sex-whip");
});
app.get("/strapon-dildos",function(req,res){
  res.render("strapon-dildos");
});
app.get("/vibrating-anal-plugs",function(req,res){
  res.render("vibrating-anal-plugs");
});
app.get("/vibrating-dildos",function(req,res){
  res.render("vibrating-dildos");
});

// sex toys section ends here

// video games section start here

app.get("/video-games",function(req,res){
  res.render("video-games");
});
app.get("/playstation",function(req,res){
  res.render("playstation");
});
app.get("/xbox",function(req,res){
  res.render("xbox");
});
app.get("/nintendo",function(req,res){
  res.render("nintendo");
});
app.get("/video-game-accessories",function(req,res){
  res.render("video-game-accessories");
});
// toy section starts here

app.get("/action-toys",function(req,res){
  res.render("action-toys");
});
app.get("/baby-toddler-toys",function(req,res){
  res.render("baby-toddler-toys");
});
app.get("/building-construction-toys",function(req,res){
  res.render("building-construction-toys");
});
app.get("/classic-toys",function(req,res){
  res.render("classic-toys");
});
app.get("/diecast-toy-vehicles",function(req,res){
  res.render("diecast-toy-vehicles");
});
app.get("/dolls-stuffed-toys",function(req,res){
  res.render("dolls-stuffed-toys");
});
app.get("/electronic-toys",function(req,res){
  res.render("electronic-toys");
});
app.get("/hightech-toys",function(req,res){
  res.render("hightech-toys");
});
app.get("/hobbies-collectibles",function(req,res){
  res.render("hobbies-collectibles");
});
app.get("/kids-party",function(req,res){
  res.render("kids-party");
});
app.get("/learning-education",function(req,res){
  res.render("learning-education");
});
app.get("/novelty-gag-toys",function(req,res){
  res.render("novelty-gag-toys");
});
app.get("/outdoor-and-fun-sports-toys",function(req,res){
  res.render("outdoor-and-fun-sports-toys");
});
app.get("/pools-and-water-toys",function(req,res){
  res.render("pools-and-water-toys");
});
app.get("/popular-toys",function(req,res){
  res.render("popular-toys");
});
app.get("/puzzle-games",function(req,res){
  res.render("puzzle-games");
});
app.get("/remote-control-toys",function(req,res){
  res.render("remote-control-toys");
});
app.get("/stress-relief-toys",function(req,res){
  res.render("stress-relief-toys");
});
app.get("/",function(req,res){
  res.render("");
});
app.get("/",function(req,res){
  res.render("");
});
app.get("/",function(req,res){
  res.render("");
});
app.get("/",function(req,res){
  res.render("");
});
app.get("/",function(req,res){
  res.render("");
});
app.get("/",function(req,res){
  res.render("");
});





app.get("/pharmaceutical-tablets",function(req,res){
  res.render("pharmaceutical-tablets");
});
app.get("/ketoral-tablet",function(req,res){
  res.render("ketoral-tablet");
});
app.get("/ketoconazolep-tablet",function(req,res){
  res.render("ketoconazolep-tablet");
});
app.get("/loratyn-10-tablet",function(req,res){
  res.render("loratyn-10-tablet");
});
app.get("/syrups",function(req,res){
  res.render("syrups");
});
app.get("/ranferon-syrup",function(req,res){
  res.render("ranferon-syrup");
});
app.get("/bunto-syrup",function(req,res){
  res.render("bunto-syrup");
});
app.get("/panda-syrup",function(req,res){
  res.render("panda-syrup");
});
app.get("/antifungals",function(req,res){
  res.render("antifungals");
});
app.get("/supplements",function(req,res){
  res.render("supplements");
});
app.get("/capsules",function(req,res){
  res.render("capsules");
});
app.get("/amoxicillin-500mg",function(req,res){
  res.render("amoxicillin-500mg");
});
app.get("/flucamed-capsule",function(req,res){
  res.render("flucamed-capsule");
});
app.get("/ranferon-12-capsule",function(req,res){
  res.render("ranferon-12-capsule");
});
app.get("/pregnacare-plus",function(req,res){
  res.render("pregnacare-plus");
});
app.get("/mason-natural-zinc-supplement",function(req,res){
  res.render("mason-natural-zinc-supplement");
});
app.get("/wellman-supplement",function(req,res){
  res.render("wellman-supplement");
});
app.get("/diflucan-50mg",function(req,res){
  res.render("diflucan-50mg");
});
app.get("/vista-plus-cream",function(req,res){
  res.render("vista-plus-cream");
});
app.get("/ointments",function(req,res){
  res.render("ointments");
});
app.get("/penicillin-ointment",function(req,res){
  res.render("penicillin-ointment");
});
app.get("/neurogesic-ointment",function(req,res){
  res.render("neurogesic-ointment");
});
app.get("/tribotan-ointment",function(req,res){
  res.render("tribotan-ointment");
});
// app.get("/",function(req,res){
//   res.render("");
// });
// app.get("/",function(req,res){
//   res.render("");
// });
// app.get("/",function(req,res){
//   res.render("");
// });
// app.get("/",function(req,res){
//   res.render("");
// });
// app.get("/",function(req,res){
//   res.render("");
// });
// app.get("/",function(req,res){
//   res.render("");
// });


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;}

app.listen(port, function() {
  console.log("Server have started Successfully.");
});