(function () {
  emailjs.init("j_6lKRzu3IlE-cpM8");
})();

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById("submit");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;
  
  // Show loading state
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  
  // Send email via EmailJS
  emailjs.send("service_ibn4xfu", "template_vdj3cvc", {
    from_name: name,
    from_email: email,
    mobile_number: mobile,
    message: message,
    to_email: "katiyaranshu297@gmail.com"
  })
  .then(function() {
    // Success
    alert("✅ Message sent successfully! I'll get back to you soon.");
    document.getElementById("contactForm").reset();
    
    // Save to local storage as backup
    saveToLocalStorage(name, email, mobile, message);
    
    // Save to Excel file
    saveToExcel(name, email, mobile, message);
    
  }, function(error) {
    // Error
    alert("❌ Failed to send message. Please try again or contact directly.");
    console.log("EmailJS Error:", error);
  })
  .finally(function() {
    // Reset button
    submitBtn.textContent = "Send";
    submitBtn.disabled = false;
  });
});

// Save messages to local storage as backup
function saveToLocalStorage(name, email, mobile, message) {
  const timestamp = new Date().toISOString();
  const messageData = {
    name: name,
    email: email,
    mobile: mobile,
    message: message,
    timestamp: timestamp
  };
  
  let messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
  messages.push(messageData);
  localStorage.setItem('portfolioMessages', JSON.stringify(messages));
  
  console.log('Message saved locally:', messageData);
}

// Save message to Excel file
function saveToExcel(name, email, mobile, message) {
  const timestamp = new Date().toLocaleString();
  
  // Create new workbook
  const wb = XLSX.utils.book_new();
  
  // Get existing data or create new
  let existingData = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
  
  // Prepare data for Excel
  const excelData = existingData.map(msg => ({
    'Name': msg.name,
    'Email': msg.email,
    'Mobile': msg.mobile,
    'Message': msg.message,
    'Date & Time': new Date(msg.timestamp).toLocaleString()
  }));
  
  // Create worksheet
  const ws = XLSX.utils.json_to_sheet(excelData);
  
  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Messages');
  
  // Generate Excel file and download
  XLSX.writeFile(wb, `Portfolio_Messages_${new Date().toISOString().split('T')[0]}.xlsx`);
}

// Function to export all messages to Excel (for admin use)
function exportMessagesToExcel() {
  const messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
  if (messages.length === 0) {
    alert('No messages to export');
    return;
  }
  
  saveToExcel();
}

// Function to export messages to CSV (for admin use)
function exportMessagesToCSV() {
  const messages = JSON.parse(localStorage.getItem('portfolioMessages') || '[]');
  if (messages.length === 0) {
    alert('No messages to export');
    return;
  }
  
  let csv = 'Name,Email,Mobile,Message,Timestamp\n';
  messages.forEach(msg => {
    csv += `"${msg.name}","${msg.email}","${msg.mobile}","${msg.message}","${msg.timestamp}"\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio_messages.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

// Add export buttons (hidden, for admin use)
if (window.location.search.includes('admin=true')) {
  const exportExcelBtn = document.createElement('button');
  exportExcelBtn.textContent = 'Export Excel';
  exportExcelBtn.onclick = exportMessagesToExcel;
  exportExcelBtn.style.cssText = 'position:fixed;top:10px;right:10px;z-index:9999;background:#00eaff;color:#000;padding:8px;border:none;border-radius:4px;margin-right:10px;';
  document.body.appendChild(exportExcelBtn);
  
  const exportCsvBtn = document.createElement('button');
  exportCsvBtn.textContent = 'Export CSV';
  exportCsvBtn.onclick = exportMessagesToCSV;
  exportCsvBtn.style.cssText = 'position:fixed;top:10px;right:120px;z-index:9999;background:#72dc6d;color:#000;padding:8px;border:none;border-radius:4px;';
  document.body.appendChild(exportCsvBtn);
}
