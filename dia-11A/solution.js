"use strict";

const sendEmail = (email, subject, body) => {
  return new Promise((resolve, reject) => {
    if (!email || !subject || !body) {
      reject(new Error("Error: Faltan campos para enviar el email"));
    } else {
      window.setTimeout(() => {
        const newEmail = {
          email,
          subject,
          body,
        };
        resolve(newEmail);
      }, 2000);
    }
  });
};
