import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import "../App.css";
const Strokeform = () => {
    const [Gender, setSelectedGender] = useState('');
    const [Hypertension_binary_feature, setHypertension_binary_feature] = useState('');
    const [Heart_disease_binary_feature, setHeart_disease_binary_feature] = useState('');
    const [ever_married, setever_married] = useState('');
    const [work_type, setWorkType] = useState('');
    const [Residence_type, setResidence_type] = useState('');


    return (
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border ">

            <Formik className="text-center"
                initialValues={{ Name: '', Email: '', Gender: '', toggle: false, Age: '', Hypertension_binary_feature: '', Heart_disease_binary_feature: '', ever_married: '', work_type: '', Residence_type: '', avg_glucose_level: '', bmi: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.Name) {
                        errors.Name = 'Required';
                    }
                    if (!values.Email) {
                        errors.Email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
                        errors.Email = 'Invalid Email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                        {/* Your form fields go here, adapt styles as needed */}

                        <div className="flex flex-col gap-6 mb-2">
                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Your Name
                            </legend>
                            <div className="relative h-11 w-full min-w-[200px] mb-4">
                                <Field type="text" name="Name" placeholder="Ramesh" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <ErrorMessage className="text-[#c55f5f]" name="Name" component="div" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 mb-6">
                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Your Email
                            </legend>
                            <div className="relative h-11 w-full min-w-[200px] ">
                                <Field type="text" name="Email" placeholder="abcd@gmail.com" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <ErrorMessage name="Email" component="div" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 mb-6">
                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Age
                            </legend>
                            <div className="relative h-11 w-full min-w-[200px] ">
                                <Field type="number" name="Age" placeholder="32" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <ErrorMessage name="Age" component="div" />
                            </div>
                        </div>



                        <div className="flex flex-col gap-6 mb-6">

                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Gender
                                <div className="flex flex-row items-center gap-x-4">

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                                        <input
                                            type="checkbox"
                                            name="Gender"
                                            value="male"
                                            className="w-4 h-4 text-teal-600 bg-slate-500 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setSelectedGender('male')}
                                        />
                                    </div>

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                                        <input
                                            type="checkbox"
                                            name="Gender"
                                            value="Female"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setSelectedGender('female')}
                                        />
                                    </div>

                                </div>
                            </legend>

                        </div>


                        <div className="flex flex-col gap-6 mb-6">

                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Hypertension History
                                <div className="flex flex-row items-center gap-x-4">

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        <input
                                            type="checkbox"
                                            name="Hypertension_binary_feature"
                                            value="Yes"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setHypertension_binary_feature('Yes')}
                                        />
                                    </div>

                                    <div className="flex items-center gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        <Field
                                            type="checkbox"
                                            name="Hypertension_binary_feature"
                                            value="No"
                                            className="w-4 h-4 text-[#008000] bg-gray-100 border-gray-300 rounded focus:ring-[#008000] dark:focus:ring-[#008000] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setHypertension_binary_feature('No')}
                                        />
                                    </div>

                                </div>
                            </legend>

                        </div>


                        <div className="flex flex-col gap-6 mb-6">

                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Do you have any HeartDisease History
                                <div className="flex flex-row items-center gap-x-4">

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        <input
                                            type="checkbox"
                                            name="HeartDiseaseHistory"
                                            value="Yes"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setHeart_disease_binary_feature('Yes')}
                                        />
                                    </div>

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        <input
                                            type="checkbox"
                                            name="HeartDiseaseHistory"
                                            value="No"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setHeart_disease_binary_feature('No')}
                                        />
                                    </div>

                                </div>
                            </legend>

                        </div>


                        <div className="flex flex-col gap-6 mb-6">

                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Have you ever Married?
                                <div className="flex flex-row items-center gap-x-4">

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        <input
                                            type="checkbox"
                                            name="Married"
                                            value="Yes"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setever_married('Yes')}
                                        />
                                    </div>

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        <input
                                            type="checkbox"
                                            name="Married"
                                            value="No"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setever_married('No')}
                                        />
                                    </div>

                                </div>
                            </legend>

                        </div>


                        <div className="flex flex-col gap-6 mb-6">

                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Work Type
                                <div className="flex flex-row items-center gap-x-4">

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
                                        <input
                                            type="checkbox"
                                            name="JobType"
                                            value="Private"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setWorkType('Private')}
                                        />
                                    </div>

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Government</label>
                                        <input
                                            type="checkbox"
                                            name="JobType"
                                            value="Government"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setWorkType('Government')}
                                        />
                                    </div>

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                                        <input
                                            type="checkbox"
                                            name="JobType"
                                            value="Other"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setWorkType('Other')}
                                        />
                                    </div>

                                </div>
                            </legend>

                        </div>



                        <div className="flex flex-col gap-6 mb-6">

                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Residence Type
                                <div className="flex flex-row items-center gap-x-4">

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Urban</label>
                                        <input
                                            type="checkbox"
                                            name="ResidenceType"
                                            value="Urban"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setResidence_type('Urban')}
                                        />
                                    </div>

                                    <div className="flex items-center m-4 gap-x-2">
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rural</label>
                                        <input
                                            type="checkbox"
                                            name="ResidenceType"
                                            value="Rural"
                                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={() => setResidence_type('Rural')}
                                        />
                                    </div>
                                </div>
                            </legend>

                        </div>




                        <div className="flex flex-col gap-6 mb-6">
                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Average Glucose Level (in mg/dl)
                            </legend>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <Field type="number" name="avg_glucose_level" placeholder="80" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <ErrorMessage name="avg_glucose_level" component="div" />
                            </div>
                        </div>






                        <div className="flex flex-col gap-6 mb-6">
                            <legend className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                                Body Mass Index (weight in kilograms divided by height in meters squared)
                            </legend>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <Field type="number" name="bmi" placeholder="22.5" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                <ErrorMessage name="bmi" component="div" />
                            </div>
                        </div>


                        <Link to="/strokeform" className=" mt-10 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-slate-700 rounded-full hover:text-white group hover:bg-slate-700 ">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-slate-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Predict</span>
                        </Link >


                    </Form>
                )}
            </Formik>
        </div >
    );
};

export default Strokeform;

