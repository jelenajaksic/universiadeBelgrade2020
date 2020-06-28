const sites = [
    {
        id: 1,
        title: "BELGRADE FORTRESS",
        subtitle: "Enduring fortress built in 279 BCE",
        likes: "173",
        myLike: false,
        picture1: "belgrade4.jpg", 
        picture2: "fortress1.jpg",
        picture3: "fortress2.jpg",
        picture4: "belgrade2.jpg",
        body: "Belgrade Fortress, consists of the old citadel and Kalemegdan Park on the confluence of the River Sava and Danube, in an urban area of modern Belgrade, the capital of Serbia. It is located in Belgrade's municipality of Stari Grad. Belgrade Fortress was declared a Monument of Culture of Exceptional Importance in 1979, and is protected by the Republic of Serbia. It is the most visited tourist attraction in Belgrade, with Skadarlija being the second. Since the admission is free, it is estimated that the total number of visitors is over 2 million yearly"
    },
    {
        id: 2,
        title: "KALEMEGDAN PARK",
        subtitle: "Massive park with a zoo & river views",
        likes: "98",
        myLike: false,
        picture1: "kalemegdan1.jpg", 
        picture2: "kalemegdan2.jpg",
        picture3: "belgrade3.jpg",
        picture4: "kalemegdan3.jpg",
        body: "Kalemegdan Park or simply Kalemegdan, is the largest park and the most important historical monument in Belgrade. It is located on a 125-metre-high cliff, at the junction of the River Sava and the Danube. Its name is formed from the two Turkish words: Kale and archaic word of Turkish origin megdan. Kalemegdan Park, split in two as the Great and Little Parks, was developed in the area that once was the town field. It provides places of rest and entertainment. Belgrade Fortress and Kalemegdan Park together represent a cultural monument of exceptional importance, the area where various sport, cultural and arts events take place, for all generations of Belgraders and numerous visitors of the city"
    },
    {
        id: 3,
        title: "TEMPLE OF SAINT SAVA",
        subtitle: "Monumental Byzantine-revival church",
        likes: "133",
        myLike: false,
        picture1: "hram1.jpg", 
        picture2: "belgrade1.jpg",
        picture3: "hram3.jpg",
        picture4: "hram4.jpg",
        body: "The Church of Saint Sava is a Serbian Orthodox church which sits on the Vračar plateau in Belgrade, Serbia. It was planned as the bishopric seat and main cathedral of the Serbian Orthodox Church. The church is dedicated to Saint Sava, the founder of the Serbian Orthodox Church and an important figure in medieval Serbia. It is built on the presumed location of St. Sava's grave. His coffin had been moved from Mileševa Monastery to Belgrade. It was placed on a pyre and burnt in 1595 by Ottoman Grand Vizier Sinan Pasha. Bogdan Nestorović and Aleksandar Deroko were finally chosen to be the architects in 1932 after a second revised competition in 1926/27. This sudden decision instigated an important debate in interwar Yugoslavia which centred around the temple's size, design and symbolic national function. It was even thought to transform Belgrade into the centre of Orthodoxy"
    },
    {
        id: 4,
        title: "KNEZ MIHAILOVA STREET",
        subtitle: "Prominent street with historic buildings",
        likes: "153",
        myLike: false,
        picture1: "knez1.jpg", 
        picture2: "knez2.jpg",
        picture3: "knez3.jpg",
        picture4: "knez4.jpg",
        body: "Knez Mihailova Street, properly Kneza Mihaila, is the main pedestrian and shopping zone in Belgrade, and is protected by law as one of the oldest and most valuable landmarks of the city. Named after Mihailo Obrenović III, Prince of Serbia, it features a number of buildings and mansions built during the late 1870s. One kilometer long Knez Mihailova Street was in 1979 included on the list of Spatial Cultural-Historical Units of Great Importance, and as such is protected by the Republic of Serbia. Knez Mihailova Street, properly Kneza Mihaila, is the main pedestrian and shopping zone in Belgrade, and is protected by law as one of the oldest and most valuable landmarks of the city. Named after Mihailo Obrenović III, Prince of Serbia, it features a number of buildings and mansions built during the late 1870s. One kilometer long Knez Mihailova Street was in 1979 included on the list of Spatial Cultural-Historical Units of Great Importance, and as such is protected by the Republic of Serbia."
    },
    {
        id: 5,
        title: "NATIONAL MUSEUM",
        subtitle: "Grand place for historical art & objects",
        likes: "173",
        myLike: false,
        picture1: "narodni1.jpg", 
        picture2: "narodni2.jpg",
        picture3: "narodni3.jpg",
        picture4: "narodni4.jpg",
        body: "The National Museum in Belgrade is the largest and oldest museum in Belgrade, Serbia. It is located in the central zone of Belgrade on a square plot between the Republic Square, formerly Theatre Square, and three streets: Čika Ljubina, Vasina and Laze Pačua. Its main facade is on the Republic Square and the official address ia 1a Republic Square. The museum was established on 10 May 1844. It moved into the present building in 1950, with the grand opening of the venue on 23 May 1952. Since its founding, the museum's collection has grown to over 400,000 objects, including many foreign masterpieces. The National Museum in Belgrade building was declared a Monument of Culture of Great Importance in 1979."
    },
    {
        id: 6,
        title: "MUSEUM OF YUGOSLAVIA",
        subtitle: "Museum dedicated to Yugoslavian history",
        likes: "98",
        myLike: false,
        picture1: "juga1.jpg", 
        picture2: "juga4.jpg",
        picture3: "juga3.jpg",
        picture4: "juga2.jpg",
        body: "The Museum of Yugoslavia is a public history museum in Belgrade, the capital of Serbia. It chronicles the period of Kingdom of Yugoslavia and Socialist Yugoslavia as well as the life of Josip Broz Tito. Tito's grave is located in one of the Museum buildings. With 120,000 visitors annually, it is the most visited museum in Serbia The Museum of Yugoslavia is a public history museum in Belgrade, the capital of Serbia. It chronicles the period of Kingdom of Yugoslavia and Socialist Yugoslavia as well as the life of Josip Broz Tito. Tito's grave is located in one of the Museum buildings. With 120,000 visitors annually, it is the most visited museum in Serbia"
    },
    {
        id: 7,
        title: "NIKOLA TESLA MUSEUM",
        subtitle: "Museum devoted to inventor Nikola Tesla",
        likes: "83",
        myLike: false,
        picture1: "tesla3.jpg", 
        picture2: "tesla4.jpg",
        picture3: "tesla2.jpg",
        picture4: "tesla1.jpg",
        body: "The Nikola Tesla Museum is a science museum located in the central area of Belgrade, the capital of Serbia. It is dedicated to honoring and displaying the life and work of Nikola Tesla. It holds more than 160,000 original documents, over 2,000 books and journals, over 1,200 historical technical exhibits, over 1,500 photographs and photo plates of original, technical objects, instruments and apparatus, and over 1,000 plans and drawings. The Nikola Tesla Archive was inscribed on UNESCO's Memory of the World Programme Register in 2003 due to its critical role regarding history of electrification of the world and future technological advancements in this area"
    },
    {
        id: 8,
        title: "ADA CIGANLIJA",
        subtitle: "River peninsula used for recreation",
        likes: "153",
        myLike: false,
        picture1: "ada1.jpg", 
        picture2: "ada.jpg",
        picture3: "ada2.jpg",
        picture4: "ada4.jpg",
        body: "Ada Ciganlija, colloquially shortened to Ada, is a river island that has artificially been turned into a peninsula, located in the Sava River's course through central Belgrade, the capital of Serbia. The name can also refer to the adjoining artificial Lake Sava and its beach. To take advantage of its central location, over the past few decades, it was turned into an immensely popular recreational zone, most notable for its beaches and sports facilities, which, during summer seasons, can have over 100,000 visitors daily and up to 300,000 visitors over the weekend. Owing to this popularity, Ada Ciganlija has been commonly nicknamed More Beograda, which was officially accepted as an advertising slogan in 2008, stylised as More BeogrADA."
    },
    {
        id: 9,
        title: "AVALA",
        subtitle: "Mountain & historic mining area",
        likes: "98",
        myLike: false,
        picture1: "avala1.jpg", 
        picture2: "avala2.jpg",
        picture3: "avala3.jpg",
        picture4: "avala4.jpg",
        body: "Avala is a mountain in Serbia, overlooking Belgrade. It is situated in the south-eastern corner of the city and provides a great panoramic view of Belgrade, Vojvodina and Šumadija, as the surrounding area on all sides is mostly lowlands. It stands at 511 metres above sea level, which means that it enters the locally defined mountain category just by 11 m. Avala is a mountain in Serbia, overlooking Belgrade. It is situated in the south-eastern corner of the city and provides a great panoramic view of Belgrade, Vojvodina and Šumadija, as the surrounding area on all sides is mostly lowlands. It stands at 511 metres above sea level, which means that it enters the locally defined mountain category just by 11 m."
    },
    // {
    //     id: 10,
    //     title: "NATIONAL MUSEUM",
    //     subtitle: "Top destination of the year",
    //     likes: "13",
    //     myLike: true,
    //     picture: '../assets/kalemegdan.jpg',
    //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta dolor at mauris pulvinar, sit amet gravida justo tincidunt. Maecenas pretium pulvinar nisi in placerat. Phasellus varius vel velit eget placerat. Morbi pharetra enim vitae consequat finibus. Sed aliquam purus vel mollis viverra. Suspendisse interdum eget arcu vel volutpat. Proin tincidunt finibus ullamcorper. Morbi id orci at dolor volutpat scelerisque. Ut vitae ipsum id massa feugiat tempus. Donec placerat sed dui in luctus. In at consequat dolor, vitae mollis nunc. Proin sed venenatis lorem. Curabitur aliquam fringilla dui, laoreet condimentum mauris lacinia cursus. Aenean elementum tempus felis a tincidunt. Nam elementum enim ac dui mollis, sit amet ultricies quam accumsan. Donec in condimentum ligula. Nulla vel iaculis sem, quis lacinia est. Donec et tortor non enim dignissim convallis. Nam sagittis, est vel sollicitudin rutrum, enim erat aliquet justo, non facilisis orci velit vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sem sit amet mauris pellentesque mattis. Praesent nulla urna, porttitor id justo ut, placerat porttitor nibh. Etiam tortor ipsum, elementum feugiat purus ac, ullamcorper gravida nulla. Nam mattis sollicitudin nibh non lacinia. Ut sagittis, turpis sit amet mollis volutpat, orci urna pretium lectus, in sodales turpis velit vitae metus. Phasellus sed nisl eget nulla porta fermentum a id risus. Maecenas ipsum dui, interdum nec felis quis, rhoncus rutrum tortor.",
    // },
    // {
    //     id: 11,
    //     title: "ADA CIGANLIJA",
    //     subtitle: "Top destination of the year",
    //     likes: "153",
    //     myLike: false,
    //     picture: '../assets/kalemegdan.jpg',
    //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta dolor at mauris pulvinar, sit amet gravida justo tincidunt. Maecenas pretium pulvinar nisi in placerat. Phasellus varius vel velit eget placerat. Morbi pharetra enim vitae consequat finibus. Sed aliquam purus vel mollis viverra. Suspendisse interdum eget arcu vel volutpat. Proin tincidunt finibus ullamcorper. Morbi id orci at dolor volutpat scelerisque. Ut vitae ipsum id massa feugiat tempus. Donec placerat sed dui in luctus. In at consequat dolor, vitae mollis nunc. Proin sed venenatis lorem. Curabitur aliquam fringilla dui, laoreet condimentum mauris lacinia cursus. Aenean elementum tempus felis a tincidunt. Nam elementum enim ac dui mollis, sit amet ultricies quam accumsan. Donec in condimentum ligula. Nulla vel iaculis sem, quis lacinia est. Donec et tortor non enim dignissim convallis. Nam sagittis, est vel sollicitudin rutrum, enim erat aliquet justo, non facilisis orci velit vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt sem sit amet mauris pellentesque mattis. Praesent nulla urna, porttitor id justo ut, placerat porttitor nibh. Etiam tortor ipsum, elementum feugiat purus ac, ullamcorper gravida nulla. Nam mattis sollicitudin nibh non lacinia. Ut sagittis, turpis sit amet mollis volutpat, orci urna pretium lectus, in sodales turpis velit vitae metus. Phasellus sed nisl eget nulla porta fermentum a id risus. Maecenas ipsum dui, interdum nec felis quis, rhoncus rutrum tortor.",
    // }
    
  ];
  
  export default sites;