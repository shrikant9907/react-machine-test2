import { useState } from "react";
import { Button, Card, Table, Form, Container } from "react-bootstrap";
import "./App.css";
import TabsBar from "./components/Tabs";

function App() {
  const tabsList = ["Tab 1", "Tab 2", "Tab 4", "Tab 4", "Tab 5"];
  const initialFormRowData = { name: "", age: "", location: "", phone: "" };
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabsData, setTabsData] = useState([
    [initialFormRowData],
    [initialFormRowData],
    [initialFormRowData],
    [initialFormRowData],
    [initialFormRowData],
  ]);
 
  const handleFieldChange = (e, idx) => {
    const {name, value } = e.target;
    const newTabsData = [...tabsData];
    newTabsData[selectedTab][idx] = {...newTabsData[selectedTab][idx], [name]: value}
    setTabsData(newTabsData);
  };

  const tableNewRowHandler = () => {
    const newTabsData = [...tabsData];
    newTabsData[selectedTab] = [...newTabsData[selectedTab], initialFormRowData]
    setTabsData(newTabsData);
  };

  const handleSubmit = () => {
    console.log('Response: ', tabsData)
  };

  const handleDeleteRow = (index) => {
    const newTabsData = [...tabsData];
    newTabsData[selectedTab] = newTabsData[selectedTab].filter((item, idx) => idx !== index);
    setTabsData(newTabsData);
  }

  const TabContentBox = () => {
    return (
      <Card>
         
        <Card.Body>
          <Button
            className="mb-3"
            variant="primary"
            onClick={() => tableNewRowHandler()}
          >
            Add New
          </Button>
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {tabsData &&
                tabsData[selectedTab].map((trow, tridx) => {
                  return (
                    <tr key={`tr-${tridx}`}>
                      <td>
                        <Form.Control
                          type="text"
                          name="name"
                          value={trow.name}
                          onChange={(e) => handleFieldChange(e, tridx)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name="age"
                          value={trow.age}
                          onChange={(e) => handleFieldChange(e, tridx)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name="location"
                          value={trow.location}
                          onChange={(e) => handleFieldChange(e, tridx)}
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={trow.phone}
                          onChange={(e) => handleFieldChange(e, tridx)}
                        />
                      </td>
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={() => handleDeleteRow(tridx)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <Button variant="outline-success" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Card.Body>
      </Card>
    );
  };

  const tabContent = [
    TabContentBox(),
    TabContentBox(),
    TabContentBox(),
    TabContentBox(),
    TabContentBox(),
  ];

  return (
    <Container className="mt-5">
      <TabsBar
        tabs={tabsList}
        contents={tabContent}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </Container>
  );
}

export default App;
