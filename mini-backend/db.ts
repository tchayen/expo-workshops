export type User = {
  name: string;
  login: string;
  avatar: string;
  blurhash: string;
  bio: string;
  birthday?: string;
  location?: string;
  following: string[];
};

export const users = new Map<string, User>([
  [
    'johny_1987',
    {
      name: 'John Doe',
      login: 'johny_1987',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      blurhash: 'UXDcEw%LSgR+~pxat6bI.8kCxFxZx^f+o0s.',
      bio: 'Passionate React Native developer and UI/UX enthusiast.',
      following: ['maryjane21', 'MarkSmith!@', 'Sara_C'],
    },
  ],
  [
    'maryjane21',
    {
      name: 'Mary Jane',
      login: 'maryjane21',
      avatar:
        'https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1',
      blurhash: 'UfH__T00tR%M_NIUjZs:IVxuV@V@xuRjfka|',
      bio: 'Freelancer in the React Native space.',
      following: ['johny_1987'],
    },
  ],
  [
    'MarkSmith!@',
    {
      name: 'Mark Smith',
      login: 'MarkSmith!@',
      avatar:
        'https://plus.unsplash.com/premium_photo-1664451177406-515a23272080',
      blurhash: 'UQIxUP].{L:*@@NZBoozixFKxZS#bw$5NGax',
      bio: 'Exploring the cross-platform capabilities of React Native.',
      following: ['johny_1987'],
    },
  ],
  [
    'Sara_C',
    {
      name: 'Sara Connor',
      login: 'Sara_C',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
      blurhash: 'UBD+D6?HVgrrv1M{-6-:I[X8S$R._4oet6i^',
      bio: 'Building interactive apps with React Native.',
      birthday: `1992-09-${new Date().getDate()}`, // Sara's birthday is every day!
      following: ['johny_1987'],
    },
  ],
  [
    'tommycruise',
    {
      name: 'Tom Cruise',
      login: 'tommycruise',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      blurhash: 'UgGSu|o#TLt7.8ofoIWB%hWBV@t7.Toft8WC',
      bio: 'Adventures in React Native development.',
      following: [],
    },
  ],
  [
    'annaj@codes',
    {
      name: 'Anna Johnson',
      login: 'annaj@codes',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
      blurhash: 'UyJuP{x]%gog~poJWBoftlM|RPWBt7j[WVof',
      bio: 'Creating sleek UIs with React Native.',
      following: [],
    },
  ],
  [
    'mike.brown92',
    {
      name: 'Michael Brown',
      login: 'mike.brown92',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      blurhash: 'U35XfPxu57-o~Ct7ELxtR%WCogj[9tNG-VWW',
      bio: 'React Native developer. Code is poetry.',
      following: [],
    },
  ],
  [
    'codeMancer404',
    {
      name: 'Code Mancer',
      login: 'codeMancer404',
      avatar: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea',
      blurhash: 'URKBUP9F%M~q_3%M-;ofV@t7WARjxuj[-;of',
      bio: 'Dancing with React Native codes.',
      following: ['mike.brown92', 'native_ninja_03'],
    },
  ],
  [
    'native_ninja_03',
    {
      name: 'Native Ninja',
      login: 'native_ninja_03',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      blurhash: 'UaIF0q?vyDNH~qM_tQt7IVM{slt8T0xui^az',
      bio: 'Slicing through React Native projects.',
      following: ['codeMancer404'],
    },
  ],
  [
    'ReactRanger77',
    {
      name: 'React Ranger',
      login: 'ReactRanger77',
      avatar: 'https://images.unsplash.com/photo-1488161628813-04466f872be2',
      blurhash: 'URJkT5t7?F%L.Tt7s8WBxYj[Ioazv|jYbwof',
      bio: 'Guardian of React Native realm.',
      following: ['johny_1987', 'pixel_pioneer', 'native_ninja_03'],
    },
  ],
  [
    'pixel_pioneer',
    {
      name: 'Pixel Pioneer',
      login: 'pixel_pioneer',
      avatar:
        'https://plus.unsplash.com/premium_photo-1675129779554-dc86569708c8',
      blurhash: 'UVHek9-;9Zxu00ITozRjITtSt7sS?wWBV?t7',
      bio: 'Exploring pixel perfection with React Native.',
      following: [],
    },
  ],
  [
    'appArtisan',
    {
      name: 'App Artisan',
      login: 'appArtisan',
      avatar:
        'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97',
      blurhash: 'UBC7,0-=2|X:00IoXnR*_1xum+s+0gRj%2R*',
      bio: 'Crafting beautiful apps with React Native.',
      following: [],
    },
  ],
  [
    'binary_bard',
    {
      name: 'Binary Bard',
      login: 'binary_bard',
      avatar: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d',
      blurhash: 'UpKd[7t7%#-;~WoftRxu9ZWBMxRjo#ofRjRk',
      bio: 'Composing React Native masterpieces.',
      following: [],
    },
  ],
  [
    'ddruid22',
    {
      name: 'Digital Druid',
      login: 'ddruid22',
      avatar: 'https://images.unsplash.com/photo-1514626585111-9aa86183ac98',
      blurhash: 'UBEL51M{00xuxZR*n%oJ00t7~CNGn4f6tRfR',
      bio: 'Harnessing the magic of React Native.',
      following: [],
    },
  ],
  [
    'V.Voyager',
    {
      name: 'Virtual Voyager',
      login: 'V.Voyager',
      avatar: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58',
      blurhash: 'UCK+JU~mTVrE?;4?#A-ms%eU5DI]^2%JAGIY',
      bio: 'Embarking on React Native voyages.',
      following: ['johny_1987'],
    },
  ],
  [
    'CodeCrusader',
    {
      name: 'Code Crusader',
      login: 'CodeCrusader',
      avatar: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257',
      blurhash: 'UVGR^@4U_Nt6xuWVM|xuD%ofM{IoIoa|smRj',
      bio: 'On a quest for React Native excellence.',
      following: ['johny_1987'],
    },
  ],
  [
    'bit_buccaneer',
    {
      name: 'Bit Buccaneer',
      login: 'bit_buccaneer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      blurhash: 'UkJQ7lq[%1xu}=$fbIR*xZbHEMS$WBj]WVR*',
      bio: 'Sailing the high seas of React Native.',
      following: [],
    },
  ],
  [
    'nodeNomad2000',
    {
      name: 'Node Nomad',
      login: 'nodeNomad2000',
      avatar: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70',
      blurhash: 'UADStDH?69lANF4.smi^11E1=F$%~WVrbcOY',
      bio: 'Wandering the wilds of React Native.',
      following: [],
    },
  ],
  [
    'dataDrifter_11',
    {
      name: 'Data Drifter',
      login: 'dataDrifter_11',
      avatar: 'https://images.unsplash.com/photo-1587397845856-e6cf49176c70',
      blurhash: 'U78E6$of00WB_3j[4nay00ay~qof00ay~qof',
      bio: 'Drifting through the data streams of React Native.',
      birthday: '1992-10-10',
      following: [],
    },
  ],
]);

