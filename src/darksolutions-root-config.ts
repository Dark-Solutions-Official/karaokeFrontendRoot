import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@darksolutions/home",
  app: () =>
    System.import(
      "https://pages.saymonastua.com:4100/main.js"
    ),
  activeWhen: ["/home", "/"],
});

registerApplication({  
  name: "@darksolutions/player",
  app: () =>
    System.import( 
      "https://pages.saymonastua.com:4101/main.js"
    ),
  activeWhen: ["/player"],
});

registerApplication({  
  name: "@darksolutions/voiceRecognition",
  app: () =>
    System.import( 
      "https://pages.saymonastua.com:4102/main.js"
    ),
  activeWhen: ["/player"],
});

registerApplication({  
  name: "@darksolutions/dashboard",
  app: () =>
    System.import( 
      "https://pages.saymonastua.com:4103/main.js"
    ),
  activeWhen: ["/dashboard"],
});


start({
  urlRerouteOnly: true,
});
