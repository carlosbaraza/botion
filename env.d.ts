declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_TOKEN: string;
    }
  }
}

export {};
