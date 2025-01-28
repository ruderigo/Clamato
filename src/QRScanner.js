import { QrReader } from 'react-qr-scanner';

const QRScanner = () => {
  const handleResult = (result, error) => {
    if (result) {
      console.log(result.text);
    }
    if (error) {
      console.error(error);
    }
  };

  return (
    <QrReader
      onResult={handleResult}
      constraints={{ facingMode: 'environment' }}
      style={{ width: '100%' }}
    />
  );
};

export default QRScanner;