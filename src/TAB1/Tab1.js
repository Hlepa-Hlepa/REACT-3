import React, { useState } from 'react';
import FormComponent from './FormComponent'; // Исправленный путь
import MyDocument from './MyDocument'; // Исправленный путь
import { PDFDownloadLink } from '@react-pdf/renderer';

function Tab1() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="content">
      <FormComponent onSubmit={handleFormSubmit} />
      {formData && (
        <PDFDownloadLink document={<MyDocument formData={formData} />} fileName="document.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default Tab1;
