// Fetching data from CSV file
fetch('overall.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        let html = '<table>';
        rows.forEach(row => {
            const columns = row.split(',');
            html += '<tr>';
            columns.forEach(column => {
                html += `<td>${column}</td>`;
            });
            html += '</tr>';
        });
        html += '</table>';
        document.getElementById('scoreboard').innerHTML = html;
    })
    .catch(error => console.error('Error fetching the CSV file:', error));
