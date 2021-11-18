import { 
  useEffect, 
  useState, 
  lazy, 
  Suspense
} from "react";

const useDynamicScript = url => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if(!url) return;

    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url])

  return {
    ready,
    failed
  };
};

function loadComponent(scope, module) {

  console.log('scope :>> ', scope);
  console.log('module :>> ', module);

  return async () => {
    const react = require("react");
      const reactDom = require("react-dom");
      const recoil = require("recoil");
      const emotion = require("@emotion/react");

      const legacyShareScope = {
        react: {
          [react.version]: {
            get: () => new Promise(resolve => resolve(() => react)),
            loaded: true,
            from: "webpack4",
          },
        },
        "react-dom": {
          [reactDom.version]: {
            get: () => new Promise(resolve => resolve(() => reactDom)),
            loaded: true,
            from: "webpack4",
          },
        },
        recoil: {
          [recoil]: {
            get: () => new Promise(resolve => resolve(() => recoil)),
            loaded: true,
            from: "webpack4",
          },
        },
        "@emotion/react": {
          [emotion]: {
            get: () => new Promise(resolve => resolve(() => emotion)),
            loaded: true,
            from: "webpack4",
          },
        },
      };

      const container = window[scope];

      try {
        await container.init(legacyShareScope);
      } catch (error) {
        console.error(error);
      }

      const factory = await window[scope].get(module);

      const Module = factory();
      return Module;
  }
}  

const DynamicRemoteContainer = ({ 
  url, 
  module: targetModule, 
  scope, 
  ...props
}) => {
  
  const { ready, failed } = useDynamicScript(url);

  console.log('ready :>> ', ready);

  if (!ready) return <h2>Loading dynamic script: {url}</h2>;
  
  if (failed) return <h2>Failed to load dynamic script: {url}</h2>;

  const Component = lazy(loadComponent(scope, targetModule));

  return (
    <Suspense fallback="Loading System">
      <Component {...props}/>
    </Suspense>
  )
}

export default DynamicRemoteContainer;