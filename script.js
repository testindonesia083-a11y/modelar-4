function navigateToTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-content');
    const allDots = document.querySelectorAll('.dot');
    
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    allDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
        
        const tabIndex = Array.from(allTabs).indexOf(targetTab);
        if (allDots[tabIndex]) {
            allDots[tabIndex].classList.add('active');
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const tabs = ['inicio', 'atividades', 'pack', 'compra'];
    
    dots.forEach((dot, index) => {
        dot.onclick = function() {
            navigateToTab(tabs[index]);
        };
    });
});
