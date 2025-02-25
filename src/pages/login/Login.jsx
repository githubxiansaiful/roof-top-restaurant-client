import { useContext } from 'react';
import authImage from '../../assets/others/authentication1.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
                <div className='bg-red-300 flex justify-center flex-col items-center px-5'>
                    <div className='text-center bg-[#f1f1f18c] w-full max-w-[480px] p-[50px] rounded-2xl'>
                        <h1 className='text-4xl font-bold mb-3'>Login</h1>
                        <p>Enter your username or email to proceed</p>
                        <div className='mt-8'>
                            <form onSubmit={handleLogin} action="" className='w-full space-y-5'>
                                <input type="email" name='email' required placeholder='Email' className='input w-full rounded-[10px] px-5 py-[25px]' />
                                <input type="text" name='password'required placeholder='Passsword' className='input w-full rounded-[10px] px-5 py-[25px]' />
                                <input type="submit" value="Login" className='btn btn-primary w-full pt-4 pb-10 rounded-[10px]' />
                            </form>
                        </div>
                        <div className='pt-5'>
                            <p>Dont have account? <Link to="/register" className='underline'>Create now.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
