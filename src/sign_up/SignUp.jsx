import { Link } from 'react-router-dom';
import authImage from '../../src/assets/others/authentication1.png';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const {createUser} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }

    return (
        <div className="bg-[#f8f8f8] h-[100vh]">
            <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
                <div className='bg-amber-100 hidden lg:flex justify-center items-center'>
                    <div>
                        <img src={authImage} alt="Authentication" />
                    </div>
                </div>
                <div className='bg-purple-300 flex justify-center flex-col items-center px-5'>
                    <div className='text-center bg-[#f1f1f18c] w-full max-w-[480px] p-[50px] rounded-2xl'>
                        <h1 className='text-4xl font-bold mb-3'>Register</h1>
                        <p>Enter your information to create an account</p>
                        <div className='mt-8'>
                            <form onSubmit={handleSubmit(onSubmit)} action="" className='w-full space-y-5'>
                                <input type="text" {...register("name", { required: true })} placeholder='Name' className='input w-full rounded-[10px] px-5 py-[25px]' />
                                <input type="email" {...register("email", { required: true })} placeholder='Email' className='input w-full rounded-[10px] px-5 py-[25px]' />
                                <input type="password" {...register("password", { required: true })} placeholder='Passsword' className='input w-full rounded-[10px] px-5 py-[25px]' />
                                <input type="submit" value="Login" className='btn btn-primary w-full pt-4 pb-10 rounded-[10px]' />
                            </form>
                        </div>
                        <div className='pt-5'>
                            <p>Already have account? <Link to="/login" className='underline'>Login here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;