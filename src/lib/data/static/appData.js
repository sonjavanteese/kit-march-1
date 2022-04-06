export const appData = [
  {
    "id": 0,
    "slug": "start",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Pico-Css",
      "bg": "https://nwp-cgn.de/img/poser/imgA02.png"
    },
    "link": {
      "path": "/",
      "name": "Start",
      "icon": "home"
    }
  },
  {
    "id": 1,
    "slug": "user",
    "head": {
      "titel": "Nwp-User",
      "sub": "User-Profil",
      "bg": "https://nwp-cgn.de/img/poser/airhostess_128.png"
    },
    "link": {
      "path": "/user",
      "name": "User",
      "icon": "user"
    }
  },
  {
    "id": 2,
    "slug": "jedit",
    "head": {
      "titel": "Nwp-Components",
      "sub": "Svelte WindiCss",
      "bg": "https://nwp-cgn.de/img/poser/imgA06.png"
    },
    "link": {
      "path": "/jedit",
      "name": "Jedit",
      "icon": "database"
    }
  },
  {
    "id": 3,
    "slug": "classic",
    "head": {
      "titel": "Blackburn-Studio",
      "sub": "Classic BB- Sessions",
      "bg": "https://nwp-cgn.de/img/poser/imgA05.png"
    },
    "link": {
      "path": "/bb",
      "name": "Classic",
      "icon": "database"
    }
  },
  {
    "id": 4,
    "slug": "items",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Items",
      "bg": "https://nwp-cgn.de/img/poser/airhostess_128.png"
    },
    "link": {
      "path": "/items",
      "name": "Items",
      "icon": "database"
    }
  }
];  
export const navData = appData.map((x) => x.head);
export const pageData = appData.map((x) => x.head);

export default appData;

