// Article page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the slug from URL parameter
    function getSlugFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('slug');
    }

    // Sample article data (will be replaced with Decap CMS data)
    const articles = {
        'future-pedestrian-safety': {
            title: "The Future of Pedestrian Safety in Smart Cities",
            excerpt: "Exploring how technology and data can work together to create safer walking environments.",
            content: `
                <p>As our cities become increasingly connected and data-driven, the potential for improving pedestrian safety has never been greater. Smart cities leverage technology, data, and innovative infrastructure to create environments where pedestrians can move safely and efficiently.</p>
                
                <h2>The Current State of Pedestrian Safety</h2>
                
                <p>Despite advancements in vehicle safety technology, pedestrian fatalities have been on the rise in recent years. According to recent studies, pedestrian deaths in traffic crashes have reached their highest level since 1981. This troubling trend highlights the urgent need for innovative solutions that prioritize pedestrian safety in urban environments.</p>
                
                <p>Traditional approaches to pedestrian safety have focused primarily on traffic calming measures, improved signage, and pedestrian education. While these methods have had some success, they often fail to address the complex interactions between vehicles, infrastructure, and pedestrians in dense urban environments.</p>
                
                <h2>How Smart Technology is Changing the Game</h2>
                
                <p>Smart cities are deploying a range of technologies to enhance pedestrian safety:</p>
                
                <h3>Intelligent Crosswalks</h3>
                
                <p>Smart crosswalks use sensors and adaptive lighting to alert drivers when pedestrians are present. These systems can detect pedestrians waiting to cross and activate enhanced lighting or warning signals to make them more visible to approaching vehicles.</p>
                
                <h3>Connected Vehicle Technology</h3>
                
                <p>Vehicle-to-infrastructure (V2I) and vehicle-to-pedestrian (V2P) communication systems allow cars to "talk" to traffic signals and pedestrian devices. This technology can warn drivers of pedestrians in crosswalks or potentially hazardous situations before they become visible to the human eye.</p>
                
                <h3>Predictive Analytics</h3>
                
                <p>By analyzing traffic patterns, pedestrian movement data, and historical accident information, cities can identify high-risk areas and implement targeted safety improvements before accidents occur.</p>
                
                <blockquote>
                    "The integration of technology and urban design represents our best opportunity to create cities where pedestrians are not just accommodated, but truly prioritized."
                </blockquote>
                
                <h2>Case Studies: Cities Leading the Way</h2>
                
                <p>Several cities around the world are implementing innovative pedestrian safety solutions:</p>
                
                <ul>
                    <li><strong>Singapore</strong> has deployed an extensive network of sensors and cameras to monitor pedestrian traffic and optimize signal timing.</li>
                    <li><strong>Copenhagen</strong> uses smart lighting that brightens when pedestrians are detected and dims when no one is present, improving visibility while conserving energy.</li>
                    <li><strong>Barcelona</strong> has implemented "superblocks" that prioritize pedestrian spaces and limit vehicle traffic in designated areas.</li>
                </ul>
                
                <h2>The Role of Data Privacy</h2>
                
                <p>As cities collect more data about pedestrian movement, concerns about privacy naturally arise. Effective smart city implementations must balance safety improvements with robust privacy protections. Anonymized data collection, transparent policies, and public oversight are essential components of any pedestrian safety program that relies on personal data.</p>
                
                <h2>Looking Ahead: The Pedestrian-Centric City</h2>
                
                <p>The ultimate goal of smart city pedestrian safety initiatives should be the creation of truly pedestrian-centric urban environments. This means not just preventing accidents, but creating spaces where walking is the most attractive, efficient, and enjoyable mode of transportation.</p>
                
                <p>As technology continues to evolve, we can expect to see even more innovative approaches to pedestrian safety, from augmented reality navigation aids to AI-powered traffic management systems that dynamically respond to pedestrian needs in real-time.</p>
                
                <p>The future of pedestrian safety in smart cities is not just about avoiding harm—it's about creating urban environments where people can thrive.</p>
            `,
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            date: "May 15, 2024",
            pillar: "education",
            readTime: "8 min read",
            author: {
                name: "Alex Morgan",
                bio: "Urban planner and pedestrian safety advocate with 10+ years of experience in smart city initiatives.",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            }
        }
        // Add more articles here as needed
    };

    // Function to load article content
    function loadArticle() {
        const slug = getSlugFromURL();
        const article = articles[slug];
        
        if (!article) {
            // Redirect to blog homepage if article not found
            window.location.href = 'blog.html';
            return;
        }

        // Populate article content
        document.title = `${article.title} - Jaywalk Blog`;
        
        const articleMeta = document.querySelector('.article-meta');
        const articleTitle = document.querySelector('.article-title');
        const articleImage = document.querySelector('.article-image');
        const articleBody = document.querySelector('.article-body');
        const authorName = document.querySelector('.author-info h3');
        const authorBio = document.querySelector('.author-bio');
        const authorAvatar = document.querySelector('.author-avatar');

        if (articleMeta) {
            articleMeta.innerHTML = `
                <span>${article.date}</span>
                <span class="post-pillar pillar-${article.pillar}">${article.pillar}</span>
                <span>${article.readTime}</span>
            `;
        }

        if (articleTitle) articleTitle.textContent = article.title;
        if (articleImage) articleImage.src = article.image;
        if (articleImage) articleImage.alt = article.title;
        if (articleBody) articleBody.innerHTML = article.content;
        
        if (authorName) authorName.textContent = article.author.name;
        if (authorBio) authorBio.textContent = article.author.bio;
        if (authorAvatar) authorAvatar.src = article.author.avatar;
    }

    // Load the article
    loadArticle();
});