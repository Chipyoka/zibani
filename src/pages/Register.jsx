import useRegisterStore from '../store/useRegisterStore';
import { useState } from 'react';
import { supabase } from '../services/supabaseClient'; // We'll configure this later
import Logo from '../assets/zibani-logo.png';

import { NavLink } from 'react-router-dom';

const Register = () => {
  const { form, setFormField, resetForm } = useRegisterStore();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  //set page title
  document.title = 'Registration Form - Zibani';

   const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');
        setLoading(true);

        try {
            // 1. Insert into Supabase table
            const { error: dbError } = await supabase
            .from('registrations')
            .insert([
                {
                full_name: form.name,
                email: form.email,
                role: form.role,
                },
            ]);

            if (dbError) {
            console.error('DB Error:', dbError);
            setStatus('Registration failed. Please try again.');
            return;
            }

            // 2. Trigger Edge Function Email
            const { data, error: emailError } = await supabase.functions.invoke('registration-email', {
            body: {
                name: form.name,
                email: form.email,
            },
            });

            if (emailError) {
            console.error('Email Error:', emailError);
            setStatus('Registered, but email could not be sent.');
            return;
            }

            // 3. Success
            setStatus('Thank you for registering! Please check your email.');
            resetForm();
        } catch (err) {
            console.error('Unexpected Error:', err);
            setStatus('Unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
        };



  return (
        <>
        <section className="flex flex-col justify-center items-center w-screen h-[100dvh]  bg-[url('assets/wavy-bg-shade.svg')] bg-no-repeat bg-bottom bg-scroll bg-contain">

        
            <div className="border border-gray-300 w-[450px] max-w-xl mx-auto bg-gray-50 rounded-lg p-6 shadow-md mt-6">
                <div className="flex items-center justify-center mb-8">
                    <img src={Logo} alt="Zibani Logo" className="h-12" />
                </div>
            <h2 className="text-2xl font-semibold">Register for Updates</h2>
            <p className="text-sm mb-8">Join the community and stay updated</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setFormField('name', e.target.value)}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setFormField('email', e.target.value)}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <select
                name="role"
                value={form.role}
                onChange={(e) => setFormField('role', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                <option value="Resident">Resident of Zambia</option>
                <option value="Tourist">Tourist</option>
                </select>

                    <p className="mt-4 text-left text-xs font-light text-gray-700">
                        <strong> <b>NB:</b></strong> By registering, you agree to receive updates about Zibani and its features. We respect your privacy and will not share your information with third parties.
                    </p>

                <button
                type="submit"
                className="btn-primary rounded-full w-full"
                disabled={loading}
                >
                {loading ? 'Submitting...' : 'Register'}
                </button>

                <NavLink to="/">
                    <p className="hover:underline">Return to Home</p>
                </NavLink>
            </form>

            

            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
            </div>
        </section>
        </>
  );
};

export default Register;
