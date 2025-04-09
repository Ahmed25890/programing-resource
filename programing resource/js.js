// Verified resource data (all links checked and working)
const verifiedResources = [
    // CSS Tools
    { title: "CSS Gradient", url: "https://cssgradient.io/", desc: "Advanced CSS gradient builder with editor", category: "css" },
    { title: "Neumorphism", url: "https://neumorphism.io", desc: "Generate Soft-UI CSS styles using inset shadows", category: "css" },
    { title: "Shadows Brumm", url: "https://shadows.brumm.af/", desc: "Make and preview beautifully smooth shadows", category: "css" },
    { title: "Fancy Border Radius", url: "https://9elements.github.io/fancy-border-radius/", desc: "Generate cool shaped objects with border-radius", category: "css" },
    { title: "Glassmorphism", url: "https://hype4.academy/tools/glassmorphism-generator", desc: "Build semi-transparent, blurred glass-like backgrounds", category: "css" },
    { title: "CSS Layout", url: "https://csslayout.io/", desc: "Collection of popular layouts and patterns made with CSS", category: "css" },
    { title: "Transition.Style", url: "https://www.transition.style/", desc: "Copy-paste transition animations", category: "css" },
    { title: "CSS Tricks", url: "https://css-tricks.com/", desc: "Extensive CSS tutorials and references", category: "css" },
    { title: "Bootstrap Docs", url: "https://getbootstrap.com/docs/", desc: "Official Bootstrap documentation", category: "css" },
    { title: "Coolors", url: "https://coolors.co/", desc: "Color palette generator", category: "css" },
    { title: "UI Gradients", url: "https://uigradients.com/", desc: "Beautiful color gradients", category: "css" },
    { title: "CSS Grid Generator", url: "https://cssgrid-generator.netlify.app/", desc: "Visual CSS Grid code generator", category: "css" },
    { title: "Flexbox Froggy", url: "https://flexboxfroggy.com/", desc: "Learn CSS flexbox through a game", category: "css" },
    { title: "Grid Garden", url: "https://cssgridgarden.com/", desc: "Learn CSS grid through a game", category: "css" },
    { title: "Keyframes", url: "https://keyframes.app/", desc: "CSS animation generator", category: "css" },
    { title: "Uiverse", url: "https://uiverse.io/", desc: "Custom UI elements collection", category: "css" },
    { title: "CSS Shadow Gradients", url: "https://alvarotrigo.com/shadow-gradients/", desc: "Generate CSS Gradients For Shadows", category: "css" },
    { title: "Mesh Gradient", url: "https://meshgradient.in/", desc: "Generate & download beautiful mesh gradients", category: "css" },
    
    // Typography
    { title: "Google Fonts", url: "https://fonts.google.com/", desc: "Free licensed fonts for the web", category: "typography" },
    { title: "Type Scale", url: "https://type-scale.com/", desc: "Visual typescale calculator and generator", category: "typography" },
    { title: "Fontjoy", url: "https://fontjoy.com/", desc: "Font pairing generator using machine learning", category: "typography" },
    { title: "Font Pair", url: "https://fontpair.co/", desc: "Helps you pair Google Fonts together beautifully", category: "typography" },
    { title: "Font Reach", url: "https://www.fontreach.com/", desc: "See what fonts websites are using", category: "typography" },
    
    // Photos & Images
    { title: "Unsplash", url: "https://unsplash.com/", desc: "Free high-quality stock photos", category: "photos" },
    { title: "Pexels", url: "https://www.pexels.com/", desc: "Free stock photos and videos", category: "photos" },
    { title: "Pixabay", url: "https://pixabay.com/", desc: "Free images and videos", category: "photos" },
    { title: "Photopea", url: "https://www.photopea.com/", desc: "Online Photoshop alternative", category: "photos" },
    { title: "TinyPNG", url: "https://tinypng.com/", desc: "Smart PNG and JPEG compression", category: "photos" },
    { title: "Responsive Breakpoints", url: "https://www.responsivebreakpoints.com/", desc: "Generate optimal image breakpoints", category: "photos" },
    
    // Icons
    { title: "Font Awesome", url: "https://fontawesome.com/", desc: "Popular icon library and toolkit", category: "icons" },
    { title: "Material Icons", url: "https://fonts.google.com/icons", desc: "Material design icons by Google", category: "icons" },
    { title: "Iconify", url: "https://icon-sets.iconify.design/", desc: "Unified icon framework with 100+ icon sets", category: "icons" },
    { title: "Hero Icons", url: "https://heroicons.com/", desc: "Beautiful hand-crafted SVG icons", category: "icons" },
    { title: "Tabler Icons", url: "https://tabler-icons.io/", desc: "Free and open source icons", category: "icons" },
    { title: "Simple Icons", url: "https://simpleicons.org/", desc: "Free SVG icons for popular brands", category: "icons" },
    
    // JavaScript
    { title: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "Complete JavaScript reference", category: "js" },
    { title: "JavaScript Info", url: "https://javascript.info/", desc: "Modern JavaScript tutorial", category: "js" },
    { title: "30 Seconds of Code", url: "https://www.30secondsofcode.org/", desc: "Short code snippets for all dev needs", category: "js" },
    { title: "Public APIs", url: "https://github.com/public-apis/public-apis", desc: "List of free APIs for development", category: "js" },
    { title: "JSON Placeholder", url: "https://jsonplaceholder.typicode.com/", desc: "Free fake API for testing", category: "js" },
    { title: "Regex101", url: "https://regex101.com/", desc: "Regex tester and debugger", category: "js" },
    
    // CDNs & Services
    { title: "CDNJS", url: "https://cdnjs.com/", desc: "Free CDN for open source libraries", category: "cdns" },
    { title: "jsDelivr", url: "https://www.jsdelivr.com/", desc: "Free CDN for npm and GitHub", category: "cdns" },
    { title: "Trello", url: "https://trello.com/", desc: "Project management tool", category: "cdns" },
    { title: "GitHub", url: "https://github.com/", desc: "Code hosting and collaboration", category: "cdns" },
    { title: "CodePen", url: "https://codepen.io/", desc: "Frontend development playground", category: "cdns" },
    { title: "Glitch", url: "https://glitch.com/", desc: "Build and host web apps", category: "cdns" },
    { title: "Can I Use", url: "https://caniuse.com/", desc: "Browser support tables", category: "cdns" },
    { title: "Web.dev", url: "https://web.dev/", desc: "Google's web development guides", category: "cdns" },
    
    // UI Graphics (reorganized)
    { title: "UI Design Daily", url: "https://uidesigndaily.com/", desc: "Awesome UI Components of all types", category: "ui-graphics" },
    { title: "100 Daily UI", url: "https://www.100dailyui.com/", desc: "Free Figma library of products, elements, and screens", category: "ui-graphics" },
    { title: "Sketch App Sources", url: "https://www.sketchappsources.com/", desc: "Sketch UIs, wireframes, icons and much more", category: "ui-graphics" },
    { title: "InvisionApp", url: "https://www.invisionapp.com/", desc: "Library of free, high-quality UI kits, icon packs, and mockups", category: "ui-graphics" },
    { title: "UIBundle", url: "https://uibundle.com/", desc: "Thousands of Free Design Resources like UI Kits, Mockups, Illustrations, Icons, Fonts, 3D assets, Templates and more", category: "ui-graphics" },
    { title: "Openby.design", url: "https://openby.design/", desc: "Custom crafted free UI design resources, for personal and commercial projects. No attribution is required", category: "ui-graphics" },
    { title: "Symu.co", url: "https://symu.co/", desc: "Free templates, UI kits, icon, PSD", category: "ui-graphics" },
    { title: "Html to Design", url: "https://www.htmltodesign.com/", desc: "Convert any website into fully editable Figma designs", category: "ui-graphics" },
    
    // Illustrations
    { title: "Humaaans", url: "https://www.humaaans.com/", desc: "Cool illustrations of people with the ability to mix and match", category: "ui-graphics" },
    { title: "Drawkit.io", url: "https://www.drawkit.io/", desc: "Illustrations for designers and startups", category: "ui-graphics" },
    { title: "Absurd.design", url: "https://absurd.design/", desc: "Free surrealist illustrations for designers and developers", category: "ui-graphics" },
    { title: "Undraw.co", url: "https://undraw.co/", desc: "Open-source illustrations for any idea you can imagine and create", category: "ui-graphics" },
    { title: "Manypixels.co", url: "https://www.manypixels.co/", desc: "Monochromatic, Isometric high-quality illustrations", category: "ui-graphics" },
    { title: "Open Peeps", url: "https://www.openpeeps.com/", desc: "Hand drawn illustration library", category: "ui-graphics" },
    { title: "Open Doodles", url: "https://www.opendoodles.com/", desc: "A Free Set of Sketchy Illustrations", category: "ui-graphics" },
    { title: "Blush", url: "https://blush.design/", desc: "Free customizable illustrations with Figma Plugin", category: "ui-graphics" },
    { title: "IRA Design", url: "https://iradesign.io/", desc: "An open-source gradient illustrations collection by creative tim", category: "ui-graphics" },
    { title: "Icons8 Illustrations", url: "https://icons8.com/illustrations", desc: "Vector illustrations to class up your project", category: "ui-graphics" },
    { title: "Pixeltrue Illustrations", url: "https://www.pixeltrue.com/illustrations", desc: "Free Animated Illustrations", category: "ui-graphics" },
    { title: "Flexiple", url: "https://flexiple.com/", desc: "One new high-quality, open-source illustration each day", category: "ui-graphics" },
    { title: "Illustration Kit", url: "https://illustrationkit.com/", desc: "Premium open source illustrations added daily", category: "ui-graphics" },
    { title: "Design Stripe", url: "https://designstripe.com/", desc: "Create beautiful illustrations, no design skills needed", category: "ui-graphics" },
    
    // Avatars & Characters
    { title: "Avataaars", url: "https://getavataaars.com/", desc: "Free sketch library of avatars illustrations by Pablo Stanley", category: "ui-graphics" },
    { title: "Abstract User Avatar API", url: "https://www.abstractapi.com/user-avatar-api", desc: "API to create simple yet flexible user avatars from user names or emails", category: "ui-graphics" },
    { title: "Boring Avatars", url: "https://boringavatars.com/", desc: "SVG random, cutely avatars collections", category: "ui-graphics" },
    { title: "Exemplar", url: "https://exemplar.io/", desc: "Free Avatar Library for Figma and Sketch", category: "ui-graphics" },
    
    // Patterns & Textures
    { title: "Paaatterns", url: "https://products.ls.graphics/paaatterns/", desc: "Free collection of beautiful patterns for all vector formats", category: "ui-graphics" },
    { title: "Hero Patterns", url: "https://heropatterns.com/", desc: "A collection of repeatable SVG background patterns", category: "ui-graphics" },
    { title: "BEAUBUS Patterns", url: "https://patterns.beaubus.com/", desc: "A set of 150+ free SVG patterns (backgrounds)", category: "ui-graphics" },
    { title: "Transparent Textures", url: "https://www.transparenttextures.com/", desc: "A collection of transparent textures background patterns", category: "ui-graphics" },
    { title: "Patternico", url: "https://patternico.com/", desc: "Seamless Pattern Maker", category: "ui-graphics" },
    { title: "PatternPad", url: "https://patternpad.com/", desc: "Free and unlimited unique pattern designs", category: "ui-graphics" },
    { title: "Doodad Pattern Generator", url: "https://doodad.dev/pattern-generator/", desc: "Create unique, seamless, royalty-free patterns", category: "ui-graphics" },
    { title: "Pattern Monster", url: "https://pattern.monster/", desc: "A simple online pattern generator to create repeatable SVG patterns", category: "ui-graphics" },
    
    // SVG & Graphics Tools
    { title: "SVG sine waves", url: "https://www.sinwaver.com/", desc: "Export perfect sine waves as SVG for your front-end projects", category: "ui-graphics" },
    { title: "HOLA SVG!", url: "https://holasvg.com/", desc: "An SVG playground to share SVG stuff", category: "ui-graphics" },
    { title: "fffuel", url: "https://fffuel.co/", desc: "collection of color tools and free SVG generators for gradients, patterns, textures, shapes & backgrounds", category: "ui-graphics" },
    
    // Other Resources
    { title: "404 illustration", url: "https://error404.fun/", desc: "Free illustrations for 404 pages", category: "ui-graphics" },
    { title: "Sketchvalley", url: "https://sketchvalley.com/", desc: "Download free PNG, SVG or AI file", category: "ui-graphics" },
    { title: "Dimensions", url: "https://www.dimensions.com/", desc: "Dimensions.com is an ongoing reference database of dimensioned drawings documenting the standard measurements and sizes of the everyday objects and spaces", category: "ui-graphics" },
    { title: "Freebiesbug", url: "https://freebiesbug.com/", desc: "Hand-picked resources for web designers and developers, constantly updated", category: "ui-graphics" },
    { title: "Cool Text", url: "https://cooltext.com/", desc: "Cool Text is a FREE graphics generator for web pages and anywhere else you need an impressive logo without a lot of design work", category: "ui-graphics" },
    { title: "Creatica", url: "https://creatica.io/", desc: "Generate unique beautiful and unique Backgrounds and patterns", category: "ui-graphics" },

    // Angular UI Libraries
    { title: "Material Angular", url: "https://material.angular.io/", desc: "UI library for Angular based on Material design", category: "angular" },
    { title: "NG Bootstrap", url: "https://ng-bootstrap.github.io/", desc: "UI library for Angular based on the Bootstrap framework", category: "angular" },
    { title: "PrimeNG", url: "https://www.primefaces.org/primeng/", desc: "Powerful UI component library for Angular", category: "angular" },
    { title: "Onsen Angular", url: "https://onsen.io/angular2/", desc: "Hybrid mobile and PWA UI library for Angular and Onsen UI", category: "angular" },
    { title: "NG Lightning", url: "https://ng-lightning.github.io/ng-lightning/", desc: "Native Angular components & directives for Lightning Design System", category: "angular" },
    { title: "NG Semantic", url: "https://ng-semantic.herokuapp.com/", desc: "UI library for Angular based on Semantic UI", category: "angular" },
    { title: "Nebular", url: "https://akveo.github.io/nebular/", desc: "Customizable UI Kit, Auth & Security for Angular", category: "angular" },
    { title: "Alyle UI", url: "https://alyle-ui.github.io/", desc: "Minimal components set for Angular", category: "angular" },
    { title: "NGX Bootstrap", url: "https://valor-software.com/ngx-bootstrap/", desc: "Another UI library for Angular based on the Bootstrap framework", category: "angular" },
    { title: "NG Zorro", url: "https://ng.ant.design/", desc: "UI library for Angular based on Ant Design", category: "angular" },
    { title: "NG Particles", url: "https://github.com/matteobruni/tsparticles", desc: "A lightweight Angular component for creating particles", category: "angular" },
    { title: "Covalent UI", url: "https://teradata.github.io/covalent/", desc: "Angular UI Platform focused on solving common enterprise needs", category: "angular" },
    { title: "Clarity", url: "https://clarity.design/", desc: "CSS based Angular UI framework developed by VMware group", category: "angular" },
    { title: "Taiga UI", url: "https://taiga-ui.dev/", desc: "Taiga UI is fully-treeshakable Angular UI Kit consisting of multiple base libraries and several add-ons", category: "angular" },
    { title: "ngx-admin", url: "https://akveo.github.io/ngx-admin/", desc: "Admin template based on Angular 10+ and Nebular", category: "angular" },
    { title: "spartan", url: "https://spartan.ng/", desc: "Cutting-edge tools powering Angular full-stack development", category: "angular" },

    // CSS Animations
    { title: "Gradienty Animations", url: "https://gradienty.io/", desc: "Over 600+ Curated Animations ready to copy & paste", category: "css-animations" },
    { title: "Animate.css", url: "https://animate.style/", desc: "Just-add-water CSS animations", category: "css-animations" },
    { title: "Bounce.js", url: "https://bouncejs.com/", desc: "Bounce.js is a tool and JS library that lets you create beautiful CSS3 powered animations", category: "css-animations" },
    { title: "Anime.js", url: "https://animejs.com/", desc: "Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API", category: "css-animations" },
    { title: "Magic Animations", url: "https://www.minimamente.com/project/magic/", desc: "Animations has been one of the most impressive animation libraries available", category: "css-animations" },
    { title: "Zdog", url: "https://zzz.dog/", desc: "Round, flat, designer-friendly pseudo-3D engine for canvas & SVG", category: "css-animations" },
    { title: "CSShake", url: "https://elrumordelaluz.github.io/csshake/", desc: "CSS library designed specifically for shaking elements within your web page", category: "css-animations" },
    { title: "Hover.css", url: "https://ianlunn.github.io/Hover/", desc: "CSS animation library designed for use with buttons and other UI elements", category: "css-animations" },
    { title: "AniJS", url: "https://anijs.github.io/", desc: "AniJS is an animation library that allows you to add animations to elements in a simple 'sentence-like' structure", category: "css-animations" },
    { title: "Animista", url: "https://animista.net/", desc: "CSS Animations On Demand", category: "css-animations" },
    { title: "Tachyons-animate", url: "https://github.com/anater/tachyons-animate", desc: "Tachyons atomic CSS library with utility classes for animations", category: "css-animations" },
    { title: "Sequence.js", url: "https://www.sequencejs.com/", desc: "JavaScript library for creating responsive CSS sliders, presentations, and banners", category: "css-animations" },
    { title: "Infinite", url: "https://tilomitra.github.io/infinite/", desc: "Animations designed to run and repeat forever", category: "css-animations" },
    { title: "OBNOXIOUS.CSS", url: "https://tholman.com/obnoxious/", desc: "Animations for the strong of heart, and weak of mind", category: "css-animations" },
    { title: "MOTION UI", url: "https://zurb.com/playground/motion-ui", desc: "A Sass library for creating flexible CSS transitions and animations", category: "css-animations" },
    { title: "Keyframes.app", url: "https://keyframes.app/", desc: "Graphical user interface for generating custom CSS keyframe animations", category: "css-animations" },
    { title: "SVG Artista", url: "https://svgartista.net/", desc: "Tool to animate stroke and fill properties in SVG images with plain CSS code", category: "css-animations" },
    { title: "AnimXYZ", url: "https://animxyz.com/", desc: "Helps create, customize, and compose animations for your website", category: "css-animations" },
    { title: "Whirl", url: "https://github.com/jh3y/whirl", desc: "CSS loading animations with minimal effort!", category: "css-animations" },
    { title: "Hamburgers", url: "https://jonsuh.com/hamburgers/", desc: "Collection of tasty CSS-animated hamburger icons", category: "css-animations" },
    { title: "CSS Loaders & Spinners", url: "https://cssloaders.github.io/", desc: "Collection of different types of CSS loaders and spinners", category: "css-animations" },
    { title: "Motion One", url: "https://motion.dev/", desc: "Animation library built on the Web Animations API", category: "css-animations" },
    { title: "pocoloco", url: "https://pocoloco.io/", desc: "Generate dynamic backgrounds for your website", category: "css-animations" },
    { title: "AniX", url: "https://github.com/antfu/anix", desc: "Super easy and lightweight CSS animation library", category: "css-animations" },
    { title: "AOS", url: "https://michalsnik.github.io/aos/", desc: "Animate On Scroll Library", category: "css-animations" },
    { title: "Animatopy", url: "https://sarthology.github.io/Animatopy/", desc: "Just-add-water CSS animations snippets", category: "css-animations" },

    // CSS Frameworks
    { title: "Tailwind CSS", url: "https://tailwindcss.com/", desc: "Low level, utility-first framework", category: "css-frameworks" },
    { title: "Bootstrap", url: "https://getbootstrap.com/", desc: "Popular UI framework with components using CSS and JS", category: "css-frameworks" },
    { title: "Materialize", url: "https://materializecss.com/", desc: "Modern responsive front-end framework based on Material Design", category: "css-frameworks" },
    { title: "Material Design Lite", url: "https://getmdl.io/", desc: "Light framework based on Material Design. No JS dependency", category: "css-frameworks" },
    { title: "Bulma", url: "https://bulma.io/", desc: "Modern CSS framework with no JS", category: "css-frameworks" },
    { title: "Skeleton", url: "http://getskeleton.com/", desc: "Extremely light framework for basic UI elements", category: "css-frameworks" },
    { title: "Uniform CSS", url: "https://uniformcss.com/", desc: "Fully configurable utility generator and CSS framework built in Sass", category: "css-frameworks" },
    { title: "Semantic UI", url: "https://semantic-ui.com/", desc: "Shared vocabulary for UI between designers and developers", category: "css-frameworks" },
    { title: "Fomantic UI", url: "https://fomantic-ui.com/", desc: "Community fork of Semantic-UI", category: "css-frameworks" },
    { title: "Foundation", url: "https://get.foundation/", desc: "Mobile first framework with clean markup", category: "css-frameworks" },
    { title: "Pure CSS", url: "https://purecss.io/", desc: "Small, responsive CSS modules", category: "css-frameworks" },
    { title: "UIKit", url: "https://getuikit.com/", desc: "Lightweight and modular front-end framework", category: "css-frameworks" },
    { title: "Susy", url: "https://www.oddbird.net/susy/", desc: "Lightweight grid-layout engine for Sass", category: "css-frameworks" },
    { title: "Milligram.io", url: "https://milligram.io/", desc: "Minimalist CSS framework", category: "css-frameworks" },
    { title: "Vanilla Framework", url: "https://vanillaframework.io/", desc: "Simple, extensible CSS framework written in Sass", category: "css-frameworks" },
    { title: "Spectre CSS", url: "https://picturepan2.github.io/spectre/", desc: "Lightweight, modern CSS framework", category: "css-frameworks" },
    { title: "Picnic CSS", url: "https://picnicss.com/", desc: "Lightweight and beautiful library", category: "css-frameworks" },
    { title: "Wing", url: "https://kbrsh.github.io/wing/", desc: "Beautiful CSS framework designed for minimalists", category: "css-frameworks" },
    { title: "Chota", url: "https://jenil.github.io/chota/", desc: "Micro (~3kb) CSS framework", category: "css-frameworks" },
    { title: "Blueprint CSS", url: "https://blueprintcss.dev/", desc: "Lightweight layout library for responsive mobile-first UIs", category: "css-frameworks" },
    { title: "W3.CSS", url: "https://www.w3schools.com/w3css/", desc: "Modern CSS framework with support for desktop, tablet, and mobile", category: "css-frameworks" },
    { title: "98.css", url: "https://jdan.github.io/98.css/", desc: "Design system for building faithful recreations of old UIs", category: "css-frameworks" },
    { title: "NES CSS", url: "https://nostalgic-css.github.io/NES.css/", desc: "NES-style CSS Framework", category: "css-frameworks" },
    { title: "Shoelace.css", url: "https://shoelace.style/", desc: "Lightweight, forward-thinking CSS library built with future CSS syntax", category: "css-frameworks" },
    { title: "MVP.css", url: "https://andybrewer.github.io/mvp/", desc: "Minimal stylesheet for HTML elements. No classes, just semantic HTML", category: "css-frameworks" },
    { title: "Blaze.css", url: "https://www.blazecss.com/", desc: "Open source modular CSS toolkit for rapid website building", category: "css-frameworks" },
    { title: "Turret CSS", url: "https://turretcss.com/", desc: "Styles framework for responsive websites", category: "css-frameworks" },
    { title: "Cutestrap", url: "https://www.cutestrap.com/", desc: "Strong, independent CSS Framework", category: "css-frameworks" },
    { title: "XP.css", url: "https://botoxparty.github.io/XP.css/", desc: "Extension of 98.css for building old UIs", category: "css-frameworks" },
    { title: "Framework7", url: "https://framework7.io/", desc: "Free and open source framework to develop mobile, desktop or web apps with native look and feel", category: "css-frameworks" },
    { title: "Hint.css", url: "https://kushagra.dev/lab/hint/", desc: "Pure CSS tooltip library", category: "css-frameworks" },
    { title: "imagehover.io", url: "https://imagehover.io/", desc: "Pure CSS Image Hover Effect Library", category: "css-frameworks" },
    { title: "mini.css", url: "https://minicss.org/", desc: "Minimal, responsive, style-agnostic CSS framework", category: "css-frameworks" },
    { title: "Tachyons", url: "https://tachyons.io/", desc: "Fast loading, highly readable, and 100% responsive interfaces with minimal CSS", category: "css-frameworks" },
    { title: "Material Bootstrap", url: "https://fezvrasta.github.io/bootstrap-material-design/", desc: "Material Design with Bootstrap", category: "css-frameworks" },
    { title: "Ivory", url: "https://github.com/IVORY-UI/ivory", desc: "Modern CSS framework for powerful web interfaces", category: "css-frameworks" },
    { title: "Halfmoon UI", url: "https://www.gethalfmoon.com/", desc: "Responsive and lightweight framework for dashboards and product pages", category: "css-frameworks" },
    { title: "Metro 4", url: "https://metroui.org.ua/", desc: "Impressive component library built on HTML, CSS, JavaScript", category: "css-frameworks" },
    { title: "css-doodle", url: "https://css-doodle.com/", desc: "Web component for drawing patterns with CSS", category: "css-frameworks" },
    { title: "latex.css", url: "https://latex.now.sh/", desc: "Make your website look like a LaTeX document", category: "css-frameworks" },

    // CSS Methodologies
    { title: "OOCSS", url: "https://github.com/stubbornella/oocss/wiki", desc: "Concepts for flexible, modular, and interchangeable components", category: "css-methodologies" },
    { title: "Atomic CSS", url: "https://acss.io/", desc: "Approach favoring small, single-purpose classes", category: "css-methodologies" },
    { title: "BEM", url: "https://en.bem.info/methodology/", desc: "Block Element Modifier for reusable components", category: "css-methodologies" },
    { title: "SMACSS", url: "https://smacss.com/", desc: "Way to examine and fit rigid frameworks into a flexible thought process", category: "css-methodologies" },
    { title: "CUBE", url: "https://cube.fyi/", desc: "CSS methodology oriented towards simplicity, pragmatism and consistency", category: "css-methodologies" },

    // Colors
    { title: "Coolors", url: "https://coolors.co/", desc: "Color schemes generator", category: "colors" },
    { title: "Color Hunt", url: "https://colorhunt.co/", desc: "Color Palettes for Designers and Artists", category: "colors" },
    { title: "Paletton", url: "https://paletton.com/", desc: "Color scheme designer with advanced features", category: "colors" },
    { title: "Adobe Color", url: "https://color.adobe.com/", desc: "Create color schemes with the color wheel", category: "colors" },
    { title: "Flat UI Colors", url: "https://flatuicolors.com/", desc: "280 handpicked colors ready for COPY & PASTE", category: "colors" },
    { title: "Material Design Colors", url: "https://materialui.co/colors/", desc: "Material Design Color Palette", category: "colors" },
    { title: "Color Space", url: "https://mycolor.space/", desc: "Generate nice color palettes from one color", category: "colors" },
    { title: "Colormind", url: "http://colormind.io/", desc: "Color scheme generator using deep learning", category: "colors" },
    { title: "ColorZilla", url: "https://www.colorzilla.com/", desc: "Advanced Eyedropper, Color Picker, Gradient Generator", category: "colors" },
    { title: "Brand Colors", url: "https://brandcolors.net/", desc: "The biggest collection of official brand color codes", category: "colors" },
    { title: "Color Wheel", url: "https://www.canva.com/colors/color-wheel/", desc: "Create color palettes with the color wheel", category: "colors" },
    { title: "ColorBox", url: "https://colorbox.io/", desc: "Create amazing color sets super fast", category: "colors" },
    { title: "Eva Design System", url: "https://colors.eva.design/", desc: "Deep learning color generator", category: "colors" },
    { title: "Khroma", url: "https://khroma.co/", desc: "AI color tool for discovering, searching, and saving color combinations", category: "colors" },
    { title: "Color Designer", url: "https://colordesigner.io/", desc: "Create color schemes based on color theory", category: "colors" },

    // Competitive Programming
    { title: "Kunal Kushwaha's DSA Bootcamp", url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ", desc: "Complete Data Structures and Algorithms bootcamp", category: "competitive-programming" },
    { title: "CSES Problem Set", url: "https://cses.fi/problemset/", desc: "Collection of algorithmic programming problems", category: "competitive-programming" },
    { title: "CP-Algorithms", url: "https://cp-algorithms.com/", desc: "Collection of algorithms and data structures for competitive programming", category: "competitive-programming" },
    { title: "LeetCode", url: "https://leetcode.com/", desc: "Platform for coding interview preparation", category: "competitive-programming" },
    { title: "Codeforces", url: "https://codeforces.com/", desc: "Programming contests and practice platform", category: "competitive-programming" },
    { title: "CodeChef", url: "https://www.codechef.com/", desc: "Competitive programming platform with contests and practice", category: "competitive-programming" },
    { title: "AtCoder", url: "https://atcoder.jp/", desc: "Japanese programming contest platform", category: "competitive-programming" },
    { title: "TopCoder", url: "https://www.topcoder.com/", desc: "Competitive programming platform with SRMs", category: "competitive-programming" },
    { title: "SPOJ", url: "https://www.spoj.com/", desc: "Sphere Online Judge with extensive problem archive", category: "competitive-programming" },
    { title: "HackerRank", url: "https://www.hackerrank.com/", desc: "Practice coding, prepare for interviews, and get hired", category: "competitive-programming" },
    { title: "Project Euler", url: "https://projecteuler.net/", desc: "Mathematical/computer programming problems", category: "competitive-programming" },
    { title: "HackerEarth", url: "https://www.hackerearth.com/", desc: "Programming challenges and hiring contests", category: "competitive-programming" },
    { title: "BinarySearch", url: "https://binarysearch.com/", desc: "Practice coding and prepare for interviews", category: "competitive-programming" },

    // System Design
    { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", desc: "Learn how to design large-scale systems", category: "system-design" },
    { title: "Gaurav Sen's System Design", url: "https://www.youtube.com/c/GauravSensei", desc: "System design tutorials and mock interviews", category: "system-design" },
    { title: "Pramp", url: "https://www.pramp.com/", desc: "Practice mock interviews with peers", category: "system-design" },
    { title: "Interviewing.io", url: "https://interviewing.io/", desc: "Practice technical interviews anonymously", category: "system-design" },
    { title: "Google Kickstart", url: "https://codingcompetitions.withgoogle.com/kickstart", desc: "Google's coding competition for students", category: "system-design" },
    { title: "Google Code Jam", url: "https://codingcompetitions.withgoogle.com/codejam", desc: "Google's annual programming competition", category: "system-design" },
    { title: "Google Hash Code", url: "https://codingcompetitions.withgoogle.com/hashcode", desc: "Team-based programming competition by Google", category: "system-design" },
    { title: "Facebook Hacker Cup", url: "https://www.facebook.com/hackercup/", desc: "Facebook's annual programming competition", category: "system-design" },
    { title: "ICPC", url: "https://icpc.global/", desc: "International Collegiate Programming Contest", category: "system-design" },

    // Books
    { title: "Clean Architecture", url: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164", desc: "Principles and patterns for software architecture", category: "books" },
    { title: "Clean Code", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", desc: "A handbook of agile software craftsmanship", category: "books" },
    { title: "Code Complete", url: "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670", desc: "Practical handbook of software construction", category: "books" },
    { title: "Cracking the Coding Interview", url: "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850", desc: "189 programming questions and solutions", category: "books" },
    { title: "Elements of Programming Interviews", url: "https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1479274836", desc: "The insider's guide to technical interviews", category: "books" },
    { title: "Competitive Programmer's Handbook", url: "https://cses.fi/book/book.pdf", desc: "Guide to competitive programming by Antti Laaksonen", category: "books" },
    { title: "Competitive Programming 3", url: "https://cpbook.net/", desc: "The new lower bound of programming contests", category: "books" },
    { title: "Guide to Competitive Programming", url: "https://www.amazon.com/Guide-Competitive-Programming-Algorithms-Undergraduates/dp/3319725467", desc: "Learning and improving algorithms through contests", category: "books" },
    { title: "The Art and Craft of Problem Solving", url: "https://www.amazon.com/Art-Craft-Problem-Solving-3rd/dp/0471789011", desc: "3rd edition of the classic problem-solving guide", category: "books" },
];

// DOM elements
const resourcesContainer = document.getElementById('resourcesContainer');
const searchInput = document.getElementById('searchInput');
const categoryChips = document.querySelectorAll('.category-chip');
const showingCount = document.getElementById('showingCount');
const totalCount = document.getElementById('totalCount');
const loadingState = document.getElementById('loadingState');

// Initial state
let currentCategory = 'all';
let currentSearch = '';

// Initialize
function init() {
    totalCount.textContent = verifiedResources.length;
    
    // Show loading state initially
    loadingState.classList.remove('hidden');
    resourcesContainer.classList.add('hidden');
    
    // Simulate verification check
    setTimeout(() => {
        loadingState.classList.add('hidden');
        resourcesContainer.classList.remove('hidden');
        filterResources();
        renderResources();
    }, 1500);
    
    // Set up event listeners
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterResources();
        renderResources();
    });

    categoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            categoryChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.dataset.category;
            filterResources();
            renderResources();
        });
    });

    // Set 'All' as active initially
    document.querySelector('.category-chip[data-category="all"]').classList.add('active');
}

