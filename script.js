let selectedRow = null;  
const popup = document.getElementById("popup");


document.querySelectorAll("td.clickable").forEach(cell => {
    cell.addEventListener("click", function(event) {
        selectedRow = this.parentNode; 
        const rect = this.getBoundingClientRect();
        
      
        popup.style.top = rect.bottom + window.scrollY + "px";  
        popup.style.left = rect.left + window.scrollX + "px";   

       
        popup.style.display = "block";

       
        event.stopPropagation();
    });
});


window.addEventListener("click", function(event) {
   
    if (!popup.contains(event.target) && !document.querySelector("table").contains(event.target)) {
        popup.style.display = "none";
    }
});


function changeColor(color) {
    if (selectedRow) {
        
        selectedRow.querySelectorAll("td").forEach(cell => {
            cell.style.color = color; 
        });
    }
    popup.style.display = "none";  
}
