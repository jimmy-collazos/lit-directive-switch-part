export declare interface SwitchPartOptions {
  default: string;
  resolver: (lastKey: string) => any;
  cache: boolean;
}

declare type SwitchPartFn = (part: any) => any;

declare interface SwitchPart extends SwitchPartFn{
  case: (key: string) => void;
  clear: () => void;
}

export declare type switchPart = (store: Object, options:SwitchPartOptions) => SwitchPart;
