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

start({
  urlRerouteOnly: true,
});
