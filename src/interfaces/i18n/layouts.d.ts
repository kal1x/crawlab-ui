export declare global {
  interface LLayouts {
    components: {
      header: {
        disclaimer: string;
        mySettings: string;
        logout: string;
      };
      sidebar: {
        expand: string;
        collapse: string;
      };
    };
    detailLayout: {
      navTabs: {
        toggle: {
          tooltip: {
            expand: string;
            collapse: string;
          };
        };
      };
    };
    routes: {
      home: string;
      nodes: {
        title: string;
        tabs: {
          overview: string;
          tasks: string;
          monitoring: string;
        };
      };
      projects: {
        title: string;
        tabs: {
          overview: string;
          spiders: string;
        };
      };
      spiders: {
        title: string;
        tabs: {
          overview: string;
          files: string;
          tasks: string;
          schedules: string;
          data: string;
          settings: string;
          dependencies: string;
        };
      };
      tasks: {
        title: string;
        tabs: {
          overview: string;
          logs: string;
          data: string;
        };
      };
      schedules: {
        title: string;
        tabs: {
          overview: string;
          tasks: string;
        };
      };
      users: {
        title: string;
        tabs: {
          overview: string;
        };
      };
      tokens: {
        title: string;
      };
      dependencies: {
        title: string;
        settings: string;
        lang: {
          python: string;
          node: string;
        };
      };
      notification: {
        title: string;
        settings: {
          title: string;
          tabs: {
            overview: string;
            template: string;
          };
        };
      };
      gits: {
        title: string;
        tabs: {
          overview: string;
          files: string;
          logs: string;
          changes: string;
          spiders: string;
        };
      };
      dataSources: {
        title: string;
        tabs: {
          overview: string;
        };
      };
      environments: {
        title: string;
      };
      system: {
        title: string;
      };
      misc: {
        disclaimer: string;
        mySettings: string;
      };
    };
  }
}
