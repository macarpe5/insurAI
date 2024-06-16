       // Function to add a greeting message when the page loads
        function greetCustomer() {
            var messagesContainer = document.getElementById('messages');
            var aiGreetingDiv = document.createElement('div');
            aiGreetingDiv.textContent = "Welcome to InsurAI! How can I assist you today?";
            aiGreetingDiv.className = 'message ai-message';
            messagesContainer.appendChild(aiGreetingDiv);
        }

        // Call greetCustomer when the window loads
        window.onload = greetCustomer;

        document.getElementById('sendBtn').addEventListener('click', function() {
            let userInput = document.getElementById('userInput').value;
            if (userInput.trim() === "") return;
            appendMessage(userInput, 'user-message');
            document.getElementById('userInput').value = '';
            getBotResponse(userInput);
        });

        function appendMessage(message, sender) {
            let messageDiv = document.createElement('div');
            messageDiv.classList.add('message', sender);
            messageDiv.textContent = message;
            document.getElementById('messages').appendChild(messageDiv);
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
        }

        function getBotResponse(userInput) {
            let botResponse = generateResponse(userInput);
            setTimeout(() => {
                appendMessage(botResponse, 'ai-message');
            }, 500);
        }

        function generateResponse(input) {
            input = input.toLowerCase();
            if (input.includes('home insurance')) {
                return 'Home insurance provides coverage for your home and personal belongings in case of damage or theft.';
            } else if (input.includes('auto insurance')) {
                return 'Auto insurance covers damages to your vehicle and liability for any damages you may cause in an accident.';
            } else if (input.includes('quote')) {
                return 'You can get a quote by providing some details about your home or vehicle. Would you like to start the process?';
            } else if (input.includes('premium')) {
                return 'Insurance premiums are affected by factors such as your location, the value of your property, and your claims history.';
            } else if (input.includes('claim')) {
                return 'To file a claim, contact your insurance provider as soon as possible. Provide them with all the necessary details of the incident and any supporting documentation or evidence.';
            } else if (input.includes('deductible and a premium')) {
                return 'The **deductible** is the amount you pay out of pocket for a claim before the insurance coverage starts. The **premium** is the regular payment you make to keep your insurance policy active.';
            } else if (input.includes('comprehensive auto insurance cover')) {
                return 'Comprehensive auto insurance covers damage to your vehicle that\'s not caused by a collision, such as theft, vandalism, or natural disasters.';
            } else if (input.includes('file a claim')) {
                return 'To file a claim, contact your insurance provider as soon as possible. Provide them with all the necessary details of the incident and any supporting documentation or evidence.';
            } else if (input.includes('factors affect my auto insurance rates')) {
                return 'Several factors can affect your auto insurance rates, including your driving record, the type of vehicle you drive, your age, your gender, and the amount of coverage you choose.';
            } else if (input.includes('change my coverage after purchasing a policy')) {
                return 'Yes, you can usually change your coverage after purchasing a policy. However, it\'s best to discuss any changes with your insurance provider to understand how they might affect your premiums and coverage.';
            } else {
                return 'I\'m sorry, I didn\'t understand that. Can you please rephrase your question or ask something else?';
            }
        }