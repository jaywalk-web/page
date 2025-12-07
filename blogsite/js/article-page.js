document.addEventListener('DOMContentLoaded', function() {
    // You can add article-specific JavaScript here if needed
    console.log('Jaywalk Blog - Perfect Article Template with Centered Arrows');
    
    // Example: Parse URL parameters to load specific article
    const urlParams = new URLSearchParams(window.location.search);
    const articleSlug = urlParams.get('slug');
    
    if (articleSlug) {
        // You can fetch article data based on slug
        console.log(`Loading article: ${articleSlug}`);
    }
});