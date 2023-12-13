function handleFileInput(event) {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      console.log('Selected file:', file);

      const url = URL.createObjectURL(file);
      console.log(url)

      const source = document.getElementById('localVideo');
      source.src= url;
      
    }
   
}





