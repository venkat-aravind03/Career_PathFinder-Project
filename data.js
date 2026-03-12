// Domain data
const domains = [
    {
        title: 'Web Development',
        icon: 'fa-globe',
        description: 'Create modern web applications',
        roadmap: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        resources: [
            {
                title: 'HTML Fundamentals',
                content: 'HTML is the backbone of web development. Start with semantic elements, forms, and accessibility.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
                videoUrl: 'https://www.youtube.com/watch?v=qz0aGYrrlhU'
            },
            {
                title: 'CSS Mastery',
                content: 'Learn modern CSS including Flexbox, Grid, and responsive design principles.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
                videoUrl: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc'
            },
            {
                title: 'JavaScript Essentials',
                content: 'Master core concepts like async/await, promises, and DOM manipulation.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                videoUrl: 'https://youtu.be/VlPiVmYuoqw?si=X_RI7NWYqs4rZzS'
            }
        ],
        interviewQuestions: [
            { q: 'What is the "Box Model" in CSS?', a: 'The CSS Box Model consists of margins, borders, padding, and the actual content.' },
            { q: 'What is Event Delegation?', a: 'A technique of using a single event listener on a parent element to manage events for all its children.' },
            { q: 'Explain Closures in JavaScript.', a: 'A closure is the combination of a function bundled together with references to its surrounding state.' },
            { q: 'What is the difference between REST and GraphQL?', a: 'REST uses multiple endpoints for resources, whereas GraphQL uses a single endpoint for flexible data fetching.' }
        ],
        keyPoints: [
            'Prioritize Accessibility (A11y) from the start using semantic HTML.',
            'Optimize Performance: Use lazy loading and minimize bundle sizes.',
            'Security: Always sanitize user input to prevent XSS and SQL Injection.',
            'Mobile-First Design: Ensure responsiveness across all device sizes.'
        ]
    },
    {
        title: 'Full Stack Development',
        icon: 'fa-layer-group',
        description: 'Master both frontend and backend',
        roadmap: ['Frontend', 'Backend', 'Database', 'DevOps'],
        resources: [
            {
                title: 'Frontend Development',
                content: 'Learn modern frontend frameworks and state management.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer',
                videoUrl: 'https://youtu.be/nu_pCVPKzTk?si=KEE3EOsd1z_j6nar'
            },
            {
                title: 'Backend Development',
                content: 'Master server-side programming and API development.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side',
                videoUrl: 'https://youtu.be/7fjOw8ApZ1I?si=spG2un2e28Ly0VqA'
            },
            {
                title: 'Database Design',
                content: 'Learn database modeling, SQL, and NoSQL databases.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security',
                videoUrl: 'https://youtu.be/hlGoQC332VM?si=srS6FvxLOtOZ2Fcm'
            }
        ],
        interviewQuestions: [
            { q: 'Explain CAP theorem.', a: 'Consistency, Availability, and Partition tolerance; a distributed system can only provide two of the three.' },
            { q: 'Difference between SQL and NoSQL?', a: 'SQL is relational/table-based, NoSQL is non-relational/document-based.' },
            { q: 'What is Middleware in Express?', a: 'Functions that have access to the request and response objects and execute in the request cycle.' }
        ],
        keyPoints: [
            'Understand the full request-response cycle from Client to Server to DB.',
            'Master both relational (PostgreSQL) and non-relational (MongoDB) databases.',
            'Build projects that demonstrate integration between frontend and backend.'
        ]
    },
    {
        title: 'AI & Machine Learning',
        icon: 'fa-brain',
        description: 'Build intelligent systems',
        roadmap: ['Python', 'Mathematics', 'Neural Networks', 'Deep Learning'],
        resources: [
            {
                title: 'Python for AI',
                content: 'Master Python libraries like NumPy, Pandas, and Scikit-learn.',
                mdnUrl: 'https://docs.python.org/3/tutorial/index.html',
                videoUrl: 'https://www.youtube.com/watch?v=WFr2WgN9_xE'
            },
            {
                title: 'Neural Networks',
                content: 'Understanding neural networks and deep learning fundamentals.',
                mdnUrl: 'https://developer.mozilla.org/en-US/blog/frameworks-for-machine-learning-in-javascript/',
                videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk'
            },
            {
                title: 'Machine Learning Basics',
                content: 'Learn supervised and unsupervised learning algorithms.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Machine_learning',
                videoUrl: 'https://www.youtube.com/watch?v=jGwO_UgTS7I'
            }
        ],
        interviewQuestions: [
            { q: 'What is the difference between Supervised and Unsupervised Learning?', a: 'Supervised learning uses labeled data; unsupervised learning finds patterns in unlabeled data.' },
            { q: 'What is Overfitting?', a: 'When a model learns the noise in training data too well, failing to generalize to new data.' },
            { q: 'Explain Precision vs Recall.', a: 'Precision is accuracy of positive predictions; Recall is the ability to find all positive instances.' },
            { q: 'What are Neural Networks?', a: 'A series of algorithms that endeavor to recognize underlying relationships in a set of data through a process that mimics the human brain.' }
        ],
        keyPoints: [
            'Data Cleaning is 80% of any AI/ML project.',
            'Always split data into Training, Validation, and Test sets.',
            'Deep Learning (Neural Networks) is a specialized subset of Machine Learning.',
            'Evaluation metrics (F1-score, RMSE, etc.) must match the business problem.'
        ]
    },
    {
        title: 'Data Science',
        icon: 'fa-chart-bar',
        description: 'Analyze and visualize data',
        roadmap: ['Statistics', 'Python', 'Data Analysis', 'Machine Learning'],
        resources: [
            {
                title: 'Statistics Fundamentals',
                content: 'Learn probability, hypothesis testing, and statistical analysis.',
                mdnUrl: 'https://wikipedia.org/wiki/Statistics',
                videoUrl: 'https://www.youtube.com/watch?v=xxpc-HPKN28'
            },
            {
                title: 'Data Visualization',
                content: 'Master tools like Matplotlib, Seaborn, and Plotly.',
                mdnUrl: 'https://matplotlib.org/stable/users/index.html',
                videoUrl: 'https://www.youtube.com/watch?v=a9UrKTVEeZA'
            },
            {
                title: 'Big Data Analytics',
                content: 'Learn big data processing and analytics techniques.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Big_Data',
                videoUrl: 'https://www.youtube.com/watch?v=1LlG6ZE3AG8'
            }
        ],
        interviewQuestions: [
            { q: 'What are the assumptions for Linear Regression?', a: 'Linearity, Independence, Homoscedasticity, and Normality.' },
            { q: 'Explain a Confusion Matrix.', a: 'A table used to describe the performance of a classification model.' },
            { q: 'What is A/B testing?', a: 'A statistical way of comparing two versions of a variable to determine which performs better.' }
        ],
        keyPoints: [
            'Correlation does not imply causation.',
            'Focus on Feature Engineering to extract meaningful information from raw data.',
            'Always handle missing or corrupted data before analysis.',
            'Communication: Be able to explain complex findings to non-technical stakeholders.'
        ]
    },
    {
        title: 'Cyber Security',
        icon: 'fa-shield-alt',
        description: 'Protect digital assets',
        roadmap: ['Network Security', 'Cryptography', 'Ethical Hacking'],
        resources: [
            {
                title: 'Network Security',
                content: 'Understanding network protocols and security measures.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/Security',
                videoUrl: 'https://www.youtube.com/watch?v=qiQR5rTSshw'
            },
            {
                title: 'Ethical Hacking',
                content: 'Learn penetration testing and security assessment.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks',
                videoUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE'
            },
            {
                title: 'Cryptography',
                content: 'Master encryption algorithms and security protocols.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
                videoUrl: 'https://www.youtube.com/watch?v=6_Cxj5WKpIw'
            }
        ],
        interviewQuestions: [
            { q: 'What is the CIA Triad?', a: 'Confidentiality, Integrity, and Availability.' },
            { q: 'Explain Symmetric vs Asymmetric Encryption.', a: 'Symmetric uses one key for both; Asymmetric uses a public-private key pair.' },
            { q: 'What is a Man-in-the-Middle (MITM) attack?', a: 'An attack where the attacker secretly relays and possibly alters the communication between two parties.' }
        ],
        keyPoints: [
            'Enable Multi-Factor Authentication (MFA) on all critical accounts.',
            'Never share sensitive information (passwords, OTPs) over plain text.',
            'Zero Trust: Never trust, always verify every request.',
            'Keep all software and systems updated with the latest security patches.'
        ]
    },
    {
        title: 'Mobile Development',
        icon: 'fa-mobile-alt',
        description: 'Create mobile applications',
        roadmap: ['React Native', 'iOS', 'Android', 'Cross-platform'],
        resources: [
            {
                title: 'React Native Basics',
                content: 'Build cross-platform mobile apps with React Native.',
                mdnUrl: 'https://reactnative.dev/docs/getting-started',
                videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc'
            },
            {
                title: 'iOS Development',
                content: 'Learn Swift and iOS app development fundamentals.',
                mdnUrl: 'https://developer.apple.com/documentation/swift',
                videoUrl: 'https://www.youtube.com/watch?v=comQ1-x2a1Q'
            },
            {
                title: 'Android Development',
                content: 'Master Kotlin and Android app development.',
                mdnUrl: 'https://developer.android.com/docs',
                videoUrl: 'https://www.youtube.com/watch?v=fis26HvvDII'
            }
        ],
        interviewQuestions: [
            { q: 'Native vs Hybrid vs Cross-platform?', a: 'Native is platform-specific; Hybrid is web-wrapped; Cross-platform (like React Native) uses a single codebase for multiple platforms.' },
            { q: 'What is the Mobile App Life Cycle?', a: 'Loading, Running, Background, Suspended, and Terminated.' },
            { q: 'How to handle offline data?', a: 'Using local storage, SQLite databases (Room/CoreData), or caching mechanisms.' }
        ],
        keyPoints: [
            'UI Responsiveness: Never block the main thread for long-running tasks.',
            'Battery & Memory: Optimize network requests and image loading to save resources.',
            'App Store Guidelines: Follow the Human Interface (iOS) or Material Design (Android) rules.',
            'Handle varied screen sizes and orientations properly.'
        ]
    },
    {
        title: 'DevOps',
        icon: 'fa-cogs',
        description: 'Streamline development operations',
        roadmap: ['CI/CD', 'Docker', 'Kubernetes', 'Cloud Services'],
        resources: [
            {
                title: 'CI/CD Pipeline',
                content: 'Learn continuous integration and deployment practices.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Continuous_Integration',
                videoUrl: 'https://www.youtube.com/watch?v=R8_veQiYBjI'
            },
            {
                title: 'Docker Containers',
                content: 'Master containerization with Docker.',
                mdnUrl: 'https://docs.docker.com/get-started/',
                videoUrl: 'https://www.youtube.com/watch?v=fqMOX6JJhGo'
            },
            {
                title: 'Kubernetes',
                content: 'Learn container orchestration with Kubernetes.',
                mdnUrl: 'https://kubernetes.io/docs/home/',
                videoUrl: 'https://www.youtube.com/watch?v=X48VuDVv0do'
            }
        ],
        interviewQuestions: [
            { q: 'What is Infrastructure as Code (IaC)?', a: 'Managing and provisioning infrastructure through code rather than manual processes.' },
            { q: 'Difference between CI and CD?', a: 'CI automates builds/tests; CD automates the release process to staging or production.' },
            { q: 'What is a Docker Container?', a: 'A lightweight, standalone, executable package that includes everything needed to run software.' }
        ],
        keyPoints: [
            'Automation is at the heart of DevOps; automate repetitive tasks.',
            'Monitoring & Logging (ELK stack, Prometheus, etc.) are crucial for stability.',
            'Collaborative Culture: Break down silos between development and operations teams.',
            'Infrastructure should be immutable and version-controlled.'
        ]
    },
    {
        title: 'Database Management',
        icon: 'fa-database',
        description: 'Master data storage solutions',
        roadmap: ['SQL', 'NoSQL', 'Data Modeling', 'Performance'],
        resources: [
            {
                title: 'SQL Fundamentals',
                content: 'Learn SQL queries, joins, and database design.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/SQL',
                videoUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY'
            },
            {
                title: 'NoSQL Databases',
                content: 'Master MongoDB and other NoSQL solutions.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/NoSQL',
                videoUrl: 'https://www.youtube.com/watch?v=-56x56UppqQ'
            },
            {
                title: 'Database Performance',
                content: 'Learn optimization techniques and indexing.',
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security#database_management',
                videoUrl: 'https://www.youtube.com/watch?v=HubXt90MLfE'
            }
        ],
        interviewQuestions: [
            { q: 'Explain ACID properties.', a: 'Atomicity, Consistency, Isolation, Durability.' },
            { q: 'What is a Primary Key?', a: 'A unique identifier for each record in a table.' },
            { q: 'What is Database Normalization?', a: 'The process of organizing data to minimize redundancy.' },
            { q: 'Difference between DELETE and TRUNCATE?', a: 'DELETE removes rows based on a condition (loggable); TRUNCATE removes all rows (non-loggable, DDL).' }
        ],
        keyPoints: [
            'Use Indexing wisely to speed up read-heavy queries.',
            'Ensure Data Integrity through constraints (Foreign Keys, Unique, Not Null).',
            'Backup and Recovery: Always have a strategy for data loss scenarios.',
            'Understand the trade-offs between SQL (Consistency) and NoSQL (Scaling/Flexibility).'
        ]
    }
];

