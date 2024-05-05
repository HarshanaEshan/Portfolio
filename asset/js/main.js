// ***** **** *** ** * SCROLL SECTION ACTIVE LINK * ** *** **** *****

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}



// Project section

// Select all open popup buttons
const openPopupBtns = document.querySelectorAll('.open-popup-btn');

// Loop through each open popup button and attach event listener
openPopupBtns.forEach((btn, index) => {
    // Select corresponding popup and overlay
    const popup = document.getElementById(`popup${index + 1}`);
    const overlay = document.getElementById('overlay');

    // Attach click event listener to open popup button
    btn.addEventListener('click', () => {
        // Display popup and overlay
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Select close popup button
    const closePopupBtn = popup.querySelector('.close-popup-btn');

    // Attach click event listener to close popup button
    closePopupBtn.addEventListener('click', () => {
        // Hide popup and overlay
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Attach click event listener to overlay to close popup when clicked outside of it
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            // Hide popup and overlay
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
});


