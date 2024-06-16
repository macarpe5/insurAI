        function loadFile() {
            var fileInput = document.getElementById('fileInput');
            var file = fileInput.files[0];
            var reader = new FileReader();
            
            reader.onload = function(e) {
                var policies = JSON.parse(e.target.result);
                displayComparisonMatrix(policies);
            };
            
            reader.readAsText(file);
        }

        function displayComparisonMatrix(policies) {
            var matrix = document.getElementById('comparisonMatrix');
            matrix.innerHTML = ''; // Clear previous data
            
            // Create header row
            var header = matrix.insertRow();
            for (var key in policies[0]) {
                header.insertCell().textContent = key.toUpperCase();
            }
            
            // Populate data rows
            policies.forEach(function(policy) {
                var row = matrix.insertRow();
                for (var key in policy) {
                    row.insertCell().textContent = policy[key];
                }
            });
        }