import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='w-full h-screen flex gap-1 text-white justify-center items-center'>
			<SignUp path='/sign-up' routing='path' signInUrl='/sign-in' afterSignUpUrl='/dashboard' />
		</div>
	);
}
