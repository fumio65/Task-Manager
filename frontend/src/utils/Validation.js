export const validateTaskInput = ({ title, description }) => {
    const errors = {
      title: '',
      description: ''
    };
  
    let hasError = false;
  
    if (!title.trim()) {
      errors.title = 'Title is required.';
      hasError = true;
    }
  
    if (description && description.length > 300) {
      errors.description = 'Description is too long (max 300 characters).';
      hasError = true;
    }
  
    return hasError ? errors : null;
  };
  