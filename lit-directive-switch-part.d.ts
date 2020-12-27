import {DirectiveFn, Part} from 'lit-html';

declare interface SwitchPartOptions {
  default: string;
  resolver: (lastKey: string) => any;
  cache: boolean;
}

declare type SwitchPartFn = (part: Part) => DirectiveFn;

declare interface SwitchPart extends SwitchPartFn{
  case(key: string): void;
  clear(): void;
}

declare function switchPart(store: Object, options:SwitchPartOptions):SwitchPart;
