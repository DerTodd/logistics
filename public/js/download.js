const objectToCsv = function(data) {

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
        const values = headers.map(header => {
            const escaped = (''+row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
};

const download = function(data) {
    const blob = new Blob([data], { type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a)

};


const generateReport = async (event) => {
    event.preventDefault();
    alert("working")
    console.log("_____");
    const res = await fetch(`/`, {
        method: 'GET',
      });
      alert("data")
      const json = await res.json()

      const data =json.map(row => ({
          id: id,
          product_name: product_name,
      }));
console.log(data)
      const csvData = objectToCsv(data)
    download(csvData)
      if (res.ok) {
        document.location.replace('/csv');
      } else {
        alert('Failed to create post');
      }
    };

    const createCsv = async (event) => {
        event.preventDefault();
        alert("working")
        console.log("_____");
        document.location.replace('/api/csv/download')
    };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', createCsv);