export const timeline = [
  {
    post: 'Successfully migrated my project to #Expo. The process was well-documented and straightforward. #ReactNative',
    author: 'Sara_C',
    timestamp: 1695742628925,
  },
  {
    post: 'Diving into #ReactNative with Expo has been a blast! The documentation is clear and getting started was a breeze.',
    author: 'appArtisan',
    timestamp: 1695740298925,
  },
  {
    post: 'Loving the live reload feature in #ReactNative and #Expo. It speeds up the development process significantly!',
    author: 'Sara_C',
    timestamp: 1695740308925,
  },
  {
    post: 'The ease of setting up a new project with Expo is unmatched. #Expo',
    author: 'bit_buccaneer',
    timestamp: 1695740318925,
  },
  {
    post: 'Just integrated a cool animation library in my #ReactNative app. The Expo ecosystem makes it so easy to find and use libraries.',
    author: 'Sara_C',
    timestamp: 1695741288925,
  },
  {
    post: 'Debugging in #ReactNative with Expo is a smoother experience than I initially thought. The error messages are quite descriptive.',
    author: 'appArtisan',
    timestamp: 1695741298925,
  },
  {
    post: 'The more I use #Expo with React Native, the more I appreciate the thoughtfulness behind this toolchain. #ReactNative',
    author: 'maryjane21',
    timestamp: 1695741308925,
  },
  {
    post: 'Working on a new #ReactNative project using #Expo. The set up was quick and easy!',
    author: 'johny_1987',
    timestamp: 1695741318925,
  },
  {
    post: 'Discovering a lot of useful libraries in the #Expo ecosystem. Really speeds up the development process. #ReactNative',
    author: 'pixel_pioneer',
    timestamp: 1695741328925,
  },
  {
    post: 'Finally got the hang of navigation in #ReactNative. The community has been a huge help!',
    author: 'ddruid22',
    timestamp: 1695742638925,
  },
  {
    post: 'The new hooks in #ReactNative 0.65 are a game changer. Simplifies logic so much!',
    author: 'tommycruise',
    timestamp: 1695742648925,
  },
  {
    post: 'Building a chat app using #ReactNative and #Expo. Real-time updates are slick and performance is on point.',
    author: 'ReactRanger77',
    timestamp: 1695742658925,
  },
  {
    post: 'The upgrade to the latest #ReactNative version went smoothly. Loving the new features!',
    author: 'dataDrifter_11',
    timestamp: 1695742668925,
  },
  {
    post: 'The interoperability of #ReactNative with native modules is incredible. The bridge is powerful!',
    author: 'V.Voyager',
    timestamp: 1695742678925,
  },
  {
    post: 'Styling in #ReactNative has come a long way. The support for CSS-in-JS solutions is superb.',
    author: 'ReactRanger77',
    timestamp: 1695742688925,
  },
  {
    post: 'Deployed my app to the App Store. The process was a breeze with #Expo. #ReactNative',
    author: 'Sara_C',
    timestamp: 1695742698925,
  },
  {
    post: 'The #ReactNative community is thriving. So many helpful resources and friendly developers.',
    author: 'CodeCrusader',
    timestamp: 1695742708925,
  },
  {
    post: 'Just discovered a neat library for state management in #ReactNative. The ecosystem is vast!',
    author: 'ddruid22',
    timestamp: 1695742718925,
  },
  {
    post: 'Performance optimizations in the latest #ReactNative release are impressive. Smooth scrolling and fast reloads!',
    author: 'johny_1987',
    timestamp: 1695742728925,
  },
  {
    post: 'Accessibility features in #ReactNative are robust. Making apps inclusive has never been easier.',
    author: 'V.Voyager',
    timestamp: 1695742738925,
  },
  {
    post: 'The variety of ready-to-use components in #ReactNative is a huge time saver. UI development is fast and fun!',
    author: 'ReactRanger77',
    timestamp: 1695742748925,
  },
  {
    post: 'Integration with Firebase in my #ReactNative app was straightforward. Real-time data syncing is powerful!',
    author: 'Sara_C',
    timestamp: 1695742758925,
  },
  {
    post: 'Loving the community-driven plugins for #ReactNative. So much creativity and useful functionality.',
    author: 'pixel_pioneer',
    timestamp: 1695742768925,
  },
  {
    post: 'Working with SVGs in #ReactNative is simple and effective. The rendering is crisp!',
    author: 'MarkSmith!@',
    timestamp: 1695742778925,
  },
  {
    post: 'I appreciate how #ReactNative encourages good architecture practices. Code organization is clean and modular.',
    author: 'CodeCrusader',
    timestamp: 1695742788925,
  },
  {
    post: 'Exploring the animations API in #ReactNative. The possibilities are endless!',
    author: 'nodeNomad2000',
    timestamp: 1695742798925,
  },
  {
    post: 'Deploying updates to my app using #Expo’s OTA updates feature is seamless. #ReactNative',
    author: 'mike.brown92',
    timestamp: 1695742808925,
  },
  {
    post: 'Testing in #ReactNative has been a pleasant experience. The support for Jest and testing libraries is solid.',
    author: 'CodeCrusader',
    timestamp: 1695742818925,
  },
  {
    post: 'I’m impressed with the error handling in #ReactNative. Error boundaries and descriptive error messages are a lifesaver.',
    author: 'binary_bard',
    timestamp: 1695742828925,
  },

  {
    post: 'The debugging tools available for #ReactNative have made my workflow much more efficient.',
    author: 'dataDrifter_11',
    timestamp: 1695742838925,
  },
  {
    post: 'Was able to integrate a complex native module in my #ReactNative project. The process was fairly straightforward!',
    author: 'binary_bard',
    timestamp: 1695742848925,
  },
  {
    post: 'Leveraging native capabilities while working in a #ReactNative environment is empowering.',
    author: 'tommycruise',
    timestamp: 1695742858925,
  },
  {
    post: 'The fast refresh feature in #ReactNative is a huge time saver. Instant feedback is invaluable.',
    author: 'bit_buccaneer',
    timestamp: 1695742868925,
  },
  {
    post: 'Adopting a monorepo structure for my #ReactNative projects has organized my workflow significantly.',
    author: 'mike.brown92',
    timestamp: 1695742878925,
  },
  {
    post: 'The amount of third-party libraries available for #ReactNative is staggering. So much to explore!',
    author: 'nodeNomad2000',
    timestamp: 1695742888925,
  },
  {
    post: 'Managing state in #ReactNative apps has become easier with the introduction of new state management libraries.',
    author: 'ddruid22',
    timestamp: 1695742898925,
  },
  {
    post: 'The gesture handling in #ReactNative is quite intuitive. UI interactions feel very natural.',
    author: 'MarkSmith!@',
    timestamp: 1695742908925,
  },
  {
    post: 'The documentation for #ReactNative has improved greatly over the years. It’s a valuable resource for developers.',
    author: 'native_ninja_03',
    timestamp: 1695742918925,
  },
  {
    post: 'I’m enjoying the flexibility of styling options in #ReactNative. The design system integration is smooth.',
    author: 'CodeCrusader',
    timestamp: 1695742928925,
  },
  {
    post: 'Creating a seamless user experience across both Android and iOS with #ReactNative has been a rewarding challenge.',
    author: 'native_ninja_03',
    timestamp: 1695742938925,
  },
  {
    post: 'The hot reloading feature in #ReactNative is a game changer. It significantly speeds up the development process.',
    author: 'binary_bard',
    timestamp: 1695742948925,
  },
  {
    post: 'Setting up CI/CD for my #ReactNative app was a breeze. The community has some great resources on this.',
    author: 'binary_bard',
    timestamp: 1695742958925,
  },
  {
    post: 'The ability to write a good portion of business logic in a shared codebase for multiple platforms is a huge win with #ReactNative.',
    author: 'maryjane21',
    timestamp: 1695742968925,
  },
  {
    post: 'Just got my #ReactNative certification! Excited to take on more complex projects and contribute to the community.',
    author: 'MarkSmith!@',
    timestamp: 1695742978925,
  },
  {
    post: 'Exploring the hardware-back button handling in #ReactNative. It’s good to have control over the native features.',
    author: 'annaj@codes',
    timestamp: 1695742988925,
  },
  {
    post: 'Over-the-air (OTA) updates in #ReactNative are a fantastic feature. It keeps the app updated without any user intervention.',
    author: 'codeMancer404',
    timestamp: 1695742998925,
  },
  {
    post: 'The transformation and animation capabilities in #ReactNative are robust. It brings the UI to life!',
    author: 'bit_buccaneer',
    timestamp: 1695743008925,
  },
  {
    post: 'Learning about different navigation libraries in #ReactNative. Each has its own set of powerful features.',
    author: 'pixel_pioneer',
    timestamp: 1695743018925,
  },
  {
    post: 'The in-app purchase functionality in #ReactNative is flexible and the setup was simpler than I anticipated.',
    author: 'V.Voyager',
    timestamp: 1695743028925,
  },
  {
    post: 'The React Native community is growing rapidly. So many inspiring projects out there!',
    author: 'nodeNomad2000',
    timestamp: 1695743038925,
  },
  {
    post: 'Loving the push notification capabilities in #ReactNative. Engagement has improved significantly in my app.',
    author: 'native_ninja_03',
    timestamp: 1695743048925,
  },
  {
    post: 'Error handling in #ReactNative has become much more streamlined with recent updates.',
    author: 'MarkSmith!@',
    timestamp: 1695743058925,
  },
  {
    post: 'React Native’s modular architecture is a boon. Separation of concerns is quite effective.',
    author: 'binary_bard',
    timestamp: 1695743068925,
  },
  {
    post: 'The profiling tools in #ReactNative are helping optimize the performance of my app.',
    author: 'CodeCrusader',
    timestamp: 1695743078925,
  },
  {
    post: 'Accessibility features in #ReactNative are a major plus. It’s important to create inclusive apps.',
    author: 'Sara_C',
    timestamp: 1695743088925,
  },
  {
    post: 'Learning the ropes of #ReactNative. The community has been incredibly supportive!',
    author: 'appArtisan',
    timestamp: 1695743098925,
  },
  {
    post: 'Exploring various testing frameworks for #ReactNative. It’s essential to ensure robustness in your app.',
    author: 'MarkSmith!@',
    timestamp: 1695743108925,
  },
  {
    post: 'It’s fascinating how #ReactNative allows for such a smooth blend of native and JavaScript code.',
    author: 'dataDrifter_11',
    timestamp: 1695743118925,
  },
  {
    post: 'Going deeper into the native modules in #ReactNative. The bridge is a powerful feature!',
    author: 'appArtisan',
    timestamp: 1695743128925,
  },
  {
    post: 'Building a complex animation sequence in #ReactNative. The output is absolutely delightful!',
    author: 'bit_buccaneer',
    timestamp: 1695743138925,
  },
  {
    post: 'The reusability of components across platforms in #ReactNative is a great asset for developers.',
    author: 'nodeNomad2000',
    timestamp: 1695743148925,
  },
  {
    post: 'The upgrade process for #ReactNative projects has been simplified over the years. Good to see continuous improvement.',
    author: 'MarkSmith!@',
    timestamp: 1695743158925,
  },
  {
    post: 'Exploring server-driven UI in #ReactNative. The concept holds promise for dynamic applications.',
    author: 'Sara_C',
    timestamp: 1695743168925,
  },
  {
    post: 'Learning about memory management in #ReactNative. Optimizations are crucial for smoother performance.',
    author: 'mike.brown92',
    timestamp: 1695743178925,
  },
  {
    post: 'Exploring the rich ecosystem of libraries and frameworks surrounding #ReactNative. There’s a package for almost everything!',
    author: 'mike.brown92',
    timestamp: 1695743188925,
  },
  {
    post: 'The #ReactNative documentation is a treasure trove of knowledge. Kudos to the community for maintaining it.',
    author: 'V.Voyager',
    timestamp: 1695743198925,
  },
  {
    post: 'Bundling and optimization in #ReactNative is a learning curve but the outcome is rewarding.',
    author: 'ddruid22',
    timestamp: 1695743208925,
  },
  {
    post: 'Incorporating Firebase in my #ReactNative app has been a seamless experience. Real-time updates are fantastic!',
    author: 'Sara_C',
    timestamp: 1695743218925,
  },
  {
    post: 'Creating a multi-language support in #ReactNative was easier than I thought. The localization libraries are efficient.',
    author: 'MarkSmith!@',
    timestamp: 1695743228925,
  },
  {
    post: 'The flexibility in styling components is something I absolutely love about #ReactNative.',
    author: 'tommycruise',
    timestamp: 1695743238925,
  },
  {
    post: 'Been working on migrating a large codebase to #ReactNative. The process has been relatively smooth and the performance gains noticeable.',
    author: 'tommycruise',
    timestamp: 1695743248925,
  },
  {
    post: 'Community support is one of the major strengths of #ReactNative. Encountered a bug and found a fix already available on GitHub.',
    author: 'binary_bard',
    timestamp: 1695743258925,
  },
  {
    post: 'Experimenting with different state management solutions in #ReactNative. Redux and MobX are both strong contenders.',
    author: 'dataDrifter_11',
    timestamp: 1695743268925,
  },
  {
    post: 'Getting my hands dirty with the native modules in #ReactNative. The ability to drop down to native code is powerful.',
    author: 'Sara_C',
    timestamp: 1695743278925,
  },
  {
    post: 'Integrating a machine learning model with my #ReactNative app. The process has been a learning curve.',
    author: 'ReactRanger77',
    timestamp: 1695743288925,
  },
  {
    post: 'The iterative nature of developing in #ReactNative is a time-saver. Instant feedback with hot reloading is fantastic.',
    author: 'annaj@codes',
    timestamp: 1695743298925,
  },
  {
    post: 'Investing time in learning #ReactNative has been rewarding. Building apps for both iOS and Android with a single codebase is amazing.',
    author: 'CodeCrusader',
    timestamp: 1695743308925,
  },
  {
    post: 'Debugging tools in #ReactNative have come a long way. Really appreciate the improvements in the latest release.',
    author: 'bit_buccaneer',
    timestamp: 1695743318925,
  },
  {
    post: 'Impressed with the new navigation solutions in #ReactNative. Routing and handling deep links has never been easier.',
    author: 'nodeNomad2000',
    timestamp: 1695743328925,
  },
  {
    post: 'The ongoing effort to improve the core libraries and lean core initiative is making #ReactNative more robust.',
    author: 'maryjane21',
    timestamp: 1695743338925,
  },
  {
    post: 'Implementing dark mode in #ReactNative. The community resources have been very helpful.',
    author: 'binary_bard',
    timestamp: 1695743348925,
  },
  {
    post: 'Experimenting with #ReactNative gestures and animations. The possibilities are endless.',
    author: 'Sara_C',
    timestamp: 1695743358925,
  },
  {
    post: 'The talent in the #ReactNative community is astounding. So many innovative solutions to common problems.',
    author: 'pixel_pioneer',
    timestamp: 1695743368925,
  },
  {
    post: 'Creating a seamless user experience across platforms with #ReactNative has been a challenging yet rewarding endeavor.',
    author: 'dataDrifter_11',
    timestamp: 1695743378925,
  },
  {
    post: 'It’s exciting to see #ReactNative evolving. The new features in the latest release are promising.',
    author: 'pixel_pioneer',
    timestamp: 1695743388925,
  },
  {
    post: 'Setting up CI/CD for my #ReactNative project has streamlined the development process significantly.',
    author: 'native_ninja_03',
    timestamp: 1695743398925,
  },
  {
    post: 'Exploring the capabilities of Hermes in #ReactNative. The performance improvements are noticeable.',
    author: 'binary_bard',
    timestamp: 1695743408925,
  },
  {
    post: 'Taking advantage of the vast ecosystem around #ReactNative to build a feature-rich application.',
    author: 'annaj@codes',
    timestamp: 1695743418925,
  },
  {
    post: 'Pushing the boundaries of what’s possible with #ReactNative. Excited for what’s to come!',
    author: 'mike.brown92',
    timestamp: 1695743428925,
  },
];
