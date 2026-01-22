import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0c3b57fd"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=0c3b57fd"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=0c3b57fd"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/style/App.css";
import ArmyManager from "/src/component/ArmyManager.jsx?t=1768744139086";
import RegisterForm from "/src/component/RegisterForm.jsx";
import Body from "/src/component/Body.jsx";
import Header from "/src/component/Header.jsx";
import AnimationMoche from "/src/component/AnimationMoche.jsx";
import { DataProvider } from "/src/component/DataContext.jsx";
import __vite__cjsImport10_react from "/node_modules/.vite/deps/react.js?v=0c3b57fd"; const useState = __vite__cjsImport10_react["useState"]; const useEffect = __vite__cjsImport10_react["useEffect"];
export default function App() {
  _s();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [allData, setAllData] = useState({ factions: [] });
  const [selectedFaction, setSelectedFaction] = useState("all");
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/data/unit.json").then((response) => response.json()).then((data) => setAllData(data)).catch((error) => console.error("Données non chargées FF TOTAL", error));
  }, []);
  const handleFactionSelect = (faction) => {
    setSelectedFaction(faction);
  };
  const handleRegisterForm = (register) => {
    setShowRegisterForm(register);
  };
  return /* @__PURE__ */ jsxDEV(DataProvider, { children: [
    /* @__PURE__ */ jsxDEV(
      Header,
      {
        showRegisterForm,
        setShowRegisterForm,
        onFactionSelect: handleFactionSelect,
        onRegister: () => setShowRegisterForm(!user),
        user,
        setUser
      },
      void 0,
      false,
      {
        fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    user ? /* @__PURE__ */ jsxDEV(
      ArmyManager,
      {
        user,
        allData
      },
      void 0,
      false,
      {
        fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    ) : showRegisterForm ? /* @__PURE__ */ jsxDEV(
      RegisterForm,
      {
        onClose: () => setShowRegisterForm(false),
        setUser
      },
      void 0,
      false,
      {
        fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
        lineNumber: 51,
        columnNumber: 7
      },
      this
    ) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(AnimationMoche, {}, void 0, false, {
        fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Body, { allData, faction: selectedFaction }, void 0, false, {
        fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_s(App, "hjcfZU5lLOz8VG9v6eKdYmYZ2uM=");
_c = App;
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx",
  lineNumber: 66,
  columnNumber: 52
}, this));
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/gripo/Desktop/Apprentissage/Projet/site-w40k/src/main.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBb0NNLFNBa0JFLFVBbEJGOztBQW5DTixTQUFTQSxrQkFBa0I7QUFDM0IsU0FBU0Msa0JBQWtCO0FBQzNCLE9BQU87QUFDUCxPQUFPQyxpQkFBaUI7QUFDeEIsT0FBT0Msa0JBQWtCO0FBQ3pCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxvQkFBb0I7QUFDM0IsU0FBU0Msb0JBQW9CO0FBQzdCLFNBQVNDLFVBQVVDLGlCQUFpQjtBQUVwQyx3QkFBd0JDLE1BQU07QUFBQUMsS0FBQTtBQUM1QixRQUFNLENBQUNDLGtCQUFrQkMsbUJBQW1CLElBQUlMLFNBQVMsS0FBSztBQUM5RCxRQUFNLENBQUNNLFNBQVNDLFVBQVUsSUFBSVAsU0FBUyxFQUFFUSxVQUFVLEdBQUcsQ0FBQztBQUN2RCxRQUFNLENBQUNDLGlCQUFpQkMsa0JBQWtCLElBQUlWLFNBQVMsS0FBSztBQUM1RCxRQUFNLENBQUNXLE1BQU1DLE9BQU8sSUFBSVosU0FBUyxJQUFJO0FBRXJDQyxZQUFVLE1BQU07QUFDZFksVUFBTSxpQkFBaUIsRUFDcEJDLEtBQUssQ0FBQUMsYUFBWUEsU0FBU0MsS0FBSyxDQUFDLEVBQ2hDRixLQUFLLENBQUFHLFNBQVFWLFdBQVdVLElBQUksQ0FBQyxFQUM3QkMsTUFBTSxDQUFBQyxVQUFTQyxRQUFRRCxNQUFNLGlDQUFpQ0EsS0FBSyxDQUFDO0FBQUEsRUFDekUsR0FBRyxFQUFFO0FBRUwsUUFBTUUsc0JBQXNCQSxDQUFDQyxZQUFZO0FBQ3ZDWix1QkFBbUJZLE9BQU87QUFBQSxFQUM1QjtBQUVBLFFBQU1DLHFCQUFxQkEsQ0FBQ0MsYUFBYTtBQUN2Q25CLHdCQUFvQm1CLFFBQVE7QUFBQSxFQUM5QjtBQUdBLFNBQ0UsdUJBQUMsZ0JBQ0M7QUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0M7QUFBQSxRQUNBO0FBQUEsUUFDQSxpQkFBaUJIO0FBQUFBLFFBQ2pCLFlBQVksTUFBTWhCLG9CQUFvQixDQUFDTSxJQUFJO0FBQUEsUUFDM0M7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1tQjtBQUFBLElBRWxCQSxPQUNDO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQztBQUFBLFFBQ0E7QUFBQTtBQUFBLE1BRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRW1CLElBRWpCUCxtQkFDRjtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsU0FBUyxNQUFNQyxvQkFBb0IsS0FBSztBQUFBLFFBQ3hDO0FBQUE7QUFBQSxNQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUVtQixJQUVuQixtQ0FDRTtBQUFBLDZCQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZTtBQUFBLE1BQ2YsdUJBQUMsUUFBSyxTQUFrQixTQUFTSSxtQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFpRDtBQUFBLFNBRm5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FHQTtBQUFBLE9BdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3QkE7QUFJSjtBQUFDTixHQW5EdUJELEtBQUc7QUFBQXVCLEtBQUh2QjtBQXFEeEJULFdBQVdpQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUFPLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLENBQUc7QUFBRSxJQUFBSDtBQUFBSSxhQUFBSixJQUFBIiwibmFtZXMiOlsiU3RyaWN0TW9kZSIsImNyZWF0ZVJvb3QiLCJBcm15TWFuYWdlciIsIlJlZ2lzdGVyRm9ybSIsIkJvZHkiLCJIZWFkZXIiLCJBbmltYXRpb25Nb2NoZSIsIkRhdGFQcm92aWRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwIiwiX3MiLCJzaG93UmVnaXN0ZXJGb3JtIiwic2V0U2hvd1JlZ2lzdGVyRm9ybSIsImFsbERhdGEiLCJzZXRBbGxEYXRhIiwiZmFjdGlvbnMiLCJzZWxlY3RlZEZhY3Rpb24iLCJzZXRTZWxlY3RlZEZhY3Rpb24iLCJ1c2VyIiwic2V0VXNlciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUZhY3Rpb25TZWxlY3QiLCJmYWN0aW9uIiwiaGFuZGxlUmVnaXN0ZXJGb3JtIiwicmVnaXN0ZXIiLCJfYyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFpbi5qc3hcclxuaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgJy4vc3R5bGUvQXBwLmNzcyc7XHJcbmltcG9ydCBBcm15TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudC9Bcm15TWFuYWdlci5qc3gnO1xyXG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gJy4vY29tcG9uZW50L1JlZ2lzdGVyRm9ybS5qc3gnO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL2NvbXBvbmVudC9Cb2R5LmpzeCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnQvSGVhZGVyLmpzeCc7XHJcbmltcG9ydCBBbmltYXRpb25Nb2NoZSBmcm9tICcuL2NvbXBvbmVudC9BbmltYXRpb25Nb2NoZS5qc3gnO1xyXG5pbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuL2NvbXBvbmVudC9EYXRhQ29udGV4dC5qc3gnOyAvLyDihpAgSW1wb3J0IG5vbW3DqVxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFtzaG93UmVnaXN0ZXJGb3JtLCBzZXRTaG93UmVnaXN0ZXJGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsRGF0YV0gPSB1c2VTdGF0ZSh7IGZhY3Rpb25zOiBbXSB9KTtcclxuICBjb25zdCBbc2VsZWN0ZWRGYWN0aW9uLCBzZXRTZWxlY3RlZEZhY3Rpb25dID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnL2RhdGEvdW5pdC5qc29uJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhID0+IHNldEFsbERhdGEoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKFwiRG9ubsOpZXMgbm9uIGNoYXJnw6llcyBGRiBUT1RBTFwiLCBlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmFjdGlvblNlbGVjdCA9IChmYWN0aW9uKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEZhY3Rpb24oZmFjdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXJGb3JtID0gKHJlZ2lzdGVyKSA9PiB7XHJcbiAgICBzZXRTaG93UmVnaXN0ZXJGb3JtKHJlZ2lzdGVyKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXRhUHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBzaG93UmVnaXN0ZXJGb3JtPXtzaG93UmVnaXN0ZXJGb3JtfVxyXG4gICAgICAgIHNldFNob3dSZWdpc3RlckZvcm09e3NldFNob3dSZWdpc3RlckZvcm19XHJcbiAgICAgICAgb25GYWN0aW9uU2VsZWN0PXtoYW5kbGVGYWN0aW9uU2VsZWN0fVxyXG4gICAgICAgIG9uUmVnaXN0ZXI9eygpID0+IHNldFNob3dSZWdpc3RlckZvcm0oIXVzZXIpfVxyXG4gICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgc2V0VXNlcj17c2V0VXNlcn1cclxuICAgICAgLz5cclxuICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgPEFybXlNYW5hZ2VyXHJcbiAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgYWxsRGF0YT17YWxsRGF0YX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogc2hvd1JlZ2lzdGVyRm9ybSA/IChcclxuICAgICAgICA8UmVnaXN0ZXJGb3JtXHJcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93UmVnaXN0ZXJGb3JtKGZhbHNlKX1cclxuICAgICAgICAgIHNldFVzZXI9e3NldFVzZXJ9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxBbmltYXRpb25Nb2NoZSAvPlxyXG4gICAgICAgICAgPEJvZHkgYWxsRGF0YT17YWxsRGF0YX0gZmFjdGlvbj17c2VsZWN0ZWRGYWN0aW9ufSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxuXHJcblxyXG59XHJcblxyXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcig8QXBwIC8+KTtcclxuIl0sImZpbGUiOiJDOi9Vc2Vycy9ncmlwby9EZXNrdG9wL0FwcHJlbnRpc3NhZ2UvUHJvamV0L3NpdGUtdzQway9zcmMvbWFpbi5qc3gifQ==