// Company and interview questions data
const companies = [
    {
        name: 'FAANG Must Do Problems',
        icon: 'fa-star',
        questions: [
            { id: 1, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum' },
            { id: 2, title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters' },
            { id: 3, title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/description/' },
            { id: 4, title: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/description/' },
            { id: 5, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 6, title: 'Remove Nth Node From End of List', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/' },
            { id: 7, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },
            { id: 8, title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
            { id: 9, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
            { id: 10, title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' },
            { id: 11, title: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum/description/' },
            { id: 12, title: 'Rotate Image', url: 'https://leetcode.com/problems/rotate-image/description/' },
            { id: 13, title: 'Group Anagrams ', url: 'https://leetcode.com/problems/group-anagrams/description/' },
            { id: 14, title: 'Maximum Subarray', url: 'https://leetcode.com/problems/maximum-subarray/description/' },
            { id: 15, title: 'Spiral Matrix', url: 'https://leetcode.com/problems/spiral-matrix/description/' },
            { id: 17, title: 'Jump Game', url: 'https://leetcode.com/problems/jump-game/description/' },
            { id: 18, title: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/description/' },
            { id: 19, title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/description/' },
            { id: 20, title: 'Unique Paths', url: 'https://leetcode.com/problems/unique-paths/description/' },
            { id: 21, title: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/description/' },
            { id: 22, title: 'Set Matrix Zeroes', url: 'https://leetcode.com/problems/set-matrix-zeroes/description/' },
            { id: 23, title: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/description/' },
            { id: 24, title: 'Word Search', url: 'https://leetcode.com/problems/word-search/description/' },
            { id: 24, title: 'Decode Ways', url: 'https://leetcode.com/problems/decode-ways/description/' },
            { id: 25, title: 'Validate Binary Search Tree', url: 'https://leetcode.com/problems/validate-binary-search-tree/description/' },
            { id: 26, title: 'Binary Tree Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/description/' },
            { id: 27, title: 'Same Tree', url: 'https://leetcode.com/problems/same-tree/description/' },
            { id: 28, title: 'Maximum Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/description/' },
            { id: 29, title: 'Construct Binary Tree from Preorder and Inorder Traversal', url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/' },
            { id: 30, title: 'Best Time to Buy and Sell Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/' },


        ]
    },
    {
        name: 'Amazon',
        icon: 'fa-shopping-cart',
        questions: [
            { id: 1, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' },
            { id: 2, title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/' },
            { id: 3, title: 'Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/description/' },
            { id: 4, title: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/description/' },
            { id: 5, title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/description/' },
            { id: 6, title: 'Zigzag Conversion', url: 'https://leetcode.com/problems/zigzag-conversion/description/' },
            { id: 7, title: 'String to Integer (atoi)', url: 'https://leetcode.com/problems/string-to-integer-atoi/description/' },
            { id: 8, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 9, title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/' },
            { id: 10, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },



        ]
    },
    {
        name: 'Microsoft',
        icon: 'fab fa-windows',
        questions: [
            { id: 1, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
            { id: 2, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' },
            { id: 3, title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/' },
            { id: 4, title: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/description/' },
            { id: 5, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 6, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },
            { id: 7, title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
            { id: 8, title: 'Roman to Integer', url: 'https://leetcode.com/problems/roman-to-integer/description/' },
            { id: 9, title: 'String to Integer (atoi)', url: 'https://leetcode.com/problems/string-to-integer-atoi/description/' },
            { id: 10, title: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/description/' },

        ]
    },
    {
        name: 'Facebook',
        icon: 'fab fa-facebook',
        questions: [
            { id: 1, title: 'Roman to Integer', url: 'https://leetcode.com/problems/roman-to-integer/description/' },
            { id: 2, title: '3Sum', url: 'https://leetcode.com/problems/3sum/description/' },
            { id: 3, title: 'Search in Rotated Sorted Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/description/' },
            { id: 4, title: 'Find the Index of the First Occurrence in a String', url: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/' },
            { id: 5, title: 'Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/' },
            { id: 6, title: 'Reverse Nodes in k-Group', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/description/' },
            { id: 7, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/description/' },
            { id: 8, title: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/description/' },
            { id: 9, title: 'Regular Expression Matching', url: 'https://leetcode.com/problems/regular-expression-matching/description/' },
            { id: 10, title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/' },

        ]
    },
    {
        name: 'Google Top 50',
        icon: 'fab fa-google',
        questions: [
            { id: 1, title: 'Add Binary', url: 'https://leetcode.com/problems/add-binary/description/' },
            { id: 2, title: 'Valid Mountain Array', url: 'https://leetcode.com/problems/valid-mountain-array/description/' },
            { id: 3, title: 'Set Mismatch', url: 'https://leetcode.com/problems/set-mismatch/description/' },
            { id: 4, title: ' Is Subsequence', url: 'https://leetcode.com/problems/is-subsequence/description/' },
            { id: 5, title: 'Number of Matching Subsequences', url: 'https://leetcode.com/problems/number-of-matching-subsequences/' },
            { id: 6, title: 'Length of Last Word', url: 'Length of Last Word' },
            { id: 7, title: 'Monotonic Array', url: 'https://leetcode.com/problems/monotonic-array/description/' },
            { id: 8, title: 'Find the Difference', url: 'https://leetcode.com/problems/find-the-difference/description/' },
            { id: 9, title: 'Binary Tree Paths', url: 'https://leetcode.com/problems/binary-tree-paths/description/' },
            { id: 10, title: 'Merge Strings Alternately', url: 'https://leetcode.com/problems/merge-strings-alternately/description/' },
            { id: 11, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-strings-alternately/description/' },
            { id: 12, title: '2 Keys Keyboard', url: 'https://leetcode.com/problems/2-keys-keyboard/description/' },
            { id: 13, title: 'Arithmetic Slices', url: 'https://leetcode.com/problems/arithmetic-slices/description/' },
            { id: 14, title: 'Letter Combinations of a Phone Number', url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/' },
            { id: 15, title: '01 Matrix', url: 'https://leetcode.com/problems/01-matrix/description/' },
            { id: 16, title: 'Minimum Area Rectangle', url: 'https://leetcode.com/problems/minimum-area-rectangle/description/' },
            { id: 17, title: 'Fair Distribution of Cookies', url: 'https://leetcode.com/problems/fair-distribution-of-cookies/description/' },
            { id: 18, title: 'Count Days Without Meetings', url: 'https://leetcode.com/problems/count-days-without-meetings/description/?envType=daily-question&envId=2025-03-24' },
            { id: 19, title: 'Container with Most Water', url: 'https://leetcode.com/problems/container-with-most-water/description/' },
            { id: 20, title: 'Candy', url: 'https://leetcode.com/problems/candy/description/' },
            { id: 21, title: 'Burst Balloons', url: 'https://leetcode.com/problems/burst-balloons/description/' },
            { id: 22, title: 'Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/description/' },
            { id: 23, title: 'Trapping Rain Water II', url: 'https://leetcode.com/problems/trapping-rain-water-ii/' },
            { id: 24, title: 'Maximal Rectangle', url: 'https://leetcode.com/problems/maximal-rectangle/description/' },
            { id: 25, title: 'Count of Smaller Numbers After Self', url: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/' },
            { id: 26, title: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/description/' },
            { id: 27, title: 'Bulls and Cows', url: 'https://leetcode.com/problems/bulls-and-cows/description/' },
            { id: 28, title: 'Find Median from Data Stream', url: 'https://leetcode.com/problems/find-median-from-data-stream/description/' },
            { id: 29, title: 'The Skyline Problem', url: 'https://leetcode.com/problems/the-skyline-problem/description/' },
            { id: 30, title: 'Maximal Square', url: 'https://leetcode.com/problems/maximal-square/description/' },
            { id: 31, title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/description/' },
            { id: 32, title: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/description/' },
            { id: 33, title: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/description/' },
        ]


    },
    {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin',
        questions: [
            { id: 1, title: 'All O`one Data Structure', url: 'https://leetcode.com/problems/all-oone-data-structure/description/' },
            { id: 2, title: 'Can Place Flowers', url: 'https://leetcode.com/problems/can-place-flowers/description/' },
            { id: 3, title: 'Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' },
            { id: 4, title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/description/' },
            { id: 5, title: 'Repeated DNA Sequences', url: 'https://leetcode.com/problems/repeated-dna-sequences/description/' },
            { id: 6, title: 'Valid Number', url: 'https://leetcode.com/problems/valid-number/description/' },
            { id: 7, title: 'Valid Triangle Number', url: 'https://leetcode.com/problems/valid-triangle-number/description/' },
            { id: 8, title: 'Exclusive Time of Functions', url: 'https://leetcode.com/problems/exclusive-time-of-functions/description/' },
            { id: 9, title: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/description/' },
            { id: 10, title: 'Insert Delete GetRandom O(1)', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/description/' },
            { id: 11, title: 'Partition to K Equal Sum Subsets', url: 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/' },
            { id: 12, title: 'Max Points on a Line', url: 'https://leetcode.com/problems/max-points-on-a-line/description/' },
            { id: 13, title: 'Count Different Palindromic Subsequences', url: 'https://leetcode.com/problems/count-different-palindromic-subsequences/description/' },
            { id: 14, title: 'Text Justification', url: 'https://leetcode.com/problems/text-justification/description/' },
            { id: 15, title: 'Evaluate Reverse Polish Notation', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/description/' },

        ]
    },
    {
        name: 'Flipkart',
        icon: 'fas fa-shopping-bag',
        questions: [

            { id: 1, title: 'Add Two Numbers', url: 'https://leetcode.com/problems/add-two-numbers/description/' },
            { id: 2, title: 'Gas Station', url: 'https://leetcode.com/problems/gas-station/description/' },
            { id: 3, title: 'Distribute Candies', url: 'https://leetcode.com/problems/distribute-candies/description/' },
            { id: 4, title: 'Minimum Path Sum', url: 'https://leetcode.com/problems/minimum-path-sum/description/' },
            { id: 5, title: 'Merge k Sorted Lists', url: 'https://leetcode.com/problems/merge-strings-alternately/description/' },
            { id: 6, title: 'Design Twitter', url: 'https://leetcode.com/problems/design-twitter/description/' },
            { id: 7, title: 'Stream of Characters', url: 'https://leetcode.com/problems/stream-of-characters/description/' },
            { id: 8, title: 'Meeting Rooms III', url: 'https://leetcode.com/problems/meeting-rooms-iii/description/' },
            { id: 9, title: 'Meeting Room', url: 'https://leetcode.com/problems/meeting-rooms/description/' },
            { id: 10, title: 'Pair With Given Difference', url: '' },


        ]

    },
    {
        name: 'Netflix',
        icon: 'fab fa-playstation',
        questions: [

            { id: 1, title: 'LRU Cache', url: 'https://leetcode.com/problems/lru-cache/description/' },
            { id: 2, title: 'Department Top Three Salaries', url: 'https://leetcode.com/problems/department-top-three-salaries/description/' },

        ]
    }
];

const peerExperiences = [
    {
        id: 1,
        name: 'Arjun Mehta',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        branch: 'Computer Science',
        year: '2024',
        package: '45 LPA (Google)',
        suggestion: 'Focus on mastering Data Structures and Algorithms with consistency. Don’t just solve problems, understand the "why" behind them. Mock interviews are your best friend!',
        process: [
            { round: 'Round 1: Online Assessment', detail: 'Two medium-hard LeetCode questions focusing on Dynamic Programming and Graphs. Time: 90 mins.' },
            { round: 'Round 2: Technical Interview 1', detail: 'Focused on Data Structures (Trees and Recursion). Had to optimize a solution from O(N^2) to O(N log N).' },
            { round: 'Round 3: Technical Interview 2', detail: 'System Design basics and advanced algorithms. Discussed LRU Cache implementation and scaling a web service.' },
            { round: 'Round 4: Googliness Round', detail: 'Behavioral questions about team conflict, leadership, and matching company values.' }
        ]
    },
    {
        id: 2,
        name: 'Priya Sharma',
        photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        branch: 'Information Technology',
        year: '2024',
        package: '32 LPA (Amazon)',
        suggestion: 'Amazon Leadership Principles are as important as coding. Use the STAR method to answer behavioral questions and always show obsession for the customer.',
        process: [
            { round: 'Round 1: Online Assessment', detail: 'Coding assessment + Amazon Leadership Principles survey. Very important to match the principles.' },
            { round: 'Round 2: Technical Phone Screen', detail: 'Coding questions on Linked Lists and Hash Maps. Explained time and space complexity in detail.' },
            { round: 'Round 3: Virtual Onsite (3 Rounds)', detail: 'Each round had 20 mins of Leadership Principles and 45 mins of coding (DP, Trees, Strings).' }
        ]
    },
    {
        id: 3,
        name: 'Rahul Verma',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        branch: 'Electronics (ECE)',
        year: '2023',
        package: '28 LPA (Microsoft)',
        suggestion: 'Be thorough with your projects and OS/DBMS fundamentals. Microsoft loves candidates who have a strong foundation and can explain their technical choices clearly.',
        process: [
            { round: 'Round 1: OA', detail: '3 questions on Codility. Focused on array manipulation and sorting.' },
            { round: 'Round 2: Technical', detail: 'Discussed my projects in depth. Deep dive into OS concepts like Multithreading and Semaphores.' },
            { round: 'Round 3: Design & Coding', detail: 'Design a system like TinyURL. Focused on database selection and API endpoints.' }
        ]
    },
    {
        id: 4,
        name: 'Sneha Reddy',
        photo: 'https://randomuser.me/api/portraits/women/4.jpg',
        branch: 'Computer Science',
        year: '2024',
        package: '24 LPA (Atlassian)',
        suggestion: 'Prioritize Clean Code and Object-Oriented Design. They care a lot about how you structure your code and your ability to work collaboratively in a team.',
        process: [
            { round: 'Round 1: HackerRank', detail: 'Standard algorithmic questions. Hard focus on edge cases.' },
            { round: 'Round 2: Coding Design', detail: 'Object-Oriented Design round. Had to implement a system using Clean Code principles (SOLID).' },
            { round: 'Round 3: Values Fit', detail: 'Discussion with a manager about the company\'s open culture and how I adapt to feedback.' }
        ]
    },
    {
        id: 5,
        name: 'Vikram Singh',
        photo: 'https://randomuser.me/api/portraits/men/5.jpg',
        branch: 'IT',
        year: '2024',
        package: '18 LPA (Zomato)',
        suggestion: 'For startups like Zomato, show your passion for building products. Be strong in your tech stack (like React or Node.js) and demonstrate fast-learning abilities.',
        process: [
            { round: 'Round 1: Coding Test', detail: 'Focus on Arrays and Strings. Fast-paced.' },
            { round: 'Round 2: Technical', detail: 'Heavy focus on JavaScript and React internals. Discussed Virtual DOM and Hooks.' },
            { round: 'Round 3: CTO Round', detail: 'Analytical thinking questions and a small system design task (Design a food delivery tracking system).' }
        ]
    },
    {
        id: 6,
        name: 'Ananya Iyer',
        photo: 'https://randomuser.me/api/portraits/women/6.jpg',
        branch: 'Computer Science',
        year: '2024',
        package: '16 LPA (J.P. Morgan)',
        suggestion: 'Participation in hackathons is a huge plus! Work on your communication skills and show how your technical solution solves a real-world problem.',
        process: [
            { round: 'Round 1: Code For Good Hackathon', detail: '24-hour hackathon to build a solution for an NGO. Evaluated on teamwork and coding.' },
            { round: 'Round 2: Technical Interview', detail: 'Core Java, Spring Boot, and Database Management System (DBMS) questions.' },
            { round: 'Round 3: Behavioral', detail: 'Standard HR and situational questions.' }
        ]
    },
    {
        id: 7,
        name: 'Siddharth Roy',
        photo: 'https://randomuser.me/api/portraits/men/7.jpg',
        branch: 'ECE',
        year: '2024',
        package: '15 LPA (Walmart Global Tech)',
        suggestion: 'Master CS fundamentals (DBMS, Networks, OS) along with coding. During interviews, be loud with your thought process even if you are stuck.',
        process: [
            { round: 'Round 1: Online Quiz & Coding', detail: 'MCQs on CS fundamentals and 2 coding questions.' },
            { round: 'Round 2: Technical 1', detail: 'Data structures (Heaps and Stacks) and some low-level design.' },
            { round: 'Round 3: Technical 2', detail: 'Focus on databases (SQL) and a walkthrough of the internship project.' }
        ]
    },
    {
        id: 8,
        name: 'Kavya Nair',
        photo: 'https://randomuser.me/api/portraits/women/8.jpg',
        branch: 'Information Technology',
        year: '2023',
        package: '12 LPA (Accenture - Advanced ASE)',
        suggestion: 'Consistency and basic coding skills are key. Don’t ignore communication rounds and aptitude. Keep your certificates and projects ready for discussion.',
        process: [
            { round: 'Round 1: Cognitive & Technical Assessment', detail: 'Logical reasoning, English, and Pseudo-code questions.' },
            { round: 'Round 2: Coding Round', detail: 'Two simple to medium problems on Arrays/Strings.' },
            { round: 'Round 3: Communication Assessment', detail: 'Automated speaking and listening test.' },
            { round: 'Round 4: Interview', detail: 'Combined Technical and HR interview focusing on projects and certificates.' }
        ]
    }
];
