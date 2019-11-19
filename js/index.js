// Homework
// - Create an array of objects with at least 4 objects in the array
// - Make sure each object has at least 3 properties
// - Iterate your array using .map()
// - Update the DOM to show all four objects and each of the 3 properties

// Bonus
// - Add a Nav bar to your index.html
// - Give your objects a src property that you then use to load an image


//Mobile Navigation Toggle @ 1024px

let hamburger = document.getElementById('hamburger-nav');
let hiddenNav = document.getElementById('hidden-nav');

hamburger.addEventListener('click', () => {
    hiddenNav.classList.toggle('navbar-mobile-reveal');
});


// New Listing Array Object to populate the spash page.
let newListings = [{
        imgSrc: '../images/porschebuy12.jpg',
        model: '356 Emory Motors',
        year: 2017
    },
    {
        imgSrc: '../images/porschebuy3.jpg',
        model: '911 Targa',
        year: 2010
    },
    {
        imgSrc: '../images/porschebuy2.jpg',
        model: 'Cayman Black Edition',
        year: 2017
    },
];


// Main Collection for the collection gallery with information hidden / revealed on hover state.
let collectionListing = [{
        id: 'image1',
        listId: 'list1',
        model: '356 Emory Outlaw',
        year: 2017,
        kilometres: 3000,
        color: 'Brown',
        location: 'Montreal, QC',
        price: '$233,000',
        imgSrc: '../images/porschebuy12.jpg'
    },
    {
        id: 'image2',
        listId: 'list2',
        model: '719 Boxster Spyder',
        year: 2007,
        kilometres: 31000,
        color: 'White',
        location: 'Toronto, ON',
        price: '$76,000',
        imgSrc: '../images/porschebuy9.jpg'
    },
    {
        id: 'image3',
        listId: 'list3',
        model: '911 Cabriolet',
        year: 2010,
        kilometres: 5000,
        color: 'Yellow',
        location: 'Laval, QC',
        price: '$102,000',
        imgSrc: '../images/porschebuy1.jpg'
    },
    {
        id: 'image4',
        listId: 'list4',
        model: '911 Cabriolet',
        year: 2016,
        kilometres: 14000,
        color: 'Brown',
        location: 'Montreal, QC',
        price: '$147,000',
        imgSrc: '../images/porschebuy6.jpg'
    },
    {
        id: 'image5',
        listId: 'list5',
        model: '911 GT3 RS40',
        year: 2016,
        kilometres: 14000,
        color: 'White',
        location: 'Laval, QC',
        price: '$302,000',
        imgSrc: '../images/porschebuy8.jpg'
    },
    {
        id: 'image6',
        listId: 'list6',
        model: '968 GT',
        year: 2005,
        kilometres: 121000,
        color: 'Yellow',
        location: 'Montreal, QC',
        price: '$26,000',
        imgSrc: '../images/porschebuy13.jpg'
    },
    {
        id: 'image7',
        listId: 'list7',
        model: '911 Targa',
        year: 2010,
        kilometres: 141000,
        color: 'Red',
        location: 'Montreal, QC',
        price: '$82,000',
        imgSrc: '../images/porschebuy3.jpg'
    },
    {
        id: 'image8',
        listId: 'list8',
        model: '356 Emory Outlaw',
        year: 2017,
        kilometres: 2000,
        color: 'Silver',
        location: 'Montreal, QC',
        price: '$270,000',
        imgSrc: '../images/porschebuy10.jpg'
    },
    {
        id: 'image9',
        listId: 'list9',
        model: `356 Emory Spyder`,
        year: 2018,
        kilometres: 1000,
        color: 'white',
        location: 'Montreal, QC',
        price: '$333,000',
        imgSrc: '../images/porschebuy11.jpg'
    },
    {
        id: 'image10',
        listId: 'list10',
        model: 'Panamera',
        year: 2018,
        kilometres: 14000,
        color: 'White',
        location: 'Montreal, QC',
        price: '$97,000',
        imgSrc: '../images/porschebuy4.jpg'
    },
    {
        id: 'image11',
        listId: 'list11',
        model: '911 GT3 Sport',
        year: 2019,
        kilometres: 1000,
        color: 'White',
        location: 'Montreal, QC',
        price: '$207,000',
        imgSrc: '../images/porsche6.jpg'
    },
    {
        id: 'image12',
        listId: 'list12',
        model: 'Cayman Black Edition',
        year: 2017,
        kilometres: 1000,
        color: 'Black',
        location: 'Montreal, QC',
        price: '$62,000',
        imgSrc: '../images/porschebuy2.jpg'
    }
];


// The new listings / splash page template block.
let newListingsView = document.getElementById('new-listing-section');

newListingsView.innerHTML = newListings.map((newlisting) => {
    return `
    <div class="new-listing">
        <div class="new-list-title">
        <h3>${newlisting.year} - ${newlisting.model}</h3>
        </div>
        <img class="new-listing-img" src="${newlisting.imgSrc}">

    </div>
    `
}).join('');

// The main collection gallery template.
let listingsView = document.getElementById('array-of-porsche');

listingsView.innerHTML = collectionListing.map((listing) => {
    return `
            <div class="col-car" id="col-car">
             <div class="listing-details ${listing.listId}"> 
             <ul>
                <li><h3>${listing.model}</h3></li>
                <li>Year: ${listing.year}</li>
                <li>Kilometres: ${listing.kilometres}</li>
                <li>Colour: ${listing.color}</li>
                <li>Location: ${listing.location}</li>
                <li>Price: ${listing.price}</li>
             </ul>
             </div>
                <img id="${listing.id}" class="${listing.id}"src="${listing.imgSrc}" alt="${listing.model}">
            </div>
            `
}).join('');


//Capturing unique elements to prepare independent hover state info cards with vehicle details.
let image1 = document.querySelector('.image1'),
    image2 = document.querySelector('.image2'),
    image3 = document.querySelector('.image3'),
    image4 = document.querySelector('.image4'),
    image5 = document.querySelector('.image5'),
    image6 = document.querySelector('.image6'),
    image7 = document.querySelector('.image7'),
    image8 = document.querySelector('.image8'),
    image9 = document.querySelector('.image9'),
    image10 = document.querySelector('.image10'),
    image11 = document.querySelector('.image11'),
    image12 = document.querySelector('.image12');

let list1 = document.querySelector('.list1'),
    list2 = document.querySelector('.list2'),
    list3 = document.querySelector('.list3'),
    list4 = document.querySelector('.list4'),
    list5 = document.querySelector('.list5'),
    list6 = document.querySelector('.list6'),
    list7 = document.querySelector('.list7'),
    list8 = document.querySelector('.list8'),
    list9 = document.querySelector('.list9'),
    list10 = document.querySelector('.list10'),
    list11 = document.querySelector('.list11'),
    list12 = document.querySelector('.list12');

//Capture all variables for iteration.
let image = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
let listAppear = [list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12];

// The iteration loop for hover reveal. The (.length and [i] ) allows for independent hover state effect.
for (let i = 0; i < image.length; i++) {
    const element = image[i];

    element.addEventListener('mouseover', () => {
        for (let l = 0; l < listAppear.length; l++) {
            const list = listAppear[i];

            list.classList.add('listing-details-animate');
        }
    });
}

// The iteration loop for hover close. The (.length and [i] ) allows for independent hover state effect.
for (let i = 0; i < image.length; i++) {
    const element = image[i];

    element.addEventListener('mouseleave', () => {
        for (let l = 0; l < listAppear.length; l++) {
            const list = listAppear[i];

            list.classList.remove('listing-details-animate');
        }
    });
}