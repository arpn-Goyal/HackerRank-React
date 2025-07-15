import React, { useState, useEffect } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const App = () => {
  const [recordId, setRecordId] = useState(0);
  const [filteredRecord, setFilteredRecord] = useState([]);
  useEffect(() => {
    // console.log(`App.js, Current Record ID: : ${recordId}`);
    if (recordId > 0) {
      // console.log(typeof(recordId))
      const newFilteredArr = medical_records.filter((val) => Number(val.id) === Number(recordId));
      // console.log(newFilteredArr);
      if (newFilteredArr.length > 0) {
        setFilteredRecord(newFilteredArr[0].data);
      } else {
        setFilteredRecord([]); // Clear the records if no match found
      }
    }
  }, [recordId])

  // const handleShow = (id)=>{
  //   setRecordId((prevId)=> prevId);
  //   console.log(`Record Id (App.js) : ${recordId}`);
  // }
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setRecordId={setRecordId} />
        <Records filteredRecord={filteredRecord} setRecordId={setRecordId} recordId={recordId} />
      </div>
    </div>
  );
};

export default App;
