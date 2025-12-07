// Blog posts data
const blogPosts = [
    {
        title: "The Future of Pedestrian Safety in Smart Cities",
        excerpt: "Exploring how technology and data can work together to create safer walking environments in our increasingly connected urban landscapes.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "May 15, 2024",
        pillar: "education",
        slug: "future-pedestrian-safety-smart-cities"
    },
    {
        title: "How AI is Revolutionizing Crosswalk Detection",
        excerpt: "A deep dive into the machine learning models that power modern pedestrian safety systems.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "May 10, 2024",
        pillar: "action",
        slug: "ai-revolutionizing-crosswalk-detection"
    },
    {
        title: "Reducing Pedestrian Accidents by 40%: Portland's Success Story",
        excerpt: "How one city combined technology and public awareness to improve pedestrian safety.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "May 5, 2024",
        pillar: "action",
        slug: "reducing-pedestrian-accidents-portland"
    },
    {
        title: "Building Safer Neighborhoods Through Community Engagement",
        excerpt: "Community-driven approaches to pedestrian safety that empower local residents.",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "April 28, 2024",
        pillar: "community",
        slug: "building-safer-neighborhoods-community-engagement"
    },
    {
        title: "Next-Gen Safety Tech for Urban Mobility",
        excerpt: "Emerging technologies shaping the future of pedestrian safety and urban mobility.",
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "April 20, 2024",
        pillar: "action",
        slug: "next-gen-safety-tech-urban-mobility"
    },
    {
        title: "The Psychology of Urban Walking Behavior",
        excerpt: "Understanding how pedestrians make decisions in complex urban environments.",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "April 15, 2024",
        pillar: "education",
        slug: "psychology-urban-walking-behavior"
    }
];

// Blog grid and load more functionality
document.addEventListener('DOMContentLoaded', function() {
    const postsGrid = document.getElementById('postsGrid');
    const loadMoreBtn = document.getElementById('loadMore');
    const pillarsFilter = document.getElementById('pillarsFilter');
    
    if (!postsGrid) return;
    
    let visiblePosts = 6;
    let currentPillar = 'all';
    let filteredPosts = [...blogPosts];

    // Function to filter posts by pillar
    function filterPosts(pillar) {
        currentPillar = pillar;
        
        if (pillar === 'all') {
            filteredPosts = [...blogPosts];
        } else {
            filteredPosts = blogPosts.filter(post => post.pillar === pillar);
        }
        
        // Reset visible posts count when filter changes
        visiblePosts = 6;
        
        // Update active filter button
        document.querySelectorAll('.pillar-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.pillar-btn[data-pillar="${pillar}"]`).classList.add('active');
        
        // Render posts
        renderPosts();
    }

    // Function to render posts with animation
    function renderPosts() {
        const postsToShow = filteredPosts.slice(0, visiblePosts);
        
        // Clear grid
        postsGrid.innerHTML = '';
        
        // Add posts with fade-in animation
        postsToShow.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.className = 'post fade-in';
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <div class="post-meta">
                        <span>${post.date}</span>
                        <span class="post-pillar pillar-${post.pillar}">${post.pillar}</span>
                    </div>
                    <h2><a href="article.html?slug=${post.slug}">${post.title}</a></h2>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="article.html?slug=${post.slug}" class="read-more">Read more →</a>
                </div>
            `;
            postsGrid.appendChild(postElement);
            
            // Stagger animation for visual appeal
            setTimeout(() => {
                postElement.classList.remove('fade-in');
            }, index * 100);
        });

        // Show/hide load more button
        if (loadMoreBtn) {
            loadMoreBtn.style.display = visiblePosts >= filteredPosts.length ? 'none' : 'block';
        }
    }

    // Function to load more posts with animation
    function loadMorePosts() {
        visiblePosts += 3;
        renderPosts();
        
        // Smooth scroll to the newly loaded posts
        setTimeout(() => {
            const newPosts = document.querySelectorAll('.post');
            if (newPosts.length > 0) {
                const lastPost = newPosts[newPosts.length - 1];
                lastPost.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 300);
    }

    // Event listeners
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePosts);
    }
    
    // Add event listeners to pillar filter buttons
    if (pillarsFilter) {
        document.querySelectorAll('.pillar-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pillar = btn.getAttribute('data-pillar');
                filterPosts(pillar);
            });
        });
    }

    // Initial render
    renderPosts();
    
    console.log('Jaywalk Blog - Content pillars only as badges');
});