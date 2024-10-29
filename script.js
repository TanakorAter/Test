function addContent() {
  const textInput = document.getElementById('text-input').value;
  const fileInput = document.getElementById('file-input');
  const contentArea = document.getElementById('content-area');

  const contentItem = document.createElement('div');
  contentItem.className = 'content-item';

  if (textInput) {
      const textElement = document.createElement('p');
      textElement.textContent = textInput;
      contentItem.appendChild(textElement);
  }

  if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileURL = URL.createObjectURL(file);

      if (file.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.src = fileURL;
          contentItem.appendChild(img);
      } else if (file.type.startsWith('video/')) {
          const video = document.createElement('video');
          video.src = fileURL;
          video.controls = true;
          contentItem.appendChild(video);
      }
  }

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'ลบ';
  deleteButton.onclick = function() {
      contentArea.removeChild(contentItem);
  };

  contentItem.appendChild(deleteButton);
  contentArea.appendChild(contentItem);

  // Clear inputs
  document.getElementById('text-input').value = '';
  fileInput.value = '';
}
