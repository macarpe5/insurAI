        // Function to generate a random price between min and max
        function getRandomPrice(min, max) {
            return (Math.random() * (max - min) + min).toFixed(2);
        }

        function displayComparisonMatrix() {
            var matrix = document.getElementById('comparisonMatrix');
            matrix.innerHTML = ''; // Clear previous data
            
            // Define a generic set of policies with random prices
            var policies = [
                {"Company": "Progressive", "Coverage": "Comprehensive", "Price": "$" + getRandomPrice(800, 1200), "Deductible": "$" + getRandomPrice(100, 500)},
                {"Company": "State Farm", "Coverage": "Collision", "Price": "$" + getRandomPrice(700, 1100), "Deductible": "$" + getRandomPrice(100, 500)},
                {"Company": "GEICO", "Coverage": "Liability", "Price": "$" + getRandomPrice(600, 1000), "Deductible": "$" + getRandomPrice(100, 500)},
                {"Company": "Allstate", "Coverage": "Full Coverage", "Price": "$" + getRandomPrice(900, 1300), "Deductible": "$" + getRandomPrice(100, 500)}
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