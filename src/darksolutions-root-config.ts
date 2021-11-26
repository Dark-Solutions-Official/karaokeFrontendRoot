import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@darksolutions/home",
  app: () =>
    System.import(
      "@darksolutions/home"
    ),
  activeWhen: ["/home"],
});

registerApplication({  
  name: "@darksolutions/player",
  app: () =>
    System.import( 
      "@darksolutions/player"
    ),
  activeWhen: ["/player"],
});

registerApplication({  
  name: "@darksolutions/voiceRecognition",
  app: () =>
    System.import( 
      "@darksolutions/voiceRecognition"
    ),
  activeWhen: ["/player"],
});

registerApplication({  
  name: "@darksolutions/dashboard",
  app: () =>
    System.import( 
      "@darksolutions/dashboard"
    ),
  activeWhen: ["/dashboard"],
});


start({
  urlRerouteOnly: true,
});
