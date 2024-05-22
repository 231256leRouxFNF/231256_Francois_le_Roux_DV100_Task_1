document.addEventListener('DOMContentLoaded', (event) => {
  loadTickets();
});

// This lets the user(s) know that there ticket has been added
function addFlightTicket(flightName) {
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.push(flightName);
  localStorage.setItem('tickets', JSON.stringify(tickets));
  alert(`${flightName} added to your tickets`);
}

// This adds and removes the tickets from the cart
function addTicketToList(ticketName) {
  const ticketList = document.getElementById('ticketList');
  const newTicket = document.createElement('li');
  newTicket.className = 'list-group-item d-flex justify-content-between align-items-center';
  newTicket.textContent = ticketName;

  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-danger btn-sm';
  removeButton.textContent = 'Remove';
  removeButton.onclick = () => {
      ticketList.removeChild(newTicket);
      saveTickets();
  };

  newTicket.appendChild(removeButton);
  ticketList.appendChild(newTicket);
}


// This makes sure that the tickets stay displayed on the cart when moving between the pages
function saveTickets() {
  const ticketList = document.getElementById('ticketList');
  const tickets = [];
  for (let i = 0; i < ticketList.children.length; i++) {
      tickets.push(ticketList.children[i].textContent.replace('Remove', '').trim());
  }
  localStorage.setItem('tickets', JSON.stringify(tickets));
}

function loadTickets() {
  const ticketList = document.getElementById('ticketList');
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.forEach(ticket => addTicketToList(ticket));
}
