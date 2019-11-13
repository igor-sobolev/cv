import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import MaterialIcon from "material-icons-react";
import "./App.css";

const MIN_WIDTH = 600;

function App() {
  const [pages, setPages] = useState();
  const [container, setContainer] = useState();

  const onLoadSuccess = ({ numPages }) => {
    const pages = createPages(numPages);
    setPages(pages);
  };

  const calculateWidth = () => {
    return container.offsetWidth || MIN_WIDTH;
  };

  const createPages = count => {
    let pages = [];
    for (let i = 1; i <= count; i++) {
      pages.push(<Page pageNumber={i} width={calculateWidth()} key={i} />);
    }
    return pages;
  };

  return (
    <div className="App" ref={el => setContainer(el)}>
      <Document file={`${process.env.PUBLIC_URL}/CV - Igor Sobolev.pdf`} onLoadSuccess={onLoadSuccess}>
        {pages}
      </Document>
      <a
        className="download-btn"
        download
        href={`${process.env.PUBLIC_URL}/CV - Igor Sobolev.pdf`}
      >
        <MaterialIcon icon="cloud_download" color="white" />
      </a>
    </div>
  );
}

export default App;
