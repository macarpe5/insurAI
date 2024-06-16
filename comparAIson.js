        function displayComparisonMatrix() {
            var matrix = document.getElementById('comparisonMatrix');
            matrix.innerHTML = ''; // Clear previous data
            
            // Define a generic set of policies
            var policies = [
                {"Company": "Progressive", "Coverage": "Varies", "Price": "Varies", "Deductible": "Varies"},
                {"Company": "State Farm", "Coverage": "Varies", "Price": "Varies", "Deductible": "Varies"},
                {"Company": "GEICO", "Coverage": "Varies", "Price": "Varies", "Deductible": "Varies"},
                {"Company": "Allstate", "Coverage": "Varies", "Price": "Varies", "Deductible": "Varies"}
            ];
            
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