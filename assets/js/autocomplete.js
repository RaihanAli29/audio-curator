// Array of music genres
const genreList = [
    '2-step',
    'abhang',
    'abstract hip hop',
    'acid breaks',
    'acid house',
    'acid jazz',
    'acid rock',
    'acid techno',
    'acid trance',
    'acidcore',
    'acousmatic',
    'acoustic blues',
    'acoustic chicago blues',
    'acoustic rock',
    'acoustic texas blues',
    'adhunik geet',
    'african blues',
    'afro house',
    'afro rock',
    'afro trap',
    'afro-cuban jazz',
    'afro-funk',
    'afro-jazz',
    'afro-zouk',
    'afrobeat (funk/soul + West African sounds)',
    'afrobeats (West African urban/pop music)',
    'afropiano',
    'afroswing',
    'agbadza',
    'agbekor',
    'aggrotech',
    'ahwash',
    'aita',
    'akishibu-kei',
    'al jeel',
    'algerian chaabi',
    'algorave',
    'alloukou',
    'alpenrock',
    'alternative country',
    'alternative dance',
    'alternative folk',
    'alternative hip hop',
    'alternative metal',
    'alternative pop',
    'alternative punk',
    'alternative r&b',
    'alternative rock',
    'amapiano',
    'ambasse bey',
    'ambient',
    'ambient americana',
    'ambient dub',
    'ambient house',
    'ambient noise wall',
    'ambient pop',
    'ambient techno',
    'ambient trance',
    'ambrosian chant',
    'american primitive guitar',
    'americana',
    'anarcho-punk',
    'anatolian rock',
    'andalusian classical',
    'andean new age',
    'anglican chant',
    'animal sounds',
    'anti-folk',
    'aor',
    'apala',
    'appalachian folk',
    'aquacrunk',
    'arabesk',
    'arabesk rap',
    'arena rock',
    'arrocha',
    'arrocha funk',
    'arrocha sertanejo',
    'arrochadeira',
    'ars antiqua',
    'ars nova',
    'ars subtilior',
    'art pop',
    'art punk',
    'art rock',
    'art song',
    'artcore',
    'asian rock',
    'asmr',
    'assiko',
    'atmospheric black metal',
    'atmospheric drum and bass',
    'atmospheric sludge metal',
    'audio drama',
    'avant-folk',
    'avant-garde',
    'avant-garde jazz',
    'avant-garde metal',
    'avant-garde pop',
    'avant-prog',
    'avanzada',
    'avtorskaya pesnya',
    'bachata',
    'bachatón',
    'bagad',
    'baila',
    'baisha xiyue',
    'baithak gana',
    'bakersfield sound',
    'balani show',
    'balearic beat',
    'balearic trance',
    'balinese gamelan',
    'balitaw',
    'ballad',
    'ballad opera',
    'ballet',
    'ballet de cour',
    'ballroom house',
    'baltimore club',
    'bambuco',
    'banda sinaloense',
    'bandari',
    'bandinha',
    'barber beats',
    'barbershop',
    'bard rock',
    'bardcore',
    'baroque',
    'baroque pop',
    'baroque suite',
    'bashment soca',
    'bass house',
    'bassline',
    'batida',
    'batidão romântico',
    'battle rap',
    'battle record',
    'batucada',
    'batuque',
    'baul gaan',
    'beat bruxaria',
    'beat music',
    'beat poetry',
    'beatboxing',
    'beatdown hardcore',
    'bebop',
    'bedroom pop',
    'beijing opera',
    'bélé',
    'belgian techno',
    'bend-skin',
    'beneventan chant',
    'benga',
    'benna',
    'beompae',
    'bérite club',
    'berlin school',
    'bhajan',
    'bhangra',
    'bhavageethe',
    'big band',
    'big beat',
    'big room house',
    'big room trance',
    'biguine',
    'bikutsi',
    'binaural beats',
    'biraha',
    'birdsong',
    'bit music',
    'bitpop',
    `black 'n' roll`,
    'black ambient',
    'black metal',
    'black midi',
    'black noise',
    'blackened crust',
    'blackened death metal',
    'blackgaze',
    'bleep techno',
    'blue-eyed soul',
    'bluegrass',
    'bluegrass gospel',
    'blues',
    'blues rock',
    'bocet',
    'boduberu',
    'boedra',
    'bogino duu',
    'bolero (Cuban song)',
    'bolero español',
    'bolero son',
    'bolero-beat',
    'bomba',
    'bomba del chota',
    'bongo flava',
    'boogaloo',
    'boogie',
    'boogie rock',
    'boogie-woogie',
    'boom bap',
    'bossa nova',
    'bounce',
    'bouncy techno',
    'bouyon',
    'brass band',
    'brazilian bass',
    'break-in',
    'breakbeat',
    'breakbeat hardcore',
    'breakbeat kota',
    'breakcore',
    'breaks',
    'breakstep',
    'brega',
    'brega calypso',
    'brega funk',
    'briddim',
    'brill building',
    'brit funk',
    'britcore',
    'british blues',
    'british brass band',
    'british folk rock',
    'british rhythm & blues',
    'britpop',
    `bro-country`,
    'broadband noise',
    'broken beat',
    'broken transmission',
    'brostep',
    'brutal death metal',
    'brutal prog',
    'bubblegum bass',
    'bubblegum dance',
    'bubblegum pop',
    'bubbling',
    'bubbling house',
    'budots',
    'bulería',
    'bullerengue',
    'burger-highlife',
    'burmese classical',
    'burmese mono',
    'burmese stereo',
    'burning spirits',
    'bytebeat',
    'byzantine chant',
    'c-pop',
    'c86',
    'ca trù',
    'cabaret',
    'cabo zouk',
    'cadence lypso',
    'cadence rampa',
    'cải lương',
    'cajun',
    'cakewalk',
    'čalgija',
    'calipso venezolano',
    'calypso',
    'campursari',
    'campus folk',
    'canción melódica',
    'candombe',
    'candombe beat',
    'cantata',
    'cante alentejano',
    "canterbury scene",
    "canto a lo poeta",
    "canto cardenche",
    "cantonese opera",
    "cantopop",
    "cantoria",
    "cantu a chiterra",
    "cantu a tenore",
    "canzone d'autore",
    "canzone napoletana",
    "canzone neomelodica",
    "cape breton fiddling",
    "cape jazz",
    "caporal",
    "carimbó",
    "carnatic classical",
    "carnavalito",
    "carranga",
    "celtic",
    "celtic chant",
    "celtic electronica",
    "celtic metal",
    "celtic new age",
    "celtic punk",
    "celtic rock",
    "central asian throat singing",
    "chacarera",
    "chachachá",
    "chalga",
    "chamamé",
    "chamarrita açoriana",
    "chamarrita rioplatense",
    "chamber folk",
    "chamber pop",
    "champeta",
    "changa tuki",
    "changüí",
    "chanson à texte",
    "chanson française",
    "chanson réaliste",
    "chap hop",
    "charanga",
    "chazzanut",
    "chèo",
    "chicago blues",
    "chicago bop",
    "chicago drill",
    "chicago house",
    "chicago soul",
    "chicano rap",
    "chilena",
    "chillout",
    "chillstep",
    "chillsynth",
    "chillwave",
    "chimurenga",
    "chinese classical",
    "chinese opera",
    "chinese revolutionary opera",
    "chipmunk soul",
    "chiptune",
    "chopped and screwed",
    "choral symphony",
    "choro",
    "chotis madrileño",
    "christian hip hop",
    "christian metal",
    "christian rock",
    "christmas music",
    "church music",
    "chutney",
    "chutney soca",
    "cilokaq",
    "cinematic classical",
    "ciranda",
    "circus march",
    "city pop",
    "classic blues",
    "classic country",
    "classic jazz",
    "classic rock",
    "classical",
    "classical crossover",
    "classical period",
    "close harmony",
    "cloud rap",
    "club",
    "cocktail nation",
    "coco",
    "coladeira",
    "coldwave",
    "colindă",
    "colour bass",
    "comedy",
    "comedy hip hop",
    "comedy rock",
    "comfy synth",
    "compas",
    "complextro",
    "concert band",
    "concerto",
    "concerto for orchestra",
    "concerto grosso",
    "conducted improvisation",
    "conga",
    "congolese rumba",
    "conscious hip hop",
    "contemporary christian",
    "contemporary classical",
    "contemporary country",
    "contemporary folk",
    "contemporary gospel",
    "contemporary jazz",
    "contemporary r&b",
    "contra",
    "cool jazz",
    "coon song",
    "copla",
    "corrido",
    "corrido tumbado",
    "country",
    "country and irish",
    "country blues",
    "country boogie",
    "country folk",
    "country gospel",
    "country pop",
    "country rap",
    "country rock",
    "country soul",
    "country yodeling",
    "countrypolitan",
    "coupé-décalé",
    "cowboy poetry",
    "cowpunk",
    "crack rock steady",
    "crime jazz",
    "crossbreed",
    "crossover jazz",
    "crossover prog",
    "crossover thrash",
    "cruise",
    "crunk",
    "crunkcore",
    "crust punk",
    "csárdás",
    "cuarteto",
    "cubatón",
    "cueca",
    "cumbia",
    "cumbia argentina",
    "cumbia chilena",
    "cumbia colombiana",
    "cumbia mexicana",
    "cumbia norteña mexicana",
    "cumbia peruana",
    "cumbia pop",
    "cumbia santafesina",
    "cumbia sonidera",
    "cumbia turra",
    "cumbia villera",
    "cumbiatón",
    "cuplé",
    "currulao",
    "cyber metal",
    "cybergrind",
    "cyberpunk",
    "d-beat",
    "dabke",
    "dance",
    "dance-pop",
    "dance-punk",
    "dance-rock",
    "dancefloor drum and bass",
    "dancehall",
    "dangak",
    "dangdut",
    "danmono",
    "dansband",
    "dansktop",
    "danzón",
    "dariacore",
    "dark ambient",
    "dark cabaret",
    "dark disco",
    "dark electro",
    "dark folk",
    "dark jazz",
    "dark plugg",
    "dark psytrance",
    "dark wave",
    "darkcore",
    "darkstep",
    "darksynth",
    "data sonification",
    "death 'n' roll",
    "death industrial",
    "death metal",
    "death-doom metal",
    "deathchant hardcore",
    "deathcore",
    "deathgrind",
    "deathrock",
    "deathstep",
    "deconstructed club",
    "deep funk",
    "deep house",
    "deep soul",
    "deep tech",
    "deep techno",
    "delta blues",
    "dembow",
    "dennery segment",
    "denpa",
    "depressive black metal",
    "descarga",
    "desert blues",
    "desert rock",
    "detroit techno",
    "detroit trap",
    "dhaanto",
    "dhrupad",
    "digicore",
    "digital cumbia",
    "digital fusion",
    "digital hardcore",
    "dimotiko",
    "dirty south",
    "disco",
    "disco polo",
    "dissonant death metal",
    "diva house",
    "divertissement",
    "dixieland",
    "djanba",
    "djent",
    "dobrado",
    "doina",
    "dongjing",
    "donk",
    "donosti sound",
    "doo-wop",
    "doom metal",
    "doomcore",
    "doomgaze",
    "doskpop",
    "downtempo",
    "dream pop",
    "dream trance",
    "dreampunk",
    "drift phonk",
    "drill",
    "drill and bass",
    "drone",
    "drone metal",
    "drum and bass",
    "drumfunk",
    "drumless hip hop",
    "drumline",
    "drumstep",
    "dub",
    "dub poetry",
    "dub techno",
    "dubstep",
    "dubstyle",
    "dubwise",
    "duma",
    "dunedin sound",
    "dungeon rap",
    "dungeon sound",
    "dungeon synth",
    "duranguense",
    "dutch house",
    "eai",
    "east coast hip hop",
    "easy listening",
    "easycore",
    "ebm",
    "eccojams",
    "edm",
    "electric blues",
    "electric texas blues",
    "electro",
    "electro house",
    "electro latino",
    "electro swing",
    "electro-disco",
    "electro-funk",
    "electro-industrial",
    "electroacoustic",
    "electroclash",
    "electronic",
    "electronic rock",
    "electronica",
    "electronicore",
    "electropop",
    "electropunk",
    "electrotango",
    "eleki",
    "embolada",
    "emo",
    "emo pop",
    "emo rap",
    "emocore",
    "emoviolence",
    "enka",
    "éntekhno",
    "epic collage",
    "epic doom metal",
    "estrada",
    "ethereal wave",
    "ethio-jazz",
    "étude",
    "euphoric hardstyle",
    "euro house",
    "euro-disco",
    "euro-trance",
    "eurobeat",
    "eurodance",
    "europop",
    "euskal kantagintza berria",
    "exotica",
    "experimental",
    "experimental big band",
    "experimental electronic",
    "experimental hip hop",
    "experimental rock",
    "expressionism",
    "extratone",
    "fado",
    "fado de coimbra",
    "fairy tale",
    "fakaseasea",
    "falak",
    "famo",
    "fandango",
    "fandango caiçara",
    "fantasia",
    "fantezi",
    "festejo",
    "festival progressive house",
    "festival trap",
    "fidget house",
    "field recording",
    "fife and drum",
    "fife and drum blues",
    "fijiri",
    "filin",
    "filipino rondalla",
    "filk",
    "filmi",
    "finnish tango",
    "flamenco",
    "flamenco jazz",
    "flamenco pop",
    "flashcore",
    "flex dance music",
    "florida breaks",
    "fm synthesis",
    "folk",
    "folk metal",
    "folk pop",
    "folk punk",
    "folk rock",
    "folkhop",
    "folktronica",
    "fon leb",
    "footwork",
    "footwork jungle",
    "forest psytrance",
    "forró",
    "forró eletrônico",
    "forró universitário",
    "freak folk",
    "freakbeat",
    "free folk",
    "free improvisation",
    "free jazz",
    "free tekno",
    "freeform hardcore",
    "freestyle",
    "french electro",
    "french house",
    "frenchcore",
    "frevo",
    "fuji",
    "full-on",
    "funaná",
    "funeral doom metal",
    "funeral march",
    "fungi",
    "funk",
    "funk brasileiro",
    "funk carioca",
    "funk de bh",
    "funk mandelão",
    "funk melody",
    "funk metal",
    "funk ostentação",
    "funk proibidão",
    "funk rock",
    "funknejo",
    "funkot",
    "funktronica",
    "funky house",
    "fusion gugak",
    "future bass",
    "future bounce",
    "future core",
    "future funk",
    "future garage",
    "future house",
    "future rave",
    "future riddim",
    "futurepop",
    "futurism",
    "g-funk",
    "g-house",
    "gabber",
    "gaelic psalm singing",
    "gagaku",
    "gagok",
    "gaita zuliana",
    "gambang kromong",
    "gamelan",
    "gamelan angklung",
    "gamelan beleganjur",
    "gamelan degung",
    "gamelan gender wayang",
    "gamelan gong gede",
    "gamelan gong kebyar",
    "gamelan jegog",
    "gamelan joged bumbung",
    "gamelan salendro",
    "gamelan sekaten",
    "gamelan selunding",
    "gamelan semar pegulingan",
    "gamelan siteran",
    "gangsta rap",
    "garage house",
    "garage punk",
    "garage rock",
    "garage rock revival",
    "garba",
    "geek rock",
    "género chico",
    "género grande",
    "gengetone",
    "għana",
    "ghazal",
    "ghetto funk",
    "ghetto house",
    "ghettotech",
    "ginan",
    "glam",
    "glam metal",
    "glam punk",
    "glam rock",
    "glitch",
    "glitch hop",
    "glitch hop edm",
    "glitch pop",
    "gnawa",
    "go-go",
    "goa trance",
    "gommance",
    "gondang",
    "goombay",
    "goregrind",
    "gorenoise",
    "gospel",
    "gospel house",
    "gospel reggae",
    "gothic",
    "gothic country",
    "gothic metal",
    "gothic rock",
    "gqom",
    "grand opera",
    "grebo",
    "gregorian chant",
    "grime",
    "grindcore",
    "griot",
    "groove metal",
    "group sounds",
    "grunge",
    "guaguancó",
    "guajira",
    "guaracha (Cuban)",
    "guaracha edm (Colombian electronic genre)",
    "guarania",
    "guided meditation",
    "guitarrada",
    "gumbe",
    "guoyue",
    "gwo ka",
    "gypsy jazz",
    "gypsy punk",
    "habanera",
    "haitian vodou drumming",
    "halftime",
    "hambo",
    "hamburger schule",
    "hands up",
    "hanmai",
    "hapa haole",
    "happy hardcore",
    "harawi",
    "hard bop",
    "hard drum",
    "hard house",
    "hard nrg",
    "hard rock",
    "hard techno",
    "hard trance",
    "hard trap",
    "hardbag",
    "hardbass",
    "hardcore breaks",
    "hardcore hip hop",
    "hardcore punk",
    "hardcore techno",
    "hardgroove techno",
    "hardstep",
    "hardstyle",
    "hardvapour",
    "hardwave",
    "harsh noise",
    "harsh noise wall",
    "hát tuồng",
    "hauntology",
    "heartland rock",
    "heaven trap",
    "heavy metal",
    "heavy psych",
    "heikyoku",
    "henan opera",
    "hexd",
    "hi-nrg",
    "hi-tech",
    "highlife",
    "hill country blues",
    "himene tarava",
    "hindustani classical",
    "hip hop",
    "hip hop soul",
    "hip house",
    "hipco",
    "hiplife",
    "holy minimalism",
    "honky tonk",
    "honkyoku",
    "hopepunk",
    "horror punk",
    "horror synth",
    "horrorcore",
    "house",
    "huapango",
    "huayno",
    "humppa",
    "hyangak",
    "hybrid trap",
    "hyper techno",
    "hyperpop",
    "hyphy",
    "hypnagogic pop",
    "idm",
    "idol kayō",
    "illbient",
    "impressionism",
    "indeterminacy",
    "indian classical",
    "indian pop",
    "indie folk",
    "indie pop",
    "indie rock",
    "indie surf",
    "indietronica",
    "indo jazz",
    "indorock",
    "industrial",
    "industrial hardcore",
    "industrial hip hop",
    "industrial metal",
    "industrial musical",
    "industrial rock",
    "industrial techno",
    "instrumental",
    "instrumental hip hop",
    "instrumental jazz",
    "instrumental rock",
    "integral serialism",
    "interview",
    "iraqi maqam",
    "irish folk",
    "isa",
    "isicathamiya",
    "islamic modal music",
    "italo dance",
    "italo house",
    "italo-disco",
    "izlan",
    "izvorna bosanska muzika",
    "j-core",
    "j-pop",
    "j-rock",
    "jácara",
    "jackin house",
    "jaipongan",
    "jam band",
    "jamaican ska",
    "james bay fiddling",
    "jamgrass",
    "jangle pop",
    "japanese classical",
    "javanese gamelan",
    "jazz",
    "jazz blues",
    "jazz fusion",
    "jazz guachaca",
    "jazz mugham",
    "jazz poetry",
    "jazz pop",
    "jazz rap",
    "jazz rock",
    "jazz-funk",
    "jazzstep",
    "jeongak",
    "jerk rap",
    "jersey club",
    "jersey drill",
    "jersey sound",
    "jesus music",
    "jiangnan sizhu",
    "jit",
    "jiuta",
    "joik",
    "jongo",
    "joropo",
    "jōruri",
    "jota",
    "jovem guarda",
    'jubilee',
    'jug band',
    'jùjú',
    'juke',
    'jump blues',
    'jump up',
    'jumpstyle',
    'jungle',
    'jungle dutch',
    'jungle terror',
    'junkanoo',
    'k-pop',
    'kabarett (German political satire)',
    'kacapi suling',
    'kadongo kamu',
    'kafi',
    'kagura',
    'kalattut',
    'kalindula',
    `kalon'ny fahiny`,
    'kaneka',
    'kankyō ongaku',
    'kantan chamorrita',
    'kanto',
    'kapuka',
    'kaseko (Suriname)',
    'kasékò (Guiana)',
    'kawaii future bass',
    'kawaii metal',
    'kayōkyoku',
    'kecak',
    'keroncong',
    'ketuk tilu',
    'khrueang sai',
    'khyal',
    'kidandali',
    'kidumbak',
    'kilapanga',
    'kirtan',
    'kizomba',
    'klapa',
    'kleinkunst',
    'klezmer',
    'kliningan',
    'könsrock',
    'koplo',
    'korean ballad',
    'korean classical',
    'korean revolutionary opera',
    'kouta',
    'krakowiak',
    'krautrock',
    'kuda lumping',
    'kuduro',
    'kujawiak',
    'kulintang',
    'kumi-daiko',
    'kumiuta',
    'kundiman',
    'kwaito',
    'kwassa kwassa',
    'kwela',
    'kyivan chant',
    'laiko',
    'lambada',
    'landó',
    'langgam jawa',
    'latin',
    "latin ballad",
    "latin disco",
    "latin funk",
    "latin house",
    "latin jazz",
    "latin pop",
    "latin rock",
    "latin soul",
    "lavani",
    "lecture",
    "leftfield",
    "lento violento",
    "levenslied",
    "lied",
    "liedermacher",
    "liquid funk",
    "liscio",
    "livetronica",
    "lo-fi",
    "lo-fi hip hop",
    "lo-fi house",
    "lolicore",
    "louisiana blues",
    "lounge",
    "lovers rock",
    "lowend",
    "lowercase",
    "luk krung",
    "luk thung",
    "lullaby",
    "lundu",
    "lute song",
    "mad",
    "madchester",
    "maddahi",
    "madrigal",
    "maftirim",
    "mahori",
    "mahraganat",
    "mainstream rock",
    "makina",
    "makossa",
    "malagueña venezolana",
    "malay gamelan",
    "malhun",
    "mallsoft",
    "malouf",
    "maloya",
    "maloya élektrik",
    "mambo",
    "mambo chileno",
    "mambo urbano",
    "mandopop",
    "manele",
    "mangue beat",
    "manila sound",
    "manyao",
    "marabi",
    "maracatu",
    "march",
    "marching band",
    "marchinha",
    "mariachi",
    "marinera",
    "marrabenta",
    "martial industrial",
    "mashcore",
    "maskanda",
    "mass",
    "math pop",
    "math rock",
    "mathcore",
    "maxixe",
    "mazurka",
    "mbalax",
    "mbaqanga",
    "mbube",
    "mchiriku",
    "medieval",
    "medieval lyric poetry",
    "medieval metal",
    "medieval rock",
    "mega funk",
    "meiji shinkyoku",
    "melbourne bounce",
    "melodic black metal",
    "melodic death metal",
    "melodic dubstep",
    "melodic hardcore",
    "melodic house",
    "melodic metalcore",
    "melodic techno",
    "melodic trance",
    "mélodie",
    "memphis rap",
    "mento",
    "menzuma",
    "merecumbé",
    "merengue",
    "merengue típico",
    "merenhouse",
    "merequetengue",
    "méringue",
    "merseybeat",
    "metal",
    "metalcore",
    "meyxana",
    "miami bass",
    "microhouse",
    "microsound",
    "microtonal classical",
    "midtempo bass",
    "midwest emo",
    "miejski folk",
    "milonga",
    "min'yō",
    "minatory",
    "mincecore",
    "minimal drum and bass",
    "minimal synth",
    "minimal techno",
    "minimal wave",
    "minimalism",
    "minneapolis sound",
    "minstrelsy",
    "mobb music",
    "mod",
    "mod revival",
    "moda de viola",
    "modal jazz",
    "modern blues",
    "modern classical",
    "modern creative",
    "modern hardtek",
    "modern laiko",
    "modinha",
    "moe song",
    "monodrama",
    "mood kayō",
    "moogsploitation",
    "moombahcore",
    "moombahton",
    "mor lam",
    "mor lam sing",
    "morenada",
    "morna",
    "moroccan chaabi",
    "motet",
    "motown",
    "moutya",
    "movimiento alterado",
    "mozarabic chant",
    "mpb",
    "mugham",
    "muiñeira",
    "mulatós",
    "muliza",
    "murga",
    "murga uruguaya",
    "musette",
    "music hall",
    "música cebolla",
    "música criolla",
    "música de intervenção",
    "música típica chilena",
    "musical",
    "musique concrète",
    "musique concrète instrumentale",
    "muzika yehudit mekorit",
    "muziki wa dansi",
    "nagauta",
    "narcocorrido",
    "narodnozabavna glasba",
    "nasheed",
    "nashville sound",
    "native american new age",
    "nature sounds",
    "natya sangeet",
    "nederbeat",
    "nederpop",
    "neo kyma",
    "neo soul",
    "neo-acoustic",
    "neo-grime",
    "neo-medieval folk",
    "neo-progressive rock",
    "neo-psychedelia",
    "neo-rockabilly",
    "néo-trad",
    "neo-traditional country",
    "neoclassical dark wave",
    "neoclassical metal",
    "neoclassical new age",
    "neoclassicism",
    "neocrust",
    "neofolk",
    "neofolklore",
    "neon pop punk",
    "neoperreo",
    "nerdcore",
    "nerdcore techno",
    "neue deutsche härte",
    "neue deutsche welle",
    "neurofunk",
    "neurohop",
    "new age",
    "new beat",
    "new complexity",
    "new jack swing",
    "new orleans blues",
    "new orleans r&b",
    "new rave",
    "new romantic",
    "new wave",
    "ngoma",
    "nhạc đỏ",
    "nhạc vàng",
    "night full-on",
    "nightcore",
    "nigun",
    "nintendocore",
    "nitzhonot",
    "njuup",
    "no melody trap",
    "no wave",
    "nocturne",
    "noh",
    "noise",
    "noise pop",
    "noise rock",
    "noisecore",
    "non-music",
    "nortec",
    "norteño",
    "northern soul",
    "nouveau zydeco",
    "nova cançó",
    "novelty piano",
    "novo dub",
    "nu disco",
    "nu jazz",
    "nu metal",
    "nu skool breaks",
    "nu style gabber",
    "nueva canción",
    "nueva canción chilena",
    "nueva canción española",
    "nueva cumbia chilena",
    "nueva trova",
    "nuevo cancionero",
    "nuevo flamenco",
    "nuevo tango",
    "nwobhm",
    "nyū myūjikku",
    "oberek",
    "occult rock",
    "odissi classical",
    "oi",
    "old roman chant",
    "old school death metal",
    "old school hip hop",
    "old-time",
    "omutibo",
    "onda nueva",
    "ondō",
    "onkyo",
    "opera",
    "opera buffa",
    "opéra comique",
    "opera semiseria",
    "opera seria",
    "opera-ballet",
    "operatic pop",
    "operetta",
    "opm",
    "oratorio",
    "orchestral",
    "orchestral jazz",
    "orchestral song",
    "orchestral waltz",
    "orchestral wave",
    "orebro indie",
    "organic ambient",
    "organic electronic",
    "organic house",
    "orgcore",
    "orquesta tropical",
    "orquesta tropical venezolana",
    "orquesta típica",
    "orquesta típica argentina",
    "orquesta típica catalana",
    "orquesta típica chilena",
    "orquesta típica uruguaya",
    "orquesta tropical",
    "orthodox chant",
    "ostrock",
    "ottoman military",
    "ottoman classical",
    "oud",
    "oul",
    "outlaw country",
    "outsider",
    "outsider house",
    'organic house',
    'ori deck',
    'oriental ballad',
    'orkes gambus',
    'orthodox pop',
    'outlaw country',
    'outsider house',
    'overture',
    'özgün müzik',
    'p-funk',
    'pachanga',
    'pacific reggae',
    'pagan black metal',
    'pagan folk',
    'paghjella',
    'pagodão',
    'pagode',
    'pagode romântico',
    'paisley underground',
    'palingsound',
    'palm-wine',
    'pansori',
    'parang',
    'partido alto',
    'pasillo',
    'pasodoble',
    'payada',
    'peak time techno',
    'pep band',
    'persian classical',
    'persian pop',
    'philly club',
    'philly soul',
    'phleng phuea chiwit',
    'phonk',
    'phonk house',
    'piano blues',
    'piano rock',
    'picopop',
    'piedmont blues',
    'pilón',
    'pimba',
    'pinpeat',
    'pìobaireachd',
    'pipe band music',
    'piphat',
    'piseiro',
    'piyyut',
    'pizzica',
    'plainchant',
    'plena',
    'plugg',
    'pluggnb',
    'plunderphonics',
    'poetry',
    'polca criolla',
    'political hip hop',
    'polka',
    'polka paraguaya',
    'polonaise',
    'pon-chak disco',
    'pop',
    'pop ghazal',
    'pop kreatif',
    'pop metal',
    'pop minang',
    'pop punk',
    'pop raï',
    'pop rap',
    'pop rock',
    'pop soul',
    'pop yeh-yeh',
    'porn groove',
    'pornogrind',
    'porro',
    'post-bop',
    'post-britpop',
    'post-classical',
    'post-grunge',
    'post-hardcore',
    'post-industrial',
    'post-metal',
    'post-minimalism',
    'post-punk',
    'post-punk revival',
    'post-rock',
    'powada',
    'power electronics',
    'power metal',
    'power noise',
    'power pop',
    'power soca',
    'powerstomp',
    'powerviolence',
    'praise & worship',
    'prank calls',
    'prelude',
    'production music',
    'progressive',
    'progressive bluegrass',
    'progressive breaks',
    'progressive country',
    'progressive electronic',
    'progressive folk',
    'progressive house',
    'progressive metal',
    'progressive pop',
    'progressive psytrance',
    'progressive rock',
    'progressive trance',
    'proto-punk',
    'psichedelia occulta italiana',
    'psybient',
    'psybreaks',
    'psychedelic',
    'psychedelic folk',
    'psychedelic pop',
    'psychedelic rock',
    'psychedelic soul',
    'psychobilly',
    'psycore',
    'psystyle',
    'psytrance',
    'pub rock',
    'pungmul',
    'punk',
    'punk blues',
    'punk rap',
    'punk rock',
    'punta',
    'punto',
    'purple sound',
    'puxa',
    'q-pop',
    'qaraami',
    'qasidah modern',
    'qawwali',
    'quan họ',
    'queercore',
    'quiet storm',
    'quyi',
    'r&b',
    'rabiz',
    'raga rock',
    'ragga',
    'ragga hip-hop',
    'ragga jungle',
    'raggacore',
    'raggatek',
    'ragtime',
    'raï',
    'ranchera',
    'rap metal',
    'rap rock',
    'rapcore',
    'rapso',
    'rara',
    'rasin',
    'rasqueado cuiabano',
    'rasteirinha',
    'ratchet music',
    'rautalanka',
    'rave',
    'raw punk',
    'rawphoric',
    'rawstyle',
    'rebetiko',
    'red dirt',
    'red song',
    'reductionism',
    'regalia',
    'reggae',
    'reggae rock',
    'reggae-pop',
    'reggaeton',
    'regional mexicano',
    'renaissance',
    'repente',
    'requiem',
    'revue',
    'rhumba (US "ballroom rumba")',
    'ricercar',
    'riddim dubstep',
    'rigsar',
    'ring shout',
    'riot grrrl',
    'ripsaw',
    'ritual ambient',
    'rizitika',
    'rkt',
    'rock',
    'rock and roll',
    'rock andaluz',
    'rock andino',
    'rock musical',
    'rock opera',
    'rock rural',
    'rock urbano',
    'rockabilly',
    'rocksteady',
    'rōkyoku',
    'rom kbach',
    'romanian popcorn',
    'romantic classical',
    'romantische oper',
    'rominimal',
    'roots reggae',
    'roots rock',
    'rumba',
    'rumba catalana',
    'rumba cubana',
    'rumba flamenca',
    'runo song',
    'russian chanson',
    'russian romance',
    'ryūkōka',
    'sacred harp',
    'sacred steel',
    'saeta',
    'salegy',
    'salsa',
    'salsa choke',
    'salsa dura',
    'salsa romántica',
    'saluang klasik',
    'samba',
    'samba de breque',
    'samba de gafieira',
    'samba de roda',
    'samba de terreiro',
    'samba soul',
    'samba-canção',
    'samba-choro',
    'samba-enredo',
    'samba-exaltação',
    'samba-jazz',
    'samba-joia',
    'samba-reggae',
    'samba-rock',
    'sambalanço',
    'sambass',
    'sampledelia',
    'sanjo',
    'santé engagé',
    'sarala gee',
    'sardana',
    'sasscore',
    'sawt',
    'saya afroboliviana',
    'schlager',
    'schottische',
    'schranz',
    'screamo',
    'scrumpy and western',
    'sea shanty',
    'sean-nós',
    'seapunk',
    'séga',
    'seggae',
    'seguidilla',
    'seishun punk',
    'semba',
    'semi-trot',
    'serenade',
    'serialism',
    'sertanejo',
    'sertanejo raiz',
    'sertanejo romântico',
    'sertanejo universitário',
    'seto leelo',
    'sevdalinka',
    'sevillanas',
    'shaabi',
    'shabad kirtan',
    `shan'ge`,
    'shangaan electro',
    'shanto',
    'shashmaqam',
    'shatta',
    'shibuya-kei',
    'shidaiqu',
    'shima-uta',
    'shinkyoku',
    'shitgaze',
    'shoegaze',
    'shōmyō',
    'sierreño',
    'sigidrigi',
    'sigilkore',
    'sinawi',
    'sinfonia concertante',
    'singeli',
    'singer-songwriter',
    'singspiel',
    'ska',
    'ska punk',
    'skacore',
    'skate punk',
    'sketch comedy',
    'skiffle',
    'skiladiko',
    'skinhead reggae',
    'skullstep',
    'skweee',
    'slack-key guitar',
    'slacker rock',
    'slam death metal',
    'slam poetry',
    'slap house',
    'slow waltz',
    'slowcore',
    'sludge metal',
    'slushwave',
    'smooth jazz',
    'smooth soul',
    'snap',
    'soca',
    'soft rock',
    'sōkyoku',
    'son calentano',
    'son cubano',
    'son huasteco',
    'son istmeño',
    'son jarocho',
    'son montuno',
    'sonata',
    'songo',
    'sonorism',
    'sophisti-pop',
    'soukous',
    'soul',
    'soul blues',
    'soul jazz',
    'sound art',
    'sound collage',
    'sound effects',
    'sound poetry',
    'southeast asian classical',
    'southern gospel',
    'southern hip hop',
    'southern metal',
    'southern rock',
    'southern soul',
    'sovietwave',
    'space age pop',
    'space ambient',
    'space disco',
    'space rock',
    'space rock revival',
    'spacesynth',
    'spectralism',
    'speech',
    'speed garage',
    'speed house',
    'speed metal',
    'speedcore',
    'spiritual jazz',
    'spirituals',
    'splittercore',
    'spoken word',
    'spouge',
    'staïfi',
    'standup comedy',
    'steampunk',
    'stenchcore',
    'stochastic music',
    'stomp and holler',
    'stoner metal',
    'stoner rock',
    'stornello',
    'street punk',
    'stride',
    'sufi rock',
    'sufiana kalam',
    'sundanese pop',
    'sungura',
    'sunshine pop',
    'suomisaundi',
    'surf',
    'surf punk',
    'surf rock',
    'sutartinės',
    'swamp blues',
    'swamp pop',
    'swamp rock',
    'swancore',
    'swing',
    'swing revival',
    'symphonic black metal',
    'symphonic metal',
    'symphonic poem',
    'symphonic prog',
    'symphonic rock',
    'symphony',
    'synth funk',
    'synth-pop',
    'synthwave',
    't-pop',
    'taarab',
    'tajaraste',
    'takamba',
    'talempong',
    'talempong goyang',
    'talking blues',
    'tallava',
    'tamborera',
    'tamborito',
    'tamborzão',
    'tammurriata',
    'tân cổ giao duyên',
    'tango',
    'tanjidor',
    'tape music',
    'tappa',
    'taquirari',
    'tarantella',
    'tarraxinha',
    'tassu',
    'tchinkoumé',
    `tearout (older dubstep subgenre')`,
    'tearout brostep',
    'tech house',
    'tech trance',
    'technical death metal',
    'technical thrash metal',
    'techno',
    'techno bass',
    'techno kayō',
    'technobanda',
    'techstep',
    'tecnobrega',
    'tecnofunk',
    'tecnomerengue',
    'tecnorumba',
    'teen pop',
    'tejano',
    'tembang cianjuran',
    'terrorcore',
    'tex-mex',
    'texas blues',
    'texas country',
    'thai classical',
    'third stream',
    'third wave ska',
    'thrash metal',
    'thrashcore',
    'thumri',
    'tiento',
    'timba',
    'timbila',
    'tin pan alley',
    'tizita',
    'toada de boi',
    'toccata',
    'tonada asturiana',
    'tonada potosina',
    'tonadilla',
    'tondero',
    'tontipop',
    'totalism',
    'township bubblegum',
    'township jive',
    'tradi-modern',
    'traditional black gospel',
    'traditional country',
    'traditional doom metal',
    'traditional pop',
    'tragédie en musique',
    'trallalero',
    'trampská hudba',
    'trance',
    'trance metal',
    'trancestep',
    'trap',
    'trap edm',
    'trap latino',
    'trap metal',
    'trap shaabi',
    'trap soul',
    'tread',
    'tribal ambient',
    'tribal guarachero',
    'tribal house',
    'trip hop',
    'tropical house',
    'tropical rock',
    'tropicália',
    'tropicanibalismo',
    'tropipop',
    'trot',
    'trova',
    'trova yucateca',
    'truck driving country',
    'tsapiky',
    'tsonga disco',
    'tsugaru-jamisen',
    'tumba',
    'tumba francesa',
    'tumbélé',
    'turbo-folk',
    'turkish classical',
    'turntablism',
    'twee pop',
    'twerk',
    'uk drill',
    'uk funky',
    'uk garage',
    'uk hardcore',
    'uk jackin',
    'uk street soul',
    'uk82',
    'unakesa',
    'underground hip hop',
    'unyago',
    'upopo',
    'uptempo hardcore',
    'urban cowboy',
    'urtiin duu',
    'urumi melam',
    'utopian virtual',
    'uzun hava',
    'v-pop',
    'vaigat',
    'vallenato',
    'vals criollo',
    'valsa brasileira',
    'vanera',
    'vaportrap',
    'vaporwave',
    'vaudeville',
    'vaudeville blues',
    'vedic chant',
    'verbunkos',
    'verismo',
    'vietnamese bolero',
    'vietnamese classical',
    'viking metal',
    'viking rock',
    'vinahouse',
    'visa',
    'visual kei',
    'vocal house',
    'vocal jazz',
    'vocal surf',
    'vocal trance',
    'vocalese',
    'volkstümliche musik',
    'vude',
    'waka',
    'waltz',
    'war metal',
    'wassoulou',
    'waulking song',
    'wave',
    'weightless',
    'west coast breaks',
    'west coast hip hop',
    'west coast swing',
    'western (cowboy/western country)',
    'western classical',
    'western swing',
    'whale song',
    'whistling',
    'white voice',
    'winter synth',
    'witch house',
    'wong shadow',
    'wonky',
    'wonky techno',
    'work song',
    'world fusion',
    'xẩm',
    'xote',
    'xuc',
    'yacht rock',
    'yakousei',
    'yangzhou opera',
    'yaraví',
    'yayue',
    'yé-yé',
    'yodeling',
    'ytpmv',
    'yu-mex',
    'yue opera',
    'yukar',
    'zamacueca',
    'zamba',
    'zamrock',
    'zarzuela',
    'zarzuela barroca',
    'zeitoper',
    'zema',
    'zenonesque',
    'zess',
    'zeuhl',
    'zeybek',
    'zhongguo feng',
    'ziglibithy',
    'zinli',
    'znamenny chant',
    'zoblazo',
    'zohioliin duu',
    'zolo',
    'zouglou',
    'zouk',
    'zouk love',
    'zydeco'];

// Get input and list elements
const inputElement = document.querySelector('#dropdownInput');
const listElement = document.querySelector('#dropdown-menu');

// Event listener for input changes
inputElement.addEventListener('input', function(event) {
    event.preventDefault();
    const inputText = this.value.toLowerCase();
    const filteredSuggestions = genreList.filter(suggestion =>
        suggestion.toLowerCase().startsWith(inputText)
    );

    displayGenreList(filteredSuggestions);
});

// Function to display autocomplete
function displayGenreList(genre) {
    listElement.innerHTML = '';
    genre.forEach(suggestion => {
        const liElement = document.createElement('li');
        liElement.classList.add('ps-2', "fw-lighter")
        liElement.textContent = suggestion;
        liElement.addEventListener('click', function() {
            inputElement.value = suggestion;
            listElement.innerHTML = '';
        });
        listElement.appendChild(liElement);
    });
}