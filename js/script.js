
// Function to add ticket

  // Function to discard ticket
  function discardTicket() {
    const ticketList = document.getElementById('ticketList');
    // Remove the last ticket item
    ticketList.removeChild(ticketList.lastChild);
  }

  // Event listener for opening modal
  document.getElementById('openModalBtn').addEventListener('click', function() {
    $('#ticketModal').modal('show'); // Activate modal
  });

  // Event listener for discarding ticket
  document.getElementById('discardTicketBtn').addEventListener('click', discardTicket);
