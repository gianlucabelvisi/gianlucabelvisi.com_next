import 'styled-components';
import { Theme } from './blog';

// Extend the styled-components DefaultTheme interface
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 