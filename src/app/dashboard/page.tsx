/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Navbar from '../../../components/ui/navbar';
import Image from 'next/image';
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from '../../../components/ui/card';
import { Textarea } from '../../../components/ui/textarea';
import React, { useState } from 'react';
import { defaultValues } from '../../types/defaults';
import { formTypes, questionType } from '../../types/types';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { useQuery, useMutation } from '@tanstack/react-query';

const generateQuestions = async (requestData: formTypes): Promise<string> => {
	const response = await fetch('api/questions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestData),
	});
	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(`Request failed: ${response.status} - ${JSON.stringify(errorData)}`);
	}

	const responseData: questionType = await response.json();
	return responseData.questions;
};

const page = () => {
	const [form, setForm] = useState<formTypes>(defaultValues as formTypes);
	const [formSuccess, setFormSuccess] = useState(false);

	const mutation = useMutation((requestData: formTypes) => generateQuestions(requestData));

	const handleOnChange = (event: any) => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	console.log(form);
	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		try {
			await mutation.mutateAsync(form);
			setFormSuccess(true);
		} catch (error) {
			if (error instanceof Error) {
				console.error('An error occurred:', error.message);
			} else {
				console.error('An unknown error occurred.');
			}
		}
	};

	return (
		<div className=' bg-animate w-full h-screen flex text-white flex-col'>
			<Navbar />

			<Image src={'/assets/background/bg-overlay.png'} layout='fill' alt='background overlay' />

			{formSuccess ? (
				<div>Form submitted</div>
			) : (
				<form method='POST' onSubmit={onSubmit} className='flex w-full h-screen items-center justify-center p-2'>
					<Card>
						<CardHeader>
							<CardTitle>Thesis Topic Details</CardTitle>
							<CardDescription>Please fill-up the necessary information about your topic.</CardDescription>
						</CardHeader>
						<CardContent className='flex flex-col gap-4'>
							<div>
								<label htmlFor='content' className='block text-sm font-medium text-white mx-2 mb-1'>
									Content
								</label>
								<Textarea
									className='w-full h-44'
									name='content'
									id='content'
									placeholder='Provide a background of your study...'
									value={form.content}
									onChange={handleOnChange}
									required
								></Textarea>
							</div>
							<div>
								<label htmlFor='numberOfQuestions' className='block text-sm font-medium text-white mx-2 mb-1'>
									Number of Questions
								</label>
								<Input
									name='numberOfQuestions'
									id='numberOfQuestions'
									placeholder='Input a number...'
									type='number'
									value={form.numberOfQuestions}
									onChange={handleOnChange}
									required
								/>
							</div>
						</CardContent>
						<CardFooter>
							<Button type='submit' className='w-full'>
								Submit
							</Button>
						</CardFooter>
					</Card>
				</form>
			)}
		</div>
	);
};

export default page;
