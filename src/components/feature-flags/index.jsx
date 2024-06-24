import { useContext } from "react";
import Accordion from "../accordion";
import LightDarkMode from "../light-dark-mode";
import RandomColorGenerator from "../random-color-generator";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGenerator />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading... Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
