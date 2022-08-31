import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsBar = ({tabs, contents, selectedTab, setSelectedTab}) => (
 
  <Tabs
    defaultIndex={selectedTab}
    onSelect={(index) => setSelectedTab && setSelectedTab(index)}
  >
    <TabList>
      {tabs &&
        tabs.length > 0 &&
        tabs.map((tab, tidx) => {
          return <Tab key={`tab-${tidx}`}>{tab}</Tab>;
        })} 
    </TabList>

    {contents &&
      contents.length > 0 &&
      contents.map((element, tidx) => {
        return <TabPanel key={`tab-content-${tidx}`}>{element}</TabPanel>;
      })}
  </Tabs>
);
export default TabsBar;
