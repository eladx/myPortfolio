document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - script running'); // Debug line
    
    const openButton = document.getElementById('mobile-menu-toggle');
    const closeButton = document.getElementById('mobile-close-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (!openButton || !closeButton || !sidebar) {
        console.error('One or more elements not found!');
        return;
    }
    
    // Initial state
    closeButton.style.display = 'none';
    
    function showMenu(event) {
        console.log('Show menu triggered'); // Debug line
        event.preventDefault();
        event.stopPropagation();
        sidebar.classList.add('active');
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.addEventListener('click', handleOutsideClick);
    }
    
    function closeMenu(event) {
        console.log('Close menu triggered'); // Debug line
        event.preventDefault();
        event.stopPropagation();
        sidebar.classList.remove('active');
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
        document.body.style.overflow = '';
        document.removeEventListener('click', handleOutsideClick);
    }
    
    function handleOutsideClick(event) {
        if (!sidebar.contains(event.target) && 
            event.target !== openButton && 
            !openButton.contains(event.target)) {
            closeMenu(event);
        }
    }
    
    openButton.addEventListener('click', showMenu);
    closeButton.addEventListener('click', closeMenu);
    
    console.log('Event listeners attached'); // Debug line
});