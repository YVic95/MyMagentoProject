define([
    'matchMedia'
], (mediaCheck) => {
    return function() {
        const displayOnDesktop = () => {
            console.log('Display on Desktop');
        }

        const displayOnMobile = () => {
            console.log('Display on Mobile');
        }

        // This approach triggers logging every time the window width changes

        // const display = () => {
        //     return window.innerWidth > 767 ? displayOnDesktop() : displayOnMobile()
        // }

        // display();
        // window.addEventListener('resize', display);

        mediaCheck({
            media: '(min-width: 768px)',
            entry: displayOnDesktop,
            exit: displayOnMobile
        })
    }  
    
});