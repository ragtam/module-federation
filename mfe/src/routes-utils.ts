import { Router, Routes } from '@angular/router';

const generateRoutes = (rootPath: string, routes: Routes): Routes => {
  return [
    {
      path: rootPath, // this path is defined on the host (shell) side
      children: routes,
    },
  ];
};

const navigate = (router: Router, rootPath: string) => {
  const url = ``;
  // don't pass navigation to angular router if it leads outside of this app
  if (!location.pathname.includes(rootPath)) {
    return;
  }
  void router.navigateByUrl(rootPath);
};

export const connectWebComponentRouting = (router: Router, rootPath: string): (() => void) => {
  // add root-path as parent of all web-component paths
  if(router.config[0].path !== rootPath) {
    router.resetConfig(generateRoutes(rootPath, router.config));
  }

  console.log('router config', router.config);
  // translate browser navigation to angular router
  navigate(router, rootPath);



  // const hashchangeListener = () => {
  //   console.log('hash change listener')
  //   navigate(router, rootPath);
  // };

  const popStateListener = () => {
    navigate(router, rootPath);
  };

  // window.addEventListener('hashchange', hashchangeListener);
  window.addEventListener('popstate', popStateListener);

  return popStateListener;
};
