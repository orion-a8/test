 <script>
        // script.js ke saare JavaScript code yahan paste karein
        function displayData() {
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbzTeKvIGKl_UFyEsPiAVZrPj-HuZ3XfCN9MV1q9FbmLt5IOVcTUkN4-Z1ATEQN0vErQ/exec';

            fetch(scriptUrl)
                .then(response => response.json())
                .then(data => {
                    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
                    dataTable.innerHTML = '';

                    data.forEach(row => {
                        const newRow = dataTable.insertRow();
                        row.forEach(cell => {
                            const newCell = newRow.insertCell();
                            newCell.textContent = cell;
                        });
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }

        window.onload = displayData;

        function populateSambhag() {
            const state = document.getElementById('state').value;
            const sambhagSelect = document.getElementById('sambhag');
            sambhagSelect.innerHTML = '<option value="">चुनें</option>';

            if (state === 'madhya pradesh') {
                const sambhags = [
                    'इन्दौर संभाग', 'सागर संभाग', 'उज्जैन संभाग', 'ग्वालियर संभाग',
                    'चंबल संभाग', 'जबलपुर संभाग', 'नर्मदापुरम संभाग', 'भोपाल संभाग',
                    'रीवा संभाग', 'शहडोल संभाग'
                ];
                sambhags.forEach(sambhag => {
                    const option = document.createElement('option');
                    option.value = sambhag;
                    option.text = sambhag;
                    sambhagSelect.appendChild(option);
                });
            }
        }

        function populateJila() {
            const sambhag = document.getElementById('sambhag').value;
            const jilaSelect = document.getElementById('jila');
            jilaSelect.innerHTML = '<option value="">चुनें</option>';

            const jilaOptions = {
                'इन्दौर संभाग': ['बड़वानी', 'बुरहानपुर', 'धार', 'इंदौर', 'झाबुआ', 'खंडवा', 'खरगोन', 'अलीराजपुर'],
                'सागर संभाग': ['छतरपुर', 'दमोह', 'पन्ना', 'सागर', 'टीकमगढ़', 'निवाड़ी'],
                'उज्जैन संभाग': ['देवास', 'मंदसौर', 'नीमच', 'रतलाम', 'शाजापुर', 'आगर मालवा', 'उज्जैन'],
                'ग्वालियर संभाग': ['अशोकनगर', 'दतिया', 'गुना', 'ग्वालियर', 'शिवपुरी'],
                'चंबल संभाग': ['चंबल', 'भिण्ड', 'श्योपुर'],
                'जबलपुर संभाग': ['जबलपुर जिला', 'कटनी जिला', 'नरसिंहपुर जिला', 'सिवनी जिला', 'छिंदवाड़ा जिला', 'बालाघाट जिला', 'मंडला जिला', 'डिंडौरी ज़िला', 'पांढुरना'],
                'नर्मदापुरम संभाग': ['नर्मदापुरम', 'हरदा', 'बैतूल'],
                'भोपाल संभाग': ['भोपाल', 'रायसेन', 'राजगढ़', 'सीहोर', 'विदिशा'],
                'रीवा संभाग': ['रीवा', 'सतना', 'सीधी', 'सिंगरौली', 'मऊगंज'],
                'शहडोल संभाग': ['अनूपपुर', 'उमरिया', 'शहडोल']
            };

            if (jilaOptions[sambhag]) {
                jilaOptions[sambhag].forEach(jila => {
                    const option = document.createElement('option');
                    option.value = jila;
                    option.text = jila;
                    jilaSelect.appendChild(option);
                });
            }
        }

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            const scriptUrl = 'https://script.google.com/macros/s/AKfycbzTeKvIGKl_UFyEsPiAVZrPj-HuZ3XfCN9MV1q9FbmLt5IOVcTUkN4-Z1ATEQN0vErQ/exec';

            fetch(scriptUrl, {
                method: 'POST',
                contentType: 'application/json',
                body: JSON.stringify(data)
            })
            .then(response => response.text())
            .then(message => {
                alert(message);
                document.getElementById('registrationForm').reset();
                displayData();
            })
            .catch(error => {
                console.error('Error:', error);
                alert("डेटा सबमिट करने में त्रुटि!");
            });
        });
    </script>
