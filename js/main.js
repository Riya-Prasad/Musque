


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 1500,
    // reset: true,
})


sr.reveal(`.logo, 
            .primary-nav a, 
            .projects .right-side .card, 
            .team .right-side img, 
            .blog .right-side .card,
            .contact .right-side form input,
            .contact .right-side form textarea,
            .contact .right-side form button`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.hero .left-side .flex h1, 
            .about .left h2,
            .about .left p, 
            .services .left-side h2, 
            .services .left-side p, 
            .projects .left-side,
            .team .left-side,
            .blog .left-side,
            .contact .left-side .social,
            .contact .left-side h2,
            .contact .left-side h6,
            .contact .left-side span`,{
    origin: 'left',
    interval: 100,
})

sr.reveal(`.about img, .services .right-side`,{
    origin: 'right',
    interval: 100,
})
