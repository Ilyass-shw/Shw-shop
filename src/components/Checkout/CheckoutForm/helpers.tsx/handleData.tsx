import { formValue } from './types';

export const handleData = (
  data: formValue,
  saveData?: (dataToSave: formValue) => void,
): void => {
  // Normally saveData would make an API call to send the form data to the server or do some data processing
  if (saveData) {
    saveData(data);
    // console.log( data);
  }

  alert(
    `This is the extent of this website for now, more pages are yet to be available. Thank you for checking out my work. 
      
    
      Email: ${data.email},
      isBuyerAcceptingMarketing: ${data.buyerAcceptMarketing},
      FirstName: ${data.FirstName},
      LastName: ${data.LastName},
      Address: ${data.Address},
      Address2: ${data.Address2},
      City: ${data.City},
      PhoneNumber: ${data.PhoneNumber},
      Country: ${data.Country},
      `,
  );
};
