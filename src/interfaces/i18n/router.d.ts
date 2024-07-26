export declare global {
  interface LRouter {
    menuItems: {
      home: string;
      nodes: string;
      projects: string;
      spiders: string;
      schedules: string;
      tasks: string;
      git: string;
      ds: string;
      users: string;
      tags: string;
      tokens: string;
      plugins: string;
      env: {
        deps: {
          title: string;
          settings: string;
          python: string;
          node: string;
        };
      };
      notification: {
        title: string;
        settings: string;
        channels: string;
        requests: string;
      };
      environment: string;
      system: string;
      misc: {
        disclaimer: string;
        mySettings: string;
      };
    };
  }
}
