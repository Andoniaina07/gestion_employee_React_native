// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
//     // Here, you can implement the logic to submit the form
//     // For simplicity, we'll just show an alert with the form data
//     const formData = {
//       name: name,
//       email: email,
//       message: message
//     };
//     Alert.alert('Form Data', JSON.stringify(formData));
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//         style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
//       />
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
//       />
//       <TextInput
//         placeholder="Message"
//         value={message}
//         onChangeText={setMessage}
//         multiline
//         numberOfLines={4}
//         style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
//       />
//       <Button title="Submit" onPress={handleSubmit}
//        disabled={!name || !email || !message} // désactiver le bouton si les champs ne sont pas remplis
//        />
//     </View>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Mailer from 'react-native-mail';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = () => {
    Mailer.mail({
      subject: 'Contact Form Submission',
      recipients: ['andoniainagiovannielie18@gmail.com'], // Change this to your email address
      body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      isHTML: false,
    }, (error, event) => {
      if (error) {
        Alert.alert('Error', 'Failed to send email. Please try again later.');
      } else {
        Alert.alert('Success', 'Email sent successfully!');
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="Send Email" onPress={handleEmail} />
    </View>
  );
};

export default Contact;


