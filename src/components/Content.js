import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { MainLayout, Overlay } from "../utils/styledComponents";
import Profile from "./Profile";

const Content = ({ isProfileOpen, closeProfile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  return (
    <MainLayout>
      <Document file="/Zadanie.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {isProfileOpen && (
        <Overlay>
          <Profile closeProfile={closeProfile} />
        </Overlay>
      )}
    </MainLayout>
  );
};

export default Content;
