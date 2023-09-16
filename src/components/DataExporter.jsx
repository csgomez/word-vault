import { Button } from 'react-bootstrap';
import { arrayToPrettyJSON, storage } from '../utils';

const DataExporter = () => {
  const handleExportClick = async () => {
    try {
      const data = await storage.get('words');
      const wordData = data.words;

      const formatedWordData = arrayToPrettyJSON(wordData);
      downloadJSON(formatedWordData, 'WordVault-data.json');
    } catch (err) {
      console.error('Error exporting data:', err);
    }
  };

  const downloadJSON = (data, filename) => {
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="d-flex justify-content-center">
      <Button
        className="flex-fill mx-5"
        varaint="outline-secondary"
        onClick={handleExportClick}
      >
        Export Data
      </Button>
    </div>
  );
};

export default DataExporter;
