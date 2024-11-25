// document.addEventListener('DOMContentLoaded', function() {
//      const form = document.getElementById('algorithm-form');
//      form.addEventListener('submit', function(event) {
//          event.preventDefault();
 
//          const algorithm = document.querySelector('input[name="algorithm"]:checked').value;
//          let scriptSrc = '';
 
//          if (algorithm === 'gobackn') {
//              scriptSrc = './gobackn.js';
//          } else if (algorithm === 'selectiverepeat') {
//              scriptSrc = './selectiverepeat.js';
//          }
 
//          // Remove the form and display the simulation container
//          const mainContainer = document.querySelector('main.container');
//          mainContainer.innerHTML = ''; // Clear the content
 
//          const simulationContainer = document.createElement('div');
//          simulationContainer.id = 'simulation-container';
//          mainContainer.appendChild(simulationContainer);
 
//          // Dynamically load the selected script
//          const script = document.createElement('script');
//          script.type = 'text/javascript';
//          script.src = scriptSrc;
//          document.body.appendChild(script);
//      });
//  });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('algorithm-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const algorithm = document.querySelector('input[name="algorithm"]:checked').value;
        let scriptSrc = '';

        if (algorithm === 'gobackn') {
            scriptSrc = './gobackn.js';
        } else if (algorithm === 'selectiverepeat') {
            scriptSrc = './selectiverepeat.js';
        }

        // Remove the form and display the simulation container
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = ''; // Clear the content

        const simulationContainer = document.createElement('div');
        simulationContainer.id = 'simulation-container';
        simulationContainer.className = 'simulation-container';
        mainContent.appendChild(simulationContainer);

        // Add a loading spinner
        const loader = document.createElement('div');
        loader.className = 'loader';
        simulationContainer.appendChild(loader);

        // Dynamically load the selected script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptSrc;
        script.onload = function() {
            // Remove the loader once the script is loaded
            loader.remove();
        };
        document.body.appendChild(script);
    });
});


 