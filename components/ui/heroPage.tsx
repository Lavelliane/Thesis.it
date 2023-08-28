'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { TypeAnimation } from 'react-type-animation';

export default function HeroPage() {
	const [show, setShow] = useState(false);
	return (
		<div className='bg-animate w-full h-screen flex gap-1 text-white items-center justify-center'>
			<Image src='/assets/background/bg-overlay2.png' layout='fill' alt='background overlay' />
			<div className='m-2 w-fit h-fit rounded-l-[60px] rounded-r-[60px] bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-xl'>
				<div className='flex md:flex-row flex-col-reverse items-center justify-center md:w-[760px] w-full h-[500px] p-2'>
					<div className='flex flex-row md:flex-col md:w-28 w-full md:h-full h-28 items-center justify-evenly md:border-r md:border-t-0 border-t border-white'>
						<a href='#discord'>
							<DiscordLogoIcon className='hover:scale-105 hover:-translate-y-1 transition-transform w-8 h-8' />
						</a>
						<a href='#linkedIn'>
							<LinkedInLogoIcon className='hover:scale-105 hover:-translate-y-1 transition-transform w-8 h-8' />
						</a>
						<a href='#github'>
							<GitHubLogoIcon className='hover:scale-105 hover:-translate-y-1 transition-transform w-8 h-8' />
						</a>
					</div>
					<div className='flex flex-col w-full h-full items-center justify-center md:p-0 p-4'>
						<div className='flex w-fit h-fit items-center justify-center md:scale-100 sm:scale-75 scale-[50%] absolute -translate-y-12'>
							<Image
								className=' h-fit w-fit'
								src={'/assets/sprites/logo-white.png'}
								width={60}
								height={60}
								alt='logo'
							/>
							<div className='w-full'>
								<TypeAnimation
									sequence={['hesis.it', 7000, '', 200, 'his\u00a0is\u00a0it', 7000, '', 200]}
									wrapper='span'
									speed={50}
									repeat={Infinity}
									style={{ fontWeight: 'bold', fontSize: '78px' }}
								/>
							</div>
							{/* <h1 className='md:text-[78px] sm:text-[58px] text-[39px] md:translate-x-0 sm:-translate-x-2 -translate-x-4 font-bold select-none tracking-normal'>
								hesis.it
							</h1> */}
						</div>
						<p className='md:text-lg sm:text-base text-sm font-normal text-center select-none mt-28'>
							Elevate your presentation and excel in your academic journey.
						</p>
						<div className='flex sm:flex-row flex-col gap-4 w-full items-center justify-center mt-6 sm:text-lg	 text-sm'>
							<a
								href='sign-up'
								className='w-fit h-fit px-4 py-2 border border-white rounded-full bg-white text-slate-900 font-bold hover:bg-transparent hover:text-white transition-colors select-none'
							>
								Get Started
							</a>
							<a
								href='sign-in'
								className='w-fit h-fit px-5 py-2 border border-white rounded-full font-bold hover:scale-105 transition-transform select-none'
							>
								Already In
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
