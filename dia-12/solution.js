const validateForm = (formData, registeredUsers) => {
  const requiredFields = ["name", "lastname", "email", "password"];

  const missingFields = requiredFields.filter((field) => !formData[field]);

  if (missingFields.length > 0) {
    const missingFieldsMsg = `Faltan los siguientes campos requeridos: ${missingFields.join(", ")}`;
    throw new Error(missingFieldsMsg);
  } else {
    const isEmailRegistered = registeredUsers.some(
      (user) => user.email === formData.email
    );

    if (isEmailRegistered) {
      throw new Error(
        `Este email ya existe en nuestra base de datos: ${formData.email}`
      );
    } else {
      const newUser = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
      };
      registeredUsers.push(newUser);
      return `Tú registro fue exitoso ${newUser.name} ${newUser.lastname}`;
    }
  }
};
