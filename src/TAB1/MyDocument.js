import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid #ccc'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    maxWidth: '100%',
    maxHeight: 'auto'
  }
});

const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{formData.text}</Text>
      </View>
      <View style={styles.section}>
        {formData.image && <Image src={formData.image} style={styles.image} />}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
