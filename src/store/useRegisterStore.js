import { create } from 'zustand';

const useRegisterStore = create((set) => ({
  form: {
    name: '',
    email: '',
    role: 'Resident',
  },
  setFormField: (field, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [field]: value,
      },
    })),
  resetForm: () =>
    set({
      form: {
        name: '',
        email: '',
        role: 'Resident',
      },
    }),
}));

export default useRegisterStore;
