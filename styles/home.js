// declaring a variable
// this will hold all buttons
var tabButtons=document.querySelectorAll(".tab-container .button-container buttons");
// this will hold all panels the ones i called tabs
var menuTabs=document.querySelectorAll(".tab-container .menu_tab");

// declaring a function
function showPanel(panelIndex, colorCode){
        tabButtons.forEach(function(node){ // its gonna execute 3 times because we have 3 buttons
        node.style.backgroundColor="";
        node.style.color="";
       
        });
        tabButtons[panelIndex].style.backgroundColor=colorCode;
        tabButtons[panelIndex].style.color='white';
            // writing each loop for the panels
            tabPanels.forEach(function(node){ // its gonna execute 3 times because we have 3 buttons
                node.style.display="none";
                        
                });
                
                tabPanels[panelIndex].style.display="block";
                tabPanels[panelIndex].style.backgroundColor=colorCode;

}
// calling the variable showPanel
showPanel(0,'#f44336' );

