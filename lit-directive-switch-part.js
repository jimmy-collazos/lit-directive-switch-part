import { directive, nothing } from "lit-html";

const getProperty = (store, key) => (Object.prototype.hasOwnProperty.call(store, key) ? store[key] : nothing);
const isFn = (v) => typeof v === 'function';

function switchPartDirective(store, opt = {}){
  let part;
  let lastKey;
  let {default: _default = 'default', resolver = getProperty, cache = true } = opt;
  const kvStore = new Map();
  const getRaw = (key) => {
    let value = resolver(store, key);
    return isFn(value) ? value(lastKey) : value;
  };
  const getFromCache = (key) => {
    if(kvStore.has(key)){
      return kvStore.get(key); 
    }
    kvStore.set(key, getRaw(key));
    return kvStore.get(key);
  };
  const get  = cache ? getFromCache : getRaw;
  const setValue = (value, key) => {
    if(part){
      part.setValue(value);
      part.commit();
      lastKey = key;
    }
  };
  const switchPartFn = (_part) => {
    part = _part;
    setValue(get(_default));
  };

  switchPartFn.clear = (_) => setValue(nothing);
  switchPartFn.case = (key) => setValue(get(key), key)

  return switchPartFn;
}

export const switchPart = directive(switchPartDirective);