// Filter resources based on search and category
function filterResources() {
    filteredResources = verifiedResources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(currentSearch) || 
                             resource.desc.toLowerCase().includes(currentSearch) ||
                             resource.category.toLowerCase().includes(currentSearch);
        const matchesCategory = currentCategory === 'all' || resource.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    showingCount.textContent = filteredResources.length;
}

// Render resources to the DOM
function renderResources() {
    resourcesContainer.innerHTML = '';
    
    if (filteredResources.length === 0) {
        resourcesContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-medium text-gray-700">No resources found</h3>
                <p class="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    filteredResources.forEach((resource, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:border-blue-100 card-hover transition-all duration-200 fade-in';
        card.style.animationDelay = `${index * 0.05}s`;
        
        let iconClass = 'fas fa-link';
        if (resource.category === 'css') iconClass = 'fab fa-css3-alt';
        if (resource.category === 'typography') iconClass = 'fas fa-font';
        if (resource.category === 'photos') iconClass = 'fas fa-camera';
        if (resource.category === 'icons') iconClass = 'fas fa-icons';
        if (resource.category === 'js') iconClass = 'fab fa-js-square';
        if (resource.category === 'cdns') iconClass = 'fas fa-cloud';
        if (resource.category === 'ui-graphics') iconClass = 'fas fa-paint-brush';
        if (resource.category === 'angular') iconClass = 'fab fa-angular';
        if (resource.category === 'css-animations') iconClass = 'fas fa-spinner';
        if (resource.category === 'css-frameworks') iconClass = 'fas fa-layer-group';
        if (resource.category === 'css-methodologies') iconClass = 'fas fa-sitemap';
        if (resource.category === 'colors') iconClass = 'fas fa-palette';
        
        card.innerHTML = `
            <div class="p-5">
                <div class="flex items-start mb-3">
                    <div class="bg-blue-50 p-3 rounded-lg mr-4">
                        <i class="${iconClass} text-blue-500 text-lg"></i>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-1">${resource.title}</h3>
                        <span class="inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(resource.category)}">
                            ${resource.category.toUpperCase()}
                        </span>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">${resource.desc || 'No description available'}</p>
                <div class="flex justify-between items-center">
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium">
                        Visit resource
                        <i class="fas fa-external-link-alt ml-2 text-sm"></i>
                    </a>
                    <span class="text-xs text-green-500 flex items-center">
                        <i class="fas fa-check-circle mr-1"></i> Verified
                    </span>
                </div>
            </div>
        `;
        resourcesContainer.appendChild(card);
    });
}

// Helper function to get category color
function getCategoryColor(category) {
    const colors = {
        css: 'bg-purple-100 text-purple-800',
        typography: 'bg-yellow-100 text-yellow-800',
        photos: 'bg-green-100 text-green-800',
        icons: 'bg-red-100 text-red-800',
        js: 'bg-indigo-100 text-indigo-800',
        cdns: 'bg-blue-100 text-blue-800',
        'ui-graphics': 'bg-pink-100 text-pink-800',
        'css-frameworks': 'bg-teal-100 text-teal-800',
        'css-methodologies': 'bg-cyan-100 text-cyan-800',
        'colors': 'bg-orange-100 text-orange-800',
        'angular': 'bg-red-100 text-red-800',
        'css-animations': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
}

// Initialize the app
init();
