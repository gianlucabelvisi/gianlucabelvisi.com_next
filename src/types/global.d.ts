// MDX module declarations
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

// Image module declarations
declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_FIREBASE_API_KEY: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_FIREBASE_APP_ID: string;
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
  }
} 